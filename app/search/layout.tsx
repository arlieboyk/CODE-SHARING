import Search from "./Search";

import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex space-x-4 p-6 divide-x-2">
        <div className=""><h1>Search</h1></div>
      <div className="flex-1 pl-5">
        <Search />
      
      <div>{children}</div>
      </div>
    </main>
  );
}

export default RootLayout;
