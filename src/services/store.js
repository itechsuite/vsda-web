import axios from "axios";
import {
  ROUTE_SHOW_ALL_ARTISANS,
  ROUTE_SHOW_ALL_PRODUCTS,
} from "../core/ApiRoutes";

export const GET_ALL_PRODUCTS = async () => {
  try {
    const response = await axios.get(`${ROUTE_SHOW_ALL_PRODUCTS}`);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
