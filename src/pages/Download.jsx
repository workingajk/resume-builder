import { Typography } from "@mui/material";
import React from "react";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function Download() {
    return (
        <>
            <Stack
                direction="row"
                sx={{ justifyContent: "space-between", my: "40px", mx: "80px" }}
            >
                <Typography variant="h4" sx={{ fontFamily: "math" }}>
                    All Downloaded Resume Details
                </Typography>
                <Button
                    sx={{ width: "12%", backgroundColor: "brown" }}
                    variant="contained"
                >
                    View in Chart
                </Button>
            </Stack>
            <Box>
                <Typography
                    variant="h5"
                    sx={{ marginLeft: "65px", fontFamily: "initial" }}
                >
                    Total Downloaded resumes from our site is 0
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent:'space-around',
                    "& > :not(style)": {
                        m: 1,
                        width: "25%",
                        height: 400,
                        mx: "60px",
                        my: "30px",
                    },
                }}
            >
                <Paper elevation={24}>Resume</Paper>
                <Paper elevation={24}>Resume</Paper>
                <Paper elevation={24}>Resume</Paper>
                <Paper elevation={24}>Resume</Paper>
                <Paper elevation={24}>Resume</Paper>
                <Paper elevation={24}>Resume</Paper>
            </Box>
        </>
    );
}

export default Download;
