import { NextResponse } from 'next/server';

let requestCount = 0;

export async function GET() {

  
  // TODO: Remove me before pushing to git!
  // Added to make sure we're properly handling surprise teapots
  requestCount++;
  if (requestCount % 4 === 0) {
    return NextResponse.json([{ "message": "Success!" }], { status: 418 });
  }

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      num_reports: 3,
      reports: [
        {
          id: 1,
          detail_numbers: [1, 1.5, 2, 3.1, 4, 4.5, 5]
        },
        {
          id: 2,
          detail_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          id: 3,
          detail_numbers: [1.1, 1.2, 2.1, 3, 4.5, 5, 6.7]
        }
      ],
      start_date: "2023-08-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      num_reports: 1,
      reports: [
        {
          id: 1,
          detail_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }
      ],
      start_date: "2024-01-01"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      num_reports: 7,
      reports: Array.from({ length: 7 }, (_, i) => ({
        id: i + 1,
        detail_numbers: Array.from({ length: 8 }, () => Number((Math.random() * 10).toFixed(1)))
      })),
      start_date: "2023-05-20"
    },
    {
      id: 4,
      name: "Emma Wilson",
      num_reports: 10,
      reports: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        detail_numbers: Array.from({ length: 20 }, () => Number((Math.random() * 15).toFixed(1)))
      })),
      start_date: "2023-03-10"
    },
    {
      id: 5,
      name: "David Kim",
      num_reports: 2,
      reports: [
        {
          id: 1,
          detail_numbers: [1, 2, 3, 4, 5]
        },
        {
          id: 2,
          detail_numbers: [1.5, 2.5, 3.5, 4.5, 5.5, 6.5]
        }
      ],
      start_date: "2024-02-01"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      num_reports: 5,
      reports: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        detail_numbers: Array.from({ length: 12 }, () => Number((Math.random() * 8).toFixed(1)))
      })),
      start_date: "2023-11-15"
    },
    {
      id: 7,
      name: "James Anderson",
      num_reports: 4,
      reports: Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        detail_numbers: Array.from({ length: 10 }, () => Number((Math.random() * 12).toFixed(1)))
      })),
      start_date: "2023-07-01"
    }
  ];

  return NextResponse.json(users);
}
