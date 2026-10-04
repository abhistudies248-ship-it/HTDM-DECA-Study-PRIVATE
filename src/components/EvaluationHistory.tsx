// ============================================================================
// 1. EvaluationHistory Component Definition
// Displays historical participant rehearsals, official scores, and Gemini judge feedback
// ============================================================================
import React from 'react';
import { Award, Calendar, ChevronRight, FileText, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { RoleplayEvaluation } from '../types/deca';
import { getSavedEvaluations } from '../utils/storage';

// ============================================================================
// 2. Component Props Interface
// Receives modal viewing callback and trigger to draw a new scenario
// ============================================================================
interface EvaluationHistoryProps {
  onViewEvaluation: (evaluation: RoleplayEvaluation) => void;
  onStartNewRehearsal: () => void;
}

// ============================================================================
// 3. EvaluationHistory Main Functional Component
// Renders past scorecards sorted chronologically with detailed scorecard access
// ============================================================================
export const EvaluationHistory: React.FC<EvaluationHistoryProps> = ({
  onViewEvaluation,
  onStartNewRehearsal,
}) => {
  // --------------------------------------------------------------------------
  // 4. Retrieve Persisted Evaluation Records
  // Pulls scored roleplay evaluations from browser storage
  // --------------------------------------------------------------------------
  const evaluations = getSavedEvaluations();

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#0b0f19] text-slate-100 p-6 md:p-10 space-y-6 select-none">
      {/* ----------------------------------------------------------------------
          5. Historical Overview Banner
          Summarizes past performance records and provides quick action to draw a scenario
      ---------------------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
            OFFICIAL TOURNAMENT TRACK RECORD
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Evaluation History
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Review past roleplay simulations, rubric scores, performance indicator mastery, and Gemini AI judge feedback across all instructional areas.
          </p>
        </div>

        <button
          onClick={onStartNewRehearsal}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/30 self-start md:self-auto cursor-pointer"
        >
          Draw New Scenario
        </button>
      </div>

      {/* ----------------------------------------------------------------------
          6. Empty State vs. Historical Record Cards
          Prompts competitors to complete their first roleplay simulation if empty
      ---------------------------------------------------------------------- */}
      {evaluations.length === 0 ? (
        <div className="bg-[#111827] rounded-3xl border border-slate-800 p-12 text-center space-y-4 max-w-lg mx-auto my-12 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto shadow-inner">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-white tracking-tight">
              No Rehearsal Evaluations Recorded
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete your first 15-minute Hospitality Services Team Decision Making roleplay presentation or upload a video recording to receive official DECA rubric scoring from Gemini AI.
            </p>
          </div>
          <button
            onClick={onStartNewRehearsal}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
          >
            Start First Rehearsal Round
          </button>
        </div>
      ) : (
        /* --------------------------------------------------------------------
            7. Evaluation Cards List
            Lists each simulation with total score (out of 100), tier, date, and impression
        -------------------------------------------------------------------- */
        <div className="space-y-3">
          {evaluations.map((ev) => (
            <div
              key={ev.id}
              onClick={() => onViewEvaluation(ev)}
              className="bg-[#111827] border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-all shadow-sm group"
            >
              <div className="flex items-center space-x-4">
                {/* Rubric Score Badge */}
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-white font-extrabold text-sm shrink-0 font-mono">
                  {ev.totalScore}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-500/20 text-blue-400 uppercase tracking-wider">
                      {ev.tier}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{ev.date}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {ev.caseTitle}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 italic">
                    &quot;{ev.overallImpression}&quot;
                  </p>
                </div>
              </div>

              {/* --------------------------------------------------------------
                  8. Skills Breakdown & Navigation Chevron
                  Shows 21st Century Skills score and count of evaluated indicators
              -------------------------------------------------------------- */}
              <div className="flex items-center space-x-4 shrink-0">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-slate-300">
                    21st Century Skills: {ev.centurySkillsScore}/20
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {ev.performanceIndicators.length} PIs Evaluated
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/80 group-hover:bg-blue-600 text-slate-400 group-hover:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
