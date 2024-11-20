"use client";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function setLanguage(language: string) {
  document.cookie = `language=${encodeURIComponent(language)}; path=/;`
  location.reload(); 
}

export function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const match = document.cookie.match(new RegExp("(^| )language=([^;]+)"));
    if (match) setLang(decodeURIComponent(match[2]));
  }, []);

  const handleLanguageChange = (value: string) => {
    setLang(value)
    setLanguage(value)
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0" asChild>
        <button className="flex items-center gap-2 mx-2 capitalize font-semibold">
          <i className="uil uil-english-to-chinese"></i>
          {/* <span className="hidden md:inline-block">{lang}</span> */}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={lang} onValueChange={handleLanguageChange}>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ar">عربية</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
