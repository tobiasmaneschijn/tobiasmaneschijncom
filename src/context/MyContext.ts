import React, { ReactPropTypes, createContext } from "react";

type MyContextType = {
  showIntroduction: boolean;
  setShowIntroduction: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

};

export const MyContext = createContext<MyContextType>({
  showIntroduction: true,
  setShowIntroduction: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
});
