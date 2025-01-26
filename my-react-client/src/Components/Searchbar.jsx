// src/components/SearchBar.js
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 4 }}>
      <TextField
        label="Search by CNIC, Name, or Phone"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;