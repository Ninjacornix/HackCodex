from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver import Chrome
from selenium import webdriver
import time
import openai
import os

from gensim.summarization.summarizer import summarize as gensim_summarize

from dotenv import load_dotenv
load_dotenv()


openai.api_key = os.getenv("OPENAI_API_KEY")


WAIT = 2


def TLDRLONG_PROMPT(text):
    return """
        TL;DR: """ + text + """

        Summarize this in about 10-15 condensed scientific sentences without any style.
    """


def get_summarised(url):

    whole = get_whole(url)

    yield "[got data]"

    # print(whole)

    sum1 = gensim_summarize(whole, word_count=2000)

    yield "[gensim done]"

    for x in summarize(sum1):
        yield x


def get_whole(url):

    options = webdriver.ChromeOptions()
    options.add_argument("--headless")

    options.page_load_strategy = 'none'

    chrome_path = ChromeDriverManager().install()
    chrome_service = Service(chrome_path)

    driver = Chrome(options=options, service=chrome_service)
    # driver.implicitly_wait(5)

    driver.get(url)
    time.sleep(WAIT)

    text = driver.find_element(By.TAG_NAME, "body").text

    driver.quit()

    return text


def summarize(text_):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": TLDRLONG_PROMPT(text_)
            },
        ],
        stream=True
    )

    collected_chunks = []
    collected_messages = []

    for chunk in completion:
        collected_chunks.append(chunk)
        chunk_message = chunk['choices'][0]['delta']
        collected_messages.append(chunk_message)

        txt = ''.join([m.get('content', '')
                       for m in collected_messages])

        yield txt

    yield ''.join([m.get('content', '')
                   for m in collected_messages])


if __name__ == "__main__":
    for x in get_summarised("https://en.wikipedia.org/wiki/Artificial_intelligence"):
        print(x)
