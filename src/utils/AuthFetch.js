import { set } from "react-hook-form";
import API from "./API";


export const registerUser = async (formData) => {
  const response = await API.post("api/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};


export const loginUser = async (data)=>{

  const response = await API.post("api/auth/login", data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  )

  return response.data;
}


export const logoutUser = async ()=>{

    const response = await API.post("api/auth/logout");

    return response.data;

}
