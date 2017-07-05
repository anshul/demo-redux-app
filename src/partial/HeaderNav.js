import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './styles';

const HeaderNav = () =>
  <s.Nav>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-user" activeClassName="active" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
          AddUser
        </NavLink>
      </li>
      <li>
        <NavLink to="/user" activeClassName="active" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
          UserInfo
        </NavLink>
      </li>
      <li>
        <NavLink to="/todo" activeClassName="active" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
          Todo
        </NavLink>
      </li>
      <li>
        <NavLink to="/tic-tact-toe" activeClassName="active" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
          TicTacToe
        </NavLink>
      </li>
    </ul>
  </s.Nav>;

export default HeaderNav;
