import { About} from "../components";
import SignIn from 'authence';



const AboutPage = () =>{
  return (
    <div className="mt-8 bg-primary">
    <About />
    <SignIn />
    </div>
    
  )
}

export default AboutPage