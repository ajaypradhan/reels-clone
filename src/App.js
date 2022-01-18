import "./App.css";

import Login from "./Components/Login";
import Signup from "./Components/Signup";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  );
}

export default App;
