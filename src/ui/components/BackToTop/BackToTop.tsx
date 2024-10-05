// src/ui/components/BackToTop/BackToTop.tsx
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsVisible(false), 300); // Adjust timeout to match fadeOut animation duration
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
        setIsVisible(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        className={`fixed bottom right pb-2 pr-2 fade ${
          showButton ? "fadeIn" : "fadeOut"
        }`}
      >
        <button
          className="navbar-link back-to-top p-1"
          onClick={backToTop}
          aria-label="Back to top"
        >
          <Icon name="arrow-up" color="#fff" size="lg" />
        </button>
      </div>
    )
  );
};

export default BackToTop;
