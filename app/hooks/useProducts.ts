"use client"

import { Product } from "../types/Product";
import { getProducts } from "../services/product.services";
import React, { useEffect, useState } from 'react'

interface UseProductReturn{
    products: Product[];
    loading: boolean;
    error: string | null;

}

export const useProducts = (): UseProductReturn =>{
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=>{
        const loadProducts = async() =>{
            try{
                setLoading(true)
                setError(null)
                const data = await getProducts({signal: undefined})
                setProducts(data)
            }catch{
                setError("Error al cargar los productos")
            }finally{
                setLoading(false)
            }
        }
        loadProducts()
    },[])
return {loading, error, products}
       
}

