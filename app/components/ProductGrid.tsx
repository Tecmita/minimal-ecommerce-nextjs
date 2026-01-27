import { Product } from '../types/Product'
import ProductCard from './ProductCard'

interface ProductGridProps {
    product: Product[]
}

export const ProductGrid = ({product}: ProductGridProps) => {
  return <div>
    {product.map((product) =>(
        <ProductCard key={product.id} product={product}/>
    ))}
  </div>
  
}





export default ProductGrid