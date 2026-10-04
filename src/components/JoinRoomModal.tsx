// ============================================================================
// 1. JoinRoomModal Component Definition
// Enables a partner competitor to join an existing rehearsal session using a room code or invite URL
// ============================================================================
import React, { useState } from 'react';
import { Users, X, ArrowRight, Shield, AlertCircle } from 'lucide-react';

// ============================================================================
// 2. Component Props Interface
// Receives modal visibility state, dismiss handler, and join room callback
// ============================================================================
interface JoinRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoin: (roomId: string, role: 'partner1' | 'partner2') => void;
}

// ============================================================================
// 3. JoinRoomModal Functional Component
// Parses alphanumeric room codes (e.g. HTDM-8492) and assigns Partner 1 or Partner 2 seat
// ============================================================================
export const JoinRoomModal: React.FC<JoinRoomModalProps> = ({
  isOpen,
  onClose,
  onJoin,
}) => {
  // --------------------------------------------------------------------------
  // 4. Form State & Input Validation
  // Manages raw user input string, selected team seat role, and error alert messages
  // --------------------------------------------------------------------------
  const [inputVal, setInputVal] = useState('');
  const [selectedRole, setSelectedRole] = useState<'partner1' | 'partner2'>('partner2');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // --------------------------------------------------------------------------
  // 5. Submit & Room Code Parsing Handler
  // Extracts room query params from full shareable URLs or cleans raw code strings
  // --------------------------------------------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmed = inputVal.trim();
    if (!trimmed) {
      setError('Please enter a room code or paste an invite link.');
      return;
    }

    let finalRoomId = trimmed;

    // Detect if user pasted a full URL containing '?room=HTDM-XXXX'
    try {
      if (trimmed.includes('room=')) {
        const urlObj = new URL(trimmed.startsWith('http') ? trimmed : `https://example.com/${trimmed}`);
        const parsed = urlObj.searchParams.get('room');
        if (parsed) finalRoomId = parsed;
        const roleParsed = urlObj.searchParams.get('role');
        if (roleParsed === 'partner1' || roleParsed === 'partner2') {
          setSelectedRole(roleParsed);
        }
      }
    } catch {
      // Fallback to raw string if parsing fails
    }

    // Strip non-alphanumeric characters and capitalize
    finalRoomId = finalRoomId.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase();
    if (finalRoomId.length < 3) {
      setError('Please enter a valid room code (e.g. HTDM-8492).');
      return;
    }

    onJoin(finalRoomId, selectedRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-[#111827] border border-slate-800 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden">
        {/* --------------------------------------------------------------------
            6. Modal Dialog Header
            Displays partner icon, title, and close dismissal button
        -------------------------------------------------------------------- */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/40 text-blue-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Join Partner's Room
              </h3>
              <p className="text-xs text-slate-400">
                DECA HTDM Two-Participant Rehearsal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* --------------------------------------------------------------------
            7. Room Code Input Form
            Accepts 8-character room code or full invite URL with instant error feedback
        -------------------------------------------------------------------- */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Room Code or Partner Invite Link:
            </label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                if (error) setError('');
              }}
              placeholder="e.g. HTDM-8492 or paste invite link..."
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {error && (
              <div className="flex items-center space-x-1.5 text-xs text-red-400 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------------
              8. Participant Seat Selection
              Allows competitor to choose Partner 2 (default) or Partner 1 seat
          ------------------------------------------------------------------ */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">
              Select Your Team Presentation Role:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRole('partner2')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedRole === 'partner2'
                    ? 'bg-blue-950/80 border-blue-500 text-white ring-1 ring-blue-500'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-blue-400">Partner 2 (Default)</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Front Office / Ops Lead</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('partner1')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedRole === 'partner1'
                    ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-500'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-emerald-400">Partner 1</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Director of Guest Services</div>
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              9. WebRTC Peer Connection Explanation
              Informs competitors that webcam and microphone streams connect live
          ------------------------------------------------------------------ */}
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">How it works: </span>
            When you join, your webcam & mic will connect live via WebRTC to your teammate's rehearsal room. Both of you will see the Gemini AI Judge and present together in real time.
          </div>

          {/* ------------------------------------------------------------------
              10. Dialog Action Buttons
              Cancel button and submit trigger to enter rehearsal room
          ------------------------------------------------------------------ */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Join Rehearsal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
