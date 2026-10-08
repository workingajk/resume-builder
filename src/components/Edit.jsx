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

function Edit({ handleClose, handleOpen, open }) {
    const [name, setName] = React.useState("");
    const [loc, setLoc] = React.useState("");
    const [job, setJob] = React.useState("");

    const [mail, setMail] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [git, setGit] = React.useState("");
    const [linkedin, setLinkedin] = React.useState("");

    const [degree, setDegree] = React.useState("");
    const [college, setCollege] = React.useState("");
    const [gradYear, setGradYear] = React.useState("");

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
                    overflowY:'scroll'
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
                <div style={{
                    paddingTop:20

                }}>
                    <Typography variant="h5">Basic Information</Typography>
                    <TextField
                        id="standard-basic"
                        label="Full Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Location"
                        value={loc}
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
                            value={job}
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
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Contact Number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Linkedin Link"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        value={git}
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
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="College/University Name"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Year of Graduation"
                        value={gradYear}
                        onChange={(e) => setGradYear(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                </div>
                <Stack direction={"row"} sx={{justifyContent:'center'}}>
                    <Button>Cancel</Button>
                    <Button>Save</Button>
                </Stack>
            </Box>
        </Modal>
    );
}

export default Edit;
