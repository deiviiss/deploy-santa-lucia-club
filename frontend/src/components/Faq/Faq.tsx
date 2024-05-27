"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
    {
        question: "¿Cuáles son nuestros servicios?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        question: "¿Qué actividades ofrece el club?", // More specific question
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        question: "¿Cómo inscribirse al club?", // More specific question
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
];

export default function App() {
  return (
    <Accordion>
      {faqData.map((item, index) => (
        <AccordionItem key={index} aria-label={item.question} title={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
