import { NavLink } from "react-router-dom";
import SavagevibeHeader from "./SavagevibeHeader";
import SavagevibeImg from "./SavagevibeImg";
import SavagevibeP from "./SavagevibeP";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Savagevibe() {
  const [value, setValue] = useState(1);
  const songs = [
    {
      name: "Isaac Hong - Fallin'",
      link: "https://open.spotify.com/track/0sbFehFR6z0DbthqkJivpa?si=fc4ce6d411564c2c",
    },
    {
      name: "The Neighbourhood - Unfair",
      link: "https://open.spotify.com/track/0xD23i0X1WjqMSYIxRfO80?si=6b4ab9c6926e4522",
    },
    {
      name: "cigarettes After Sex - Apocalypse",
      link: "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=13d36048aeee4759",
    },
  ];
  const words = ["Always", "try", "to", "stay", "strong."];
  function handleInc() {
    if (value < 5) {
      setValue((value) => value + 1);
    }
  }
  function handleDec() {
    if (value > 1) {
      setValue((value) => value - 1);
    }
  }
  return (
    <div className="relative h-[10vh]">
      <SavagevibeHeader link="https://t.me/mysavagevibe" type={3} songs={songs}>
        My Savage Vibe
      </SavagevibeHeader>
      <SavagevibeImg src="/savagevibe.jpg" />
      <div className="flex w-full flex-col gap-8 pt-[10vh]">
        <div className="relative my-4">
          <NavLink
            to="/"
            className="bg-shadyplaylist-dark text-shadyplaylist-light absolute left-[50%] translate-x-[-50%] rounded-lg px-4 py-2"
          >
            Main Challenge Page
          </NavLink>
        </div>
        <div className="flex gap-3">
          <SavagevibeP className="rounded-l-3xl">
            The morning sun kissed the horizon, painting the sky in hues of gold
            and pink. Birds sang their sweet melodies, welcoming a new day
            filled with endless possibilities. The world seemed to whisper,
            ‘Today is a gift, unwrap it with joy.
          </SavagevibeP>

          <SavagevibeP className="rounded-r-3xl">
            In the heart of the forest, where the trees stand tall and proud, a
            gentle breeze carries the scent of pine and earth. The rustling
            leaves create a symphony of nature, reminding us that even in
            stillness, there is life and beauty
          </SavagevibeP>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-savagevibe-second mt-10 flex w-[50%] flex-col items-center rounded-full bg-opacity-50">
          <div className="flex w-max gap-4">
            <button onClick={handleDec}>
              <FaMinus />
            </button>
            <span>
              <b>Step</b>: {value}
            </span>
            <button onClick={handleInc}>
              <FaPlus />
            </button>
          </div>

          <span className="text-lg font-semibold">{words.at(value - 1)}</span>
        </div>
      </div>
    </div>
  );
}

export default Savagevibe;
