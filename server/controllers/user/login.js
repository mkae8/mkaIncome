import fs from "fs";
import { getDataBase } from "../../utils/helper.js";
import bcrypt from "bcrypt";

export const login = async (res, req) => {
  const { email, password } = req.body;
  const dataBase = await getDataBase();

  const isUserExisting = dataBase.users.find((el) => el.email === email);

  if (!isUserExisting) {
    res.send("Email not registered").status(400);
    return;
  }
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     res.send("Password or email not matched").status(400);
  //     return;
  //   }
};
