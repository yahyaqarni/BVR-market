import dbPool from "@/lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        address,
        marketplaceName,
        district,
        state,
        ta,
      } = req.body;

      // Check if passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }

      // Check if password is empty
      if (!password || password.trim() === '') {
        return res.status(400).json({ error: "Password cannot be empty" });
      }

      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Insert user data into the Users table
      const userInsertResult = await dbPool.promise().query(
        "INSERT INTO users (firstName, lastName, email, password, ta, role) VALUES (?, ?, ?, ?, ?)",
        [firstName, lastName, email, hashedPassword, ta, "user"]
      );

      const userId = userInsertResult[0].insertId;

      // Insert address data into the Addresses table
      await dbPool.promise().query(
        "INSERT INTO marketplace (userId, address, marketplaceName, district, state) VALUES (?, ?, ?, ?, ?, ?)",
        [userId, address, marketplaceName, district, state]
      );

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error inserting user:", error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}


