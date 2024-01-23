import React, { useState } from "react";
import "../styles/FAQItem.scss";

interface FAQItemProps {
  title: string;
  content: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqItem">
      <div className={`faq-title ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div className={`faq-content ${isOpen ? "open" : ""}`} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default FAQItem;
