import axios from "axios";

export const RANDOM_USER_INFO = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data;
  } catch (error) {
    return error.response || error.message;
  }
};
