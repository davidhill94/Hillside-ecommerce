"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Button } from "../components/buttons/buttons";
import Heading from "../components/products/Headings";
import { useCart } from "../hooks/useCart";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div>
        <p>Your cart is empty</p>
        <button>go shopping</button>
      </div>
    );
  }

  return (
    <Container>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 gap-2 items-center">
        <p className="col-span-2 justify-self-start">PRODUCT</p>
        <p className="justify-self-center">PRICE</p>
        <p className="justify-self-center">QUANTITY</p>
        <p className="justify-self-end">TOTAL</p>
      </div>
      <div>
        {cartProducts.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start gap-2">
          <Button
            buttonText="Clear Cart"
            onClick={() => {}}
            outline={1}
            small
          />
          <Button
            buttonText="Continue Shopping"
            onClick={() => {}}
            custom="text-textPrimary border border-textPrimary"
            small
          />
        </div>
        <div className="flex flex-col items-start gap-1 p-2">
          <div className="flex w-full justify-between font-semibold">
            <p>Subtotal</p>
            <p>£204.00</p>
          </div>
          <Button 
          buttonText="Checkout" 
          onClick={() => {}} 
          outline={2} 
          full
          />
          <p className="w-full italic font-light">
            Tax and Shipping calculated on Checkout
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CartClient;
