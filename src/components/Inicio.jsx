import React from 'react'
import profilePic from "../assets/robertButcher1.jpg";
import profilePic2 from "../assets/robertButcher2.jpg";

import { motion } from "framer-motion";

import logo from "../assets/logo.png";

export const Inicio = () => {
  return (
    <>
    <div

   

    className='  h-screen relative flex min-h-screen items-end justify-center ms:min-w-2xl '
    id='inicio'
    >

     

 


      

        <motion.img
            
            src={profilePic}
            alt={Profiler.name}
            className="xl:absolute xl:inset-0 xl:z-10 xl:h-full xl:w-full xl:object-cover "
            initial={{ opacity: 0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 1 }}    
        />

     

             <motion.img
            src={profilePic2}
            alt={Profiler.name}
            className="xl:hidden
                       lg:hidden
                       md:hidden
                       sm:absolute sm:inset-0 sm:z-10 sm:h-full sm:w-full sm:object-cover
                      "
            initial={{ opacity: 0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 1 }}  
            
            
            
        />

        <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />

     

        <motion.div
        className="z-20 mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1}}
        
        
        
        >
          

        <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'> 
          

       
                

              


        </h1>

        <p className='pt-2 font-semibold ml-3'>{Profiler.info}</p>

       
        
        </motion.div>

       


    </div>
     

     <div>


     
     </div>
    

<div>

<a className='absolute left-[150px] right-32 top-3 z-50 scale-150'>
                <img src={logo} width={90} alt="Logo" className="  " />

              </a>


</div>


    </>
  );
};

export default Inicio;
