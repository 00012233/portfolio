'use client';

import { motion } from 'framer-motion';

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  size?: number;
  thickness?: number;
}

export default function DonutChart({ data, size = 180, thickness = 28 }: DonutChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let cumulative = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((d, i) => {
          const segment = (d.value / total) * circumference;
          const offset = (cumulative / total) * circumference;
          cumulative += d.value;
          const dashArray = `${segment} ${circumference - segment}`;
          return (
            <motion.circle
              key={i}
              cx={center} cy={center} r={radius}
              fill="none" stroke={d.color}
              strokeWidth={thickness}
              strokeDasharray={dashArray}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${center} ${center})`}
              initial={{ opacity: 0, strokeDasharray: `0 ${circumference}` }}
              whileInView={{ opacity: 1, strokeDasharray: dashArray }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
            />
          );
        })}
        {/* Center text */}
        <text x={center} y={center - 6} textAnchor="middle" className="text-lg font-bold" fill="#2E3A34">
          {total.toLocaleString()}
        </text>
        <text x={center} y={center + 12} textAnchor="middle" className="text-[10px]" fill="#8FA398">
          Total
        </text>
      </svg>
      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-2 justify-center">
        {data.map((d, i) => (
          <span key={i} className="text-xs text-text-secondary flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
            <span>{d.label} ({((d.value / total) * 100).toFixed(0)}%)</span>
          </span>
        ))}
      </div>
    </div>
  );
}
