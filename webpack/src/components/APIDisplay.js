import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllUserQuery, useGetUserByIdQuery } from "./slicers/getDataAPI";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { addUsers } from "./slicers/userData";
import ExportExcel from "./ExportExcel";
import _ from "lodash";

const APIDisplay = () => {
    //this is the state selector for retrieving the data from the userData state from the userData slice.
    let getUsers = useSelector(state => state.user.data);

    //this is the variable for using the dispatch function of the react-redux. This will be used to call
    //the reducers from the getDataAPI and userData slices.
    const dispatch = useDispatch();

    //Variable for retrieving the data from the getDataAPI slicer
    const responseInfo = useGetAllUserQuery();

    //Used a useEffect to refresh the page when responseInfo now has data and to push
    //those data into the addUsers reducer from the userData slice.
    useEffect(() => {

        //Created an array for temporary storage of the data from responseInfo in order to change the object's
        //name
        const newArray = [];

        //Condition for checking if responseInfo has data. If it has data, it will then perform a forEach function
        //where each object value will be assigned a new name. If it doesn't have any data, it will do nothing.
        responseInfo.data ? (
            _.forEach(responseInfo.data?.slice(0, 5), function (data) {
                newArray.push({ ID: data.id, UserID: data.userId, Title: data.title, Body: data.body })
            })
        ) : "";

        //Condition for checking if newArray has data stored. If it has some data, then it will iterate
        //each data and it will then call addUsers reducer from userData slice and pass each object data.
        //In the addUsers reducer, it will push each object data to the userData state.
        //If it doesn't have ay data, it will do nothing
        newArray.length ? (
            _.forEach(newArray, function (data) {
                dispatch(addUsers(data))
            })
        ): "";
        //responseInfo.data is used as a condition for when the useEffect will activate
    }, [responseInfo.data])

    //Checks if responseInfo has any data and if it does, it will map the data to the UI, and if it doesn't
    //it will return a display with a text saying "No Post Yet"
    const userList = getUsers.length ? (
        getUsers.map((user) => {
            return (
                <React.Fragment key={user.ID}>
                    <Card variant="outlined" sx={{ my: 1 }}>
                        <CardContent>
                            <Typography textAlign="center">ID: {user.ID}</Typography>
                            <Typography textAlign="center">UserID: {user.userID}</Typography>
                            <Typography textAlign="center">Title: {user.Title}</Typography>
                            <Typography textAlign="center">Body: {user.Body}</Typography>
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
            {/* Passes the getUsers variable to the excelData prop of the ExportExcel component */}
            <ExportExcel excelData={getUsers} />
            {userList}
        </Box>
    )
}

export default APIDisplay;