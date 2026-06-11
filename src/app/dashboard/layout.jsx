import React from 'react';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <DashboardSidebar/>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DashboardLayout;