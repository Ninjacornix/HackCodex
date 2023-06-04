from prompt_toc import prompt_toc
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

        Summarize this in about 10-15 condensed scientific sentences without any style and without
        missing out on information. The summary should be in plain text format, don't output anything else, just the text.
    """


def get_summarised(text, urls):

    whole = text + "\n\n"

    success = []
    failed = []

    for url in urls:
        try:
            whole += get_whole(url) + "\n\n"

            success.append(url)
        except:
            failed.append(url)

    yield "[got data from " + str(len(success)) + " urls]"
    yield "[failed to get data from " + ", ".join(failed) + "]"

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

    # text = open(
    #     "/Users/nitkonitkic/Documents/HackCodex/test_cases/crime_and_punishment.md").read()

    # summary = "Former student Raskolnikov plans and commits the murder of a pawnbroker and her sister for money. He faints during questioning by the police and becomes a suspect. He falls ill while attempting to conceal his guilt, but eventually confesses to Sonya, a friend of a victim, and is sent to prison for eight years. Throughout the story, he meets characters that expose societal injustices and offer moral guidance. Svidrigailov, a lecherous man, commits suicide after being rejected by Dunya, Raskolnikov's sister, who ultimately marries Razumikhin. Raskolnikov eventually expresses remorse for his crime and develops a strong bond with Sonya."

    for x in get_summarised("", ["http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html"]):
        print(x)
        summary = x

    for x in prompt_toc("Presentation about bee movie",  "Crime and punishment", summary):
        print(x)
