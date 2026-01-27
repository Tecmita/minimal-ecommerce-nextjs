import { Product } from '../types/Product';
import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
  return (
      <Link href={`/products/${product.id}`}>
    <div>
      
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
    </div>
      </Link>
  )
}

export default ProductCard