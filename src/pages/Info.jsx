import { Box, Stack } from "@mui/material";
import React from "react";
import ResumeInputs from "./../components/ResumeInputs";
import Preview from "./../components/Preview";


function Info() {


    return (
        <div>
            <Stack
                direction={{ sx: "column", sm: "row" }}
                sx={{
                    // display:'flex',
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: "100px",
                }}
            >
                <Box sx={{width:'100%',p:4}}>
                    <ResumeInputs />
                </Box>
                <Box sx={{width:'100%'}}>
                    <Preview />
                </Box>
            </Stack>
        </div>
    );
}

export default Info;
