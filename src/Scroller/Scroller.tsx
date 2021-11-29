import React, { useCallback, useEffect, useState } from "react";

interface ScrollerProps {
  //
}

const Scroller: React.FC<ScrollerProps> = ({ children }) => {
  const [y, setY] = useState<number>(window.scrollY);
  const [currentSection, setCurrentSection] = useState<number>(0);

  const arrayChildren = Array.isArray(children) ? [...children] : [children];
  // const pageHeight = window.innerHeight;

  console.log(arrayChildren);

  // const height = window.innerHeight;

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, [y]);

  const scrollHandler: EventListener = useCallback(
    (event: Event) => {
      const window = event.currentTarget as Window;

      if (y > window?.scrollY) {
        if (currentSection !== 0) {
          arrayChildren[currentSection - 1].scrollIntoView();
          setCurrentSection(currentSection - 1);
        }
      }
      if (y < window?.scrollY) {
        if (currentSection !== arrayChildren.length - 1) {
          arrayChildren[currentSection + 1].scrollIntoView();
          setCurrentSection(currentSection + 1);
        }
      }

      setY(window.scrollY);
    },
    [y]
  );

  return <>{children}</>;
};

export default Scroller;
