import React from "react";
import CoursesListModel from "./view-models/CoursesListModel";
import Slider from "react-slick";

const CoursesList = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="py-5 px-3 bg-white my-5">
            <Slider {...settings} arrows={true} autoplay>
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
                <CoursesListModel title={"Electrical Engineering "} />
            </Slider>
        </div>
    );
};

export default CoursesList;
