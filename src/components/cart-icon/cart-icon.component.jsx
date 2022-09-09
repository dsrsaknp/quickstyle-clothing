import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    let { pathname } = useLocation();

    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen);
        // console.log('dropdown open ? :', isCartOpen);
    };

    return (
        <>
            {/* Since checkout page displays all cart items, the cart-icon should be hidden */}
            {pathname !== '/checkout'
                && (< div className='cart-icon-container' onClick={toggleDropdown} >
                    <ShoppingBagIcon className='shopping-icon' />
                    <span className='item-count'>{cartCount}</span>
                </div >)
            }
        </>
    );
}

export default CartIcon;