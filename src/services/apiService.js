import axiosService from "../api/axiosService";

export const addResumeAPI = async (resume) => {
    return await axiosService("POST", "/resumes", resume);
};

export const getResumeAPI = async (id) => {
    return await axiosService("GET", `/resumes/${id}`, {});
};

export const getAllResumesAPI = async () => {
    return await axiosService("GET", `/resumes`, {});
};

export const editResumeAPI = async (id, resume) => {
    return await axiosService("PUT", `/resumes/${id}`, resume);
};

export const deleteResumeAPI = async (id) => {
    return await axiosService("DELETE", "/resumes/"+id, {});
};
// downloads
export const downloadResumeAPI = async (reqBody) => {
    return await axiosService("POST", "/downloads", reqBody);
};

export const getDownloadsAPI = async () => {
    return await axiosService("GET", `/downloads`, {});
};

export const deleteDownloadAPI = async (id) => {
    return await axiosService("DELETE", "/downloads/" + id, {});
};

export const uploadCloudinary = async (imgData) => {
    const formData = new FormData();
    formData.append("upload_preset", "resume-builder");
    formData.append('file',imgData)
    // formData.append("file", imgData);
    const response = await fetch(
        "https://api.cloudinary.com/v1_1/jsudqyfx/image/upload",
        {
            method: "POST",
            body: formData,
            
        },
    );
    let data = await response.json()
    console.log(data);
    console.log(data.url);
    
    return data.url
};
