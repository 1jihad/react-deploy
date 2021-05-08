import React from 'react';
import './App.css';
import Contact from './Contact';
import Users from './Users';
import About from './About';
import CreateUser from './CreateUser';
import Home from './Home';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/list">List</Nav.Link>
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
