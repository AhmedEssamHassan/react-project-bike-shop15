import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Rights className="row border text-capitalize ">
      <div className="col-12 text-center d-flex justify-content-center align-items-center">
        <p className="my-0 pr-2">powered by react</p>
        <ReactIcon
          className="react-icon"
          src="video-and-img/logo512.png"
          alt=""
        />
        <p className="m-0 ml-2">all rights reserved</p>
      </div>
    </Rights>
  );
};

export default Footer;

const Rights = styled.div`
  background: #48a277;
`;

const ReactIcon = styled.img`
  width: 20px;
  height: 20px;
`;
