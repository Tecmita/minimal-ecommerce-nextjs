import { Product } from "../types/Product";


interface GetProductParams {
    signal?: AbortSignal;
}

export const getProducts = async ({signal}: GetProductParams): Promise<Product[]> =>{
    const res = await fetch(`https://fakestoreapi.com/products`, {signal})
    if(!res.ok){
        throw new Error("Ocurrió un error al obtener un producto")
    }
    const data = await res.json()
    return data
}


interface getProductByIdParams {
    id: number
    signal?: AbortSignal
}


export const getProductById = async ({signal, id}: getProductByIdParams): Promise<Product> =>{
    
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {signal})

    if(!res.ok){
        throw new Error("Ocurrió un error al obtener un producto")
    }
    const data = await res.json()
    return data

}
interface getProductByCategory {
    category: string;
    signal?: AbortSignal;
}

export const getProductByCategory = async ({signal, category}: getProductByCategory): Promise<Product[]> =>{
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    if(!res.ok){
        throw new Error("Ocurrió un error al selecciona rla categoría")
    }

    const data = await res.json()
    return data
}
