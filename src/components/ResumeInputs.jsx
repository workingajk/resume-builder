import React from "react";
import Box from "@mui/material/Box";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Review & Submit",
];

function ResumeInputs() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = React.useCallback((step) => {
        return step === 1;
    }, []);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         // You probably want to guard against something like this,
    //         // it should never occur unless someone's actively trying to break something.
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    const handleReset = () => {
        setActiveStep(0);
    };

    const previousActiveStepRef = React.useRef(activeStep);
    const resetButtonRef = React.useRef(null);
    const nextButtonRef = React.useRef(null);

    // Manage focus when the active step changes.
    React.useEffect(() => {
        const previousActiveStep = previousActiveStepRef.current;
        previousActiveStepRef.current = activeStep;

        if (activeStep === steps.length) {
            // If the user has completed all steps and hits "Finish", focus the "Reset" button.
            resetButtonRef.current.focus();
            return;
        }
        if (activeStep === 0 && previousActiveStep === steps.length) {
            // If the user has completed all steps and hits "Reset", focus the "Next" button.
            nextButtonRef.current.focus();
            return;
        }
        if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
            // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
            nextButtonRef.current.focus();
        }
    }, [activeStep, isStepOptional]);

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
    
    const handleJob = (event) => {
        setJob(event.target.value);
    };
    const renderFormContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <h1>Basic Information</h1>
                        <TextField
                            id="standard-basic"
                            label="Full Name"
                            fullWidth
                            variant="standard"
                            
                        />
                        <TextField
                            id="standard-basic"
                            label="Location"
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
                                onChange={handleJob}
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
                                <MenuItem value="HR Manager">
                                    HR Manager
                                </MenuItem>
                            </Select>
                        </FormControl>{" "}
                    </div>
                );

            case 1:
                return (
                    <div>
                        <h1>Contact Details</h1>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Contact Number"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Linkedin Link"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Github Link"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                );

            case 2:
                return (
                    <div>
                        <h1>Education Details</h1>
                        <TextField
                            id="standard-basic"
                            label="Bachelor's Degree"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="College/University Name"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Year of Graduation"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                );

            case 3:
                return (
                    <div>
                        <Typography>
                            {" "}
                            Our AI will generate Skills & Summary according to
                            your job role.Once the form get submitted, user
                            won't get the chance to update the resume details.
                            If you want ot proceed please click the <span style={{fontWeight:'bold'}}> Generate AI
                            Skill & Summary</span> button to submit.
                        </Typography>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">
                                    Optional
                                </Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Our AI will generate Skills & Summary according to{" "}
                            <br />
                            your job role.Once the form get submitted, user{" "}
                            <br />
                            won't get the chance to update the resume details.{" "}
                            <br />
                            If you want ot proceed please click the Generate AI{" "}
                            <br />
                            Skill & Summary button to submit.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset} ref={resetButtonRef}>
                                Reset
                            </Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        <Box>{renderFormContent(activeStep)}</Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {/* {isStepOptional(activeStep) && (
                                <Button
                                    color="inherit"
                                    onClick={handleSkip}
                                    sx={{ mr: 1 }}
                                >
                                    Skip
                                </Button>
                            )} */}
                            <Button onClick={handleNext} ref={nextButtonRef}>
                                {activeStep === steps.length - 1
                                    ? "Generate AI Skill & Summary "
                                    : "Next"}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}

export default ResumeInputs;
