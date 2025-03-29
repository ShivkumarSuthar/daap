import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  { question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Sed do eiusmod tempor incididunt?", answer: "Ut labore et dolore magna aliqua." },
  { question: "Ut enim ad minim veniam?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Duis aute irure dolor in reprehenderit?", answer: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { question: "Excepteur sint occaecat cupidatat non proident?", answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { question: "Sed do eiusmod tempor incididunt?", answer: "Ut labore et dolore magna aliqua." },
  { question: "Ut enim ad minim veniam?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Duis aute irure dolor in reprehenderit?", answer: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { question: "Excepteur sint occaecat cupidatat non proident?", answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq__wrapper">
      <h2 className="text-center faq__title">Frequently Asked Questions</h2>
      <div className="faq__container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq__item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq__question">
              {faq.question}
              <span className="faq__icon">{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {openIndex === index && <div className="faq__answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
