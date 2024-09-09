import { AiOutlineLinkedin } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="to relative flex h-auto w-full items-center justify-center bg-gradient-to-tr from-diazepam-light to-diazepam-dark px-3 py-6">
      <div className="flex flex-col items-center gap-5">
        <h2 className="mx-4 my-5 mt-6 flex justify-center rounded-lg px-6 py-3 text-2xl text-diazepam-dark shadow-lg shadow-diazepam-dark">
          Contact Developer
        </h2>
        <a
          className="flex gap-4 border-b-2 border-diazepam-dark transition-all hover:scale-105"
          target="_blank"
          rel="noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=emad.lashkar@gmail.com"
        >
          <MdOutlineMail className="size-8" />
          <span>emad.lashkar@gmail.com</span>
        </a>
        <a
          className="flex items-center gap-4 border-b-2 border-diazepam-dark transition-all hover:scale-105"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Emad-Lashkary"
        >
          <FiGithub className="size-8" />
          <span>github.com/Emad-Lashkary</span>
        </a>
        <a
          className="flex items-center gap-4 border-b-2 border-diazepam-dark transition-all hover:scale-105"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/emad-lashkary"
        >
          <AiOutlineLinkedin className="size-8" />
          <span>linkedin.com/in/emad-lashkary</span>
        </a>
        <a
          className="flex items-center gap-4 border-b-2 border-diazepam-dark transition-all hover:scale-105"
          href="tel:+989350633890"
        >
          <FaPhoneAlt className="size-8" />
          <span>09350633890</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
