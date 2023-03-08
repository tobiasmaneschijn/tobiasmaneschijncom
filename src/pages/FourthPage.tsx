import linkedinIcon from "../assets/linkedin.svg";
import { PaginationProps } from "./Pagination";
import PaginationArrow from "../components/PaginationArrow";

export const FourthPage = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="fade-in  p-8  gap-5 flex flex-col">
      <h1 className="text-3xl font-bold text-center">Do you want to connect with me?</h1>
      <div className="flex flex-col gap-2 text-center items-center">
        <a
          className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:text-blue-800  transition-all duration-200 "
          href="https://www.linkedin.com/in/nyhaalm/"
        >
          Yeah! 
        </a>
        <a
          className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:text-blue-800  transition-all duration-200 "
          href="https://www.linkedin.com/in/nyhaalm/"
        >
          Nope!
        </a>
      </div>
     
    </div>
  );
};
