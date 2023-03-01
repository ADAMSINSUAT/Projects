import React, { Component } from "react";
import Form from "../component/Form";
import { connect } from "react-redux";
import UserDisplay from "../component/UserDisplay";
import PropTypes from "prop-types";
import { Paper, Typography, Tab, Tabs, Box, Stack } from "@mui/material";

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
const employeeTabsArray = [
    <Stack direction="column" sx={{width:"100%", height:"100%"}}>
        <Form/>
    </Stack>
    , <UserDisplay user/>]
    
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

class Employee extends Component {
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
                        {employeeTabsArray[this.state.value]}
                    </Paper>
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, null)(Employee);
