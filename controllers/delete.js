const User = require("../models/userSchema");

module.exports = async (req, res) => {
  try {
    const { Email, Password, AccountNo } = req.body;

    if (!Email|| !Password || ! AccountNo) {
      return res.json({ error: "Please fill all the above mentioned fields" });
    }

    // var resp = console.log("Do you want to delete your account? (yes/no) ", process.argv[2]);

    // if(resp === 'yes'){
    const userExist = await User.deleteOne({ Email: Email });

    console.log(userExist);
    res.json({ message: "user successfully deleted." });
    // }
  } catch (err) {
    console.log(err);
  }
};