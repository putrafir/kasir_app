import React, { Component } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constans";

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("categories: ", this.state.categories);

    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
          <hr />
        </h4>
      </Col>
    );
  }
}
