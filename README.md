# AEREX LLC — Website (MERN Stack)

A full MERN website for AEREX LLC (Sharjah, UAE) — HVAC, refrigeration, and climate equipment supplier.
Includes a public site (Home, About, Products catalog, Brands, Careers, Contact) and an admin panel
to manage products, categories, and job listings from MongoDB.

## Structure

```
aerex/
  backend/    Express + MongoDB API (Node, Mongoose, JWT auth, image uploads)
  frontend/   React + Vite site (public pages + /admin panel)
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
- `MONGO_URI` — your MongoDB connection string (local MongoDB or MongoDB Atlas free tier)
- `JWT_SECRET` — any long random string
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — credentials for the first admin account (used by the seed script)

Then seed the database with an admin account and starter categories:

```bash
npm run seed
```

Start the API:

```bash
npm run dev      # http://localhost:5000
```

## 2. Frontend setup

```bash
cd frontend
npm install
npm run dev       # http://localhost:5173
```

The Vite dev server proxies `/api` and `/uploads` requests to `http://localhost:5000`, so both
servers need to be running together during development.

## 3. Using the admin panel

Go to `http://localhost:5173/admin/login` and sign in with the email/password set in `.env`
(default in `.env.example`: `mohammed@aerexgroup.com` / `ChangeMe123!` — change this immediately
after first login by creating a new Admin document or updating the password directly).

From the admin panel you can:
- Add/edit/delete **Categories** (e.g. Air Conditioning Systems, Refrigerants, Chillers)
- Add/edit/delete **Products** — name, brand, category, description, specifications, and up to 6 images
- Add/edit/delete **Career / Job listings** shown on the public Careers page

Products and categories created in the admin panel appear immediately on the public site.

## 4. Contact & enquiries

There is no backend contact form by request — the Contact page and every product's "Enquire" button
link directly to:
- WhatsApp: `+971 54 508 7262`
- Email: `sales@aerexgroup.com`

## 5. Deployment notes

- **Backend**: deploy to any Node host (Render, Railway, a VPS) with a MongoDB Atlas database.
  Update `CLIENT_URL` in `.env` to your live frontend domain for CORS.
- **Frontend**: run `npm run build` in `frontend/`, then deploy the `dist/` folder to
  Vercel, Netlify, or your own static hosting. Update the API base URL (currently relying on the
  `/api` Vite proxy) to point at your deployed backend URL — e.g. add a `VITE_API_URL` env var and
  update `src/api/axios.js`'s `baseURL` accordingly for production.
- Uploaded product images are stored on disk under `backend/uploads/` and served at `/uploads/...`.
  For production, consider moving to a cloud storage bucket (S3, Cloudinary) for durability.

## 6. Brand reference

Colors and type are derived from the AEREX logo: navy (#0a1b3d), blue (#1b5fe0 → #3fa9f5 sweep),
and silver-grey accents. Display font: Sora. Body: IBM Plex Sans. Labels/specs: Space Mono.
