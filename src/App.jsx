import React, { Component } from "react";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";

import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponents } from "./components";
import { API_URL } from "./utils/constans";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.menus);
    const { menus } = this.state;
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
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
