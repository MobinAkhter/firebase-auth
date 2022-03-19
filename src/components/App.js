import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

/* Since this is the starting point of the app, the references to all the code are here: 
Ended up using a lot of the code from different places online. Debugged a lot of errors from several places
https://firebase.google.com/docs/auth/web/start
https://firebase.google.com/docs/auth/web/manage-users
https://firebase.google.com/docs/auth/web/password-auth
https://firebase.google.com/docs/auth/web/google-signin will be used in the future
https://firebase.google.com/docs/auth/web/facebook-login partly used to create facebook developer account apple id
and secret key
https://www.youtube.com/watch?v=tRi1mR7H0z4
https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1284s
https://www.youtube.com/watch?v=MG3ZTfdxODA seems to be a good resource that can be potentially useful
https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
https://stackoverflow.com/questions/70706078/my-react-app-shows-a-blank-white-screen-on-localhost3000-with-no-errors
https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
https://stackoverflow.com/questions/71456564/typeerror-cannot-read-properties-of-null-reading-username
https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element


Too many resource links, some of them are important to me in the future to debug some of the existing errors I have in 
console at the moment. No errors with npm start on the terminal, but 3 errors on inspect element -> console on webpage.
*/

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>

              <Route exact path="/" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/update-profile"
                  element={<UpdateProfile />}
                />
              </Route>

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
