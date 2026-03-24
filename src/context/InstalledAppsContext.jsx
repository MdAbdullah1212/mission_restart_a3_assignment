import { createContext, useState } from "react";
import { getData as getStoredApps } from "../utilities/storage";

const InstalledAppsContext = createContext();

export const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    const storedApps = getStoredApps();
    return storedApps ? storedApps : [];
  });

  return (
    <InstalledAppsContext.Provider value={{ installedApps, setInstalledApps }}>
      {children}
    </InstalledAppsContext.Provider>
  );
};

export default InstalledAppsContext;
