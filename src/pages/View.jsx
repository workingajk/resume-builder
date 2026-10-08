import React from "react";
import Preview from "../components/Preview";
import { Box, Button, Stack } from "@mui/material";
import Edit from "../components/Edit";

function View() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                />
            </Stack>
            <Box
                sx={{
                    paddingX: "20%",
                    paddingY: "30px",
                }}
            >
                <Preview elevation='0' />
            </Box>
        </>
    );
}

export default View;
