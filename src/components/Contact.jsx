import {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {

  const formRef=useRef();

  const [form, setform]=useState({
    name:'',
    email:'',
    message:'',
  });

  
  // template_m25ij2i
  // service_x9a1382
  // f_VZUB9-gBXWtZ5v1


  const [loading, setloading]=useState(false);

  const handlechange = (e) => {
    const {name, value}= e.target;

    setform({...form, [name]:value})
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setloading(true);
      emailjs.send('service_x9a1382', 'template_m25ij2i', {from_name:form.name, to_name: "Siser", from_email:form.email, to_email:"jay.siserpratap@gmail.com", message:form.message}, 'f_VZUB9-gBXWtZ5v1' ).then(
        () => {
          setloading(false);
          alert("Thank You. I will get back to you as soon as possible");
        
        setform({
          name:"", email:"", message:"",
        });
  }, (error) => {
          setloading(false)
        console.log(error);
      alert("Something Went wrong");
    }
      );
  };



  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween" , 0.2, 0.75)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input type="text" name="name" value={form.name} onChange={handlechange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input type="email" name="email" value={form.email} onChange={handlechange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea rows={7} name="message" value={form.message} onChange={handlechange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
      </label>
      <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading?"...Sending":"Send"}</button>
    </form>
    </motion.div>
    <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
      <EarthCanvas />
    </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact");