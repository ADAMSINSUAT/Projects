import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllAppointmentsAPI } from "../assets/services";
import { Button, Box, Typography, Card, CardContent } from "@mui/material";

export default function GetAllAppointments() {
    const [appointments, setAppointments] = useState([]);

    async function getAllAppointments() {
        await axios.get(getAllAppointmentsAPI).then((res) => {
            res.data.forEach(async data => {
                if (data.meetingType == 1) {
                    data.meetingType = "Personal"
                }
                if (data.meetingType == 2) {
                    data.meetingType = "Official"
                }
                await setAppointments(appointments=>[...appointments, data]);
            });
        }).catch((e) => {
            console.log(e);
        })
    };

    useState(() => {
        getAllAppointments();
    }, [])

    const appointmentList = appointments.map((data) => {
        return (
            <React.Fragment key={data.appointmentId}>
                <Card sx={{ mt: 1, maxWidth: "100px", maxWidth: true }}>
                    <CardContent>
                        <Typography sx={{ my: 1 }} textAlign="center">Appointment ID: {data.appointmentId}</Typography>
                        <Typography sx={{ my: 1 }} textAlign="center">Person to Meet: {data.personToMeet}</Typography>
                        <Typography sx={{ my: 1 }} textAlign="center">Meeting Type: {data.meetingType}</Typography>
                        <Typography sx={{ my: 1 }} textAlign="center">Meeting Reason: {data.meetingReason}</Typography>
                        <Typography sx={{ my: 1 }} textAlign="center">Meeting At: {data.meetingAt}</Typography>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    });

    return (
        <Box justifyContent="center" alignItems="center" sx={{ mt: 1, border: 1, borderColor: "black", borderRadius: 1, bgcolor: "white", width: "100%" }}>
            <Typography textAlign="center">List of Appointments:</Typography>
            {appointmentList}
        </Box>
    )
}