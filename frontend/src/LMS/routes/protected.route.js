import React from "react";
import { Route, Redirect } from "react-router-dom";
import Landing from "../Landing";
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("auth" + auth.isAuthenticated());
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("auth" + auth.isAdmin());
        if (auth.isAdmin() && auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
