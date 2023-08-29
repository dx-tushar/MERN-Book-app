import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function UserDeatils() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [data, setData] = useState([]);
  var [st, setst] = useState(true);

  //there are the variable for fields
  var [id, setid] = useState("");
  var [bio, setBio] = useState("");
  var [gender, setGender] = useState("");
  var [mobile, setMobile] = useState("");
  var [type, setType] = useState("user");
  var [message, setMessage] = useState("");

  //for fetching user details
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        setEmail(user.email);
      } else {
        // Redirect to login page or handle authentication state
        console.log("loguntnnnn");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //this use state is called to fetch data of user for futher edit operations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        const filteredData = res.data.filter((item) => item.Email === email);
        if (filteredData.length === 0) {
          console.log("user data dont exist");
        } else {
          setData(filteredData);
          console.log(filteredData);
          setid(filteredData[0]._id);
          setBio(filteredData[0].Bio);
          setGender(filteredData[0].Gender);
          setMobile(filteredData[0].Mobile);
          setType(filteredData[0].Type);

          console.log("printing ------" + data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [email]);

  //submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(id);
    setMessage("");
    if (id !== "") {
      //If an id is present

      console.log("here");
      setst(true);
      var newUser = {
        uid: id,
        Name: name,
        Email: email,
        Bio: bio,
        Gender: gender,
        Mobile: mobile,
        Type: type,
        status: "done",
      };

      console.log("updating data..");

      await axios.put("http://localhost:3000/users/" + id, newUser);

      const res = await axios.get("http://localhost:3000/users");
      const filteredData = res.data.filter((item) => item.Email === email);
      setData(filteredData);
    }
    //If no id is present (indicating that the user is creating a new profile), the function follows this path:
    else {
      if (
        name === "" ||
        email === "" ||
        bio === "" ||
        gender === "" ||
        mobile === "" ||
        type === ""
      ) {
        setMessage("field req");
        return;
      }

      console.log("on submit button click");

      var newUser = {
        uid: "",
        Name: name,
        Email: email,
        Bio: bio,
        Gender: gender,
        Mobile: mobile,
        Type: type,
        status: "done",
      };
      console.log(newUser);

      try {
        await axios
          .post("http://localhost:3000/users", newUser)
          .then(console.log("done"));
        const res = await axios.get("http://localhost:3000/users");
        const filteredData = res.data.filter((item) => item.Email === email);
        if (filteredData.length === 0) {
          console.log("user data dont exist");
        } else {
          setData(filteredData);
          console.log("done data");
          setst(true);
          setid("");
          setBio("");
          setGender("");
          setType("");
          setMobile("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //this function called when edit button click to change name or other details
  const editButton = async () => {
    setst(false);
    console.log("in edit mode");
    const res = await axios.get("http://localhost:3000/users");
    const filteredData = res.data.filter((item) => item.Email === email);
    if (filteredData.length === 0) {
      console.log("user data dont exist");
    } else {
      setData(filteredData);
      console.log(filteredData);
      setid(filteredData[0]._id);
      setBio(filteredData[0].Bio);
      setGender(filteredData[0].Gender);
      setMobile(filteredData[0].Mobile);
      setType(filteredData[0].Type);

      console.log(data);
    }
  };

  return (
    <div className="container profilecont">
      <div className="row">
        <div className="col-md-4">
          <h1>Your Profile</h1>
        </div>
        <div className="col-md-1 offset-md-7 p-1">
          <button className="btn btn-outline-info" onClick={() => editButton()}>
            Edit
          </button>
        </div>
      </div>
      {st ? (
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan={1}>
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
              </td>
              <td colSpan={5}>
                <label htmlFor="name" className="form-label">
                  {name}
                </label>
              </td>
            </tr>

            <tr>
              <td colSpan={1}>
                <label htmlFor="name" className="form-label">
                  Email:
                </label>
              </td>
              <td colSpan={5}>
                <label htmlFor="name" className="form-label">
                  {email}
                </label>
              </td>
            </tr>

            {/* Display additional data from the fetched 'data' array */}
            {data.map((item) => (
              <>
                <tr key={item.id}>
                  <td colSpan={1}>
                    <label htmlFor="name" className="form-label">
                      Bio:
                    </label>
                  </td>
                  <td colSpan={5}>
                    <label htmlFor="name" className="form-label">
                      {item.Bio}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="name" className="form-label">
                      Gender:
                    </label>
                  </td>
                  <td colSpan={5}>
                    <label htmlFor="name" className="form-label">
                      {item.Gender}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="name" className="form-label">
                      Mobile No:
                    </label>
                  </td>
                  <td colSpan={5}>
                    <label htmlFor="name" className="form-label">
                      {item.Mobile}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={0}>
                    <label htmlFor="name" className="form-label">
                      Type:
                    </label>
                  </td>
                  <td colSpan={5}>
                    <label htmlFor="name" className="form-label">
                      {item.Type}
                    </label>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      ) : (
        //this space is visible when user is new on website and he will enter data first time
        <div>
          <form onSubmit={handleSubmit} className="p-2">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                className="form-control"
                id="bio"
                rows="3"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="user"
                  value="user"
                  checked={type === "user"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="user">
                  User
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="author"
                  value="author"
                  checked={type === "author"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="author">
                  Author
                </label>
              </div>
            </div>
            <h3 className="text-danger">{message}</h3>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserDeatils;
