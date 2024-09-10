import { NavLink } from "react-router-dom";
import BlackheartHeader from "./BlackheartHeader";
import BlackheartImg from "./BlackheartImg";
import BlackheartP from "./BlackheartP";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Blackheart() {
  const [value, setValue] = useState(1);
  const songs = [
    {
      name: "Mohsen Lorestani - Dokhtare Shar'",
      link: "https://open.spotify.com/track/4N46St4gUHarQiRiEt7TDa?si=a9560da9db8d4a31",
    },
    {
      name: "Mohsen Lorestani - Bi kas",
      link: "https://open.spotify.com/track/6DTIAxw9GTTAqIYFn0xTBl?si=ad06a2f04aba48e3",
    },
    {
      name: "cigarettes After Sex - Apocalypse",
      link: "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=13d36048aeee4759",
    },
    {
      name: "FFDP - Jekyll and hyde",
      link: "https://open.spotify.com/track/6efSwlK3LOlWOeKK9xlUKF?si=48557bd1edc0471a",
    },
  ];
  const words = ["Stay", "focus", "on", "your", "personal", "growth"];
  function handleInc() {
    if (value < 6) {
      setValue((value) => value + 1);
    }
  }
  function handleDec() {
    if (value > 1) {
      setValue((value) => value - 1);
    }
  }
  return (
    <div className="bg-blackheart-dark relative h-screen bg-opacity-60">
      <BlackheartHeader
        link="https://t.me/black_Heart8184"
        type={3}
        songs={songs}
      >
        BLACK HEART
      </BlackheartHeader>
      <BlackheartImg src="/blackheart.jpg" />
      <div className="flex w-full flex-col gap-[10vh] pt-[10vh]">
        <div className="relative my-4">
          <NavLink
            to="/"
            className="bg-blackheart-dark text-blackheart-light absolute left-[50%] translate-x-[-50%] rounded-sm px-4 py-2"
          >
            Main Challenge Page
          </NavLink>
        </div>
        <div className="mt-5 flex justify-center">
          <BlackheartP className="w-[80%] scale-110 rounded-sm text-lg">
            When you decide to cultivate a new habit and transform your
            lifestyle, you must wholeheartedly commit to nurturing its growth
            and safeguarding its development. There will likely be a period
            where you find yourself in a valley of despair, seeing no results
            and feeling tempted to give up. However, it is precisely at this
            juncture that you must persevere, knowing that circumstances will
            soon change. The efforts you have invested are not wasted; they are
            merely hidden beneath the surface, waiting to emerge and reveal
            their impact.
          </BlackheartP>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-blackheart-light mt-[10vh] flex w-[50%] flex-col items-center rounded-md bg-opacity-30 py-2">
          <div className="border-blackheart-light flex w-max gap-4 border-b-2 pb-2">
            <button
              onClick={handleDec}
              className="from-blackheart-light to-blackheart-base rounded-md bg-gradient-to-br p-2"
            >
              <FaMinus />
            </button>
            <span>
              <b>Step</b>: {value}
            </span>
            <button
              onClick={handleInc}
              className="from-blackheart-light to-blackheart-base rounded-md bg-gradient-to-bl p-2"
            >
              <FaPlus />
            </button>
          </div>

          <span className="text-lg font-semibold">{words.at(value - 1)}</span>
        </div>
      </div>
    </div>
  );
}

export default Blackheart;
