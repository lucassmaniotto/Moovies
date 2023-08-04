import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import HeaderWrapper from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/login">
        <FiLogIn />
      </Link>
    </HeaderWrapper>
  );
}
