import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartProductType } from "../product/[productId]/productDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQuantity: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddToCart: (product: CartProductType) => void;
  handleRemoveFromCart: (product: CartProductType) => void;
  handleCartQuantityIncrease: (product: CartProductType) => void;
  handleCartQuantityDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  //Retrieves local storage cart data and updates the cart
  useEffect(() => {
    const cartItems: any = localStorage.getItem("HillsideCart");
    const cartStorageProducts: CartProductType[] | null = JSON.parse(cartItems);
    const hillsidePaymentIntent: any = localStorage.getItem("hillsidePaymentIntent");
    const paymentIntent: string | null = JSON.parse(hillsidePaymentIntent);

    setCartProducts(cartStorageProducts);
    setPaymentIntent(paymentIntent);

  }, []);

  //Updates the total amount figure when items are added and removed
  useEffect(() => {
    const updateTotal = () => {
      if (cartProducts) {
        const { total, quantity } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;
            acc.total += itemTotal;
            acc.quantity += item.quantity;

            return acc;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        setCartTotalAmount(total);
        setCartTotalQuantity(quantity);
      }
    };
    updateTotal();
  }, [cartProducts]);

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
    toast.success("Item Added to Cart");
  }, []);

  //Handles removing products from the cart
  const handleRemoveFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProducts);
        localStorage.setItem("HillsideCart", JSON.stringify(filteredProducts));
      }
      toast.success("Item removed from Cart");
    },
    [cartProducts]
  );

  //
  //handles increasing quantity of product in cart page
  const handleCartQuantityIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      //checks for max quantity and returns error message
      if (product.quantity === 99) {
        return toast.error("Maximum quantity reached");
      }
      //checks to see if products exist in cart - finds the relevant item index and checks it exists
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        //accesses product and updates
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("HillsideCart", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  //
  //handles decreasing quantity of product in cart page
  const handleCartQuantityDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      //checks for max quantity and returns error message
      if (product.quantity === 1) {
        return toast.error("Minumum quantity reached");
      }
      //checks to see if products exist in cart - finds the relevant item index and checks it exists
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        //accesses product and updates
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("HillsideCart", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  //handles clearing the cart
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQuantity(0);
    localStorage.setItem("HillsideCart", JSON.stringify(null));
    toast.success("Cart cleared");
  }, []);

  //sets payment intent
  const handleSetPaymentIntent = useCallback(
    (val: string | null) => {
      setPaymentIntent(val);
      localStorage.setItem("eShopPaymentIntent", JSON.stringify(val));
    },
    [paymentIntent]
  );

  const value = {
    cartTotalQuantity,
    cartTotalAmount,
    cartProducts,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartQuantityIncrease,
    handleCartQuantityDecrease,
    handleClearCart,
    paymentIntent,
    handleSetPaymentIntent,
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
