import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { IoMdMusicalNote } from "react-icons/io";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function FairyHeader({ children, link, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 4)
    return (
      <header
        className={`fixed z-10 w-full border-y-4 border-fairy-dark bg-gradient-to-br from-fairy-base to-fairy-second opacity-80`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <span
            className={`border-b-2 border-fairy-dark p-2 text-3xl font-semibold text-fairy-dark`}
          >
            {children}
          </span>
          <div className="flex gap-3">
            <a href={link}>
              <IoLink
                className={`size-10 rounded-lg bg-fairy-secondark p-2 text-fairy-second shadow-md shadow-fairy-dark`}
              />
            </a>
            <a href="https://t.me/afairywithbrokenwings/12426">
              <GrGallery
                className={`size-10 rounded-lg bg-fairy-secondark p-2 text-fairy-second shadow-md shadow-fairy-dark`}
              />
            </a>
            <a href="https://t.me/afairywithbrokenwings/9846">
              <IoMdMusicalNote
                className={`size-10 rounded-lg bg-fairy-secondark p-2 text-fairy-second shadow-md shadow-fairy-dark`}
              />
            </a>
            <button onClick={() => setIsOpen((show) => !show)}>
              <MdMenu
                className={`size-10 rounded-lg bg-fairy-secondark p-2 text-fairy-second shadow-md shadow-fairy-dark`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-5 top-5 h-max w-max rounded-lg border-4 border-fairy-dark bg-fairy-second px-2">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`absolute right-1 top-1 z-20 size-12 scale-75 rounded-lg bg-fairy-secondark p-2 text-fairy-second shadow-md shadow-fairy-dark`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-b-[1px] border-fairy-base p-1 text-lg text-fairy-dark"
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

export default FairyHeader;
