import React from "react";
import SearchBar from "../components/SearchBar";
import AllCards from "../components/AllCards";
import HeaderPages from "../components/HeaderPages";

function AllCardsDisplay() {
  return (
    <>
      <HeaderPages />
      <h2 className="titlepage">Toutes les cartes de A à Z 🦸‍♂️ </h2>
      <SearchBar />
      <AllCards />
    </>
  );
}

export default AllCardsDisplay;
