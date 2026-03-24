import { Link, useLoaderData } from "react-router";
import TrendingApp from "./TrendingApp";


const TrendingApps = () => {
  const apps = useLoaderData();   
    return (
      <div className="w-11/12 mx-auto pt-10 flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-center">Trending Apps</h3>
        <p className="mt-4 mb-6 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.slice(0, 8).map((app) => (
            <TrendingApp key={app.id} app={app} />
          ))}
        </div>

        <button className="btn mt-8 bg-linear-to-br from-violet-800 to-violet-400 text-white mb-5">
          <Link to="/apps">Show All</Link>
        </button>
      </div>
    );
};

export default TrendingApps;