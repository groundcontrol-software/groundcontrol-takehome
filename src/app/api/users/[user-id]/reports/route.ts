import { NextResponse } from 'next/server';

interface RouteParams {
  params: {
    'user-id': string;
  }
}

export async function GET(request: Request, { params }: RouteParams) {
  // Get the user ID from the URL
  const userId = params['user-id'];

  // This would normally fetch from a database
  // Using the same data structure from our users endpoint for consistency
  const mockUserReports: any = {
    1: Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 7 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
    2: Array.from({ length: 1 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 15 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
    3: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 8 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
    4: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 20 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
    5: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 5 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
    6: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 12 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
    7: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      detail_numbers: Array.from({ length: 10 }, () => Number((Math.random() * 10).toFixed(1)))
    })),
  };

  // Check if user exists in our mock data
  if (!mockUserReports[userId as any]) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(mockUserReports[userId as any]);
}
