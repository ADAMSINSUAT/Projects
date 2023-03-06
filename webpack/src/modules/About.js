import React, { Component } from "react";
import buildingPic from "../assets/corporate_building.jpg";
import basketballPic from "../assets/Basketball.png"
import carouselpic01 from "../assets/Premier_league_pics/Soccerpic-01.jpg"
import carouselpic02 from "../assets/Premier_league_pics/Soccerpic-02.jpg"
import carouselpic03 from "../assets/Premier_league_pics/Soccerpic-03.jpg"
import pic01 from "../assets/Basketball_pics/Basketballpic-01.jpg"
import { Box, Typography, Card, CardMedia, CardActions, CardContent } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import PLVideo from "../assets/Premier-League_Epic_Moments.mp4";

const carouselmap = [carouselpic01, carouselpic02, carouselpic03];

class About extends Component {
    render() {
        return (
            <Box sx={{ borderRadius: 1, p: 1, backgroundColor: "white", mt: 1 }}>
                <Typography fontFamily="-apple-system" variant="h2">About Premier League:</Typography>
                <Card sx={{ mt: 2, mb: 2, border: 1, borderColor: "black", borderRadius: 1 }}>
                    <CardMedia sx={{ height: "100%", width: "50%" }} image={pic01} />
                    <div style={{ position: "relative" }}>
                        <CardMedia style={{ height: "100%", width: "100%" }} component="img" image={basketballPic} />
                        <Typography variant="h4" color="white" textAlign="right" style={{ fontFamily: "sans-serif", position: "absolute", top: "42%", left: "25%", p: "2px", marginRight: "2px" }}>In the early 1990s, English First Division clubs believed that a radical restructuring of football was needed if they and the game in general were to develop and flourish.
                        So on 17 July 1991, they signed the Founder Members Agreement, establishing the basic principles for the setting up of the Premier League.
                        </Typography>
                    </div>
                </Card>
                <Typography fontFamily="-apple-system" variant="h4" sx={{mt:10}}>Premier League Moments</Typography>
                <Carousel sx={{maxHeight:"500px", mb:"20px"}}>
                    {carouselmap.map((photo, index) => {
                        return (
                            <CardMedia key={index} component="img" image={photo} />
                        )
                    })}
                </Carousel>
                <Typography fontFamily="-apple-system" variant="h4">10 Unforgettable Premier League Moments From 2022</Typography>
                <CardMedia controls component="video" src={PLVideo}/>
            </Box>
        )
    }
}

export default About;