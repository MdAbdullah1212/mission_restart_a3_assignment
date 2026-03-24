import { useContext, useEffect, useState } from "react";
import InstalledAppsContext from "../context/InstalledAppsContext";
import { FaCaretDown } from "react-icons/fa";
import InstalledApp from "../components/main/InstalledApp";
import { useLoaderData } from "react-router";
import { saveData as saveUpdatedInstalledApps } from "../utilities/storage";
import { toast } from "react-toastify";

const Installation = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const [displayInstalledApps, setDisplayInstalledApps] = useState([]);

  const allApps = useLoaderData();

  const handleInstallation = (id) => {
    const updatedApps = installedApps.filter((value) => value !== id);

    setInstalledApps(updatedApps);
    saveUpdatedInstalledApps(updatedApps);

    toast.warning("App Uninstalled")
  };

  useEffect(() => {
    const fullApps = installedApps.map((value) =>
      allApps.find((app) => value === app.id),
    );
    setDisplayInstalledApps(fullApps);
  }, [installedApps, allApps]);

  const sortApp = (type) => {
    const sorted = [...displayInstalledApps];

    sorted.sort((a, b) => {
      if (type === "High-Low") {
        return Number(b.downloads) - Number(a.downloads);
      } else if (type === "Low-High") {
        return Number(a.downloads) - Number(b.downloads);
      }
    });

    setDisplayInstalledApps(sorted)
  };

  return (
    <div className="w-11/12 mx-auto py-3">
      <h2 className="text-3xl font-bold text-center">Your Installed Apps</h2>
      <p className="opacity-70 mt-4 mb-6 text-center">
        Explore all the apps you've installed that were developed by us.
      </p>

      <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between items-center">
        <p className="text-lg font-bold">{installedApps.length} Apps Found</p>

        {/* sort options */}
        <div className="dropdown dropdown-center ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-transparent opacity-70 font-semibold"
          >
            Sort By Download Count <FaCaretDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => sortApp("High-Low")}>High-Low</a>
            </li>
            <li>
              <a onClick={() => sortApp("Low-High")}>Low-High</a>
            </li>
          </ul>
        </div>
      </div>

      {/* all installed apps */}
      <div className="flex flex-col gap-5 mt-6">
        {installedApps.length < 1 && (
          <p className="md:text-5xl text-2xl text-violet-600 font-bold  sm:col-span-2 lg:col-span-4 text-center justify-self-center pb-12">
            No App Installed Yet!
          </p>
        )}
        {installedApps.length > 0 &&
          displayInstalledApps.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleInstallation={handleInstallation}
            />
          ))}
      </div>
    </div>
  );
};

export default Installation;
