import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { useCartHooks } from "../../hooks/cart.hooks";

import { useUserHooks } from "../../hooks/user.hooks";

const Navigation = () => {
  const { setCurrentUser, currentUser } = useUserHooks();

  const signOutUserAction = async () => {
    await signOutUser();
    setCurrentUser(undefined);
  };

  const { selectIsCartOpen } = useCartHooks();

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink to="/" as="span" onClick={signOutUserAction}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {selectIsCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
