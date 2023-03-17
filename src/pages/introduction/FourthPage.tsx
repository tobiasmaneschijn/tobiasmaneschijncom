import linkedinIcon from "../../assets/linkedin.svg";
import { PaginationProps } from "./Pagination";
import PaginationArrow from "../../components/PaginationArrow";
import Lottie from "lottie-react";
import Connect from "../../assets/connect.json";
import { useMyContext } from "../../hooks/useMyContext";

export const FourthPage = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const context = useMyContext();
  return (
    <div className="fade-in justify-center items-center  p-8  gap-5 flex flex-col">
      <h1 className="text-3xl z-10 font-bold text-center">
        Do you want to connect with me?
      </h1>

      <Lottie className="w-64 -z-0" animationData={Connect} />

      <div className="flex flex-row gap-12 text-center items-center">
        <div
          className="text-blue-600 font-semibold text-xl  flex gap-2 text-center hover:text-blue-800  transition-all duration-200 hover:cursor-pointer"
          onClick={() => setCurrentPage(4)}
        >
          Yeah!
        </div>
        <a
          className="text-blue-600 font-semibold text-xl flex gap-2 text-center hover:text-blue-800  transition-all duration-200 hover:cursor-pointer"
          onClick={() => setCurrentPage(5)}
        >
          Nope!
        </a>
      </div>
<NavigateToFullPageButton />
  
    </div>
  );
};



const NavigateToFullPageButton = () => {
  const context = useMyContext();
  
  return (
    <div className="flex flex-row gap-2" onClick={() => context.setShowIntroduction(false)}>
      <div className="text-blue-white opacity-50 font-semibold text-xl  flex gap-2 text-center hover:text-blue-800  transition-all duration-200 hover:cursor-pointer">
        Go to portfolio page
      </div>
    </div>
  );
};

