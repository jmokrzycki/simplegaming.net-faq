import React, { useState } from "react";
// import "../styles/FAQItem.scss";

interface FAQItemProps {
  title: string;
  content: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="faq-content" dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
};

export default FAQItem;
