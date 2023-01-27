import Image from "next/image";
import Link from "next/link";
import React from "react";
type Pageprops = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY} `
  );

  const data: SearchResult = await res.json();
  return data;
};

async function page({ params: { searchTerm } }: Pageprops) {
  const searchResult = await search(searchTerm);

  return (
    <div>
      <p>You search for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResult.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p className="">{result.snippet}</p>
            <Link href={result.link}> <p className=" text-blue-500">{result.link}</p></Link> 
            
            <Image src={result.thumbnail} alt='thumbnail' width={30} height={30}/>
            <hr  className="mt-3"/>

          </li>
        ))}
      </ol>
    </div>
  );
}

export default page;
