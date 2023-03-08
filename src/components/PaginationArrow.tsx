

import React from 'react'
import Lottie from "lottie-react";
import arrowDownAnimation from "../assets/arrowdown.json";

type Props = {
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}

const PaginationArrow = ({currentPage, setCurrentPage}: Props) => {
  return (
    <div
    className="absolute bottom-8 left-0 right-0 flex justify-center hover:cursor-pointer"
    onClick={() => setCurrentPage(currentPage + 1)}
  >
        <Lottie className=" w-16" animationData={arrowDownAnimation} />
    
  </div>
  )
} 

export default PaginationArrow