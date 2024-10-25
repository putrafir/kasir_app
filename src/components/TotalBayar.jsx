import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constans";

export default class TotalBayar extends Component {
  submitTotalBayar = (TotalBayar) => {
    const pesanan = {
      total_bayar: TotalBayar,
      menus: this.props.keranjangs,
    };

    console.log("Request data:", pesanan);

    axios
      .post(API_URL + "pesanans", pesanan)
      .then((res) => {
        this.props.history.push("/success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total harga :
              <strong className="float-right">
                Rp. {numberWithCommas(TotalBayar)}
              </strong>
            </h4>
            <Button
              variant="primary"
              block
              className="mb-2 mt-4 mr-2"
              size="lg"
              onClick={() => this.submitTotalBayar(TotalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
