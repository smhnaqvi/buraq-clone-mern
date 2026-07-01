# buraq-clone-mern

Full-stack e-commerce clone (MERN) inspired by Buraq Official — storefront, admin dashboard, and REST API with JWT auth, Cloudinary image uploads, and Stripe-ready checkout.

**Status:** ✅ Version 1 complete and runnable · 🚧 Version 2 in planning

## Overview

The project is split into three independent apps that share one MongoDB-backed API:

| App | Path | Stack |
|---|---|---|
| Storefront | [`client/`](client) | Next.js 16, React 19, Zustand, Tailwind CSS v4 |
| Admin dashboard | [`admin/`](admin) | Vite, React 19, React Router 7, TanStack Query, Zustand, Tailwind CSS v4 |
| API server | [`server/`](server) | Express 5, MongoDB/Mongoose, JWT auth, Multer + Cloudinary |

## Features (v1)

- **Storefront** — home, category/collection browsing, product detail, search, cart, checkout, order history, login/register
- **Admin dashboard** — protected admin login, product CRUD with multi-image upload, category CRUD, order management with status updates
- **API** — JWT authentication (register/login/logout/me), product & category endpoints, order creation and lookup, Cloudinary-backed image storage, role-gated admin routes

## Getting started

### Prerequisites

- Node.js 18+
- A MongoDB instance (local or Atlas)
- A Cloudinary account (for image uploads)

### 1. Server (API)

```bash
cd server
cp .env.example .env   # fill in MONGODB_URI, JWT_SECRET, CLOUDINARY_*, etc.
npm install
npm run dev             # http://localhost:<PORT>
```

### 2. Admin dashboard

```bash
cd admin
cp .env.example .env    # set VITE_API_URL to the server's URL
npm install
npm run dev
```

### 3. Client (storefront)

```bash
cd client
# set NEXT_PUBLIC_API_URL / NEXT_PUBLIC_SITE_URL in .env
npm install
npm run dev
```

Each app is managed independently — there's no shared root workspace, so install/run commands must be run inside `server/`, `admin/`, and `client/` separately.

## Documentation

Build phase notes live in [`docs/`](docs), covering auth, catalog, storefront, cart/checkout, theming, and the admin dashboard.

## Roadmap

- [x] v1 — Auth, catalog, storefront, cart/checkout (COD), admin dashboard
- [ ] v2 — Live Stripe payment integration (order model already supports a `STRIPE` payment method), reviews/ratings, order analytics, and further UX polish

## License

See [LICENSE](LICENSE).
