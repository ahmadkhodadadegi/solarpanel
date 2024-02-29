import React from "react";
import Link from "next/link";
import Image from "next/image";
// components


export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-row gap-6 justify-center items-center">
              <Link href="/">
                <a
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                  WVPP
                </a>
              </Link>


            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             
              <li className="flex items-center">

                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap linkhover text-white"
                    }
                  >
                    Login
                  </a>
                </Link>

              </li>
              

              <li className="flex items-center">

                <Link href="/">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  linkhover text-white"
                    }
                  >
                    Home
                  </a>
                </Link>

              </li>





            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
