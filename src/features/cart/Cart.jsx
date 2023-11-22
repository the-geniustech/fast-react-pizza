import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { getUserData } from '../user/userSlice';
import { clearCart } from './cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const {username} = useSelector(getUserData);

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
