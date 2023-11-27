import React from "react";

const Search = ({ setSearchValue, handleSubmit }) => {
  return (
    <div className="bg-white rounded-md w-full md:w-auto relative overflow-hidden">
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          className="w-full text-sm border-none rounded-md focus:ring-0"
          placeholder="Cari kota..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <i
          className="fa-solid fa-magnifying-glass cursor-pointer absolute right-0 top-0 bg-white p-3"
          onClick={handleSubmit}
        ></i>
      </form>
    </div>
  );
};

export default Search;
