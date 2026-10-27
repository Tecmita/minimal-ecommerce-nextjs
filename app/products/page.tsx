import ProductGrid from "./components/ProductGrid";
import {
  getProducts,
  getProductByCategory,
  getCategories,
} from "../services/product.services";
import ProductFilter from "./components/ProductFilter";
import { Product } from "../types/Product";

interface Props {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;

  const query = params.q?.toLowerCase() ?? "";
  const category = params.category ?? "";

  const products: Product[] = category
    ? await getProductByCategory({ category })
    : await getProducts({});

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query),
  );

  const categories = await getCategories();

  return (
    <>
      <div className="flex flex-col bg-gray-200">
        <div className="flex items-center gap-5 py-4 px-16">
          <h1>Productos</h1>
          <ProductFilter initialQuery={query} categories={categories} />
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
}
