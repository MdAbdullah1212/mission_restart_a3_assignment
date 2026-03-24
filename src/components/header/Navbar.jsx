import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const activePath = "text-violet-600";

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
    <nav className="shadow-md bg-base-100">
      <div className="navbar w-11/12 mx-auto  px-0 flex justify-between items-center">
        <div className="flex gap-1">
          <span className="visible md:invisible" onClick={()=>{setOpen(!open)}}>
              {open ? <X></X> : <Menu></Menu>}
              <ul className={`absolute ${open ? 'top-15':'-top-40'}`}>
                {links}
              </ul>
          </span>  
          <Link className="flex justify-center items-center gap-1">
            <img className="ml-2 md:ml-0" src={logo} width={20} height={20} alt="" />
            <span className="text-violet-600 font-semibold invisible md:visible">HERO.IO</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex">{links}</ul>
        </div>
        <a
          href="#"
          target=""
          className="btn bg-linear-to-br from-violet-800 to-violet-400 text-white"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
