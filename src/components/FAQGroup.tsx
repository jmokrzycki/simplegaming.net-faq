import React, { useContext } from "react";
import FilteredQuestions from "../context";
import FAQItem from "./FAQItem";
// import "../styles/FAQGroup.scss";

interface FAQGroupProps {
  columnType: "left" | "right";
}

const FAQGroup: React.FC<FAQGroupProps> = ({ columnType }) => {
  const { filteredQuestions } = useContext(FilteredQuestions);

  return (
    <div className={`faq-group faq-group-${columnType}`}>
      {filteredQuestions.map((question) => (
        <FAQItem key={question.title} id={2} title={question.title} content={question.content} />
      ))}
    </div>
  );
};

export default FAQGroup;
