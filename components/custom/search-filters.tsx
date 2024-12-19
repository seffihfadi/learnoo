"use client"

import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Filter } from "@/lib/constants";
import { filtersInit } from "@/lib/constants";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [categories, setCategories] = useState<{id: number, name: string}[]>([])
  const [filters, setFilters] = useState<Filter[]>(filtersInit)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/categories/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
  
      const resault = await response.json()
      // console.log('categories', resault.categories)
      setCategories(resault.categories)
    }
    fetchData()
  }, [])

  
  useEffect(() => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.title === "categories"
          ? {
              ...filter,
              items: categories.map((category) => ({
                [category.name]: category.name,
              })),
            }
          : filter
      )
    );
  }, [categories])


  useEffect(() => {
    const newFilters: Record<string, string[]> = {};
    filters.forEach((filter) => {
      const values = searchParams.get(filter.name)?.split(",") || [];
      if (values.length) newFilters[filter.name] = values;
    });
    setSelectedFilters(newFilters);
  }, [searchParams]);

  // const updateURL = (filterTitle: string, value: string, isChecked: boolean) => {
  //   const updatedFilters = { ...selectedFilters };
  //   const currentValues = updatedFilters[filterTitle] || [];
  //   if (isChecked) {
  //     updatedFilters[filterTitle] = [...currentValues, value];
  //   } else {
  //     updatedFilters[filterTitle] = currentValues.filter((v) => v !== value);
  //   }

  //   // Remove empty filters
  //   const searchParams = new URLSearchParams();
  //   Object.entries(updatedFilters).forEach(([key, values]) => {
  //     if (values.length) searchParams.set(key, values.join(","));
  //   });

  //   router.push(`?${searchParams.toString()}`);
  // };

  const updateURL = (filterTitle: string, value: string, isChecked: boolean) => {
    const updatedFilters = { ...selectedFilters };
  
    if (filterTitle === "categories") {
      // Allow multiple values for 'categories'
      const currentValues = updatedFilters[filterTitle] || [];
      if (isChecked) {
        updatedFilters[filterTitle] = [...currentValues, value];
      } else {
        updatedFilters[filterTitle] = currentValues.filter((v) => v !== value);
      }
    } else if (filterTitle === "duration") {
      // Parse and update min_duration and max_duration
      const [min, max] = value.slice(1).split("t"); // Remove the "f" and split by "t"
      const searchParams = new URLSearchParams(window.location.search);
  
      if (isChecked) {
        searchParams.set("duration", value);
        searchParams.set("min_duration", (Number(min) * 60).toString());
        searchParams.set("max_duration", (Number(max) * 60).toString());
      } else {
        searchParams.delete("duration");
        searchParams.delete("min_duration");
        searchParams.delete("max_duration");
      }
  
      router.push(`?${searchParams.toString()}`);
      return; // Exit early since we're directly managing the URL for 'duration'
    } else {
      // Allow only one value for other filters
      updatedFilters[filterTitle] = isChecked ? [value] : [];
    }
  
    // Remove empty filters
    const searchParams = new URLSearchParams();
    Object.entries(updatedFilters).forEach(([key, values]) => {
      if (values.length) searchParams.set(key, values.join(","));
    });
  
    router.push(`?${searchParams.toString()}`);
  };
  
  const handleChange = (filterTitle: string, value: string, isChecked: boolean) => {
    updateURL(filterTitle, value, isChecked);
  };

  // console.log('selectedFilters', selectedFilters)
  return (
    <>

    {filters.map((filter, i) => (
      <div key={i} className={cn("filter", filter.color)}>
        <h6>{filter.title}</h6>
        <ul>
          {filter.items.map((item, i) => (
            <li key={i}>
              <input 
                type={filter.title === 'categories' ? 'checkbox' : 'radio'} 
                name={filter.name} 
                id={Object.keys(item)[0]} 
                checked={selectedFilters[filter.name]?.includes(Object.keys(item)[0]) || false}
                onChange={(e) =>
                  handleChange(filter.name, Object.keys(item)[0], e.target.checked)
                }
              />
              <label htmlFor={Object.keys(item)[0]}>{Object.values(item)[0]}</label>
            </li>
          ))}
        </ul>
      </div>
    ))}
      
    </>

  )
}
