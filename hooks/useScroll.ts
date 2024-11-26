import { useState, useEffect } from "react";

const useScroll = () => {
   // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
   // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState<DOMRect>(
    document.body.getBoundingClientRect()
  );
   // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset.top);
   // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset.left);
   // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const listener = (e: Event) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}

export default useScroll;
