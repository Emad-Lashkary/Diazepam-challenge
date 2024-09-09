import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function Header({ children, link, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 1)
    return (
      <header
        className={`border-shadyplaylist-dark bg-shadyplaylist-base fixed z-10 h-[10vh] w-full border-y-2 opacity-80`}
      >
        <div className="flex h-full items-center justify-between px-4">
          <span
            className={`bg-shadyplaylist-dark text-shadyplaylist-light rounded-lg px-4 py-2 text-3xl`}
          >
            {children}
          </span>
          <a href={link}>
            <FaLink className={`text-shadyplaylist-dark size-8`} />
          </a>
        </div>
      </header>
    );

  if (type === 2)
    return (
      <header
        className={`border-shadyplaylist-dark bg-shadyplaylist-base fixed z-10 w-full border-b-2 opacity-80`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <a href={link}>
            <IoLink
              className={`bg-shadyplaylist-dark text-shadyplaylist-light shadow-shadyplaylist-dark size-9 rounded-lg p-1 shadow-md`}
            />
          </a>
          <span
            className={`border-shadyplaylist-dark text-shadyplaylist-dark shadow-shadyplaylist-dark rounded-lg border-b-2 p-2 text-3xl font-semibold shadow-md`}
          >
            {children}
          </span>
          <button onClick={() => setIsOpen((show) => !show)}>
            <MdMenu
              className={`bg-shadyplaylist-dark text-shadyplaylist-light shadow-shadyplaylist-dark size-9 rounded-lg p-1 shadow-md`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="border-shadyplaylist-dark absolute right-5 top-5 h-max w-max rounded-lg border-4 bg-slate-100 px-2">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`bg-shadyplaylist-dark text-shadyplaylist-light shadow-shadyplaylist-dark absolute right-1 top-1 z-20 size-9 scale-75 rounded-lg p-1 shadow-md`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-shadyplaylist-base text-shadyplaylist-dark border-b-[1px] p-1 text-lg"
                      href={song.link}
                      target="_blank"
                      rel="noreferrer"
                    >
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
