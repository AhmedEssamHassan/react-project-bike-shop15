import React from "react";
import styled from "styled-components";
const Address = (props) => {
  const { address } = props;
  return (
    <div className="col-md-6 col-sm-12 d-flex justify-content-between ">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="text-light">{address.branch}</div>
        <div className="d-md-flex">
          <p className="pr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            voluptates tempora, veniam doloremque atque hic, deserunt debitis
            labore rerum sed quod neque minus quae vero.
          </p>
          <div>{address.map}</div>
        </div>
      </div>
    </div>
  );
};

export default Address;
