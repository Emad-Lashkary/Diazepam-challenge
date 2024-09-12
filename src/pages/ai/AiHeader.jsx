import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { IoMdMusicalNote } from "react-icons/io";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function AiHeader({ children, link, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 4)
    return (
      <header
        className={`border-ai-dark from-ai-base to-ai-second fixed z-10 w-full border-y-4 bg-gradient-to-br opacity-90`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <span
            className={`border-ai-dark text-ai-dark border-b-2 p-2 text-3xl font-semibold`}
          >
            {children}
          </span>
          <div className="flex gap-3">
            <a href={link}>
              <IoLink
                className={`bg-ai-secondark text-ai-second shadow-ai-dark size-10 rounded-lg p-2 shadow-md`}
              />
            </a>

            <button onClick={() => setIsOpen((show) => !show)}>
              <MdMenu
                className={`bg-ai-secondark text-ai-second shadow-ai-dark size-10 rounded-lg p-2 shadow-md`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-ai-dark bg-ai-second absolute right-5 top-5 h-max w-max rounded-lg border-4 px-2">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`bg-ai-secondark text-ai-second shadow-ai-dark absolute right-1 top-1 z-20 size-12 scale-75 rounded-lg p-2 shadow-md`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-ai-base text-ai-dark border-b-[1px] p-1 text-lg"
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

export default AiHeader;
