import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.baseURL = baseURL;

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    accept: "application/json",
  },
});
