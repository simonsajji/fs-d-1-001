import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='t-a-center p-relative w-fit-content d-flex align-center j-center'>
      <TextField
        label="Search Recipes..."
        variant="outlined"
        size="small"
        value={query}
        className='textbar'
        onChange={(e) => setQuery(e.target.value)}
      />
      <i className='fa fa-search search-btn' onClick={handleSearch}></i>
      {/* <Button variant="contained" className='searchBtn' onClick={handleSearch}>
        Search
      </Button> */}
    </div>
  );
};

export default SearchBar;