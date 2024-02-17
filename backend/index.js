import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "eab5e01f-8422-40a1-a373-b69a1f3da291" } }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      return res.status(500).json({ error: "No response received from the server" });
    } else {
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
