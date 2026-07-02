import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = express.Router();

const signToken = (admin) =>
  jwt.sign({ id: admin._id, email: admin.email, name: admin.name }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email?.toLowerCase() });
    if (!admin) return res.status(401).json({ message: "Invalid email or password" });

    const match = await admin.comparePassword(password);
    if (!match) return res.status(401).json({ message: "Invalid email or password" });

    const token = signToken(admin);
    res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
