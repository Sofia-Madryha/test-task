"use client";

import { useState } from "react";

import { DropdownArrowIcon } from "@/assets";

interface LanguageDropdownProps {
  languages: string[];
  onSelect?: (lang: string) => void;
}

const LanguageDropdown = ({ languages, onSelect }: LanguageDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang: string) => {
    setSelected(lang);
    setIsOpen(false);
    if (onSelect) onSelect(lang);
  };

  return (
    <div className="relative w-10 inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center gap-[9px] text-white font-semibold focus:outline-none cursor-pointer"
      >
        {selected}
        <DropdownArrowIcon
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 border border-gray-300 rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => handleSelect(lang)}
              className="px-3 py-1 hover:bg-purple-200 hover:text-white rounded-md cursor-pointer "
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
