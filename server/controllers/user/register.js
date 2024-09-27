import { DATABASE_URL } from "../../utils/constants.js ";
import { v4 as uuid } from "uuid"; // {}
import hash from "bcrypt"; // export default NAME --> iim eer zarlasan duriin name deer avch bolno

import fs from "fs";
import { getDataBase } from "../../utils/helper.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body; // app.use(express.json()) ene bgaa bolhoor req.body oruulj chadna

  const result = await getDataBase();

  const isUserExisting = result.users.find((el) => el.email === email); //find n ehleed olood shuud zogsdog

  if (isUserExisting) {
    res.status(400).send("Already registered");
    return;
  }

  const hashedPassword = hash.hashSync(password, 10);
  const userId = uuid();
  const createdAt = new Date();
  const updatedAt = new Date();

  result.users.push({
    userId,
    username,
    email,
    password: hashedPassword,
    createdAt,
    updatedAt,
  });
  await fs.writeFileSync(DATABASE_URL, JSON.stringify(result), "utf-8");

  res.send({ message: "Successfully registered" }).status(201);
};
