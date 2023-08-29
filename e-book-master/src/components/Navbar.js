import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
function Navi() {
  var [st, setst] = useState(false);

  var [name, setname] = useState();

  useEffect(() => {
    var check = async () => {
      const auth = getAuth();
      const ussr = auth.currentUser;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setst(true);
          console.log("ussr" + ussr.displayName);
          console.log("user" + user);
          console.log("auth" + auth);
          setname(ussr.displayName);
          // ...
        } else {
          setst(false);
        }
      });
    };
    check();
  });

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="fixed-top">
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary NAV ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Ebook-Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {st ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/search">
                      Search
                    </Link>
                  </li>{" "}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <AccountCircleIcon style={{ fontSize: 40 }} />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item dropdown">Hello, {name}</li>
                      <li>
                        <Link className="dropdown-item" to="/User">
                          Profile
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/review">
                          Add Review
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
