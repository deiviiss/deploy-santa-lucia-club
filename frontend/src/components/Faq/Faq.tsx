"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "¿Cuáles son los horarios del club?",
    answer: "Nuestro club está abierto de lunes a viernes de 9:00 a 21:00, y los fines de semana de 10:00 a 18:00."
  },
  {
    question: "¿El club ofrece algún programa para niños?",
    answer: "Sí, ofrecemos una variedad de programas para niños, incluyendo clases de natación, campamentos de verano y actividades deportivas."
  },
  {
    question: "¿Qué necesito para registrarme en el club?",
    answer: "Para registrarte en el club, necesitarás completar un formulario de inscripción y proporcionar una identificación válida."
  }
];

export function Faq() {
  return (
    <div className="flex flex-col items-center p-8 mt-16 mb-20 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#030712]">Preguntas frecuentes</h1>
      <div className="w-full">
        {faqData.map((item, index) => (
          <Accordion key={index} className="w-full mb-4 bg-white rounded shadow">
            <AccordionItem
              aria-label={item.question}
              title={
                <span
                  style={{
                    color: "#175F70"
                  }}
                >
                  {item.question}
                </span>
              }
              className="px-4 py-2"
            >
              <div
                style={{
                  color: "#175F70"
                }}
                className="px-4 py-2"
              >
                {item.answer}
              </div>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}