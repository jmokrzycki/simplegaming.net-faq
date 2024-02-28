import React, { useState, useEffect, useCallback } from "react";
import "../styles/FAQItem.scss";
import { useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

interface FAQItemProps {
  title: string;
  content: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sanitizedContent = DOMPurify.sanitize(content);

  const handleToggle = useCallback(() => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    navigate(newIsOpen ? `#${title}` : "#");
  }, [isOpen, navigate, title]);

  useEffect(() => {
    const currentHash = decodeURIComponent(location.hash.substring(1));
    if (title === currentHash) {
      setIsOpen(true);
    }
  }, [location.hash, title]);

  return (
    <li className="faqItem">
      <div
        className={`faq-title ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
        tabIndex={0}
        aria-expanded={isOpen}
        role="button"
        aria-controls={`faq-content-${title}`}
      >
        {title}
      </div>
      <div
        id={`faq-content-${title}`}
        className={`faq-content ${isOpen ? "open" : ""}`}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </li>
  );
};

export default FAQItem;
