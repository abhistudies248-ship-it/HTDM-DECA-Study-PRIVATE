// ============================================================================
// 1. TopNav Header Navigation Component
// Top application bar displaying active event metadata, AI status, and quick-action toolbars
// ============================================================================
import React from 'react';
import { Sparkles, Video, Shuffle, Users, FileCode, Lock, Share2 } from 'lucide-react';

// ============================================================================
// 2. Component Props Interface
// Trigger callbacks for quick draw, video upload, partner joining, share invite, and secured API view
// ============================================================================
interface TopNavProps {
  onQuickDraw?: () => void;
  onOpenUpload?: () => void;
  onOpenAdmin?: () => void;
  onOpenApi?: () => void;
  onOpenJoinRoom?: () => void;
  onOpenShare?: () => void;
}

// ============================================================================
// 3. TopNav Functional Component
// Sticky top navigation containing live status tags, partner join buttons, and user profile
// ============================================================================
export const TopNav: React.FC<TopNavProps> = ({
  onQuickDraw,
  onOpenUpload,
  onOpenAdmin,
  onOpenApi,
  onOpenJoinRoom,
  onOpenShare,
}) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-[#0c111d]/90 backdrop-blur px-6 md:px-8 flex items-center justify-between sticky top-0 z-30 select-none">
      {/* ----------------------------------------------------------------------
          4. Active Competition Status Badge
          Displays official team format (2 participants) and multimodal judge state
      ---------------------------------------------------------------------- */}
      <div className="flex items-center space-x-3 text-xs">
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white text-[11px] font-bold tracking-wider uppercase">
            DECA HTDM (2 Participants + Gemini Judge)
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-1.5 text-xs text-blue-400 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multimodal Gemini Judge Active</span>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          5. Action Toolbar Buttons
          Quick access buttons for partner join, blind scenario draw, API inspection, and video upload
      ---------------------------------------------------------------------- */}
      <div className="flex items-center space-x-3">
        {/* Join Partner Rehearsal Room */}
        {onOpenJoinRoom && (
          <button
            onClick={onOpenJoinRoom}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-500/50 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="Join your partner's rehearsal room with a room code"
          >
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>Join Partner</span>
          </button>
        )}

        {/* Share & Invite Partner (e.g. Abhigyanbhat248@gmail.com) */}
        {onOpenShare && (
          <button
            onClick={onOpenShare}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-950/70 hover:bg-indigo-900/90 text-indigo-300 border border-indigo-500/50 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="Share app link & invite partner via email (Abhigyanbhat248@gmail.com)"
          >
            <Share2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden xs:inline">Share & Invite</span>
          </button>
        )}

        {/* Blind Random Scenario Draw */}
        {onQuickDraw && (
          <button
            onClick={onQuickDraw}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Blind Draw</span>
          </button>
        )}

        {/* Passcode Protected API & Documentation */}
        {onOpenApi && (
          <button
            onClick={onOpenApi}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-950/50 hover:bg-amber-900/60 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="API File & Docs (Password Protected)"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>API & Docs</span>
          </button>
        )}

        {/* Offline Roleplay Video Upload */}
        {onOpenUpload && (
          <button
            onClick={onOpenUpload}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          >
            <Video className="w-3.5 h-3.5 text-blue-400" />
            <span>Upload Video</span>
          </button>
        )}

        {/* --------------------------------------------------------------------
            6. Competitor Team Avatar Profile
            Visual indicator of logged-in hospitality team account
        -------------------------------------------------------------------- */}
        <div
          className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-extrabold text-white tracking-tight shadow-md"
          title="Team Hospitality Services"
        >
          HT
        </div>
      </div>
    </header>
  );
};
