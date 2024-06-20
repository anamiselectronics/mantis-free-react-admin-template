import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function EnhancedSearch({ setPage, setRowsPerPage, setRows, originalRows, sx }) {
  const [searched, setSearched] = useState('');

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase()) || row.family.toLowerCase().includes(searchedVal.toLowerCase()) || row.phone.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
    setRowsPerPage(filteredRows.length);
    setPage(0);
  };

  const cancelSearch = () => {
    setSearched('');
    setRows(originalRows);
    setRowsPerPage(originalRows.length);
    setPage(0);
  };

  return (
    <TextField
      value={searched}
      onChange={(e) => {
        setSearched(e.target.value);
        requestSearch(e.target.value);
      }}
      placeholder="جستجو"
      variant="outlined"
      sx={sx}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {searched ? (
              <IconButton onClick={cancelSearch}>
                <ClearIcon />
              </IconButton>
            ) : (
              <SearchIcon />
            )}
          </InputAdornment>
        )
      }}
    />
  );
}

export default EnhancedSearch;
