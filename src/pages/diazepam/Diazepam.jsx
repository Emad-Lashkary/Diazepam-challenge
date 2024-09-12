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

        <DiazepamP className="flex w-fit flex-col gap-1 self-center px-5">
          <p className="text-xl font-bold">Challenge overview:</p>
          <p>
            <b>Participants</b>: 15
          </p>
          <p>
            <b>Start date</b>: 9 september
          </p>
          <p>
            <b>Challenge duration</b>: 2 days
          </p>
          <p>
            <b>Creating pages duration</b>: 3 days
          </p>
        </DiazepamP>
      </div>

      <section className="flex w-full flex-col items-center py-10">
        <h2 className="mx-4 my-5 mt-6 flex justify-center rounded-lg bg-diazepam-dark px-6 py-3 text-2xl text-diazepam-light shadow-lg shadow-diazepam-dark">
          Participants Pages:
        </h2>
        <ul className="gp-2 flex w-[70%] flex-col items-center border-x-2 border-diazepam-dark">
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-shadyplaylist-base to-shadyplaylist-dark text-shadyplaylist-light shadow-lg shadow-shadyplaylist-dark">
            <NavLink to="/shadyplaylist">Shady Playlist</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-zehnemariz-dark to-zehnemariz-base text-zehnemariz-second shadow-lg shadow-zehnemariz-base">
            <NavLink to="/zehnemariz">Zehne Mariz</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-savagevibe-base to-savagevibe-dark text-savagevibe-second shadow-lg shadow-savagevibe-base">
            <NavLink to="/savagevibe">Savage Vibe</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-fairy-base to-fairy-secondark text-fairy-second shadow-lg shadow-fairy-secondark">
            <NavLink to="/fairy">A fairy</NavLink>
          </li>
          <li className="to flex w-[85%] justify-center bg-gradient-to-br from-blackheart-base to-blackheart-dark text-blackheart-light shadow-lg shadow-blackheart-dark">
            <NavLink to="/blackheart">Black heart</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-dream-base to-dream-secondark text-dream-second shadow-lg shadow-dream-secondark">
            <NavLink to="/dream">For a Dream</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-deez-third via-deez-first to-deez-fiveth font-semibold text-deez-fourth shadow-lg shadow-deez-fiveth">
            <NavLink to="/deez">Deez Songz</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-changed-light via-changed-base to-changed-dark font-semibold text-changed-light shadow-lg shadow-changed-dark">
            <NavLink to="/changed">Changed</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-circus-dark via-circus-base to-red-700 font-semibold text-circus-light shadow-lg shadow-circus-dark">
            <NavLink to="/circus">Circus</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-xanax-dark via-xanax-base to-red-700 font-semibold text-xanax-light shadow-lg shadow-xanax-dark">
            <NavLink to="/xanax">Xanax</NavLink>
          </li>
          <li className="flex w-[85%] justify-center bg-gradient-to-br from-lime-400 via-lime-500 to-lime-900 font-semibold text-lime-50 shadow-lg shadow-lime-900">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://farnia-archive.vercel.app/"
            >
              Zadeh Noor
            </a>
          </li>
          <li className="from-gt-dark to-gt-base text-gt-light shadow-gt-dark flex w-[85%] justify-center bg-gradient-to-br font-semibold shadow-lg">
            <NavLink to="/gt">GT Playlist</NavLink>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Diazepam;
