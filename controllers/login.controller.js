import { User } from "../models/Users.js";
import bcrypt from "bcryptjs";

// login logic
export const checkLogin = async (req, res) => {
  try {
    // get email and password
    const { email, password } = req.body;
    // get users and passwords
    const users = await User.findAll();
    const current_user = users.filter((e) => e.email === email);
    if (current_user.length != 0) {
      // compare
      const result = await bcrypt.compare(password, current_user[0].password);
      // handle result

      if (result) {
        // Passwords match, user is authenticated
        res.json({
          authentication: result,
          role: current_user[0].role,
          id: current_user[0].id,
        });
      } else {
        // Passwords don't match, authentication failed
        res.json({ authentication: result, status: false });
      }
      // Handle error
    } else {
      res.send("user doesn't exist");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("somethink went wrong: " + e);
  }
};
