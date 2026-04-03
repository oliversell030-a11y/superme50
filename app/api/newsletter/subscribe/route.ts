import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(BREVO_LIST_ID, 10)],
        updateEnabled: false,
      }),
    });

    if (!brevoResponse.ok && brevoResponse.status !== 400) {
      const errorData = await brevoResponse.json().catch(() => null);
      if (brevoResponse.status === 400 && errorData?.message?.includes('already exist')) {
        return NextResponse.json({ success: true, message: 'Bereits angemeldet.' });
      }

      return NextResponse.json(
        { error: 'Etwas hat nicht geklappt. Bitte versuche es erneut.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Danke. Du erhältst gleich eine Bestätigungs-E-Mail.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Etwas hat nicht geklappt. Bitte versuche es erneut.' },
      { status: 500 }
    );
  }
}
