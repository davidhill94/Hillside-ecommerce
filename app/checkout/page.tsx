"use client";

import FormWrap from "../components/FormWrap";
import { useCart } from "../hooks/useCart";
import CheckoutClient from "./checkoutClient";

const Checkout = () => {

  const { cartProducts } = useCart();

console.log(cartProducts)

  return (
    <div className="p-8">
      <FormWrap>
          <CheckoutClient />
        </FormWrap>
    </div>
  );
};

export default Checkout;
