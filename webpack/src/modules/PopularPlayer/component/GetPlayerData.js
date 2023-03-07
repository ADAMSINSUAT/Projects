import React, { Component, useState, useEffect } from "react";
import { useGetPlayerDataQuery } from "../../slices/getDataAPI";
import { Box, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addPlayers } from "../../slices/scoreData";

export default function GetPlayerData() {
    const dispatch = useDispatch();
    const playerData = useSelector(state=>state.player.players)

    const responseInfo = useGetPlayerDataQuery();

    useEffect(()=>{
        if (playerData?.length <= 0) {
            responseInfo.data?.Stat[0].Plrs.forEach((data) => {
                console.log(data)
                dispatch(addPlayers({Aid: data.Aid, Rnk:data.Rnk, Pnm: data.Pnm, Pid: data.Pid, Scrs: parseInt(data.Scrs[1])}))
            })
        }
    },[responseInfo.data])

    const playerList = playerData.length ? (
        <Box alignContent="center" justifyContent="center" sx={{ p: 2 }}>
            {playerData.map((data) => {
                return(
                    <Card key={data.Pid} sx={{ minWidth: 275, border: 1, borderRadius: 1, borderColor: "black", my: 1 }} variant="h5-outlined">
                        <CardContent>
                            <Typography textAlign="center" gutterBottom variant="h5">
                                ID: {data.Aid}
                            </Typography>
                            <Typography textAlign="center" gutterBottom variant="h5">
                                Name: {data.Pnm}
                            </Typography>
                            <Typography textAlign="center" gutterBottom variant="h5">
                                Rank: {data.Rnk}
                            </Typography>
                            <Typography textAlign="center" gutterBottom variant="h5">
                                Player External ID: {data.Pid}
                            </Typography>
                            <Typography textAlign="center" gutterBottom variant="h5">
                                Scores: {data.Scrs}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>

    ) : (
        <p>No Post Yet</p>
    );

    return (
        <>
            {playerList}
        </>
    )
}