import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <input placeholder="search" className="search-box" />
        <IconButton>
          <SearchIcon className="icon" />
        </IconButton>
      </div>
    </>
  );
};

export default SearchBar;
