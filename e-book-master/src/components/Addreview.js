import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Addreview() {
  var [name, setname] = useState();
  const auth = getAuth();
  const ussr = auth.currentUser;
  const navi = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      navi("/login");
    } else {
      setname(user.displayName);
    }
  });
  var [data, setdata] = useState([]);

  var [title, settitle] = useState();
  var [area, setarea] = useState();
  var [msg, setmsg] = useState();
  var [st, setst] = useState(false);

  useEffect(() => {
    var fetchdata = async () => {
      var res = await axios.get("http://localhost:3000/testimonials");

      console.log(res.data);
      setdata(res.data);
    };
    fetchdata();
  }, [name]);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name);

    if (!(!name || !title || !area)) {
      setmsg("");
      setst(false);
      var dt = { Name: name, Title: title, Desc: area };
      axios
        .post("http://localhost:3000/testimonials", dt)
        .then((res) => console.log("done"))
        .catch((err) => console.log(err));
    } else {
      setmsg("fill all the fields");
      return;
    }
  }

  return (
    <div className="container-fluid addreview">
      <h1>
        {" "}
        <center className="p-4">Reviews</center>
      </h1>
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
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => setst(true)}
      >
        {" "}
        ADD YOUR REVIEW
      </button>
      {st ? (
        <div className="container mt-4">
          <h1 className="text-center">Add Your Testimonial</h1>
          <form>
            <div className="form-group">
              <label for="testimonial">Enter Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={ussr.displayName}
                onInput={(e) => setname(e.target.value)}
                disabled
              />
            </div>
            <div className="form-group">
              <label for="testimonial">Enter Title For Review</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => settitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="testimonial">Testimonial Text:</label>
              <textarea
                className="form-control"
                id="testimonial"
                name="testimonial"
                rows="4"
                required
                onInput={(e) => setarea(e.target.value)}
              ></textarea>
            </div>
            <h3 className="text-danger">{msg}</h3>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Addreview;
