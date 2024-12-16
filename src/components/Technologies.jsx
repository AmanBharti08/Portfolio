import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconvarient = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconvarient(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvarient(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJsBadge className="text-6xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconvarient(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiHtml5 className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconvarient(1.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-6xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconvarient(0.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-6xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconvarient(1.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiBootstrap className="text-6xl text-violet-500" />
        </motion.div>
        <motion.div
          variants={iconvarient(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-6xl text-green-800" />
        </motion.div>
        <motion.div
          variants={iconvarient(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-6xl text-[#3178C6]"/>
        </motion.div>
        <motion.div
          variants={iconvarient(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-6xl text-green-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
