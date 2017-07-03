import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import HeaderNav from './../partial/HeaderNav';
import s from './styles';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mins: 0,
      secs: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const secs = this.state.secs + 1;
      const mins = secs >= 60 ? this.state.mins + 1 : this.state.mins;
      this.setState({ mins, secs: secs % 60 });
    }, 1000);
  }

  render() {
    return (
      <s.Container>
        <HeaderNav />
        <s.sideContainer>
          <s.Sidenav>

            <ul>
              <li><p> {this.state.mins}:{this.state.secs < 10 ? `0${this.state.secs}` : this.state.secs}</p></li>
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
              <li>
                <NavLink to="/tic-tact-toe" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>TicTacToe</NavLink>
              </li>
            </ul>
          </s.Sidenav>
          <s.Content>
            {this.props.children}
          </s.Content>
        </s.sideContainer>
      </s.Container>
    );
  }
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
