import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function Header({ children, link, color, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  const headerClassname = `fixed bg-${color}-base z-10 w-full border-b-2 opacity-80 border-${color}-dark`;
  console.log(headerClassname);

  if (type === 1)
    return (
      <header className={headerClassname}>
        <div className="flex h-[10vh] items-center justify-between px-4">
          <span
            className={`px-4 py-2 text-3xl bg-${color}-dark rounded-lg text-${color}-light`}
          >
            {children}
          </span>
          <a href={link}>
            <FaLink className={`size-8 text-${color}-dark`} />
          </a>
        </div>
      </header>
    );

  if (type === 2)
    return (
      <header
        // prettier-ignore
        className={`fixed bg-${color}-base z-10 w-full border-b-2 opacity-80 border-${color}-dark`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <a href={link}>
            <IoLink
              className={`size-9 text-${color}-light rounded-lg p-1 bg-${color}-dark shadow-md shadow-${color}-dark`}
            />
          </a>
          <span
            className={`text-3xl shadow-md shadow-${color}-dark rounded-lg p-2 font-semibold text-${color}-dark border-b-2 border-${color}-dark `}
          >
            {children}
          </span>
          <button onClick={() => setIsOpen((show) => !show)}>
            <MdMenu
              className={`size-9 text-${color}-light rounded-lg p-1 bg-${color}-dark shadow-md shadow-${color}-dark`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-5 top-5 h-[20vh] w-[40%] bg-slate-100">
            <div>
              <p>Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`size-9 text-${color}-light rounded-lg p-1 bg-${color}-dark absolute right-1 top-1 z-20 shadow-md shadow-${color}-dark`}
              />
              <ul>
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a href={song.link} target="_blank" rel="noreferrer">
                      {song.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    );
}

export default Header;
