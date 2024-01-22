import React from "react";
import FAQItem from "./FAQItem";
import data from "../data/02-faq.json";
import { FaqQuestionType } from "../types";
// import "../styles/FAQGroup.scss";

type FAQGroupProps = {
  columnType: "left" | "right";
  filteredQuestions: FaqQuestionType[];
};

const FAQGroup: React.FC<FAQGroupProps> = ({ columnType, filteredQuestions }) => {
  const leftGroupIds = data.groups[columnType].map((group) => group.id);
  const questionsBySide = filteredQuestions.filter((question) => leftGroupIds.includes(question.groupId));

  return (
    <div className={`faq-group faq-group-${columnType}`}>
      {questionsBySide.map((question) => (
        <FAQItem key={question.title} title={question.title} content={question.content} />
      ))}
    </div>
  );
};

export default FAQGroup;
