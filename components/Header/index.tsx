"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prevState) => (prevState === title ? null : title));
  };

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-1 ${
        stickyMenu
          ? "bg-transparentBlack py-1 shadow transition duration-100 "
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              width={150}
              height={30}
              className="w-full"
            />
            {/* <Image
              src="/images/logo/logo-light.png"
              alt="logo"
              width={150}
              height={30}
              className="w-full dark:hidden"
            /> */}
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                  style={{
                    filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.5))",
                  }} // Darkest shadow
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                  style={{
                    filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.5))",
                  }} // Darkest shadow
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                  style={{
                    filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.5))",
                  }} // Darkest shadow
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                  style={{
                    filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.5))",
                  }} // Darkest shadow
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                  style={{
                    filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.5))",
                  }} // Darkest shadow
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar xl:dark:bg-transparentBlack !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 text-black shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none"
          }`}
        >
          <nav>
            <ul className="font-size-16 nav-title flex flex-col gap-5 text-lg font-bold uppercase text-white xl:flex-row xl:items-center xl:gap-10 xl:pl-50">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && " group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        className={`flex cursor-pointer items-center justify-between gap-3 ${
                          pathUrl === menuItem.path
                            ? "text-primary hover:text-primary"
                            : "hover:text-primary"
                        }`}
                      >
                        <Link
                          onClick={() => setNavigationOpen(false)}
                          href={`${menuItem.path}`}
                          className="nav-title uppercase"
                        >
                          {" "}
                          {menuItem.title}{" "}
                        </Link>
                        <span onClick={() => toggleSubmenu(menuItem.title)}>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${
                          openSubmenu === menuItem.title ? "flex" : ""
                        }`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li
                            key={key}
                            className="uppercase hover:text-primary"
                          >
                            <Link
                              href={item.path || "#"}
                              onClick={() => setNavigationOpen(false)}
                              className={
                                pathUrl === item.path
                                  ? "text-primary hover:text-primary"
                                  : "hover:text-primary"
                              }
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                      onClick={() => setNavigationOpen(false)}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="mt-7 flex items-center gap-6 xl:mt-0"
            onClick={() => setNavigationOpen(false)}
          >
            {/* <ThemeToggler /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
