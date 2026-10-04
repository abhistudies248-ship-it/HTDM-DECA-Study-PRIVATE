// ============================================================================
// 1. Sidebar Navigation Component
// Fixed brand navigation bar supporting the Rehearsal Arena, History, Admin Case Bank, and API File
// ============================================================================
import React from 'react';
import {
  Shield,
  Award,
  Clock,
  History,
  KeyRound,
  Sparkles,
  Layers,
  Video,
  FileCode,
  Users,
  Lock,
} from 'lucide-react';

// ============================================================================
// 2. Component Props Interface
// Receives active tab state and navigation trigger function
// ============================================================================
interface SidebarProps {
  currentTab: 'practice' | 'history' | 'admin' | 'api';
  onSelectTab: (tab: 'practice' | 'history' | 'admin' | 'api') => void;
}

// ============================================================================
// 3. Sidebar Functional Component
// Renders DECA brand header, navigation options, security indicators, and official rules
// ============================================================================
export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab }) => {
  return (
    <aside className="w-64 bg-[#0c111d] text-slate-200 flex flex-col justify-between border-r border-slate-800/80 min-h-screen select-none shrink-0 z-20">
      <div>
        {/* --------------------------------------------------------------------
            4. Official Brand Emblem and Event Identity
            DECA Hospitality Services Team Decision Making championship branding
        -------------------------------------------------------------------- */}
        <div className="p-5 border-b border-slate-800/80 flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 tracking-wider">
            DECA
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-tight leading-tight">
              Hospitality Services
            </div>
            <div className="text-[10px] tracking-wider text-blue-400 font-bold uppercase">
              Team Decision Making
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------
            5. Rehearsal Hub Navigation List
            Allows quick switching between Arena, Evaluation History, Case Bank, and API
        -------------------------------------------------------------------- */}
        <div className="px-5 pt-6 pb-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          Rehearsal Hub
        </div>

        <nav className="px-3 space-y-1.5">
          {/* Tab 1: Practice Arena */}
          <button
            onClick={() => onSelectTab('practice')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'practice'
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                : 'text-slate-400 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Layers className={`w-4 h-4 ${currentTab === 'practice' ? 'text-white' : 'text-slate-400'}`} />
              <span>Practice Arena</span>
            </div>
            {currentTab === 'practice' && (
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            )}
          </button>

          {/* Tab 2: Evaluation History */}
          <button
            onClick={() => onSelectTab('history')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'history'
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                : 'text-slate-400 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <History className={`w-4 h-4 ${currentTab === 'history' ? 'text-white' : 'text-slate-400'}`} />
              <span>Evaluation History</span>
            </div>
          </button>

          {/* Tab 3: Admin Case Bank (21 Instructional Areas) */}
          <button
            onClick={() => onSelectTab('admin')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'admin'
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                : 'text-slate-400 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <KeyRound className={`w-4 h-4 ${currentTab === 'admin' ? 'text-white' : 'text-slate-400'}`} />
              <span>Admin Case Bank</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-blue-400">
              21 Areas
            </span>
          </button>

          {/* Tab 4: API File & Documentation (Password Protected) */}
          <button
            onClick={() => onSelectTab('api')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'api'
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                : 'text-slate-400 hover:bg-slate-850 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <FileCode className={`w-4 h-4 ${currentTab === 'api' ? 'text-white' : 'text-slate-400'}`} />
              <span>API File & Docs</span>
            </div>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40 flex items-center space-x-1">
              <Lock className="w-2.5 h-2.5" />
              <span>Passcode</span>
            </span>
          </button>
        </nav>
      </div>

      {/* ----------------------------------------------------------------------
          6. Official DECA HTDM Competition Rules Card
          Displays exact tournament team requirements, timer durations, and judge role
      ---------------------------------------------------------------------- */}
      <div className="p-4 border-t border-slate-800/80">
        <div className="bg-slate-900/90 rounded-2xl p-4 space-y-2.5 border border-slate-800">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Official HTDM Rules</span>
          </div>
          <div className="space-y-1 text-slate-300 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Team Structure:</span>
              <span className="font-bold text-white">2 Participants</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Preparation:</span>
              <span className="font-mono font-bold text-white">30:00 mins</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Presentation:</span>
              <span className="font-mono font-bold text-emerald-400">15:00 mins</span>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Judge Persona</span>
            <span className="text-amber-400 font-semibold">Gemini AI</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
