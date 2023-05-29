import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginThunk } from '../../redux/auth/authThunk';
import css from './Login.module.css';
import { useNavigate, Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(LoginThunk(values));
    setValues(initialState);
    navigate('/tweets', { replase: true });
  };
  return (
    <div>
      <h1 className={css.login}>Login</h1>
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
          Don't have an account? Register <Link to="/register">here</Link>
        </p>
        <button className={css.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
