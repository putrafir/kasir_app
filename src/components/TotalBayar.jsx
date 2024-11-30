import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constans";
import { useNavigate } from "react-router-dom";

const TotalBayar = ({ keranjangs }) => {
  const navigate = useNavigate();

  const submitTotalBayar = (TotalBayar) => {
    const pesanan = {
      keranjang_ids: keranjangs.map((keranjang) => keranjang.id),
      total_bayar: TotalBayar,
      menus: keranjangs,
    };

    axios
      .post(API_URL + "pesanans", pesanan)
      .then((res) => {
        navigate("/success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const TotalBayar = keranjangs.reduce((result, item) => {
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
            onClick={() => submitTotalBayar(TotalBayar)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TotalBayar;
