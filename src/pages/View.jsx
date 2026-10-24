import React, { useEffect, useState } from "react";
import Preview from "../components/Preview";
import { Box, Button, Stack } from "@mui/material";
import Edit from "../components/Edit";
import { useParams } from "react-router-dom";
import { downloadResumeAPI, getResumeAPI } from "../services/apiService";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function View() {
    const { id } = useParams();
    console.log(id);
    const [resume, setResume] = useState();

    const viewResume = async () => {
        const response = await getResumeAPI(id);
        console.log(response.data);
        setResume(response.data);
    };
    useEffect(() => {
        viewResume();
    }, []);

    const downloadPdf = async () => {
        console.log(document.getElementById("result"));

        const canvas = await html2canvas(document.getElementById("result"), {
            scale: 3,
        });

        console.log(canvas);

        let imgUrl = canvas.toDataURL("image/png");
        console.log(imgUrl);

        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgUrl, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.save("resume.pdf");
        const timeZone = new Date();
        console.log(timeZone);
        const formattedDate = `${timeZone.toLocaleDateString()}, ${timeZone.toLocaleTimeString()}`;
        console.log(formattedDate);

        console.log();

        const response = await downloadResumeAPI({
            ...resume,
            imgUrl,
            formattedDate,
        });
        console.log(response);
    };

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
                <Button
                    variant="primary"
                    sx={{ color: "brown" }}
                    onClick={downloadPdf}
                >
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
                <Preview elevation="0" resume={resume} />
            </Box>
        </>
    );
}

export default View;
