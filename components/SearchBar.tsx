"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { SearcManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses} `}>
    <Image
      src="/magnifying-glass.svg"
      alt="Magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }) => {
  const [SearchManufacturer, setSearchManufacturer] = useState("");
  const [SearchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (SearchManufacturer === "" && SearchModel === "") {
      return alert("please fill in the search bar");
    }

    setModel(SearchModel);
    setManufacturer(SearchManufacturer);
  };

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearcManufacturer
          selected={SearchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model icon"
          width={25}
          height={25}
          className="absolute w-[20px] height-[20px] ml-4 "
        />
        <input
          type="text"
          name="model"
          value={SearchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
