"use client";

import {
  CartProductType,
  SelectedImg,
} from "@/app/product/[productId]/productDetails";

interface ProductImagesProps {
  cartProduct: CartProductType;
  product: any;
  handleImageSelect: (value: SelectedImg) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  cartProduct,
  product,
  handleImageSelect,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-start w-full h-auto px-6">
      <div className="max-h-[500px] min-h-[300px] w-[400px] aspect-square object-contain">
        <img src={cartProduct.image.image} className="w-full h-full"/>
      </div>
      <div className="grid grid-cols-4 w-[400px] gap-2 cursor-pointer">
        {product.images.map((image: SelectedImg) => {
          return (
            <div
              key={image.id}
              onClick={() => handleImageSelect(image)}
              className={`relative col-span-1 w-full h-full rounded border border-secondaryColor aspect-square ${
                cartProduct.image.id === image.id ? "border-4" : "border-none"
              }`}
            >
              <img src={image.image} alt="Product" className="object-contain h-full w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
