const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");

const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://martin:Password123@users-app.xzkmc3s.mongodb.net/userlist?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id
await UserModel.findByIdAndRemove(id).exec()
res.send("item deleted")
});


app.listen(3001, () => {
  console.log("server runs");
});
