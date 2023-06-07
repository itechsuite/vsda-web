import axios from "axios";
import { ROUTE_SHOW_ALL_ARTISANS } from "../core/ApiRoutes";

export const GET_ALL_ARTISANS = async (payload) => {
  try {
    const response = await axios.get(`${ROUTE_SHOW_ALL_ARTISANS}/${payload}`);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
