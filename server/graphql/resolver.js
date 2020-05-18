const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = {
  async register({ user: { firstName, secondName, city, email, password } }) {
    const candidate = await User.findOne({ email });
    if (candidate) throw new Error("Email is already in use");
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      firstName,
      secondName,
      city,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      return user;
    } catch (e) {
      throw new Error(`Mongoose ${e}`);
    }
  },

  async login({ login: { email, password } }) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      const passwordResult = bcrypt.compareSync(password, candidate.password);
      if (passwordResult) {
        return candidate;
      } else throw new Error("Password is wrong");
    } else throw new Error("Email is wrong");
  },
};
