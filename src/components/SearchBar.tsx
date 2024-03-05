import React from "react";
import { FaqQuestionType } from "./../types";
import "../styles/SearchBar.scss";

type SearchBarProps = {
  questions: FaqQuestionType[];
  setFilteredQuestions: (questions: FaqQuestionType[]) => void;
};

function fullTextSearch(data: FaqQuestionType[], searchTerm: string) {
  const searchTerms = searchTerm.trim().split(/\s+/);

  return data.filter((item: FaqQuestionType) => {
    const regexPattern = searchTerms.map((term: string) => `(?=.*${term})`).join("");
    const searchRegex = new RegExp(regexPattern, "i");

    return searchRegex.test(item.title) || searchRegex.test(item.content);
  });
}

const SearchBar: React.FC<SearchBarProps> = ({ questions, setFilteredQuestions }) => {
  const setSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredQuestions(fullTextSearch(questions, e.target.value));
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={setSearchTerm} aria-label="Search FAQ" />
    </div>
  );
};

export default SearchBar;
