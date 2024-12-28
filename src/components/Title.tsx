import React from 'react';
import { CircleDot } from 'lucide-react';

export const Title = () => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <CircleDot className="w-8 h-8 text-pink-500" />
    <h1 className="text-6xl font-bold text-white tracking-wider">
      THE SQUID SQUAD
    </h1>
    <CircleDot className="w-8 h-8 text-pink-500" />
  </div>
);