import React, { useState, useEffect } from "react";
import { FormControl, FormHelperText, Button, Collapse, Alert, Card, CardContent, Box, Typography, TextField, Stack, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useGetPlayerDataQuery } from "../../slices/getDataAPI";
import { addPlayers, addScores } from "../../slices/scoreData";

export default function Form() {
    const dispatch = useDispatch();
    const playerData = useSelector(state => state.player.players)

    const responseInfo = useGetPlayerDataQuery();

    const [playerName, setPlayerName] = useState("");

    const [score, setScore] = useState(0);

    const [playerNameError, setPlayerNameError] = useState(false);
    const [playerNameErrorMessage, setPlayerNameErrorMessage] = useState("");

    const [scoreError, setScoreError] = useState(false);
    const [scoreErrorMessage, setScoreErrorMessage] = useState("");

    const [countDownSeconds, setCountDownSeconds] = useState(10);

    const [successShow, setSuccessShow] = useState(false);

    useEffect(() => {
        if (playerData?.length <= 0) {
            responseInfo.data?.Stat[0].Plrs.forEach((data) => {
                dispatch(addPlayers({Aid: data.Aid, Rnk:data.Rnk, Pnm: data.Pnm, Pid: data.Pid, Scrs: parseInt(data.Scrs[1])}))
            })
        }

        if (!playerNameError || !scoreError || successShow) {
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

        if (playerName == "" || playerName.length <= 1) {
            setPlayerNameError(true);
            setPlayerNameErrorMessage("No name included");
        } else {
            setPlayerNameError(false);
            setPlayerNameErrorMessage("");
        }

        if (score <= 0) {
            setScoreError(true);
            setScoreErrorMessage("Score amount cannot be zero or less than zero")
        } else {
            setScoreError(false);
            setScoreErrorMessage("")
        }
    }, [successShow, countDownSeconds, responseInfo, playerName, playerNameError, playerNameErrorMessage, score, scoreError, scoreErrorMessage])


    // playerData.length ? (playerData.map((data) => {
    //     console.log(data.Scrs);
    // })) : "";

    function handleSubmit(e) {
        e.preventDefault();

        if (!playerNameError && !scoreError) {
            setSuccessShow(true);

            dispatch(addScores({ name: playerName, score: score }))
            setPlayerName("");
            setScore(0);
        }
    }
    return (
        <Box alignContent="center" justifyContent="center" component="form" onSubmit={handleSubmit}>
            <Collapse in={successShow} sx={{ marginBottom: "1px", marginTop: "2px" }}>
                <Alert severity="info">
                    <Typography sx={{ width: "100%" }} textAlign="center">Successfully added score!</Typography>
                </Alert>
            </Collapse>

            <Card variant="outlined" sx={{ width: "98%", height: "100%", borderColor: "black", my: 1, marginLeft: "2px" }}>
                <CardContent>
                    <Stack alignItems="center" justifyContent="center" direction="column" sx={{ marginTop: "1px" }} spacing={3}>
                        <Typography variant="h5">
                            Score Page:
                        </Typography>

                        <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
                            <Typography>
                                Select player's name:
                            </Typography>
                            <FormControl error={playerNameError}>
                                <Select id="playerSelect" inputProps={{ 'aria-label': 'Without label' }} value={playerName} onChange={(e) => setPlayerName(e.target.value)}>
                                    {playerData.length ? (playerData.map((data) => (
                                        <MenuItem value={data.Pnm} key={data.Pid}>{data.Pnm}</MenuItem>
                                    ))) : <MenuItem value={"None"} >No player data</MenuItem>}
                                </Select>
                                <FormHelperText>{playerNameErrorMessage}</FormHelperText>
                            </FormControl>
                        </Stack>

                        <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
                            <Typography>Add Score: </Typography>
                            <TextField id="score" type="number" value={score} onChange={(e) => setScore(e.target.value)} error={scoreError} helperText={scoreErrorMessage} label="Set the score to be added">0</TextField>
                        </Stack>

                        <Button variant="contained" type="submit">Submit</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}