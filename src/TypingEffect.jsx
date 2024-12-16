import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingEffect = ({ code }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < code.length) {
        setDisplayedText((prev) => prev + code[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 1000);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [code, index]);

  return (
    <div
      className=" lg:mb-35 absolute ml-10"
      style={{
        whiteSpace: "pre-wrap",
        fontFamily: "monospace",
        lineHeight: "2.1",
        fontWeight: "bold",
        textShadow:
          "0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 15px #a855f7, 0 0 20px #a855f7, 0 0 25px #a855f7, 0 0 30px #a855f7, 0 0 35px #a855f7",
      }}
    >
      {displayedText}
    </div>
  );
};

TypingEffect.propTypes = {
  code: PropTypes.string.isRequired,
};

export default TypingEffect;
