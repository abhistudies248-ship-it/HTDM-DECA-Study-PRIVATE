// ============================================================================
// DECA Hospitality Services Team Decision Making (HTDM) - Core Type Definitions
// Defines all official DECA Competitive Event instructional areas, rubrics, and data models
// ============================================================================

/**
 * Official DECA Business Administration Core & Hospitality Cluster Instructional Areas
 * Covers all 21 competitive knowledge areas evaluated at District, State (SCDC), and International (ICDC) tournaments
 */
export type InstructionalArea =
  | 'Business Law'
  | 'Communications'
  | 'Customer Relations'
  | 'Economics'
  | 'Emotional Intelligence'
  | 'Entrepreneurship'
  | 'Financial Analysis'
  | 'Human Resources Management'
  | 'Information Management'
  | 'Knowledge Management'
  | 'Marketing'
  | 'Market Planning'
  | 'Operations'
  | 'Pricing'
  | 'Product/Service Management'
  | 'Professional Development'
  | 'Promotion'
  | 'Quality Management'
  | 'Risk Management'
  | 'Selling'
  | 'Strategic Management';

/**
 * Performance Indicator (PI) evaluated by the judge against official rubric tiers
 * Includes specific competency statement and hospitality contextualization
 */
export interface PerformanceIndicator {
  code?: string;
  name: string;
  description: string;
}

/**
 * Authentic DECA HTDM Case Study structure
 * Strictly 2 Participants + 1 Industry Judge (Hotel GM / Regional VP)
 * 30:00 team prep period followed by 15:00 executive presentation & judge Q&A
 */
export interface DecaCaseStudy {
  id: string;
  title: string;
  instructionalArea: InstructionalArea;
  tier: 'District' | 'State SCDC' | 'ICDC';
  event: 'Hospitality Services Team Decision Making (HTDM)';
  participantRole: string;
  judgeRole: string;
  timePrepMinutes: number; // 30 minutes
  timePresentationMinutes: number; // 15 minutes
  performanceIndicators: PerformanceIndicator[]; // Strictly 5 PIs
  twentyFirstCenturySkills: string[];
  background: string;
  challenge: string;
  judgeQuestions: [string, string];
  benchmarkPoints: string[];
  isCustom?: boolean;
}

/**
 * Official 100-Point DECA HTDM Roleplay Evaluation Scorecard
 * Weighted: 70 pts Performance Indicators (14 pts each), 20 pts 21st Century Skills & Teamwork, 10 pts Overall Impression
 */
export interface RoleplayEvaluation {
  id: string;
  caseId: string;
  caseTitle: string;
  date: string;
  totalScore: number;
  tier: string;
  performanceIndicators: {
    name: string;
    score: number;
    maxScore: number;
    rating: 'Exceeds Expectations' | 'Meets Expectations' | 'Below Expectations';
    feedback: string;
    whatToSayNextTime: string;
  }[];
  centurySkillsScore: number;
  centurySkillsFeedback: {
    teamCollaboration: string;
    hospitalityMindset: string;
    criticalThinking: string;
    professionalDelivery: string;
  };
  overallImpression: string;
  topStrengths: string[];
  priorityImprovements: string[];
  judgeQuestionResponsesEvaluation?: {
    question: string;
    critique: string;
    idealAnswerKey: string;
  }[];
  videoAnalysis?: {
    visualPoise: string;
    eyeContact: string;
    vocalDelivery: string;
  };
  nextFocusActionItem: string;
  durationSeconds: number;
  transcript?: string;
}

/**
 * Rehearsal Room Session state across WebSockets & WebRTC peer channels
 */
export interface PracticeRoomSession {
  roomCode: string;
  caseStudy: DecaCaseStudy;
  role: 'performer_1' | 'performer_2' | 'solo';
  stage: 'lobby' | 'prep' | 'presentation' | 'judge_qna' | 'evaluating' | 'results';
  prepSecondsLeft: number;
  presentationSecondsLeft: number;
}
