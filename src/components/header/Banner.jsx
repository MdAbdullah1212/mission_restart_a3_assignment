import { PiGooglePlayLogoLight } from "react-icons/pi";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router";

import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="hero w-11/12 mx-auto">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-4xl lg:text-5xl font-bold max-w-md mx-auto">
            We Build <span className="text-violet-600">Productive</span> Apps
          </h1>
          <p className="py-6 max-w-187.5 mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-5 justify-center">
            <Link to="https://play.google.com/store/apps">
              <button className="btn btn-outline border border-gray-300 font-medium">
                <PiGooglePlayLogoLight
                  color="#3BCCFF"
                  className="text-blue-500 text-xl"
                />
                Google Play
              </button>
            </Link>

            <Link to="https://www.apple.com/app-store/">
              <button className="btn btn-outline border border-gray-300 font-medium">
                <FaAppStoreIos className="text-blue-500 text-xl" />
                App Store
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <img src={hero} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
