import React, { useEffect, useState } from "react";
import image from "../assets/images/solar-installation.jpeg";
import { GET_ALL_SKILLS } from "../services/skillsServices";
import { GET_ALL_ARTISANS } from "../services/artisanServices";
import ArtisanCard from "../components/view-models/ArtisanCard";
import ClipLoader from "react-spinners/ClipLoader";
import Modal1 from "../components/Modal/Modal1";
import TextInput from "../components/Inputs/TextInput";
import FormInput from "../components/Inputs/FormInput";
const Skills = () => {
  const [skill, setSkills] = useState([]);
  const [selected, setSelected] = useState("");
  const [artisans, setArtisans] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    fullname: "",
    address: "",
    email: "",
    phoneNumber: "",
    extra: "",
  });

  const fetchSkills = async () => {
    const res = await GET_ALL_SKILLS();
    console.log(res, "aaa");

    // if (!res || !res.length >= 1) {
    //   return;
    // }

    setSkills(res);
  };

  const fetchArtisans = async () => {
    setLoading(true);
    const res = await GET_ALL_ARTISANS(selected);
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
  }, []);

  useEffect(() => {
    fetchArtisans(selected);
  }, [selected]);
  const handleSkillClick = async (e) => {
    console.log(e.target.id);
    setSelected(e.target.id);
    // await fetchArtisans(e.target.id);
  };

  const handleFormOnChange = (e) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };
  return (
    <section
      className="min-h-[100vh] flex flex-row"
      style={{
        // background: "rgba(0,122,204,0.01)",
        backgroundImage: `url(${image}) `,
        //   background: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="  py-4 gap-5   px-5 h-[80vh] items-center justify-center flex  flex-row z-50 ">
        <div className="bg-[#e9e9e9] rounded-md min-w-max px-5 py-10  h-fit sticky z-40 ">
          <p className="text-2xl font-bold after:h-1  after:bg-[#989292]  after:absolute relative  after:w-2/3 after:bottom-0 after:left-1 after:content-[''] ">
            Find a Skilled <span className="text-[#3091E9]"> Personel </span>
          </p>

          <div className="py-6 col-span-8 flex flex-col gap-3">
            {skill && skill.length >= 1
              ? skill.map((data, index) => {
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
                })
              : null}
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
                    onClick={() => setModal(true)}
                  />
                );
              })}
          </div>
        )}

        {!loading && artisans.length == 0 && (
          <div className="   h-full flex flex-col justify-center items-center  ">
            <p className="font-extrabold text-2xl">No Artisan for this skill</p>
          </div>
        )}
      </div>
      <Modal1 visible={modal} onClose={() => setModal(false)}>
        <div className="">
          <div>
            <h1 className="font-extrabold mb-10">Request Form</h1>
          </div>
          <form className="flex flex-col  ">
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
  );
};

export default Skills;
