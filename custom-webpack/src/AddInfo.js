import * as React from "react";
import { Box, Stack, Button, Typography, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { format, isAfter, differenceInYears, parse, parseISO } from "date-fns";

class AddInfo extends React.Component {
    state = {
        name: "",
        dob: format(new Date(), "MM/dd/yyyy"),
        email: "",
        contact: "",
        aboutyourself: "",
        error: {
            nameError: false,
            contactError: false,
            dobError: false,
            emailError: false,
            aboutyourselfError: false,
        },
        errorMessage: {
            nameErrorMessage: "",
            contactErrorMessage: "",
            dobErrorMessage: "",
            emailErrorMessage: "",
            aboutyourselfErrorMessage: "",
        },
        formValid: false,
    };

    handleChange = (e) => {
        // console.log(e);
        // console.log(e.target.value);
        // console.log(e.target.id);

        // this is referring to AddInfo
        if (e.target.id == "name") {
            this.validateName(e.target.value);
        }
        if (e.target.id == "dob") {
            this.validateDOB(e.target.value);
        }
        if (e.target.id == "email") {
            this.validateEmail(e.target.value);
        }
        if (e.target.id == "contact") {
            this.validateContact(e.target.value);
        }
        if (e.target.id == "aboutyourself") {
            this.validateAboutYourself(e.target.value);
        }
    }

    validateName = (name) => {
        let formValid = this.state.formValid;
        let nameError = this.state.error.nameError;
        let nameErrorMessage = this.state.errorMessage.nameErrorMessage;

        if (name.trim() === "") {
            formValid = false;
            nameError = true;
            nameErrorMessage = "This is required";
        } else if (name.trim().length < 3) {
            formValid = false;
            nameError = true;
            nameErrorMessage = "Minimum of 3 characters";
        } else {
            formValid = true;
            nameError = false;
            nameErrorMessage = "";
        }

        this.setState({
            name,
            formValid,
            error: { ...this.state.error, nameError },
            errorMessage: { ...this.state.errorMessage, nameErrorMessage}
        });

        return formValid;
    };


    validateDOB = (dob) => {
        let formValid = this.state.formValid;
        let dobError = this.state.error.dobError;
        let dobErrorMessage = this.state.errorMessage.dobErrorMessage

        const birthDate = parseISO(dob, "MM/dd/yyyy", new Date());
        const age = differenceInYears(new Date(), new Date(dob));

        // console.log(birthDate)
        console.log(age);
        if (age < 18) {
            dobError = true;
            dobErrorMessage = "Please enter valid date of birth";
            formValid = false;
        }else{
            dobError = false;
            dobErrorMessage = "";
            formValid = true;
        }
        // } else if (dob.trim().length > 3) {
        //     dobError = "Please enter valid date of birth";
        //     formValid = false;
        // } else {
        //     dobError = "";
        //     formValid = true;
        // }

        this.setState({
            dob,
            formValid,
            error: { ...this.state.error, dobError },
            errorMessage: { ...this.state.errorMessage, dobErrorMessage}
        });
        return formValid;
    }

    validateEmail = (email) => {
        let formValid = this.state.formValid;
        let emailError = this.state.error.emailError;
        let emailErrorMessage = this.state.error.emailErrorMessage;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!pattern.test(email)) {
            emailError = true;
            emailErrorMessage = "This is invalid*";
            formValid = false;
        } else {
            emailError = false;
            emailErrorMessage = "";
            formValid = true;
        }

        this.setState({
            email,
            formValid,
            error: { ...this.state.error, emailError },
            errorMessage: { ...this.state.errorMessage, emailErrorMessage}
        });
        return formValid;
    };

    validateContact = (contact) => {
        let formValid = this.state.formValid;
        let contactError = this.state.error.contactError;
        let contactErrorMessage = this.state.errorMessage.contactErrorMessage;

        let contactPattern = /^[0-9]*$/;
        
        if (contact.trim() == "") {
            contactError = true;
            contactErrorMessage = "This is required";
            formValid = false;
        } else if (contact.trim().length != 10) {
            contactError = true;
            contactErrorMessage = "Please enter valid contact";
            formValid = false;
        } else{
            contactError = false;
            contactErrorMessage = "";
            formValid = true;
        }

        this.setState({
            contact,
            formValid,
            error: { ...this.state.error, contactError },
            errorMessage: { ...this.state.errorMessage, contactErrorMessage}
        });
        return formValid;
    };

    validateAboutYourself = (aboutyourself) => {
        let formValid = this.state.formValid;
        let aboutyourselfError = this.state.error.contactError;
        let aboutyourselfErrorMessage = this.state.errorMessage.aboutyourselfErrorMessage;

        if (aboutyourself == "") {
            aboutyourselfError = true;
            aboutyourselfErrorMessage = "This is required";
            formValid = false;
        }
        if (aboutyourself.length <= 10) {
            aboutyourselfError = true;
            aboutyourselfErrorMessage = "This is required";
            formValid = false;
        }
        else{
            aboutyourselfError = false;
            aboutyourselfErrorMessage = "";
            formValid = true;
        }

        this.setState({
            aboutyourself,
            formValid,
            error: { ...this.state.error, aboutyourselfError },
            errorMessage: { ...this.state.errorMessage, aboutyourselfErrorMessage}
        });
        return formValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (
            this.validateName(this.state.name) &&
            this.validateDOB(this.state.dob) &&
            this.validateEmail(this.state.email) &&
            this.validateContact(this.state.contact) &&
            this.validateAboutYourself(this.state.aboutyourself)
        ) {
            alert("Form is submitted");
            this.props.addData(this.state);
            console.log("successfuly");
            this.setState({
                name: "",
                dob: format(new Date(), "MM/dd/yyyy"),
                email: "",
                contact: "",
                aboutyourself: "",
                formValid: false,
            });
        }
        else{
            console.log("error", this.state.formValid);
        }
    };

    render() {
        return (
            <Box sx={{ padding: 1, border: 1 }} component="form" onSubmit={this.handleSubmit}>
                <Stack sx={{ mx: 10, my: 2 }} direction="column" justifyContent="center" alignContent="content" spacing={2}>
                    <Typography sx={{ fontSize: 20, mx: 10 }} color="text.secondary" gutterBottom>
                        Add Info
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TextField id="name" error={this.state.error.nameError} helperText={this.state.errorMessage.nameErrorMessage} required size="small" label="Name" type="text" value={this.state.name} onChange={this.handleChange}></TextField>
                        <TextField id="contact" error={this.state.error.contactError} helperText={this.state.errorMessage.contactErrorMessage} required size="small" label="Contact" type="text" value={this.state.contact} onChange={this.handleChange}></TextField>
                        <TextField id="email" error={this.state.error.emailError} helperText={this.state.errorMessage.emailErrorMessage} required size="small" label="Email" type="text" value={this.state.email} onChange={this.handleChange}></TextField>
                        <TextField id="dob" error={this.state.error.dobError} helperText={this.state.errorMessage.dobErrorMessage} required label='Date of Birth' type="date" value={this.state.dob} onChange={this.handleChange}></TextField>
                        <TextField id="aboutyourself" error={this.state.error.aboutyourselfError} helperText={this.state.errorMessage.aboutyourselfErrorMessage} required multiline maxRows={4} size="small" label="Tell me About Yourself" type="text" value={this.state.aboutyourself} onChange={this.handleChange}></TextField>
                    </LocalizationProvider>
                    <Button sx={{ mx: 12 }} variant="contained" size="small" type="submit">Submit</Button>
                </Stack>
            </Box>
        )
    }
}

export default AddInfo;