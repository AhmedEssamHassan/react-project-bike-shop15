import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Addresses from "../Addresses/Addresses";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Categories />
        <Addresses />
      </React.Fragment>
    );
  }
}

export default Home;
