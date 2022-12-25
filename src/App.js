import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Login from './login';
import Register from './register';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="hero-container">
                <h1 className="fb-blue">facebook</h1>
                <h4>Connect with friends and the world around you on Facebook.</h4>
              </div>
            </Col>
            <Col lg={5}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
