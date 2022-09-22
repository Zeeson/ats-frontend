import Axios from "axios";
import { authRoutes } from "./authRoutes";
import { url } from "./config.json";
const axios = Axios.create({
  baseURL: url,
});

const getTokens = () => {
  const token = window.localStorage.getItem("token");
  const reToken = window.localStorage.getItem("refresh");
  return {
    token,
    reToken,
  };
};

// console.log(token);
axios.interceptors.request.use((config) => {
  const { token } = getTokens();
  config.headers["Content-Type"] = "application/json";
  const isAuth = authRoutes.some((item) => item.test(config.url));
  if (isAuth) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});
axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const { reToken } = getTokens();
    const originalConfig = error.config;
    // console.log(error.response);
    if (error.response?.status === 401 && !originalConfig._retry) {
      const refresh = await axios({
        method: "get",
        url: "/",
        data: { refresh: reToken },
      });
      refresh.data &&
        window.localStorage.setItem("token", refresh.data.access) &&
        window.localStorage.setItem("refresh", refresh.data.refresh_token) &&
        window.location.reload();
    }
    return error;
  }
);
export default axios;
