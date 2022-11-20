import React from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { IoWaterOutline } from "react-icons/io5";
import { Container } from "react-bootstrap";

const Carousel = () => {
  return (
    <Container>
      <CCarousel controls indicators dark>
      <CCarouselItem>
          <div class="py-3" />
          <div className="row">
            <div className="col">
              <CImage
                className="mx-auto d-block h-10"
                src={"https://img.icons8.com/plasticine/512/plastic.png"}
                alt="slide 1"
              />
            </div>
            <div className="col">
              <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                Lorem ipsum dolor sit amet, cconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div class="py-3" />
          <div className="row">
            <div className="col">
              <CImage
                className="mx-auto d-block h-10"
                src={"https://img.icons8.com/plasticine/512/plastic.png"}
                alt="slide 1"
              />
            </div>
            <div className="col">
              <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div class="py-3" />
          <div className="row">
            <div className="col">
              <CImage
                className="mx-auto d-block h-10"
                src={"https://img.icons8.com/plasticine/512/plastic.png"}
                alt="slide 1"
              />
            </div>
            <div className="col">
              <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        
      </CCarousel>
    </Container>
  );
};

export default Carousel;
