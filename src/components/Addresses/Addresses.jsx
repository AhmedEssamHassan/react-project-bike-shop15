import React from "react";
import styled from "styled-components";
import Address from "../Address/Address";
import { ProductConsumer } from "../../Context";
class Addresses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AdressesContainer className="border-top container-fluid py-4 ">
        <div className="row d-flex justify-content-center text-capitalize">
          <h1 className="text-light border-bottom">our branches</h1>
        </div>
        <div className="row py-4 ">
          <ProductConsumer>
            {(val) => {
              const { addresses } = val;
              return addresses.map((ad) => {
                return <Address key={ad.id} address={ad} />;
              });
            }}
          </ProductConsumer>
        </div>
      </AdressesContainer>
    );
  }
}

export default Addresses;

const AdressesContainer = styled.div`
  background: #0a0a23;
`;
