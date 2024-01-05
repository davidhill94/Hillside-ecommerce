import Link from "next/link";
import Container from "../Container";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-primaryColor text-textPrimary font-semibold z-30 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/">HillSide</Link>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Shop</div>
              <div>About Us</div>
              <div>Contact</div>
              <div className="flex items-center gap-4 md:gap-6 text-xl">
                <div className="hidden md:block"><FaSearch /></div>
                <div><FaShoppingCart /></div>
                <div><FaUserCircle /></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
