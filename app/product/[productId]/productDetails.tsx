"use client";

import BreakLine from "@/app/components/breakLine";
import { formatPrice } from "@/app/utils/formatPrice";
import { formatReviews } from "@/app/utils/formatReviews";
import { generateRating } from "@/app/utils/generateRating";

interface ProductDetailsProps {
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  //averages out the review ratings - tallies up the total rating sum and divides by the number of reviews
  const productRatingAvg =
    product.reviews.reduce(
      (tally: number, item: any) => item.rating + tally,
      0
    ) / product.reviews.length;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div>Images</div>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-2xl">{product.name}</h2>
        <div  className="flex justify-start w-full">
            <h4 className="flex items-center justify-start w-auto mr-2 text-secondaryColor">
              {generateRating(
                product.reviews.length > 0 ? productRatingAvg : 0
              )}
            </h4>
            <h4 className="italic w-full">{formatReviews(product.reviews.length)}</h4>
          </div>
          <h4 className="font-semibold">{formatPrice(product.price)}</h4>
          <BreakLine color="#E1E8E6" />
      </div>
    </section>
  );
};

export default ProductDetails;
