// // // pages/api/subscribe.js
// // import clientPromise from "@/lib/mongodb";

// // export default async function handler(req, res) {
// //   if (req.method !== "POST") {
// //     return res.status(405).json({ message: "Method Not Allowed" });
// //   }

// //   const { name, email } = req.body;

// //   if (!name || !email) {
// //     return res.status(400).json({ message: "Name and email are required" });
// //   }

// //   try {
// //     const client = await clientPromise;
// //     const db = client.db("clientData");
// //     const collection = db.collection("subscribers");

// //     const existing = await collection.findOne({ email });
// //     if (existing) {
// //       return res.status(409).json({ message: "Email already subscribed" });
// //     }

// //     await collection.insertOne({ name, email, createdAt: new Date() });

// //     return res.status(201).json({ message: "Successfully subscribed!" });
// //   } catch (error) {
// //     console.error("MongoDB Error:", error);
// //     return res.status(500).json({ message: "Internal server error" });
// //   }
// // }


// // lib/mysql.js

// // ============================================
// // pages/api/subscribe.js
// // ============================================

// import pool from "@/lib/mysql";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, email } = req.body;

//   if (!name || !email) {
//     return res.status(400).json({ message: "Name and email are required" });
//   }

//   let connection;

//   try {
//     connection = await pool.getConnection();

//     // Check if email already exists
//     const [rows] = await connection.query(
//       'SELECT email FROM subscribers WHERE email = ?',
//       [email]
//     );

//     if (rows.length > 0) {
//       return res.status(409).json({ message: "Email already subscribed" });
//     }

//     // Insert new subscriber
//     await connection.query(
//       'INSERT INTO subscribers (name, email, createdAt) VALUES (?, ?, NOW())',
//       [name, email]
//     );

//     return res.status(201).json({ message: "Successfully subscribed!" });
//   } catch (error) {
//     console.error("MySQL Error:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   } finally {
//     if (connection) connection.release();
//   }
// }