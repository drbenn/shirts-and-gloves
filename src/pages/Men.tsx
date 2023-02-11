import './product-pages.scss';
import storeItems from "../data/items.json";
import { StoreItem } from '../components/StoreItem';

export function Men() {

  let things = ['cat','dog','map','stack']
  return (
    <>
      <h1>Men</h1>
      <div className='product-listing-container'>
        {storeItems.map((item) => (
          <StoreItem {...item} />
        )
        // {
        //   return (
        //     <div key={item.id} className='product-card-container'>
        //       <div className='product-img-container'>
        //         <img 
        //           src={item.imgUrl}
        //           alt={item.name}
        //           loading='lazy'
        //           />
        //       </div>
        //       <div className='product-text-detail-container'>
        //         <div className='product-title'>
        //           {item.name}
        //         </div>
        //         <div className='product-price'>
        //           ${item.price}
        //         </div>

        //       </div>
        //     </div>
        //   )
        // }
        
        )}
      </div>
    
    
    </>
  )
}