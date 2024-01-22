import { createContext } from "react";
import { FAQItemType } from "../types";
import React from "react";

type FilteredQuestionsContextType = {
  filteredQuestions: FAQItemType[];
  setFilteredQuestions: React.Dispatch<React.SetStateAction<FAQItemType[]>>;
};

const defaultState = {
  filteredQuestions: [],
  setFilteredQuestions: () => {},
};

const FilteredQuestions = createContext<FilteredQuestionsContextType>(defaultState);

export default FilteredQuestions;
