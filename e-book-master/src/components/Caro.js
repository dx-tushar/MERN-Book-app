import React from "react";

function Caro() {
  return (
    <div
      style={{
        height: "70vh",
        overflow: "hidden",
        position: "relative",

        borderBottomLeftRadius: "25px",
        borderRadius: "25px",
      }}
    >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "100%" }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src="Images/home/b7.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "100%" }}
            />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="Images/home/b6.jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "100%" }}
            />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="Images/home/b8.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "100%" }}
            />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="Images/home/b9.jpg"
              className="d-block w-100"
              alt="Slide 4"
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Caro;
