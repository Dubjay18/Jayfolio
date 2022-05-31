import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import logo from "../svgs/logoj.svg";
import { UserIcon } from "@heroicons/react/solid";
import { useStateValue } from "../stateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const svgVariant = {
  hidden: { rotate: -360 },
  visible: {
    rotate: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: "easeInOut",
    },
  },
};

function Navbar({
  aboutScroll,
  refScroll,
  aboutRef,
  expRef,
  projectRef,
  contactRef,
  heroRef,
  shade,
}) {
  const [{ darkmode }, dispatch] = useStateValue();
  const mode = () => {
    dispatch({
      type: "SET_DARKMODE",
      darkmode: !darkmode,
    });
  };
  return (
    <div
      className={`
    fixed top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content ${
      shade && "shadow-lg"
    }
    `}
    >
      <ToastContainer
        position="top-right"
        autoClose={1400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        bodyClassName={"z-50"}
        bodyStyle={{ zIndex: 100, top: "100px" }}
        draggable
        pauseOnHover
        className={"z-50"}
        toastStyle={{
          backgroundColor: "#1F2A2D",
          color: "white",
        }}
      />
      <div className="navbar sticky top-0 z-50 bg-base-100  text-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <motion.svg
                variants={svgVariant}
                initial={"hidden"}
                animate="visible"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  variants={pathVariants}
                  initial={"hidden"}
                  animate="visible"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </motion.svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52 font-poppins"
            >
              <li>
                <a
                  onClick={() => refScroll(aboutRef)}
                  className="active:bg-lime-500"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() => refScroll(expRef)}
                  className="active:bg-lime-500"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  onClick={() => refScroll(projectRef)}
                  className="active:bg-lime-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a>
                  <label
                    className="swap swap-rotate inline-flex md:hidden"
                    onChange={mode}
                  >
                    {darkmode ? (
                      <input type="checkbox" />
                    ) : (
                      <input type="checkbox" checked />
                    )}

                    <motion.svg
                      variants={svgVariant}
                      initial={"hidden"}
                      animate="visible"
                      className="swap-on fill-current md:w-10 md:h-10 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        variants={pathVariants}
                        initial={"hidden"}
                        animate="visible"
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={svgVariant}
                      initial={"hidden"}
                      animate="visible"
                      className="swap-off fill-current md:w-10 md:h-10 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        variants={pathVariants}
                        initial={"hidden"}
                        animate="visible"
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                      />
                    </motion.svg>
                  </label>
                </a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl group text-primary font-poppins"
            onClick={() => refScroll(heroRef)}
          >
            <motion.img
              src={logo.src}
              width={"60px"}
              height={"50px"}
              layoutId="main-image"
              className="group-hover:animate-bounce"
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            />
            JAYFOLIO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-poppins">
            <li>
              <a
                onClick={() => refScroll(aboutRef)}
                className="active:bg-lime-500"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={() => refScroll(expRef)}
                className="active:bg-lime-500"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                onClick={() => refScroll(projectRef)}
                className="active:bg-lime-500"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <label
          className="swap swap-rotate hidden md:inline-flex"
          onChange={mode}
        >
          {darkmode ? (
            <input type="checkbox" />
          ) : (
            <input type="checkbox" checked />
          )}

          <motion.svg
            variants={svgVariant}
            initial={"hidden"}
            animate="visible"
            className="swap-on fill-current md:w-10 md:h-10 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <motion.path
              variants={pathVariants}
              initial={"hidden"}
              animate="visible"
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </motion.svg>

          <motion.svg
            variants={svgVariant}
            initial={"hidden"}
            animate="visible"
            className="swap-off fill-current md:w-10 md:h-10 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <motion.path
              variants={pathVariants}
              initial={"hidden"}
              animate="visible"
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </motion.svg>
        </label>
        <div className="navbar-end">
          <a
            onClick={() => refScroll(contactRef)}
            className="btn btn-ghost bg-primary text-white md:inline-flex hidden"
          >
            Contact Me
          </a>
          <a
            onClick={() => refScroll(contactRef)}
            className="btn btn-ghost bg-primary text-white md:hidden text-xs"
          >
            <UserIcon className="w-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
