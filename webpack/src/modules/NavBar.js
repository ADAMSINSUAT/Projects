import * as React from 'react';
import { IconButton, Typography, Toolbar, AppBar, Box, Stack, Button, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import image from "../assets/React_logo.png";
import { Link } from "react-router-dom";

const pages = ["About", "Contact", "Employee"];

const NavBar = () => {
    return (
        <Box sx={{ bgcolor: "white", border: 1, borderColor: "black", borderRadius: "16px", height: "100%", width: "100%" }}>
            <Stack sx={{ pt: 1, pb: 1, pr: 1 }} alignContent="center" justifyContent="right" direction="row" spacing={2}>
            <Box justifyContent="left" sx={{ pt:1, ml:1, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <img src={image} style={{height: "50px", width: "100px" }} />
              </Box>
                {pages.map((page) => {
                    return (
                        <Link key={page} to={`/${page.toLowerCase()}`}
                            style={{ textDecoration: "none" }}>
                            <Button
                                key={page}
                                variant="contained"
                                sx={{ my: 2, color: "white", display: "block" }}
                                id={`/${page.toLowerCase()}`}
                            >
                                {page}
                            </Button>
                        </Link>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default NavBar;