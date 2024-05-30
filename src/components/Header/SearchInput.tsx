"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { cn } from "utils/cn";

export const SearchInput = () => {
  const router = useRouter();
  const [filter, setFilter] = useQueryParams(
    {
      query: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

  const [searchInputValue, setSearchInputValue] = useState(filter.query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter(() => ({
        query: searchInputValue,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInputValue, setFilter]);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?query=${filter.query}`);
  }

  return (
    <div
      className={cn(
        "flex flex-nowrap items-center gap-x-4 overflow-hidden rounded-full bg-astra-900 px-2.5 py-1 caret-astra-400 ring-astra-400 focus-within:ring-1",
      )}
    >
      <div>
        <BiSearch className={"size-5 text-astra-400"} />
      </div>
      <form onSubmit={submitHandler} className={"min-w-56"}>
        <input
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          type={"text"}
          placeholder={"Find charity projects"}
          className={
            "block w-full bg-transparent text-xs text-white outline-none placeholder:text-xs placeholder:text-astra-800"
          }
        />
      </form>
    </div>
  );
};

SearchInput.displayName = "SearchInput";
