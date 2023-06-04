import json
import os
import openai

from dotenv import load_dotenv
load_dotenv()


openai.api_key = os.getenv("OPENAI_API_KEY")


def prompt_toc(theme, title, context=""):
    for x in stream(theme, title, context):
        yield x


def TOC_PROMPT(theme, title, context=""):
    return """

    Here is some context for you:
    
    """ + context + """

    Make me a presentation with the theme """ + theme + """ and title """ + title + """.
    The presentation should be in JSON format, don't output anything else, just the JSON.
    It should have sections and each section should have a few slides indexed by their name in JSON structure.
    And each slide should have a title and a short description along with slide type which can be one of the following:
    
    here are interfaces.

    export interface Presentation {
        title: string;
        sections: Section[];
    }

    export interface Section {
        title: string;
        slides: Slide[];
    }

    export interface Slide {
        type: SlideType;
        title: string;
    }

    export interface TextSlide extends Slide {
        description: string;
    }

    export interface ImageHalfSlide extends Slide {
        description: string;
        image_detailed_desc: string;
    }

    export interface ImageFullSlide extends Slide {
        image_detailed_desc: string;
    }

    export interface ImageQuarterSlide extends Slide {
        description: string;
        image_detailed_desc: string;
    }

    export enum SlideType {
        TitleSlide = "titleSlide",
        TextSlide = "textSlide",
        ImageHalfSlide = "imageHalfSlide",
        ImageFullSlide = "imageFullSlide",
        ImageQuarterSlide = "imageQuarterSlide",
    }

    Make image_detailed_desc as clear as possible, using style descriptions.

    The presentation should have at least 3 sections and each section should have at least 3 slides.
    The presentation should have at least 3 different slide types.
    But more are welcomed.

    All descriptions should be max 10 to 15 words long, one sentence.
"""


def stream(theme, title, context):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": TOC_PROMPT(theme, title, context)
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

        yield json_closer(txt)

    yield json_closer(''.join([m.get('content', '')
                               for m in collected_messages]))


def json_closer(src):
    open_chars = []
    in_quoted_string = False
    i = 0
    while i < len(src):
        this_char = src[i]
        if in_quoted_string:
            if this_char == '\\':
                i += 1
            elif this_char == '"':
                in_quoted_string = False
        else:
            if this_char in ('{', '['):
                open_chars.append(this_char)
            elif this_char == '}':
                if open_chars.pop() != '{':
                    raise ValueError('Invalid JSON')
            elif this_char == ']':
                if open_chars.pop() != '[':
                    raise ValueError('Invalid JSON')
            elif this_char == '"':
                in_quoted_string = True
        i += 1

    if in_quoted_string:
        src += '"'

    if len(open_chars) != 0 and open_chars[-1] == '{':
        start_block = src.rfind('{')
        segment = src[start_block:].replace('\\"', '').split('"')
        if len(segment) == 3:
            if segment[2].strip() == ':':
                src += '""'
            else:
                src += ': ""'

    while open_chars:
        open_char = open_chars.pop()
        if open_char:
            close_char = '}' if open_char == '{' else ']'
            src += close_char

    try:
        return json.loads(src)
    except Exception as e:
        return {}
