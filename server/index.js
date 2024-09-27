import express from "express";
import cors from "cors";
import env from "dotenv";
import { userRouter } from "./routers/user.js";
env.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/", userRouter);

// api/user n chinii domain neg server deer bhd hereg bolno

//pinecone.mn/api  [<--- backend]

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
