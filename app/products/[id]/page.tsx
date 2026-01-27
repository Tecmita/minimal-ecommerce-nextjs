import React from 'react'
import { getProductById } from '@/app/services/product.services'
import BackButton from '@/app/components/BackButton'

interface Props {
    params: Promise<
    {
        id: string
    }
    > 
}

export default async function ProductDetailPage({params}: Props){ 
    const {id} = await params;
    const product = await getProductById({
        id:Number(id),
        signal: undefined
    })

 return (
    <div>
        <BackButton/>

      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <img src={product.image} alt={product.title} loading='lazy' />
    </div>
  );
}



