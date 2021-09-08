import axios from "axios";

const getUrlApi = (ENV) => {
  switch (ENV) {
    case "LOCAL":
      return "http://api-flytravelgoo.rz/v1";
    case "PRODUCTION":
      return "https://apiflytravelgoo.solutionzc.com/v1";
    case "STAGING":
      return "http://api-flytravelgoo.rz/v1";
    default:
      return "http://api-flytravelgoo.rz/v1";
  }
};

const clientAxios = axios.create({
  baseURL: getUrlApi(process.env.NEXT_PUBLIC_ENV),
});

export default clientAxios;
