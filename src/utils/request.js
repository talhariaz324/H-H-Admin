import axios from 'axios'

const request = axios.create({
    baseURL:  'http://localhost:8080/api',
    withCredentials: true,
})

function setAuthorizationHeader() {
  const token = localStorage.getItem("auth-token");
  console.log("🚀 ~ file: request.js:10 ~ setAuthorizationHeader ~ token:", token)
  if (token !== null) {
    request.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  }
  
  // Set the Authorization header immediately if the token is available
  setAuthorizationHeader();

  window.addEventListener("storage", (event) => {
    if (event.key === "auth-token") {
      setAuthorizationHeader();
    }
  });

  request.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("auth-token");
      // console.log("🚀 ~ file: request.ts:43 ~ token:", token);
      if (token !== null) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      // console.log("🚀 ~ file: request.ts:49 ~ config:", config);
      return config;
    },
  
    function (error) {
      console.log("🚀 ~ file: request.ts:50 ~ error:", error);
      // // Do something with request error
      // return Promise.reject(error);
    }
  );

export default request