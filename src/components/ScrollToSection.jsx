
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);

      // Wait briefly for the homepage sections to render.
      requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}
