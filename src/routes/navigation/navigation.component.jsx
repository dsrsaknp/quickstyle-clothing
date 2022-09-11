import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <div>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to=''>
                        Home
                    </NavLink>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser
                        ? <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                        : (
                            <NavLink className='nav-link' to='/auth'>
                                Sign in
                            </NavLink >
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </div>
    )

}

export default Navigation;