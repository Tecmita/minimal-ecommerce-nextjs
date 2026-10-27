"use client";

import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

interface ProductFilterProps {
  initialQuery?: string;
  categories: string[];
}

export default function ProductFilter({
  initialQuery = "",
  categories,
}: ProductFilterProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/products?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border rounded px-2 py-1 flex-1 max-w-sm"
      />
    </div>
  );
}
