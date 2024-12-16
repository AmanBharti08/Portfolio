import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

import TypingEffect from "../TypingEffect.jsx";

const code = `<!DOCTYPE html>
<html lang="en>
<head>
<title>My Page<title/>
</head>
<body>
<h1>Some Of My Hobbies</h1>
<ul>
<li>Making Music</li>
<li>Football</li>
<li>Reading Books</li>
<li>Dancing</li>
</ul>
</body>
</html>`;

const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 -mt-6 lg:mb-35">
      <div className="flex lg:flex-row flex-col">
        <div className="md:w-full lg:w-2/3">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="font-extralight pb-5 text-5xl tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aman Bharti
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-3xl  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="my-2 max-w-xl py-10 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className=" flex border px-5 py-1 lg:w-1/3 w-full ml-1.5 m-10 mt-20 box-shadow">
          <div
            className="lg:mb-35 flex flex-col gap-1 lg:text-sm text-sm para"
            style={{
              marginTop: "6px",
            }}
          >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
          </div>
          <TypingEffect code={code} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
