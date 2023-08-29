import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navi from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Addreview from "./components/Addreview";
import UserDeatils from "./components/UserDeatils";
import ProtectedProfile from "./components/ProtectedProfile";

function App() {
  return (
    <div className="conatiner">
      <Navi />

      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedProfile>
                <UserDeatils />
              </ProtectedProfile>
            }
          ></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />}></Route>

          <Route path="/review" element={<Addreview />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
