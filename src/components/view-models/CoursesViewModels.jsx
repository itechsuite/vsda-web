import React from "react";

const CoursesViewModels = () => {
    return (
        <div className="flex  rounded-md flex-col bg-white ">
            <div
                className="min-h-[200px] relative"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80)"
                }}
            >
                <p className="absolute top-2 right-2">sermon</p>
            </div>

            <div className="px-3 flex flex-col  py-3">
                <div className="flex flex-row justify-between items-center  ">
                    <div className="flex flex-row bg-yellow-100  gap-1 rounded-full px-3 text-sm justify-center items-center">
                        <div className="bg-black rounded-full w-2 h-2">
                            &nbsp;
                        </div>
                        <p className="text-xs">web design</p>
                    </div>

                    <p>$150</p>
                </div>

                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi commodi illo quam nulla perferendis
                    </p>
                </div>
            </div>

            <div className=" self-center py-3">
                <button className="bg-blue-600 w-full px-10 py-1 text-white">
                    {" "}
                    enroll
                </button>
            </div>
        </div>
    );
};

export default CoursesViewModels;
