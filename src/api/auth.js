import axios from "axios";

export const userLogin = async (email, password) => {
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    try {
        const { data } = await axios.post(url, {
            email: email,
            password: password
        })
        return data;
    } catch (err) {
        return err;
    }
}


export const signUpUser = async (formData) => {
    const API_URL = "https://api.escuelajs.co/api/v1";
     try {
    const response = await axios.post(`${API_URL}/users/`, {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        avatar: "https://picsum.photos/800"
    });
    return response.data; // returns created user
}
catch(err){
    return err;
}
};