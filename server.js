const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // Let Next.js handle everything
  server.use((req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`> Server running on http://localhost:${PORT}`);
  });
});