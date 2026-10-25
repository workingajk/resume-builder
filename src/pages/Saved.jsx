import {
    Box,
    Button,
    Input,
    TableFooter,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiSearch } from "react-icons/ci";
import { deleteResumeAPI, getAllResumesAPI } from "../services/apiService";
import { Link } from "react-router-dom";

function Saved() {
    const [resumes, setResumes] = useState([]);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    const getAllResumes = async () => {
        try {
            const response = await getAllResumesAPI();
            console.log(response.data);
            setResumes(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getAllResumes();
    }, []);

    const handleDeleteResume = async (id) => {
        try {
            const response = await deleteResumeAPI(id);
            console.log(response);
            getAllResumes();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        setFilter(
            resumes.filter((resume) =>
                resume.job.toLowerCase().includes(search.toLowerCase()),
            ),
        );
        console.log(filter);
    }, [search]);

    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h3">All Saved Resumes</Typography>
            {/* <h1>All Saved Resumes</h1> */}
            <Typography variant="h6">
                <p style={{ padding: "20px" }}>
                    All resumes submitted to the platform in one place, allowing
                    administrators or recruiters to efficiently view, search,
                    filter, and manage candidate profiles. It provides a quick
                    overview of available candidates and their key details,
                    making the recruitment and candidate-selection process more
                    organized and efficient.
                </p>
            </Typography>

            <Box>
                <TextField
                    placeholder="Search Job Title "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    slotProps={{
                        input: {
                            endAdornment: <CiSearch size={"20px"} />,
                        },
                    }}
                />
                {/* <CiSearch/> */}
            </Box>
            {/* <input type="text" style={{ padding: "10px 20px" }} /> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Resume</TableCell>
                            <TableCell align="right">Job Role</TableCell>
                            <TableCell align="right">...</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resumes.length > 0 ? (
                            resumes.map((resume, index = 1) => (
                                <TableRow
                                    key={resume.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link to={`/resume/${resume.id}`}>
                                            <Typography color="red">
                                                {resume.name}
                                            </Typography>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        {resume.job}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() =>
                                                handleDeleteResume(resume.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4}>
                                    <Typography>
                                        No data found |=
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Saved;
