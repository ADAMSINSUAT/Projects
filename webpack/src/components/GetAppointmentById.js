import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Stack, TextField, Collapse, Alert } from "@mui/material";
import { getAppointmentByIdAPI } from "../assets/services";
import axios from "axios";

export default function GetAppointmentById() {

    const [appointment, setAppointment] = useState([]);
    const [id, setID] = useState("");
    const [error, setError] = useState(false);
    const [seconds, setSeconds] = useState(5);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState("warning");

    useEffect(() => {
        if (error) {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000); //this is for counting down the seconds.
                //setTimeOut is a function for proper
                //countdown of seconds where it will countdown
                //for every second. 1 second is equals to 1000
                //that is why the interval is set to 1000. Otherwise,
                //it will countdown too fast.
            } else {

                setError(false); //sets the collapse modal to hide again

                setSeconds(5); //resets the count down seconds to 5 again
            }
        }
    }, [seconds, error])

    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            width: 300,
            margin: 100,
        },
        //style for font size
        resize: {
            fontSize: 50
        },
    }
    async function getAppointmentById(e) {
        if (e.key == "Enter") {
            if (id == "") {
                setError(true);
                setErrorMessage("ID is empty");
                setSeverity("error");
            } else {

                await axios.get(getAppointmentByIdAPI + id).then(async (res) => {
                    if (res.data.meetingType == 1) {
                        res.data.meetingType = "Personal"
                    }
                    if (res.data.meetingType == 2) {
                        res.data.meetingType = "Official"
                    }
                    await setAppointment([res.data]);
                    setError(false);
                    setErrorMessage("");
                }).catch((e) => {
                    if (e.code == "ERR_BAD_REQUEST") {
                        setError(true);
                        setErrorMessage("ID Cannot be found");
                        setSeverity("warning");
                        setAppointment([]);
                    }
                })
            }
        }
    }

    const appointmentList = appointment.length ? (appointment.map((data) => {
        return (
                <React.Fragment key={data.appointmentId}>
                    <Card sx={{ maxWidth: "100px", maxWidth: true }}>
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
    })) : <>
        <Typography textAlign="center">No Data</Typography>
    </>;
    return (
        <Box justifyContent="center" alignItems="center" sx={{ mt: 1, border: 1, borderColor: "black", borderRadius: 1, bgcolor: "white", width: "100%" }}>
            <Collapse in={error} sx={{ marginBottom: "1px", marginTop: "2px" }}>
                <Alert severity={severity}>
                    <Typography sx={{ width: "100%" }} textAlign="center">{errorMessage}</Typography>
                </Alert>
            </Collapse>
            <Typography textAlign="center">Get Appointment by ID:</Typography>
            <Stack sx={{ my: 2 }} justifyContent="center" alignItems="center" direction="row" spacing={2}>
                <Typography>Input Appointment ID:</Typography><TextField placeholder="Appointment ID" value={id} onChange={(e) => setID(e.target.value)} onKeyDown={(e) => getAppointmentById(e)} />
            </Stack>
            <Typography sx={{ mt: 1 }} textAlign="center">List of Appointments:</Typography>
            {appointmentList}
        </Box>
    )
}