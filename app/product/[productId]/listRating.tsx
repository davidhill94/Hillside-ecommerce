"use client";

import Heading from "@/app/components/products/Headings";
import { generateRating } from "@/app/utils/generateRating";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div className="w-full lg:w-1/2">
      <Heading title="Reviews" />
      <div className="flex flex-col gap-4 w-full">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div>avatar</div>
                  <h3 className="font-semibold font-xl">{review?.user.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-secondaryColor">
                    {generateRating(review.rating)}
                  </div>
                  <div className="font-light italic text-sm">
                    {moment(review.createdAt).fromNow()}
                  </div>
                </div>
                <div>{review.comment}</div>
                <hr className="mt-4 w-full text-fontPrimary" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
