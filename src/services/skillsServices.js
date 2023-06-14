import axios from "axios";
import { ROUTE_SHOW_ALL_SKILLS } from "../core/ApiRoutes";
import { CustomResponse } from "../core/CustomResponse";

export const GET_ALL_SKILLS = async () => {
  try {
    const response = await axios.get(`${ROUTE_SHOW_ALL_SKILLS}`);

    // return   response.data.data;

    return CustomResponse({
      data: response.data.data,
      code: response.status,
      message: response.data.message,
    });
  } catch (error) {
    console.log(error.response);
    return CustomResponse({
      // data: response.data.data,
      message: error.response.data.message,
    });
  }
};
