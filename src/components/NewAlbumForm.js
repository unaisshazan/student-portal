import React, { useState } from "react";
import { app } from "../base";
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
const db = app.firestore();

export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const onAlbumCreate = () => {
    if (!albumName) {
      return;
    }
    db.collection("albums").doc(albumName).set({
      name: albumName,
    });
    setAlbumName("");
  };

  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <h3>Enter Album Name</h3>
      <input value={albumName} onChange={onAlbumNameChange} type="text" />
      <button onClick={onAlbumCreate}>Create album</button>
      </Container>
    </React.Fragment>
    
    </>
  );
};
