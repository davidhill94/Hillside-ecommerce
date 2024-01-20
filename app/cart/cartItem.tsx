import Link from "next/link";
import { CartProductType } from "../product/[productId]/productDetails";
import { formatPrice } from "../utils/formatPrice";
import Image from "next/image";
import { truncateText } from "../utils/truncateFunction";
import SetQuantity from "../components/products/setQuantity";
import { useCart } from "../hooks/useCart";

interface CartItemProps {
  item: CartProductType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {

  const { handleRemoveFromCart, handleCartQuantityIncrease, handleCartQuantityDecrease } = useCart();

  return (
    <div className="grid md:grid-cols-5 gap-2 items-center border-b border-b-light-primary py-4">
      <div className="col-span-2 justify-self-start flex items-start justify-start gap-4 h-full">
        <Link href={`/product/${item.id}`}>
          <Image
            src={item.image.image}
            alt={item.name}
            className="object-contain"
            width={80}
            height={80}
          />
        </Link>
        <div className="flex flex-col items-start justify-between h-full">
          <Link
            href={`/product/${item.id}`}
            className="text-xl w-full lg:w-2/3"
          >
            {truncateText(item.name)}
          </Link>
          <button className="underline" onClick={() => handleRemoveFromCart(item)}>
            Remove
          </button>
        </div>
      </div>
      <div className="justify-self-center">
        <p>{formatPrice(item.price)}</p>
      </div>
      <div className="justify-self-center">
        <SetQuantity 
        cartCounter
        cartProduct={item} 
        handleDecrease={() => {handleCartQuantityDecrease(item)}}
        handleIncrease={() => {handleCartQuantityIncrease(item)}}
        />
      </div>
      <div className="justify-self-end">
        <p>{formatPrice(item.price * item.quantity)}</p>
      </div>
    </div>
  );
};

export default CartItem;
