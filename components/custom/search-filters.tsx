"use client"

import { cn, getDataAction } from "@/lib/utils"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [categories, setCategories] = useState<{id: number, name: string}[]>([])

  const filters = [
    {
      title: 'categories',
      color: 'green',
      items: []
    },
    {
      title: 'level',
      color: 'red',
      items: ['Beginner', 'Intermediate', 'Advanced']
    },
    {
      title: 'price',
      color: 'blue',
      items: ['all', 'Free', 'Paid']
    },
    {
      title: 'duration',
      color: 'yellow',
      items: ['0-1 hour', '1-3 hours', '3-6 hours', '6-12 hours', '12+ hour']
    },
    {
      title: 'language',
      color: 'purple',
      items: ['English', 'Arabic', 'French', 'Spanish']
    },
    {
      title: 'rating',
      color: 'pink',
      items: ['1 star', '2 stars', '3 stars', '4 stars']
    }
  ]

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/categories/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
  
      const resault = await response.json()
      console.log('categories', resault.categories)
      setCategories(resault.categories)
    }
    fetchData()
  }, [])

  const categoryNames = categories.map(category => category.name);
  filters[0].items.push(...categoryNames);
  useEffect(() => {
    const newFilters: Record<string, string[]> = {};
    filters.forEach((filter) => {
      const values = searchParams.get(filter.title)?.split(",") || [];
      if (values.length) newFilters[filter.title] = values;
    });
    setSelectedFilters(newFilters);
  }, [searchParams]);

  const updateURL = (filterTitle: string, value: string, isChecked: boolean) => {
    const updatedFilters = { ...selectedFilters };
    const currentValues = updatedFilters[filterTitle] || [];
    if (isChecked) {
      updatedFilters[filterTitle] = [...currentValues, value];
    } else {
      updatedFilters[filterTitle] = currentValues.filter((v) => v !== value);
    }

    // Remove empty filters
    const searchParams = new URLSearchParams();
    Object.entries(updatedFilters).forEach(([key, values]) => {
      if (values.length) searchParams.set(key, values.join(","));
    });

    router.push(`?${searchParams.toString()}`);
  };

  // Handle checkbox or radio change
  const handleChange = (filterTitle: string, value: string, isChecked: boolean) => {
    updateURL(filterTitle, value, isChecked);
  };

  return (
    <>

    {filters.map((filter, i) => (
      <div key={i} className={cn("filter", filter.color)}>
        <h6>{filter.title}</h6>
        <ul>
          {filter.items.map((item, i) => (
            <li key={i}>
              <input 
                type={filter.title === 'price' || filter.title === 'rating' ? 'radio' : 'checkbox'} 
                name={filter.title} 
                id={item} 
                checked={selectedFilters[filter.title]?.includes(item) || false}
                onChange={(e) =>
                  handleChange(filter.title, item, e.target.checked)
                }
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    ))}
      
    </>

  )
}
