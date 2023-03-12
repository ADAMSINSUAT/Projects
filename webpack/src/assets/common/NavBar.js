import * as React from 'react';
import { Box, Stack, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <Box sx={{ bgcolor: "white", border: 1, borderColor: "black", borderRadius: "16px", height: "100%", width: "100%" }}>
            <Stack sx={{ pt: 1, pb: 1, pr: 1 }} alignContent="center" justifyContent="right" direction="row" spacing={2}>
                <Link variant="contained"
                    id="getallappointments"
                    to="/getallappointments"
                    style={{ textDecoration: "None" }}
                >
                    <Button variant="contained">
                        Get All Appointments
                    </Button>
                </Link>

                <Link variant="contained"
                    id="getappointmentbyid"
                    to="/getappointmentbyId"
                    style={{ textDecoration: "None" }}
                >
                    <Button variant="contained">
                        Get Appointment By ID
                    </Button>
                </Link>

                <Link variant="contained"
                    id="addappointment"
                    to="/addappointment"
                    style={{ textDecoration: "None" }}
                >
                    <Button variant="contained">
                        Add Appointment
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}

export default NavBar;