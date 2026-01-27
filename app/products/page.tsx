import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../services/product.services";

export default async function ProductsPage() {
  const products = await getProducts({signal: undefined});

  return (
    <>
      <h2>Todos los productos</h2>
      <ProductGrid product={products} />
    </>
  );
}