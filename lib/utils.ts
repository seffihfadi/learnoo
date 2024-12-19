import { clsx, type ClassValue } from "clsx"
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const languages: Record<string, string> = {
  ar: 'Arabic',
  en: 'English',
  fr: 'French',
};

export function getLanguageName(code: string) {
  return languages[code] || 'Unknown language';
}


export async function formatDate(date: Date) {
  // if (!date) return null
  const lang = await getLocale();
  console.log('lang', lang)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  try {
    const formattedDate = new Intl.DateTimeFormat(lang, options).format(new Date(date || Date.now()));
    return formattedDate
  } catch (error) {
    throw new Error("Invalid date format.")
  }
}



export async function getDataAction<T>(path: string, query: string): Promise<T | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_ROOT as string;
   const extendedPath = `/api/v1${path}`
  // const language = outContext ? 'en' : await getLanguage();
  // &locale=${language}
  const url = new URL(extendedPath, baseUrl);
  url.search = `${query}`;

  try {
    const response = await fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const resault = await response.json()
    // console.log('first', resault?.message || resault?.error)
    if (resault?.message || resault?.error) {
      notFound()
    }
    return resault
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}