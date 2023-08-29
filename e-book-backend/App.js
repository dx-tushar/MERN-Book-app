var mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors"); //////cross origin resource sharing
app.set("view engine", "ejs");
var User = require("./user");
var Review = require("./review");

const PORT = process.env.PORT || 3000;
///////this file is bacckend for

app.use(express.json()); //////cross origin resource sharing
app.use(cors()); //////cross origin resource sharing
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/E-BOOK", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  });

app.post("/users", async (req, res) => {
  try {
    const lastUser = await User.findOne().sort({ id: -1 }); // Find the user with the highest id
    const newId = lastUser ? lastUser.Uid + 1 : 1; // Increment last id or start from 1
    console.log(newId);
    const newUser = new User({
      Uid: newId,
      Name: req.body.Name,
      Email: req.body.Email,
      Bio: req.body.Bio,
      Gender: req.body.Gender,
      Mobile: req.body.Mobile,
      Type: req.body.Type,
      Status: req.body.status,
    });
    console.log(newUser);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extract id from the request parameters

    // Find the user by id and update the fields
    const updatedUser = await User.findByIdAndUpdate(id, {
      Name: req.body.Name,
      Email: req.body.Email,
      Bio: req.body.Bio,
      Gender: req.body.Gender,
      Mobile: req.body.Mobile,
      Type: req.body.Type,
      Status: req.body.status,
    });

    console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/testimonials", async function (req, res) {
  try {
    const users = await Review.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/testimonials", async function (req, res) {
  console.log(req.body);
  const Newreview = new Review({
    Name: req.body.Name,
    Title: req.body.Title,
    Desc: req.body.Desc,
  });

  console.log(Newreview);
  await Newreview.save();
  res.status(201).json(Newreview);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
