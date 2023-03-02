import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllUserQuery, useGetUserByIdQuery } from "./slicers/getDataAPI";
import { Typography, Box, Card, CardContent } from "@mui/material";

const APIDisplay = () => {
    // const getUsers = useSelector(state =>state.)
    useEffect(()=>{

    },[])

    //Variable for retrieving the data from the getDataAPI slicer
    const responseInfo = useGetAllUserQuery();

    //Checks if responseInfo has any data and if it does, it will map the data to the UI, and if it doesn't
    //it will return a display with a text saying "No Post Yet"
    const userList = responseInfo.data ? (
        responseInfo.data.slice(0, 5).map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <Card variant="outlined" sx={{my:1}}>
                        <CardContent>
                            <Typography textAlign="center">ID: {user.id}</Typography>
                            <Typography textAlign="center">UserID: {user.userId}</Typography>
                            <Typography textAlign="center">Title: {user.title}</Typography>
                            <Typography textAlign="center">Body: {user.body}</Typography>
                        </CardContent>
                    </Card>
                </React.Fragment>
            );
        })
    ) : (
        <p>No Post Yet</p>
    )

    return (
        <Box sx={{ border: 1, borderColor: "black", borderRadius: 1, bgcolor: "white", m: 1, p: 1 }}>
            {userList}
        </Box>
    )
}

export default APIDisplay;