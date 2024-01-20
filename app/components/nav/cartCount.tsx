"use client";

import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const CartCount = () => {

    const router = useRouter();
    const { cartTotalQuantity } = useCart();

    return ( 
        <div className="relative cursor-pointer"
        onClick={() => router.push("/cart")}>
             <p><FaShoppingCart /></p>
             {
                cartTotalQuantity < 1 ?
                null 
                :
                <span className="absolute top-[-10px] left-[15px] bg-secondaryColor rounded-full h-6 w-6 flex items-center justify-center text-sm text-center">{cartTotalQuantity}</span>
             }
        </div>
     );
}
 
export default CartCount;