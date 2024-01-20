import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { CartProductType } from "../product/[productId]/productDetails";
import Link from "next/link";
import { truncateText } from "../utils/truncateFunction";
import { formatPrice } from "../utils/formatPrice";
import SetQuantity from "../components/products/setQuantity";

interface CartItemMobileProps {
  item: CartProductType;
}

const CartItemMobile: React.FC<CartItemMobileProps> = ({ item }) => {
  const {
    handleRemoveFromCart,
    handleCartQuantityIncrease,
    handleCartQuantityDecrease,
  } = useCart();

  return (
    <div className="grid grid-cols-3 gap-2 border-b border-b-light-primary py-4 h-auto">
      <Link href={`/product/${item.id}`} className="justify-self-center">
        <Image
          src={item.image.image}
          alt={item.name}
          className="object-contain"
          width={150}
          height={150}
        />
      </Link>
      <div className="flex flex-col items-start justify-between justify-self-start col-span-2 w-full h-full">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-start">
            <Link
              href={`/product/${item.id}`}
              className="text-lg w-full lg:w-2/3"
            >
              {truncateText(item.name)}
            </Link>
          </div>
          <p className="italic">{formatPrice(item.price)}</p>
          <div>
            <SetQuantity
              cartCounter
              cartProduct={item}
              handleDecrease={() => {
                handleCartQuantityDecrease(item);
              }}
              handleIncrease={() => {
                handleCartQuantityIncrease(item);
              }}
              start
            />
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <p className="font-semibold">
            {formatPrice(item.price * item.quantity)}
          </p>
          <button
            className="underline text-sm"
            onClick={() => handleRemoveFromCart(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
