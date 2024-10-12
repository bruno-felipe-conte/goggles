const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/search", async (req, res) => {
  const { query } = req.query;
  const API_KEY =
    "f187d4f4ccf17f020be84ccc299f947900a25f6c4486adb6555744a07b117dfc";
  try {
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        q: query,
        engine: "google",
        google_domain: "google.it",
        api_key: API_KEY,
        hl: "it",
        gl: "it",
        num: 10,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar resultados" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy rodando na porta ${PORT}`);
});
