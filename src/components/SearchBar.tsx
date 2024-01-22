import React, { useContext } from "react";
import { FAQItemType } from "./../types";
import FilteredQuestions from "./../context";
// import "../styles/SearchBar.scss";

type SearchBarProps = {
  data: { questions: FAQItemType[] }; // Assuming data structure
};

function fullTextSearch(data: FAQItemType[], searchTerm: string) {
  const searchTerms = searchTerm.trim().split(/\s+/);

  return data.filter((item: FAQItemType) => {
    const regexPattern = searchTerms.map((term: string) => `(?=.*${term})`).join("");
    const searchRegex = new RegExp(regexPattern, "i"); // 'i' oznacza ignorowanie wielkości liter

    return searchRegex.test(item.title) || searchRegex.test(item.content);
  });
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const { setFilteredQuestions } = useContext(FilteredQuestions);
  let questions = data.questions;

  const setSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFilteredQuestions(fullTextSearch(questions, e.target.value));
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={setSearchTerm} />
    </div>
  );
};

export default SearchBar;
