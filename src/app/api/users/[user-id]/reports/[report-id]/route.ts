import { NextResponse } from 'next/server';

interface RouteParams {
  params: {
    'user-id': string;
    'report-id': string;
  }
}

export async function GET(request: Request, { params }: RouteParams) {
  const userId = params['user-id'];
  const reportId = params['report-id'];

  // Mock data structure matching the number of reports and detail numbers from previous endpoints
  const mockReportDetails = {
    '1': {
      '1': { detail_numbers: ['1', '2', '3', '4', '5', '6', '7'] },
      '2': { detail_numbers: ['1.1', '1.5', '1.6', '1.7', '1.10', '1.12', '2.2', '3.3', '4.4', '5.5', '6.6', '7.7', '8.8', '9.9', '10'] },
      '3': { detail_numbers: ['1', 'k3', '2', 'k4', '5', '6', '7'] }
    },
    '2': {
      '1': { detail_numbers: Array.from({ length: 15 }, () => (Math.random() * 10).toFixed(1)) }
    },
    '3': {
      '1': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) },
      '2': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) },
      '3': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) },
      '4': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) },
      '5': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) },
      '6': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) },
      '7': { detail_numbers: Array.from({ length: 8 }, () => (Math.random() * 10).toFixed(1)) }
    },
    '4': {
      // User 4 has 10 reports with 20 detail numbers each
      ...Object.fromEntries(
        Array.from({ length: 10 }, (_, i) => [
          (i + 1).toString(),
          { detail_numbers: Array.from({ length: 20 }, () => (Math.random() * 10).toFixed(1)) }
        ])
      )
    },
    '5': {
      '1': { detail_numbers: ['1', '2', '3', '4', '5'] },
      '2': { detail_numbers: ['1', '1.1', '1.1.1', '1.2', '2', '3'] }
    },
    '6': {
      // User 6 has 5 reports with 12 detail numbers each
      ...Object.fromEntries(
        Array.from({ length: 5 }, (_, i) => [
          (i + 1).toString(),
          { detail_numbers: Array.from({ length: 12 }, () => (Math.random() * 10).toFixed(1)) }
        ])
      )
    },
    '7': {
      // User 7 has 4 reports with 10 detail numbers each
      ...Object.fromEntries(
        Array.from({ length: 4 }, (_, i) => [
          (i + 1).toString(),
          { detail_numbers: Array.from({ length: 10 }, () => (Math.random() * 10).toFixed(1)) }
        ])
      )
    }
  };

  // Check if user exists
  if (!mockReportDetails[userId as keyof typeof mockReportDetails]) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Check if report exists for user
  const userReports = mockReportDetails[userId as keyof typeof mockReportDetails];
  if (!userReports[reportId as keyof typeof userReports]) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 });
  }

  return NextResponse.json(userReports[reportId as keyof typeof userReports]);
}
