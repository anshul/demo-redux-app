import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserInfo = props =>
  <div>
    <h3>User Info</h3>
    {props.users.length > 0
      ? props.users.map((user, index) =>
          <div key={user.name}>
            <p>
              {`Name:`}
              {user.name}
            </p>
            <p>
              {`Surname: `}
              {user.surname}
            </p>
            <p>
              {`Age: `}
              {user.age}
            </p>
            <p>
              {`Gender: `}
              {user.gender === 'M' ? 'Male' : 'Female'}
            </p>
            <Link to="/todo">Add Todo</Link>
          </div>,
        )
      : <Link to="/add-user">Add User</Link>}
  </div>;

UserInfo.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.oneOfType('Male', 'Female'),
    }).isRequired,
  ).isRequired,
};

const selector = state => ({ users: state.config.users });

export default connect(selector, {})(UserInfo);
