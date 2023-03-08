import linkedinIcon from "../assets/linkedin.svg";
import { PaginationProps } from "./Pagination";
import Lottie from "lottie-react";
import Connect from "../assets/connect.json";

import FacebookIcon from "../assets/icons8-facebook.svg"
import TwitterIcon from "../assets/icons8-twitter.svg"
import GithubIcon from "../assets/icons8-github.svg"
import LinkedinIcon from "../assets/icons8-linkedin.svg"
import InstaIcon from "../assets/icons8-instagram.svg"



const Socials = () => {
  return (
    <div className="flex flex-row gap-6">
      <a
        className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:scale-125 transition-all duration-200 "
        href="facebook.com/toby.moonshine/"
      >
        <img className="text-blue-600 w-16" src={FacebookIcon} />{" "}
      </a>

      <a
        className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:scale-125 transition-all duration-200 "
        href="https://www.instagram.com/vandermannmusic/"
      >
        <img className="text-blue-600 w-16" src={InstaIcon} />{" "}
      </a>

      <a
        className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:scale-125  transition-all duration-200 "
        href="https://www.linkedin.com/in/nyhaalm/"
      >
        <img className="text-blue-600 w-16" src={LinkedinIcon} />{" "}
      </a>

      <a
        className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:scale-125 transition-all duration-200 "
        href="https://github.com/tobiasmaneschijn/"
      >
        <img className="text-blue-600 w-16" src={GithubIcon} />{" "}
      </a>

      <a
        className="text-blue-600 font-semibold text-lg flex gap-2 text-center hover:scale-125 transition-all duration-200 "
        href="https://twitter.com/vandermannmusic"
      >
        <img className="text-blue-600 w-16" src={TwitterIcon} />{" "}
      </a>
    </div>
  );
};

export const SocialsAcceptPage = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="fade-in justify-center items-center  p-8  gap-5 flex flex-col">
      <h1 className="text-3xl z-10 font-bold text-center">
        Great! Here’s my socials
      </h1>


      <div className="flex flex-row gap-12 text-center items-center">
      <Socials />
      </div>
    </div>
  );
};

export const SocialsDeclinePage = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="fade-in justify-center items-center  p-8  gap-5 flex flex-col">
      <h1 className="text-3xl z-10 font-bold text-center">
        Oh well, here’s my socials still just in case!
      </h1>


      <div className="flex flex-row gap-12 text-center items-center">
        <Socials />
      </div>
    </div>
  );
};
