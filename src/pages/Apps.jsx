import { useLoaderData } from "react-router";
import TrendingApp from "../components/main/trendingApps/TrendingApp";
import { useState } from "react";
import errImg from '../assets/App-Error.png';

const Apps = () => {
  const allApps = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const apps =
    searchText.trim() === ""
      ? allApps
      : allApps.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase()),
      );

  return (
    <div className="w-11/12 mx-auto py-3">
      <h2 className="text-3xl font-bold text-center">Our All Applications</h2>
      <p className="opacity-70 mt-4 mb-6 text-center">
        Explore All Apps on Market developed by us. We code for Millions
      </p>

      <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between items-center">
        <p className="text-lg font-bold">({apps.length}) Apps Found</p>

        <label className="input bg-transparent">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent"
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {apps.length < 1 && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center items-center">
            <img className="max-w-xs md:max-w-md" src={errImg} alt="No App Found" />
          </div>
        )}

        {apps.length > 0 &&
          apps.map((app) => <TrendingApp key={app.id} app={app} />)}
      </div>
    </div>
  );
};

export default Apps;
