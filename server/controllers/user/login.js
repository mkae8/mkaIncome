import { getDataBase } from "../../utils/helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const login = async (req, res) => {
  const { email, password } = req.body;
  const dataBase = await getDataBase();

  const isUserExisting = dataBase.users.find((el) => el.email === email);

  if (!isUserExisting) {
    return res.status(400).send({ message: "Email not registered" });
  }

  const isMatch = await bcrypt.compare(password, isUserExisting.password);
  if (!isMatch) {
    return res.status(400).send({ message: "Email or password is wrong" });
  }

  const token = jwt.sign(
    { userId: isUserExisting.userId },
    process.env.SECRET,
    {
      expiresIn: "1d",
    }
  );

  return res
    .status(200)
    .send({ message: "Successfully logged in", token: token });
};
