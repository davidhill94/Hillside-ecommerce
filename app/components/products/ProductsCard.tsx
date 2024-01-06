"use client";
import { truncateText } from '@/app/utils/truncateFunction';
import image from '../../../public/images/mockImageOne.jpg'
import { formatPrice } from '@/app/utils/formatPrice';
import { formatReviews } from '@/app/utils/formatReviews';
import { generateRating } from '@/app/utils/generateRating';

interface ProductCardProps{
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({ data }) => {
    console.log(data.reviews.length > 0 ?  data.reviews[0].rating : 0)
  return (
    <div
      className="
        col-span-1 
        cursor-pointer
         border 
         border-textPrimary 
         bg-light-cream 
         rounded 
         p-2 
         transition 
         hover:scale-105 
         text-center"
    >
      <div
        className="
            flex
            flex-col
            items-center
            w-full
            gap-1
            "
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <img src={data.images[0].image} alt={data.name}></img>
        </div>
        <div>{truncateText(data.name)}</div>
        <div className="flex items-center justify-center w-full text-textPrimary">{generateRating(data.reviews.length > 0 ?  data.reviews[0].rating : 0)}</div>
        <div>{formatReviews(data.reviews.length)}</div>
        <div>{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
