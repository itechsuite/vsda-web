import axios from "axios";
import { ROUTE_SHOW_ALL_ARTISANS } from "../core/ApiRoutes";
import { CustomResponse } from "../core/CustomResponse";

export const GET_ALL_ARTISANS = async (payload) => {
  try {
    const response = await axios.get(`${ROUTE_SHOW_ALL_ARTISANS}/${payload}`);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};

export const ALL_ARTISANS = async () => {
  try {
    if (!navigator.onLine) {
      console.log("You are offline");
      return CustomResponse({
        code: 500,
        message: "You are offline",
      });
    }

    const response = await axios.get(`${ROUTE_SHOW_ALL_ARTISANS}`);
    console.log(response);

    return CustomResponse({
      data: response.data.data,
      code: response.status,
      message: response.data.message,
      error: response,
    });
  } catch (error) {
    // return error.response || error.message;
    console.log(JSON.stringify(error.name));
    return CustomResponse({
      code: 500,
      error: error || error.response || error.message,
      message: error.response.data.message,
    });
  }
};
