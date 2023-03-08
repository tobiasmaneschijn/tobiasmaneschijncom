import linkedinIcon from "../assets/linkedin.svg";
import Lottie from "lottie-react";
import arrowDownAnimation from "../assets/arrowdown.json";
import { PaginationProps } from "./Pagination";
import PaginationArrow from "../components/PaginationArrow";
import Student from "../assets/student.json"

export const SecondPage = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="fade-in p-8  gap-5 flex flex-col">
      <h1 className="text-3xl  font-bold text-center">I’m a software engineering student looking for an internship this fall.</h1>
      <div className=" flex flex-col gap-2 text-center items-center">
	  <Lottie className=" w-32" animationData={Student}  />
       
      </div>
    </div>
  );
};
