import React from "react";
import { Player } from "video-react";

const IntroVideo = () => {
  return (
    <div className="h-2/4 py-10 px-7 my-10 ">
      <Player>
        <source src={require("../assets/videos/intro.mp4")} />
      </Player>
    </div>
  );
};

export default IntroVideo;
