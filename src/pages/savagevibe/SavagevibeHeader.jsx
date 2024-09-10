import { useState } from "react";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function SavagevibeHeader({ children, link, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 3) {
    return (
      <header
        className={`border-savagevibe-dark bg-savagevibe-second fixed z-10 w-full border-b-2 opacity-80`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <span
            className={`border-savagevibe-dark text-savagevibe-dark border-b-2 p-2 text-3xl font-semibold`}
          >
            {children}
          </span>
          <div className="flex w-[30%] justify-around">
            <a href={link}>
              <IoLink
                className={`bg-savagevibe-dark text-savagevibe-light shadow-savagevibe-dark size-11 rounded-lg p-1 shadow-md`}
              />
            </a>
            <button onClick={() => setIsOpen((show) => !show)}>
              <MdMenu
                className={`bg-savagevibe-dark text-savagevibe-light shadow-savagevibe-dark size-11 rounded-lg p-1 shadow-md`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-savagevibe-dark absolute right-6 top-6 h-max w-max rounded-lg border-4 bg-slate-100 px-2">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`bg-savagevibe-dark text-savagevibe-light shadow-savagevibe-dark absolute right-1 top-1 z-20 size-10 scale-90 rounded-lg p-2 shadow-md`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-savagevibe-base text-savagevibe-dark border-b-[1px] p-1 text-lg"
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
}

export default SavagevibeHeader;
