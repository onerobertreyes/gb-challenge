import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/actions/getProducts'

const INITIAL_NUMBER_OF_PRODUCTS = 10

export default async function Home() {

  const initialProducts = await getProducts(0, INITIAL_NUMBER_OF_PRODUCTS)

  return (
    <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {initialProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
    </div>
  )
}