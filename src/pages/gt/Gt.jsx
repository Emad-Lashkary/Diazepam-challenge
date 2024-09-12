import GtImg from "./GtImg";
import GtP from "./GtP";
import GtHeader from "./GtHeader";
import { NavLink } from "react-router-dom";

function Gt() {
  const songs = [
    {
      name: "Radiohead - The bends",
      link: "https://open.spotify.com/album/1P1LYaTMV1LnDiHA3LOows",
    },
    {
      name: "Cigatettes After Sex - Cry",
      link: "https://open.spotify.com/album/6fUVptFdeOgcqDvCZzM2kC",
    },
    {
      name: "Habib - Bezan Baran",
      link: "https://open.spotify.com/track/2uhv4FVK5TdriwlZ8qZJwp?si=ig70OE9OTCmR3ZNJnFjgVw",
    },
  ];

  return (
    <div>
      <div className="from-gt-dark to-gt-secondark pointer-events-none absolute left-0 top-0 z-10 h-[110vh] w-full bg-gradient-to-br opacity-40"></div>
      <GtImg src="/gt.jpg" />
      <div className="relative h-[10vh]">
        <GtHeader link="https://t.me/TheGTPlaylist" type={4} songs={songs}>
          GT PlayList
        </GtHeader>
      </div>
      <div className="mt-5 flex w-[97%] flex-col gap-[3vh]">
        <GtP className="w-[80%] self-end text-sm font-semibold">
          In the vast expanse of existence, there lies a profound sense of
          hopelessness that permeates the very fabric of life. It is a
          relentless shadow, casting its pall over every fleeting moment of joy,
          every glimmer of hope. The weight of dissatisfaction bears heavily
          upon the soul, a constant reminder of the unattainable ideals and
          shattered dreams that litter the path of human endeavor. In this
          desolate landscape, the heart yearns for solace, yet finds only the
          cold embrace of despair.
        </GtP>
        <GtP className="w-[80%] text-sm font-semibold">
          The human condition, fraught with its myriad imperfections, often
          leads to a deep-seated disappointment in the very essence of our
          being. We strive, we falter, and in our faltering, we reveal the
          fragility of our aspirations. The world, once a canvas of boundless
          potential, now appears as a stark tableau of unfulfilled promises and
          broken bonds. In the quiet moments of reflection, one cannot help but
          question the purpose of it all, the relentless pursuit of meaning in a
          seemingly indifferent universe.
        </GtP>
        <NavLink
          to="/"
          className="bg-gt-dark text-gt-light absolute -bottom-5 left-[50%] translate-x-[-50%] rounded-sm px-4 py-2"
        >
          Main Challenge Page
        </NavLink>
      </div>
    </div>
  );
}

export default Gt;
