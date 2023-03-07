import React, { useState, useEffect } from "react"
import { FormHelperText, FormControl, Collapse, Alert, Card, CardContent, Typography, TextField, Stack, Select, MenuItem, Button, Box, InputLabel, Input } from "@mui/material"
import { countryList } from "../../../assets/countries";
import { useSelector, useDispatch } from "react-redux";
import { addFeedback } from "../../slices/feedbackData";

export default function Form() {
    const dispatch = useDispatch();
    const feedback = useSelector(state => state.feedback.feedbackData);

    const [firstName, setFirstName] = useState(""); //variable for the first name
    const [lastName, setLastName] = useState(""); //variable for the last name
    const [countrySelect, setCountrySelect] = useState(""); //variable for the country selected
    const [subject, setSubject] = useState(""); //variable for the feedback/thoughts

    const [successShow, setSuccessShow] = useState(false); //variable for showing the modal upon 
    //successful sending of feedback/thoughs

    const [countDownSeconds, setCountDownSeconds] = useState(10); //variable for the duration for showing the modal for successful
    //sending of feedback/thoughs

    const [firstNameError, setFirstNameError] = useState(false); //variable for showing the error text for first name
    const [lastNameError, setLastNameError] = useState(false); //variable for showing the error text for last name
    const [countryError, setCountryError] = useState(false); //variable for showing the error text for country selected
    const [subjectError, setSubjectError] = useState(false); //variable for showing the error text for feedback/thoughts

    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(""); //variable for the error text for first name
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState(""); //variable for the error text for first name
    const [countryErrorMessage, setCountryErrorMessage] = useState(""); //variable for the error text for first name
    const [subjectErrorMessage, setSubjectErrorMessage] = useState(""); //variable for the error text for first name


    useEffect(() => { //useEffect is used to set the modal to show upon successful submission of feedback/thoughts
        if (!firstNameError || !lastNameError || !countryError || !subjectError || successShow) {
            if (countDownSeconds > 0) {
                setTimeout(() => setCountDownSeconds(countDownSeconds - 1), 1000); //this is for counting down the seconds.
                //setTimeOut is a function for proper
                //countdown of seconds where it will countdown
                //for every second. 1 second is equals to 1000
                //that is why the interval is set to 1000. Otherwise,
                //it will countdown too fast.
            } else {

                setSuccessShow(false); //sets the collapse modal to hide again

                setCountDownSeconds(10); //resets the count down seconds to 5 again
            }
        }

        if (firstName == "" || firstName.length <= 0) { //condition for checking if first name is empty or not
            setFirstNameErrorMessage("You must include your first name"); //sets the error message for first name
            setFirstNameError(true); //show the first name error message
        }
        else {
            setFirstNameErrorMessage(""); //sets the error message for first name
            setFirstNameError(false); //show the first name error message
        }

        if (lastName == "" || lastName.length <= 0) { //condition for checking if last name is empty or not
            setLastNameErrorMessage("You must include your last name"); //sets the error message for last name
            setLastNameError(true); //show the last name error message
        }
        else {
            setLastNameErrorMessage(""); //sets the error message for last name
            setLastNameError(false); //show the last name error message
        }

        if (countrySelect == "" || countrySelect == "None") { //condition for checking if country selected is empty or None
            setCountryErrorMessage("You must include your country"); //sets the error message for country selected
            setCountryError(true); //show the country selected error message
        }
        else {
            setCountryErrorMessage(""); //sets the error message for country selected
            setCountryError(false); //show the country selected error message
        }

        if (subject == "" || subject.length <= 0) { //condition for checking if feedback/thoughts is empty or not
            setSubjectErrorMessage("You must include your feedback/thoughts"); //sets the error message for feedback/thoughts
            setSubjectError(true); //show the feedback/thoughts error message
        }
        else {
            setSubjectErrorMessage(""); //sets the error message for feedback/thoughts
            setSubjectError(false); //show the feedback/thoughts error message
        }

    }, [countDownSeconds, firstName, firstNameError, firstNameErrorMessage, lastName,
        lastNameError, lastNameErrorMessage, countrySelect, countryError,
        countryErrorMessage, subject, subjectError, subjectErrorMessage, successShow])


    function handleSubmit(e) { //function for submitting the feedback/thoughs of the user
        e.preventDefault();

        if (!firstNameError && !lastNameError && !countryError && !subjectError) { //checks if all the error checks for all fields are false in order for it to submit it
            setSuccessShow(true); //shows the modal for successfully submitting the feedback/thoughs


            dispatch(addFeedback({
                ID: feedback.length > 0 ? parseInt(feedback.length)+1 : 1,
                FirstName: firstName,
                LastName: lastName,
                Country: countrySelect,
                Subject: subject,
            }))
            //Sets the first name, last name, country selected, and subject back to blank/""
            setFirstName("");
            setLastName("");
            setCountrySelect("");
            setSubject("");

            //Set the error message for each field back to blank
            //Sets the showing of error messages of respective fields back to false to hide it.
            setFirstNameErrorMessage("");
            setFirstNameError(false);

            setLastNameErrorMessage("");
            setLastNameError(false);

            setCountryErrorMessage("");
            setCountryError(false);

            setSubjectErrorMessage("");
            setSubjectError(false);
            //

            console.log("Successful")
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Collapse in={successShow} sx={{ marginBottom: "1px", marginTop: "2px" }}>
                <Alert sx={{ minWidth: "500px", width: "500px" }} severity="info">
                    <Typography sx={{ width: "300px" }} textAlign="end">Thank you for sending us your thoughts!</Typography>
                </Alert>
            </Collapse>

            <Card variant="outlined" sx={{ width: "98%", height: "100%", borderColor: "black", my: 1, marginLeft: "2px" }}>
                <CardContent>
                    <Typography variant="h5">
                        Contact Us:
                    </Typography>
                    <Stack alignItems="left" justifyContent="center" direction="column" sx={{ marginTop: "1px" }} spacing={1}>

                        <Typography sx={{ width: "100%" }}>First Name: </Typography>
                        <TextField id="firstName" value={firstName} onChange={(e) =>setFirstName(e.target.value)} error={firstNameError} helperText={firstNameErrorMessage} label="Write your first name here..."></TextField>

                        <Typography sx={{ width: "100%" }}>Last Name: </Typography>
                        <TextField id="lastName" value={lastName} onChange={(e) =>setLastName(e.target.value)} error={lastNameError} helperText={lastNameErrorMessage} label="Write your last name here..."></TextField>

                        <Typography sx={{ width: "100%" }}>Country: </Typography>
                        <FormControl error={countryError}>
                            <Select id="countrySelect" inputProps={{ 'aria-label': 'Without label' }} sx={{ width: "20%" }} value={countrySelect} onChange={(e) =>setCountrySelect(e.target.value)}>
                                <MenuItem value="None">None</MenuItem>
                                {countryList.map((data, index) => (
                                    <MenuItem value={data} key={index}>{data}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{countryErrorMessage}</FormHelperText>
                        </FormControl>

                        <Typography sx={{ width: "100%" }}>Tell us something: </Typography>
                        <TextField id="subject" value={subject} onChange={(e) =>setSubject(e.target.value)} error={subjectError} helperText={subjectErrorMessage} multiline rows={10} label="Subject"></TextField>

                        <Button variant="contained" sx={{ width: "25%", height: "25%", left: "35%" }} type="submit">Submit</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}