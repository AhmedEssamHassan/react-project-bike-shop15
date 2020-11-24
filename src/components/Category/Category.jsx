import React from "react";
import styled from "styled-components";
import "./CategoryStyle.css";
import { Link } from "react-router-dom";
class Category extends React.Component {
  state = {};
  render() {
    const { name, picture, icon, path } = this.props.catg;
    return (
      <CategoryWrapper className="col-md-6 col-lg-4 my-5 px-3">
        <CatgContainer className="catgContainer rounded">
          <CatgImg src={picture} alt="" />
          <CatgTitile className="container-fluid catgTitile py-3 d-flex align-items-center justify-content-center">
            <div className="row d-flex justify-content-center">
              <h5 className="text col-12 text-center">go to</h5>
              <Text className="col-12 d-flex justify-content-center text-capitalize text-light">
                {name}
              </Text>
              <h3 className="text col-12 text-center">category</h3>
              <div className="w-60">
                <Link to={path}>
                  <Button className="text-light border rounded">
                    shop now {icon}
                  </Button>
                </Link>
              </div>
            </div>
          </CatgTitile>
        </CatgContainer>
        <Catgtext className="text-center font-weight-bold text-capitalize p-3 ">
          {name}
        </Catgtext>
      </CategoryWrapper>
    );
  }
}

export default Category;

const CategoryWrapper = styled.div`
  height: 15rem;
`;

const CatgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-top: 5px solid black;
  border-right: 5px solid black;
  border-left: 5px solid black;
`;

const CatgImg = styled.img`
  width: 100%;
  height: 100%;
`;
const CatgTitile = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(3, 78, 161, 0.9);
`;

const Text = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
`;

const Button = styled.button`
  background: #0a0a23;
  padding: 7px 25px;
  font-weight: 500;
  outline: none;
  border: none;
  width: 100%;
`;

const Catgtext = styled.p`
  border-bottom: 5px solid black;
  border-left: 5px solid black;
  border-right: 5px solid black;
  margin-bottom: 30px;
  color: black;
  background: #8fb2db;
`;
