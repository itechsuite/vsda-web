import axios from "axios";
import {
  ROUTE_ALL_COURSE_CATEGORY,
  ROUTE_GET_COURSE_DETAILS,
  ROUTE_SHOW_ALL_COURSES,
} from "../core/ApiRoutes";
import { CustomResponse } from "../core/CustomResponse";

export const GET_ALL_COURSES = async () => {
  try {
    const response = await axios.get(ROUTE_SHOW_ALL_COURSES);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GET_ALL_COURSES2 = async () => {
  try {
    const response = await axios.get(ROUTE_SHOW_ALL_COURSES);

    return CustomResponse({
      data: response.data.data,
      code: 200,
      message: "All courses",
    });
  } catch (error) {
    return CustomResponse({
      code: 400,
      message: error.response || error.message,
      error,
    });
  }
};

export const GET_ALL_COURSE_CATEGORY = async () => {
  try {
    const response = await axios.get(ROUTE_ALL_COURSE_CATEGORY);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GET_ALL_COURSE_BY_CATEGORY = async (category) => {
  try {
    const response = await axios.get(
      `${ROUTE_ALL_COURSE_CATEGORY}/${category}`
    );

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const GET_COURSE_DETAIL = async (id) => {
  try {
    const response = await axios.get(`${ROUTE_GET_COURSE_DETAILS}/${id}`);

    return response.data.data;
  } catch (error) {
    const { response, message } = error;

    if (response.data.success === false) {
      return response.data.success;
    }
    return message;
  }
};
