import { useContext } from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen);
        // console.log('dropdown open ? :', isCartOpen);
    };

    return (
        <div className='cart-icon-container' onClick={toggleDropdown}>
            <ShoppingBagIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;