import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { trackEvent } from "./lib/tracking";
import "./index.css";

void trackEvent("PageView");

createRoot(document.getElementById("root")!).render(<App />);
