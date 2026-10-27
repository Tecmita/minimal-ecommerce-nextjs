import { Product } from "@/app/types/Product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return <p>No se encontraron productos</p>;
  }

  return (
    <div className="w-full mx-6 px-4 sm:px-6 lg:px-6 py-8">
      <div className="grid grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
