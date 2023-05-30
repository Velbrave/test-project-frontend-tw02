import { Route, Routes } from 'react-router-dom';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataThunk } from '../../redux/auth/authThunk';
import { lazy, Suspense, useEffect } from 'react';
import PageNotFound from '../../page/PageNotFound/PageNotFound';
import { fetchTweets } from '../../redux/tweets/tweetThunk';
import { authToken } from '../../redux/selectors';

const Home = lazy(() => import('../../page/Home/Home'));
const Register = lazy(() => import('../../page/Register/Register'));
const Login = lazy(() => import('../../page/Login/Login'));
const Tweets = lazy(() => import('../../page/Tweets/Tweets'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authToken);

  useEffect(() => {
    if (!token) return;

    dispatch(getUserDataThunk());
    dispatch(fetchTweets());
  }, [token, dispatch]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/tweets" element={<Tweets />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
