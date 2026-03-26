import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const activePath = "text-violet-600 font-bold";

  const links = (
    <>
      <li>
        <Link to="/" onClick={() => setOpen(false)}>
          <span className={`mr-5 ${path === "/" ? activePath : ""}`}>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/apps" onClick={() => setOpen(false)}>
          <span className={`mr-5 ${path === "/apps" ? activePath : ""}`}>Apps</span>
        </Link>
      </li>
      <li>
        <Link to="/installation" onClick={() => setOpen(false)}>
          <span className={`mr-5 ${path === "/installation" ? activePath : ""}`}>
            Installation
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="shadow-md bg-base-100 sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto px-0 flex justify-between items-center">
        <div className="flex gap-1 items-center">
         
          <div className="md:hidden mr-2" onClick={() => setOpen(!open)}>
            {open ? <X className="cursor-pointer" /> : <Menu className="cursor-pointer" />}
            <ul className={`absolute left-0 w-full bg-base-100 shadow-lg p-5 transition-all duration-300 ${open ? 'top-16 opacity-100' : '-top-60 opacity-0 pointer-events-none'}`}>
              {links}
            </ul>
          </div>
          
          
          <Link to="/" className="flex justify-center items-center gap-1">
            <img className="ml-2 md:ml-0" src={logo} width={20} height={20} alt="Logo" />
            <span className="text-violet-600 font-semibold hidden md:inline">HERO.IO</span>
          </Link>
        </div>

        
        <div className="hidden md:flex">
          <ul className="flex list-none">{links}</ul>
        </div>
        <a
          href="https://github.com/MdAbdullah1212/mission_restart_a3_assignment"
          target="_blank"
          rel="noreferrer"
          className="btn bg-gradient-to-br from-violet-800 to-violet-400 text-white flex items-center gap-2"
        >
          <FaGithub />
          <span className="hidden sm:inline">Contribute</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;