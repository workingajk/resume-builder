import { Typography } from "@mui/material";
import React from "react";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Edit({
    handleClose,
    handleOpen,
    open,
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
        skills: "",
    },
    setResume,
}) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "top",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    // margin:'30px 40px',
                    p: 3,
                    maxWidth: "500px",
                    overflowY: "scroll",
                }}
            >
                <Typography
                    id="modal-modal-title"
                    variant="h4"
                    // component="h2"
                    sx={{
                        backgroundColor: "grey",
                        textAlign: "center",
                    }}
                >
                    Edit Resume Details
                </Typography>
                <div
                    style={{
                        paddingTop: 20,
                    }}
                >
                    <Typography variant="h5">Basic Information</Typography>
                    <TextField
                        id="standard-basic"
                        label="Full Name"
                        fullWidth
                        value={resume.name}
                        onChange={(e) => setName(e.target.value)}
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Location"
                        value={resume.loc}
                        onChange={(e) => setLoc(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-standard-label">
                            Choose Job Title
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={resume.job}
                            onChange={(e) => setJob(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Software Developer">
                                Software Developer
                            </MenuItem>
                            <MenuItem value="Frontend Developer">
                                Frontend Developer
                            </MenuItem>
                            <MenuItem value="Backend Developer">
                                Backend Developer
                            </MenuItem>
                            <MenuItem value="Full Stack Developer">
                                Full Stack Developer
                            </MenuItem>
                            <MenuItem value="React Developer">
                                React Developer
                            </MenuItem>
                            <MenuItem value="Node.js Developer">
                                Node.js Developer
                            </MenuItem>
                            <MenuItem value="UI/UX Designer">
                                UI/UX Designer
                            </MenuItem>
                            <MenuItem value="Graphic Designer">
                                Graphic Designer
                            </MenuItem>
                            <MenuItem value="Data Analyst">
                                Data Analyst
                            </MenuItem>
                            <MenuItem value="Data Scientist">
                                Data Scientist
                            </MenuItem>
                            <MenuItem value="Machine Learning Engineer">
                                Machine Learning Engineer
                            </MenuItem>
                            <MenuItem value="DevOps Engineer">
                                DevOps Engineer
                            </MenuItem>
                            <MenuItem value="Cybersecurity Analyst">
                                Cybersecurity Analyst
                            </MenuItem>
                            <MenuItem value="Project Manager">
                                Project Manager
                            </MenuItem>
                            <MenuItem value="Product Manager">
                                Product Manager
                            </MenuItem>
                            <MenuItem value="Business Analyst">
                                Business Analyst
                            </MenuItem>
                            <MenuItem value="Digital Marketing Specialist">
                                Digital Marketing Specialist
                            </MenuItem>
                            <MenuItem value="SEO Specialist">
                                SEO Specialist
                            </MenuItem>
                            <MenuItem value="Content Writer">
                                Content Writer
                            </MenuItem>
                            <MenuItem value="HR Manager">HR Manager</MenuItem>
                        </Select>
                    </FormControl>{" "}
                </div>
                <div>
                    <Typography variant="h5">Contact Details</Typography>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        value={resume.mail}
                        onChange={(e) => setMail(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Contact Number"
                        value={resume.contact}
                        onChange={(e) => setContact(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Linkedin Link"
                        value={resume.linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        value={resume.git}
                        onChange={(e) => setGit(e.target.value)}
                        label="Github Link"
                        fullWidth
                        variant="standard"
                    />
                </div>

                <div>
                    <Typography variant="h5">Education Details</Typography>
                    <TextField
                        id="standard-basic"
                        label="Bachelor's Degree"
                        value={resume.degree}
                        onChange={(e) => setDegree(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="College/University Name"
                        value={resume.college}
                        onChange={(e) => setCollege(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Year of Graduation"
                        value={resume.gradYear}
                        onChange={(e) => setGradYear(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                </div>
                <div>
                    <Typography variant="h5">Skills</Typography>
                    <TextField
                        id="standard-basic"
                        label="Add Skills"
                        value={resume.gradYear}
                        onChange={(e) => setGradYear(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <Typography variant="h5">Added Skills</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={4}>
                                <Item>size=8</Item>
                            </Grid>
                            <Grid size={4}>
                                <Item>size=4</Item>
                            </Grid>
                            <Grid size={4}>
                                <Item>size=4</Item>
                            </Grid>
                            <Grid size={4}>
                                <Item>size=8</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <Stack direction={"row"} sx={{ justifyContent: "center" }}>
                    <Button>Cancel</Button>
                    <Button>Save</Button>
                </Stack>
            </Box>
        </Modal>
    );
}

export default Edit;
