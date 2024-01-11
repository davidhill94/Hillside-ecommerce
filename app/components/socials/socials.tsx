import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-2 text-xl">
      <Link href="#" className="hover:text-secondaryColor">
        <FaFacebook />
      </Link>
      <Link href="#" className="hover:text-secondaryColor">
        <FaInstagram />
      </Link>
      <Link href="#" className="hover:text-secondaryColor">
        <FaTwitter />
      </Link>
      <Link href="#" className="hover:text-secondaryColor">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default Socials;
