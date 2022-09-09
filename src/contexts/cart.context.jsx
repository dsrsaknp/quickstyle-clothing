import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemfromCart: () => { },
    cartCount: 0,
    cartTotal: 0
});

// Helper function: 

// # Add cart item
const addCartItem = (cartItems, product) => {
    console.log('Adding...');
    // check if the product exists in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === product.id);

    // if exists, increase the quantity
    if (existingItem) {
        return (cartItems.map(cartItem => (cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
        ));
    }
    // else, add this as new product to the cart
    return [...cartItems, { ...product, quantity: 1 }];
};

// # Remove cart item
const removeCartItem = (cartItems, product) => {
    // check if product exists
    const existingItem = cartItems.find(cartItem => cartItem.id === product.id);

    // if exists and quantity is 1, then remove item from the cart
    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== product.id);
    }

    // else, decrement the item's quantity
    return cartItems.map(cartItem => cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem)
};

// # Clear a cart item
const clearCartItem = (cartItems, product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id);
};


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => (total + (cartItem.quantity * cartItem.price)), 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    // Add cart item
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    // Remove cart item
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    // Clear a cart item
    const clearItemfromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemfromCart,
        cartCount,
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}