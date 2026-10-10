import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Stack, Typography } from "@mui/material";

function Preview({
    elevation = 24,
    resume = {
        name: "",
        loc: "",
        job: "",
        mail: "",
        contact: "",
        git: "",
        linkedin: "",
        degree: "",
        college: "",
        gradYear: "",
        skills: [],
        summary: "",
    },
}) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    minHeight: 800,
                },
            }}
        >
            <Paper
                elevation={elevation}
                sx={{
                    boxSizing: "border-box",
                    p: { xs: 3, sm: 5 },
                    width: "794px",
                    minHeight: "1123px",
                    color: "#263238",
                    backgroundColor: "#fff",
                }}
            >
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                    {resume.name}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {resume.job}
                </Typography>
                <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{ textAlign: "center", justifyContent: "center" }}
                    divider={<Divider />}
                >
                    <Typography variant="body1"> {resume.contact}</Typography>
                    <Typography variant="body1"> {resume.mail}</Typography>
                    <Typography variant="body1">{resume.linkedin}</Typography>
                    <Typography variant="body1"> {resume.git}</Typography>
                    <Typography variant="body1"> {resume.loc}</Typography>
                </Stack>
                <Divider />
                <Typography variant="h4">Professional Summary</Typography>
                <Typography variant="body1">{resume.summary}</Typography>
                <Divider />
                <Typography variant="h4">Technical Skills</Typography>
                <Typography variant="body1">
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {resume.skills.map((skill) => (
                            <Typography>{skill}</Typography>
                        ))}
                    </Box>
                </Typography>
                <Divider />
                <Typography variant="h4">Education</Typography>
                <Typography variant="body1">
                    Bachelor's Degree in {resume.degree}
                </Typography>
                <Typography variant="body1">
                    University/College Name: {resume.college}
                </Typography>
                <Typography variant="body1">
                    Year of Graduation: {resume.gradYear}
                </Typography>
            </Paper>
        </Box>
    );
}

export default Preview;
