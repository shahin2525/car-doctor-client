import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import AuthProviders from "./providers/AuthProviders";

createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <StrictMode>
      <AuthProviders>
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </StrictMode>
  </div>
);
