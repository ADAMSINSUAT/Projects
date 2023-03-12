import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Alert, Collapse, Stack, Select, MenuItem, FormControl, FormHelperText, Button } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import format from "date-fns/format";
import isBefore from "date-fns/isBefore";
import parse from "date-fns/parse";
import isSameDay from "date-fns/isSameDay";
import { TimePicker } from "@mui/x-date-pickers";
import { postAppointmentAPI } from "../assets/services";
import axios from "axios";

export default function AddAppointment() {
    const [personToMeet, setPersonToMeet] = useState("");
    const [meetingReason, setMeetingReason] = useState("");
    const [meetingType, setMeetingType] = useState("");
    const [meetingDate, setMeetingDate] = useState(format(new Date(), 'MM/dd/yyyy'));
    const [meetingTime, setMeetingTime] = useState(new Date());
    const [success, setSuccess] = useState(false);

    const [personToMeetError, setPersonToMeetError] = useState(false);
    const [personToMeetErrorMessage, setPersonToMeetErrorMessage] = useState("");

    const [meetingReasonError, setMeetingReasonError] = useState(false);
    const [meetingReasonErrorMessage, setMeetingReasonErrorMessage] = useState("");

    const [meetingTypeError, setMeetingTypeError] = useState(false);
    const [meetingTypeErrorMessage, setMeetingTypeErrorMessage] = useState("");

    const [meetingDateError, setMeetingDateError] = useState(false);
    const [meetingDateErrorMessage, setMeetingDateErrorMessage] = useState("");

    const [seconds, setSeconds] = useState(5);

    const meetingTypes = ["Personal", "Official"];

    useEffect(() => {
        validateMeetingAt();

        if (success) {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000); //this is for counting down the seconds.
                //setTimeOut is a function for proper
                //countdown of seconds where it will countdown
                //for every second. 1 second is equals to 1000
                //that is why the interval is set to 1000. Otherwise,
                //it will countdown too fast.
            } else {

                setSuccess(false); //sets the collapse modal to hide again

                setSeconds(5); //resets the count down seconds to 5 again
            }
        }
    }, [success, seconds, meetingDate])

    function handleChange(e) {

        if (e == "personToMeet") {
            validatePersonToMeet();
        }
        if (e == "meetingReason") {
            validateMeetingReason();
        }
        if (e == "meetingType") {
            validateMeetingType();
        }
    }

    function validatePersonToMeet() {
        if (personToMeet == "") {
            setPersonToMeetError(true);
            setPersonToMeetErrorMessage("Person to meet field cannot be empty");
        } else {
            setPersonToMeetError(false);
            setPersonToMeetErrorMessage("");
        }
    }

    function validateMeetingReason() {
        if (meetingReason == "") {
            setMeetingReasonError(true);
            setMeetingReasonErrorMessage("Meeting reason field cannot be empty");
        } else {
            setMeetingReasonError(false);
            setMeetingReasonErrorMessage("");
        }
    }

    function validateMeetingType() {
        if (meetingType == "") {
            setMeetingTypeError(true);
            setMeetingTypeErrorMessage("Meeting type field must not be empty");
        } else {
            setMeetingTypeError(false);
            setMeetingTypeErrorMessage("");
        }
    }

    function validateMeetingAt() {
        let formattedMeetingDate = parse(meetingDate, 'MM/dd/yyyy', new Date());

        if (isSameDay(formattedMeetingDate, new Date())) {
            setMeetingDateError(false);
            setMeetingDateErrorMessage("");
        } else {
            if (isBefore(formattedMeetingDate, new Date())) {
                setMeetingDateError(true);
                setMeetingDateErrorMessage("Meeting date cannot be before today!");
            } else {
                setMeetingDateError(false);
                setMeetingDateErrorMessage("");
            }
        }
    }

    async function sendAppointment() {
        const formattedMeetingAt = new Date(meetingDate+ ' ' +meetingTime.toTimeString());
        console.log(formattedMeetingAt);
        const payload = {
            personToMeet: personToMeet,
            meetingReason: meetingReason,
            meetingType: meetingType=="Personal"? 1: 2,
            meetingAt: formattedMeetingAt
        }
        await axios.post(postAppointmentAPI, payload).then(async(res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if ((!personToMeetError && personToMeet != "") && (!meetingReasonError && meetingReason != "") && (!meetingTypeError && meetingType != "") && (!meetingDateError)) {
            await sendAppointment();
            await setSuccess(true);
            setPersonToMeet("");
            setMeetingReason("");
            setMeetingType("");
            setMeetingDate(format(new Date(), 'MM/dd/yyyy'));
            setMeetingTime(new Date());
        }
    }

    return (
        <Box component="form" onSubmit={(e) => handleSubmit(e)} justifyContent="center" alignItems="center" sx={{ mt: 1, border: 1, borderColor: "black", borderRadius: 1, bgcolor: "white", width: "100%" }}>
            <Collapse in={success} sx={{ marginBottom: "1px", marginTop: "2px" }}>
                <Alert severity="success">
                    <Typography sx={{ width: "100%" }} textAlign="center">Successfully created appointment!</Typography>
                </Alert>
            </Collapse>
            <Stack justifyContent="start" alignItems="center" direction="column" sx={{ border: 1, borderRadius: 1, borderColor: "black", m: 1, p: 1 }} spacing={1}>
                <Typography textAlign="center">Add Appointment Form: </Typography>
                <Stack justifyContent="center" alignItems="center" direction="row" spacing={1}>
                    <Typography>Type person to meet: </Typography>
                    <TextField id="personToMeet" error={personToMeetError} helperText={personToMeetErrorMessage} sx={{ width: "40%" }} value={personToMeet} onChange={(e) => { handleChange(e.target.id); setPersonToMeet(e.target.value); }} />
                </Stack>

                <Stack justifyContent="center" alignItems="center" direction="row" spacing={1}>
                    <Typography>Type reason for meeting: </Typography>
                    <TextField id="meetingReason" error={meetingReasonError} helperText={meetingReasonErrorMessage} sx={{ width: "40%" }} value={meetingReason} onChange={(e) => { handleChange(e.target.id); setMeetingReason(e.target.value); }} />
                </Stack>

                <Stack justifyContent="center" alignItems="center" direction="row" spacing={1}>
                    <Typography>Select meeting type: </Typography>
                    <FormControl error={meetingTypeError}>
                        <Select id="meetingType" sx={{ width: "100%" }} value={meetingType} onChange={(e) => { handleChange(e.target.id); setMeetingType(e.target.value); }} >
                            {meetingTypes.map((data, index) => (
                                <MenuItem value={data} key={index}>{data}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{meetingTypeErrorMessage}</FormHelperText>
                    </FormControl>
                </Stack>

                <Stack justifyContent="center" alignItems="center" direction="row" spacing={1}>
                    <Typography>Set Date of Meeting: </Typography>
                    <FormControl error={meetingDateError}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker required label='Meeting Date' renderInput={(params) => <TextField {...params} />} value={meetingDate} onChange={(newDate) => setMeetingDate(format(new Date(newDate), 'MM/dd/yyyy'))} />
                        </LocalizationProvider>
                        <FormHelperText>{meetingDateErrorMessage}</FormHelperText>
                    </FormControl>
                </Stack>

                <Stack justifyContent="center" alignItems="center" direction="row" spacing={1}>
                    <Typography>Set Time of Meeting: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker required label='Meeting Time' renderInput={(params) => <TextField {...params} />} value={meetingTime} views={['hours', 'minutes']} inputFormat={"hh:mm a"} onChange={(newDate) => setMeetingTime(format(new Date(meetingTime), 'hh:mm a'))} />
                    </LocalizationProvider>
                </Stack>
                <Button variant="contained" type="submit">Add Appointment</Button>
            </Stack>
        </Box>
    )
}