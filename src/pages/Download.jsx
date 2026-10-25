import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { getDownloadsAPI, deleteDownloadAPI } from "../services/apiService";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function Download() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [downloads, setDownloads] = useState([]);
    const getDownloads = async () => {
        try {
            const response = await getDownloadsAPI();
            console.log(response.data);
            setDownloads(response.data);
            console.log();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteDownload = async (id) => {
        try{

            console.log(id);
            
            const response = await deleteDownloadAPI(id);
            console.log(response);
            await getDownloads(); 
        } catch(err){
            console.error(err);
            
        }
    };

    useEffect(() => {
        getDownloads();
    }, []);

    return (
        <>
            <Stack
                direction="row"
                sx={{ justifyContent: "space-between", my: "40px", mx: "80px" }}
            >
                <Typography variant="h4" sx={{ fontFamily: "math" }}>
                    All Downloaded Resume Details
                </Typography>
                <Button
                    sx={{ width: "12%", backgroundColor: "brown" }}
                    onClick={handleOpen}
                    variant="contained"
                >
                    View in Chart
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{
                                backgroundColor: "grey",
                                textAlign: "center",
                            }}
                        >
                            CV Download Count by Job Role
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Graph
                        </Typography>
                    </Box>
                </Modal>
            </Stack>
            <Box>
                <Typography
                    variant="h5"
                    sx={{ marginLeft: "65px", fontFamily: "initial" }}
                >
                    Total Downloaded resumes from our site is 0
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    "& > :not(style)": {
                        m: 1,
                        width: 350,
                        height: 700,
                        mx: "60px",
                        my: "30px",
                    },
                }}
            >
                {downloads.length > 0
                    ? downloads.map((item) => (
                          <div key={item.id}>
                              <Stack
                                  direction={"row"}
                                  sx={{
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      p: 1,
                                  }}
                              >
                                  <Typography variant="h6">
                                      {item.formattedDate}
                                  </Typography>
                                  <Button
                                      sx={{
                                          backgroundColor: "red",
                                          color: "white",
                                      }}
                                      onClick={() => deleteDownload(item.id)}
                                  >
                                      Delete
                                  </Button>
                              </Stack>
                              <Paper elevation={24}>
                                  <img src={item.imgUrl} alt="" width="100%" />
                              </Paper>
                          </div>
                      ))
                    : "No Downloads Yet"}
            </Box>
        </>
    );
}

export default Download;
