import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import './navigation.styles.scss'
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
            <div className='navigation'>
                <div className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to=''>
                        Home
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser
                        ? <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        : (
                            <Link className='nav-link' to='/auth'>
                                Sign in
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </div>
    )

}

export default Navigation;