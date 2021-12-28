import "./App.css";
import React from "react";
import Theme from "./core";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import Loading from "./components/Loading";
import Alert from "./components/Alert";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
      <Loading />
      <Alert />
    </Theme>
  );
}

export default App;
