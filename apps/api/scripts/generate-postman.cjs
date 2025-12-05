const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4000;
const baseUrl = `http://localhost:${PORT}`;

const collection = {
  info: {
    name: "Paletto API Auth",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    _postman_id: "paletto-auth-collection",
  },
  variable: [
    { key: "baseUrl", value: baseUrl },
    { key: "access_token", value: "" },
  ],
  item: [
    {
      name: "Register",
      request: {
        method: "POST",
        header: [{ key: "Content-Type", value: "application/json" }],
        url: {
          raw: "{{baseUrl}}/auth/register",
          host: ["{{baseUrl}}"],
          path: ["auth", "register"],
        },
        body: {
          mode: "raw",
          raw: JSON.stringify(
            {
              name: "Alice",
              email: "alice@example.com",
              password: "secret123",
              role: "artist",
            },
            null,
            2,
          ),
        },
      },
    },
    {
      name: "Login",
      request: {
        method: "POST",
        header: [{ key: "Content-Type", value: "application/json" }],
        url: {
          raw: "{{baseUrl}}/auth/login",
          host: ["{{baseUrl}}"],
          path: ["auth", "login"],
        },
        body: {
          mode: "raw",
          raw: JSON.stringify(
            {
              email: "alice@example.com",
              password: "secret123",
            },
            null,
            2,
          ),
        },
      },
    },
    {
      name: "Profile",
      request: {
        method: "GET",
        header: [
          { key: "Authorization", value: "Bearer {{access_token}}" },
          { key: "Content-Type", value: "application/json" },
        ],
        url: {
          raw: "{{baseUrl}}/auth/profile",
          host: ["{{baseUrl}}"],
          path: ["auth", "profile"],
        },
      },
    },
  ],
};

const outDir = path.join(process.cwd(), "postman");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "auth.collection.json");
fs.writeFileSync(outPath, JSON.stringify(collection, null, 2));
console.log(`Postman collection written to ${outPath}`);
