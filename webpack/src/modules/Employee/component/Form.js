import React, { Component } from "react";
import { Container } from "@mui/material";
import { connect } from 'react-redux';
import { Box, Stack, TextField, Button, Typography, Collapse, Alert, AlertTitle } from "@mui/material";
import { onGetUsers, onpostUsers } from "../../action";
import { createTheme } from "@mui/material";
import { isNull } from "lodash";
import UserDisplay from "./UserDisplay";

const theme = createTheme({
    spacing: 4,
});

theme.spacing(2);

class Form extends Component {
    state = {
        name: "",
        job: "",
        error: {
            nameError: false,
            jobError: false,
        },
        errorMessage: {
            nameErrorMessage: "",
            jobrrorMessage: "",
        },
        formValid: false,
        alertSeconds: 3000
    };

    handleChange = (e) => {

        if (e.target.id === "name") {
            this.validateName(e.target.value);
        }
        if (e.target.id == "job") {
            this.validateJob(e.target.value);
        }
    };

    validateName = (name) => {
        let nameError = this.state.error.nameError;
        let nameErrorMessage = this.state.errorMessage.nameErrorMessage;
        let formValid = this.state.formValid;

        if (name == "") {
            nameErrorMessage = "Please enter a name";
            nameError = true;
            formValid = false;
        } else {
            nameErrorMessage = "";
            nameError = false;
            formValid = true;
        }

        this.setState({
            name,
            error: { ...this.state.error, nameError },
            errorMessage: { ...this.state.errorMessage, nameErrorMessage }
        });
        return formValid;
    };

    validateJob = (job) => {
        let jobError = this.state.error.jobError;
        let jobErrorMessage = this.state.errorMessage.jobErrorMessage;
        let formValid = this.state.formValid;

        if (job.length < 10 || job == "") {
            jobErrorMessage = "Please enter a job";
            jobError = true;
            formValid = false;
        } else {
            jobErrorMessage = "";
            jobError = false;
            formValid = true;
        }

        this.setState({
            job,
            error: { ...this.state.error, jobError },
            errorMessage: { ...this.state.errorMessage, jobErrorMessage }
        });
        return formValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validateName(this.state.name) && this.validateJob(this.state.job)) {
            const data = {
                name: this.state.name,
                job: this.state.job
            }
            this.props.postUserData(data);

            this.setState({
                formValid: true,
                name: "",
                job: "",
            });
        } else {
            this.setState({
                formValid: false
            });
        }
    };

    render() {
        return (
            <Container
                component="form"
                onSubmit={this.handleSubmit}
                maxWidth="sm"
                theme={this.theme} style={{ display: "flex", flexDirection: "column", p: 1, justifyContent: "center", textAlign: "center", marginTop: "20px" }}
            >
                <Collapse in={this.state.formValid} sx={{mb:1}}>
                    <Alert action={
                        <Button onClick={() => {
                            this.setState({
                                formValid: false
                            })
                        }}>X</Button>
                    } sx={{ minWidth: "500px", width: "500px" }} severity="info">
                        <Typography sx={{width:"300px"}} textAlign="end">Thank you for registering with us!</Typography>
                    </Alert>
                </Collapse>

                <Typography>Register User Form</Typography>
                <Stack sx={{ mx: 10, my: 2 }} direction="column" justifyContent="center" alignContent="content" spacing={2}>
                    <Typography textAlign="center" sx={{ fontSize: 20, mx: 10 }} color="text.secondary" gutterBottom>
                    </Typography>
                    <TextField id="name" error={this.state.error.nameError} helperText={this.state.errorMessage.nameErrorMessage} required size="small" label="Name" type="text" value={this.state.name} onChange={this.handleChange}></TextField>
                    <TextField id="job" error={this.state.error.jobError} helperText={this.state.errorMessage.jobErrorMessage} required size="small" label="Job" type="text" value={this.state.job} onChange={this.handleChange}></TextField>
                    <Button sx={{ mx: 12 }} variant="contained" size="small" type="submit">Submit</Button>
                </Stack>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postUserData: (user) => dispatch(onpostUsers(user))
    }
}
export default connect(null, mapDispatchToProps)(Form);
