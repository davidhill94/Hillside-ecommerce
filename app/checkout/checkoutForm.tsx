"use client";

import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import toast from "react-hot-toast";
import Heading from "../components/Headings";
import { Button } from "../components/buttons/buttons";
import Link from "next/link";

interface CheckoutFormProps {
  clientSecret: string | null;
  handleSetPaymentSuccess: (value: boolean) => void;
  setPaymentIntent: React.Dispatch<React.SetStateAction<string | null>>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  clientSecret,
  handleSetPaymentSuccess,
  setPaymentIntent,
}) => {
  const { cartTotalAmount, handleClearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formattedPrice = formatPrice(cartTotalAmount);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    handleSetPaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          toast.success("Checkout Success");

          handleClearCart();
          handleSetPaymentSuccess(true);
          setPaymentIntent(null);
          localStorage.removeItem("hillsidePaymentIntent");
          localStorage.removeItem("HillsideCart");
        }
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <div className="w-full p-6 flex flex-col gap-4">
        <Heading title="Enter your details to complete your order" />
        <div>
          <h2 className="ml-1 mb-1">Address Details</h2>
          <AddressElement
            options={{
              mode: "shipping",
              allowedCountries: ["UK"],
            }}
          />
        </div>
        <div>
          <h2 className="ml-1 mb-1">Payment Information</h2>
          <PaymentElement
            options={{
              layout: "tabs",
            }}
          />
        </div>
        <p className="text-2xl font-semibold">Total Price: {formattedPrice}</p>
        <div className="flex flex-col gap-2">
          <Button
            buttonText={isLoading ? "Processing" : "Pay Now"}
            disabled={isLoading || !stripe || !elements}
            onClick={() => {}}
            outline={1}
            full
          />
          <Link href="/cart" className="w-full">
            <Button
              buttonText="Return to Cart"
              disabled={isLoading || !stripe || !elements}
              onClick={() => {}}
              outline={2}
              full
            />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
