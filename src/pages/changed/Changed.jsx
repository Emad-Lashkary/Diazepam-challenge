import { NavLink } from "react-router-dom";
import ChangedHeader from "./ChangedHeader";
import ChangedP from "./ChangedP";
import ChangedImg from "./ChangedImg";

function Changed() {
  const songs = [
    {
      name: "Psychonaut 4 - Vai Me",
      link: "https://open.spotify.com/track/0KjAXKwrPmcBAApfB5CTW6?si=8c64c0c07af5408e",
    },
    {
      name: "Thy Light - The bridge",
      link: "https://open.spotify.com/track/0KjAXKwrPmcBAApfB5CTW6?si=8c64c0c07af5408e",
    },
    {
      name: "Sadness - In The Distant Travels",
      link: "https://open.spotify.com/track/01R3LjAOaCAC4SZlPh2GFO?si=73dde6a6e75b4607",
    },
    {
      name: "cigarettes After Sex - Apocalypse",
      link: "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=13d36048aeee4759",
    },
  ];

  return (
    <div className="bg-changed-dark relative h-screen bg-opacity-60">
      <ChangedHeader link="https://t.me/SadVmi" type={3} songs={songs}>
        CHANGED
      </ChangedHeader>
      <ChangedImg src="/changed.jpg" />
      <div className="flex w-full flex-col gap-[10vh] pt-[10vh]">
        <div className="mt-5 flex flex-col">
          <ChangedP className="border-changed-base ml-5 w-max rounded-sm border-b-2 text-lg">
            I've been offered drugs
            <br />
            more than hugs
          </ChangedP>
          <ChangedP className="border-changed-base ml-5 w-max rounded-sm border-b-2 text-lg">
            I don't know myself what got me.
            <br /> But honest, sometimes...
            <br />I think I'm the child of the Devil.
            <br />I let the Devil in.
          </ChangedP>
          <ChangedP className="border-changed-base ml-5 w-[80%] rounded-sm border-b-2 text-lg">
            The shadows whisper secrets of despair, and I can’t help but feel
            that my soul is tainted, forever marked by an unseen curse. The
            light seems to fade with every breath, leaving me in a perpetual
            state of sorrow and regret.
          </ChangedP>
        </div>
        <div className="relative my-4">
          <NavLink
            to="/"
            className="bg-changed-dark text-changed-light absolute left-[50%] translate-x-[-50%] rounded-sm px-4 py-2"
          >
            Main Challenge Page
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Changed;
