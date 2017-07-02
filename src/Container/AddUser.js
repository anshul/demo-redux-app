import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from 'tcomb-form';
import { addUsers } from './../actions/User';
import s from './styles';

const Form = t.form.Form;

const Gender = t.enums({
  M: 'Male',
  F: 'Female',
});

const newUser = t.struct({
  name: t.String,
  surname: t.maybe(t.String),
  age: t.Number,
  gender: Gender,
});

const options = {
  fields: {
    name: {},
    surname: {},
    age: {},
    gender: {},
  },
};

class AddUser extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        name: '',
        surname: '',
        age: '',
        gender: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        name: '',
        surname: '',
        age: '',
        gender: '',
      },
    };
  }

  onChange = value => {
    this.setState({
      value,
    });    
  };

  handleAddUser = () => {
    const value = this.form.getValue();
    if (value) {
      const data = {
        name: value.name,
        surname: value.surname,
        age: value.age,
        gender: value.gender,
      };

      localStorage.setItem('user', JSON.stringify(data));

      this.props.addUsers(data);
      this.props.history.push("/user")
    }
  };

  render() {
    return (
      <s.FormContainer>
        <h2>Add User</h2>
        <Form ref={form => (this.form = form)} type={newUser} options={options} value={this.state.values} onChange={this.handleChange}/>
        <button onClick={this.handleAddUser}>Add User</button>
      </s.FormContainer>
    );
  }
}

AddUser.propTypes = {
  addUsers: PropTypes.func.isRequired,
};

const selector = state => ({ Users: state.config.Users });

export default connect(selector, { addUsers })(AddUser);