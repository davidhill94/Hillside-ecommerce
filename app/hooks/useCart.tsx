import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "../product/[productId]/productDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQuantity: number;
  cartProducts: CartProductType[] | null;
  handleAddToCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  //Retrieves local storage cart data and updates the cart
  useEffect(() => {
    const cartItems: any = localStorage.getItem("HillsideCart");
    const cartStorageProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cartStorageProducts);
  }, [])

  //Hanldes adding new products to the cart
  const handleAddToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      localStorage.setItem("HillsideCart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    toast.success("Item Added to Cart")
  }, []);

  const value = {
    cartTotalQuantity,
    cartProducts,
    handleAddToCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContext Provider");
  }

  return context;
};
