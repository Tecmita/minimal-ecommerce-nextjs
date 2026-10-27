import { Product } from "../types/Product";

interface ProductsResponse {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
}


interface getProductsByParams {
  signal?: AbortSignal
  limit?: number;
  skip?: number;
}
export const getProducts = async({signal, limit = 20, skip = 0}: getProductsByParams): Promise<ProductsResponse[]> =>{
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {signal})
  
  if(!res.ok){
    throw new Error("Ocurrió un error al obtener un productor")
  }
  const data = await res.json()
  return data.products


}
interface getProductByIdParams {
    id: number
    signal?: AbortSignal
}
export const getProductById = async ({signal, id}: getProductByIdParams): Promise<Product | null> =>{
    
    const res = await fetch(`https://dummyjson.com/products/${id}`, {signal})

    if(!res.ok){
        throw new Error("Error al obtener el producto");
    }
    console.log("antes")
    const data = await res.json()
    console.log("después")
    return data
}

interface getProductByCategory {
    category: string;
    signal?: AbortSignal;
}


export const getProductByCategory = async ({ category, signal,}: {  category: string; signal?: AbortSignal;}): Promise<Product[]> => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,{ signal });

  if (!res.ok) {
    throw new Error("Error al obtener productos por categoría");
  }

  return res.json();
};

export const getCategories = async (): Promise<string[]> =>{
    const res = await fetch(
           "https://dummyjson.com/products/categories"
    )
  if (!res.ok) {
    throw new Error("Error al obtener categorías");
  }

  return res.json();
}

