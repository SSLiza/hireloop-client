"use client";
import React from 'react';
import { Card } from '@heroui/react';

// Individual Card Component using HeroUI v3 Compound Pattern
function StatCard({ title, value, icon: Icon }) {
  return (
    <Card className="bg-[#121212] border border-[#232323] rounded-xl shadow-sm w-full">
      {/* Card.Content replaces CardBody in v3 */}
      <Card.Content className="p-6 flex flex-col gap-5 justify-between">
        
        {/* Icon Wrapper */}
        <div className="w-10 h-10 flex items-center justify-center bg-[#212121] text-zinc-400 rounded-lg border border-[#2d2d2d]">
          {Icon && <Icon className="w-5 h-5" />}
        </div>

        {/* Content Section using HeroUI v3 Title and Description utilities */}
        <div className="flex flex-col gap-1">
          <Card.Description className="text-xs font-medium text-zinc-400 tracking-wide m-0">
            {title}
          </Card.Description>
          <Card.Title className="text-2xl font-semibold text-white tracking-tight m-0">
            {value}
          </Card.Title>
        </div>

      </Card.Content>
    </Card>
  );
}

// Main Reusable Grid Component that accepts fed data
export default function StatsGrid({ data = [] }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {data.map((item, index) => (
        <StatCard
          key={item.id || index}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
}