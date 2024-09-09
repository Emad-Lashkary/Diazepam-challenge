import DiazepamImg from "./DiazepamImg";
import Header from "./DiazepamHeader";
import DiazepamP from "./DiazepamP";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Diazepam() {
  return (
    <div className="diazepam">
      <div className="relative h-[10vh]">
        <DiazepamImg src="/diazepam.jpg" />
        <Header link="https://t.me/emdpills" type={1}>
          Diazepam Challenge
        </Header>
      </div>
      <div className="my-10 flex flex-col gap-7">
        <DiazepamP>
          <b>Welcome</b> to the main page of the <b>Diazepam</b> Challenge. This
          page serves as a central hub, providing links to all participants’
          pages. I hope you found this challenge engaging and I am thankful for
          your contributions.
        </DiazepamP>

        <DiazepamP className="flex flex-col gap-2">
          <span>
            I would greatly appreciate it if you could provide your insights on
            the <b>Diazepam</b> challenge, or any other suggestions you may
            have.
          </span>
          <button className="rounded-lg bg-diazepam-dark px-3 py-1 text-diazepam-light">
            <a
              href="http://t.me/HidenChat_Bot?start=100066478"
              target="_blank"
              rel="noreferrer"
            >
              Hidden Chat
            </a>
          </button>
        </DiazepamP>

        <DiazepamP className="flex flex-col gap-1">
          <p className="text-xl font-bold">Challenge overview:</p>
          <p>
            <b>Participants</b>: 10
          </p>
          <p>
            <b>Start date</b>: 9 september
          </p>
          <p>
            <b>Challenge duration</b>: 3 days
          </p>
          <p>
            <b>Creating pages duration</b>: 7 days
          </p>
        </DiazepamP>
      </div>

      <section className="flex w-full flex-col items-center py-10">
        <h2 className="mx-4 my-5 mt-6 flex justify-center rounded-lg bg-diazepam-dark px-6 py-3 text-2xl text-diazepam-light shadow-lg shadow-diazepam-dark">
          Participants Pages:
        </h2>
        <ul className="gp-2 flex w-[70%] flex-col items-center border-x-2 border-diazepam-dark">
          <li>
            <NavLink to="/shadyplaylist">Shady Playlist</NavLink>
          </li>
          <li>
            <NavLink to="/zehnemariz">Zehne Mariz</NavLink>
          </li>
          <li>
            <NavLink to="*">Shady Playlist</NavLink>
          </li>
          <li>
            <NavLink to="*">Shady Playlist</NavLink>
          </li>
          <li>
            <NavLink to="*">Shady Playlist</NavLink>
          </li>
          <li>
            <NavLink to="*">Shady Playlist</NavLink>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Diazepam;
