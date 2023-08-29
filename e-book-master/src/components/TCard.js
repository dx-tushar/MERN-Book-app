import React from "react";
import { Link } from "react-router-dom";

const TCard = () => {
  return (
    <div className="row  my-3">
      <div className="col-md-3">
        <div className="card carddata" style={{ width: "18rem" }}>
          <img
            src="images/book/java.png"
            className="card-img-top "
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Java Programming</h5>
            <p className="card-text">
              Java Programming Language From Basic To Advance Level. Learn
            </p>
            <button className="btn btn-info">
              <Link className="linkWithoutUnderline" to="">
                {" "}
                More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/book/database.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Database</h5>
            <p className="card-text">Learn DBMS From Basic To Advance Level.</p>
            <button className="btn btn-info">
              <Link
                className="linkWithoutUnderline"
                to="https://mrcet.com/downloads/digital_notes/ECE/III%20Year/DATABASE%20MANAGEMENT%20SYSTEMS.pdf"
              >
                More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/book/python.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Python</h5>
            <p className="card-text">
              Learn Python. Beginner Friendly all Things needed is there in pdf
              book mentioned. Download and gain knowledge.
            </p>
            <button className="btn btn-info">
              <Link
                className="linkWithoutUnderline"
                to="https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf"
              >
                {" "}
                More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/book/os.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Operating System</h5>
            <p className="card-text">
              Learn the concepts of Operating Systems From Basic To Advance
              Level. Learn OS From This PDF Book.{" "}
            </p>
            <button className="btn btn-info">
              <Link
                className="linkWithoutUnderline"
                to="https://repository.dinus.ac.id/docs/ajar/Operating_System.pdf"
              >
                {" "}
                More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
