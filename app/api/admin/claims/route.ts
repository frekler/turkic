import { NextRequest, NextResponse } from 'next/server';
import { db, schema } from '@/lib/db';
import { desc } from 'drizzle-orm';
import type { Claim } from '@/lib/db/schema';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

async function loadClaims(): Promise<Claim[]> {
  try {
    const claims = await db.select().from(schema.claims).orderBy(desc(schema.claims.timestamp));
    return claims;
  } catch (error) {
    console.error('Error loading claims from database:', error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  try {
    // Simple password authentication via query parameter
    const url = new URL(request.url);
    const password = url.searchParams.get('password');
    
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch claims from Redis
    const claims = await loadClaims();
    
    return NextResponse.json({
      claims: claims,
      total: claims.length
    });
  } catch (error) {
    console.error('Error fetching claims:', error);
    return NextResponse.json(
      { error: 'Failed to fetch claims' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { password, action, claim } = await request.json();
    
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (action === 'add' && claim) {
      // Insert new claim into database
      await db.insert(schema.claims).values(claim);
      
      console.log('=== ADMIN ADDED CLAIM ===');
      console.log('Name:', claim.name);
      console.log('Code:', claim.code);
      console.log('========================');
      
      return NextResponse.json({
        message: 'Claim added successfully.',
        claim
      });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in admin claims operation:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}