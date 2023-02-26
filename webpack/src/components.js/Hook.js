import React from "react";
import { useState, useEffect } from "react";
import { AlertTitle, TextField, Button, Box, Alert, Stack, Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, useStepContext } from "@mui/material";
import { map } from "lodash";
import { object } from "prop-types";

export default function Hook() {

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [occupationError, setOccupationError] = useState(false);

    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [ageErrorMessage, setAgeErrorMessage] = useState("");
    const [occupationErrorMessage, setOccupationErrorMessage] = useState("");

    const [formAlert, setFormAlert] = useState(false);

    const [arr, setArr] = useState([
        {
            "name": "Adam",
            "age": 23,
            "occupation": "MS Tech Solutions Trainee"
        }
        , {
            "name": "John Michael",
            "age": 25,
            "occupation": "ASP.Net Developer"
        }
    ]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [occupation, setOccupation] = useState("");

    // console.log(arr[0]);

    useEffect(() => {

        if (nameError || ageError || occupationError) {
            setFormAlert(true);
        } else {
            setFormAlert(false);
        }
    }, [nameError, ageError, occupationError])

    function CheckInput() {
        // let contactPattern = /^[0-9]*$/;

        if (name == "") {
            setNameError(true);
            setNameErrorMessage("Must include a name");
        } else {
            setNameError(false);
            setNameErrorMessage("");
        }

        if (age < 17) {
            setAgeError(true);
            setAgeErrorMessage("Age must be 18 or above");
        } else {
            setAgeError(false);
            setAgeErrorMessage("");
        }

        // console.log(occupation.trim().length<10)
        if (occupation == "") {
            setOccupationError(true);
            setOccupationErrorMessage("Must give an occupation");
        } else {
            setOccupationError(false);
            setOccupationErrorMessage("");
        }
    }

    console.log(name)
    function Update(event) {
        event.preventDefault();
        CheckInput();

        if (nameError || ageError || occupationError) {
            setFormAlert(true);
        } else {
            setFormAlert(false);

            arr[1] = { ...arr[1], name: name, age: age, occupation: occupation };
            setArr([...arr]);

            setName("");
            setAge(0);
            setOccupation("");
        }
    }

    function changeTwoProperties() {
        arr[0] = { ...arr[1], name: "Hehe", age: 100, occupation: "Hihi" };
        arr[1] = { ...arr[1], name: "Meme", age: 50, occupation: "Huhu" };
        setArr([...arr]);
    }
    return (
        <Box sx={{ borderColor: "black", border: 1, borderRadius: 1 }} component="form" onSubmit={Update}>
            {formAlert ? <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                There is something wrong with your input, please check!
            </Alert> : ""}
            <h1 style={{ margin: "1rem", padding: "1rem" }}>Change second index of an array</h1>

            <Typography textAlign="center" sx={{ fontFamily: "sans-serif", fontSize: 32 }}>Array of Object</Typography>

            <TableContainer sx={{ border: 2, width: 'auto', m: 1 }}><Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Occupation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_.map(arr, (value, index) =>
                        <TableRow key={index}>
                            <TableCell align="center">{value.name}</TableCell>
                            <TableCell align="center">{value.age}</TableCell>
                            <TableCell align="center">{value.occupation}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            </TableContainer>

            <Stack justifyContent="center" alignContent="center" sx={{ p: 1, m: 1 }} spacing={1} direction="column">

                <Typography>Input Field</Typography>
                <TextField placeholder="Name" id="name" error={nameError} helperText={nameErrorMessage} size="small" type="text" value={name} onChange={(event) => setName(event.target.value)}></TextField>
                <TextField placeholder="Age" type="number" id="age" error={ageError} helperText={ageErrorMessage} size="small" value={age} onChange={(event) => setAge(event.target.value)}></TextField>
                <TextField placeholder="Occupation" id="occupation" error={occupationError} helperText={occupationErrorMessage} size="small" type="text" value={occupation} onChange={(event) => setOccupation(event.target.value)}></TextField>

                <Button sx={{ mx: 12 }} variant="contained" size="small" type="submit">Update second index</Button>
                <Button sx={{ mx: 12 }} variant="contained" size="small" onClick={changeTwoProperties}>Update two property values</Button>
            </Stack>
        </Box>
    )
}