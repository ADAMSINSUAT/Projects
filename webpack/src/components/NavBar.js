import * as React from 'react';
import { Box, Stack, Button, Menu, MenuItem } from '@mui/material';
const NavBar =()=> {

    return (
        <Box sx={{ bgcolor:"white", border:1, borderColor:"black", borderRadius: "16px", height:"100%", width:"100%"}}>
            <Stack sx={{pt:1, pb:1, pr:1}} alignContent="center" justifyContent="right" direction="row" spacing={2}>
                <Button variant="contained"
                    id="home"
                    href="/home"
                >
                    Home
                </Button>
                <Button variant="contained"
                    id="register"
                    href="/register"
                >
                    Register
                </Button>
                <Button variant="contained"
                    id="about"
                    href="/about"
                >
                    About Us
                </Button>
                <Button variant="contained"
                    id="contact"
                    href="/contact"
                >
                    Contact
                </Button>
            </Stack>
        </Box>
    );
}

export default NavBar;