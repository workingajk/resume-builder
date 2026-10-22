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
import jobSkills from "../assets/jobSkills.json";
import jobs from "../assets/jobRoles.json";
import summaries from "../assets/summaries.json";
import { Cancel } from "@mui/icons-material";
import { editResumeAPI } from "../services/apiService";

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
    id,
}) {
    let editInfo = resume;
    console.log(editInfo);

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

    const handleUpdate = async () => {
        const response = await editResume(id, resume);
        console.log(response);
    };
 
    const addSkill = (val)=>{
        console.log(val);
        

    }
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
                        onChange={(e) =>
                            setResume({ ...resume, name: e.target.value })
                        }
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Location"
                        value={resume.loc}
                        onChange={(e) =>
                            setResume({ ...resume, loc: e.target.value })
                        }
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
                            onChange={(e) =>
                                setResume({ ...resume, job: e.target.value })
                            }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {jobs.jobRoles.map((job) => (
                                <MenuItem value={job}>{job}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>{" "}
                </div>
                <div>
                    <Typography variant="h5">Contact Details</Typography>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        value={resume.mail}
                        onChange={(e) =>
                            setResume({ ...resume, mail: e.target.value })
                        }
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Contact Number"
                        value={resume.contact}
                        onChange={(e) =>
                            setResume({ ...resume, contact: e.target.value })
                        }
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Linkedin Link"
                        value={resume.linkedin}
                        onChange={(e) =>
                            setResume({ ...resume, linkedin: e.target.value })
                        }
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        value={resume.git}
                        onChange={(e) =>
                            setResume({ ...resume, git: e.target.value })
                        }
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
                        onChange={(e) =>
                            setResume({ ...resume, degree: e.target.value })
                        }
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="College/University Name"
                        value={resume.college}
                        onChange={(e) =>
                            setResume({ ...resume, college: e.target.value })
                        }
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="standard-basic"
                        label="Year of Graduation"
                        value={resume.gradYear}
                        onChange={(e) =>
                            setResume({ ...resume, gradYear: e.target.value })
                        }
                        fullWidth
                        variant="standard"
                    />
                </div>
                <div>
                    <Typography variant="h5">Skills</Typography>
                    <Stack direction={"row"} >
                        <TextField
                            id="standard-basic"
                            label="Add Skills"
                            value={resume.gradYear}
                            onChange={(e) =>
                                setResume({
                                    ...resume,
                                    contact: e.target.value,
                                })
                            }
                            fullWidth
                            variant="standard"
                        />
                        <Button onClick={(e)=>addSkill(e.target.value)}>Add</Button>
                    </Stack>
                    <Typography variant="h5">Added Skills</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {resume.skills ? (
                                resume.skills.map((skill) => (
                                    <Grid size={4}>
                                        <Item
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 4,
                                                backgroundColor: "brown",
                                                color: "white",
                                            }}
                                        >
                                            {" "}
                                            {skill} <Cancel />{" "}
                                        </Item>
                                    </Grid>
                                ))
                            ) : (
                                <Grid size={4}>
                                    <Item>Technical skills</Item>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </div>
                <Stack direction={"row"} sx={{ justifyContent: "center" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Save</Button>
                </Stack>
            </Box>
        </Modal>
    );
}

export default Edit;
