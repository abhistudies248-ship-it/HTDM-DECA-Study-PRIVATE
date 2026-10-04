// ============================================================================
// 1. Imports and Dependencies
// UI icons, official DECA types, and master case repository functions
// ============================================================================
import React, { useState } from 'react';
import {
  Lock,
  KeyRound,
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  Play,
  Printer,
  ShieldCheck,
  Award,
  HelpCircle,
  X,
  FileText,
} from 'lucide-react';
import { DecaCaseStudy, InstructionalArea } from '../types/deca';
import { getAllCases, saveCustomCase, INSTRUCTIONAL_AREAS } from '../data/cases';

// ============================================================================
// 2. Component Props Interface
// Callback passed to launch a selected scenario directly into the rehearsal room
// ============================================================================
interface AdminCaseBankProps {
  onSelectCaseForPractice: (caseStudy: DecaCaseStudy) => void;
}

// ============================================================================
// 3. AdminCaseBank Component Definition
// Secure administrative repository allowing full inspection of briefs, benchmarks, and keys
// ============================================================================
export const AdminCaseBank: React.FC<AdminCaseBankProps> = ({
  onSelectCaseForPractice,
}) => {
  // --------------------------------------------------------------------------
  // 4. Administrative Authentication State
  // Controls access to confidential judge answer keys, benchmark models, and authoring tools
  // --------------------------------------------------------------------------
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return (
      sessionStorage.getItem('deca_admin_unlocked') === 'true' ||
      sessionStorage.getItem('deca_api_passcode_authenticated') === 'true'
    );
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // --------------------------------------------------------------------------
  // 5. Active Case Filters and Search State
  // Supports filtering across all 21 instructional areas, tiers, and search strings
  // --------------------------------------------------------------------------
  const [cases, setCases] = useState<DecaCaseStudy[]>(() => getAllCases());
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  // --------------------------------------------------------------------------
  // 6. Custom Scenario Creation Modal State
  // Collects scenario metadata, 5-paragraph brief, PIs, judge questions, and benchmarks
  // --------------------------------------------------------------------------
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newArea, setNewArea] = useState<InstructionalArea>('Customer Relations');
  const [newTier, setNewTier] = useState<'District' | 'State SCDC' | 'ICDC'>('State SCDC');
  const [newParticipantRole, setNewParticipantRole] = useState(
    'Director of Guest Experience & Hotel Operations Lead'
  );
  const [newJudgeRole, setNewJudgeRole] = useState('General Manager of Luxury Resort');
  const [newBackground, setNewBackground] = useState('');
  const [newChallenge, setNewChallenge] = useState('');
  const [newPIs, setNewPIs] = useState<string>(
    [
      'Explain the nature of positive customer relations',
      'Demonstrate a customer-service mindset',
      'Handle difficult customers and service breakdowns',
      'Interpret business policies to customers',
      'Foster service recovery to retain repeat guests',
    ].join('\n')
  );
  const [newJudgeQ1, setNewJudgeQ1] = useState(
    'What immediate operational steps will your team deploy today?'
  );
  const [newJudgeQ2, setNewJudgeQ2] = useState(
    'How will this decision impact our Average Daily Rate (ADR) and guest satisfaction?'
  );
  const [newBenchmark, setNewBenchmark] = useState(
    'Empower frontline associates with $250 recovery limit.\nPersonalized apology letter from General Manager.'
  );

  // --------------------------------------------------------------------------
  // 7. Passcode Verification Submission Handler
  // Authenticates advisor or admin credentials and unlocks full scenario keys
  // --------------------------------------------------------------------------
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = passwordInput.trim();
    const savedApiPass = sessionStorage.getItem('deca_api_password_saved');
    if (
      cleanInput === 'DECAStudy' ||
      cleanInput === 'deca2026' ||
      (savedApiPass && cleanInput === savedApiPass)
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('deca_admin_unlocked', 'true');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // --------------------------------------------------------------------------
  // 8. Custom Case Persistence Handler
  // Validates inputs, parses 5 PIs, generates unique ID, and saves to localStorage
  // --------------------------------------------------------------------------
  const handleCreateCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newBackground.trim()) return;

    const parsedPIs = newPIs
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .slice(0, 5)
      .map((name) => ({
        name,
        description: 'Demonstrate competency and operational mastery for ' + name,
      }));

    const parsedBenchmark = newBenchmark
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const customCase: DecaCaseStudy = {
      id: 'custom-' + Date.now(),
      title: newTitle.trim(),
      instructionalArea: newArea,
      tier: newTier,
      event: 'Hospitality Services Team Decision Making (HTDM)',
      participantRole: newParticipantRole.trim(),
      judgeRole: newJudgeRole.trim(),
      timePrepMinutes: 30,
      timePresentationMinutes: 15,
      performanceIndicators: parsedPIs,
      twentyFirstCenturySkills: [
        'Critical Thinking',
        'Problem Solving',
        'Communication',
        'Collaboration',
      ],
      background: newBackground.trim(),
      challenge: newChallenge.trim(),
      judgeQuestions: [newJudgeQ1.trim(), newJudgeQ2.trim()],
      benchmarkPoints: parsedBenchmark,
      isCustom: true,
    };

    saveCustomCase(customCase);
    setCases(getAllCases());
    setIsAddModalOpen(false);
    setExpandedCaseId(customCase.id);
  };

  // --------------------------------------------------------------------------
  // 9. Case Filtering and Search Calculation
  // Computes active subset based on instructional area, tournament tier, and search query
  // --------------------------------------------------------------------------
  const filteredCases = cases.filter((c) => {
    const matchesArea =
      selectedArea === 'All' || c.instructionalArea === selectedArea;
    const matchesTier = selectedTier === 'All' || c.tier === selectedTier;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      c.title.toLowerCase().includes(query) ||
      c.background.toLowerCase().includes(query) ||
      c.performanceIndicators.some((pi) =>
        pi.name.toLowerCase().includes(query)
      );
    return matchesArea && matchesTier && matchesSearch;
  });

  // --------------------------------------------------------------------------
  // 10. Passcode Gate Rendering (Unauthenticated View)
  // Renders confidential login prompt protecting answer keys and rubrics
  // --------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 bg-[#0b0f19] text-slate-100">
        <div className="bg-[#111827] p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-800 max-w-md w-full space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto shadow-inner">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center space-y-2">
            <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
              CONFIDENTIAL REPOSITORY
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Admin Case Bank
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enter the authorized access passcode to unlock all official DECA Hospitality Services case briefs, model benchmarks, and judge rubrics across all 21 instructional areas.
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Admin Passcode</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter access passcode..."
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  className={`w-full px-4 py-3 bg-[#0b0f19] border rounded-xl text-white text-sm focus:outline-none focus:ring-2 ${
                    passwordError
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
              </div>
              {passwordError && (
                <p className="text-[11px] text-rose-400 font-medium">
                  Incorrect passcode. Access denied.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              Unlock Case Bank
            </button>
          </form>

          <div className="pt-2 border-t border-slate-800 text-center">
            <span className="text-[11px] text-slate-500">
              DECA Hospitality Services Team Decision Making (HTDM)
            </span>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 11. Authenticated Workspace Rendering (Unlocked View)
  // Full repository view displaying all 21 topic categories, answer keys, and authoring tools
  // --------------------------------------------------------------------------
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#0b0f19] text-slate-100 p-6 md:p-10 space-y-7 select-none">
      {/* ----------------------------------------------------------------------
          12. Header Section: Title, Security Status, and Add Case Button
      ---------------------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Admin Case Bank · Master Access Unlocked</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Official DECA HTDM Case Studies & Judge Answer Keys
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Complete bank of scenarios spanning all 21 official DECA instructional areas, with confidential judge answer keys and benchmark talking points.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/30 self-start md:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Case</span>
        </button>
      </div>

      {/* ----------------------------------------------------------------------
          13. All 21 Instructional Area Category Cards
          Displays scenario counts per topic and enables quick filtering
      ---------------------------------------------------------------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 max-h-56 overflow-y-auto pr-1">
        {INSTRUCTIONAL_AREAS.map((area) => {
          const areaCount = cases.filter((c) => c.instructionalArea === area).length;
          const isSelected = selectedArea === area;
          return (
            <div
              key={area}
              onClick={() => setSelectedArea(isSelected ? 'All' : area)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-900/40'
                  : 'bg-[#111827] border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="text-xl font-extrabold text-white">{areaCount}</div>
              <div className="text-[11px] font-bold truncate mt-0.5">{area}</div>
              <div className="text-[9px] text-slate-400 font-medium">HTDM Cases</div>
            </div>
          );
        })}
      </div>

      {/* ----------------------------------------------------------------------
          14. Search Bar and Topic Dropdown Filter
          Real-time query matching across scenario backgrounds, PIs, and benchmarks
      ---------------------------------------------------------------------- */}
      <div className="bg-[#111827] p-4 rounded-2xl border border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search all scenarios, PIs, or judge keys..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
        </div>

        {/* Dropdown Filters */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none"
          >
            <option value="All">All 21 Instructional Areas ({cases.length})</option>
            {INSTRUCTIONAL_AREAS.map((area) => (
              <option key={area} value={area}>
                {area} ({cases.filter((c) => c.instructionalArea === area).length})
              </option>
            ))}
          </select>

          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none"
          >
            <option value="All">All Tiers</option>
            <option value="District">District</option>
            <option value="State SCDC">State SCDC</option>
            <option value="ICDC">ICDC</option>
          </select>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          15. Case Study Accordion Cards List
          Detailed scenario prompts with full judge answer keys and rubric benchmarks
      ---------------------------------------------------------------------- */}
      <div className="space-y-4">
        <div className="text-xs font-semibold text-slate-400">
          Showing {filteredCases.length} Hospitality Services case studies across all instructional areas
        </div>

        <div className="space-y-3">
          {filteredCases.map((c) => {
            const isExpanded = expandedCaseId === c.id;
            const paragraphs = c.background
              .split(/\n\s*\n/)
              .map((p) => p.trim())
              .filter(Boolean);

            return (
              <div
                key={c.id}
                className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedCaseId(isExpanded ? null : c.id)}
                  className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800/40 transition-colors"
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
                        {c.isCustom && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                            Custom
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500 font-mono">
                          30m Prep · 15m Present
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {c.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Participants: {c.participantRole} · Judge: {c.judgeRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCaseForPractice(c);
                      }}
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
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
                    16. Expanded Case Details & Confidential Judge Keys
                ------------------------------------------------------------ */}
                {isExpanded && (
                  <div className="p-6 pt-0 border-t border-slate-800 space-y-5 bg-[#0c111d]/70 animate-in fade-in duration-150">
                    {/* Background paragraphs */}
                    <div className="mt-4 p-4 bg-[#0b0f19] rounded-xl border border-slate-800 space-y-3">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                        Official 5-Paragraph Brief
                      </div>
                      <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
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

                    {/* Performance Indicators */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        5 Performance Indicators Evaluated
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {c.performanceIndicators.map((pi, piIdx) => (
                          <div
                            key={piIdx}
                            className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs"
                          >
                            <span className="text-blue-400 font-bold mr-1.5">{piIdx + 1}.</span>
                            <span className="text-white font-medium">{pi.name}</span>
                            <p className="text-[11px] text-slate-400 mt-1">{pi.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Judge Questions and Benchmark Answer Keys */}
                    <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-3">
                      <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        <Award className="w-4 h-4" />
                        <span>Confidential Judge Answer Keys & Benchmark Talking Points</span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-300 block">
                          Judge Follow-Up Questions (Asked at Minute 10–12):
                        </span>
                        <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                          <li>{c.judgeQuestions[0]}</li>
                          <li>{c.judgeQuestions[1]}</li>
                        </ul>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-emerald-500/20">
                        <span className="text-[11px] font-bold text-slate-300 block">
                          Ideal Benchmark Scoring Criteria:
                        </span>
                        <ul className="space-y-1 text-xs text-emerald-200">
                          {c.benchmarkPoints.map((bp, bpIdx) => (
                            <li key={bpIdx} className="flex items-start space-x-2">
                              <span className="text-emerald-400 font-bold shrink-0">✓</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => onSelectCaseForPractice(c)}
                        className="flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/30 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Rehearse This Scenario</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          17. Add Custom Scenario Modal Dialog
          Enables coaches and students to input custom district or invitational cases
      ---------------------------------------------------------------------- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111827] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">Create Custom HTDM Scenario</h3>
                <p className="text-xs text-slate-400">
                  Add custom school or invitational DECA case studies to your local library.
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCase} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Scenario Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navigating Corporate Attrition at Grand Plaza"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Instructional Area</label>
                  <select
                    value={newArea}
                    onChange={(e) => setNewArea(e.target.value as InstructionalArea)}
                    className="w-full px-3 py-2 bg-[#0b0f19] border border-slate-700 rounded-xl text-white text-xs focus:outline-none"
                  >
                    {INSTRUCTIONAL_AREAS.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Competition Tier</label>
                  <select
                    value={newTier}
                    onChange={(e) =>
                      setNewTier(e.target.value as 'District' | 'State SCDC' | 'ICDC')
                    }
                    className="w-full px-3 py-2 bg-[#0b0f19] border border-slate-700 rounded-xl text-white text-xs focus:outline-none"
                  >
                    <option value="District">District</option>
                    <option value="State SCDC">State SCDC</option>
                    <option value="ICDC">ICDC</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">
                  Case Brief Background (4–5 Paragraphs Recommended)
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Paste or write the 4-5 paragraph case scenario..."
                  value={newBackground}
                  onChange={(e) => setNewBackground(e.target.value)}
                  className="w-full p-3 bg-[#0b0f19] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">The Challenge / Directive</label>
                <input
                  type="text"
                  required
                  placeholder="You and your partner must present a 15-minute operational plan..."
                  value={newChallenge}
                  onChange={(e) => setNewChallenge(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">
                  5 Performance Indicators (1 per line)
                </label>
                <textarea
                  rows={4}
                  value={newPIs}
                  onChange={(e) => setNewPIs(e.target.value)}
                  className="w-full p-3 bg-[#0b0f19] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold"
                >
                  Save Scenario to Bank
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
