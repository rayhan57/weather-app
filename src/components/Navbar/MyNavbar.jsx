import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";

const MyNavbar = ({ setCity }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(searchValue);
  };

  return (
    <nav className="bg-sky-400 border-b shadow-md">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto py-3 px-3 xl:px-6">
        <Link
          href="/"
          className="font-bold text-white mx-auto md:ms-0 text-xl mb-2 md:mb-0"
        >
          Weather<span className="text-yellow-400">App</span>
        </Link>
        <Search setSearchValue={setSearchValue} handleSubmit={handleSubmit} />
      </div>
    </nav>
  );
};

export default MyNavbar;
