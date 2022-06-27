import axios from "axios";
import { BASE_PATH, IMAGE_BASE_PATH } from "./constants";

export const fetchApi = async (type, urlParams) => {
  try {
    const response = await axios.get(urlParams, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "en-US",
      },
      baseURL: `${type === "movie" ? BASE_PATH : IMAGE_BASE_PATH}/`,
    });
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};
