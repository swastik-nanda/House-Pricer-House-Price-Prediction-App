const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const isPasswordStrong = require("../utils/passwordStrength.js");

exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    if (!isPasswordStrong(password)) {
      return res.status(400).json({ message: "Password is too weak" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const userInfo = {
      id: result._id,
      fullName: result.fullName,
      email: result.email,
    };

    res
      .status(201)
      .json({ message: "Registration successful", result: userInfo, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const userInfo = {
      id: existingUser._id,
      fullName: existingUser.fullName,
      email: existingUser.email,
    };

    res
      .status(200)
      .json({ message: "Login successful", result: userInfo, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
