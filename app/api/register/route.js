import dbPool from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req){
  
    try {
        const body = await req.json();
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
      } = body;

      // Check if passwords match
      if (password !== confirmPassword) {
        return Response.json({ error: "Passwords do not match" });
      }

    
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Insert user data into the Users table
      const userInsertResult = await dbPool.promise().query(
        "INSERT INTO users (firstName, lastName, email, password, ta) VALUES (?, ?, ?, ?, ?)",
        [firstName, lastName, email, hashedPassword, ta]
      );

      const userId = userInsertResult[0].insertId;

      // Insert address data into the Addresses table
      await dbPool.promise().query(
        "INSERT INTO marketplace (name, location, userId, district, state) VALUES (?, ?, ?, ?, ?)",
        [marketplaceName, address, userId, district, state]
      );

      return Response.json({ success: true });
    } catch (error) {
      console.error("Error inserting user:", error);
      return Response.json({ error: "error:  " + error });
    }
  } 
  



