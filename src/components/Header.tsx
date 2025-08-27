"use client";

import { useState } from "react";

import { LogoIcon, MenuIcon, XIcon } from "@/assets";
import { Button, LanguageDropdown } from "./ui";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Click");
  };

  const menuItems = [
    { label: "Структура", value: "structure" },
    { label: "Обо мне", value: "aboutMe" },
    { label: "Плюсы", value: "advantages" },
    { label: "Отзывы", value: "reviews" },
    { label: "FAQ", value: "faq" },
  ];

  return (
    <header className="mt-[51px] lg:mt-10 px-10  flex justify-center">
      <div className="layout-container flex justify-between items-center z-80">
        <div className="flex items-center">
          <LogoIcon className="w-[178px] h-[18px] lg:w-50 lg:h-5" />
        </div>

        <div className="hidden lg:flex items-center gap-8 xl:gap-15">
          <nav className="flex gap-4 xl:gap-7">
            {menuItems.map((item) => (
              <Link
                key={item.value}
                href={`${item.value}`}
                className="text-white font-medium hover:text-purple-200 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageDropdown
            languages={["RU", "EN", "UA"]}
            onSelect={(lang) => console.log("Selected language:", lang)}
          />
          <Button size="sm">Купить со скидкой</Button>
        </div>

        <div
          className="lg:hidden focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center pt-20`}
      >
        <nav className="mt-8 w-full">
          <ul className="flex flex-col items-center gap-4">
            {menuItems.map((item) => (
              <li key={item.value} className="py-2 text-lg font-semibold">
                <Link
                  href={`${item.value}`}
                  className="text-white hover:text-purple-200 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
