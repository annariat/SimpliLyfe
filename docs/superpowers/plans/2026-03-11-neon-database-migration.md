# Neon Database Migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Supabase with Neon serverless PostgreSQL as the database backend.

**Architecture:** Swap `@supabase/supabase-js` SDK for `@neondatabase/serverless` driver. The Neon driver exposes a `neon()` tagged-template function that sends SQL over HTTP — ideal for Vercel serverless functions. One shared `sql` instance is exported from `lib/db.ts` and used by both API routes.

**Tech Stack:** Next.js 16, `@neondatabase/serverless`, Neon PostgreSQL

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `lib/db.ts` | Create | Export shared Neon `sql` tagged-template client |
| `lib/supabase.ts` | Delete | Old Supabase client (replaced by `lib/db.ts`) |
| `app/api/beta-signup/route.ts` | Modify | Use `sql` for beta_signups insert |
| `app/api/contact/route.ts` | Modify | Use `sql` for contact_messages insert |
| `package.json` | Modify | Swap dependencies |
| `.env.local` | Modify | Replace Supabase vars with `DATABASE_URL` |

---

## Chunk 1: Database Setup and Migration

### Task 1: User creates Neon database and tables

This task is performed by the user in the Neon console (not in code).

- [ ] **Step 1: Create a new Neon project/database**

In the Neon console (console.neon.tech):
1. Create a new project (or use existing)
2. Copy the connection string — it looks like: `postgresql://user:pass@ep-xxx.region.aws.neon.tech/dbname?sslmode=require`

- [ ] **Step 2: Run SQL to create tables**

In the Neon SQL Editor, run:

```sql
CREATE TABLE beta_signups (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  signed_up_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

- [ ] **Step 3: Verify tables exist**

Run in Neon SQL Editor:
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
```
Expected: Both `beta_signups` and `contact_messages` appear.

---

### Task 2: Swap dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install Neon driver and remove Supabase SDK**

Run:
```bash
npm install @neondatabase/serverless && npm uninstall @supabase/supabase-js
```

- [ ] **Step 2: Verify package.json**

Confirm `@neondatabase/serverless` is in dependencies and `@supabase/supabase-js` is gone.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: swap supabase SDK for neon serverless driver"
```

---

### Task 3: Create Neon database client

**Files:**
- Create: `lib/db.ts`
- Delete: `lib/supabase.ts`

- [ ] **Step 1: Create `lib/db.ts`**

```typescript
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL!);
```

- [ ] **Step 2: Delete `lib/supabase.ts`**

```bash
rm lib/supabase.ts
```

- [ ] **Step 3: Commit**

```bash
git add lib/db.ts lib/supabase.ts
git commit -m "feat: add neon database client, remove supabase client"
```

---

### Task 4: Update beta-signup API route

**Files:**
- Modify: `app/api/beta-signup/route.ts`

- [ ] **Step 1: Rewrite route to use Neon SQL**

Replace the full contents of `app/api/beta-signup/route.ts` with:

```typescript
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO beta_signups (email, signed_up_at)
      VALUES (${email}, NOW())
    `;

    return NextResponse.json(
      { message: 'Successfully signed up!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Handle duplicate email (PostgreSQL unique violation)
    if (
      error instanceof Error &&
      'code' in error &&
      (error as Record<string, unknown>).code === '23505'
    ) {
      return NextResponse.json(
        { message: 'Already signed up!' },
        { status: 200 }
      );
    }
    console.error('Beta signup error:', error);
    return NextResponse.json(
      { error: 'Failed to sign up' },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/api/beta-signup/route.ts
git commit -m "feat: migrate beta-signup route to neon"
```

---

### Task 5: Update contact API route

**Files:**
- Modify: `app/api/contact/route.ts`

- [ ] **Step 1: Rewrite route to use Neon SQL**

Replace the full contents of `app/api/contact/route.ts` with:

```typescript
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO contact_messages (name, email, message, sent_at)
      VALUES (${name}, ${email}, ${message}, NOW())
    `;

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "feat: migrate contact route to neon"
```

---

### Task 6: Update environment variables

**Files:**
- Modify: `.env.local`

- [ ] **Step 1: Replace `.env.local` contents**

Replace with:
```
DATABASE_URL="postgresql://user:pass@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"
```

(Use the actual connection string from Neon console, Task 1 Step 1.)

- [ ] **Step 2: Verify build**

Run:
```bash
npm run build
```
Expected: Build succeeds with no import errors referencing supabase.

- [ ] **Step 3: Verify dev server**

Run:
```bash
npm run dev
```
Test both forms manually:
1. Submit a beta signup email → should get "Successfully signed up!"
2. Submit the contact form → should get "Message sent successfully!"
3. Submit the same beta email again → should get "Already signed up!"

- [ ] **Step 4: Commit**

```bash
git add .env.local
git commit -m "chore: switch env vars from supabase to neon DATABASE_URL"
```

---

### Task 7: Update Vercel environment variables

- [ ] **Step 1: Add DATABASE_URL to Vercel**

In Vercel dashboard (or via CLI):
```bash
vercel env add DATABASE_URL
```
Paste the Neon connection string when prompted. Add for Production, Preview, and Development environments.

- [ ] **Step 2: Remove old Supabase env vars from Vercel**

Remove `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from Vercel environment variables.

- [ ] **Step 3: Redeploy**

```bash
vercel --prod
```
Or push to trigger automatic deployment.
