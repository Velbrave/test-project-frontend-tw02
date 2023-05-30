import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../service/usersService';
import css from './Register.module.css';

const initialState = {
  email: '',
  password: '',
};
export const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    register(values)
      .then(() => {
        navigate('/login');
      })
      .catch(error => console.log(error.message));
  };
  return (
    <div>
      <h1 className={css.register}>Registration</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <input
            className={css.input}
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>

        <label className={css.label}>
          <input
            className={css.input}
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <p className={css.text}>
          Have an account? Login <Link to="/login">here</Link>
        </p>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
