"use client";

import { Button } from "@/app/components/buttons/buttons";
import ProductImages from "@/app/components/products/productImages";
import SetQuantity from "@/app/components/products/setQuantity";
import { formatPrice } from "@/app/utils/formatPrice";
import { formatReviews } from "@/app/utils/formatReviews";
import { generateRating } from "@/app/utils/generateRating";
import { useCallback, useEffect, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: SelectedImg;
  quantity: number;
  price: number;
};

export type SelectedImg = {
  image: string;
  id: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

  const [buttonSize, setButtonSize] = useState(false); 
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    image: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  //averages out the review ratings - tallies up the total rating sum and divides by the number of reviews
  const productRatingAvg =
    product.reviews.reduce(
      (tally: number, item: any) => item.rating + tally,
      0
    ) / product.reviews.length;

  const handleImageSelect = useCallback(
    (value: SelectedImg) => {
      setCartProduct((prev) => {
        return { ...prev, image: value };
      });
    },
    [cartProduct.image]
  );

  const handleIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }
    setCartProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity + 1,
      };
    });
  }, [cartProduct]);
  const handleDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  }, [cartProduct]);

  //Handles the resizing of buttons depending on window width - CREATE SEPARATE FILE************
    const handleButtonResize = () => {
     if(window.innerWidth < 1024) {
        setButtonSize(true);
      } else {
        setButtonSize(false);
      }
    }

    useEffect(() => {
      window.addEventListener('resize', handleButtonResize);
      return () => window.removeEventListener('resize', handleButtonResize);
    }, [handleButtonResize]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
      <ProductImages
        cartProduct={cartProduct}
        product={product}
        handleImageSelect={handleImageSelect}
      />
      <div className="flex flex-col justify-start gap-2">
        <h2 className="text-2xl">{product.name}</h2>
        <div className="flex justify-start w-full">
          <h4 className="flex items-center justify-start w-auto mr-2 text-secondaryColor">
            {generateRating(product.reviews.length > 0 ? productRatingAvg : 0)}
          </h4>
          <h4 className="italic w-full">
            {formatReviews(product.reviews.length)}
          </h4>
        </div>
        <h4 className="font-semibold">{formatPrice(product.price)}</h4>
        <h4 className={product.inStock ? "text-inStock" : "text-outOfStock"}>
          {product.inStock ? "In Stock" : "Sorry, Out of Stock"}
        </h4>
        <hr className="my-4 text-textPrimary" />
        <SetQuantity
          cartProduct={cartProduct}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
        <div className="flex flex-col justify-center gap-2 mb-4">
          {buttonSize ? (
            <>
              <Button
                buttonText="Add to Cart"
                onClick={() => {}}
                outline={2}
                full
              />
              <Button
                buttonText="View Cart"
                onClick={() => {}}
                outline={1}
                full
              />
            </>
          ) : (
            <>
              <Button
                buttonText="Add to Cart"
                onClick={() => {}}
                outline={2}
                
              />
              <Button 
              buttonText="View Cart" 
              onClick={() => {}} 
              outline={1} />
            </>
          )}
        </div>
        <p className="text-justify">{product.description}</p>
        <hr className="my-4 text-textPrimary" />
        <div className="flex flex-col gap-1">
          <h4>
            <span className="font-semibold">CATEGORY: </span>
            {product.category}
          </h4>
          <h4>
            <span className="font-semibold">PRODUCT ID: </span>
            {product.id}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
