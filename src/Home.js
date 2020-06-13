import React from "react";
import {app} from "./base";
import AlbumFinal from "./components/AlbumFinal"
import "./components/AlbumFinal.css";
import "./components/mvp.css";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';


const Home = () => {
  return (
    <>

  
   <React.Fragment>
   <CssBaseline />
   <Container fixed>
   <h1>Home</h1>
   <button onClick={() => app.auth().signOut()}>Sign out</button>
  
  <React.StrictMode >
  <BrowserRouter >
    <AlbumFinal />
  </BrowserRouter>
</React.StrictMode>
   </Container>
 </React.Fragment>

      </>
  );
};

export default Home;
