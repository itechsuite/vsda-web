import React, { useEffect, useState } from "react";
import image from "../assets/images/solar-installation.jpeg";
import { GET_ALL_SKILLS } from "../services/skillsServices";
import { GET_ALL_ARTISANS } from "../services/artisanServices";
const Skills = () => {
  const [skill, setSkills] = useState([]);
  const [selected, setSelected] = useState("");
  const [artisans, setArtisans] = useState([]);

  const fetchSkills = async () => {
    const res = await GET_ALL_SKILLS();
    console.log(res);

    if (!res || !res.length >= 1) {
      return;
    }

    setSkills(res);
  };

  const fetchArtisans = async () => {
    const res = await GET_ALL_ARTISANS(selected);
    setArtisans(res);
    console.log(res);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSkillClick = (e) => {
    console.log(e.target.id);
    setSelected(e.target.id);
    fetchArtisans(e.target.id);
  };
  return (
    <section className="min-h-[100vh] bg-[#3091E9]  flex flex-col justify-center ">
      <div
        style={{
          backgroundImage: `url(${image}) `,
          //   background: "rgba(0, 0, 0, 0.3)",
        }}
        className="  py-4 flex gap-5   px-5 h-[80vh] items-center overflow-auto"
      >
        <div className="bg-[#e9e9e9] rounded-md min-w-max px-5 py-10  h-fit sticky ">
          <p className="text-2xl font-bold after:h-1  after:bg-[#989292]  after:absolute relative  after:w-2/3 after:bottom-0 after:left-1 after:content-[''] ">
            Skills <span className="text-[#3091E9]"> Market Place </span>
          </p>

          <div className="py-6">
            {skill &&
              skill.map((data, index) => {
                return (
                  <p
                    className="cursor-pointer hover:font-bold"
                    id={data.name}
                    onClick={handleSkillClick}
                    key={index}
                  >
                    {data.display}
                  </p>
                );
              })}
          </div>

          <div className="bg-white px-5 py-4 rounded-lg w-full  flex justify-center flex-col gap-3  ">
            <p>Get trained, and join our team</p>

            <button className="bg-[#3091E9] text-white px-4 rounded-full py-2 self-center ">
              Register
            </button>
          </div>
        </div>

        <div className="overflow-hidden  "></div>
      </div>

      <div className="bg-white min-h-[50vh] px-5 py-10 overflow-hidden ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          {artisans &&
            artisans.length >= 1 &&
            artisans.map((artisan, index) => {
              return (
                <div className=" max-w-[500px] py-2 px-0 rounded-xl  backdrop-blur-xl  bg-black bg-opacity-10 border-2">
                  <p className="w-full bg-blue-400 h-3">&nbsp;</p>
                  <div className=" flex flex-col gap-4 px-4 items-center py-4">
                    <img
                      className="w-[50px] rounded-full h-[50px]"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                      alt=""
                    />
                    <p className="border-2 w-fit px-4 py-2 border-blue-400 text-blue-400 font-bold">
                      {" "}
                      Profile
                    </p>

                    <div
                      className="flex flex-row gap-4
                "
                    >
                      <div className="text-white text-sm">
                        <span className="font-extrabold px-2">
                          {artisan.firstname} {artisan.lastname}
                        </span>
                        dolor sit amet consectetur adipisicing elit. Sunt
                        expedita placeat temporibus ex delectus ullam non
                        repellat officia tempore, eaque quos dolores itaque
                        excepturi accusamus aliquid pariatur ducimus nulla
                        alias?
                      </div>

                      <div>
                        <form action="" className="flex flex-col gap-4 ">
                          <input
                            type="text"
                            className="border-b-2 border-b-[#989292]  text-white bg-transparent outline-none  placeholder-white"
                            placeholder="Full Name"
                          />
                          <input
                            type="text"
                            className="border-b-2 border-b-[#989292]  text-white bg-transparent outline-none  placeholder-white"
                            placeholder="Address"
                          />
                          <input
                            type="text"
                            className="border-b-2 border-b-[#989292]  text-white bg-transparent outline-none  placeholder-white"
                            placeholder="Email"
                          />
                          <input
                            type="text"
                            className="border-b-2 border-b-[#989292]  text-white bg-transparent outline-none  placeholder-white"
                            placeholder="Phone Number"
                          />
                          <input
                            type="text"
                            className="border-b-2 border-b-[#989292]  text-white bg-transparent outline-none  placeholder-white"
                            placeholder="Additional info"
                          />

                          <button className="rounded-full bg-[#3091E9]  py-2 text-white font-bold  text-xs">
                            Request Service
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
