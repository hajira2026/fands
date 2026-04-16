import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import App from "./App.tsx";
import "./index.css";

/* 🔥 SCROLL REVEAL CONTROLLER */
const RevealController = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

createRoot(document.getElementById("root")!).render(
  <>
    <RevealController />
    <App />
  </>
);