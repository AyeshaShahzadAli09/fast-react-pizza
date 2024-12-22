import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utilis/helper';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateQuantity from '../cart/UpdateQuantity';


const MenuItem = ({pizza}) =>{
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const dispatch = useDispatch();

    function handleAddToCart()
    {
      // console.log(id);
      const newItem = {
        pizzaId : id,
        name, 
        quantity:1,
        unitPrice,
        totalPrice : unitPrice * 1,
      };
      dispatch(addItem(newItem));
    }

    const currentQuantity = useSelector(getCurrentQuantityById(id));
    const isInCart = currentQuantity > 0;

    return(
      <li className='flex gap-4 py-2'>
        <img src={imageUrl} className={`h-24 ${soldOut ? 'opacity-7- grayscale' :""} `}
        alt ={name}/>
        <div className='flex flex-grow flex-col pt-0.5'>
            <p className='font-medium'>{name}</p>
            <p className='text-sm italic text-stone-500 capitalize '>{ingredients.join(', ')}</p>
            <div className='flex item-center justify-between mt-auto'>
            {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <div className='flex justify-between gap-2'> 
          {!soldOut && isInCart && (
            <> <DeleteItem pizzaId={id}/>
          <UpdateQuantity pizzaId={id} currentQuantity={currentQuantity}/>
          </>) }
          {!soldOut && !isInCart && ( <Button type="small" onClick={handleAddToCart}>Add to cart</Button> ) 
} </div>
            </div>
        </div>
      </li>
    )
}

export default MenuItem;