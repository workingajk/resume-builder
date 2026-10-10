import { Box, Stack } from "@mui/material";
import React from "react";
import ResumeInputs from "./../components/ResumeInputs";
import Preview from "./../components/Preview";

function Info() {
    const [resume, setResume] = React.useState({
        name: "",
        loc: "",
        job: "",
        mail: "",
        contact: "",
        git: "",
        linkedin: "",
        skills:[],
        degree: "",
        college: "",
        gradYear: "",
        summary: "",
    });


    return (
        <div>
            <Stack
                direction={{ sx: "column", sm: "row" }}
                sx={{
                    // display:'flex',
                    justifyContent: "space-evenly",
                    alignItems: "top",
                    marginTop: "10px",
                    p: 7,
                }}
            >
                <Box sx={{ width: "100%", p: 4 }}>
                    <ResumeInputs resume={resume} setResume={setResume} />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Preview resume={resume} />
                </Box>
            </Stack>
        </div>
    );
}

export default Info;
