"use client";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FaqData } from "./FaqData";

interface Option 
    { 
        item: string, 
        index: number; 
    } 

export default function FaqAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
        {FaqData.map((item, index) => {
            return (
                <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={item.question}>
        {item.answer}
      </AccordionItem>
            )
        })}
    </Accordion>
  );
}