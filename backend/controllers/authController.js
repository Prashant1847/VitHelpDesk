const User = require('../models/User');
const Admin = require('../models/Admin');

exports.signup = async (req, res) => {
  try {
    const { name, email, password, registrationNumber } = req.body;

    // Check if user already exists
    console.log(name, email, password, registrationNumber);
    const existingUser = await User.findOne({ 
      $or: [{ email }, { registrationNumber }] 
    });

    if (existingUser) {
      return res.status(400).json({
        message: existingUser.email === email 
          ? 'Email already registered' 
          : 'Registration number already exists'
      });
    }
    console.log(name, email, password, registrationNumber);
    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      registrationNumber
    });

    // Send response
    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        registrationNumber: user.registrationNumber
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    // Check if user exists
    const user = await User.findOne({ email, password });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Send response
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        registrationNumber: user.registrationNumber
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Send response
    res.json({
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
}; 