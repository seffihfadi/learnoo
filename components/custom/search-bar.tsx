'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("SearchPage");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set('title', searchQuery.trim());
      router.push(`/search?${currentParams.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative ltr:mr-auto mx-10 rtl:ml-auto">
      <input
        className="rounded-full w-96"
        type="text"
        placeholder={t('whatWouldYouLikeToLearn')}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="absolute rounded-full aspect-square h-[calc(100%-8px)] bg-blue-100 flex items-center justify-center rtl:left-1 ltr:right-1 top-1"
      >
        <i className="uil uil-search text-primary text-[18px]"></i>
      </button>
    </form>
  );
}
