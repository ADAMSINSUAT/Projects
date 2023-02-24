import React, { Component } from "react";
import buildingPic from "../assets/corporate_building.jpg";
import { Box, Typography, Card, CardMedia, CardActions, CardContent } from "@mui/material";

class About extends Component {
    render() {
        return (
            <>
                <Card sx={{ mt: 2, border:1, borderColor:"black", borderRadius:1 }}>
                    <div style={{ position: "relative" }}>
                        <CardMedia style={{ height: "100%", width: "100%" }} component="img" image={buildingPic} />
                        <Typography textAlign="left" style={{ fontSize: 32, fontFamily: "sans-serif", position: "absolute", color: "white", top: 650, left: "35%", transform: "translateX(-50%)", }}>"Band is a multidisciplinary creative studio based in the Pacific Northwest.
                            Our company has been in the industry for the past 25 years. All of our clients can attest to the services that we provide."
                        </Typography>
                    </div>
                </Card>
            </>
        )
    }
}

export default About;