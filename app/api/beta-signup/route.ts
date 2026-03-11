import { NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const sql = getSQL();
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
