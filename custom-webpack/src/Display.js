import * as React from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";

const Display = ({ personData }) => {
    const personList = personData.map((person, index) => {
        return (
            <React.Fragment key={index}>
                <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{person.name}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{person.contact}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{person.email}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{person.dob}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{person.aboutyourself}</Typography>
                </CardContent>
                </Card>
            </React.Fragment>
        )
    })
    
    return (
        <>
        {personList}
        </>
    );
}

export default Display;