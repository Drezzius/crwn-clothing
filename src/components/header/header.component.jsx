import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { toggleDropdown } from '../../redux/cart/cartActions';

import './header.styles.scss';

const Header = ({ currentUser, visible, toggleDropdown }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
			<button onClick={toggleDropdown}>hey</button>
		</div>
		{visible && <CartDropdown />}
	</div>
);

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	visible: state.cart.visible
});

const mapDispatchToProps = (dispatch) => ({
	toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
