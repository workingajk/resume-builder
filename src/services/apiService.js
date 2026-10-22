import axiosService from "../api/axiosService";

export const addResume = async (resume) => {
    return await axiosService("POST", "/resumes", resume);
};

export const getResume = async (id) => {
    return await axiosService("GET", `/resumes/${id}`, {});
};

export const editResume = async (id,resume) => {
    return await axiosService("PUT", `/resumes/${id}`, resume);
};

export const deleteResume = async (resume) => {
    return await axiosService("DELETE", "/resumes", resume);
};

