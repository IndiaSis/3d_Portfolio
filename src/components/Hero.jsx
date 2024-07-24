import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
    <section className={`w-full h-auto pt-36 m-50px`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Siser</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Interactive user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      <div className="px-20px flex justify-center" >
        <img className="w-6/12 h-6/12" src="https://wallpaperaccess.com/full/8773880.jpg" />
      </div>
    </section>
    </>
  );
};

export default Hero;