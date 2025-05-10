# 🛒 Full Stack E-Commerce App (Next.js + NextAuth + PostgreSQL + Drizzle)

A full-featured e-commerce web application built with **Next.js** for both frontend and backend, powered by **NextAuth** for authentication (OAuth + Credentials), and backed by a **PostgreSQL** database using **Drizzle ORM** hosted on **Neon**.

This project is **ready-to-use**, modular, and easy to configure. Whether you want to use **mock data** for testing or connect it with **real products**, it's just a few steps away.

---

## 🔧 Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** Next.js (API Routes)
- **Authentication:** NextAuth.js (OAuth + Credentials)
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL (hosted on [Neon](https://neon.tech))
- **Styling:** TailwindCSS (optional depending on setup)
- **Deployment Ready:** Vercel / Docker / Custom hosting

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/amarmuric04/e-commerce-template.git
cd e-commerce-template
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Set Up Environment Variables

Create a `.env.local` file based on the provided `.env.example`:

``env
DATABASE_URL=postgresql://user:password@host/dbname
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (optional)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Push Schema to the Database

If using Drizzle with Neon:

```bash
npx drizzle-kit push
```

Alternatively, if you're using your own PostgreSQL setup, just make sure `DATABASE_URL` is set correctly and run the same command.

### 5. Use Mock or Real Data

You can choose to populate your database with mock data:

```bash
npm run seed
```

Or manually insert your own data via a GUI (like Neon dashboard) or SQL tool.

### 6. Start the App

```bash
npm run dev
# or
yarn dev
```

Visit **http://localhost:3000** to see it in action.

---

## 🧩 Features

- 🔐 **Authentication**
  - OAuth (Google, GitHub)
  - Email + Password (Credentials)
- 🗂️ **Reusable Components**
  - Product cards, cart modal, auth forms
- 📦 **E-Commerce Essentials**
  - Product listing, detail page
  - Cart functionality
  - Checkout skeleton (add your own payment provider)
- 🛠️ **Database Ready**
  - Drop-in schema support with Drizzle
  - Easily seed with mock data

---

## 🗃️ Database Setup (Drizzle + Neon)

Schema lives inside the `drizzle/schema` directory.

- Run migrations:
  ```bash
  npx drizzle-kit push
  ```
- Preview schema or explore your tables using Neon dashboard or `psql`.

---

## 🧪 Testing (Optional)

Coming soon: integration with Playwright and React Testing Library.

---

## 📦 Deployment

- [ ] Ready for Vercel out of the box
- [ ] Environment variables configured in the Vercel dashboard
- [ ] You can also deploy via Docker or any Node host

---

## 📁 Project Structure

``
/app               → Next.js App Router pages
/components        → UI components
/lib               → Utils (auth, db, helpers)
/drizzle           → ORM schema and config
/pages/api/auth    → NextAuth configuration
/public            → Static assets
/styles            → Global styles (optional)
``

---

## 🙋 FAQ

**Q: Can I use my own database?**  
Yes! As long as it’s PostgreSQL-compatible, just change `DATABASE_URL` and run `npx drizzle-kit push`.

**Q: How do I add products?**  
Either use the mock data seed script or use your own admin interface / direct SQL insert.

**Q: Can I add my own OAuth providers?**  
Yes, just update the `.env.local` and NextAuth config under `/pages/api/auth/[...nextauth].ts\`.

---

## 📬 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

MIT

---

Made with ❤️ using Next.js, Drizzle, and Neon.
