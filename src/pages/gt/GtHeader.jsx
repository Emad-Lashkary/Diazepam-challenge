import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { IoMdMusicalNote } from "react-icons/io";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function GtHeader({ children, link, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 4)
    return (
      <header
        className={`border-gt-dark from-gt-base to-gt-second fixed z-10 w-full border-y-4 bg-gradient-to-br opacity-80`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <div className="flex gap-3">
            <button onClick={() => setIsOpen((show) => !show)}>
              <MdMenu
                className={`bg-gt-secondark text-gt-second shadow-gt-dark size-10 rounded-lg p-2 shadow-md`}
              />
            </button>

            <a href={link}>
              <IoLink
                className={`bg-gt-secondark text-gt-second shadow-gt-dark size-10 rounded-lg p-2 shadow-md`}
              />
            </a>
          </div>
          <span
            className={`border-gt-dark text-gt-dark border-b-2 p-2 text-3xl font-semibold`}
          >
            {children}
          </span>
        </div>

        {isOpen && (
          <div className="border-gt-dark bg-gt-base absolute left-5 top-5 h-max w-max rounded-lg border-4 px-2">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`bg-gt-dark text-gt-light shadow-gt-dark absolute left-1 top-1 z-20 size-12 scale-75 rounded-lg p-2 shadow-md`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-gt-base text-gt-light border-b-[1px] p-1 text-lg"
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

export default GtHeader;
