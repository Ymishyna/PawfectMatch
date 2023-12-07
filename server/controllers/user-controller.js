// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async newPet({ vendor, body }, res) {
    console.log(vendor);
    try {
      const updatedVendor = await Vendor.findOneAndUpdate(
        { _id: vendor._id },
        { $addToSet: { pets: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedVendor);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }, 

  async deletePet({ vendor, params }, res) {
    const updatedVendor = await User.findOneAndUpdate(
      { _id: vendor._id },
      { $pull: { pets: { petId: params.petId } } },
      { new: true }
    );
    if (!updatedVendor) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedVendor);
  },
};
