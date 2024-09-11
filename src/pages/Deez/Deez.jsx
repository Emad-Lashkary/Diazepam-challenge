import { NavLink } from "react-router-dom";
import DeezHeader from "./DeezHeader";
import DeezP from "./DeezP";
import DeezSongz from "./DeezSongz";

function Deez() {
  return (
    <div className="from-deez-first via to-deez-fourth via-deez-third flex h-[130vh] flex-col gap-8 bg-gradient-to-br">
      <DeezHeader link="https://t.me/DezSongz">Deez Songz</DeezHeader>
      <DeezSongz />
      <DeezP>
        <b>Deez Songs</b> is a cherished treasure for rock aficionados, offering
        a meticulously curated playlist channel that promises an endless journey
        of musical discovery. Each track is a testament to the timeless allure
        of rock music, ensuring that listeners remain captivated and engaged.
        For those who harbor a deep appreciation for classic hits, this channel
        offers an even richer experience, blending contemporary rock anthems
        with legendary classics. Whether you’re a seasoned rock enthusiast or a
        newcomer eager to explore, <b>Deez Songs</b> provides an unparalleled
        auditory adventure that never grows old.
      </DeezP>
      <div className="relative">
        <NavLink
          to="/"
          className="from-deez-second to-deez-first text-deez-fourth absolute left-[50%] translate-x-[-50%] rounded-full bg-gradient-to-b px-3 py-2 text-lg font-semibold"
        >
          Challenge Page
        </NavLink>
      </div>
    </div>
  );
}

export default Deez;
