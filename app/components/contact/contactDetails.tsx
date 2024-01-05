import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactDetails = () => {
  return (
    <section className="w-full md:w-1/2 md:ml-4 text-textPrimary text-lg flex flex-col md:justify-between">
      <div>
        <div className="flex items-center gap-2 my-1">
          <p>
            <FaLocationDot />
          </p>
          <p>Lincoln, United Kingdom</p>
        </div>
        <div className="flex items-center gap-2 my-1">
          <p>
            <FaPhoneAlt />
          </p>
          <p>+447818285945</p>
        </div>
        <div className="flex items-center gap-2 my-1">
          <p>
            <FaEnvelope />
          </p>
          <p>enquiries@hillside.co.uk</p>
        </div>
      </div>
      <div>
        <p className="my-1 italic font-bold">
          Please do not hesitate to reach out to us with any enquiries.
        </p>
      </div>
    </section>
  );
};

export default ContactDetails;
