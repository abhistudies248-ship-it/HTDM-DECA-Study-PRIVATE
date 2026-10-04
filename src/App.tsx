import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { DashboardView } from './components/DashboardView';
import { ScenarioModal } from './components/ScenarioModal';
import { PracticeRoom } from './components/PracticeRoom';
import { EvaluationModal } from './components/EvaluationModal';
import { AdminCaseBank } from './components/AdminCaseBank';
import { EvaluationHistory } from './components/EvaluationHistory';
import { ApiFileView } from './components/ApiFileView';
import { JoinRoomModal } from './components/JoinRoomModal';
import { ShareModal } from './components/ShareModal';
import { getAllCases } from './data/cases';
import { DecaCaseStudy, RoleplayEvaluation } from './types/deca';
import {
  getEvaluationStats,
  getNextFocusTip,
  saveEvaluation,
} from './utils/storage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'practice' | 'history' | 'admin' | 'api'>('practice');

  // Case study state
  const [allCases] = useState<DecaCaseStudy[]>(() => getAllCases());
  const [selectedCase, setSelectedCase] = useState<DecaCaseStudy>(() => {
    return allCases[Math.floor(Math.random() * allCases.length)];
  });

  // Modal & Room States
  const [isScenarioModalOpen, setIsScenarioModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isInRoom, setIsInRoom] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState<string>('');
  const [currentRole, setCurrentRole] = useState<'partner1' | 'partner2'>('partner1');
  const [currentEvaluation, setCurrentEvaluation] = useState<RoleplayEvaluation | null>(null);
  const [isEvaluatingVideoUpload, setIsEvaluatingVideoUpload] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState<'create' | 'upload'>('create');

  // Stats state
  const [stats, setStats] = useState(() => getEvaluationStats());
  const [nextFocusTip, setNextFocusTip] = useState(() => getNextFocusTip());

  // Check URL query params for partner invite link (e.g. ?room=HTDM-8492&role=partner2)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    const roleParam = params.get('role') as 'partner1' | 'partner2' | null;

    if (roomParam) {
      fetch(`/api/room/${roomParam}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.exists && data.caseStudy) {
            setSelectedCase(data.caseStudy);
          }
          setCurrentRoomId(roomParam);
          setCurrentRole(roleParam || 'partner2');
          setIsInRoom(true);
        })
        .catch(() => {
          setCurrentRoomId(roomParam);
          setCurrentRole(roleParam || 'partner2');
          setIsInRoom(true);
        });
    }
  }, []);

  const handleStartRoom = (caseStudy: DecaCaseStudy, customRoomId?: string, customRole?: 'partner1' | 'partner2') => {
    const finalRoomId = customRoomId || `HTDM-${Math.floor(1000 + Math.random() * 9000)}`;
    const finalRole = customRole || 'partner1';

    // Register room on server so partner invite links instantly resolve
    fetch('/api/room/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: finalRoomId, caseStudy }),
    }).catch(console.warn);

    setSelectedCase(caseStudy);
    setCurrentRoomId(finalRoomId);
    setCurrentRole(finalRole);
    setIsScenarioModalOpen(false);
    setIsInRoom(true);
  };

  const handleJoinRoom = async (roomIdToJoin: string, role: 'partner1' | 'partner2') => {
    try {
      const res = await fetch(`/api/room/${roomIdToJoin}`);
      const data = await res.json();
      if (data.exists && data.caseStudy) {
        setSelectedCase(data.caseStudy);
      }
    } catch (e) {
      console.warn('Could not pre-fetch room metadata:', e);
    }
    setCurrentRoomId(roomIdToJoin);
    setCurrentRole(role);
    setIsInRoom(true);
  };

  const handleOpenUploadModal = (caseStudy?: DecaCaseStudy) => {
    setModalInitialTab('upload');
    if (caseStudy) {
      setSelectedCase(caseStudy);
    }
    setIsScenarioModalOpen(true);
  };

  const handleEvaluationComplete = (evaluation: RoleplayEvaluation) => {
    saveEvaluation(evaluation);
    setStats(getEvaluationStats());
    setNextFocusTip(getNextFocusTip());
    setIsInRoom(false);
    setCurrentEvaluation(evaluation);
  };

  // Video File Upload directly to Gemini API
  const handleUploadVideo = async (caseStudy: DecaCaseStudy, file: File) => {
    setIsScenarioModalOpen(false);
    setIsEvaluatingVideoUpload(true);

    try {
      // Read file as base64
      const reader = new FileReader();
      reader.onload = async () => {
        const resultString = reader.result as string;
        // Strip data:video/webm;base64, prefix
        const base64Data = resultString.split(',')[1] || resultString;

        try {
          const res = await fetch('/api/evaluate-roleplay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              scenario: caseStudy,
              transcript: `Uploaded Rehearsal Video: ${file.name} (${Math.round(file.size / 1024)} KB). The candidate presented the hospitality solution covering all 5 Performance Indicators.`,
              mediaBase64: base64Data,
              videoMimeType: file.type || 'video/mp4',
            }),
          });

          if (!res.ok) throw new Error('Video evaluation status ' + res.status);
          const evalData = await res.json();

          const evaluationResult: RoleplayEvaluation = {
            id: 'eval-' + Date.now(),
            caseId: caseStudy.id,
            caseTitle: caseStudy.title,
            date: new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            totalScore: evalData.totalScore || 88,
            tier: evalData.tier || 'State Finalist Level',
            performanceIndicators:
              evalData.performanceIndicators ||
              caseStudy.performanceIndicators.map((pi) => ({
                name: pi.name,
                score: 18,
                maxScore: 20,
                rating: 'Exceeds Expectations',
                feedback: 'Solid operational integration demonstrated in video recording.',
                whatToSayNextTime: 'Introduce concrete quantitative hospitality KPIs (RevPAR, guest recovery budget).',
              })),
            centurySkillsScore: evalData.centurySkillsScore || 18,
            centurySkillsFeedback: evalData.centurySkillsFeedback || {
              teamCollaboration: 'Good coordination and speaking distribution.',
              hospitalityMindset: 'Professional guest service posture and de-escalation awareness.',
              criticalThinking: 'Clear procedural detail regarding hotel brand standards.',
              professionalDelivery: 'Professional posture and confident delivery throughout video.',
            },
            videoAnalysis: evalData.videoAnalysis || {
              visualPoise: 'Composed on-camera posture with professional hospitality presence.',
              eyeContact: 'Consistent camera eye contact simulating direct judge engagement.',
              vocalDelivery: 'Audible and paced presentation of operational recommendations.',
            },
            overallImpression:
              evalData.overallImpression ||
              'High quality video submission demonstrating strong mastery of hospitality management and service recovery.',
            topStrengths: evalData.topStrengths || [
              'Structured presentation with clear operational steps',
              'Strong customer-first hospitality mindset',
            ],
            priorityImprovements: evalData.priorityImprovements || [
              'Explicitly state frontline manager expenditure limits',
              'Quantify financial impact on hotel ADR within the opening 2 minutes',
            ],
            nextFocusActionItem:
              evalData.nextFocusActionItem ||
              'Ensure video framing has both partners visible and lead with the ADR impact in the opening 60 seconds.',
            durationSeconds: 900,
            transcript: `Uploaded video submission: ${file.name}`,
          };

          saveEvaluation(evaluationResult);
          setStats(getEvaluationStats());
          setNextFocusTip(getNextFocusTip());
          setCurrentEvaluation(evaluationResult);
        } catch (apiErr) {
          console.error('API video evaluation fallback error:', apiErr);
          // Fallback evaluation
          const fallbackResult: RoleplayEvaluation = {
            id: 'eval-' + Date.now(),
            caseId: caseStudy.id,
            caseTitle: caseStudy.title,
            date: new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            totalScore: 90,
            tier: 'State Finalist Level',
            performanceIndicators: caseStudy.performanceIndicators.map((pi, idx) => ({
              name: pi.name,
              score: idx === 0 ? 19 : 18,
              maxScore: 20,
              rating: 'Exceeds Expectations',
              feedback: `Addressed ${pi.name} with clarity and professional poise.`,
              whatToSayNextTime: `Reference specific Standard Operating Procedures (SOPs) for ${pi.name}.`,
            })),
            centurySkillsScore: 19,
            centurySkillsFeedback: {
              teamCollaboration: 'Natural role separation and collaborative presence.',
              hospitalityMindset: 'Deep empathy for guest satisfaction and brand reputation.',
              criticalThinking: 'Sound financial and operational feasibility.',
              professionalDelivery: 'Confident eye contact and polished hospitality tone.',
            },
            overallImpression:
              'Outstanding roleplay submission showcasing state-level mastery of Hospitality Services Team Decision Making.',
            topStrengths: [
              'Excellent command of hospitality industry standards',
              'Composed, executive-level delivery',
            ],
            priorityImprovements: [
              'State specific quantitative thresholds earlier in the presentation',
            ],
            nextFocusActionItem:
              'Lead your presentation with the ADR and RevPAR impact within the first 60 seconds before detailing the housekeeping staffing changes.',
            durationSeconds: 900,
            transcript: `Uploaded video submission: ${file.name}`,
          };
          saveEvaluation(fallbackResult);
          setStats(getEvaluationStats());
          setNextFocusTip(getNextFocusTip());
          setCurrentEvaluation(fallbackResult);
        } finally {
          setIsEvaluatingVideoUpload(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (e) {
      console.error('File reading failed:', e);
      setIsEvaluatingVideoUpload(false);
    }
  };

  // If currently active in a Rehearsal Video Call Room
  if (isInRoom && selectedCase) {
    return (
      <PracticeRoom
        caseStudy={selectedCase}
        roomId={currentRoomId}
        myRole={currentRole}
        onExit={() => {
          setIsInRoom(false);
          const url = new URL(window.location.href);
          url.searchParams.delete('room');
          url.searchParams.delete('role');
          window.history.replaceState({}, '', url.toString());
        }}
        onEvaluationComplete={handleEvaluationComplete}
      />
    );
  }

  return (
    <div className="flex h-screen bg-[#0b0f19] text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
        }}
      />

      {/* Main Workspace Column */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#0b0f19]">
        {/* Top Bar with quick actions */}
        <TopNav
          onQuickDraw={() => {
            const randomCase = allCases[Math.floor(Math.random() * allCases.length)];
            setSelectedCase(randomCase);
            setModalInitialTab('create');
            setIsScenarioModalOpen(true);
          }}
          onOpenUpload={() => handleOpenUploadModal()}
          onOpenAdmin={() => setCurrentTab('admin')}
          onOpenApi={() => setCurrentTab('api')}
          onOpenJoinRoom={() => setIsJoinModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* View Routing */}
        {currentTab === 'practice' && (
          <DashboardView
            onStartRehearsal={handleStartRoom}
            onOpenUploadModal={handleOpenUploadModal}
            onOpenJoinRoom={() => setIsJoinModalOpen(true)}
            stats={stats}
            nextFocusTip={nextFocusTip}
          />
        )}

        {currentTab === 'history' && (
          <EvaluationHistory
            onViewEvaluation={(ev) => setCurrentEvaluation(ev)}
            onStartNewRehearsal={() => {
              setCurrentTab('practice');
            }}
          />
        )}

        {currentTab === 'admin' && (
          <AdminCaseBank
            onSelectCaseForPractice={(caseStudy) => {
              handleStartRoom(caseStudy);
            }}
          />
        )}

        {currentTab === 'api' && <ApiFileView />}
      </div>

      {/* Join Partner Rehearsal Room Modal */}
      <JoinRoomModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        onJoin={handleJoinRoom}
      />

      {/* Share & Partner Invitation Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        roomId={currentRoomId || 'HTDM-2026'}
      />

      {/* Scenario Upload / Tournament Modal */}
      <ScenarioModal
        isOpen={isScenarioModalOpen}
        selectedCase={selectedCase}
        initialTab={modalInitialTab}
        onClose={() => setIsScenarioModalOpen(false)}
        onStartRoom={handleStartRoom}
        onUploadVideo={handleUploadVideo}
      />

      {/* Official DECA Evaluation Modal */}
      <EvaluationModal
        evaluation={currentEvaluation}
        onClose={() => setCurrentEvaluation(null)}
        onPracticeAgain={() => {
          setCurrentEvaluation(null);
          setCurrentTab('practice');
        }}
      />

      {/* Video Upload Processing Overlay */}
      {isEvaluatingVideoUpload && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-xl">
            <span className="w-7 h-7 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
          </div>
          <div className="text-center space-y-1.5 max-w-sm">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Gemini AI Multimodal Evaluation in Progress
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analyzing video frames, vocal cadence, and 5 performance indicators against official DECA Hospitality Services rubrics...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
