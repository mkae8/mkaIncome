import { DATABASE_URL } from "./constants.js";
import fs from "fs";

export const getDataBase = async () => {
  const resultJson = await fs.readFileSync(DATABASE_URL, "utf-8");
  const result = JSON.parse(resultJson);
  return result;
};
