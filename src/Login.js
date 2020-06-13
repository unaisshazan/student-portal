import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {app} from "./base";
import { AuthContext } from "./Auth.js";
import  './index.css';
import './nanni.css'
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>

   
    <div className='video-container'>
      <h1>STUDENT EMAIL</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>

    </Container>
  </React.Fragment>
    
  );
};

export default withRouter(Login);
