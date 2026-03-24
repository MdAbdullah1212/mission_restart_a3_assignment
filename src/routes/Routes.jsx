import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Apps from "./../pages/Apps";
import Installation from "./../pages/Installation";
import Details from "./../pages/Details";
import PageNotFound from "./../pages/PageNotFound";
import AppNotFound from "../pages/AppNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, 
        Component: Home,
        loader: async () => {
          const res = await fetch("./data.json"); 
          if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: "apps",
        Component: Apps,
        loader: async () => {
          const res = await fetch("./data.json");
          if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: "installation",
        Component: Installation,
        loader: async () => {
          const res = await fetch("./data.json");
          if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: "app-details/:appId",
        Component: Details,
        loader: async ({ params }) => {
          const res = await fetch("./data.json");
          if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
          }

          const apps = await res.json();
          const id = parseInt(params.appId);

          const app = apps.find((app) => app.id === id);

          if (!app) {
            throw new Response("App Not Found", { status: 404 });
          }
          return app;
        },
        errorElement: <AppNotFound />,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
], {
  basename: "/mission_restart_a3_assignment",
});