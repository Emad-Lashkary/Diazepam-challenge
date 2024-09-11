import { useState } from "react";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function CircusHeader({ children, link, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`border-circus-dark fixed z-10 w-full border-b-2 bg-red-600 opacity-85`}
    >
      <div className="flex h-[10vh] items-center justify-around">
        <span
          className={`circus text-circus-dar to-circus-dark bg-gradient-to-l from-red-600 px-7 py-2 text-3xl font-semibold`}
        >
          {children}
        </span>
        <div className="flex gap-4">
          <a href={link}>
            <IoLink
              className={`from-circus-dark text-circus-light shadow-circus-dark via-circus-dark size-9 rounded-lg bg-gradient-to-br to-red-600 p-1 shadow-md`}
            />
          </a>
          <button onClick={() => setIsOpen((show) => !show)}>
            <MdMenu
              className={`from-circus-dark text-circus-light shadow-circus-dark via-circus-dark size-9 rounded-lg bg-gradient-to-bl to-red-600 p-1 shadow-md`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-circus-dark absolute right-5 top-5 h-max w-max rounded-lg border-4 bg-slate-100 px-2">
          <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
            <p className="text-xl font-semibold">Songs:</p>
            <TfiClose
              onClick={() => setIsOpen((show) => !show)}
              className={`bg-circus-dark text-circus-light shadow-circus-dark absolute right-1 top-1 z-20 size-9 scale-75 rounded-lg p-1 shadow-md`}
            />
            <ul className="flex flex-col items-center justify-center gap-2">
              {songs?.map((song) => (
                <li key={song.name}>
                  <a
                    className="border-circus-base text-circus-dark border-b-[1px] p-1 text-lg"
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

export default CircusHeader;
