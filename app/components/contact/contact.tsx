import ContactDetails from "./contactDetails";
import ContactForm from "./contactForm";

const Contact = () => {
    return ( 
        <section className="w-full lg:w-3/5 flex flex-col md:flex-row justify-center gap-4">
            <ContactForm />
            <ContactDetails />
        </section>
     );
}
 
export default Contact;