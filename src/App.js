import LoginPage from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AdminPanel from "./components/adminpanel";

function App() {
  return (

    <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}></Route>
          <Route exact path="/AdminPanel/" element={<AdminPanel/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
