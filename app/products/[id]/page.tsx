import React from "react";
import { getProductById } from "@/app/services/product.services";
import BackButton from "@/app/components/BackButton";
import { notFound } from "next/navigation";
import AddToCartButton from "./AddToCartButton";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById({
    id: Number(id),
    signal: undefined,
  });
  if (!product) {
    notFound();
  }

  return (
    <div>
      <BackButton />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <AddToCartButton product={product} />
    </div>
  );
}
