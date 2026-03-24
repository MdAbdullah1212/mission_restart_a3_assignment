export const getData = () => {
  const installedAppsString = localStorage.getItem("installedApps");

  const installedApps = JSON.parse(installedAppsString);

  return installedApps;
};

export const saveData = (data) => {
  localStorage.setItem("installedApps", JSON.stringify(data));
};
