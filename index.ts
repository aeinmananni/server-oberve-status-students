import express  from "express";
import "dotenv-safe/config";
const app = express();














const port = process.env.PORT || 3030;

app.listen(port ,()=> console.log(`Listening On Port : ${port}`));
