const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.userId);
      res.json(user);
  } catch (error) {
      res.status(404).json({ message: 'User not found' });
  }
};

exports.getUsers = async (req, res) => {
  try {
      const users = await User.find({});
      res.json(users);
  } catch (error) {
      res.status(404).json({ message: 'User not found' });
  }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
