'use client'
import { Product } from '@/types/Product'
import ProductCard  from './ProductCard'
import { useState } from 'react'
import { getProducts } from '@/actions/getProducts'

type ProductListProps = {
  initialProducts: Product[]
}

const NUMBER_OF_PRODUCTS_TO_FETCH = 10

export default function ProductList({ initialProducts }: ProductListProps) {

    const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH)
    const [products, setProducts] = useState<Product[]>(initialProducts)

    const loadMoreProducts = async () => {
      const apiProducts = await getProducts(offset, NUMBER_OF_PRODUCTS_TO_FETCH)
      setProducts([...products, ...apiProducts])
      setOffset(offset + NUMBER_OF_PRODUCTS_TO_FETCH)
    }

    return (
      <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <button onClick={loadMoreProducts}>More Products</button>
      </div>
    )
                    
}