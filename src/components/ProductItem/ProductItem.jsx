import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";

const ProductItem = (props) => {
  const { type, img, price, desc, id } = props;
  return (
    <div key={id} className="col-sm-6 col-lg-4">
      <CategoryPageItem className="item border rounded my-3 p-3 container">
        <ImgWrapper className="row ">
          <Img src={img} alt="" className="col-12" />
        </ImgWrapper>
        <Bottom className="row text-light py-2">
          <p className="col-12 text-capitalize text-center p-0 ">{type}</p>
          <h2 className="col-12  text-center p-0">${price.toFixed(2)}</h2>
        </Bottom>
        <Add className="add d-flex flex-column justify-content-center align-items-center">
          <Text className="text-capitalize text-light font-weight-bold">
            good choice
          </Text>
          <IconWrapper className="position-relative">
            <i
              className="shop-icon display-4 fa fa-cart-arrow-down text-success"
              aria-hidden="true"
            ></i>
          </IconWrapper>
          <ProductConsumer>
            {(val) => {
              const {
                setDetailsImg,
                setDetailsType,
                setDetailsDesc,
                setDetailsPrice,
              } = val;
              return (
                <div className="d-flex flex-column mt-5 align-items-center justify-content-around w-100">
                  <Link
                    to="/details"
                    className=" mb-4"
                    onClick={() => {
                      setDetailsType(id);
                      setDetailsImg(id);
                      setDetailsDesc(id);
                      setDetailsPrice(id);
                    }}
                  >
                    <Button className="px-3 py-2 border rounded text-light d-flex justify-content-center align-items-center">
                      <p className="my-0 mr-2 text-capitalize font-weight-bold">
                        go to details{" "}
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                      </p>
                    </Button>
                  </Link>
                  <Link to="/cart">
                    <Button className="px-3 py-2 border rounded text-light d-flex justify-content-center align-items-center">
                      <p className="my-0 mr-2 text-capitalize font-weight-bold">
                        add to cart{" "}
                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      </p>
                    </Button>
                  </Link>
                </div>
              );
            }}
          </ProductConsumer>
          {/*  */}
        </Add>
      </CategoryPageItem>
    </div>
  );
};

export default ProductItem;

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
  &:hover {
    color: #50a847 !important;
  }
`;
