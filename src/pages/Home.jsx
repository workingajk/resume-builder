import React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import mainImg from "./../assets/main.jpg";
import abtImg from "./../assets/abt.jpg";

function Home() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <section
                style={{
                    backgroundImage: `url(${mainImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    minHeight: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50%",
                        borderRadius: "25px",
                        gap: "10px",
                    }}
                >
                    <h1>Designed to get Hired.</h1>
                    <h1>Your Skills, Your Story,</h1>
                    <h1>Your Next Job - All in One</h1>
                    <Button sx={{ bgcolor: "brown", color: "white" }}>
                        Make Your Resume with AI
                    </Button>
                </Box>
            </section>

            <section style={{ padding: "20px" }}>
                <h1 style={{ textAlign: "center" }}>What is Resume Builder</h1>
                <Box
                    sx={{
                        display: "flex",
                        padding: "20px",
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            fontSize: "20px",
                            textAlign: "justify",
                        }}
                    >
                        An AI RBuilder is a web application that helps users
                        create professional resumes quickly and efficiently
                        using artificial intelligence. Traditional resume
                        creation can be time-consuming and difficult, especially
                        for freshers who may not know the correct format or
                        keywords required for modern recruitment systems. <br />
                        <br /> The system can suggest job-specific keywords,
                        professional summaries, and skill recommendations to
                        make the resume more effective and ATS (Applicant
                        Tracking System) friendly. <br />
                        <br />
                        The main goal of the AI rBuilder is to simplify the
                        resume creation process and help job seekers build
                        professional, well-structured resumes in a few minutes.
                        Users can edit content, preview their resume, and
                        download it in formats such as PDF. <br />
                        <br />
                        This type of system is especially useful for students
                        and fresh graduates, who want to create high-quality
                        resumes that increase their chances of getting noticed.
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={abtImg}
                            //   height="100%"
                            width="50%"
                            alt="Resume building illustration"
                        />
                    </div>
                </Box>
                <img src="/img.jpg" width={"100%"} alt="" />
            </section>
            <section>
                <h1 style={{ textAlign: "center" }}>Testimony</h1>
                <Box
                    sx={{
                        display: "flex",
                        padding: "20px",
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            fontSize: "20px",
                            textAlign: "justify",
                        }}
                    >
                        <h2>Trusted by professionals worldwide.</h2>
                        <p>
                            At rBuilder, we don't just help you create résumés —
                            we help you land the job. Whether you're a seasoned
                            professional or just starting out, our tools are
                            designed to get results. In fact, users who used
                            rBuilder reported getting hired an average of 48
                            days faster. Join thousands of job-seekers who’ve
                            fast-tracked their careers with a résumé that truly
                            stands out.
                        </p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={abtImg}
                            //   height="100%"
                            width="50%"
                            alt="Resume building illustration"
                        />
                    </div>
                </Box>
            </section>
        </>
    );
}

export default Home;
