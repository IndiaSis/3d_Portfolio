import { Navbar, Contact , StarsCanvas} from "../components";


const ContactPage = () => {
    return (
        <div className="relative z-0 bg-primary">
            <Navbar />
            <div className="mt-8">
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    )
}

export default ContactPage