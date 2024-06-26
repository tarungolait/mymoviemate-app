// App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import Homepage from "./components/Homepage";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/watchList" component={WatchList} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
