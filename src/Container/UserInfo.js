import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserInfo = props => {
  console.log(JSON.parse(localStorage.getItem('Users')));
  return (
    <div>
      <h3>User Info</h3>
      {props.Users.map((user, index) =>
        <div key={user.name}>
          <p>{`Name:`}{user.name}</p>
          <p>{`Surname: `}{user.surname}</p>
          <p>{`Age: `}{user.age}</p>
          <p>{`Gender: `}{user.gender === 'M' ? 'Male' : 'Female' }</p>
        </div>,
      )}
    </div>
  );
};

UserInfo.PropTypes = {
  Users: PropTypes.array.isRequired,
};

const selector = state => ({ Users: state.config.Users });

export default connect(selector, {})(UserInfo);
