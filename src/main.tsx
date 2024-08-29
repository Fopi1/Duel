import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import PageProvider from "./contexts/PageContext.tsx";
import "@/utils/stringExtension.ts";

createRoot(document.getElementById("root")!).render(
  <PageProvider>
    <App />
  </PageProvider>
);
