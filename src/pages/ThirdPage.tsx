import linkedinIcon from "../assets/linkedin.svg";
import { PaginationProps } from "./Pagination";
import PaginationArrow from "../components/PaginationArrow";
import Lottie from "lottie-react";
import Gear from "../assets/gear.json"

export const ThirdPage = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className=" fade-in p-8  gap-5 flex flex-col">
      <h1 className="text-3xl  font-bold text-center">I love coding, cooking, design and music</h1>
      <div className="flex flex-col gap-2 text-center items-center">
	    <Lottie className=" w-32" animationData={Gear}  />
       
      </div>
      
    </div>
  );
};
