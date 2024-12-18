'use client';
import { useEffect, useState } from "react";

interface Report {
  id: number;
  detail_numbers: number[];
}

interface User {
  id: number;
  name: string;
  num_reports: number;
  reports: Report[];
  start_date: string;
}

interface ReportDetails {
  detail_numbers: number[];
}

export default function Home() {
}
