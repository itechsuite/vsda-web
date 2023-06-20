import axios from "axios";
import {
  ROUTE_SHOW_ALL_ARTISANS,
  ROUTE_TOGGLE_PERSONEL_VISIBILITY,
} from "../core/ApiRoutes";
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
    console.log(response.request.status, "joy");

    return CustomResponse({
      data: response.data.data,
      code: response.request.status,
      message: response.data.message,
      error: response,
    });
  } catch (error) {
    // return error.response || error.message;
    console.log(JSON.stringify(error, "diaper"));
    return CustomResponse({
      code: 500,
      error: error || error.response || error.message,
      message: error.response.data.message,
    });
  }
};

export const TOGGLE_PERSONEL_VISIBILITY = async (payload) => {
  try {
    if (!navigator.onLine) {
      console.log("You are offline");
      return CustomResponse({
        code: 500,
        message: "You are offline",
      });
    }

    const response = await axios.post(
      `${ROUTE_TOGGLE_PERSONEL_VISIBILITY}`,
      payload
    );
    console.log(response, "styleplus");

    return CustomResponse({
      data: response.data.data[0],
      code: response.request.status,
      message: response.data.message,
      // error: response.,
    });
  } catch (error) {
    console.log(error.response);
    return CustomResponse({
      code: 500,
      error: error || error.response || error.message,
      message: error.message,
    });
  }
};
