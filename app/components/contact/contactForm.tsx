import { ButtonAlt } from "../buttons/buttons";

const ContactForm = () => {
    return ( 
        <form className="flex flex-col w-full gap-2 text-textPrimary items-start md:items-end">
            <input
            type="text"
            placeholder="Name"
            className="p-1 rounded-sm w-full shadow-input"
            />
            <input
            type="text"
            placeholder="Email"
            className="p-1 rounded-sm w-full shadow-input"
            />
            <input
            type="text"
            placeholder="Mobile"
            className="p-1 rounded-sm w-full shadow-input"
            />
            <textarea
            rows={6}
            placeholder="Write a message"
            className="p-1 rounded-sm w-full shadow-input"
            />
            <input
            type="submit"
            value="Submit"
            className="py-2 px-6 w-48 border bg-textPrimary border-textPrimary text-primaryColor cursor-pointer shadow-input rounded-sm"
            />
        </form>
     );
}
 
export default ContactForm;