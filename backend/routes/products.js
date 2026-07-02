import express from "express";
import Product from "../models/Product.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

const toSlug = (str) =>
  str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now().toString(36);

// GET /api/products?category=slug&search=&featured=true&page=1&limit=12
router.get("/", async (req, res) => {
  try {
    const { category, search, featured, page = 1, limit = 12 } = req.query;
    const query = {};

    if (category) {
      const Category = (await import("../models/Category.js")).default;
      const cat = await Category.findOne({ slug: category });
      if (cat) query.category = cat._id;
      else return res.json({ products: [], total: 0, page: 1, pages: 0 });
    }
    if (featured) query.featured = featured === "true";
    if (search) query.$text = { $search: search };

    const skip = (Number(page) - 1) * Number(limit);
    const [products, total] = await Promise.all([
      Product.find(query).populate("category", "name slug").sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Product.countDocuments(query),
    ]);

    res.json({ products, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/products/:slug
router.get("/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate("category", "name slug");
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST /api/products (admin)
router.post("/", protect, upload.array("images", 6), async (req, res) => {
  try {
    const { name, brand, category, shortDescription, description, featured, inStock } = req.body;
    let specifications = [];
    if (req.body.specifications) {
      specifications = JSON.parse(req.body.specifications);
    }
    const images = (req.files || []).map((f) => `/uploads/${f.filename}`);

    const product = await Product.create({
      name,
      slug: toSlug(name),
      brand,
      category,
      shortDescription,
      description,
      specifications,
      images,
      featured: featured === "true" || featured === true,
      inStock: inStock !== "false",
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/products/:id (admin)
router.put("/:id", protect, upload.array("images", 6), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { name, brand, category, shortDescription, description, featured, inStock } = req.body;
    if (name) {
      product.name = name;
    }
    if (brand !== undefined) product.brand = brand;
    if (category) product.category = category;
    if (shortDescription !== undefined) product.shortDescription = shortDescription;
    if (description !== undefined) product.description = description;
    if (req.body.specifications) product.specifications = JSON.parse(req.body.specifications);
    if (featured !== undefined) product.featured = featured === "true" || featured === true;
    if (inStock !== undefined) product.inStock = inStock === "true" || inStock === true;

    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((f) => `/uploads/${f.filename}`);
      product.images = [...product.images, ...newImages];
    }

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/products/:id (admin)
router.delete("/:id", protect, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
