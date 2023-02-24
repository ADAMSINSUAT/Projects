import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";
import { getPokeBerriesAPI } from "../assets/services";
import ClipLoader from "react-spinners/ClipLoader";
import { Stack, Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Box>
                <Typography textAlign="center" sx={{ borderTop: 1, borderLeft: 1, borderRight: 1, bordercolor: "black", borderRadius: 1, mt: 2, fontSize: 20, p: 1, bgcolor: "white", fontColor: "black" }}>
                    Contact Information
                    <Stack justifyContent="center" alignItems="center" sx={{ mb: 1, bgcolor: "white", width: "100%", borderRadius: 1 }} direction="row" spacing={5}>
                        <Card variant="outlined" sx={{ width: "300px", height: "50px", borderColor: "black", my: 1 }}>
                            <CardContent>
                                <Typography>
                                    Contact Number: (+63)9991898117
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{ width: "300px", height: "50px", borderColor: "black", my: 1 }}>
                            <CardContent>
                                <Typography>
                                    Email: admin@gmail.com
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Typography>

                <Typography sx={{px:1, mt:1, bgcolor:"white", width:"80vh", height:"20px"}}>
                    Location: 2 Venture Dr, #10-18 Vision Exchange, Singapore 608526
                </Typography>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.974531086127!2d103.744732!3d1.3298784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da107545d59779%3A0x4773c1ad3d295634!2sGECO%20Asia%20Pte.%20Ltd.!5e0!3m2!1sen!2sph!4v1677147418090!5m2!1sen!2sph"
                    className="google-map"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        )
    }
}
Contact.defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
};

export default Contact;