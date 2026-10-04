// ============================================================================
// DECA Hospitality Services Team Decision Making (HTDM) - Master Case Repository
// Consolidates all authentic case studies across all 21 official DECA Instructional Areas
// ============================================================================

import { DecaCaseStudy, InstructionalArea } from '../types/deca';

// ----------------------------------------------------------------------------
// Import Case Studies across all 21 Official DECA Instructional Areas
// ----------------------------------------------------------------------------
import { businessLawCases } from './businessLaw';
import { communicationsCases } from './communications';
import { customerRelationsCases } from './customerRelations';
import { economicsCases } from './economics';
import { emotionalIntelligenceCases } from './emotionalIntelligence';
import { entrepreneurshipCases } from './entrepreneurship';
import { financialAnalysisCases } from './financialAnalysis';
import { humanResourcesCases } from './humanResources';
import { informationManagementCases } from './informationManagement';
import { knowledgeManagementCases } from './knowledgeManagement';
import { marketingCases } from './marketing';
import { marketPlanningCases } from './marketPlanning';
import { operationsCases } from './operations';
import { pricingCases } from './pricing';
import { productServiceManagementCases } from './productServiceManagement';
import { professionalDevelopmentCases } from './professionalDevelopment';
import { promotionCases } from './promotion';
import { qualityManagementCases } from './qualityManagement';
import { riskManagementCases } from './riskManagement';
import { sellingCases } from './selling';
import { strategicManagementCases } from './strategicManagement';

/**
 * Complete List of all 21 Official DECA Business Administration & Hospitality Instructional Areas
 * Ordered according to official DECA competitive event guidelines
 */
export const INSTRUCTIONAL_AREAS: InstructionalArea[] = [
  'Business Law',
  'Communications',
  'Customer Relations',
  'Economics',
  'Emotional Intelligence',
  'Entrepreneurship',
  'Financial Analysis',
  'Human Resources Management',
  'Information Management',
  'Knowledge Management',
  'Marketing',
  'Market Planning',
  'Operations',
  'Pricing',
  'Product/Service Management',
  'Professional Development',
  'Promotion',
  'Quality Management',
  'Risk Management',
  'Selling',
  'Strategic Management',
];

/**
 * Master Collection of Case Studies for DECA HTDM Roleplays
 * Merges scenarios across all 21 instructional areas into a unified repository
 */
export const INITIAL_CASES: DecaCaseStudy[] = [
  ...businessLawCases,
  ...communicationsCases,
  ...customerRelationsCases,
  ...economicsCases,
  ...emotionalIntelligenceCases,
  ...entrepreneurshipCases,
  ...financialAnalysisCases,
  ...humanResourcesCases,
  ...informationManagementCases,
  ...knowledgeManagementCases,
  ...marketingCases,
  ...marketPlanningCases,
  ...operationsCases,
  ...pricingCases,
  ...productServiceManagementCases,
  ...professionalDevelopmentCases,
  ...promotionCases,
  ...qualityManagementCases,
  ...riskManagementCases,
  ...sellingCases,
  ...strategicManagementCases,
];

// Local storage key for persistent custom scenarios created in Admin Case Bank
const CUSTOM_CASES_STORAGE_KEY = 'deca_htdm_custom_cases_v2';

/**
 * Retrieves all available case studies, including initial built-in scenarios
 * and any custom user-created scenarios stored in browser localStorage
 */
export function getAllCases(): DecaCaseStudy[] {
  if (typeof window === 'undefined') {
    return INITIAL_CASES;
  }
  try {
    const raw = localStorage.getItem(CUSTOM_CASES_STORAGE_KEY);
    if (!raw) return INITIAL_CASES;
    const custom: DecaCaseStudy[] = JSON.parse(raw);
    return [...INITIAL_CASES, ...custom];
  } catch (e) {
    console.error('Failed to load custom cases from localStorage:', e);
    return INITIAL_CASES;
  }
}

/**
 * Persists a new or updated custom scenario to localStorage
 */
export function saveCustomCase(newCase: DecaCaseStudy): void {
  try {
    const raw = localStorage.getItem(CUSTOM_CASES_STORAGE_KEY);
    const existing: DecaCaseStudy[] = raw ? JSON.parse(raw) : [];
    const index = existing.findIndex((c) => c.id === newCase.id);
    if (index >= 0) {
      existing[index] = newCase;
    } else {
      existing.push(newCase);
    }
    localStorage.setItem(CUSTOM_CASES_STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save custom case to localStorage:', e);
  }
}

/**
 * Deletes a custom scenario by ID from localStorage
 */
export function deleteCustomCase(caseId: string): void {
  try {
    const raw = localStorage.getItem(CUSTOM_CASES_STORAGE_KEY);
    if (!raw) return;
    const existing: DecaCaseStudy[] = JSON.parse(raw);
    const filtered = existing.filter((c) => c.id !== caseId);
    localStorage.setItem(CUSTOM_CASES_STORAGE_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error('Failed to delete custom case from localStorage:', e);
  }
}
