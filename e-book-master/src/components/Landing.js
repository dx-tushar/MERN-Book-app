import React, { useEffect, useState } from "react";
import axios from "axios";
import Caro from "./Caro";

function Landing() {
  var [data, setdata] = useState([]);

  useEffect(() => {
    var fetchdata = async () => {
      var res = await axios.get("http://localhost:3000/testimonials");

      setdata(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="container-fluid mar">
      <div className="conatiner-fluid text-center">
        <div class="jumbotron">
          <h1 class="display-4">Discover the World of E-Books</h1>
          <p class="lead">
            Unlock the Knowledge with Our Exclusive Collection of E-books
          </p>
        </div>
      </div>
      <Caro />

      {/* ------------------------------ */}
      <hr />
      <h1> Testimonials</h1>
      <div className="container apidata">
        <div className="row">
          {data.map((item) => (
            <div className="card cardt" style={{ width: "19rem" }}>
              <img
                src="images/book/man.png"
                className="card-img-top imgbd"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-text">{item.Name}</h5>
                <h5 className="card-title">{item.Title}</h5>

                <p className="card-text">{item.Desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
