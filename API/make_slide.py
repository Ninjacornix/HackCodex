import json
import openai
import os

from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

template1 = json.load(open("template1.json", "r"))


def make_TitleSlide():
    return json.dumps(template1[0])


def make_TextSlide():
    return json.dumps(template1[1])


def make_ImageHalfSlide():
    return json.dumps(template1[2])


def make_ImageFullSlide():
    return json.dumps(template1[3])


def make_ImageQuarterSlide():
    return json.dumps(template1[4])


def prompt_n_texts(template, title, theme, summary, slide_json, template_name):

    n = template.count("$text$")

    PROMPT = """
        Imagine youre creating a presentation slide.

        Create text for """ + template_name + """ template.

        """ + slide_json + """

        Title: """ + title + """

        Theme: """ + theme + """

        Summary: """ + summary + """

        output """ + str(n) + """ lines only. nothing else.

        MAX CHARACTERS PER LINE: 100
    """

    # print(PROMPT)

    output = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": PROMPT
            },
        ]
    )

    # print(output)

    output = output["choices"][0]["message"]["content"]

    output = output.split("\n") + [""] * 10

    out = template

    for i in range(n):
        idx = out.find("$text$")

        out = out[:idx] + output[i] + out[idx + 6:]

    return out


def make_slide(title, theme, summary, slide_json):

    template = ""

    if slide_json['type'] == "titleSlide":
        template = make_TitleSlide()
    elif slide_json['type'] == "textSlide":
        template = make_TextSlide()
    elif slide_json['type'] == "imageHalfSlide":
        template = make_ImageHalfSlide()
    elif slide_json['type'] == "imageFullSlide":
        template = make_ImageFullSlide()
    elif slide_json['type'] == "imageQuarterSlide":
        template = make_ImageQuarterSlide()
    else:
        return "error"

    return prompt_n_texts(template, title, theme, summary, slide_json, theme)


if __name__ == "__main__":
    print(prompt_n_texts(make_TitleSlide(), "AI dangers for biritsh people",
          "ai dangers for britain, the best country in the world", "what even to add, britain rocks", "slide_json", "TitleSlide"))
