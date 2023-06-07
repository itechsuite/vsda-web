import axios from "axios";
import { ROUTE_SHOW_ALL_SKILLS } from "../core/ApiRoutes";

export const GET_ALL_SKILLS = async (payload) => {
  try {
    const response = await axios.get(`${ROUTE_SHOW_ALL_SKILLS}`);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
