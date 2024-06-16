import axios from "axios";
import { message } from "antd";
const api = axios.create({
  baseURL: "https://bikeridingventure.onrender.com/",
  // baseURL: "http://localhost:5000",
});
export const adminLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  // https://bikeridingventure.onrender.com
  try {
    const response = await api.post("/admin/auth/login", reqObj);
    localStorage.setItem("admin", JSON.stringify(response.data));
    message.success("Login success");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
