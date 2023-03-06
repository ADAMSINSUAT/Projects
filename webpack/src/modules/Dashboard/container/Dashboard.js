import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Tab, Tabs, Box, Stack } from "@mui/material";
import Form from "../component/Form";
import ScorePage from "../component/Scoreboard";

const dashboardArray = [<Form/>, <ScorePage/>]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
    
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

class Dashboard extends Component {
    state = {
        value: 0,
    };

    handleChange = (e, value) => {
        this.setState({
            value,
        });
    };

    render() {
        return (
            <Box sx={{ width: "100%", mt: 1 }}>
                <Box sx={{ border: 1, borderColor: "black", borderRadius: 1, bgcolor: "white", borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="Form" {...a11yProps(0)} />
                        <Tab label="Api Data" {...a11yProps(1)} />
                    </Tabs>
                    <Paper>
                        {dashboardArray[this.state.value]}
                    </Paper>
                </Box>
            </Box>
        );
    }
}

export default Dashboard;