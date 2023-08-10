import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaHome } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

import HeaderWrapper from './styles';

export default function Header() {
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.info('Volte sempre!');
    dispatch({ type: 'LOGOUT' });
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
