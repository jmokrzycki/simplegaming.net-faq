import React, { useState, useEffect } from "react";
import "../styles/FAQItem.scss";
import { useLocation, useNavigate } from "react-router-dom"; // zakładając, że używasz react-router

interface FAQItemProps {
  title: string;
  content: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      navigate(`#${title}`);
    } else {
      navigate("#");
    }
  };

  useEffect(() => {
    const currentHash = decodeURIComponent(location.hash.substring(1));
    if (title === currentHash) {
      setIsOpen(true);
    }
  }, [location.hash, title]);

  return (
    <div className="faqItem">
      <div className={`faq-title ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        {title}
      </div>
      <div className={`faq-content ${isOpen ? "open" : ""}`} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default FAQItem;
