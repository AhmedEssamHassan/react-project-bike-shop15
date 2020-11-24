import React from "react";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <Contact className="container-fluid border-top pt-5 text-light">
      <div className="row">
        <div className="col-md-4 d-flex flex-column">
          <h3 className="logo text-capitalize">logo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dignissimos reprehenderit nesciunt debitis veniam placeat
            consectetur quibusdam voluptates sunt eligendi ex aliquam porro
            illum iure molestiae, quasi ad, sapiente suscipit?
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column mb-3">
          <h3 className="text-capitalize">contact us</h3>
          <form>
            <input type="email" placeholder="email" />
            <textarea
              className="mt-2"
              cols="32"
              rows="3"
              placeholder="send us a message"
            ></textarea>
            <Button className="btn-block w-50 border rounded text-light py-2 text-capitalize">
              submit
            </Button>
          </form>
        </div>
        <div className="col-md-4 d-flex flex-column">
          <h3 className="text-capitalize">follow us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            laudantium dolorem illum dolore blanditiis adipisci sit
            reprehenderit corporis reiciendis porro!
          </p>
          <div className="d-flex justify-content-between w-50">
            <Twitter href="#">
              <I className="fa fa-twitter-square" aria-hidden="true"></I>
            </Twitter>
            <FaceBook href="#">
              <I className="fa fa-facebook-square" aria-hidden="true"></I>
            </FaceBook>
            <Insta href="#">
              <I className="fa fa-instagram" aria-hidden="true"></I>
            </Insta>
            <Youtube href="#">
              <I className="fa fa-youtube-square" aria-hidden="true"></I>
            </Youtube>
          </div>
        </div>
      </div>
    </Contact>
  );
};

export default ContactUs;
const I = styled.i`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Contact = styled.div`
  background: #0f0f0f;
`;

const Twitter = styled.a`
  color: #24a1f2;
`;
const FaceBook = styled.a`
  color: #4267b2;
`;
const Insta = styled.a`
  color: #e1306c;
`;
const Youtube = styled.a`
  color: #ff0000;
`;

const Button = styled.button`
  background-color: #034ea1;
  outline: none;
`;
