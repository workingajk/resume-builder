import React, { useEffect, useState } from "react";
import Preview from "../components/Preview";
import { Box, Button, Stack } from "@mui/material";
import Edit from "../components/Edit";
import { useParams } from "react-router-dom";
import { getResumeAPI } from "../services/apiService";

function View() {
    const { id } = useParams();
    console.log(id);
    const [resume,setResume] = useState()

    const viewResume = async () => {
        const response = await getResumeAPI(id);
        console.log(response.data);
        setResume(response.data)
        
    };
    useEffect(() => {
        viewResume();
    }, []);
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(resume);
    return (
        <>
            <Stack
                direction={"row"}
                spacing={5}
                sx={{
                    p: 4,
                    // alignItems:'center',
                    justifyContent: "center",
                }}
            >
                <Button variant="primary" sx={{ color: "brown" }}>
                    Download CV
                </Button>
                <Button
                    variant="primary"
                    sx={{ color: "brown" }}
                    onClick={handleOpen}
                >
                    Edit CV
                </Button>
                <Button variant="primary" sx={{ color: "brown" }}>
                    Home
                </Button>

                <Edit
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                    resume={resume}
                    setResume={setResume}
                    id={id}
                />
            </Stack>
            <Box
                sx={{
                    paddingX: "20%",
                    paddingY: "30px",
                }}
            >
                <Preview elevation="0"  resume={resume}/>
            </Box>
        </>
    );
}

export default View;
