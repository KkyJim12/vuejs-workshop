const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/register", (req, res) => {
    const user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save();
    res.send(user);
  });

  app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const login = User.find({
      email: email
    });
    if (login.countDocuments() == 1) {
      if (login.password == password) {
        let token = jwt.sign({ userID: login._id }, "secret");
        res.send({ status: "success", token: token });
      } else {
        res.send({ status: "password wrong" });
      }
    } else {
      res.send({ status: "email wrong" });
    }
  });
};
