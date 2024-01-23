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
  return (
    <div className={`faqGroup faqGroup-${columnType}`}>
      {data.groups[columnType].map((group) => (
        <React.Fragment key={group.id}>
          <h2 className="group-name">{group.name}</h2>
          {filteredQuestions
            .filter((question) => question.groupId === group.id)
            .map((question) => (
              <FAQItem key={question.title} title={question.title} content={question.content} />
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FAQGroup;
