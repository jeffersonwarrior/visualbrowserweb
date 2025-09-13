import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { emailSignups } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'homepage' } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSignup = await db
      .select()
      .from(emailSignups)
      .where(eq(emailSignups.email, email))
      .limit(1);

    if (existingSignup.length > 0) {
      return NextResponse.json(
        { message: 'Email already registered for early access!' },
        { status: 200 }
      );
    }

    // Insert new signup
    await db.insert(emailSignups).values({
      email,
      source,
    });

    return NextResponse.json(
      { message: 'Successfully registered for early access!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Email signup error:', error);
    return NextResponse.json(
      { error: 'Failed to register email. Please try again.' },
      { status: 500 }
    );
  }
}