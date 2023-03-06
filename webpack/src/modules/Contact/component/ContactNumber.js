import React from "react"
import { Card, CardContent, Typography } from "@mui/material"

export default function ContactNumber() {
    return(
        <>
            <Card variant="outlined" sx={{ width: "300px", height: "50px", borderColor: "black", marginTop:"50px"}}>
                <CardContent>
                    <Typography>
                        Contact Number: (+63)9991898117
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}