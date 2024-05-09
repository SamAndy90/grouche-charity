"use client";

import { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";

import { cn } from "utils/cn";

export const SearchInput = () => {
  const [query, setQuery] = useState("");

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ query });
    setQuery("");
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
