import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
import ProductItem from "../ProductItem/ProductItem";

class ChildCategory extends React.Component {
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
                const { child } = val;
                return child.map((item) => {
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

export default ChildCategory;

const CategoryPageContainer = styled.div`
  background: #0a0a23;
`;

const CategoryPageWrapper = styled.div``;

const CategoryPageRow = styled.div``;

const CategoryPageItem = styled.div`
  height: 25rem;
  position: relative;
  overflow: hidden;
  eidth: 90%;
`;

const Bottom = styled.div`
  height: 30%;
`;

const ImgWrapper = styled.div`
  height: 70%;
`;

const Img = styled.img`
  height: 100%;
  border: none;
`;

const Add = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(20, 78, 153, 0.843);
  position: absolute;
  top: 30rem;
  left: 0;
`;

const Text = styled.h2`
  color: #0a0a23;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 70px;
  border: 1px;
`;

const Button = styled.button`
  background: #0a0a23;
  outline: none !important;
`;
