import { About, Navbar } from "../components";



const AboutPage = () =>{
  return (
    <div className="relative z-0 bg-primary">
    <Navbar />
    <div className="mt-8">
    <About />
    </div>
    </div>
  )
}

export default AboutPage