import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routs/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* data mode */}
    <RouterProvider router={router} />
  </StrictMode>
);
