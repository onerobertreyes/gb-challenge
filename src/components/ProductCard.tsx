import { Product } from '@/types/Product'
import ReactStars  from 'react-stars'

type ProductProps = {
  product: Product
}

export default function ProductCard({ product }: ProductProps) {
    return (        
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500"><ReactStars  edit={false} value={product.rating} count={5} size={24} color2={'#ffd700'} /></p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price} {product.currency}</p>
                  </div>
                </div>
              )
                    
}