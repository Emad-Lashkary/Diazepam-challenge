import { NavLink } from "react-router-dom";
import FairyImg from "./FairyImg";
import FairyP from "./FairyP";
import FairyHeader from "./FairyHeader";

function Fairy() {
  const songs = [
    {
      name: "Katatonia - Unfurl",
      link: "https://open.spotify.com/track/1QAZ8h1l94YaZnveYnwUAq?si=128a09194fb940e5",
    },
    {
      name: "Shamrain - Raindrops",
      link: "https://open.spotify.com/track/2HEmAttobAQzfNJMqJqP2y?si=62568f9bbd174dd5",
    },
    {
      name: "Guns N' Roses - This I Love",
      link: "https://open.spotify.com/track/2FEWcWHnDmGD6WSqpW4VYu?si=86b0564efb9d483a",
    },
    {
      name: "Thurisaz - Years Of Silence",
      link: "https://open.spotify.com/track/5WSqNyypJ0hITVpvJMetqQ?si=7a1f6ceb209e4024",
    },
    {
      name: "Shamrain - Laren U Freht Ona",
      link: "https://open.spotify.com/track/79ZkqlOFoPlMa21rD3Oido?si=941605e9dd5d4a1d",
    },
  ];

  return (
    <div>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-[110vh] w-full bg-gradient-to-br from-fairy-dark to-fairy-secondark opacity-40"></div>
      <FairyImg src="/fairy.jpg" />
      <div className="relative h-[10vh]">
        <FairyHeader
          link="https://t.me/afairywithbrokenwings"
          type={4}
          songs={songs}
        >
          A Fairy
        </FairyHeader>
      </div>
      <div className="mt-3 flex w-[97%] flex-col gap-4">
        <FairyP className="w-[80%] text-xl font-semibold">
          In the warmth of a hug, we find comfort and connection. The simple act
          of embracing another person reminds us of the power of love and the
          importance of human touch. It is in these moments that we feel truly
          alive
        </FairyP>
        <FairyP className="w-[80%] self-end text-xl font-semibold">
          Find me where the crowd is less, the sky is blue, and the wind is
          free. Find me in the midst of the forgotten; the abandoned. To the one
          who seeks my presence, find me in the company of the unseen.
        </FairyP>
        <p className="mt-1 self-center rounded-xl bg-fairy-second bg-opacity-25 px-3 py-1 font-serif text-2xl text-fairy-second">
          A Fairy With Broken Wings
        </p>
      </div>

      <NavLink
        to="/"
        className="absolute bottom-6 left-[50%] translate-x-[-50%] rounded-lg bg-fairy-secondark px-4 py-2 text-xl font-semibold text-fairy-second"
      >
        Challenge Page
      </NavLink>
    </div>
  );
}

export default Fairy;
