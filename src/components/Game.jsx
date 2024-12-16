import { GAMES } from "../constants";
import { motion } from "framer-motion";
import { VscLinkExternal } from "react-icons/vsc";

const imagevarient = (duration) => ({
  initial: { x: -100 },
  end: {
    x: [-100, 0],
    transition: {
      duration: duration,
      ease: "linear",
    },
  },
});
const Game = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Games
      </motion.h1>

      <div className="flex flex-col lg:justify-between lg:flex-row items-center gap-10">
        {GAMES.map((game, index) => {
          return (
            <div key={index} className="">
              <div className="flex justify-center items-center gap-4">
                <motion.h6
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="my-5 text-2xl"
                >
                  {game.title}
                </motion.h6>
                <motion.a
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=" shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#800080,0_0_15px_#800080,0_0_30px_#800080]"
                  href={game.link}
                  target="_blank"
                >
                  <VscLinkExternal />
                </motion.a>
              </div>

              <motion.div className="rounded-2xl zoom-container">
                <motion.img
                  variants={imagevarient(1)}
                  intial="initial"
                  whileInView="end"
                  viewport={{ once: true }}
                  width={450}
                  height={450}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.1 }}
                  className="rounded-2xl zoom-image"
                  src={game.image}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
