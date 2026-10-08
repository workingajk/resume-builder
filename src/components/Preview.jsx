import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography } from "@mui/material";

function Preview({elevation=24}) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    height: 600,
                },
            }}
        >
            <Paper
                elevation={elevation}
                sx={{
                    padding: "30px",
                    width: "600px",
                    height: "600px",
                }}
            >
                <Typography variant="h3" sx={{}}>Name</Typography>
                <Typography variant="body1">Phone:{}</Typography>
                <Typography variant="body1">Email:{}</Typography>
                <Typography variant="body1">Linkedin:{}</Typography>
                <Typography variant="body1">Github:{}</Typography>
                <Typography variant="body1">Location:{}</Typography>
                <Divider />
                <Typography variant="h4">Professional Summary</Typography>
                <Typography variant="body1">{}</Typography>
                <Divider />
                <Typography variant="h4">Technical Skills</Typography>
                <Typography variant="body1">Technical Skills</Typography>
                <Divider />
                <Typography variant="h4">Education</Typography>
                <Typography variant="body1">Bachelor's Degree in {}</Typography>
                <Typography variant="body1">
                    University/College Name: {}
                </Typography>
                <Typography variant="body1">Year of Graduation: {}</Typography>
            </Paper>
        </Box>
    );
}

export default Preview;
