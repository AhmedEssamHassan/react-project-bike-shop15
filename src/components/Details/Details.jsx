import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";

class Details extends React.Component {
  render() {
    return (
      <DetailsContainer className="container-fluid py-5 ">
        <DetailsWrapper className="row container-fluid mx-auto ">
          <ImgsWrapper className="border mt-3 py-5 rounded col-md-5 text-light d-flex flex-column justify-content-around py-2">
            <ProductConsumer>
              {(val) => {
                const { detailsImg } = val;
                return (
                  <div className="d-flex justify-content-center align-items-center">
                    <Img src={detailsImg} className="rounded" alt="product" />
                  </div>
                );
              }}
            </ProductConsumer>
            <DefrentColors className="d-flex justify-content-around border rounded mt-2 py-2">
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
            </DefrentColors>
          </ImgsWrapper>
          <div className="col-md-7 text-light mt-3">
            <div className="d-flex flex-column justify-content-around h-100 border rounded px-3 py-5">
              <div className=" h-25 d-flex justify-content-center align-items-center">
                <ProductConsumer>
                  {(val) => {
                    const { detailsType } = val;
                    return (
                      <h3 className="border-bottom text-center text-capitalize px-2 pb-2 mb-2">
                        {detailsType}
                      </h3>
                    );
                  }}
                </ProductConsumer>
              </div>
              <div className="">
                <ProductConsumer>
                  {(val) => {
                    const { detailsDesc } = val;
                    return <p>{detailsDesc}</p>;
                  }}
                </ProductConsumer>
              </div>
              <div className=" d-flex container-fluid justify-content-center align-items-center align-self-center w-75 h-25">
                <div className="row w-100 py-3 ">
                  <div className="col-sm-12">
                    <ProductConsumer>
                      {(val) => {
                        const { detailsPrice } = val;
                        return (
                          <h3 className="text-center m-0 text-capitalize">
                            price: ${detailsPrice.toFixed(2)}
                          </h3>
                        );
                      }}
                    </ProductConsumer>
                  </div>
                  <div className="col-sm-12 text-center d-flex justify-content-center mt-2">
                    <button className="button rounded text-capitalize d-flex justify-content-center align-items-center">
                      <p className="mr-2 mb-0">add to cart</p>
                      <i
                        className="fa fa-cart-plus"
                        aria-hidden="true"
                      ></i>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DetailsWrapper>
      </DetailsContainer>
    );
  }
}

export default Details;

const DetailsContainer = styled.div`
  background: #0a0a23;
`;

const DetailsWrapper = styled.div`
  height: auto;
`;

const ImgsWrapper = styled.div``;

const Img = styled.img`
  width: 70%;
  height: auto;
`;

const DefrentColors = styled.div`
  max-width: 100% !important;
  overflow: auto;
`;

const ImgColor = styled.img`
  width: 100px;
  height: auto;
`;
/* 
      <ProductConsumer>
        {(val) => {
          const { detailsId } = val;
          return <p>{detailsId}</p>;
        }}
      </ProductConsumer> */
