import * as React from "react";
import { Button, Box } from "@mui/material";

const Hoc = (Component) => {
    const color = ["orange", "green", "blue", "red", "yellow"];
    let randomColor = color[Math.floor(Math.random() * color.length)];

    return (props) => {
        return (
            <>
                <Box sx={{ bgcolor: randomColor }}>
                    <Component />
                </Box>
            </>
        )
    }
}

export default Hoc;