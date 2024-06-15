import { useState } from "react";
import { Link } from "react-router-dom";
import Abhiram_Resume from "../assets/Abhiram_Resume_.pdf";

let Header = () => {
  let [navIcon, setNavIcon] = useState("fa-bars");
  let [showNav, setShowNav] = useState(false);

  let handleNav = () => {
    if (navIcon == "fa-bars") {
      setNavIcon("fa-times");
      setShowNav(true);
    } else if (navIcon == "fa-times") {
      setNavIcon("fa-bars");
      setShowNav(false);
    }
  };

  return (
    <header className="flex justify-between items-center px-3 py-4">
      <h1 className="font-extrabold text-4xl">
        <span className="text-green-500">Abhi</span>ram
      </h1>
      <div className="md:hidden" onClick={handleNav}>
        <i
          className={`fa ${
            navIcon == "fa-bars" ? "fa-bars" : "fa-times"
          } text-3xl`}
        ></i>
      </div>

      <ul
        className=" justify-center items-start hidden md:flex gap-x-4
            flex-row"
      >
        <li className="text-xl px-5 py-3 text-green-500 font-bold hover:text-black">
          <Link to="/"> Home </Link>
        </li>
        <li className="text-xl px-5 py-3 text-green-500 font-bold hover:text-black">
          <Link to="/projects"> Projects </Link>
        </li>
        <li className="text-xl px-5 py-3 text-green-500 font-bold hover:text-black">
          <a href="#contact"> Contact </a>
        </li>
        <li className="text-xl px-5 py-3 text-white bg-green-500 rounded-lg font-bold hover:bg-green-600 active:bg-green-800">
          <a
            href={Abhiram_Resume}
            download="Abhiram_Resume.pdf"
            target="_blank"
          >
            <button>Download Resume</button>
          </a>
        </li>
      </ul>

      <div
        className={`h-[16rem] absolute z-50 top-16 right-0 bg-white ${
          showNav ? "w-2/3" : "hidden"
        }`}
      >
        <ul
          className="flex justify-center items-start md:gap-x-2
            md:flex-row flex-col gap-y-3"
        >
          <li className="text-xl px-5 py-3 text-green-500" onClick={handleNav}>
            <Link to="/"> Home </Link>
          </li>
          <li className="text-xl px-5 py-3 text-green-500" onClick={handleNav}>
            <Link to="/projects"> Projects </Link>
          </li>
          <li className="text-xl px-5 py-3 text-green-500" onClick={handleNav}>
            <a href="#contact"> Contact </a>
          </li>
          <li className="text-xl mb-3 px-5 py-3 text-green-500 hover:font-bold">
            <a
              href={Abhiram_Resume}
              download="Abhiram_Resume.pdf"
              target="_blank"
            >
              <button>Download Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
