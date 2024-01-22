import React, { useState } from "react";
import FAQGroup from "./components/FAQGroup";
import SearchBar from "./components/SearchBar";
// import "./styles/App.scss";
import data from "./data/02-faq.json";
import { FaqQuestionType } from "./types";

const App: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<FaqQuestionType[]>([]);

  return (
    <div className="app">
      <SearchBar data={data} setFilteredQuestions={setFilteredQuestions} />
      <FAQGroup columnType="left" filteredQuestions={filteredQuestions} />
      <FAQGroup columnType="right" filteredQuestions={filteredQuestions} />
    </div>
  );
};

export default App;
