import React, { useState } from "react";
import { map, filter, lowerCase } from "lodash";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { Data } from "../data/Database";

export const SearchBar = () => {
    const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState("");

    const searchQuery = (searchString) => {
        const pattern = new RegExp(lowerCase(searchString));
        const filterArr = filter(Data, function (data) {
            const match = pattern.test(lowerCase(data.name));
            return match;
        })

        if (filterArr.length) {
            setSearchResult([...filterArr])
        } else {
            setSearchResult([]);
        }
    }

    return (
        <Box spacing={10} display="flex" direction="column" alignContent="center" justifyContent="center" sx={{flexDirection:"column", flexWrap:"wrap", border:1, borderColor:"black", borderRadius:1, p:1, m:1}}>
            <TextField placeholder="Search for something..." value={search} onChange={(event) => { searchQuery(event.target.value); setSearch(event.target.value) }}></TextField>
            <Box>
                {search.length>0 ? (
                    map(searchResult, (result, index) => {
                        return (
                            <Stack sx={{my:2}} key={index} spacing={1} direction="column">
                                    <p>Name: {result.name}</p>
                                    <p>Age: {result.age}</p>
                            </Stack>
                        );
                    })
                ) : (
                    <Typography sx={{my:2}} textAlign="center">No Result</Typography>
                )}
            </Box>
        </Box >
    )
}