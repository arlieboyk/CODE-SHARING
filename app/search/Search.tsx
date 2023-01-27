"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`search/${search}`);
  };

  return (
    //e => handled search to see what type elemeent is it
    <form onSubmit={handleSearch} className='space-x-3'>
      <input
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
        className=' border-2 pl-2 border-blue-500 rounded-sm'
      />
      <button type="submit" className="px-4 p-1 bg-blue-500 rounded-md text-white">
        Search
      </button>
    </form>
  );
}

export default Search;
