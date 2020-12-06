let User = require('../models/user.model');

module.exports = {
  
  createUser (req, res) {
    // const username = req.body.username;
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      birthday: req.body.birthday,
      phone: req.body.phone,
      subscribe: req.body.subscribe
    });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err));
  },

  getUsers (req, res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
  },

  deleteUser (req, res) {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted'))
    .catch(err => res.status(400).json('Error:' + err));
  },
}