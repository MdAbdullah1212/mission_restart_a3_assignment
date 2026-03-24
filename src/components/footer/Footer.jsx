import logo from '../../assets/logo.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#001931] text-neutral-content p-10 ">
      <div className='flex justify-between items-center'>
        <nav className="flex justify-between items-center">
          <img className='w-10 h-10' src={logo} alt="" />
          <h5 className='ml-3 invisible md:visible'>HERO.IO</h5>
        </nav>
        <nav className='space-y-2 text-center'>
          <h5>Social Links</h5>
          <div className="flex gap-2 ">
            <a>
              
              <FaTwitter size={20} />
            </a>
            <a>
              <FaYoutube size={20} />
            </a>
            <a>
              <FaFacebookF size={20} />
            </a>
          </div>
        </nav>
      </div>
      <hr className='my-5 text-gray-600' />
        <p className='text-center'>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          HERO.IO
        </p>
    </footer>
  );
};

export default Footer;
