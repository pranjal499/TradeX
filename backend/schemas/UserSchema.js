// Requireing dependencies:
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User schema:
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    // unique: true,
  },
  username: {
    type: String,
    // required: [true, "Your username is required"],
  },
  password: {
    type: String,
    // required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Incripting password:
UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

// Exporting module:
// module.exports = mongoose.model("User", userSchema);
module.exports = {UserSchema};