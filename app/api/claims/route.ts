import { NextRequest, NextResponse } from 'next/server';
import { db, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';

function generateUniqueCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function isCodeUnique(code: string): Promise<boolean> {
  try {
    const existing = await db.select().from(schema.claims).where(eq(schema.claims.code, code)).limit(1);
    return existing.length === 0;
  } catch (error) {
    console.error('Error checking code uniqueness:', error);
    return true; // Assume unique if we can't check
  }
}

export async function POST(request: NextRequest) {
  console.log('Claims API called');
  try {
    const { name } = await request.json();
    console.log('Received name:', name);

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: 'Name is too long' },
        { status: 400 }
      );
    }

    let code: string;
    let attempts = 0;
    do {
      code = generateUniqueCode();
      attempts++;
      if (attempts > 100) {
        throw new Error('Unable to generate unique code');
      }
    } while (!(await isCodeUnique(code)));

    const newClaim = {
      id: `claim-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
      name: trimmedName,
      code,
      timestamp: Date.now(),
    };

    await db.insert(schema.claims).values(newClaim);

    console.log('=== CLAIM SAVED TO DATABASE ===');
    console.log('Name:', newClaim.name);
    console.log('Code:', newClaim.code);
    console.log('===============================');

    return NextResponse.json({ 
      code: newClaim.code,
      message: 'Claim created successfully' 
    });
  } catch (error) {
    console.error('Error creating claim:', error);
    return NextResponse.json(
      { error: 'Failed to create claim' },
      { status: 500 }
    );
  }
}