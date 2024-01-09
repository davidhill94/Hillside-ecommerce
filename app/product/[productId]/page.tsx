import { mockProduct } from "@/app/utils/mockProduct";
import ProductDetails from "./productDetails";
import Banner from "@/app/components/banner";

interface Params {
  productId?: string;
}

const Product = ({ params }: { params: Params }) => {
  return (
    <div>
      <Banner bannerText="***Free Shipping on orders over £60***" />
      <div className="w-full bg-primaryColor py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl relative">
        <ProductDetails product={mockProduct} />
      </div>
    </div>
  );
};

export default Product;
