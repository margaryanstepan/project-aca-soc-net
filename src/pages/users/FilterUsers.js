import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';

function FilterUsers( props ) {
    
    return (
        <>
        <Box>
            <TextField id="outlined-basic" label="search user" placeholder="nickname" variant="outlined" value={ props.search } onChange={ props.handleSearchChange } />
        </Box>

        <Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={ props.gender }
                        onChange={ props.handleGenderChange }
                        label="Age"
                    >           
                        <MenuItem value=""><em>Gender</em></MenuItem>
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                    </Select>
            </FormControl>
        </Box>

        <Box>
            <TextField id="outlined-basic" label="from" variant="outlined" value={ props.ageFrom } onChange={ props.handleAgeFromChange } />
            <TextField id="outlined-basic" label="to" variant="outlined" value={ props.ageTo } onChange={ props.handleAgeToChange } />
        </Box>

        <Box>
            <Button variant="outlined" onClick={ props.handleFilterClick }>Filter</Button>
        </Box>
        </>
  );
}

export default FilterUsers;
