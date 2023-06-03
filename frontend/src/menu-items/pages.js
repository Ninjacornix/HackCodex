// assets
import { IconKey } from '@tabler/icons';
import axios from 'axios';

import {useState, useEffect} from 'react';

// constant
const icons = {
  IconKey
};

/* const [listening, setListening] = useState(false);
const [process, setProcess] = useState({});
const [message, setMessage] = useState({});

const getData = async () => {
  const status = listening;
  if (!status) {
    //const event = new EventSource('');
    event.onmessage = e => {
      const parsedData = JSON.parse(e.data);
      switch (parsedData.type) {
        case "init-connection":
          setProcess(parsedData.processId);
          break;
        case "message":
          setMessage(parsedData.message);
          break;
      }
    };
  } else {
    setProcess({});
    setMessage({});
  }

  setListening(!status);
}; */

const pages = {
  "title": "uwwwuuu",
  "sections": [
    {
      "title": "Introduction",
      "slides": [
        {
          "type": "titleSlide",
          "title": "What is AI?"
        },
        {
          "type": "textSlide",
          "title": "Definition of AI",
          "description": "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems."
        },
        {
          "type": "imageHalfSlide",
          "title": "Types of AI",
          "description": "There are two types of AI: weak/narrow AI and strong/general AI.",
          "image_detailed_desc": "Weak/narrow AI is designed to perform a specific task, like playing chess or recognizing speech. Strong/general AI, on the other hand, is designed to perform any intellectual task that a human can."
        }
      ]
    },
    {
      "title": "Applications of AI",
      "slides": [
        {
          "type": "titleSlide",
          "title": "How is AI used today?"
        },
        {
          "type": "textSlide",
          "title": "Real-world Examples of AI",
          "description": "AI is used to enhance many facets of our daily lives, including healthcare, finance, and customer service."
        },
        {
          "type": "imageFullSlide",
          "title": "AI and Healthcare",
          "image_detailed_desc": "AI is being used to diagnose cancer, identify genetic disorders, and even detect heart disease before symptoms appear."
        }
      ]
    },
    {
      "title": "Future of AI",
      "slides": [
        {
          "type": "titleSlide",
          "title": "AI and the Future"
        },
        {
          "type": "textSlide",
          "title": "Challenges of AI",
          "description": "As AI becomes more advanced, there are concerns about its impact on employment, privacy, and security."
        },
        {
          "type": "imageQuarterSlide",
          "title": "AI and Jobs",
          "description": "Some jobs might become obsolete with the rise of AI, but new jobs will also be created.",
          "image_detailed_desc": "For example, AI engineers, data analysts, and machine trainers will be in high demand in the future."
        }
      ]
    }
  ]
};

export default pages;
