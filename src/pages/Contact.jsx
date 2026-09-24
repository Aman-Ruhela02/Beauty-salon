import { easeOut, motion } from "framer-motion"

const Contact = () => {
  return (
    <>
      <main className="bg-[#F3F1EF] overflow-hidden">
        <div className="flex justify-between px-12 py-8">
         
          <div className="mt-8">
            <motion.p
            initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
            >ABOUT US AND MORE</motion.p>
            <motion.h1  
            initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
            className="font text-[3.5rem]">REVIEWS</motion.h1>
          </div>
          <motion.div 
          
          className="mt-8">
            <motion.h1 
            initial={{x:50,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
            className="underline">More reviews</motion.h1>
          </motion.div>
       
        </div>
       
       
        <div className="grid md:grid-cols-3 gap-5 py-5 px-20">
          <motion.div 
          initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
          className="bg-white h-100 border rounded ">
            <img className="h-60 w-full object-cover" src="/review1.jpg" alt="" />
             <div className="p-4">
            <p className="text-[0.6rem]">24 MAY 2026</p>
            <h1 className="text-[1.3rem] font-medium my-1">Sasha Turner</h1>
            <p className="text-[1rem]">I would like to express my gratitude to hairdresser Nellie Russell 
            
            </p>
            </div>
          </motion.div>
          <motion.div 
          initial={{y:50,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
          className="bg-white h-100 border rounded ">
            <img className="h-60 w-full object-cover" src="/review2.jpg" alt="" />
            <div className="p-4">
            <p className="text-[0.6rem]">24 MAY 2026</p>
            <h1 className="text-[1.3rem] font-medium my-1">Alia Bonner</h1>
            <p className="text-[1rem]">The result exceeded my expections- the new haircut looks natural and stylish 
              
            </p>
            </div>
          </motion.div>
          <motion.div 
          initial={{x:200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
          className="bg-white h-100 border rounded ">
            <img className="h-60 w-full object-cover" src="/review3.jpg" alt="" />
            <div className="p-4">
            <p className="text-[0.6rem]">24 MAY 2026</p>
            <h1 className="text-[1.3rem] font-medium my-1">Flynn Monroe</h1>
            <p className="text-[1rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aut!lorem5
              Lorem, ipsum dolor.
            </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row pt-15 pb-10">
          <div className="leading-14 p-5 px-10">
           <motion.p
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
           >WE ARE WAITING FOR YOU</motion.p>
           <motion.h1 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
           className="text-[3rem] md:text-[4rem]">BOOK AN</motion.h1>
           <motion.h1 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
           className="text-[3rem] md:text-[4rem]">APPOINTMENT</motion.h1>
          </div>

         <div className="flex flex-col md:flex-row justify-between w-full">
          <motion.div 
          initial={{y:50,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
          className="p-10 w-full" >
            <p className="text-[0.7rem] mb-1">NAME</p>
            <h1>Alisa Datte</h1>
            <span className="w-[50%] md:w-full"><hr className="w-[50%] md:w-[50%]" /></span>

            <p className="mt-7 mb-2 text-[0.8rem] ">SPECIALIST</p>
            <button className="border px-3 py-1">Nellie Russell</button>
          </motion.div>

          <motion.div 
           initial={{y:50,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{duration:1.1,ease:easeOut}}
          className="p-10 flex flex-col  items-start w-full" >
            <p className="text-[0.7rem] mb-1">PHONE</p>
            <h1>+91-9760979188</h1>
            <span className="w-[50%] md:w-full"><hr className="w-[50%] md:w-[50%]" /></span>

            <p className="mt-7 mb-2 text-[0.8rem] ">DATE</p>
            <div>
            <button className="border px-3 py-1 mr-2">October 19</button>
            <button className="border px-3 py-1 mx-2">October 28</button>
            </div>
          </motion.div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
