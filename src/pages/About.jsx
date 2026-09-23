import { easeOut, motion } from "framer-motion"

function About() {
  return (
    <>
      <main className="min-h-screen overflow-hidden  md:pb-40">
        <div className="flex flex-col justify-center text-center items-center mt-20 md:mt-10 leading-15 md:leading-30 ">
            <motion.h1 
            initial={{x:-300, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5, ease:easeOut}}
            className="text-[4rem]  md:text-[8rem]  font-mono">WE HELP CREATE</motion.h1>
            <motion.h1 
            initial={{x:300, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5, ease:easeOut}}
            className="text-[4rem]  md:text-[8rem] font-mono text-center">MONENTS OF <span className="bg-[#111] text-white px-5 -py-1 rounded-full">BEAUTY</span> </motion.h1>
            <motion.h1 
            initial={{x:-300, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5, ease:easeOut}}
            className="text-[4rem]  md:text-[8rem] font-mono">FOR YOU AND</motion.h1>
            <motion.h1 
            initial={{x:300, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5, ease:easeOut}}
            className="text-[4rem]  md:text-[8rem] font-mono">YOUR GLOW</motion.h1>
        </div>
        <div className="flex justify-center items-center mt-20 md:mt-10">
            <div className="text-center flex justify-center items-center flex-col"> 
             <motion.p
               initial={{y:150, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1, ease:easeOut}}
             >Lorem ipsum dolor sit amet consectetur</motion.p>
             <motion.p
              initial={{y:150, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1, ease:easeOut}}
             >adipisicing elit. Non repellendus adipisci nesciunt</motion.p> 
             <motion.p
              initial={{y:150, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1, ease:easeOut}}
             >dolore nihil asperiores aliquid repudiandae</motion.p> 
             <motion.p
              initial={{y:150, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1, ease:easeOut}}
             >Lorem ipsum dolor sit. Lorem. </motion.p>


            <motion.button 
            initial={{y:50,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1, ease:easeOut}}
            className="underline text-xl mt-20">Read More</motion.button>
             
             </div>

             
        </div>
       
        
      </main>
    </>
  )
}

export default About
