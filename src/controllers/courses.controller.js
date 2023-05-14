import { GET_ALL_COURSES } from "../services/CourseServices";

export const showCourses = async () => {
  const data = GET_ALL_COURSES();

  if (data.length <= 0) {
  }
};
