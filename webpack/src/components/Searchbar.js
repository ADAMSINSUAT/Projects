import React, { useState, useEffect } from "react";
import { map, filter, lowerCase } from "lodash";
import { Data } from "../data/Database";
import { Box, TextField } from '@mui/material';

export const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    const [searchFilter, setSearchFilter] = useState([]);

    useEffect(() => {
        if (searchText.length > 0) {
            setSearchFilter(Data.filter((person) => {
                return lowerCase(person.name).match(lowerCase(searchText));
            }))
        }else{
            setSearchFilter([]);
        }
    }, [searchText])

    return (
        <Box spacing={10} display="flex" direction="column" alignContent="center" justifyContent="center" sx={{ flexDirection: "column", flexWrap: "wrap", border: 1, borderColor: "black", borderRadius: 1, p: 1, m: 1 }}>
            <TextField placeholder="Enter a name..." value={searchText} onChange={(event) => { setSearchText(event.target.value) }}></TextField>
            <Box>
                {searchFilter.length > 0 ? (map(searchFilter, (data, index) => {
                    return (
                        <React.Fragment key={index}>
                            Name: {data.name}
                            <br />
                            Age: {data.age}
                            <br />
                            Occupation: {data.occupation}
                        </React.Fragment>
                    )
                }))
                    :
                    <></>}

            </Box>
        </Box >
    )
}