import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../../Context";
import Category from "../../Category/Category";
import { Link } from "react-router-dom";

class ClothesCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CategoriesWrapper className="py-5 border">
        <div className="container p-3">
          <div className="row d-flex justify-content-center text-capitalize">
            <h1 className="text-light border-bottom">categories</h1>
          </div>
          <CategoriesContainer className="row">
            <ProductConsumer>
              {(val) => {
                const { clothes } = val;
                return clothes.map((catg) => {
                  return <Category key={catg.id} catg={catg} />;
                });
              }}
            </ProductConsumer>
          </CategoriesContainer>
        </div>
      </CategoriesWrapper>
    );
  }
}

export default ClothesCategory;

const CategoriesWrapper = styled.div`
  background-color: #0a0a23 !important;
  height: auto;
`;

const CategoriesContainer = styled.div`
  height: 100%;
`;
