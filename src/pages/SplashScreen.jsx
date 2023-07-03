import {
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  PlayPauseIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Youtube from "react-youtube";

const SplashScreen = () => {
  const [player, setPlayer] = useState(null);
  const onReady = (e) => {
    setPlayer(e.target);
    setTimeout(() => {
      //   e.target.playVideo();
      player.playVideo();
    }, 4000);
  };
  const onPlayHandler = () => {
    player.playVideo();
  };
  const onPauseHandler = () => {
    player.pauseVideo();
  };
  const handleOnclick = () => {
    //set localstorage value
    localStorage.setItem("firstVisit", "1");
    window.location.reload();
  };
  return (
    <div className=" relative h-[100vh] w-[100vw] bg-blue-50">
      <div
        onClick={handleOnclick}
        className="absolute  text-white flex text-sm gap-2  items-center justify-center  flex-row text-black cursor-pointer  bottom-32 right-5 px-3 rounded-sm py-2 bg-opacity-70 hover:font-bold md:bottom-32 md:bg-opacity-40   bg-black "
      >
        <p>Skip Ads</p>
        <PlayPauseIcon className="w-10" />
      </div>
      <iframe
        src="https://www.youtube.com/embed/VW-vlbZQz3g?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1"
        width="100%"
        height="100%"
        frameborder="0"
        onPlay={() => console.log("video is playing")}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SplashScreen;
