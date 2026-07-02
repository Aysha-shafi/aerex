import express from "express";
import Job from "../models/Job.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// GET /api/jobs (public: only open ones unless admin query)
router.get("/", async (req, res) => {
  const { all } = req.query;
  const query = all === "true" ? {} : { isOpen: true };
  const jobs = await Job.find(query).sort({ createdAt: -1 });
  res.json(jobs);
});

// GET /api/jobs/:id
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

// POST /api/jobs (admin)
router.post("/", protect, async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/jobs/:id (admin)
router.put("/:id", protect, async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/jobs/:id (admin)
router.delete("/:id", protect, async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
});

export default router;
