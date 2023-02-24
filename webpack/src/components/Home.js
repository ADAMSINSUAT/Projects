import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";
import { getPokeBerriesAPI } from "../assets/services";
import ClipLoader from "react-spinners/ClipLoader";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Register from "./Register";

class Home extends Component {
    state = {
        pokeberryData: [],
    }

    componentDidMount = () => {

        let data = axios.get(getPokeBerriesAPI).then((res) => {
            // console.log(res.data.results);
            this.setState({
                pokeberryData: res.data.results,
            })
        }).catch((err) => {
            console.log(err);
        })

        console.log(data);
    }
    render() {
        const PokeBerryList = this.state.pokeberryData.map((pokeberry, index) => {
            return (
                <React.Fragment key={index}>
                    <Card sx={{mt:1, maxWidth: "100px", maxWidth: true }}>
                        <CardContent>
                            <p>{pokeberry.name}</p>
                            <p>{pokeberry.url}</p>
                        </CardContent>
                    </Card>
                </React.Fragment>
            );
        });
        return (
            <Box justifyContent="center" alignItems="center" sx={{mt:1, border:1, borderColor:"black", borderRadius:1, bgcolor:"white"}}>
                <Typography sx={{bgcolor:"white", borderColor:"black", borderBottom:1}} textAlign="center">PokeBerry Data</Typography>
                {PokeBerryList}
            </Box>
        )
    }
    // render(){
    //     return(
    //         <>
    //         </>
    //     )
    // }
}

export default Home;
