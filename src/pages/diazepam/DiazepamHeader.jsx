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
        className={`fixed z-10 h-[10vh] w-full border-y-2 border-diazepam-dark bg-diazepam-base opacity-80`}
      >
        <div className="flex h-full items-center justify-between px-4">
          <span
            className={`rounded-lg bg-diazepam-dark px-4 py-2 text-3xl text-diazepam-light`}
          >
            {children}
          </span>
          <a href={link}>
            <FaLink className={`size-8 text-diazepam-dark`} />
          </a>
        </div>
      </header>
    );

  if (type === 2)
    return (
      <header
        className={`fixed z-10 w-full border-b-2 border-diazepam-dark bg-diazepam-base opacity-80`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <a href={link}>
            <IoLink
              className={`size-9 rounded-lg bg-diazepam-dark p-1 text-diazepam-light shadow-md shadow-diazepam-dark`}
            />
          </a>
          <span
            className={`rounded-lg border-b-2 border-diazepam-dark p-2 text-3xl font-semibold text-diazepam-dark shadow-md shadow-diazepam-dark`}
          >
            {children}
          </span>
          <button onClick={() => setIsOpen((show) => !show)}>
            <MdMenu
              className={`size-9 rounded-lg bg-diazepam-dark p-1 text-diazepam-light shadow-md shadow-diazepam-dark`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-5 top-5 h-max w-[45%] rounded-lg border-4 border-diazepam-dark bg-slate-100">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`absolute right-1 top-1 z-20 size-9 scale-75 rounded-lg bg-diazepam-dark p-1 text-diazepam-light shadow-md shadow-diazepam-dark`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-b-[1px] border-diazepam-base p-1 text-lg text-diazepam-dark"
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
