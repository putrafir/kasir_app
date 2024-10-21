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
import Swal from "sweetalert2";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?categories=" + this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?categories=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  masukKeranjang = (value) => {
    const keranjang = {
      jumlah: 1,
      total_harga: value.harga,
      product: value,
    };

    axios
      .post(API_URL + "keranjangs", keranjang)
      .then((res) => {
        Swal.fire({
          title: "Sukses!",
          text: keranjang.product.nama + "telah di tambahkan kek keranjang",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.menus);
    const { menus, categoriYangDipilih } = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-3">
          <Container fluid>
            {" "}
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                categoriYangDipilih={this.categoriYangDipilih}
              />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
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
