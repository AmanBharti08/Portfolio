import { PROJECTS } from "../constants/index";
import { VscLinkExternal } from "react-icons/vsc";
import { motion } from "framer-motion";

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
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Professional Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/4 zoom-container">
              <motion.img
                variants={imagevarient(1)}
                intial="initial"
                whileInView="end"
                viewport={{ once: true }}
                src={project.image}
                alt={project.title}
                width={200}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.1 }}
                className="mb-6 rounded zoom-image"
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <div className="flex items-center gap-4">
                <motion.h6
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-2 font-semibold"
                >
                  {project.title}
                </motion.h6>
                <motion.a
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#800080,0_0_15px_#800080,0_0_30px_#800080]"
                  href={project.link}
                  target="_blank"
                >
                  <VscLinkExternal />
                </motion.a>
              </div>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>
              {project.technologies.map((tech, index) => (
                <motion.span
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                  className="lg:mr-2 mr-1 rounded bg-neutral-900 px-2 py-1 lg:text-sm text-xs sm:mr-0 font-medium text-purple-900"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
