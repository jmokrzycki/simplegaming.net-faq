import React, { useState } from "react";
import FAQGroup from "./components/FAQGroup";
import SearchBar from "./components/SearchBar";
// import "./styles/App.scss";
import data from "./data/02-faq.json";
import FilteredQuestions from "./context";
import { FAQItemType } from "./types";

const App: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<FAQItemType[]>([]);

  return (
    <div className="app">
      <FilteredQuestions.Provider value={{ filteredQuestions, setFilteredQuestions }}>
        <SearchBar data={data} />
        <FAQGroup columnType="left" />
        {/* <FAQGroup searchTerm={searchTerm} columnType="right" /> */}
      </FilteredQuestions.Provider>
    </div>
  );
};

export default App;
