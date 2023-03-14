import { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';
import useLocalStorage from './useLocalStorageState';


// used to setup the states of the context
export function useInitializeContext() {
  const [showIntroduction, setShowIntroduction] = useLocalStorage("show_introduction", true);
  const [currentPage, setCurrentPage] = useState(0);
return {
    showIntroduction,
    setShowIntroduction,
    currentPage,
    setCurrentPage,
  };
}



export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}


