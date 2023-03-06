import React from "react"
import { Card, CardContent, Typography } from "@mui/material"

export default function Email() {
    return (
        <>
            <Card variant="outlined" sx={{ width: "300px", height: "50px", borderColor: "black", my: 1 }}>
                <CardContent>
                    <Typography>
                        Email: admin@gmail.com
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}