import { mockProduct } from "@/app/utils/mockProduct";
import ProductDetails from "./productDetails";
import Banner from "@/app/components/banner";
import ListRating from "./listRating";

interface Params {
  productId?: string;
}

const Product = ({ params }: { params: Params }) => {
  return (
    <div>
      <Banner bannerText="***Free Shipping on orders over £60***" />
      <div className="w-full bg-primaryColor py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl relative">
        <ProductDetails product={mockProduct} />
        <div className="flex flex-col gap-4 mt-20">
          <div>Add rating</div>
          <ListRating product={mockProduct} />
        </div>
      </div>
    </div>
  );
};

export default Product;
