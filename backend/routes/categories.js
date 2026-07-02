import express from "express";
import Category from "../models/Category.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

const toSlug = (str) =>
  str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// GET /api/categories
router.get("/", async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
});

// POST /api/categories (admin)
router.post("/", protect, async (req, res) => {
  try {
    const { name, description } = req.body;
    const slug = toSlug(name);
    const category = await Category.create({ name, slug, description });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/categories/:id (admin)
router.put("/:id", protect, async (req, res) => {
  try {
    const { name, description } = req.body;
    const update = { description };
    if (name) {
      update.name = name;
      update.slug = toSlug(name);
    }
    const category = await Category.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/categories/:id (admin)
router.delete("/:id", protect, async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
});

export default router;
