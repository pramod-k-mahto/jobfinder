const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
mongoose.connect("mongodb://localhost:27017/job", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Data base is connected ")
const userSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  Cpassword: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});
async function myToken() {
  userSchema.methods.createToken = async function () {
    const token = jwt.sign(
      { _id: this._id },
      "aajflakjhfkfjhlkjsfhfhajkhfakjfhfhklajfhkjfhkajhfhfjfajlkafjkjshbfjhbkjrgbskjgbksjbalfjafkj"
    );
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  };
}
myToken();

const userModel = mongoose.model("User-data", userSchema);

module.exports = userModel;
