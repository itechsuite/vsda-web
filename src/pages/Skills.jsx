import React, { useEffect, useState } from "react";
import image from "../assets/images/solar-installation.jpeg";
import { GET_ALL_SKILLS } from "../services/skillsServices";
import { GET_ALL_ARTISANS } from "../services/artisanServices";
import ArtisanCard from "../components/view-models/ArtisanCard";
import ClipLoader from "react-spinners/ClipLoader";
import Modal1 from "../components/Modal/Modal1";
import TextInput from "../components/Inputs/TextInput";
import FormInput from "../components/Inputs/FormInput";
import { LoadingSpinner } from "video-react";
import PageLoader from "../components/Loaders/PageLoader";
import RegisterNow from "../components/CTAs/RegisterNow";

import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { COMPOSE_EMAIL } from "../services/mailServices";
import { DEFUALT_EMAIL_SENDER } from "../core/constants";
import { ToastContainer, toast } from "react-toastify";
import { GET_ALL_COURSES, GET_ALL_COURSES2 } from "../services/CourseServices";
const Skills = () => {
  const [skill, setSkills] = useState([]);
  const [selected, setSelected] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [artisans, setArtisans] = useState([]);
  const [courses, setCourses] = useState([]);
  const [modal, setModal] = useState(false);
  const [enrolModal, setEnrolModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    fullname: "",
    address: "",
    email: "",
    phoneNumber: "",
    staff: "",
    extra: "",
  });

  const [enrollment, setEnrollment] = useState({
    course_id: "",
    course_name: "",
    email: "",
    fullname: "",
    phoneNumber: "",
  });

  const handleEnrolment = async (e) => {
    e.preventDefault();

    const { course_name, email, fullname, phoneNumber } = enrollment;
    alert(JSON.stringify(enrollment));

    if (
      course_name === "" ||
      email === "" ||
      fullname === "" ||
      phoneNumber === ""
    )
      return;

    setLoading(true);

    setTimeout(async () => {
      const mail = await COMPOSE_EMAIL({
        to: DEFUALT_EMAIL_SENDER,
        subject: `REGISTRATION NOTICE FOR  - ${fullname}`,
        message: `${fullname} have indicated interest to Learn ${course_name}  \n \n  USER DETAILS: \n  FULLNAME: ${fullname} \n  EMAIL: ${email} \n  PHONE NUMBER: ${phoneNumber}  `,
      });
      console.log(mail);
      if (!mail.isOk) {
        toast.warn("Please resubmit the form");
        return;
      }

      toast.success("Request submitted successfully.");
      setModal(false);
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };
  const fetchSkills = async () => {
    const res = await GET_ALL_SKILLS();
    console.log(res);
    if (!res.isOk) {
      setSkills([]);
      setLoading(false);
      return;
    }

    setLoading(false);
    setSkills(res.data);
  };

  const fetchArtisans = async () => {
    setLoading(true);
    const res = await GET_ALL_ARTISANS(selected);

    if (selected === "") {
      setArtisans([]);
      setLoading(false);
      return;
    }
    if (res.length <= 0) {
      setArtisans([]);
      setLoading(false);
      return;
    }
    setLoading(false);
    setArtisans(res);
    console.log(res);
  };

  useEffect(() => {
    fetchSkills();
    getAllCourse();
  }, []);

  useEffect(() => {
    fetchArtisans(selected);
  }, [selected]);
  const handleSkillClick = async (e) => {
    console.log(e.target.value);
    setSelected(e.target.id);
    setSelectedSkill(e.target.value);
    // await fetchArtisans(e.target.id);
  };

  const handleFormOnChange = (e) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };
  const handleEnrolmentFormOnChange = (e) => {
    console.log(e.target.value);
    const { value, id } = e.target;
    setEnrollment({ ...enrollment, [id]: value });
  };

  if (loading) {
    return <PageLoader />;
  }

  const handleSubmitRequest = async (e) => {
    e.preventDefault();

    const { address, email, extra, fullname, phoneNumber, staff } = values;

    if (
      address === "" ||
      email === "" ||
      extra === "" ||
      fullname === "" ||
      phoneNumber === "" ||
      staff === ""
    )
      return;

    const mail = await COMPOSE_EMAIL({
      to: DEFUALT_EMAIL_SENDER,
      subject: `REQUEST FORM FOR - ${staff}`,
      message: `${fullname} just requested the service of ${staff} \n \n  CUSTOMER DETAILS: \n  FULLNAME: ${fullname} \n ADDRESS: ${address} \n PHONE NUMBER: ${phoneNumber} \n ADDITIONAL INFO: ${extra} `,
    });
    console.log(mail);
    if (!mail.isOk) {
      toast.warn("Please resubmit the form");
      return;
    }

    toast.success("Request submitted successfully.");
    setModal(false);
  };
  async function getAllCourse() {
    const res = await GET_ALL_COURSES2();
    if (!res.isOk) {
      setCourses([]);
      return;
    }
    setCourses(res.data);
  }
  return (
    <div className="py-5">
      <section
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.93)),
        url('images/background.jpg') ,url(${image})`,
        }}
        className="flex flex-col md:flex-row "
      >
        <div className="  py-4 gap-5 px-5 h-[90vh] items-center justify-center flex flex-row z-50   md:flex ">
          <div className="bg-[#e9e9e9] rounded-md min-w-max px-5 py-10  h-fit sticky z-40 ">
            <p className="text-2xl font-bold after:h-1  after:bg-[#989292]  after:absolute relative  after:w-2/3 after:bottom-0 after:left-1 after:content-[''] ">
              Find a Skilled <span className="text-[#3091E9]"> Personel </span>
            </p>

            {/* Skills market place application */}

            <div className="py-6 col-span-8 flex flex-col gap-3" autoFocus>
              {skill.length >= 1 ? (
                skill.map((data, index) => {
                  return (
                    <p
                      className={
                        selected === data.name
                          ? "font-extrabold"
                          : "cursor-pointer hover:font-bold"
                      }
                      id={data.name}
                      onClick={handleSkillClick}
                      key={index}
                    >
                      {data.display}
                    </p>
                  );
                })
              ) : (
                <p> {skill.length}</p>
              )}

              {loading && skill.length === 0 && (
                <div className="   h-full flex flex-col justify-center items-center  ">
                  <p className="font-extrabold text-2xl  text-white">
                    No Artisan for this skill
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-transparent min-h-[50vh] px-5 py-10 overflow-hidden w-full  ">
          {loading && (
            <div className="flex justify-center items-center  w-full h-full ">
              <div className="bg-white px-5 py-5 rounded-md">
                <ClipLoader />
              </div>
            </div>
          )}

          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
              {artisans &&
                artisans.length >= 1 &&
                artisans.map((artisan, index) => {
                  return (
                    <ArtisanCard
                      payload={artisan}
                      skill={selectedSkill}
                      onClick={() => {
                        setModal(true);
                        setValues({
                          ...values,
                          staff: `${artisan.firstname} ${artisan.lastname} `,
                        });
                      }}
                    />
                  );
                })}
            </div>
          )}

          {!loading && artisans.length === 0 && (
            <div className="   h-full flex flex-col justify-center items-center  ">
              <p className="font-extrabold text-2xl">
                No Artisan for this skill
              </p>
            </div>
          )}
        </div>

        <Modal1 visible={modal} onClose={() => setModal(!modal)}>
          <div className="">
            <div>
              <h1 className="font-extrabold mb-10">Request Form</h1>
            </div>
            <form className="flex flex-col  " onSubmit={handleSubmitRequest}>
              <FormInput
                id={"fullname"}
                placeholder={"Fullname"}
                value={values.fullname}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"address"}
                placeholder={"address"}
                value={values.address}
                onChange={handleFormOnChange}
              />
              <FormInput
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
              <FormInput
                className={"text-blue-400 "}
                id={"staff"}
                placeholder={"staff"}
                disabled
                value={values.staff}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"extra"}
                placeholder={"Additional Info"}
                value={values.extra}
                onChange={handleFormOnChange}
              />

              <button className="mt-5 btn"> Submit</button>
            </form>
          </div>
        </Modal1>
      </section>

      <RegisterNow onClick={() => setEnrolModal(true)} />

      <Modal1 visible={enrolModal} onClose={() => setEnrolModal(false)}>
        {success === false && (
          <div className="">
            <div>
              <h1 className="font-extrabold mb-10">Enrolment Form</h1>
            </div>
            <form className="flex flex-col  " onSubmit={handleEnrolment}>
              <FormInput
                id={"fullname"}
                placeholder={"Enter your fullname"}
                value={enrollment.fullname}
                onChange={handleEnrolmentFormOnChange}
              />
              <select
                id="course_name"
                onChange={handleEnrolmentFormOnChange}
                className="py-4 px-2 outline-none"
              >
                {courses && courses.length >= 1
                  ? courses.map((course, index) => {
                      return (
                        <option value={course.course_title}>
                          {course.course_title}
                        </option>
                      );
                    })
                  : null}
              </select>
              {/* <FormInput
                id={"course_name"}
                placeholder={"Course Name"}
                value={enrollment.course_name}
                disabled={true}
                onChange={handleFormOnChange}
              /> */}
              <FormInput
                type={"email"}
                id={"email"}
                placeholder={"email"}
                value={enrollment.email}
                onChange={handleEnrolmentFormOnChange}
              />

              <FormInput
                id={"phoneNumber"}
                placeholder={"phoneNumber"}
                value={enrollment.phoneNumber}
                onChange={handleEnrolmentFormOnChange}
              />

              <button className="mt-5 mx-auto w-14 px-20 btn"> Submit</button>
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

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Skills;
