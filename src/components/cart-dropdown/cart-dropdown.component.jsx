import { useContext } from 'react';
// import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const navigateToCheckoutPage = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartDropdownContainer>
            {cartItems.length
                ? (<>
                    <CartItems>
                        {cartItems.map(cartItem => (
                            <CartItem cartItem={cartItem} key={cartItem.id} />
                        ))}
                    </CartItems>
                    <Button buttonType='inverted' onClick={navigateToCheckoutPage}>Go to Checkout</Button>
                </>)
                : (<EmptyMessage>
                    <h2>Your cart is empty</h2>
                </EmptyMessage>)
            }
        </CartDropdownContainer>
    );
}

export default CartDropdown;