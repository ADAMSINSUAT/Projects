import React from "react";
import { Typography } from "@mui/material";

export default function Location() {
    return (
        <>
            <Typography sx={{ px: 1, mt: 1, bgcolor: "white", width: "80vh", height: "20px" }}>
                Location: 2 Venture Dr, #10-18 Vision Exchange, Singapore 608526
            </Typography>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.974531086127!2d103.744732!3d1.3298784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da107545d59779%3A0x4773c1ad3d295634!2sGECO%20Asia%20Pte.%20Ltd.!5e0!3m2!1sen!2sph!4v1677147418090!5m2!1sen!2sph"
                className="google-map"
                width="98%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                samesite="none"
                style={{marginLeft:"4px"}}
            />
        </>
    )
}