import React from "react";
import FAQItem from "./FAQItem";
import data from "../data/02-faq.json";
import { FaqQuestionType } from "../types";
import "../styles/FAQGroup.scss";

type FAQGroupProps = {
  columnType: "left" | "right";
  filteredQuestions: FaqQuestionType[];
};

const FAQGroup: React.FC<FAQGroupProps> = ({ columnType, filteredQuestions }) => {
  const groups = data.groups[columnType].map((group) => ({
    ...group,
    questions: filteredQuestions.filter((question) => question.groupId === group.id),
  }));

  return (
    <div className={`faqGroup faqGroup-${columnType}`}>
      {groups.map((group) => (
        <React.Fragment key={group.id}>
          <h2 className="group-name">{group.name}</h2>
          {group.questions.map((question) => (
            <FAQItem key={question.id} title={question.title} content={question.content} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FAQGroup;
