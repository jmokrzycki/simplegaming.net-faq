import React, { useEffect } from "react";
import { FaqQuestionType } from "./../types";
import "../styles/SearchBar.scss";

type SearchBarProps = {
  data: { questions: FaqQuestionType[] };
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

const SearchBar: React.FC<SearchBarProps> = ({ data, setFilteredQuestions }) => {
  let questions = data.questions;

  useEffect(() => {
    setFilteredQuestions(questions);
  }, []);

  const setSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredQuestions(fullTextSearch(questions, e.target.value));
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={setSearchTerm} />
    </div>
  );
};

export default SearchBar;
