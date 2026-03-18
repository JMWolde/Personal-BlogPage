# The Creative Domain

A full-stack personal blog platform for documenting creative and computer science projects, ideas, and work.

🔗 **Live Site:** [thecreativedomain.vercel.app](https://thecreativedomain.vercel.app)

---

## Tech Stack

- **Frontend:** Next.js, TypeScript, CSS
- **Backend & Database:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage (image uploads)
- **Deployment:** Vercel (CI/CD via GitHub)

---

## Features

- Create posts with text, images, or both
- Commenting system on posts
- Real-time data storage and retrieval via Supabase
- Cloud image storage and serving
- Automatic deployment on every GitHub push

---

## Running Locally

1. Clone the repo
```bash
git clone https://github.com/JMWolde/Personal-BlogPage.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

Built by [Joshua Mehreteab Wolde](https://github.com/JMWolde)