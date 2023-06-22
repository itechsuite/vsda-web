import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GET_COURSE_DETAIL } from "../services/CourseServices";
import TabInstance from "../components/TabInstance";
import Testimony1 from "../components/Testimonies/Testimony1";
import CourseOutline from "../components/CourseOutline";
import { CurrencyFormatter } from "../helper/constants";
import { ClockIcon } from "@heroicons/react/24/outline";
import Modal1 from "../components/Modal/Modal1";
import PageLoader from "../components/Loaders/PageLoader";
import FormInput from "../components/Inputs/FormInput";
import Lottie from "lottie-react";
import successLottie from "../assets/Lotties/lottie-success.json";

const CourseDetail = () => {
  const { id } = useParams();
  const [course_detail, setCourseDetail] = useState("");
  const [loading, setLoading] = useState(true);
  // const [modal, setModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    fullname: "",
    course_name: "",
    course_id: course_detail.course_title,
    email: "",
    phoneNumber: "",
  });

  const handleFormOnChange = (e) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };
  let [categories] = useState({
    Outline: {
      name: "Course Outline",
      panel: <CourseOutline />,
    },

    Popular: {
      panel: <p> Popular</p>,
    },
  });

  const fetchCourseDetail = async () => {
    const res = await GET_COURSE_DETAIL(id);
    console.log(res);

    if (res === false) {
      setCourseDetail(res);
      setLoading(false);
      return;
    }
    setCourseDetail(res);
    setValues({ ...values, course_name: res.course_title });

    setLoading(false);
    return res;
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  if (course_detail === false && loading === false) {
    return <p>invalid request</p>;
  }

  const handleEnrolment = async (e) => {
    e.preventDefault();

    const { course_id, course_name, email, fullname, phoneNumber } = values;
    // alert(JSON.stringify(values));

    if (
      course_name === "" ||
      email === "" ||
      fullname === "" ||
      phoneNumber === ""
    )
      return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 4000);
  };

  return (
    <section className=" min-h-[100vh] px-5 py-3">
      <div className="flex flex-col gap-4">
        <div
          className="min-h-[300px] flex justify-center items-center  flex-col"
          style={{
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.93)),
            url('images/background.jpg') ,url(${course_detail.thumbnail})`,
          }}
        >
          <h1 className="text-4xl font-extrabold  text-white text-center">
            {course_detail.course_title}
          </h1>

          <div className="text-sm breadcrumbs text-white">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>{course_detail.course_title}</li>
            </ul>
          </div>
        </div>
        {/* <div className=" flex justify-between bg-blue-400  py-5 px-3">
          <p className=" font-normal text-white">Duration & Cost </p>

          <div className="flex gap-2">
            <ClockIcon className="w-6 text-white" />
            <p className=" text-white font-black">{course_detail.duration}</p>
          </div>
        </div> */}
        <h2 className="font-black">What you'll learn </h2>

        <p>{course_detail.details}</p>

        {course_detail.course_details && (
          <div>
            <h2 className="font-black">Course Outline </h2>
            <h3
              className=""
              dangerouslySetInnerHTML={{ __html: course_detail.course_details }}
            ></h3>
          </div>
        )}

        <button
          onClick={() => setModal(true)}
          className="border mx-auto  px-4 py-2 rounded-full  text-black hover:text-white hover:bg-blue-400 hover:border-none  text-xs  font-bold btn bg-transparent"
        >
          Enroll this course
        </button>
      </div>

      <Modal1 visible={modal} onClose={() => setModal(false)}>
        {success === false && (
          <div className="">
            <div>
              <h1 className="font-extrabold mb-10">Enrolment Form</h1>
            </div>
            <form className="flex flex-col  " onSubmit={handleEnrolment}>
              <FormInput
                id={"fullname"}
                placeholder={"Enter your fullname"}
                value={values.fullname}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"course_name"}
                placeholder={"Course Name"}
                value={course_detail.course_title}
                disabled={true}
                onChange={handleFormOnChange}
              />
              <FormInput
                type={"email"}
                id={"email"}
                placeholder={"email"}
                value={values.email}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"phoneNumber"}
                placeholder={"phoneNumber"}
                value={values.phoneNumber}
                onChange={handleFormOnChange}
              />

              <button className="mt-5 btn"> Submit</button>
            </form>
          </div>
        )}

        {success && (
          <div className="flex justify-center items-center flex-col gap-5">
            <Lottie
              className="w-32"
              animationData={require("../assets/Lotties/lottie-success.json")}
            />
            <p className="text-2xl font-semibold">
              Your reservation is successful
            </p>

            <p className="font-light">we will get in touch with you shortly.</p>

            <Link
              to={"/"}
              className="btn px-10 py-2 bg-transparent  rounded-full text-gray-500 cursor-pointer hover:bg-blue-400 hover:text-white hover:border-none"
            >
              {" "}
              Home
            </Link>
          </div>
        )}
      </Modal1>
    </section>
  );
};

export default CourseDetail;
