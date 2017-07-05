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
      const currentdate = new Date();

      let hours = currentdate.getHours();

      // correct for number over 24, and negatives
      if (hours >= 24) {
        hours -= 24;
      }
      if (hours < 0) {
        hours += 12;
      }

      hours += '';
      if (hours.length === 1) {
        hours = `0${hours}`;
      }

      let minutes = currentdate.getMinutes();

      minutes += '';
      if (minutes.length === 1) {
        minutes = `0${minutes}`;
      }

      let seconds = currentdate.getSeconds();
      seconds += '';
      if (seconds.length === 1) {
        seconds = `0${seconds}`;
      }

      this.setState({
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  }

  render() {
    return (
      <s.Container>
        <HeaderNav />
        <s.sideContainer>
          <s.Sidenav>
            <ul>
              <li>
                <p>
                  {this.state.hours}:{this.state.minutes}:{this.state.seconds}
                </p>
              </li>
              <li>
                <NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                  Home
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink to="/add-user" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                  AddUser
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink to="/user" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                  UserInfo
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink to="/todo" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                  Todo
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink to="/tic-tact-toe" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                  TicTacToe
                </NavLink>
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
