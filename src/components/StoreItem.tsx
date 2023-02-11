import { formatCurrency } from '../utilities/formatCurrency';
import './storeItem.scss';

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  category: string
}

export function StoreItem({ id, name, price, imgUrl, category }:StoreItemProps) {
  const quantity = 0;
  return (
    <div key={id} className='product-card-container'>
      <div className='product-img-container'>
        <img 
          src={imgUrl}
          alt={name}
          loading='lazy'
          />
      </div>
      <div className='product-text-detail-container'>
        <div className='product-title'>
          {name}
        </div>
        <div className='product-price'>
          {formatCurrency(price)}
        </div>
        <div>
          <button>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}