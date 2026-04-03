/**
 * Autofix Example — Let Copilot Fix Security Vulnerabilities!
 *
 * This file contains security issues that Copilot Autofix can detect and fix.
 * Enable GitHub Code Scanning (CodeQL) on this repo, then:
 *   1. Go to Security → Code scanning alerts
 *   2. Click on an alert
 *   3. Hit "Generate fix" to see Copilot propose a secure fix
 *
 * Issues in this file:
 *   - SQL injection via string concatenation
 *   - Reflected XSS via unsanitized user input
 *   - Path traversal vulnerability
 *   - Hardcoded credentials (demo only — never do this in real code!)
 */

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());

// ❌ VULNERABILITY: Hardcoded credentials
// Copilot Autofix will flag this and suggest using environment variables.
const DB_PASSWORD = "supersecret123";
const API_KEY = "sk-abc123hardcoded";

/**
 * ❌ VULNERABILITY: SQL Injection
 * User input is concatenated directly into the query string.
 * Copilot Autofix suggests using parameterized queries instead.
 */
function getUserByName(db, username) {
  // UNSAFE: attacker can pass username = "' OR '1'='1"
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  return db.query(query);
}

/**
 * ❌ VULNERABILITY: Reflected Cross-Site Scripting (XSS)
 * User-controlled data is written directly into the HTML response.
 * Copilot Autofix suggests escaping output with a library like `he`.
 */
app.get("/search", (req, res) => {
  const query = req.query.q;
  // UNSAFE: if query = "<script>alert('xss')</script>", it executes in the browser
  res.send(`
    <html>
      <body>
        <h1>Search Results for: ${query}</h1>
      </body>
    </html>
  `);
});

/**
 * ❌ VULNERABILITY: Path Traversal
 * An attacker can read arbitrary files by passing "../../../etc/passwd"
 * as the filename parameter.
 * Copilot Autofix suggests validating and normalizing the path.
 */
app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  // UNSAFE: no validation that filename stays within the intended directory
  const filePath = path.join(__dirname, "uploads", filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.send(data);
  });
});

/**
 * ❌ VULNERABILITY: Open Redirect
 * User-supplied URL is used directly in a redirect without validation.
 */
app.get("/redirect", (req, res) => {
  const target = req.query.url;
  // UNSAFE: attacker can redirect users to a phishing site
  res.redirect(target);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log(`Using API key: ${API_KEY}`); // Also a bad idea!
});

module.exports = { getUserByName };
