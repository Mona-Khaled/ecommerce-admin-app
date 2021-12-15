import React from "react";
import { Redirect, Route } from "react-router";



// props ---> is the path and component "and exact sometimes"
// creating an object called "rest", will hold the rest of props--> (path & exact)
const PrivateRoute = ({ component: Component, ...rest }) => {

    return < Route {...rest} component={(props) => {

        const token = window.localStorage.getItem('token');
        if (token) {

            return <Component {...props} />

        } else {  //if token is null, user not logged in, redirect to signin page

            return <Redirect to={'/signin'} />
        }
    }

    } />

}

export default PrivateRoute;