import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllUserQuery, useGetUserByIdQuery } from "./slicers/getDataAPI";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { addUsers } from "./slicers/userData";
import ExportExcel from "./ExportExcel";
import _ from "lodash";

const APIDisplay = () => {
    let getUsers = useSelector(state=>state.user.userData)
    const dispatch = useDispatch();

    //Variable for retrieving the data from the getDataAPI slicer
    const responseInfo = useGetAllUserQuery();

    useEffect(() => {
        responseInfo.data? (
            _.forEach(responseInfo.data?.slice(0, 5), function(data){
                dispatch(addUsers(data))
            })
            ): "";
    }, [responseInfo.data])

    //Checks if responseInfo has any data and if it does, it will map the data to the UI, and if it doesn't
    //it will return a display with a text saying "No Post Yet"
    const userList = getUsers.length ? (
        getUsers.map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <Card variant="outlined" sx={{ my: 1 }}>
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
        <Box alignItems="center" alignContent="center" justifyContent="center" sx={{ border: 1, borderColor: "black", borderRadius: 1, bgcolor: "white", m: 1, p: 1 }}>
            <ExportExcel excelData={getUsers} fileName="UserData Report Sheet"/>
            {userList}
        </Box>
    )
}

export default APIDisplay;