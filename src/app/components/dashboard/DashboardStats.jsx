"use client";
import React from 'react';
import StatsGrid from '@/components/StatsGrid'; // Update path if needed
import { 
  DocumentText, 
  Persons, 
  Lightning, 
  CircleCheck 
} from '@gravity-ui/icons';

export default function DashboardPage() {
  // Feed this exact structure to your updated component
  const dashboardStats = [
    { id: "total-posts", title: "Total Job Posts", value: "48", icon: DocumentText },
    { id: "applicants", title: "Total Applicants", value: "1,284", icon: Persons },
    { id: "active", title: "Active Jobs", value: "18", icon: Lightning },
    { id: "closed", title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  return (
    <div className="p-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-white mb-2">Overview</h1>
        
        {/* Render your grid by passing the data array */}
        <StatsGrid data={dashboardStats} />
        
      </div>
    </div>
  );
}