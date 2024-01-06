import { productData } from "@/app/utils/productData";
import ProductCard from "./ProductsCard";
import mock from "../../../public/images/mockImageOne.jpg";
import { ButtonAlt } from "../buttons/buttons";

const Products = () => {
  return (
    <div className="flex flex-col gap-8 items-center py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl bg-primaryColor">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {productData.map((item: any, index: number) => {
          return (
            <>
              <ProductCard data={item} key={index}/>
            </>
          );
        })}
      </div>
      <ButtonAlt buttonText="View All Products" />
    </div>
  );
};

export default Products;
