import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaHome } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

import { logout } from '../../store/modules/auth/actions';

import HeaderWrapper from './styles';

export default function Header() {
  const isLogged = useSelector((state) => state.auth.logged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.info('Volte sempre!');
    dispatch(logout());
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <FaHome />
      </Link>
      {isLogged ? (
        <Link to="/" onClick={handleLogout}>
          <FiLogOut />
        </Link>
      ) : (
        <Link to="/login">
          <FiLogIn />
        </Link>
      )}
    </HeaderWrapper>
  );
}
