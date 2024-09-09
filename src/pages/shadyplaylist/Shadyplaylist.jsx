import ShadyplaylistImg from "./ShadyplaylistImg";
import Header from "./ShadyplaylistHeader";
import ShadyplaylistP from "./ShadyplaylistP";
import { NavLink } from "react-router-dom";

function Shadyplaylist() {
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
    <div className="shadyplaylist">
      <div className="relative h-[10vh]">
        <ShadyplaylistImg src="/shadyplaylist.jpg" />
        <Header link="https://t.me/shadylist" type={2} songs={songs}>
          Shadyplaylist
        </Header>
      </div>
      <div className="my-10 flex flex-col gap-[10vh]">
        <ShadyplaylistP className="w-fit scale-110 bg-opacity-0">
          <span>
            +Booker are you afraid of <b>God</b>?<br />
            -No but I’m afraid of <b>you</b>
          </span>
        </ShadyplaylistP>

        <ShadyplaylistP className="flex flex-col gap-2">
          <span>
            <b>Shadyplaylist</b> is one of those channels where, once you start
            scrolling and listening to its songs, you’re bound to have an
            enjoyable and delightful time, getting entertained by its music.
          </span>
          <button className="bg-shadyplaylist-dark text-shadyplaylist-light rounded-lg px-3 py-1">
            <a href="https://t.me/shadylist" target="_blank" rel="noreferrer">
              Shadyplaylist
            </a>
          </button>
        </ShadyplaylistP>
      </div>
      <NavLink
        to="/"
        className="bg-shadyplaylist-dark text-shadyplaylist-light absolute bottom-2 left-[50%] translate-x-[-50%] rounded-lg px-3 py-1"
      >
        Main Challenge Page
      </NavLink>
    </div>
  );
}

export default Shadyplaylist;
