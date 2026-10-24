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
    id,
}) {


    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    minHeight: 600,
                },
            }}
        >
            <Paper
            id="result"
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
                    {resume.name ? resume.name : "Full Name"}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {resume.job ? resume.job : "Job Role"}
                </Typography>
                <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{ textAlign: "center", justifyContent: "center", flexWrap:'wrap' }}
                    divider={<Divider />}
                >
                    <Typography variant="body1">
                        {" "}
                        {resume.contact ? resume.contact : "Contact"}
                    </Typography>
                    <Typography variant="body1">
                        {" "}
                        {resume.mail ? resume.mail : "Gmail"}
                    </Typography>
                    <Typography variant="body1">
                        {resume.linkedin ? resume.linkedin : "Linkedin"}
                    </Typography>
                    <Typography variant="body1">
                        {" "}
                        {resume.git ? resume.git : "Github"}
                    </Typography>
                    <Typography variant="body1">
                        {" "}
                        {resume.loc ? resume.loc : "Location"}
                    </Typography>
                </Stack>
                <Divider />
                <Typography variant="h4">Professional Summary</Typography>
                <Typography variant="body1">
                    {resume.summary
                        ? resume.summary
                        : "Professional Summary will be shown here"}
                </Typography>
                <Divider />
                <Typography variant="h4">Technical Skills</Typography>
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "5",
                            flexDirection: "row",
                        }}
                    >
                        {resume.skills ? (
                            resume.skills.map((skill) => (
                                <Typography
                                    sx={{
                                        // backgroundColor: "brown",
                                        padding: "4px 8px",
                                        margin: "2px 4px",
                                    }}
                                >
                                    {skill}
                                </Typography>
                            ))
                        ) : (
                            <Typography>Technical skills</Typography>
                        )}
                    </Box>
                </Box>
                <Divider />
                <Typography variant="h4">Education</Typography>
                <Typography variant="body1">
                    Bachelor's Degree in{" "}
                    {resume.degree ? resume.degree : "Degree"}
                </Typography>
                <Typography variant="body1">
                    University/College Name:{" "}
                    {resume.college ? resume.college : "College"}
                </Typography>
                <Typography variant="body1">
                    Year of Graduation:{" "}
                    {resume.gradYear ? resume.gradYear : "Graduation Year"}
                </Typography>
            </Paper>
        </Box>
    );
}

export default Preview;
