import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();



const app = express();


// using cors
app.use(cors());



// Route
app.get("/", (req, res) => {
  res.send("You are at the Home Page");
});


// Route
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 2,
      setup: "What do you call fake spaghetti?",
      punchline: "An impasta!",
    },
    {
      id: 3,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      id: 4,
      setup: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese!",
    },
    {
      id: 5,
      setup: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!",
    },
  ];
  res.send(jokes);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port https://localhost:${PORT}`);
});
