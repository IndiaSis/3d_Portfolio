import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";

const Hero = () => {
  
  const [shown, setShown] = useState(false);

  const pdfUrl = `${window.location.origin}/Siser_Pratap_Resume.pdf`;

  const googleDocsUrl = `https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`
  
  const handlepreview = () => {
    window.open(googleDocsUrl, "_blank");
  }

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
          <div className="mt-2">
          <a href="/Siser_Pratap_Resume.pdf" download>
        <button className="bg-[#4303cc] m-2 rounded-3xl p-5  hover:bg-[#915eff]">Download CV</button>
        </a>
          <button className="bg-black-200 m-2 rounded-3xl p-5 hover:bg-[#4303cc] hover:rounded-xl " onClick={handlepreview}>Preview CV</button>
          </div>
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