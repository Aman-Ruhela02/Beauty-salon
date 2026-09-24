import { motion } from "framer-motion"

const Services = () => {
  return (
    <>
      <main className="bg-[#94a8a819] min-h-screen w-full">
        <div className="flex justify-center items-center">
            <h1 className="text-5xl mt-15 font-medium font-sans ">OUR SERVICES</h1>
        </div>
        <div className="flex flex-col mt-15 md:flex-row justify-center items-center gap-10 mb-20 m-3 overflow-hidden p-8 md:p-10 lg:p-12">
            <motion.div 
            whileHover={{scale:0.8, rotate:20}}
            className="relative rotate-10">
            <h2 className="absolute bottom-9 left-4 text-3xl text-white">BODY RITUALS</h2>
            <p className="absolute bottom-3 left-4  text-white">18 services</p>
            <img className="w-100 h-80 object-cover " src="/spa.jpg" alt="" />
            
            </motion.div>
            <motion.div 
            whileHover={{scale:0.8, rotate:-20}}
            className="relative -rotate-10">
            <h2 className="absolute bottom-9 left-4 text-3xl text-white">SKIN CARE</h2>
            <p className="absolute bottom-3 left-4  text-white">24 services</p>
            <img className="w-100 h-80 object-cover "  src="/skincare.jpg" alt="" />
           
            </motion.div>
            <motion.div 
            whileHover={{scale:0.8, rotate:20}}
            className="relative rotate-10">
                <h2 className="absolute bottom-9 left-4 text-3xl text-white">HAIR TREATMENT</h2>
            <p className="absolute bottom-3 left-4  text-white">12 services</p>
            <img className="w-100 h-80 object-cover "  src="/haircare.jpg" alt="" />
            
            </motion.div>

           
        </div>
         <div className=" text-center text-xl font-medium pb-6"><button className="underline mt-10 md:mt-20 hover:cursor-pointer">View All</button></div>
      </main>
    </>
  )
}

export default Services
