import React, { useEffect } from "react";
import FlexLayout from "../components/Layouts/FlexLayout";
import useAutoFocus from "../hooks/useAutoFocus";
import useScrollToTop from "../hooks/useScrollToTop";

const AboutUs = () => {
  const scrolltotop = useScrollToTop();

  return (
    <section className="my-5 flex-col flex gap-5 min-h-[100vh]  py-5">
      <div
        className="md:px-10 px-5 py-5 flex  flex-col items-center gap-10 min-h-[250px]  bg-[#eeeaf2]  md:mx-20 mx-5 "
        autoFocus
      >
        <p className="font-extrabold text-2xl"> Putting You First</p>
        <p>
          Vital Skills Development Academy is Built on The Knowledge And
          Expertise of A Team Of Professionals With Over 15 Years of Combined
          Experience. We are committed to making clients journey in the
          technical industry safe, profitable and reaching full potentials.
          Experienced in Industrial Electrics, Automation Etc on aGlobal Scale.
          The vital skills development Academy Team are dedicated to generating
          an extraordinary Training Environment for All Clients Across the Board
        </p>
      </div>

      <div className="flex flex-col gap-5 my-10">
        <FlexLayout
          title={"our mission"}
          details={
            "To be Africa’s leading technical solution provider, supporting all sectors by delivering world class technical training	solutions. AIM: Empowering and affecting humanity positively through our Tailor-Made capacity building oriented programs which will rive business growth for our clients and create value for the society in General. "
          }
        />
        <FlexLayout
          title={"our vision"}
          details={
            "To provide technical training and bridge the knowledge and skill gaps in the electrical engineering sector and build a Community/Pool of Competent Engineers and technicians who can deliver world class services at all fronts as employees, free lancers and contractors"
          }
        />
      </div>

      <div
        className=" mx-20 min-h-[300px] flex flex-col justify-around px-5 py-5 text-white bg-center bg-cover"
        style={{
          // backgroundPosition: "center",
          backgroundImage: `linear-gradient(to right, rgba(5,49,86, 0.92), rgba(255,255,255  , 0.0)),
        url('images/background.jpg') ,url(${require("../assets/images/electrician.jpeg")})`,
        }}
      >
        <div className="flex flex-col gap-3">
          <p className=" uppercase font-extrabold text-2xl  ">
            Service Experts{" "}
          </p>
          <div className="text-gray-200">
            <p>Service Delivery Like None Other </p>
            <p>World Class Solution Provider</p>
          </div>
        </div>

        <div>
          <a
            href="https://serviceexpert.com.ng/services.html"
            target="_blank"
            className="btn bg-white hover:bg-blue-200 text-black border-none px-10 text-lg"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
