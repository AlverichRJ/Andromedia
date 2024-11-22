import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";



const containerVariants ={
        hidden: { opacity: 0, y: -20 },
              visible: {
                         opacity: 1,
                               y: 0,
                        transition: {
                                         duration: 0.5,
                                         staggerChildren: 0.4,
    },
  },
};

const itemVariants={

    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },

};

const Proyectos = () => {
  return (
    <div id="proyectos" className=" h-screen ">
        <motion.h2
        className=" mt-48 text-center text-4xl font-semibold   "
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >

        PROYECTOS

       </motion.h2>
       <motion.div
        className="sm:-ml-14 sm:mr-20     md:-ml-14 md:mr-20  lg:flex  lg:mt-40 lg:ml-[300px]  xl:flex  xl:mt-[300px] xl:ml-[400px] xl:h-40  "
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link="#"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Proyectos