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
    <section className={`faqGroup faqGroup-${columnType}`} aria-labelledby={`${columnType}-faq-heading`}>
      {groups.map((group) => (
        <React.Fragment key={group.id}>
          <h2 id={`${columnType}-faq-heading`} className="group-name">
            {group.name}
          </h2>
          <ul className="faq-list" role="list">
            {group.questions.map((question) => (
              <FAQItem key={question.id} title={question.title} content={question.content} />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
};

export default FAQGroup;
