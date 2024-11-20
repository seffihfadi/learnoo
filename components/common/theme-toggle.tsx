"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('light');
  const [changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const existTheme = localStorage.getItem('litan-theme') !== null;

    if (existTheme) {
      setTheme(localStorage.getItem('litan-theme') || '');
    } else {
      const initialTheme = preferDark ? 'dark' : 'light';
      setTheme(initialTheme);
      localStorage.setItem('litan-theme', initialTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(localStorage.getItem('litan-theme') || '');
  }, [changed]);

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('litan-theme', newTheme);
    setTheme(newTheme);
    setChanged(!changed);
  };

  return (
    <div className="theme mx-2">
      <button onClick={handleTheme} className="flex items-center">
        {theme === 'dark' ? (
          <i className="uil uil-sun"></i>
        ) : (
          <i className="uil uil-moon"></i>
        )}
      </button>
    </div>
  );
}
