'use client';

import React from 'react';
import { Lock } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-3.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Marca - Apenas Nome */}
        <div className="flex items-center shrink-0">
          <a href="#" className="flex flex-col text-left justify-center group py-1">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-none group-hover:text-emerald-400 transition-colors">
              PROSPERUS
            </span>
            <span className="text-[10px] sm:text-[11.5px] font-extrabold tracking-[0.22em] text-emerald-400 uppercase mt-1 leading-none">
              INTELIGÊNCIA FINANCEIRA
            </span>
          </a>
        </div>

        {/* Security & Compliance Trust Badge */}
        <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 border border-slate-800/90 px-3.5 py-2 rounded-full shadow-inner">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-medium text-[11px] sm:text-xs">
            100% Digital <span className="hidden sm:inline">• LGPD Compliant</span>
          </span>
        </div>

      </div>
    </header>
  );
}
