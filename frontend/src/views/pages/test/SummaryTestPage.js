import { Button, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFetchSummary } from 'services/summarize.service';

const SummaryTestPage = () => {
  const fetchSummary = useFetchSummary();
  const pres = useSelector((state) => state.presentation);

  return (
    <div>
      <div>{JSON.stringify(pres.summary)}</div>
      <Button
        onClick={() => {
          fetchSummary(
            pres.text || '',
            pres.urls || ['https://en.wikipedia.org/wiki/Competitive_programming', 'https://en.wikipedia.org/wiki/Artificial_intelligence']
            // '',
            // `Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by humans or by other animals. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs.
            //     AI applications include advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art), automated decision-making, and competing at the highest level in strategic game systems (such as chess and Go).
            //     As machines become increasingly capable, tasks considered to require "intelligence" are often removed from the definition of AI, a phenomenon known as the AI effect.[3] For instance, optical character recognition is frequently excluded from things considered to be AI, having become a routine technology.
            //     Artificial intelligence was founded as an academic discipline in 1956, and in the years since it has experienced several waves of optimism,[5][6] followed by disappointment and the loss of funding (known as an "AI winter"),[7][8] followed by new approaches, success, and renewed funding.[6][9] AI research has tried and discarded many different approaches, including simulating the brain, modeling human problem solving, formal logic, large databases of knowledge, and imitating animal behavior. In the first decades of the 21st century, highly mathematical and statistical machine learning has dominated the field, and this technique has proved highly successful, helping to solve many challenging problems throughout industry and academia.`,
          );
        }}
      >
        Start fetch Summary
      </Button>
    </div>
  );
};

export default SummaryTestPage;
