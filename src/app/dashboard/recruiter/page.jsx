'use client'
import React from 'react';
import { useSession, signOut } from "@/lib/auth-client";
import { 
  DocumentText, 
  Persons, 
  Lightning, 
  CircleCheck 
} from '@gravity-ui/icons';
import DashboardPage from '@/app/components/dashboard/DashboardStats';

const RecruiterDashboardPage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div>Loading...</div>;
    }
    const user = session?.user;

    const dashboardStats = [
    { id: "total-posts", title: "Total Job Posts", value: "48", icon: DocumentText },
    { id: "applicants", title: "Total Applicants", value: "1,284", icon: Persons },
    { id: "active", title: "Active Jobs", value: "18", icon: Lightning },
    { id: "closed", title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

    console.log("Session data in RecruiterDashboardPage:", session, "Is pending:", isPending);
    return (
        <div>
            <h2 className="text-2xl font-bold">Welcome back, {user?.name}!</h2>    
            <DashboardPage data={dashboardStats} />    
        </div>
    );
};

export default RecruiterDashboardPage;