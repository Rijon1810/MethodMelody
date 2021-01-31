import React from "react";
import { Route, Redirect } from "react-router-dom";
import Landing from "../Landing";
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth.isAuthenticated()) {
					return <Component {...props} />;
				} else {
					return (
						<Route
							exact
							path={`${process.env.PUBLIC_URL}/`}
							component={Landing}
						/>
					);
				}
			}}
		/>
	);
};
