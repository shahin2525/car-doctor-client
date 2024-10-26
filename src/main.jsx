import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  </div>
);
