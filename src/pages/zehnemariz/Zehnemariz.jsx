import { NavLink } from "react-router-dom";
import ZehnemarizHeader from "./ZehnemarizHeader";
import ZehnemarizImg from "./ZehnemarizImg";
import ZehnemarizP from "./ZehnemarizP";

function Zehnemariz() {
  const songs = [
    {
      name: "Sweater Weather - The Neighbourhood",
      link: "https://open.spotify.com/track/2QjOHCTQ1Jl3zawyYOpxh6?si=QW5_dRteTwG3xSzM_xnxtQ",
    },
    {
      name: "505 - Arctic Monkeys",
      link: "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp?si=zIdC2-efSi-xUnqJdwOr7A",
    },
    {
      name: "Leaving Tonight - The Neighbourhood",
      link: "https://open.spotify.com/track/6C0T7QMpmeDoDkke32Ctqb?si=PldiFh8-ToCTt9hagsIKkQ",
    },
    {
      name: "Notion - The Rare Occasions",
      link: "https://open.spotify.com/track/0sTlGEld0h8kIPZaKDYUf4?si=KH3Se-TmQtywvqs_rA9VdA",
    },
  ];
  return (
    <div>
      <div className="relative h-[10vh]">
        <ZehnemarizHeader
          link="https://t.me/herbullshitts"
          type={3}
          songs={songs}
        >
          Zehne Mariz
        </ZehnemarizHeader>
        <ZehnemarizImg src="/zehnemariz.jpg" />
      </div>
      <div className="flex w-full flex-col gap-5 pt-5">
        <ZehnemarizP className="border-zehnemariz-second w-[70%] self-end border-4 border-opacity-30">
          Life is an endless struggle; the more we strive, the more we realize
          our own limitations
        </ZehnemarizP>
        <ZehnemarizP className="border-zehnemariz-second w-[70%] self-start border-4 border-opacity-30">
          Life is nothing but an endless quest to find meaning amidst chaos
        </ZehnemarizP>
        <ZehnemarizP className="border-zehnemariz-second w-[70%] self-end border-4 border-opacity-30">
          Life is meaningless, but it is up to us to give it meaning
        </ZehnemarizP>
        <ZehnemarizP className="border-zehnemariz-second w-[70%] self-start border-4 border-opacity-30">
          Life is not easy, but with effort and perseverance, we can overcome
          its challenges
        </ZehnemarizP>
      </div>
      <NavLink
        to="/"
        className="bg-zehnemariz-second border-zehnemariz-dark text-zehnemariz-dark absolute bottom-4 left-[50%] translate-x-[-50%] rounded-lg border-2 px-3 py-1"
      >
        Main Challenge Page
      </NavLink>
    </div>
  );
}

export default Zehnemariz;
