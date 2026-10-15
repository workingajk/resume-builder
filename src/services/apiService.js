import axiosService from "../api/axiosService";

export const addResume = async (resume) => {
    return await axiosService("POST", "/resumes", resume);
};

export const deleteResume = async (resume) => {
    return await axiosService("DELETE", "/resumes", resume);
};

export const getResume = async (id) => {
    return await axiosService("GET", `/resumes/${id}`, {});
};
