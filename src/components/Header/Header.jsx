import React from "react";
import styled from "styled-components";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <VideoContainer className="">
          <Video
            src="video-and-img/header-vedio.mp4"
            autoPlay
            loop
            muted
            type="video/mp4"
          >
            your prowser dose not support the video tag
          </Video>
        </VideoContainer>
      </HeaderContainer>
      <HeaderTitle className="text-light row">
        <h1 className="col-12 text-capitalize bg">
          you've got no <span>limits</span>
        </h1>
        <div className="col-8 mt-3 p-fixed d-flex justify-content-start text-capitalize">
          <button className="button rounded d-flex align-items-center">
            <p className="m-0 p-0">shop now</p>
            <i className="fa fa-cart-arrow-down d-none" aria-hidden="true"></i>
          </button>
        </div>
      </HeaderTitle>
    </React.Fragment>
  );
};

export default Header;

const HeaderContainer = styled.div`
  z-index: -2;
  position: relative;
`;

const VideoContainer = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  background: #0a0a23;
`;

const Video = styled.video`
  position: fixed !important;
  width: 100%;
  height: auto;
  top: -50px;
`;

const HeaderTitle = styled.div`
  position: fixed;
  top: 60%;
  left: 7%;
  z-index: -1;
  font-family: "Secular One", sans-serif;
`;
