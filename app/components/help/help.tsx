"use client";
import { useState } from "react";
import { Button, ButtonAlt } from "../buttons/buttons";
import FaqAccordion from "../faq/Faq";
import Contact from "../contact/contact";

const Help = () => {
  const [faq, setFaq] = useState(true);

  const handleFaqContactToggle = () => {
    setFaq(!faq);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-help bg-secondaryColor text-textPrimary py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl">
      <div className="flex gap-4 items-center justify-center mb-6">
        {faq ? (
          <ButtonAlt buttonText="FAQs" onClick={handleFaqContactToggle} />
        ) : (
          <Button buttonText="FAQs" onClick={handleFaqContactToggle} />
        )}
        {faq ? (
          <Button buttonText="Contact Us" onClick={handleFaqContactToggle} />
        ) : (
          <ButtonAlt buttonText="Contact Us" onClick={handleFaqContactToggle} />
        )}
      </div>
      {faq ? (
        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
          <FaqAccordion />
        </div>
      ) : (
        <Contact />
      )}
    </div>
  );
};

export default Help;
