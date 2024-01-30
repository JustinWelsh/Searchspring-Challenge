import React, { useState, useEffect } from "react";

const MsgCarousel = ({ texts, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval, texts.length]);

  return <div className="msg-carousel shadow-xl">{texts[currentIndex]}</div>;
};

export default MsgCarousel;
