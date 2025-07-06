// app/api/setup/route.ts

import { NextResponse } from 'next/server';
import getOrCreateDB from '@/models/server/dbSetup';
import getOrCreateStorage from '@/models/server/storageSetup';

export async function GET() {
  await getOrCreateDB();
  await getOrCreateStorage();
  return NextResponse.json({ message: "Setup complete" });
}

