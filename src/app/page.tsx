import ProductList from '@/components/ProductList'
import { getProducts } from '@/actions/getProducts'

const INITIAL_NUMBER_OF_PRODUCTS = 10

export default async function Home() {

  const initialProducts = await getProducts(0, INITIAL_NUMBER_OF_PRODUCTS)

  return <ProductList initialProducts={initialProducts} />
  
}