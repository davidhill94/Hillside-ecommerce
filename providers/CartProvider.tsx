"use client";

import { CartContextProvider } from "@/app/hooks/useCart";

interface CarProviderProps{
    children: React.ReactNode
}

const CartProvider: React.FC<CarProviderProps> = ({ children }) => {
    return ( 
        <CartContextProvider>{children}</CartContextProvider>
     );
}
 
export default CartProvider;