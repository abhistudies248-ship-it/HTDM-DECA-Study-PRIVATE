// ============================================================================
// ShareModal.tsx - Sharing & Partner Invitation Dialog for DECA HTDM
// Enables 1-click sharing to partner email (Abhigyanbhat248@gmail.com) and direct link copying
// ============================================================================
import React, { useState } from 'react';
import {
  X,
  Share2,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Users,
  Sparkles,
  Send,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  roomId = 'HTDM-2026',
}) => {
  const [partnerEmail, setPartnerEmail] = useState('Abhigyanbhat248@gmail.com');
  const [partnerName, setPartnerName] = useState('Abhigyan');
  const [senderName, setSenderName] = useState('DECA Partner');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  if (!isOpen) return null;

  const appBaseUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://ais-pre-nbp6cszmolk5ouh5t7jz24-447141006847.us-west2.run.app';

  const directPartnerRoomLink = `${appBaseUrl}/?room=${encodeURIComponent(
    roomId
  )}&role=partner2`;

  const emailSubject = 'Invitation: DECA HTDM Practice & Roleplay Room';
  const emailBody = `Hi ${partnerName},\n\nI'm sharing our DECA Hospitality Services Team Decision Making (HTDM) Rehearsal Suite with you!\n\nJoin our live two-participant rehearsal room here:\n${directPartnerRoomLink}\n\nFeatures available in the suite:\n• Complete Case Bank: 210 official tournament case studies (10 for each of the 21 instructional areas)\n• Live 2-Participant Video/Audio Rehearsal Room: WebRTC webcam & mic sync with real-time shared scratchpad\n• Multimodal AI Judge: Instant certified DECA rubric evaluation, KPI performance indicator grading, and judge Q&A\n\nLooking forward to practicing together!`;

  const mailtoUrl = `mailto:${encodeURIComponent(
    partnerEmail
  )}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
    emailBody
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directPartnerRoomLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2200);
  };

  const handleSendAppInvite = async () => {
    setIsSending(true);
    try {
      const res = await fetch('/api/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toEmail: partnerEmail,
          senderName,
          roomId,
          notes: 'DECA HTDM Shared Room',
        }),
      });
      if (res.ok) {
        setSendSuccess(true);
        setTimeout(() => setSendSuccess(false), 4000);
      }
    } catch (err) {
      console.warn('Share API request error:', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0e1424] border border-blue-500/30 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-950/60 to-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-sm">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Share App & Invite Teammate</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase font-mono tracking-wider">
                  HTDM 2-Partner
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Send your partner the live rehearsal room link or shared app access
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto custom-scrollbar">
          {/* Success Banner */}
          {sendSuccess && (
            <div className="p-3.5 bg-emerald-950/70 border border-emerald-500/50 rounded-xl flex items-center space-x-2.5 text-emerald-300 text-xs animate-in slide-in-from-top-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold">Invitation Registered!</span> Your share link and invite record for{' '}
                <span className="font-mono underline">{partnerEmail}</span> are saved. You can also launch your email client below.
              </div>
            </div>
          )}

          {/* Quick Share to Specified Recipient */}
          <div className="p-4 bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900/90 rounded-2xl border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center space-x-1.5">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Primary Partner Recipient</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Ready to Send
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] text-slate-400 font-medium mb-1">
                  Recipient Email
                </label>
                <input
                  type="email"
                  value={partnerEmail}
                  onChange={(e) => setPartnerEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-blue-500"
                  placeholder="partner@gmail.com"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 font-medium mb-1">
                  Teammate Name
                </label>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                  placeholder="Teammate name"
                />
              </div>
            </div>

            {/* Action Buttons for Email */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App ({partnerEmail})</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={handleSendAppInvite}
                disabled={isSending}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-blue-400" />
                <span>{isSending ? 'Registering...' : 'Register Invite'}</span>
              </button>
            </div>
          </div>

          {/* Direct Partner Room Invite Link */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200 flex items-center space-x-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Direct Rehearsal Room Link (Seat 2 - Partner 2)</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Room: {roomId}</span>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                readOnly
                value={directPartnerRoomLink}
                className="flex-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 font-mono text-[11px] truncate focus:outline-none select-all"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2.5 bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer shrink-0"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedLink ? 'Copied Link!' : 'Copy Link'}</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              When your partner opens this link, they automatically enter <strong>Seat 2</strong> with synchronized video, microphone, timer, and collaborative scratchpad.
            </p>
          </div>

          {/* Message Preview & Quick Copy */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300 flex items-center space-x-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Invitation Message Preview</span>
              </span>
              <button
                onClick={handleCopyMessage}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-1 cursor-pointer"
              >
                {copiedMessage ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedMessage ? 'Copied Message!' : 'Copy Formatted Text'}</span>
              </button>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl font-mono text-[10px] text-slate-300 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed select-all">
              {emailBody}
            </div>
          </div>

          {/* Suite Features Highlight */}
          <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <div className="text-amber-400 font-extrabold text-sm">210 Cases</div>
              <div className="text-slate-400">10 in Every Area</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <div className="text-emerald-400 font-extrabold text-sm">2 Partners</div>
              <div className="text-slate-400">WebRTC Live Call</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <div className="text-purple-400 font-extrabold text-sm">AI Judge</div>
              <div className="text-slate-400">Gemini Scoring</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            DECA Hospitality Services Team Decision Making
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
