import { productData } from "@/app/utils/productData";
import ProductCard from "./ProductsCard";
import mock from '../../../public/images/mockImageOne.jpg';

const Products = () => {
    return ( 
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl'>
        {productData.map((item: any, index: number) => {
          return (
            <>
             <ProductCard data={item} />
            </>
          )
        })}
      </div>
     );
}
 
export default Products;