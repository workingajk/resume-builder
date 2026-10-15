import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    //   headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.response.use(
    (response) => {
        console.log("Yo the response was recieved ");
        return response;
    },
    (err) => {
        if (err.response) {
            const status = err.response.status;
            if (status == 401) {
                console.log("Unauthorized Access");
            } else if (status == 404) {
                console.log("API Not Found");
            } else if (status == 500) {
                console.log("Internal Server Errror Probably, ;)");
            } else if (err.request) {
                console.log("No responnse from server");
            } else {
                console.log("Error" + err.message);
            }
            return Promise.reject(err);
        }
    },
);

export default instance;
