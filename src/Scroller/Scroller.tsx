import React, { useCallback, useEffect, useState } from "react";

interface ScrollerProps {
  //
}

export const Scroller: React.FC<ScrollerProps> = ({ children }) => {
  const [y, setY] = useState<number>(window.scrollY);
  const [currentSection, setCurrentSection] = useState<number>(0);

  const arrayChildren = Array.isArray(children) ? [...children] : [children];

  const height = window.innerHeight;
  let ticking = false;

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const scrollFullPage = (event: Event) => {
    const window = event.currentTarget as Window;

    if (y > window?.scrollY) {
      if (currentSection !== 0) {
        window.scrollBy(0, -height);
        setCurrentSection(currentSection - 1);
      }
    }
    if (y < window?.scrollY) {
      if (currentSection !== arrayChildren.length - 1) {
        window.scrollBy(0, height);
        setCurrentSection(currentSection + 1);
      }
    }

    setY(window.scrollY);
  };

  const scrollHandler: EventListener = useCallback(
    (event: Event) => {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          scrollFullPage(event);
          ticking = false;
        });

        ticking = true;
      }
    },
    [y]
  );

  return <>{children}</>;
};
