import axios from "axios";
import { ROUTE_SEND_EMAIL } from "../core/ApiRoutes";
import { CustomResponse } from "../core/CustomResponse";

export const COMPOSE_EMAIL = async (payload) => {
  const { to, from, message, subject } = payload;

  try {
    const response = await axios.post(`${ROUTE_SEND_EMAIL}`, payload);

    console.log(response);
    return CustomResponse({
      data: response.data,
      message: response.data.message,
      code: 201,
    });
  } catch (error) {
    return CustomResponse({
      message: error.response || error.message,
      error,
      code: 400,
    });
  }
};
