import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";

import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Hasil, ListCategories, NavbarComponents } from "./components";

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <div className="mt-3">
        <Container fluid>
          {" "}
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
