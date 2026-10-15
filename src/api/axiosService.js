import instance from "./axiosInstance";

const axiosService = async (httpMethor, url, reqBody) => {
    try {
        const response = await instance({
            method: httpMethor,
            url: url,
            data: reqBody,
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export default axiosService;
