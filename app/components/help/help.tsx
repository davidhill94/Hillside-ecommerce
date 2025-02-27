"use client";
import { useState } from "react";
import { Button } from "../buttons/buttons";
import FaqAccordion from "../faq/Faq";
import Contact from "../contact/contact";

const Help = () => {
  const [faq, setFaq] = useState(true);

  const handleFaqContactToggle = () => {
    setFaq(!faq);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-help w-full bg-secondaryColor text-textPrimary py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl">
      <div className="flex gap-4 items-center justify-center mb-6">
        {faq ? (
          <Button buttonText="FAQs" onClick={handleFaqContactToggle} outline={1} />
        ) : (
          <Button buttonText="FAQs" onClick={handleFaqContactToggle} />
        )}
        {faq ? (
          <Button buttonText="Contact Us" onClick={handleFaqContactToggle} />
        ) : (
          <Button buttonText="Contact Us" onClick={handleFaqContactToggle} outline={1} />
        )}
      </div>
      <hr className={`${faq ? "mb-2" : "mb-6"} w-full md:w-2/3 lg:w-1/2 text-light-secondary`} />
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
