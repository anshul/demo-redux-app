import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import HeaderNav from './../partial/HeaderNav';
import s from './styles';

const Container = props =>
  <s.Container>
    <HeaderNav />
    <s.sideContainer>
      <s.Sidenav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</NavLink></li>
          <br />
          <li><NavLink to="/add-user" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>AddUser</NavLink></li>
          <br />
          <li><NavLink to="/user" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>UserInfo</NavLink></li>
          <br />
          <li><NavLink to="/battle" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Battle</NavLink></li>
          <br />
          <li><NavLink to="/todo" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Todo</NavLink></li>
          <br />
          <li><NavLink to="/tic-tact-toe" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>TicTacToe</NavLink></li>
        </ul>
      </s.Sidenav>
      <s.Content>
        {props.children}
      </s.Content>
    </s.sideContainer>
  </s.Container>;

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
