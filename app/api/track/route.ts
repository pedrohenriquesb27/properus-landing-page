import { NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const {
      client_id,
      url,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      vid,
      src,
      sck,
    } = body;

    const eventData = {
      timestamp: new Date().toISOString(),
      client_id: client_id || 'prosperus_main',
      url: url || '',
      referrer: referrer || '',
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_content: utm_content || null,
      vid: vid || null,
      src: src || null,
      sck: sck || null,
      user_agent: request.headers.get('user-agent') || '',
    };

    console.log('[PROSPERUS PIXEL TRACKING EVENT]:', eventData);

    return NextResponse.json(
      {
        success: true,
        message: 'Visita registrada com sucesso',
        tracking_id: 'trk_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now(),
        data: eventData,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Erro ao registrar acesso' },
      {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const eventData = {
    timestamp: new Date().toISOString(),
    client_id: searchParams.get('client_id') || 'prosperus_main',
    url: searchParams.get('url') || '',
    referrer: searchParams.get('referrer') || '',
    utm_source: searchParams.get('utm_source'),
    utm_medium: searchParams.get('utm_medium'),
    utm_campaign: searchParams.get('utm_campaign'),
    utm_content: searchParams.get('utm_content'),
    vid: searchParams.get('vid'),
    src: searchParams.get('src'),
    sck: searchParams.get('sck'),
  };

  return NextResponse.json(
    {
      success: true,
      message: 'Visita registrada via GET',
      tracking_id: 'trk_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now(),
      data: eventData,
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
    }
  );
}
