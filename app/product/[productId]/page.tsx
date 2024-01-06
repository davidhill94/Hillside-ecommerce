import { mockProduct } from "@/app/utils/mockProduct";
import ProductDetails from "./productDetails";

interface Params {
    productId?: string
}

const Product = ({ params } : { params: Params }) => {

    return ( 
        <div className="w-full py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl">
            <ProductDetails product={mockProduct}/>
        </div>
     );
}
 
export default Product;