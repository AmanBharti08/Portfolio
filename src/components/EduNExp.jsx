import { EDUCATION } from "../constants/index";
import { EXPERIENCES } from "../constants/index";
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

const EduNExp = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row border-b border-neutral-900 pb-4 ">
      <div className="lg:w-1/2 ">
        <div>
          <motion.h1
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="my-20 lg:text-left text-center text-4xl"
          >
            Education
          </motion.h1>
          <div>
            {EDUCATION.map((institute, index) => (
              <div key={index} className="mb-8 flex flex-col gap-2">
                <div className="flex gap-10 items-center">
                  <motion.h6
                    variants={imagevarient(0.4)}
                    initial="initial"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="mb-2 font-semibold lg:text-left"
                  >
                    {institute.name}
                  </motion.h6>
                  <motion.p
                    variants={imagevarient(0.4)}
                    initial="initial"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="mb-2 font-thin"
                  >
                    {institute.location}
                  </motion.p>
                </div>
                <motion.p
                  className="font-thin text-md flex flex-col"
                  variants={imagevarient(0.4)}
                  initial="initial"
                  whileInView="end"
                  viewport={{ once: true }}
                >
                  {institute.degree}
                  <p className="text-sm inline font-light">{institute.gpa}</p>
                </motion.p>
                <motion.p
                  className="text-xs"
                  variants={imagevarient(0.4)}
                  initial="initial"
                  whileInView="end"
                  viewport={{ once: true }}
                >
                  {institute.major}
                </motion.p>
                <motion.p
                  variants={imagevarient(0.4)}
                  initial="initial"
                  whileInView="end"
                  viewport={{ once: true }}
                >
                  {institute.date}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="my-20 lg:text-right text-center text-4xl"
        >
          Experience
        </motion.h1>
        <div>
          {EXPERIENCES.map((company, index) => (
            <div className="mb-8 flex flex-col gap-1 lg:text-right" key={index}>
              <motion.h6
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-2 font-semibold "
              >
                {company.role}
              </motion.h6>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="font-thin"
              >
                {company.company}
              </motion.p>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-xs"
              >
                {company.year}
              </motion.p>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-2 text-sm font-light"
              >
                {company.description}
              </motion.p>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex lg:justify-end"
              >
                {company.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="lg:ml-2 mr-1 rounded bg-neutral-900 px-2 py-1 lg:text-sm text-xs font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EduNExp;
