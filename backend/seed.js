import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Admin from "./models/Admin.js";
import Category from "./models/Category.js";
import mongoose from "mongoose";

dotenv.config();

const run = async () => {
  await connectDB();

  const email = process.env.ADMIN_EMAIL || "admin@aerexgroup.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";

  const existing = await Admin.findOne({ email });
  if (!existing) {
    await Admin.create({ name: "AEREX Admin", email, password });
    console.log(`Admin created: ${email} / ${password}`);
  } else {
    console.log("Admin already exists:", email);
  }

  const categories = [
    { name: "Air Conditioning Systems", slug: "air-conditioning-systems" },
    { name: "Refrigerants", slug: "refrigerants" },
    { name: "Ventilation & Fans", slug: "ventilation-fans" },
    { name: "Chillers", slug: "chillers" },
    { name: "Spare Parts & Accessories", slug: "spare-parts-accessories" },
  ];

  for (const c of categories) {
    const exists = await Category.findOne({ slug: c.slug });
    if (!exists) await Category.create(c);
  }
  console.log("Categories seeded.");

  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
