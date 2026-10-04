// ============================================================================
// 1. EvaluationModal Component Definition
// Official DECA 100-Point Tournament Scorecard modal displaying Gemini AI evaluations
// ============================================================================
import React, { useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  Printer,
  X,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  MessageSquare,
  Video,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RoleplayEvaluation } from '../types/deca';

// ============================================================================
// 2. Component Props Interface
// Receives active evaluation payload, close handler, and repeat rehearsal trigger
// ============================================================================
interface EvaluationModalProps {
  evaluation: RoleplayEvaluation | null;
  onClose: () => void;
  onPracticeAgain: () => void;
}

// ============================================================================
// 3. EvaluationModal Functional Component
// Renders comprehensive performance indicator feedback, 21st century skills, and print view
// ============================================================================
export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  evaluation,
  onClose,
  onPracticeAgain,
}) => {
  // --------------------------------------------------------------------------
  // 4. Championship Celebration Effect
  // Triggers confetti burst if the team achieves an 80+ score (State / ICDC qualifier level)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (evaluation && evaluation.totalScore >= 80) {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [evaluation]);

  if (!evaluation) return null;

  // --------------------------------------------------------------------------
  // 5. Official Print Utility
  // Opens native print dialog formatted for official paper judging scorecards
  // --------------------------------------------------------------------------
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 overflow-y-auto select-none">
      <div className="bg-[#111827] rounded-3xl shadow-2xl max-w-4xl w-full my-8 overflow-hidden border border-slate-800 flex flex-col max-h-[92vh]">
        {/* --------------------------------------------------------------------
            6. Modal Header & Action Toolbar
            Displays scenario title, evaluation date, print button, and close icon
        -------------------------------------------------------------------- */}
        <div className="bg-[#0b0f19] p-6 px-8 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 uppercase tracking-widest">
                Official DECA HTDM Scorecard
              </span>
              <span className="text-xs text-slate-400 font-mono">{evaluation.date}</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {evaluation.caseTitle}
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Sheet</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --------------------------------------------------------------------
            7. Content Body: Score Summaries and Rubric Tiers
            Displays 3 high-level metric cards: Overall Score, 21st Century Skills, PI Mastery
        -------------------------------------------------------------------- */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 bg-[#111827] text-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Total Overall Score out of 100 */}
            <div className="bg-[#0b0f19] p-6 rounded-2xl border border-slate-800 shadow-sm flex items-center space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Overall Score
                </div>
                <div className="text-4xl font-extrabold text-white tracking-tight leading-none mt-1">
                  {evaluation.totalScore}
                  <span className="text-base font-normal text-slate-400"> / 100</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  {evaluation.tier}
                </div>
              </div>
            </div>

            {/* 21st Century Skills out of 20 */}
            <div className="bg-[#0b0f19] p-6 rounded-2xl border border-slate-800 shadow-sm flex items-center space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  21st Century Skills
                </div>
                <div className="text-4xl font-extrabold text-white tracking-tight leading-none mt-1">
                  {evaluation.centurySkillsScore}
                  <span className="text-base font-normal text-slate-400"> / 20</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Collaboration & Poise</div>
              </div>
            </div>

            {/* Performance Indicators Percentage Mastery */}
            <div className="bg-[#0b0f19] p-6 rounded-2xl border border-slate-800 shadow-sm flex items-center space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  PI Mastery
                </div>
                <div className="text-4xl font-extrabold text-white tracking-tight leading-none mt-1">
                  {Math.round(
                    (evaluation.performanceIndicators.reduce((acc, pi) => acc + pi.score, 0) /
                      (evaluation.performanceIndicators.length * 20)) *
                      100
                  )}
                  %
                </div>
                <div className="text-xs text-slate-400 mt-1">5 Core PIs Addressed</div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              8. Head Judge Executive Impression Narrative
              Qualitative holistic summary provided by the Gemini AI judge persona
          ------------------------------------------------------------------ */}
          <div className="bg-[#0b0f19] p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Head Judge Executive Impression</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              &quot;{evaluation.overallImpression}&quot;
            </p>
          </div>

          {/* ------------------------------------------------------------------
              9. Performance Indicators Individual Rubric Breakdown
              Displays ratings ('Exceeds Expectations', 'Meets Expectations', 'Below Expectations')
              along with actionable 'What to say next time' coaching suggestions
          ------------------------------------------------------------------ */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Performance Indicators Evaluation (5 PIs)
              </h3>
              <span className="text-[11px] text-slate-400">Official DECA Rubric Scale</span>
            </div>

            <div className="space-y-3">
              {evaluation.performanceIndicators.map((pi, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b0f19] p-5 rounded-2xl border border-slate-800 space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-6 h-6 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{pi.name}</h4>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          pi.rating === 'Exceeds Expectations'
                            ? 'bg-emerald-950 border border-emerald-500/30 text-emerald-400'
                            : pi.rating === 'Meets Expectations'
                            ? 'bg-blue-950 border border-blue-500/30 text-blue-400'
                            : 'bg-amber-950 border border-amber-500/30 text-amber-400'
                        }`}
                      >
                        {pi.rating}
                      </span>
                      <span className="text-sm font-mono font-bold text-white">
                        {pi.score} / {pi.maxScore}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pl-8">
                    {pi.feedback}
                  </p>

                  {/* Concrete What to Say Next Time Verbatim Coaching */}
                  {pi.whatToSayNextTime && (
                    <div className="ml-8 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-start space-x-2 text-slate-300">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-100">What to say next time: </span>
                        <span>{pi.whatToSayNextTime}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------------
              10. Multimodal Video Poise & 21st Century Skills Analysis
              Evaluates visual poise, eye contact, and partner collaboration balance
          ------------------------------------------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Visual Poise and Non-verbal Delivery */}
            <div className="bg-[#0b0f19] p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>Multimodal Video & Presentation Poise</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 font-bold block">Executive Presence:</span>
                  <p className="text-slate-300 mt-0.5">{evaluation.videoAnalysis?.visualPoise}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block">Eye Contact & Framing:</span>
                  <p className="text-slate-300 mt-0.5">{evaluation.videoAnalysis?.eyeContact}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block">Vocal Cadence & Pace:</span>
                  <p className="text-slate-300 mt-0.5">{evaluation.videoAnalysis?.vocalDelivery}</p>
                </div>
              </div>
            </div>

            {/* Team Dynamic and Two-Person Collaboration */}
            <div className="bg-[#0b0f19] p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Team Collaboration & Decision Making</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 font-bold block">Partner Role Distribution:</span>
                  <p className="text-slate-300 mt-0.5">
                    {evaluation.centurySkillsFeedback?.teamCollaboration}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block">Hospitality Mindset:</span>
                  <p className="text-slate-300 mt-0.5">
                    {evaluation.centurySkillsFeedback?.hospitalityMindset}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block">Operational Logic:</span>
                  <p className="text-slate-300 mt-0.5">
                    {evaluation.centurySkillsFeedback?.criticalThinking}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              11. Actionable Competition Focus Takeaway
              Key priority improvement for the team's next practice simulation
          ------------------------------------------------------------------ */}
          <div className="bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-500/40 rounded-2xl p-6 flex items-start space-x-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                YOUR NEXT COMPETITION REPETITION FOCUS
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
                {evaluation.nextFocusActionItem}
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------
            12. Modal Footer Actions
            Close scorecard or immediately draw another practice scenario
        -------------------------------------------------------------------- */}
        <div className="bg-[#0b0f19] p-5 px-8 flex items-center justify-between border-t border-slate-800 shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Close Scorecard
          </button>

          <button
            onClick={onPracticeAgain}
            className="flex items-center space-x-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/30 cursor-pointer"
          >
            <span>Draw Another Rehearsal Scenario</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
