import axios from "axios";
import React, { useEffect, useState } from "react";
import TCard from "./TCard";

const Home = () => {
  const randomNumber = Math.floor(Math.random() * 11);
  var [quo, setQuo] = useState();
  var [name, setname] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/quotes");
        console.log("In the home page");
        console.log(response.data[randomNumber].quote);
        setQuo(response.data[randomNumber].quote);
        console.log("after setting");
        console.log(response.data[randomNumber].name);
        setname(response.data[randomNumber].name);
        console.log("done");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="container-fluid homecont"
        style={{
          backgroundImage: "url(/log.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="row p-3">
          <div className="col-md-7">
            <h6 style={{ fontSize: "4rem", color: "black" }}> "{quo}"</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 offset-md-3">
            <h3 style={{ fontSize: "2rem", color: "black" }}>- {name}</h3>
          </div>
        </div>
      </div>

      <div className="container mt-1 p-2">
        <h2 className="">Top Engineering Books </h2>
        <TCard />
      </div>
    </>
  );
};

export default Home;
