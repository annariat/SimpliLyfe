import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Insert email into Supabase
    const { error } = await supabase
      .from('beta_signups')
      .insert([
        {
          email,
          signed_up_at: new Date().toISOString(),
        }
      ]);

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'Already signed up!' },
          { status: 200 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: 'Successfully signed up!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Beta signup error:', error);
    return NextResponse.json(
      { error: 'Failed to sign up' },
      { status: 500 }
    );
  }
}
