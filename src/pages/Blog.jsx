import { easeOut, motion } from "framer-motion";

const Blog = () => {
  return (
    <>
      <main className="min-h-screen mb-15 md:mb-0 overflow-x-hidden">
        <div className="p-4">
          <div className="text-center mt-10">
            <h1 className="text-4xl underline">All Blogs</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-[40%_30%_30%] w-full mt-10">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative col-span-2 md:col-span-1 h-60 m-2 "
            >
              <h2 className="absolute top-7 left-6 text-white text-3xl font-medium">
                Facepack
              </h2>
              <p className="absolute top-18 left-6 text-white">
                Lorem ipsum dolor sit.
              </p>
              <p className="absolute top-23 left-6 text-white">
                consectetur adipisicing elit. Ea, a.
              </p>
              <p className="absolute top-28 left-6 text-white">
                Lorem, ipsum dolor.
              </p>
              <button className="absolute top-40 left-6 text-white underline hover:cursor-pointer">
                Read More
              </button>
              <img
                className="w-full h-full object-cover "
                src="/facepack.jpg"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.2, ease: "easeOut" },
              }}
              className="col-span-1 h-60 m-2 p-4 border rounded"
            >
              <h1 className="font-bold">DERMAPLANING</h1>
              <p>$59</p>
              <p className="font-['sans']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                assumenda.
              </p>
              <button className="bg-[#111111e3] text-white font-medium px-2 mt-7">
                BOOK NOW
              </button>
            </motion.div>

            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.15, ease: "easeOut" },
              }}
              className="col-span-1 h-80 m-2 p-4 border rounded "
            >
              <h1 className="font-bold">DERMAPLANING</h1>
              <p>$59</p>
              <p className="font-['sans']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                assumenda.
              </p>
              <p className="font-['sans']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                assumenda.
              </p>
              <button className="bg-[#111111e3] text-white font-medium px-2 mt-7">
                BOOK NOW
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4  w-full">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative h-90 m-2"
            >
              <h2 className="absolute top-4 left-6 text-white text-3xl font-medium">
                Facepack
              </h2>
              <p className="absolute top-50 left-6 text-white">
                Lorem ipsum dolor sit.
              </p>
              <p className="absolute top-55 left-6 text-white">
                consectetur adipisicing elit. Ea, a.
              </p>
              <p className="absolute top-60 left-6 text-white">
                Lorem, ipsum dolor.
              </p>
              <button className="absolute bottom-10 left-6 text-white underline hover:cursor-pointer">
                Read More
              </button>
              <img
                className="object-cover w-full h-full"
                src="/RED VELVET.jpg"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.2, ease: "easeOut" },
              }}
              className="h-60 m-2 p-4 border rounded-full "
            >
              <h1 className="font-bold text-center">DERMAPLANING</h1>
              <p className="ml-3">$59</p>
              <p className="font-['sans']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                assumenda.
              </p>
              <button className="bg-[#111111e3] text-white font-medium px-2 mt-7">
                BOOK NOW
              </button>
            </motion.div>

            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.2, ease: "easeOut" },
              }}
              className="h-60 m-2 p-4 border rounded"
            >
              <h1 className="font-bold">DERMAPLANING</h1>
              <p>$59</p>
              <p className="font-['sans']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                assumenda.
              </p>
              <button className="bg-[#111111e3] text-white font-medium px-2 mt-7">
                BOOK NOW
              </button>
            </motion.div>

            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
             transition={{
                x: { duration: 1.2, ease: easeOut },
                opacity: { duration: 1.2, ease: easeOut },
                scale: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative h-60 m-2 "
            >
              <h2 className="absolute top-7 left-6 text-white text-3xl font-medium">
                Facepack
              </h2>
              <p className="absolute top-18 left-6 text-white">
                Lorem ipsum dolor sit.
              </p>
              <p className="absolute top-23 left-6 text-white">
                consectetur adipisicing elit. Ea, a.
              </p>
              <p className="absolute top-28 left-6 text-white">
                Lorem, ipsum dolor.
              </p>
              <button className="absolute top-40 left-6 text-white underline hover:cursor-pointer">
                Read More
              </button>
              <img
                className="object-cover w-full h-full"
                src="/Italiana.jpg"
                alt=""
              />
            </motion.div>
          </div>

          <div></div>
        </div>
      </main>
    </>
  );
};

export default Blog;
