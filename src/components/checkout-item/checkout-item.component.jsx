import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemfromCart } = useContext(CartContext);

    const incrementItemQuantity = () => addItemToCart(cartItem);
    const decrementItemQuantity = () => removeItemFromCart(cartItem);
    const clearCartItem = () => clearItemfromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decrementItemQuantity}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={incrementItemQuantity}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearCartItem}>
                &#10005;
            </div>
        </div>
    );
}

export default CheckoutItem;