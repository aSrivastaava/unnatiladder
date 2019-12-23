import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function landingPage(logo) {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"></img>
      <header className="App-header">
        <h1>Coming Soon</h1>
        We're currently working on creating something fantastic.
        <br /> We'll be soon here, stay connected to get updates.
      </header>
      <body className="App-body"></body>
    </div>
  );
}

export default landingPage;
