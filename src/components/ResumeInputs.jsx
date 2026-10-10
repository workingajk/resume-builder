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
import jobSkills from "../assets/jobSkills.json";
import jobs from "../assets/jobRoles.json";
import summaries from "../assets/summaries.json";

const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Review & Submit",
];

function ResumeInputs({ resume, setResume }) {
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

    const handleJob = (event) => {
        setJob(event.target.value);
    };

    const handleGenerateSummary = () => {
        setResume({ ...resume, skills: jobSkills[resume.job], summary:summaries[resume.job] });
        console.log(resume);

        handleNext();
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
                                    setResume({
                                        ...resume,
                                        job: e.target.value,
                                    })
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
                );

            case 1:
                return (
                    <div>
                        <h1>Contact Details</h1>
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
                                setResume({
                                    ...resume,
                                    contact: e.target.value,
                                })
                            }
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Linkedin Link"
                            value={resume.linkedin}
                            onChange={(e) =>
                                setResume({
                                    ...resume,
                                    linkedin: e.target.value,
                                })
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
                );

            case 2:
                return (
                    <div>
                        <h1>Education Details</h1>
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
                                setResume({
                                    ...resume,
                                    college: e.target.value,
                                })
                            }
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Year of Graduation"
                            value={resume.gradYear}
                            onChange={(e) =>
                                setResume({
                                    ...resume,
                                    gradYear: e.target.value,
                                })
                            }
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
                            If you want ot proceed please click the{" "}
                            <span style={{ fontWeight: "bold" }}>
                                {" "}
                                Generate AI Skill & Summary
                            </span>{" "}
                            button to submit.
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
                        // if (isStepOptional(index)) {
                        //     labelProps.optional = (
                        //         <Typography variant="caption">
                        //             Optional
                        //         </Typography>
                        //     );
                        // }
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
                            <div ref={nextButtonRef}>
                                {activeStep === steps.length - 1 ? (
                                    <Button onClick={handleGenerateSummary}>
                                        "Generate AI Skill & Summary "
                                    </Button>
                                ) : (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                            </div>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}

export default ResumeInputs;
