import React from 'react'
import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { IoDocumentTextSharp } from "react-icons/io5";
import { HiMiniDocumentArrowDown } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding:'20px 0px'
                    }}
                >
                    <Typography variant="h4" style={{fontWeight:'bold'}}>
                        Create an ATS Friendly Resume in Minutes with AI
                    </Typography>
                    {/* <Button variant='contained'  style={{width:'200px', backgroundColor: "brown"}}>View Chart</Button> */}
                </Box>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 24 }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "40px 0px",
                    }}
                >
                    <Paper
                        elevation={24}
                        sx={{
                            width: "300px",
                            gap:'20px',
                            height: "300px",
                            padding: "20px",
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignContent:'center',
                        }}
                    >
                        <IoDocumentTextSharp size={100} style={{ alignSelf: "center" ,color:'blue'}} />

                        <Typography align="center" variant="h5" style={{fontWeight:'bold'}}>Add Your Details</Typography>
                        <Typography align="center">
                            Our AI will generate Skills & Summary
                        </Typography>
                        <Typography align="center" variant="h6" style={{fontWeight:'bold'}}>Step 1</Typography>
                    </Paper>

                    <Paper
                        elevation={24}
                        
                        sx={{
                            width: "300px",
                            height: "300px",
                            padding: "20px",
                            gap:'20px',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignContent:'center',
                        }}
                    >
                        <HiMiniDocumentArrowDown size={100} style={{ alignSelf: "center",color:'red' }} />

                        <Typography align="center" variant="h5" style={{fontWeight:'bold'}}>Download your Resume</Typography>
                        <Typography align="center">
                            Download CV as PDF and start applying
                        </Typography>
                        <Typography align="center" variant="h6" style={{fontWeight:'bold'}}>Step 2</Typography>
                    </Paper>
                </Stack>
                <Stack style={{display:'flex',justifyContent:'center',alignItems:'center', padding:'20px'}}>
                    <Link to={'/resume-details'}>
                    <Button variant='contained'  style={{width:'200px', backgroundColor: "brown"}}>GET STARTED</Button>
                    </Link>
                </Stack>
            </Container>
        </div>
  )
}

export default Resume