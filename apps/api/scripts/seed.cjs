const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/paletto";

async function upsertUser({ name, email, role, password, phoneNumber }) {
  const hash = await bcrypt.hash(password, 10);
  await mongoose.connection.db.collection("users").updateOne(
    { email },
    {
      $setOnInsert: {
        name,
        email,
        password: hash,
        role,
        phoneNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    { upsert: true }
  );
}

async function main() {
  await mongoose.connect(uri);
  await upsertUser({
    name: "Seed Artist",
    email: "artist@example.com",
    role: "artist",
    password: "secret123",
    phoneNumber: "1000000000",
  });
  await upsertUser({
    name: "Seed Customer",
    email: "customer@example.com",
    role: "customer",
    password: "secret123",
    phoneNumber: "1000000001",
  });
  console.log(
    "Seeded users: artist@example.com, customer@example.com (password: secret123)"
  );
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
