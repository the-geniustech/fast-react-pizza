import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase sm:px-6">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <LinkButton to="cart">Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
