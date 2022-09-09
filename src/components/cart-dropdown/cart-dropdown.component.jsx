import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const navigateToCheckoutPage = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-dropdown-container'>
            {cartItems.length > 0
                ? (<div className='cart-items'>
                    {cartItems.map(cartItem => (
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))}
                </div>)
                : (<div className='empty-message'>
                    <h2>Your cart is empty</h2>
                </div>)
            }
            <Button buttonType='inverted' onClick={navigateToCheckoutPage}>Go to Checkout</Button>
        </div>
    );
}

export default CartDropdown;