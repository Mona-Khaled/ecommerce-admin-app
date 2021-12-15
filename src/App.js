//**************************       Root Component    ***************************//
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData } from './actions'
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import NewPage from './containers/NewPage';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // componentDidMount or componentDidUpdate
  useEffect(() => {
    //if user not loggedin/authenticated, check if token exists in localStorage 
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    /**
     *  when loading app & admin logged in, get initial data for categories,products..etc 
     *  so it will be available every where within app
     */
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);  // --> call whenever authenticate gets changed

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/page" component={NewPage} />


        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
export default App;