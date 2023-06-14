import React from "react";
import { Player } from "video-react";

const IntroVideo = () => {
  return (
    <div className="h-2/4 py-10 px-10 my-10  flex items-center justify-between md:flex-row flex-col  bg-[#0b2035] text-white">
      <div className="flex  flex-col gap-8 md:w-2/5 w-full py-5">
        <p className="font-black text-5xl ">Learn with Engr. Gabby</p>
        <p>
          Get trained by industry Experts, learn cutting edge skills that will
          place you ahead of your contemporaries
        </p>

        <button className="btn bg-[#ed4f4f]"> Register Now</button>
      </div>

      <video controls>
        <source src={require("../assets/videos/intro.mp4")} type="video/mp4" />
      </video>

      {/* <Player>
        <source src={require("../assets/videos/intro.mp4")} />
      </Player> */}
    </div>
  );
};

export default IntroVideo;
