import linkedinIcon from "../assets/linkedin.svg";
import PaginationArrow from "../components/PaginationArrow";

import { PaginationProps } from "./Pagination";
export const FirstPage = ({ currentPage, setCurrentPage }: PaginationProps) => {
  return (
    <div className="h-screen w-screen justify-center bg-transparent text-white fade-in p-8  gap-5 flex flex-col">
      <h1 className="text-3xl font-bold text-center">
        Hi! 
      </h1>
      <h1 className="text-3xl font-bold text-center">I'm Tobias. Pleased to meet you!</h1>
      <h1 className="text-3xl font-bold text-center">Welcome to my little home on the wild wild web.</h1>

    </div>
  );
};
const OldFirstPage = ({ currentPage, setCurrentPage }: PaginationProps) => {
  return (
    <div className=" fade-in p-8  gap-5 flex flex-col">
      <h1 className="text-3xl font-bold text-center">
        Tobias Nyholm Maneschijn
      </h1>
      <div className="flex flex-col gap-2 text-center items-center">
        <p>Tobias is a cool engineer guy. Please hire him.</p>
        <a
          className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:text-blue-800  transition-all duration-200 "
          href="https://www.linkedin.com/in/nyhaalm/"
        >
          Connect on <img className="text-blue-600 w-8" src={linkedinIcon} />{" "}
        </a>
      </div>
      <PaginationArrow
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
