import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import video from "../assets/video.mp4";
import { ACHIEVEMENT } from "../constants";
import { useState } from "react";






const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};









const containerVariants2 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};

const itemVariants2 = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};






const Servicios = () => {
  
  return (
    <div className=" h-screen container mx-auto mt-72 py-16 tracking-tighter" id="servicios">
      <h2 className="mb-1 -mt-[50px] text-center text-4xl font-semibold">SERVICIOS</h2>


     

      
      <motion.div
        className="lg:flex lg:flex-col lg:mx-52 lg:rounded-xl lg:bg-gradient-to-b from-zinc-900 to-zinc-850 lg:px-4 lg:py-5 lg:mt-[10px]         xl:flex xl:flex-col xl:mx- xl:rounded-xl xl:bg-gradient-to-b from-zinc-900 to-zinc-950 xl:px-4 xl:py-10 xl:mt-[100px]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}

        

        
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-4 flex items-center justify-between "
            variants={itemVariants}
          >
            <div className="flex items-center gap-0">

      
              {skill.icon}
              <h3 className="px-7  lg:text-2xl bg">{skill.name} </h3>
              
               
            </div>
            <div className=" " >

          
            <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          ▼
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y block divide-white/5 rounded-xl bg-white/25 text-sm/9 transition duration-300 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="box-border m-auto h-[400px] w-[300px] p-4 
                 m4  ">
              
                <p className="  font-semibold text-blue">{skill.experience1}</p>
               
              
              
                <p className="font-semibold text-white">{skill.experience}</p>
                
             
            </div>
          
          </PopoverPanel>
        </Popover>
         

            <span ></span>
            </div>
          </motion.div>
        ))}
      </motion.div>










      <h2 className="mb-2 mt- text-center text-4xl font-semibold  "></h2>
      <motion.div
        className=" lg:mx-auto flex max-w-6xl flex-wrap lg:bg-transparent lg:mt-5    xl:mx-auto  xl:bg-transparent xl:mt-[200px]  "
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="relative w-32 p-1 sm:w-1/2" variants={itemVariants}>
          <video className="w-[550px] rounded-lg xl:size-[] " autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="w-full p-4 text-center sm:w-1/2"
          variants={itemVariants}
        >
          <h2 className="mb-4 text-3xl">{ACHIEVEMENT.title}</h2>
          <span className="mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400">
            {ACHIEVEMENT.award}
          </span>
          <p className="m-4 p-2 italic">{ACHIEVEMENT.description}</p>
        </motion.div>
      </motion.div>


    </div>
  );
};

export default Servicios;
