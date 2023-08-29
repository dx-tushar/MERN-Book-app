import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Card from "./Card";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Search() {
  const auth = getAuth();
  const ussr = auth.currentUser;
  const navi = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      navi("/login");
    }
  });

  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = () => {
    var key = "AIzaSyBmzZ0doLEpp1A9dzX55EH2ThtefyZjtcU";

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q= " +
          search +
          "&key=AIzaSyBmzZ0doLEpp1A9dzX55EH2ThtefyZjtcU" +
          "&maxResults=10"
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        className="container-fluid header"
        style={{
          backgroundImage: "url(/b3.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="row1">
          <div className="container">
            <h1>
              <h1>
                A room without books is like
                <br /> a body without a soul.
              </h1>
            </h1>
          </div>
        </div>
        <br />
        <div className="container my-4">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              className="form-control"
              value={search}
              onInput={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary" onClick={searchBook}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="">{<Card book={bookData} />}</div>
    </div>
  );
}

export default Search;
