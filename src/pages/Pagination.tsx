import PaginationArrow from "../components/PaginationArrow";
import { FirstPage } from "./FirstPage";
import { FourthPage } from "./FourthPage";
import { SecondPage } from "./SecondPage";
import { SocialsAcceptPage, SocialsDeclinePage } from "./SocialsPage";
import { ThirdPage } from "./ThirdPage";

export type PaginationProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};
export const Pagination = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="w-screen h-screen flex justify-center flex-col bg-transparent overflow-hidden">
      {currentPage == 0 && (
        <FirstPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage == 1 && (
        <SecondPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage == 2 && (
        <ThirdPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage == 3 && (
        <FourthPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage == 4 && (
        <SocialsAcceptPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage == 5 && (
        <SocialsDeclinePage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {(currentPage < 3 ) && (
        <PaginationArrow
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
