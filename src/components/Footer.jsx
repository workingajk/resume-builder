import React from "react";
import { Box, Stack } from "@mui/material";
import { Facebook, Favorite, HeatPumpSharp, Instagram, Mail, WhatsApp } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
function Footer() {
    return (
        <div style={{ bgcolor: "black" }}>
            <Box
                sx={{
                    display: "flex",
                    padding: "20px",
                    flexDirection: "row",
                    bgcolor: "black",
                    color: "white",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        fontSize: "",
                        textAlign: "justify",
                        padding: "20px",
                    }}
                >
                    <Stack spacing={2}>
                        <h2>AI rBuilder</h2>
                        <p>
                            An AI Builder suggests job-specific keywords,
                            professional summaries, and skill recommendations to
                            make the resume more effective and ATS (Applicant
                            Tracking System) friendly. The main goal of the AI
                            Powered Resume Builder is to simplify the resume
                            creation process and help job seekers build
                            professional, well-structured resumes in a few
                            minutes.
                        </p>
                    </Stack>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                      <Stack spacing={2}>
                        <h3>Contact Us</h3>
                        <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Mail />
                            resumebuilder@gmail.com
                        </p>
                        <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <PhoneIcon />
                            9087654321
                        </p>
                        <h5>Connect With Us</h5>
                        <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Instagram />
                            <Facebook />
                            <WhatsApp />
                        </p>
                    </Stack>
                    {/* <img
                        src={abtImg}
                        //   height="100%"
                        width="50%"
                        alt="Resume building illustration"
                    /> */}
                </div>
            </Box>
            <h5
                style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                    paddingBottom: "10px",
                }}
            >
                Designed and build wth <Favorite style={{ verticalAlign: "middle" }} /> love using React
            </h5>
        </div>
    );
}

export default Footer;
