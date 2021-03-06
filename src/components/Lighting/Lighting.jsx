import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
import ProductItem from "../ProductItem/ProductItem";

class Lighting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CategoryPageContainer className="">
        <CategoryPageWrapper className="container  p-3">
          <CategoryPageRow className="row ">
            <ProductConsumer>
              {(val) => {
                const { lights } = val;
                return lights.map((item) => {
                  const { type, img, price, desc, id } = item;
                  return (
                    <ProductItem
                      type={type}
                      img={img}
                      price={price}
                      desc={desc}
                      id={id}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </CategoryPageRow>
        </CategoryPageWrapper>
      </CategoryPageContainer>
    );
  }
}

export default Lighting;

const CategoryPageContainer = styled.div`
  background: #0a0a23;
`;

const CategoryPageWrapper = styled.div``;

const CategoryPageRow = styled.div``;
