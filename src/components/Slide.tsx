import React from "react";
import "./Slide.css";
interface Props {
  menuval: number;
}
function Slide() {
  const images = Array.from(
    document.getElementsByClassName(
      "carousel-inner"
    ) as HTMLCollectionOf<HTMLElement>
  );
  images.forEach((image) => {
    image.style.borderRadius = "30px";
    image.style.height = "405px";
  });
  // if (image) {
  //   image.style.borderRadius = "30px";
  // }
  // if (menuval == 1) {
  //   console.log("..");
  // }

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div id="carouselid" className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="src/assets/slide1.jpg"
              className="d-block w-100 "
              alt="..."
            ></img>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="src/assets/slide2.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="src/assets/slide3.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="src/assets/bsnl.jpg"
              className="d-block w-100"
              alt="..."
              // style={{ height: "405px", borderRadius: "50px" }}
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slide;
