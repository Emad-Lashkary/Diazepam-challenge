import { NavLink } from "react-router-dom";
import AIImg from "./AiImg";
import AIP from "./AiP";
import AIHeader from "./AiHeader";

function Ai() {
  const songs = [
    {
      name: "System of a Down - Lonely Day",
      link: "https://t.me/littlefairy_in_Aiuola/2257",
    },
    {
      name: "Lana Del Ray - VideoGames",
      link: "https://t.me/littlefairy_in_Aiuola/1012",
    },
    {
      name: "Imagine Dragons - Natural",
      link: "https://t.me/littlefairy_in_Aiuola/1696",
    },
    {
      name: "Apocalyptica - I dont care",
      link: "https://t.me/littlefairy_in_Aiuola/1965",
    },
    {
      name: "The Neighbourhood - Paradise",
      link: "https://t.me/littlefairy_in_Aiuola/1965",
    },
  ];

  return (
    <div>
      <div className="from-ai-base via-ai-dark to-ai-secondark pointer-events-none absolute left-0 top-0 z-10 h-[110vh] w-full bg-gradient-to-br opacity-60"></div>
      <AIImg src="/ai.jpg" />
      <div className="relative h-[10vh]">
        <AIHeader
          link="https://t.me/littlefairy_in_Aiuola"
          type={4}
          songs={songs}
        >
          Aiuola
        </AIHeader>
      </div>
      <div className="mt-[20vh] flex w-[97%] flex-col gap-4">
        <AIP className="text-xl font-semibold">
          As the relentless march of time continues, humanity’s insatiable greed
          and disregard for the natural world carve deep scars into the very
          fabric of our planet. Forests, once teeming with life and echoing with
          the songs of countless species, now stand as silent, desolate
          wastelands. The oceans, once a cradle of biodiversity, are choked with
          plastic and toxic waste, their once-vibrant ecosystems reduced to
          barren underwater deserts. The air we breathe, once pure and
          invigorating, is now tainted with the acrid stench of pollution, a
          constant reminder of our destructive footprint.
        </AIP>
      </div>

      <NavLink
        to="/"
        className="bg-ai-secondark text-ai-second absolute -bottom-10 left-[50%] translate-x-[-50%] rounded-lg px-4 py-2 text-xl font-semibold"
      >
        Challenge Page
      </NavLink>
    </div>
  );
}

export default Ai;
