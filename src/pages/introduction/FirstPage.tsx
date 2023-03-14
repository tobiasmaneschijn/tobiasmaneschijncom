import linkedinIcon from "../../assets/linkedin.svg";
import PaginationArrow from "../../components/PaginationArrow";
import WavingHand from "../../assets/wavinghand.json"

import { PaginationProps } from "./Pagination";
import Lottie from "lottie-react";
export const FirstPage = ({ currentPage, setCurrentPage }: PaginationProps) => {
  return (
    <div className="h-screen w-screen justify-center items-center bg-transparent text-white fade-in p-8  gap-5 flex flex-col">
      <h1 className="text-3xl font-bold text-center">
        Hi! 
      </h1>
      <h1 className="text-3xl font-bold text-center">I'm Tobias. Pleased to meet you!</h1>
      <h1 className="text-3xl font-bold text-center">Welcome to my little home on the wild wild web.</h1>
	  <Lottie className=" w-32" animationData={WavingHand}  />
    </div>
  );
};

