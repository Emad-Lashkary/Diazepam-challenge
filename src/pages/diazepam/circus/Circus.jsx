import ShadyplaylistImg from "./CircusImg";
import Header from "./CircusHeader";
import CircusP from "./CircusP";
import { NavLink } from "react-router-dom";

function Circus() {
  const songs = [
    {
      name: "Light me up - The pretty Reckless",
      link: "https://open.spotify.com/album/0moY5BetMaS0Vyi0Hh3zpb",
    },
    {
      name: "Currents - The Way it Ends",
      link: "https://open.spotify.com/album/2pVCexIJwUK0Mg9cFtDhxr",
    },
    {
      name: "Slipknot - We Are Not your Kind",
      link: "https://open.spotify.com/album/754RY5WpZ2LTUZsk8kDBju",
    },
  ];

  return (
    <div>
      <div className="relative h-[10vh]">
        <ShadyplaylistImg src="/circus.jpg" />
        <Header link="https://t.me/ocm4mX9vlE8wYmU0" songs={songs}>
          CIRCUS
        </Header>
      </div>
      <div className="my-10 flex flex-col gap-10">
        <CircusP>
          The weight of the world presses down on me, a relentless force that
          crushes any semblance of joy. Each step I take feels like a struggle
          against an invisible tide, pulling me deeper into a sea of despair.
          The laughter of others echoes like a cruel reminder of what I’ve lost,
          and I can’t escape the feeling that I’m destined to wander this
          desolate path alone, forever haunted by my own failures.
        </CircusP>

        <CircusP className="text-circus-light bg-opacity-55">
          In the midst of the darkness, it’s easy to feel overwhelmed and lost.
          Yet, even in the deepest shadows, there can be a glimmer of light.
          Acknowledge the pain and sorrow, for they are a part of your journey,
          but don’t let them define you.
        </CircusP>
      </div>
      <div className="flex w-full justify-center">
        <NavLink
          to="/"
          className="to-circus-dark text-circus-light bottom-2 left-[50%] translate-x-[-50%] rounded-lg bg-gradient-to-r from-red-700 px-3 py-1"
        >
          Main Challenge Page
        </NavLink>
      </div>
    </div>
  );
}

export default Circus;
