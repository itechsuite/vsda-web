import React from "react";

const CoursesViewModels = ({ payload, onClick }) => {
  const {
    course_id,
    course_title,
    course_plan,
    availability,
    category,
    details,
    sub_title,
    course_details,
    duration,
    cost,
    extra_info,
    banner,
    thumbnail,
  } = payload;
  return (
    <div className="flex  rounded-md flex-col bg-white cursor-pointer hover:shadow-2xl">
      <div
        className="min-h-[200px] relative bg-cover bg-center rounded-md"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
        // style={{
        //   backgroundImage:
        //     "url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80)",
        // }}
      >
        <p className=" px-2 py-1 uppercase text-xs  rounded-sm absolute top-2 right-2 bg-blue-500 text-white">
          COURSE DURATION <span className="font-extrabold">{course_plan}</span>
        </p>
      </div>

      <div className="px-3 flex flex-col  py-3">
        <div className="flex flex-row justify-between items-center  ">
          <div className="flex flex-row bg-yellow-100  gap-1 rounded-full px-3 text-sm justify-center items-center">
            <div className="bg-black rounded-full w-2 h-2">&nbsp;</div>
            <p className="text-xs uppercase">{payload.category}</p>
          </div>

          <p>${cost}</p>
        </div>

        <div>
          <p className="uppercase  font-bold">{payload.course_title}</p>
          <p>{details}</p>
        </div>
      </div>

      <div className=" self-center py-3">
        <button
          onClick={onClick}
          className="bg-blue-600 w-full px-10 py-1 text-white"
        >
          {" "}
          enroll
        </button>
      </div>
    </div>
  );
};

export default CoursesViewModels;
