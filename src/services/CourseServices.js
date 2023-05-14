import axios from "axios";
import {
  ROUTE_ALL_COURSE_CATEGORY,
  ROUTE_SHOW_ALL_COURSES,
} from "../core/ApiRoutes";

export const GET_ALL_COURSES = async () => {
  try {
    const response = await axios.get(ROUTE_SHOW_ALL_COURSES);

    return response.data.data;
  } catch (error) {
    return error.response || error.message;
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
