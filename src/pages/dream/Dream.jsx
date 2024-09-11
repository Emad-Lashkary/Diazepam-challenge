import { NavLink } from "react-router-dom";
import DreamHeader from "./DreamHeader";
import DreamImg from "./DreamImg";
import DreamP from "./DreamP";
import DreamHeader2 from "./DreamHeader2";

function Dream() {
  const songs = [
    {
      name: "Kensington - No Me",
      link: "https://t.me/purple_jigh/245",
    },
    {
      name: "Hayedeh - Masti",
      link: "https://t.me/purple_jigh/82",
    },
    {
      name: "Dariush - Shekanjegar",
      link: "https://t.me/purple_jigh/1558",
    },
    {
      name: "Siavash Ghomayshi - Yadegari",
      link: "https://t.me/purple_jigh/1602",
    },
    {
      name: "Arman Garshasbi - Benshin Tamashayat Konam",
      link: "https://t.me/purple_jigh/1343",
    },
    {
      name: "Strangers On a Train - Lost Her To Wolves",
      link: "https://t.me/purple_jigh/1443",
    },
  ];

  return (
    <div className="bg-dream-secondark dream relative h-screen bg-opacity-30">
      <DreamHeader link="https://t.me/purple_jigh" type={3}>
        Requiem for a dream
      </DreamHeader>
      <DreamHeader2 link="https://t.me/purple_jigh" type={4} songs={songs} />
      <DreamImg src="/dream.jpg" />
      <div className="flex w-full flex-col gap-[10vh] pt-[25vh]">
        <div className="mt-10 flex flex-col justify-center">
          <DreamP className="w-[90%] rounded-xl text-xl">
            When the snows fall and the white winds blow, the lone wolf dies but
            the pack survives.
          </DreamP>
          <DreamP className="w-[70%] rounded-xl text-xl">
            My sanity check is to see if I'm able to keep shit people away.
          </DreamP>
        </div>
        <div className="relative my-4">
          <NavLink
            to="/"
            className="bg-dream-dark text-dream-light absolute left-[50%] translate-x-[-50%] rounded-lg px-4 py-2"
          >
            Main Challenge Page
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Dream;
