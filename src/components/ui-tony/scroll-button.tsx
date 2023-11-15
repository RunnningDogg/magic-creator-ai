import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  // return (
  //   <Button>
  //    <ArrowUp onClick={scrollToTop}
  //    style={{display: visible ? 'inline' : 'none'}} />
  //   </Button>
  // );
  if (!visible) {
    return null;
  }
  return (
    <>
      <Button className="fixed bottom-10 right-6 z-10 -translate-x-1/2 transform cursor-pointer text-3xl text-white">
        <ArrowUp
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Button>
    </>
  );
};

export default ScrollButton;
