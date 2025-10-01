import { config } from '@/consts';

export async function GET() {
  try {
    // Check if API is enabled
    if (!config.dailyUpdatesApi.enabled || !config.dailyUpdatesApi.url) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Fetch from the configured API endpoint
    const headers = config.dailyUpdatesApi.apiKey ? {
      'Authorization': `Bearer ${config.dailyUpdatesApi.apiKey}`,
      'Content-Type': 'application/json'
    } : {
      'Content-Type': 'application/json'
    };

    const response = await fetch(config.dailyUpdatesApi.url, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      console.error('Failed to fetch daily updates from API:', response.status, response.statusText);
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const apiData = await response.json();
    
    return new Response(JSON.stringify(apiData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error in daily-status API route:', error);
    
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}