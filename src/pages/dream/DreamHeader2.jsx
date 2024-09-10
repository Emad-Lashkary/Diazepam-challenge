import { useState } from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function DreamHeader2({ link, type = 1, songs }) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 4)
    return (
      <>
        <header
          className={`border-dream-dark from-dream-light to-dream-second fixed top-[10vh] z-10 w-full border-b-4 bg-gradient-to-bl py-3 opacity-30`}
        >
          <div className="flex flex-col items-center justify-around gap-2">
            <p className="text-dream-dark flex flex-col items-center text-lg font-semibold">
              <span>This is one of those channels</span>
              <span>that your momy, warned you about!</span>
            </p>
            <div className="flex gap-3">
              <a href={link}>
                <IoLink
                  className={`bg-dream-secondark text-dream-second shadow-dream-dark size-10 rounded-lg p-2 shadow-md`}
                />
              </a>

              <a href="https://t.me/purple_jigh/1579">
                <IoMdMusicalNote
                  className={`bg-dream-secondark text-dream-second shadow-dream-dark size-10 rounded-lg p-2 shadow-md`}
                />
              </a>
              <button onClick={() => setIsOpen((show) => !show)}>
                <MdMenu
                  className={`bg-dream-secondark text-dream-second shadow-dream-dark size-10 rounded-lg p-2 shadow-md`}
                />
              </button>
            </div>
          </div>
        </header>
        {isOpen && (
          <div className="border-dream-dark bg-dream-secondark opacity100 absolute right-1 top-5 z-50 h-max w-[98%] rounded-lg border-4 px-2">
            <div className="mb-10 mt-4 flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-semibold">Songs:</p>
              <TfiClose
                onClick={() => setIsOpen((show) => !show)}
                className={`bg-dream-secondark text-dream-second shadow-dream-dark absolute right-1 top-1 z-20 size-12 scale-75 rounded-lg p-2 shadow-md`}
              />
              <ul className="flex flex-col items-center justify-center gap-2">
                {songs?.map((song) => (
                  <li key={song.name}>
                    <a
                      className="border-dream-base text-dream-dark border-b-[1px] p-1 text-base font-semibold"
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
      </>
    );
}

export default DreamHeader2;
