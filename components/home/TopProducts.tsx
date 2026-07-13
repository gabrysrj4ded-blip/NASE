"use client";

import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function TopProducts() {
  return (
    <section className="mt-10">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-[22px] font-semibold text-white">
          Top Products
        </h2>

      </div>

      {/* Horizontal Scroll */}

      <div
  className="
    flex
    gap-4
    overflow-x-auto
    overflow-y-hidden
    pb-5
    snap-x
    snap-mandatory
    touch-pan-x
    [-ms-overflow-style:none]
    [scrollbar-width:none]
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            bestPrice={product.bestPrice}
            shops={product.shops}
          />
        ))}
      </div>

      {/* Scroll Indicator */}

      <div className="mt-2 flex justify-center">

        <div
          className="
          h-[4px]
          w-20
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
          "
        />

      </div>

    </section>
  );
}