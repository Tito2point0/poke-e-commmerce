"use strict"; // Enforces strict mode

import { createServer } from "http"; // Import createServer from http
import next from "next"; // Import Next.js

// Environment and port setup
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create the server
  createServer((req, res) => {
    handle(req, res);
  }).listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
});
