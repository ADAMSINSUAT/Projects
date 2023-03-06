import React, { Component} from "react";
import _ from "lodash";
import axios from "axios";
import { getPokeBerriesAPI } from "../../../assets/services";
import ClipLoader from "react-spinners/ClipLoader";
import { Stack, Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import GoogleMapReact from 'google-map-react';
import { useGetPlayerDataQuery } from "../../slices/getDataAPI";
import GetPlayerData from "../component/GetPlayerData";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class PopularPlayer extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Box>
                <Box sx={{ width: "100%", mt: 2, border: 1, bordercolor: "black", borderRadius: 1, bgcolor: "white" }}>

                    <Stack justifyContent="left" alignContent="center" direction="column" sx={{ width: "100%", paddingLeft:"10px" }}>
                        <Typography textAlign="left" sx={{ fontSize: 20, p: 1, fontColor: "black" }}>
                            Popular Player Data:
                        </Typography>
                        <GetPlayerData/>
                    </Stack>
                </Box>
            </Box>
        )
    }
}
PopularPlayer.defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
};

export default PopularPlayer;