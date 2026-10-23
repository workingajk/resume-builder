import axiosService from "../api/axiosService";

export const addResumeAPI = async (resume) => {
    return await axiosService("POST", "/resumes", resume);
};

export const getResumeAPI = async (id) => {
    return await axiosService("GET", `/resumes/${id}`, {});
};

export const getResumesAPI = async () => {
    return await axiosService("GET", `/resumes`, {});
};

export const editResumeAPI = async (id, resume) => {
    return await axiosService("PUT", `/resumes/${id}`, resume);
};

export const deleteResumeAPI = async (resume) => {
    return await axiosService("DELETE", "/resumes", resume);
};

export const downloadResumeAPI = async (reqBody) => {
    return await axiosService("POST", "/downloads", reqBody);
};
