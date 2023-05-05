import React from "react";
import CoursesViewModels from "./view-models/CoursesViewModels";

const FeaturedCourses = () => {
    return (
        <div className="grid grid-cols-3 gap-5 px-5 py-10 bg-white">
            <CoursesViewModels />
            <CoursesViewModels />
            <CoursesViewModels />
        </div>
    );
};

export default FeaturedCourses;
