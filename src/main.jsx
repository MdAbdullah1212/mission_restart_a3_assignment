import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import  { InstalledAppsProvider } from "./context/InstalledAppsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsProvider>
      <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>,
);
