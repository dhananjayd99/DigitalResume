"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { subject: 'Power BI', A: 90, fullMark: 100 },
    { subject: 'Python', A: 80, fullMark: 100 },
    { subject: 'SQL', A: 85, fullMark: 100 },
    { subject: 'Data Science', A: 80, fullMark: 100 },
    { subject: 'Machine Learning', A: 75, fullMark: 100 },
    { subject: 'Process Auto', A: 85, fullMark: 100 },
];

export default function SkillsChart() {
    return (
        <div className="w-full h-[400px] bg-gray-50 dark:bg-gray-900 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid strokeOpacity={0.2} className="dark:stroke-gray-500" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} className="dark:text-gray-400" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
                    />
                    <Radar
                        name="Proficiency"
                        dataKey="A"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.5}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
