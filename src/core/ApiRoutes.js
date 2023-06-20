import { API_URL, EMAIL_SERVER } from "./constants";

export const ROUTE_SHOW_ALL_COURSES = `${API_URL}/courses/`;
export const ROUTE_SHOW_ALL_SKILLS = `${API_URL}/skills`;
export const ROUTE_SHOW_ALL_ARTISANS = `${API_URL}/artisans`;
export const ROUTE_SHOW_ALL_PRODUCTS = `${API_URL}/products`;
export const ROUTE_ALL_COURSE_CATEGORY = `${API_URL}/courses/categories`;
export const ROUTE_GET_COURSE_DETAILS = `${API_URL}/courses/course/detail`;
export const ROUTE_SEND_EMAIL = `${EMAIL_SERVER}/mailing/compose`;
export const ROUTE_TOGGLE_PERSONEL_VISIBILITY = `${API_URL}/artisans/status`;
