import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, onDeleteUser, onGetUsers } from "../../action";
import { Button, Box, Card, CardContent, CardActions, Stack, Table, TableHead, TableRow, Typography } from "@mui/material";

const UserDisplay = () => {
  const users = useSelector((state) => state.users);

  function handleDelete(id){
    dispatch(onDeleteUser(id));
  }
  const usersList = users.length ? (
    <Box alignContent="center" justifyContent="center" sx={{ p: 2 }}>
     <Typography sx={{mb:2}} textAlign="center">List of Users:</Typography>
      {users.map((data) => {
        return (
          <Card key={data.id} sx={{ minWidth: 275, border:1, borderRadius:1, borderColor:"black", my:1 }} variant="h5-outlined">
            <CardContent>
            <Typography textAlign="center" gutterBottom variant="h5">
                ID: {data.id}
              </Typography>
              <Typography textAlign="center" gutterBottom variant="h5">
                Name: {data.name}
              </Typography>
              <Typography textAlign="center" gutterBottom variant="h5">
                Job: {data.job}
              </Typography>
              <Typography textAlign="center" gutterBottom variant="h5">
                Created At: {data.createdAt}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
              alignSelf: "stretch",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0,
            }}>
              <Button sx={{mb:1}} variant="contained" value ={data.id} onClick={()=>handleDelete(event.target.value)} size="small">Delete</Button>
            </CardActions>
          </Card>
        )
      })}
    </Box>

  ) : (
    <p>No Post Yet</p>
  );

  const dispatch = useDispatch();

  useEffect(() => {
  }, [users]);

  return (
    <>
      {usersList}
    </>
  );
};

export default UserDisplay;
