

const Home = () => {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden w-full">
       <picture className="absolute inset-0 block w-full h-full">
        <source className="h-screen w-full object-cover" media="(min-width: 786px)" 
        srcSet="herodesktop.png" />
        <img className="absolute h-screen w-full object-cover " src="/heromobile.png" alt="" />
       </picture>
       
        <div className="absolute  w-full">
          <div className="flex justify-between items-center px-4 md:px-12 py-3">
            <div className=""><h1 className="text-3xl md:text-4xl text-[#e0dcdc]">Salon</h1></div>
            <div className="">
              <ul className="hidden lg:flex gap-8 text-[#bbbbbb] font-sans ">
                <li className="hover:bg-[pink]/20 hover:px-3  hover:text-white hover:rounded-2xl hover:backdrop-blur-md  hover:cursor-pointer">ABOUT US</li>
                <li className="hover:bg-[pink]/20 hover:px-3  hover:text-white hover:rounded-2xl hover:backdrop-blur-md  hover:cursor-pointer">SERVICES</li>
                <li className="hover:bg-[pink]/20 hover:px-3  hover:text-white hover:rounded-2xl hover:backdrop-blur-md  hover:cursor-pointer">BLOG</li>
                <li className="hover:bg-[pink]/20 hover:px-3  hover:text-white hover:rounded-2xl hover:backdrop-blur-md  hover:cursor-pointer">CONTACT</li>
              </ul>
            </div>
            <div className="px-2 md:px-12">
              <button className="px-4 py-1 whitespace-nowrap text-[#d7d4d7] rounded-2xl bg-white/20 backdrop-blur-md ">Book an Appointment</button>
            </div>
          </div>
        </div>

        <div className="absolute flex flex-col justify-center items-center top-[13%] md:top-auto md:bottom-10 w-full ">
          <div className="text-center md:text-start w-full pl-10 lg:pl-52"><p className="text-white  text-[clamp(1rem,12vw,1rem)]">Your glow begins here. Welcome to Lunaria</p></div>
          <div className="md:flex md:gap-10">
            <h1 className="text-white text-[clamp(4rem,12vw,10rem)] text-center">BEAUTY</h1>
            <h1 className="text-white text-[clamp(4rem,12vw,10rem)] text-center">SAL<span className="rounded-full  justify-center items-center overflow-hidden "><video className="overflow-hidden object-cover inline-block w-30 md:h-33 md:w-35 rounded-full pb-2"  autoPlay loop muted src="/video.mp4"></video></span>N</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
