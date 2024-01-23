import React, { useState } from "react";
import FAQGroup from "./components/FAQGroup";
import SearchBar from "./components/SearchBar";
import "./App.scss";
import data from "./data/02-faq.json";
import { FaqQuestionType } from "./types";

const App: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<FaqQuestionType[]>(data.questions);

  return (
    <div className="app">
      <SearchBar questions={data.questions} setFilteredQuestions={setFilteredQuestions} />
      <div className="faq-groups">
        <FAQGroup columnType="left" filteredQuestions={filteredQuestions} />
        <FAQGroup columnType="right" filteredQuestions={filteredQuestions} />
      </div>
    </div>
  );
};

export default App;
