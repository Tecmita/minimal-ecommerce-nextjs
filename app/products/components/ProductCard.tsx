import { Product } from "@/app/types/Product";
import Link from "next/link";
import AddToCartButton from "../[id]/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <div className="w-60 p-4 bg-white rounded-xl flex flex-col items-center text-center">
        <Link href={`/products/${product.id}`}>
          <img className="h-40" src={product.thumbnail} alt={product.title} />
        </Link>

        <Link href={`/products/${product.id}`}>
          <h2 className="line-clamp-1 font-bold text-lg">{product.title}</h2>
        </Link>
        <p className="text-sm text-gray">{product.price}</p>
        <p className="line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
        <div className="self-start">
          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
