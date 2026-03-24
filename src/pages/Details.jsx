import { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { saveData as saveInstalledApps } from "./../utilities/storage";
import InstalledAppsContext from "../context/InstalledAppsContext";

const Details = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const app = useLoaderData();
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
    id,
  } = app;
  const paragraphs = description.split("\n");

  const [isInstalled, setIsInstalled] = useState(false);

  const handleInstall = () => {
    const updatedApps = [...installedApps, id];

    setInstalledApps(updatedApps);
    saveInstalledApps(updatedApps);

    setIsInstalled(true);
    toast.success("App Installed Successfully!");
  };

  useEffect(() => {
    const isAlreadyIncluded = installedApps.includes(id);
    if (isAlreadyIncluded) {
      setIsInstalled(true);
    }
  }, [installedApps, id]);

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-center md:justify-start border-b border-gray-300 pt-7 pb-10">
          <img
            className="w-64 md:min-h-68 object-cover shadow-xl"
            src={image}
            alt=""
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="pb-5 border-b border-gray-300">
              <span className="opacity-70 mr-1">Developed by</span>
              <span className="text-violet-600 font-bold">{companyName}</span>
            </p>

            <div className="flex justify-center md:justify-start items-center gap-14 py-6">
              <span className="flex flex-col justify-center items-start gap-2">
                <HiOutlineDownload size={30} className="text-emerald-600" />
                <small className="opacity-70 ">Downloads</small>
                <p className="text-3xl font-bold">{downloads / 1000000}M</p>
              </span>

              <span className="flex flex-col justify-center items-start gap-2">
                <FaStar size={30} className="text-amber-600" />
                <small className="opacity-70 ">Average Ratings</small>
                <p className="text-3xl font-bold">{ratingAvg}</p>
              </span>

              <span className="flex flex-col justify-center items-start gap-2 relative text-center">
                <FaMessage size={30} className="relative z-0 text-violet-600" />

                <AiFillLike
                  size={18}
                  className="absolute top-0.5 left-1.5 z-10 text-white"
                />

                <IoIosStarOutline
                  size={15}
                  className="absolute z-1  -top-2 left-4.5 text-white"
                />
                <IoIosStar
                  size={15}
                  className="absolute z-1 -top-2.25 left-5 text-violet-600"
                />

                <small className="opacity-70 ">Total Reviews</small>
                <p className="text-3xl font-bold">{reviews / 1000}K</p>
              </span>
            </div>

            <div className="flex justify-center items-center md:justify-start">
              <button
                disabled={isInstalled}
                onClick={handleInstall}
                className={`btn bg-emerald-500  text-white shadow-md disabled:opacity-70`}
              >
                {isInstalled ? "Installed" : `Install Now (${size}MB)`}
              </button>
            </div>
          </div>
        </div>

        <h5 className="font-bold my-6">Ratings</h5>

        {/* chart */}
        {ratings && ratings.length > 0 && (
          <div className="w-full" >
            <ResponsiveContainer width="100%" aspect={2}>
              <BarChart
                layout="vertical"
                data={ratings || []}
                margin={{ top: 0, right: 30, bottom: 20, left: 5 }}
              >
                <XAxis type="number" axisLine={false} tickLine={false} />

                <YAxis
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  reversed={true}
                  dataKey="name"
                />

                <Bar dataKey="count" fill="#ff8811" barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="w-full border-t border-gray-300 my-6"></div>

        {/* description */}
        <h5 className="font-bold mb-5">Description</h5>

        {paragraphs.map((para, i) => (
          <p key={i} className="text-justify mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Details;
