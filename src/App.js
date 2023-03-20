import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Element } from "react-scroll";
import Recipe from "./components/Recipe";
import ComingSoon from "../src/images/ComingSoon.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Element name="recipe-section">
        <Card.Title className="mb-2 display-3 text-center">Recipes</Card.Title>
        <CardGroup className="d-flex justify-content-center">
          <Row className="justify-content-center">
            <Col sm={12} md={4}>
              <Recipe title="Recipe" image={ComingSoon} description="TBD" />
            </Col>
            <Col sm={12} md={4}>
              <Recipe title="Recipe" image={ComingSoon} description="TBD" />
            </Col>
            <Col sm={12} md={4}>
              <Recipe title="Recipe" image={ComingSoon} description="TBD" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md={4}>
              <Recipe title="Recipe" image={ComingSoon} description="TBD" />
            </Col>
            <Col sm={12} md={4}>
              <Recipe title="Recipe" image={ComingSoon} description="TBD" />
            </Col>
            <Col sm={12} md={4}>
              <Recipe title="Recipe" image={ComingSoon} description="TBD" />
            </Col>
          </Row>
        </CardGroup>{" "}
      </Element>
      <Footer />
    </div>
  );
}

export default App;
