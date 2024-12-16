import logo from "../assets/profile-pic.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-20 text-neutral-300" src={logo} alt="" />
      </div>
      <div className="m-5 flex gap-4 items-center justify-between text-2xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aman-bharti-0301a5290/"
        >
          <FaLinkedinIn />
        </a>
        <a target="_blank" href="https://github.com/AmanBharti08">
          <FaGithub />
        </a>
        <a target="_blank" href="https://x.com/Bharti0897">
          <FaTwitterSquare />
        </a>
        <a target="_blank" href="https://www.instagram.com/le.amanbharti/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
