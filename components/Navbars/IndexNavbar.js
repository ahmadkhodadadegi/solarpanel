import React from "react";
import Link from "next/link";
import Image from "next/image";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-row gap-6 justify-center items-center">
              <Image className="" width={50} height={40} src={"/img/brand/logo.webp"} />
              <Link href="/">
                <a
                  className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                  WVPP
                </a>
              </Link>


            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li>
                <IndexDropdown />
              </li> */}
              <li className="flex items-center">

                <Link href="/auth/register" >
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 flex items-center justify-center font-normal linkhover block w-full whitespace-nowrap rounded-md outline outline-1 outline-red-300  text-blueGray-700"
                    }
                  >
                    Register
                  </a>
                </Link>

              </li>
              <li className="flex items-center">

                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap linkhover text-blueGray-700"
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
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  linkhover text-blueGray-700"
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
