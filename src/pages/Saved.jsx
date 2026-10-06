import { Box, Input, TextField, Typography } from "@mui/material";
import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiSearch } from "react-icons/ci";

function Saved() {
    function createData(name, calories, fat, carbs) {
        return { name, calories, fat, carbs };
    }

    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];
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
                    slotProps={{
                        input: {
                            endAdornment: <CiSearch size={'20px'} fontWei />,
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
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
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
                                    {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Saved;
