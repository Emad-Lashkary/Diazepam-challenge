import { useState } from "react";
import { IoLink } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

function DeezHeader({ children, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`border-deez-fiveth from-deez-fourth via-deez-second to to to-deez-first fixed z-10 w-full border-b-2 bg-gradient-to-l opacity-95`}
    >
      <div className="flex h-[10vh] items-center justify-around">
        <span
          className={`border-deez-fiveth text-deez-fiveth border-b-2 p-2 text-3xl font-semibold`}
        >
          {children}
        </span>
        <div className="flex w-[30%] justify-around">
          <a href={link}>
            <IoLink
              className={`from-deez-fourth to-deez-fiveth text-deez-third shadow-deez-fourth size-11 rounded-lg bg-gradient-to-br p-1 shadow-md`}
            />
          </a>
          <button onClick={() => setIsOpen((show) => !show)}>
            <MdMenu
              className={`text-deez-third shadow-deez-fourth from-deez-fourth to-deez-fiveth size-11 rounded-lg bg-gradient-to-bl p-1 shadow-md`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-deez-fiveth bg-deez-third absolute right-6 top-6 h-52 w-52 rounded-lg border-4">
          <div className="flex items-center justify-center">
            <TfiClose
              onClick={() => setIsOpen((show) => !show)}
              className={`bg-deez-fourth text-deez-third shadow-deez-dark absolute right-1 top-1 z-20 size-10 scale-90 rounded-lg p-2 shadow-md`}
            />
            <img src="Deez.jpg" alt="deez channel profile" className="p-3" />
          </div>
        </div>
      )}
    </header>
  );
}

export default DeezHeader;
