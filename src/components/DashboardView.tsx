// ============================================================================
// 1. Imports and Component Setup
// Lucide icons, DECA data models, and master case repository across 21 instructional areas
// ============================================================================
import React, { useState } from 'react';
import {
  Shuffle,
  Clock,
  Award,
  TrendingUp,
  Flame,
  Upload,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  FileText,
  UserCheck,
  CheckCircle2,
  Search,
  ChevronDown,
  ChevronUp,
  Play,
  Video,
  Users,
} from 'lucide-react';
import { DecaCaseStudy, InstructionalArea } from '../types/deca';
import { getAllCases, INSTRUCTIONAL_AREAS } from '../data/cases';

// ============================================================================
// 2. Component Props Interface
// Rehearsal triggers, upload modals, partner joining, and cumulative participant analytics
// ============================================================================
interface DashboardViewProps {
  onStartRehearsal: (caseStudy: DecaCaseStudy) => void;
  onOpenUploadModal: (caseStudy?: DecaCaseStudy) => void;
  onOpenJoinRoom?: () => void;
  stats: {
    attempts: number;
    averageScore: number;
    bestScore: number;
    streakDays: number;
  };
  nextFocusTip: string;
}

// ============================================================================
// 3. DashboardView Main Functional Component
// Primary rehearsal hub handling blind tournament draws, stats, and 21-area case library
// ============================================================================
export const DashboardView: React.FC<DashboardViewProps> = ({
  onStartRehearsal,
  onOpenUploadModal,
  onOpenJoinRoom,
  stats,
  nextFocusTip,
}) => {
  // --------------------------------------------------------------------------
  // 4. Case Studies State
  // Master collection of authentic scenarios spanning all 21 instructional areas
  // --------------------------------------------------------------------------
  const [allCases] = useState<DecaCaseStudy[]>(() => getAllCases());
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<string>('All');
  const [drawnCase, setDrawnCase] = useState<DecaCaseStudy | null>(() => {
    return allCases[Math.floor(Math.random() * allCases.length)];
  });
  const [isShuffling, setIsShuffling] = useState(false);

  // --------------------------------------------------------------------------
  // 5. Interactive Case Library State
  // Active category filter tab, search query string, and expanded scenario accordion id
  // --------------------------------------------------------------------------
  const [browserArea, setBrowserArea] = useState<string>('Customer Relations');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedBrowserCaseId, setExpandedBrowserCaseId] = useState<string | null>(null);

  // --------------------------------------------------------------------------
  // 6. Blind Tournament Random Draw Engine
  // Simulates official DECA blind case draw with multi-frame rapid animation
  // --------------------------------------------------------------------------
  const handleDrawRandomCase = (areaFilter = selectedAreaFilter) => {
    setIsShuffling(true);
    const pool =
      areaFilter === 'All'
        ? allCases
        : allCases.filter((c) => c.instructionalArea === areaFilter);

    let count = 0;
    const interval = setInterval(() => {
      const tempRandom = pool[Math.floor(Math.random() * pool.length)];
      setDrawnCase(tempRandom);
      count++;
      if (count > 6) {
        clearInterval(interval);
        const finalCase = pool[Math.floor(Math.random() * pool.length)];
        setDrawnCase(finalCase);
        setIsShuffling(false);
      }
    }, 60);
  };

  // --------------------------------------------------------------------------
  // 7. Case Search and Filter Computation
  // Filters active library view by matching selected instructional area and search term
  // --------------------------------------------------------------------------
  const filteredBrowserCases = allCases.filter((c) => {
    const matchesArea = browserArea === 'All' || c.instructionalArea === browserArea;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      c.title.toLowerCase().includes(query) ||
      c.background.toLowerCase().includes(query) ||
      c.performanceIndicators.some((pi) => pi.name.toLowerCase().includes(query));
    return matchesArea && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#0b0f19] text-slate-100 p-6 md:p-10 space-y-8 select-none">
      {/* ----------------------------------------------------------------------
          8. Top Welcome & Event Title Banner
          Highlights DECA Hospitality Services Team Decision Making format
      ---------------------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Hospitality Services Team Decision Making (HTDM)</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Championship Rehearsal Arena
          </h1>
          <p className="text-slate-400 text-xs max-w-2xl leading-relaxed">
            Authentic DECA HTDM competition simulator across all 21 instructional areas. Two participants collaborate in a 30-minute prep period followed by a 15-minute roleplay evaluated by Google Gemini AI against official 100-point rubrics.
          </p>
        </div>

        {/* Quick Join Teammate Room Action Button */}
        {onOpenJoinRoom && (
          <button
            onClick={onOpenJoinRoom}
            className="flex items-center space-x-2 px-5 py-3 bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-500/50 rounded-2xl text-xs font-bold transition-all shadow-md cursor-pointer self-start md:self-auto shrink-0"
          >
            <Users className="w-4 h-4 text-blue-400" />
            <span>Join Teammate Room</span>
          </button>
        )}
      </div>

      {/* ----------------------------------------------------------------------
          9. Primary Roleplay Draw Station Card
          Interactive blind draw generator across all 21 instructional areas
      ---------------------------------------------------------------------- */}
      <div className="bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1e1b4b]/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div>
            <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
              BLIND TOURNAMENT DRAW STATION · {allCases.length} AUTHENTIC SCENARIOS
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              Active Competition Scenario
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Draw randomly across all 21 instructional areas or filter your draw pool by topic below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleDrawRandomCase()}
              disabled={isShuffling}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <Shuffle className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`} />
              <span>{isShuffling ? 'Drawing...' : 'Draw Another Scenario'}</span>
            </button>
          </div>
        </div>

        {/* --------------------------------------------------------------------
            10. Draw Category Selector Pills
            Allows competitors to practice specific instructional area categories
        -------------------------------------------------------------------- */}
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Filter Draw Pool By Topic:
          </label>
          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1">
            <button
              onClick={() => {
                setSelectedAreaFilter('All');
                handleDrawRandomCase('All');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedAreaFilter === 'All'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All {allCases.length} Cases (All 21 Areas)
            </button>
            {INSTRUCTIONAL_AREAS.map((area) => (
              <button
                key={area}
                onClick={() => {
                  setSelectedAreaFilter(area);
                  handleDrawRandomCase(area);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedAreaFilter === area
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {area} ({allCases.filter((c) => c.instructionalArea === area).length})
              </button>
            ))}
          </div>
        </div>

        {/* --------------------------------------------------------------------
            11. Drawn Scenario Detail Card
            Displays scenario summary, participant roles, and evaluated PIs
        -------------------------------------------------------------------- */}
        {drawnCase && (
          <div className="bg-[#0b0f19] border border-blue-500/30 rounded-2xl p-6 space-y-5 shadow-lg relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 uppercase tracking-wider">
                  {drawnCase.instructionalArea}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                  {drawnCase.tier} Level
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  30m Prep · 15m Presentation
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                {drawnCase.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {drawnCase.background.split(/\n\s*\n/)[0]}
              </p>
            </div>

            {/* Competitor and Judge Executive Roles */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 font-bold block text-[10px] uppercase">
                  Participant Roles (Two Competitors):
                </span>
                <span className="text-white font-medium">{drawnCase.participantRole}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block text-[10px] uppercase">
                  Judge Role:
                </span>
                <span className="text-slate-200 font-medium">{drawnCase.judgeRole}</span>
              </div>
            </div>

            {/* Performance Indicators Checklist Preview */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>5 Performance Indicators Evaluated</span>
                <span className="text-emerald-400 text-xs">Official 100-Point Rubric</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {drawnCase.performanceIndicators.map((pi, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-start space-x-2"
                  >
                    <span className="text-blue-400 font-bold shrink-0">{idx + 1}.</span>
                    <span className="text-slate-300 font-medium truncate">{pi.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Rehearsal Launch Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onStartRehearsal(drawnCase)}
                className="flex-1 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2.5 cursor-pointer active:scale-95"
              >
                <Clock className="w-4 h-4" />
                <span>Start Official 30-Minute Rehearsal (Launch Video Room)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenUploadModal(drawnCase)}
                className="py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl transition-all border border-slate-700 flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <Upload className="w-4 h-4 text-blue-400" />
                <span>Upload Video for This Case</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ----------------------------------------------------------------------
          12. Tournament Analytics Metric Cards
          Displays historical participant statistics, average scores, and focus tips
      ---------------------------------------------------------------------- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase tracking-wider">
            <span>Rehearsals</span>
            <Award className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">{stats.attempts}</div>
            <div className="text-xs text-slate-400 mt-0.5">Total simulations completed</div>
          </div>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase tracking-wider">
            <span>Average Score</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {stats.averageScore}
              <span className="text-xs text-slate-400 font-normal">/100</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Official DECA rubric score</div>
          </div>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase tracking-wider">
            <span>High Watermark</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {stats.bestScore}
              <span className="text-xs text-slate-400 font-normal">/100</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Personal tournament record</div>
          </div>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase tracking-wider">
            <span>Consistency Streak</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {stats.streakDays}
              <span className="text-xs text-slate-400 font-normal"> days</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Consecutive practice streak</div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          13. AI Advisor Strategic Focus Tip
          Actionable coaching observation generated from past evaluation rubrics
      ---------------------------------------------------------------------- */}
      <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-[#111827] border border-blue-500/30 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              AI ADVISOR FOCUS TIP
            </div>
            <p className="text-xs text-slate-200 font-medium leading-relaxed">
              {nextFocusTip}
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-400 font-medium md:text-right shrink-0">
          Evaluated against official DECA judging standards
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          14. Interactive 21-Instructional Area Case Explorer
          Full searchable directory across all 21 official DECA topic areas
      ---------------------------------------------------------------------- */}
      <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
              INTERACTIVE CASE BANK · ALL 21 INSTRUCTIONAL TOPICS
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5">
              Explore All {allCases.length} DECA HTDM Case Studies
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Comprehensive scenarios covering all 21 official DECA knowledge domains with 5-paragraph briefs and 5 performance indicators.
            </p>
          </div>

          {/* Keyword Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search scenarios or PIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* --------------------------------------------------------------------
            15. All 21 Topic Area Filter Buttons
            Filters the browser list by any of the 21 official instructional areas
        -------------------------------------------------------------------- */}
        <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
          <button
            onClick={() => setBrowserArea('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              browserArea === 'All'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Topics ({allCases.length})
          </button>
          {INSTRUCTIONAL_AREAS.map((area) => (
            <button
              key={area}
              onClick={() => setBrowserArea(area)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                browserArea === area
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {area} ({allCases.filter((c) => c.instructionalArea === area).length})
            </button>
          ))}
        </div>

        {/* --------------------------------------------------------------------
            16. Case Cards Accordion Grid
            Displays scenario cards with toggleable 5-paragraph briefs & PIs
        -------------------------------------------------------------------- */}
        <div className="space-y-3">
          {filteredBrowserCases.map((c) => {
            const isExpanded = expandedBrowserCaseId === c.id;
            const paragraphs = c.background
              .split(/\n\s*\n/)
              .map((p) => p.trim())
              .filter(Boolean);

            return (
              <div
                key={c.id}
                className="bg-[#0b0f19] border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <div
                  onClick={() => setExpandedBrowserCaseId(isExpanded ? null : c.id)}
                  className="p-4 md:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-900/60 transition-colors"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400 font-extrabold text-xs shrink-0">
                      {c.tier === 'ICDC' ? 'ICDC' : c.tier === 'State SCDC' ? 'SCDC' : 'DIST'}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                          {c.instructionalArea}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          30m Prep · 15m Present
                        </span>
                      </div>
                      <h4 className="text-sm md:text-base font-bold text-white tracking-tight">
                        {c.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        Roles: {c.participantRole} · Judge: {c.judgeRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartRehearsal(c);
                      }}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Rehearse</span>
                    </button>
                    <div className="p-1 rounded-lg text-slate-400">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------
                    17. Expanded Details: Full 5-Paragraph Brief and 5 PIs
                    Provides authentic tournament reading material for team prep
                ------------------------------------------------------------ */}
                {isExpanded && (
                  <div className="p-5 md:p-6 pt-0 border-t border-slate-800 space-y-4 bg-slate-950/40 animate-in fade-in duration-150">
                    <div className="mt-3 p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                        Official DECA HTDM Case Brief (5 Paragraphs)
                      </div>
                      <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                        {paragraphs.map((para, idx) => (
                          <p key={idx}>
                            <span className="text-blue-400 font-bold mr-1.5">[{idx + 1}]</span>
                            {para}
                          </p>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-800">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                          The Challenge
                        </span>
                        <p className="text-xs text-slate-200 font-medium">{c.challenge}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        5 Performance Indicators to Address
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {c.performanceIndicators.map((pi, piIdx) => (
                          <div
                            key={piIdx}
                            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs"
                          >
                            <span className="text-blue-400 font-bold mr-1.5">{piIdx + 1}.</span>
                            <span className="text-white font-medium">{pi.name}</span>
                            <p className="text-[11px] text-slate-400 mt-0.5">{pi.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end space-x-3">
                      <button
                        onClick={() => onOpenUploadModal(c)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        Upload Video for This Case
                      </button>
                      <button
                        onClick={() => onStartRehearsal(c)}
                        className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/30 cursor-pointer"
                      >
                        Launch in Rehearsal Room
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
