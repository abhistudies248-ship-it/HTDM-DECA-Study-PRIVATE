// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Strategic Management (10 Cases)
// Focuses on corporate mergers & acquisitions, asset re-flagging, sustainable ESG governance, and long-term hotel portfolio strategy
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const strategicManagementCases: DecaCaseStudy[] = [
  {
    id: 'sm-01',
    title: 'Post-Merger Brand Integration & ESG Decarbonization Strategy at Vanguard Hospitality Trust',
    instructionalArea: 'Strategic Management',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Strategy Officer & Vice President of Asset Transformation',
    judgeRole: 'Chairman of the Board of Trustees & Managing Director',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Formulate an integrated strategic vision and long-term corporate roadmap for a lodging portfolio',
        description: 'Harmonize operational workflows, brand standards, and cultural integration following a multi-property acquisition.'
      },
      {
        name: 'Design sustainable Environmental, Social, and Governance (ESG) strategies in hospitality operations',
        description: 'Implement comprehensive decarbonization, single-use plastic elimination, and LEED-certified energy management.'
      },
      {
        name: 'Evaluate strategic brand positioning and re-flagging options to maximize Net Operating Income (NOI)',
        description: 'Assess whether acquired boutique hotels should convert to a soft-branded luxury collection or remain independent.'
      },
      {
        name: 'Establish a Balanced Scorecard framework for monitoring multi-property hotel performance',
        description: 'Track key performance indicators across Financial Return on Invested Capital (ROIC), Guest Net Promoter Score (NPS), Internal Process Efficiency, and Associate Engagement.'
      },
      {
        name: 'Manage organizational change and executive stakeholder alignment during restructuring',
        description: 'Overcome corporate cultural friction, align general manager incentives, and communicate strategic priorities to institutional investors.'
      }
    ],
    twentyFirstCenturySkills: ['Strategic Visioning', 'ESG Governance', 'Systems Integration', 'Executive Board Presence'],
    background: `Vanguard Hospitality Trust is a publicly traded Real Estate Investment Trust (REIT) managing a $1.8 billion portfolio of 24 full-service luxury hotels and convention resorts across North America. The REIT recently completed a landmark $420 million acquisition of "Elysium Collection"—a portfolio of six boutique eco-luxury lifestyle resorts renowned for design excellence and high guest loyalty.

However, the acquisition has introduced critical strategic challenges:
1. Operational Synergies vs. Brand Identity: Corporate asset managers want to aggressively centralize accounting, procurement, and reservation systems to capture $8.5 million in projected annual cost synergies. However, the Elysium general managers and creative directors warn that stripping autonomy and forcing rigid corporate chain SOPs will destroy the bespoke bohemian culture that makes Elysium properties unique.
2. ESG & Carbon Footprint Mandates: Institutional pension fund investors holding 35% of Vanguard's shares have issued a binding resolution requiring all properties in the trust to achieve Net-Zero Carbon Operational emissions by 2030 and eliminate 100% of guest-facing single-use plastics within 18 months, or face divestment. The newly acquired properties lack modern smart energy management systems and currently produce significant food waste.
3. Brand Architecture Dilemma: Ownership must decide whether to link Elysium properties to a major global loyalty flag (e.g., Marriott Autograph Collection, Hyatt Unbound, Hilton Curio) to access millions of global loyalty members and reduce customer acquisition costs, or keep them completely independent to preserve exclusive boutique mystique and avoid 12% royalty fees.

The Chairman of the Board of Trustees has convened a special executive board session to evaluate the post-merger integration blueprint.

You and your partner (Chief Strategy Officer and Vice President of Asset Transformation) must present a Comprehensive 5-Year Strategic Master Plan to the Chairman of the Board of Trustees (the judge).`,
    challenge: 'Deliver a 15-minute executive board-level strategic master plan to the Chairman. Present a balanced integration framework that captures procurement synergies without harming boutique culture, details an ambitious ESG decarbonization roadmap, evaluates franchise re-flagging, and models Balanced Scorecard KPIs.',
    judgeQuestions: [
      'How will your strategic integration achieve our $8.5 million in cost synergies without homogenizing the unique guest experience that made the Elysium brand famous?',
      'Should we affiliate Elysium with a global hotel loyalty conglomerate to drive international bookings, or remain completely independent?'
    ],
    benchmarkPoints: [
      'Implement a "Center of Excellence" hybrid integration model: centralize back-of-house procurement (linens, F&B wholesale, software licenses) while leaving 100% of guest-facing touchpoints and programming under local boutique general manager control.',
      'Adopt a "Soft Brand Collection" partnership (e.g., Unbound Collection / Autograph Collection) that provides access to global booking distribution and loyalty point redemptions while contractually guaranteeing total creative independence over local branding, uniform design, and culinary concepts.',
      'Deploy the "Vanguard Green Horizon 2030" ESG roadmap: install smart IoT guest room thermostat sensors (cutting HVAC power consumption by 28%), partner with commercial bio-digesters for on-site composting, and eliminate all single-use plastics through luxury refillable ceramic bath amenities.',
      'Construct a strategic Balanced Scorecard tracking 4 strategic pillars: Financial (NOI growth > 7.5%), Customer (NPS > 65), Internal Operational Excellence (zero-defect QA compliance), and ESG Milestones (20% annual carbon reduction).'
    ]
  },
  {
    id: 'sm-02',
    title: 'Independent vs. Franchise Soft-Brand Re-Flagging Dilemma: The Grand Monarch Hotel',
    instructionalArea: 'Strategic Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Strategic Development Officers & Asset Asset Managers',
    judgeRole: 'Managing Partner of Monarch Hospitality Investment Fund',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate strategic lodging branding models: Independent vs. Hard-Brand vs. Soft-Brand Collection',
        description: 'Weigh total cost of brand affiliation (10-14% of gross room revenue) against global distribution scale.'
      },
      {
        name: 'Calculate net direct channel booking contribution versus franchise royalty fees',
        description: 'Model whether access to 180 million global loyalty members offsets franchise fees, PIP capital, and brand dues.'
      },
      {
        name: 'Assess Property Improvement Plan (PIP) capital expenditure obligations during re-flagging',
        description: 'Analyze the ROI of spending $6.5 million on mandatory brand PMS, signage, and mattress standards.'
      },
      {
        name: 'Preserve authentic historic local brand identity within a global franchise network',
        description: 'Negotiate contractual waivers protecting historic architectural integrity and independent restaurant branding.'
      },
      {
        name: 'Formulate an 18-month strategic conversion and risk mitigation transition plan',
        description: 'Establish milestones for staff training, PMS migration, and global loyalty integration.'
      }
    ],
    twentyFirstCenturySkills: ['Strategic Analysis', 'Financial Modeling', 'Franchise Governance', 'Executive Negotiation'],
    background: `The Grand Monarch is an iconic 400-room independent historic luxury hotel that has operated for over 75 years in a prime metropolitan center. The property boasts legendary architectural grandeur and historic prestige.

However, the hotel’s independent operating model has become financially unsustainable:
1. Online Travel Agencies (OTAs) currently account for 54% of all transient room bookings, costing the property an astounding $2.4 million annually in 18% OTA commission fees.
2. The hotel struggles to capture high-volume weekday corporate business travelers, who increasingly book through corporate portals requiring global hotel loyalty program affiliations (such as Marriott Bonvoy, World of Hyatt, or Hilton Honors).
3. The hotel’s RevPAR index against its primary competitive set has slipped from 104 to 88 over the past three years.

Ownership is evaluating a monumental strategic decision: whether to affiliate with a global luxury \"Soft Brand Collection\" (such as Marriott’s Autograph Collection, Hyatt’s Unbound Collection, or Curio by Hilton).
- Affiliating requires paying an estimated 11.5% in ongoing franchise royalty, marketing, and loyalty fees, plus an immediate $6.5 million Property Improvement Plan (PIP) renovation to upgrade in-room technology, fire safety, and ADA accessibility.
- However, the global brand promises to shift the hotel’s business mix: boosting direct loyalty bookings, reducing OTA reliance to under 18%, and driving corporate RFP business that could lift RevPAR by 22%.

You and your partner (Chief Strategic Development Officers and Asset Managers) are presenting your Strategic Re-Flagging Feasibility Analysis to the Managing Partner of the investment fund (the judge).`,
    challenge: 'Deliver a 15-minute executive presentation comparing the financial pro-forma of remaining independent versus joining a global soft-brand collection, detailing PIP capex ROI, fee negotiations, and brand preservation.',
    judgeQuestions: [
      'If we pay 11.5% in franchise fees and spend $6.5 million on a PIP, how many years will it take for the increase in RevPAR to actually put more net cash in our investors’ pockets?',
      'How do we ensure that joining a global mega-brand doesn’t make our historic hotel feel like a generic corporate chain property?'
    ],
    benchmarkPoints: [
      'Present rigorous pro-forma comparison: prove that joining a Soft Brand lifts RevPAR from $185 to $225 and slashes third-party OTA commissions by $1.4 million annually, generating an incremental $1.85 million in annual Net Operating Income (NOI).',
      'Model the $6.5 million PIP capital payback period at 3.5 years, while enhancing the terminal real estate asset valuation by an estimated $18 million.',
      'Negotiate strict Soft-Brand contractual covenants: retain the historic "The Grand Monarch" name, preserve independent culinary branding for the signature restaurant, and secure non-compete radius protection of 3 miles.',
      'Structure the 18-month transition: phase PIP renovations during off-peak winter months to minimize guest disruption, transitioning systems seamlessly onto the global CRS platform.'
    ]
  },
  {
    id: 'sm-03',
    title: 'Asset-Light Restructuring & Hotel Real Estate OpCo/PropCo Split: Pinnacle Lodging Group',
    instructionalArea: 'Strategic Management',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Financial Strategists & Corporate Restructuring Directors',
    judgeRole: 'Chief Executive Officer of Pinnacle Lodging Group & Board Chair',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the strategic mechanics and capital efficiency of the OpCo / PropCo split in hospitality',
        description: 'Separate physical hotel real estate ownership (Property Company) from brand hospitality operations (Operating Company).'
      },
      {
        name: 'Evaluate the financial multiples and valuation arbitrage of asset-light management companies',
        description: 'Demonstrate how management companies trade at 16x-20x EBITDA multiples versus 10x-12x for brick-and-mortar real estate.'
      },
      {
        name: 'Structure long-term hotel management and franchise licensing agreements (HMAs)',
        description: 'Define base management fees (3% of gross revenue) and incentive management fees (10% of GOP).'
      },
      {
        name: 'Formulate capital recycling strategies to accelerate brand growth and debt reduction',
        description: 'Monetize $600 million in owned hotel real estate assets to eliminate expensive debt and fund tech innovation.'
      },
      {
        name: 'Manage complex stakeholder communications during corporate legal and tax restructuring',
        description: 'Align institutional lenders, public shareholders, and hotel general managers during organizational split.'
      }
    ],
    twentyFirstCenturySkills: ['Financial Engineering', 'Corporate Restructuring', 'Capital Markets Literacy', 'Strategic Vision'],
    background: `Pinnacle Lodging Group is a publicly traded hospitality enterprise that currently owns and operates 32 full-service hotels comprising 8,500 rooms across North America. The company operates under an antiquated \"owner-operator\" model: owning both the physical land and buildings while also managing daily hotel operations.

This traditional structure has severely depressed Pinnacle’s stock valuation:
1. Carrying $1.1 billion in brick-and-mortar hotel real estate debt has strained the balance sheet, especially in a high-interest-rate environment where mortgage refinancing costs have doubled.
2. Wall Street equity analysts penalize the stock because capital expenditure (renovating guestrooms, replacing roofs and chillers) consumes 70% of annual operating cash flow, leaving little capital for expansion or dividend payouts.
3. Pinnacle trades at an EBITDA valuation multiple of only 9.2x, while \"asset-light\" hospitality brand competitors (like Marriott, Hilton, and Choice Hotels) trade at lucrative multiples of 18x to 22x EBITDA because their pure fee-based revenue streams are predictable, high-margin, and capex-free.

The Chief Executive Officer and Board of Directors want to execute a bold strategic restructuring: an \"OpCo / PropCo Split\":
- Spin off the physical real estate assets into a separate Real Estate Investment Trust (PropCo) or sell the real estate to institutional private equity buyers in a Sale-and-Leaseback / Sale-and-Manage transaction.
- Retain Pinnacle as a pure, asset-light hospitality management and franchising enterprise (OpCo), earning high-margin management fees while shedding $1.1 billion in property debt.

You and your partner (Chief Financial Strategists and Corporate Restructuring Directors) are presenting your OpCo/PropCo Strategic Blueprint to the CEO and Board Chair (the judge).`,
    challenge: 'Deliver a 15-minute executive presentation detailing the transaction structure of the OpCo/PropCo split, long-term Hotel Management Agreement (HMA) fee terms, debt retirement, and equity multiple expansion.',
    judgeQuestions: [
      'If Pinnacle sells off its physical hotel real estate, doesn’t that weaken the company by stripping away our tangible asset collateral and property appreciation upside?',
      'How do we ensure that the new real estate buyers (PropCo) continue to fund the millions in capital renovations needed to keep our hotels modern and competitive?'
    ],
    benchmarkPoints: [
      'Demonstrate the Valuation Arbitrage: proving that transforming Pinnacle into an asset-light management company elevates its valuation multiple from 9.2x to 18x EBITDA, unlocking an estimated $750 million in net shareholder equity value.',
      'Deleverage the Balance Sheet: utilize $620 million in net proceeds from real estate monetization to retire high-interest debt, saving $48 million in annual interest expense.',
      'Structure 30-year unbreachable Hotel Management Agreements (HMAs): secure 3.5% base management fees on gross revenue plus 10% incentive fees on Gross Operating Profit (GOP), providing stable, high-margin cash flow.',
      'Enforce mandatory Furniture, Fixtures & Equipment (FF&E) reserve covenants: contractually require PropCo to fund a mandatory 5% annual FF&E capital escrow account to guarantee perpetual property reinvestment.'
    ]
  },
  {
    id: 'sm-04',
    title: 'Long-Term Climate Resilience & Catastrophe Risk Strategy: Coastal Palms Resort Portfolio',
    instructionalArea: 'Strategic Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Sustainability Officers & Climate Risk Strategists',
    judgeRole: 'Managing Director of Coastal Hospitality Asset Fund',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze long-term macroeconomic, insurance, and environmental climate risks in coastal lodging',
        description: 'Assess rising sea levels, Category 5 hurricane intensity, coastal erosion, and saltwater intrusion.'
      },
      {
        name: 'Evaluate soaring property casualty insurance premiums and uninsurable market risks',
        description: 'Navigate 140% insurance premium hikes and mandatory 10% named-storm catastrophic deductibles.'
      },
      {
        name: 'Formulate structural engineering and nature-based coastal defense capital investment plans',
        description: 'Deploy living oyster reefs, restored mangrove wetlands, flood gates, and elevated electrical mechanical plants.'
      },
      {
        name: 'Establish disaster recovery financial reserves and parametric insurance hedging instruments',
        description: 'Utilize index-based parametric catastrophe policies that pay out within 72 hours of hurricane wind speeds.'
      },
      {
        name: 'Incorporate Task Force on Climate-Related Financial Disclosures (TCFD) into institutional investor reporting',
        description: 'Disclose forward-looking physical climate risk scenarios to preserve asset access to institutional capital.'
      }
    ],
    twentyFirstCenturySkills: ['Climate Risk Architecture', 'Insurance Financial Modeling', 'Environmental Engineering', 'Strategic Resilience'],
    background: `Coastal Hospitality Asset Fund owns a $450 million portfolio of four premier beachfront resorts situated along the Atlantic hurricane and storm-surge corridor. Over the past five years, accelerating climate volatility has turned physical environmental risk into an existential financial threat:
1. Property casualty and flood insurance premiums across the four resorts have skyrocketed from $1.8 million to an unsustainable $5.2 million annually, eroding 22% of total portfolio Net Operating Income.
2. Two major commercial insurance syndicates recently announced they are withdrawing from coastal underwriting entirely, leaving the portfolio facing the prospect of being partially uninsurable within three years.
3. Coastal erosion has stripped away 40 feet of protective beach dunes in front of the flagship 350-room resort, leaving critical oceanfront dining patios and central electrical switchgear vulnerable to minor storm surges.
4. Institutional pension fund investors who provide 60% of the asset fund’s equity capital have demanded a formal TCFD Climate Adaptation & Resilience Strategy before releasing future investment tranches.

The Managing Director has allocated an initial $12 million strategic capital reserve to execute a comprehensive, 10-year Climate Adaptation, Physical Hardening, and Insurance Restructuring Master Plan.

You and your partner (Chief Sustainability Officers and Climate Risk Strategists) are presenting your Climate Resilience Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing physical asset hardening, nature-based shoreline defenses, parametric insurance hedging, insurance premium renegotiation, and TCFD compliance.',
    judgeQuestions: [
      'How does spending $12 million on sea defenses and oyster reefs help reduce our crushing $5.2 million annual property insurance premiums?',
      'What is parametric insurance, and how does it protect our resort’s cash flow better than traditional hurricane property insurance?'
    ],
    benchmarkPoints: [
      'Deploy Nature-Based Shoreline Protection: construct living offshore artificial oyster reefs and native mangrove buffers ($4.2M), dissipating 60% of wave surge energy and reversing beach sand erosion.',
      'Execute Critical Infrastructure Hardening: relocate emergency generators, electrical switchgear, and chiller plants from basements to reinforced 3rd-floor mechanical mezzanines, ensuring immediate operational survivability.',
      'Structure Parametric Catastrophe Insurance: purchase specialized index-based policies that trigger automatic cash payouts within 72 hours if hurricane wind speeds exceed 130 mph at the resort coordinates, bypassing lengthy insurance adjusters.',
      'Leverage physical risk reduction to negotiate with Lloyd’s of London syndicates, cutting annual insurance premiums by 30% ($1.5M annual savings) and securing long-term institutional asset insurability.'
    ]
  },
  {
    id: 'sm-05',
    title: 'Strategic Expansion into High-Density Urban Micro-Boutiques: Metro Living Trust',
    instructionalArea: 'Strategic Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Development Officers & Urban Portfolio Strategists',
    judgeRole: 'Managing Director of Real Estate Private Equity Fund',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze urban demographic trends and consumer demand for high-density micro-boutique lodging',
        description: 'Examine solo business travelers and city explorers seeking efficient, well-designed 160-sq-ft urban rooms.'
      },
      {
        name: 'Calculate Revenue per Available Square Foot (RevPASF) versus traditional hotel configurations',
        description: 'Model how 2.2x guestroom density per floorplate maximizes gross revenue in expensive downtown real estate.'
      },
      {
        name: 'Design high-margin public social placemaking to compensate for compact private room footprints',
        description: 'Incorporate vibrant rooftop cocktail lounges, third-wave espresso bars, and communal coworking living rooms.'
      },
      {
        name: 'Structure adaptive reuse conversion strategies for vacant downtown commercial office buildings',
        description: 'Convert obsolete Class-B office floorplates into high-density lifestyle micro-hotels at 40% lower capex.'
      },
      {
        name: 'Formulate an agile 5-year multi-city brand scaling and capital deployment roadmap',
        description: 'Target strategic gateway markets (Boston, Seattle, Washington D.C., Austin) for rapid brand rollout.'
      }
    ],
    twentyFirstCenturySkills: ['Urban Adaptive Reuse', 'RevPASF Modeling', 'Placemaking Strategy', 'Capital Allocation'],
    background: `Metro Living Trust is an urban hospitality private equity fund with $350 million in deployable capital. Across major metropolitan downtowns, historic commercial shifts have created a massive real estate disruption: Class-B and Class-C downtown commercial office buildings are sitting 40% vacant due to remote work, with property valuations collapsing by 50%.

Simultaneously, traditional urban hotels with expansive 400-square-foot rooms face crushing construction costs ($450,000+ per room key) and struggle with high labor overhead.

The trust wants to launch a disruptive new lifestyle hotel brand: \"KINETIC Urban Micro-Hotels\":
- Acquire distressed downtown office towers at steep discounts ($120 per square foot) and convert them into high-density, design-forward micro-boutique hotels.
- Guestrooms are engineered to 160 square feet with space-efficient Swiss-designed luxury: built-in king platform beds with luggage storage underneath, soundproof acoustic walls, integrated rainfall shower pods, smart lighting, and 55-inch 4K streaming monitors.
- By compressing room sizes, KINETIC fits 240 micro-suites into a floorplate that would typically hold only 100 traditional rooms.
- Guestrooms are priced at an accessible $165 to $195 per night (compared to $320+ at traditional downtown hotels), while generating a staggering $380 in Revenue per Available Square Foot (RevPASF).
- Public spaces are transformed into buzzing, high-margin social ecosystems: an artisanal ground-floor coffee shop and an open-air rooftop cocktail lounge that attract both hotel guests and trendy local urbanites.

You and your partner (Chief Development Officers and Urban Portfolio Strategists) are presenting your KINETIC Brand Launch & 5-Year Capital Deployment Plan to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the adaptive reuse economics, RevPASF unit financial models, social placemaking strategy, and 5-year multi-city scaling blueprint.',
    judgeQuestions: [
      'Won’t affluent travelers reject a 160-square-foot room as a glorified, cramped closet and choose an Airbnb or traditional hotel instead?',
      'What are the mechanical and architectural challenges of adding 240 private bathrooms into an old commercial office building designed with only two communal restrooms per floor?'
    ],
    benchmarkPoints: [
      'Highlight consumer psychology: modern urban travelers spend only 8 hours sleeping in their room; they prioritize pristine bedding, powerful water pressure, ultra-fast Wi-Fi, and vibrant social lobby energy over wasted empty floor space.',
      'Showcase RevPASF Financial Dominance: generating $380/sq ft annually out-yields traditional full-service hotels ($210/sq ft) by 80%, while lean automated staffing delivers an extraordinary 44% Gross Operating Profit (GOP) margin.',
      'Solve plumbing engineering: utilize core-drilled vertical utility risers and pre-fabricated modular bathroom pods, slashing conversion construction timelines by 35% compared to traditional stick-built hotels.',
      'Present 5-Year Capital Roadmap: deploy $120 million to acquire and convert four initial assets across Austin, Seattle, Boston, and Denver, scaling to 1,000 micro-suites with an exit cap-rate valuation of $280 million.'
    ]
  },
  {
    id: 'sm-06',
    title: 'AI Autonomous Operations & Long-Range Labor Modernization: FutureStay Hospitality',
    instructionalArea: 'Strategic Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Innovation Officers & Workforce Transformation Directors',
    judgeRole: 'Chief Executive Officer of FutureStay Hospitality International',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design an enterprise-level long-range digital transformation and automation roadmap',
        description: 'Integrate generative AI, robotic process automation (RPA), and autonomous IoT systems across a 30-hotel portfolio.'
      },
      {
        name: 'Harmonize automated operational efficiency with authentic human luxury hospitality',
        description: 'Automate back-of-house clerical tasks to elevate face-to-face personalized guest empathy and problem solving.'
      },
      {
        name: 'Mitigate labor union friction and employee displacement anxiety during automation',
        description: 'Establish binding \"Reskilling Guarantees\" and transition displaced workers into high-value experiential roles.'
      },
      {
        name: 'Structure cybersecurity, data ethics, and algorithmic governance frameworks',
        description: 'Ensure guest behavioral data collected by AI sensors complies with global privacy laws and ethical standards.'
      },
      {
        name: 'Calculate the 5-year Net Present Value (NPV) and Return on Invested Capital (ROIC) of hospitality automation',
        description: 'Demonstrate how a $15 million digital technology investment yields $42 million in permanent operational savings.'
      }
    ],
    twentyFirstCenturySkills: ['Digital Transformation Strategy', 'Labor Modernization', 'Ethical AI Governance', 'Long-Range Financial Planning'],
    background: `FutureStay Hospitality International operates 30 full-service business and lifestyle hotels employing over 4,800 workers. The hospitality industry faces structural, permanent labor shifts: hourly hospitality wages have escalated by 34% over the past four years, while employee turnover remains at an agonizing 52% annually.

Over 40% of hotel employee labor hours are spent on repetitive, low-value administrative and clerical tasks:
- Night auditors manually reconciling batch credit card transactions and re-keying folio entries.
- Front desk staff answering repetitive phone calls about checkout times and parking rates.
- Housekeeping supervisors spending 3 hours daily writing paper room cleaning assignments on clipboards.

The Chief Executive Officer wants to launch \"Vision 2030\"—an enterprise-wide, 5-year technological transformation that deploys artificial intelligence and autonomous robotics to automate routine tasks across all 30 properties.

However, the initiative has encountered fierce headwinds:
- The hospitality labor union representing 2,200 of FutureStay’s associates has threatened citywide strikes, alleging that management intends to \"replace human hospitality workers with cold machines.\"
- Several veteran General Managers have expressed deep skepticism, fearing that automating front desks and room delivery will strip away the personal warmth that defines the brand’s luxury reputation.

You and your partner (Chief Innovation Officers and Workforce Transformation Directors) are presenting your Vision 2030 Transformation Master Plan to the CEO (the judge).`,
    challenge: 'Deliver a 15-minute executive board-level presentation detailing the AI technology roadmap, human-centric workforce reskilling pacts, union negotiation strategy, brand protection, and 5-year financial NPV.',
    judgeQuestions: [
      'How will your strategy convince skeptical labor unions that our AI automation plan will protect employee livelihoods rather than triggering mass layoffs?',
      'If our hotels automate check-in, room service delivery, and billing, why will guests pay luxury hotel room rates rather than staying at a cheap unstaffed Airbnb?'
    ],
    benchmarkPoints: [
      'Establish the "Hospitality Human First Pledge": commit to a contractual Zero-Layoff Policy; all labor hours saved through AI automation are reinvested into retraining staff as "Bespoke Guest Experience Concierges".',
      'Automate Back-of-House Friction: deploy AI Robotic Process Automation (RPA) for nightly financial auditing, predictive housekeeping dispatch, and automated dynamic inventory distribution, cutting administrative waste by 65%.',
      'Deploy AI as an Associate Co-Pilot: equip guest-facing staff with real-time AI guest intelligence on smartwatches, instantly alerting associates to guest preferences, dietary allergies, and past complaints upon greeting.',
      'Demonstrate extraordinary financial returns: model a 5-year capital investment of $15 million delivering an Net Present Value (NPV) of $28.4 million with an Internal Rate of Return (IRR) of 34%.'
    ]
  },
  {
    id: 'sm-07',
    title: 'Crisis Turnaround & Capital Restructuring for an Over-Leveraged Resort: Summit Peak Lodge',
    instructionalArea: 'Strategic Management',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Restructuring Officers & Turnaround Strategists',
    judgeRole: 'Chair of Senior Lender Creditor Committee & Private Equity Sponsor',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Formulate emergency operational turnaround and cost-containment frameworks for distressed lodging assets',
        description: 'Execute rapid 90-day operational triage to halt negative cash bleed and stabilize core working capital.'
      },
      {
        name: 'Restructure senior mezzanine debt, loan covenants, and interest debt-service coverage ratios (DSCR)',
        description: 'Negotiate debt forbearance, interest rate caps, and equity-for-debt swaps with senior lenders.'
      },
      {
        name: 'Audit and eliminate non-core, unprofitable operational amenities and departmental loss leaders',
        description: 'Outsource unprofitable fine-dining operations and renegotiate expensive third-party service vendor contracts.'
      },
      {
        name: 'Formulate an aggressive commercial revenue recovery plan to elevate RevPAR and off-peak occupancy',
        description: 'Recapture lost corporate retreat business and restructure dynamic packaging.'
      },
      {
        name: 'Establish strict cash-flow visibility and 13-week rolling cash forecasts for creditor committees',
        description: 'Provide daily liquidity tracking and transparent operational recovery milestones.'
      }
    ],
    twentyFirstCenturySkills: ['Distressed Asset Turnaround', 'Debt Restructuring & DSCR', 'Crisis Financial Modeling', 'High-Stakes Creditor Negotiation'],
    background: `Summit Peak Lodge is a 300-room luxury mountain resort featuring a 25,000-square-foot spa, two championship golf courses, and an expansive conference center. The property is suffocating under $110 million in senior and mezzanine debt incurred during an ill-timed luxury expansion prior to a macroeconomic downturn.

The property is currently in acute financial distress:
1. Debt Service Default: The resort’s Net Operating Income (NOI) collapsed to $4.2 million, while annual debt service obligations stand at $8.8 million. The Debt Service Coverage Ratio (DSCR) has dropped to a catastrophic 0.48x (well below the mandatory 1.25x loan covenant), placing the resort in technical default.
2. Negative Cash Flow: The resort is burning $450,000 in cash every month. Without an immediate emergency restructuring, the resort will exhaust all operational cash reserves within 45 days, forcing a catastrophic Chapter 11 bankruptcy filing or foreclosure.
3. Operational Inefficiencies: Operating expenses are bloated: the resort maintains an unprofitable, 120-seat white-tablecloth fine-dining restaurant that lost $620,000 last year, alongside an overstaffed equestrian center losing $280,000 annually.
4. The Senior Lender Creditor Committee has convened to decide whether to foreclose on the property, liquidate the physical assets, or accept an emergency Turnaround and Debt Restructuring Plan.

You and your partner (Chief Restructuring Officers and Turnaround Strategists) have been brought in to present a comprehensive 18-month Crisis Turnaround & Capital Restructuring Plan to the Chair of the Creditor Committee (the judge).`,
    challenge: 'Deliver a 15-minute high-stakes creditor presentation detailing emergency operational cost triage, outsourcing unprofitable outlets, senior debt restructuring terms, and an 18-month path to restoring a 1.35x DSCR.',
    judgeQuestions: [
      'Why should our creditor committee agree to restructure and forgive portion of our debt rather than simply foreclosing on the resort and selling the real estate today?',
      'What immediate operational cost cuts will you execute in the first 30 days to halt our $450,000 monthly cash bleed?'
    ],
    benchmarkPoints: [
      'Execute immediate 30-day operational triage: shut down the money-losing fine-dining restaurant and lease the space to an acclaimed regional restaurant group for a triple-net $180,000 annual lease; sunset the money-losing equestrian program, immediately recovering $800,000 in annual cash drain.',
      'Present the Senior Debt Restructuring Proposal: negotiate a 24-month interest-only payment window at a modified 5.5% rate paired with a $15 million debt-for-equity swap, reducing annual debt service from $8.8M to $5.2M.',
      'Implement a 13-week rolling cash-flow forecast and strict dual-signature disbursement controls to guarantee transparency and preserve core liquidity.',
      'Restore financial solvency: lift NOI from $4.2M to $7.8M within 18 months, elevating DSCR to a healthy 1.45x and protecting $110 million in underlying asset value for creditors.'
    ]
  },
  {
    id: 'sm-08',
    title: 'International Joint Venture & Brand Expansion in Southeast Asia: Pacific Heritage Hotels',
    instructionalArea: 'Strategic Management',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Development Officers & Global Joint Venture Directors',
    judgeRole: 'Chairman of the Board of Directors & Lead Institutional Investor',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate foreign market entry strategies in international hospitality (Wholly Owned vs. JV vs. Licensing)',
        description: 'Assess legal risks, foreign ownership equity restrictions, and cross-border currency repatriation.'
      },
      {
        name: 'Structure international Joint Venture (JV) equity partnerships with regional property developers',
        description: 'Balance 51/49% equity ownership splits, board voting governance, and deadlock resolution mechanisms.'
      },
      {
        name: 'Adapt Western luxury brand standards to Asian cultural norms, religious customs, and aesthetic tastes',
        description: 'Incorporate Feng Shui architectural principles, private VIP dining salons, and ceremonial tea rituals.'
      },
      {
        name: 'Formulate an international distribution and marketing strategy targeting regional outbound travelers',
        description: 'Connect hotel booking engines with regional Asian super-apps (WeChat, Line, Grab, Alipay).'
      },
      {
        name: 'Establish comprehensive geopolitical, legal, and currency fluctuation risk mitigation frameworks',
        description: 'Hedge foreign exchange currency risks and navigate municipal zoning and foreign labor visa quotas.'
      }
    ],
    twentyFirstCenturySkills: ['Global Cultural Strategy', 'Cross-Border Negotiation', 'Joint Venture Structuring', 'Geopolitical Risk Analysis'],
    background: `Pacific Heritage Hotels is a prestigious North American luxury hospitality brand operating 12 acclaimed 5-star hotels. The company’s Board of Directors has approved a major strategic expansion: entering the booming luxury resort market in Southeast Asia (specifically Thailand, Vietnam, and Indonesia), where luxury tourism is growing at 12% annually.

However, international direct investment involves formidable strategic challenges:
1. Foreign Ownership Restrictions: Local statutes in target Southeast Asian nations strictly limit foreign corporate ownership of commercial real estate to a maximum of 49%, requiring Pacific Heritage to form an international Joint Venture (JV) with a regional domestic property conglomerate.
2. Partner Selection & Governance: Pacific Heritage is in preliminary discussions with \"Siam Real Estate Holdings,\" a major regional developer. However, Siam demands a 51% controlling equity stake, the right to appoint the General Manager, and authority to alter brand standards to save on construction costs.
3. Cultural Adaptation vs. Brand Integrity: The brand must adapt its physical properties to local Asian luxury expectations (incorporating extensive private dining suites, tea ceremony pavilions, and Feng Shui design) while strictly maintaining the core White Glove service standards that global luxury travelers expect.
4. Digital Distribution Divide: Over 75% of travel bookings in Southeast Asia occur via regional mobile super-apps (WeChat, Line, Kakao, Grab), platforms where Pacific Heritage currently has zero presence.

The Chairman of the Board has convened an executive session to evaluate the proposed Joint Venture Agreement and foreign market entry strategy.

You and your partner (Chief Development Officers and Global JV Directors) are presenting your International Expansion Blueprint to the Chairman of the Board (the judge).`,
    challenge: 'Deliver a 15-minute executive presentation detailing foreign market entry structures, the 51/49% Joint Venture governance framework, cultural design adaptations, super-app distribution integration, and geopolitical risk mitigation.',
    judgeQuestions: [
      'If our local joint venture partner holds 51% controlling equity, how will our company contractually guarantee that they cannot fire our managers or dilute our luxury brand standards?',
      'How will our booking systems capture reservations from Asian travelers who do not use Google or credit cards, but use regional mobile super-apps and digital wallets?'
    ],
    benchmarkPoints: [
      'Structure a "Management Contract + Equity JV" Hybrid: allow the local partner 51% real estate equity ownership, but contractually vest 100% of operational management and brand governance in a 30-year unbreachable Hotel Management Agreement (HMA) held by Pacific Heritage.',
      'Incorporate "Supermajority Board Approval" clauses requiring 80% unanimous board consent for major decisions (budget approval, capital expenditures, GM appointment), protecting Pacific Heritage from being outvoted.',
      'Harmonize cultural design: partner with local master architects to integrate open-air teak pavilions, private VIP banquet rooms, and certified Halal/Buddhist culinary kitchens into the physical resort blueprint.',
      'Integrate Asian Digital Super-Apps: deploy direct API integrations with WeChat Pay, Alipay, and Grab, allowing travelers to discover, book, and unlock rooms seamlessly on mobile devices.',
      'Project high-yield expansion: deploy $25 million in JV equity to develop two flagship resorts, generating $14 million in annual high-margin management and licensing fees by Year 3.'
    ]
  },
  {
    id: 'sm-09',
    title: 'Dual-Brand Hotel Development Strategy & Shared Operational Efficiencies: Airport Gateway',
    instructionalArea: 'Strategic Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Development Directors & Asset Optimization Leads',
    judgeRole: 'Managing Partner of Gateway Commercial Real Estate Syndicate',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze the strategic benefits and capital efficiencies of dual-branded hotel developments',
        description: 'Co-locate an extended-stay hotel and a select-service commercial hotel under one physical roof.'
      },
      {
        name: 'Calculate construction capex and operational opex savings from shared back-of-house infrastructure',
        description: 'Share mechanical HVAC plants, commercial laundry, back-of-house kitchens, and engineering teams.'
      },
      {
        name: 'Differentiate guest journey, brand identity, and pricing tiers between the two co-located brands',
        description: 'Maintain separate branded lobby entrances, distinct keycard access, and tailored guest amenities.'
      },
      {
        name: 'Optimize cross-departmental labor utilization and management cross-coverage',
        description: 'Utilize a single General Manager, Director of Sales, and Executive Housekeeper across both properties.'
      },
      {
        name: 'Evaluate the combined market penetration and revenue resilience across changing economic cycles',
        description: 'Balance transient business traveler demand with resilient 30-day extended-stay project demand.'
      }
    ],
    twentyFirstCenturySkills: ['Dual-Brand Architecture', 'Operational Synergy Modeling', 'Labor Optimization', 'Capital Efficiency'],
    background: `Gateway Commercial Real Estate Syndicate acquired a prime 4-acre parcel of land directly adjacent to a major international airport and adjacent commercial business park.

The development syndicate is evaluating a major strategic architecture: building a 400-room \"Dual-Branded Hotel Property\":
- Brand A (220 rooms): \"Aloft Airport\"—a trendy, vibrant select-service lifestyle hotel catering to 1-2 night transient corporate travelers, flight crews, and leisure weekend travelers, featuring a lively WXYZ cocktail bar and pool.
- Brand B (180 rooms): \"Element Airport\"—an upscale extended-stay hotel catering to 7-to-30-day corporate consultants, relocation clients, and engineering contractors, featuring in-room kitchens, quiet work spaces, and complimentary organic breakfast.
- Both hotels will be housed inside a single 7-story architectural structure sharing a central building spine.

While the concept sounds brilliant on paper, the investment committee has raised critical operational and strategic concerns:
1. Operational Synergies: Will building a dual-branded property actually deliver significant construction and operating savings, or will it create double the administrative complexity?
2. Brand Cannibalization: How will management prevent Aloft and Element from cannibalizing each other’s corporate accounts?
3. Cultural Clashing: How will the property prevent rowdy, cocktail-drinking Aloft evening bar crowds from disturbing quiet, long-stay Element corporate guests who are trying to sleep or work?

You and your partner (Hospitality Development Directors and Asset Optimization Leads) are presenting your Dual-Brand Strategic Feasibility & Operational Master Plan to the Managing Partner (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the capital cost savings, shared back-of-house operational synergies, cross-departmental labor modeling, brand separation architecture, and financial ROI.',
    judgeQuestions: [
      'What specific percentage savings will our syndicate achieve in construction and operating costs by building a dual-brand hotel versus two standalone hotels?',
      'How will you physically design the lobby and public spaces so that guests entering the extended-stay hotel don’t feel like they’re walking into a noisy airport bar?'
    ],
    benchmarkPoints: [
      'Demonstrate Massive Capital & Operational Synergies: shared physical plant, central laundry, shared loading docks, and consolidated land acquisition saves 18% in construction capex ($11.5M savings) and reduces ongoing operating opex by 14%.',
      'Deploy the "Single Management Team Model": operate both hotels with a single General Manager, Director of Sales, Chief Engineer, and HR Director, slashing executive payroll overhead by $650,000 annually.',
      'Architectural Brand Zoning: design separate branded exterior port-cochères and distinct lobby check-in pods, linked by a soundproof acoustic central spine that keeps vibrant Aloft evening music isolated from serene Element residential corridors.',
      'Market Diversification Resilience: Aloft captures high-ADR transient weekday compression ($215 ADR), while Element provides guaranteed, recession-proof 75% baseline occupancy with extended-stay projects, achieving a combined RevPAR index of 114.'
    ]
  },
  {
    id: 'sm-10',
    title: 'Strategic Divestment of Non-Core Hotel Assets & Capital Re-Allocation: Imperial Asset Trust',
    instructionalArea: 'Strategic Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Portfolio Strategists & Asset Disposition Directors',
    judgeRole: 'Managing Director & Chief Investment Officer of Imperial Asset Trust',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Conduct rigorous portfolio rationalization and non-core hotel asset identification audits',
        description: 'Evaluate 45 hotel assets based on capital expenditure drag, market saturation, and long-term yield.'
      },
      {
        name: 'Design structured asset disposition and commercial marketing strategies for hotel sales',
        description: 'Package distressed or mature suburban hotels for targeted sale to regional owner-operators.'
      },
      {
        name: 'Mitigate capital gains tax liabilities through Section 1031 Like-Kind Exchanges',
        description: 'Re-invest proceeds from non-core suburban asset sales into high-growth luxury resort acquisitions.'
      },
      {
        name: 'Evaluate strategic capital re-allocation into high-yielding luxury and experiential resort sectors',
        description: 'Shift portfolio capital from low-margin suburban select-service hotels to high-barrier luxury assets.'
      },
      {
        name: 'Communicate strategic portfolio pruning to public market institutional investors and analysts',
        description: 'Articulate the strategic rationale of asset shrinkage to drive higher Return on Invested Capital (ROIC).'
      }
    ],
    twentyFirstCenturySkills: ['Portfolio Rationalization', 'Asset Disposition Strategy', 'Section 1031 Tax Structuring', 'Capital Re-Allocation'],
    background: `Imperial Asset Trust is a publicly traded Real Estate Investment Trust (REIT) holding a $2.2 billion portfolio of 45 hotel properties.

A comprehensive 5-year capital performance review revealed a dangerous drag on portfolio returns:
- The \"Bottom 12\": A cluster of 12 aging suburban select-service hotels located in saturated, low-barrier-to-entry tertiary markets. These 12 properties require an estimated $65 million in looming Property Improvement Plan (PIP) renovations over the next 24 months to satisfy franchise brand mandates.
- Despite consuming 40% of the REIT’s annual capital maintenance budget, these 12 non-core assets produce an anemic Net Operating Income (NOI) yield of only 4.8%, dragging down the overall portfolio performance.
- Meanwhile, the REIT’s premier luxury and experiential resort division (15 coastal and mountain destination resorts) is generating a stellar 11.2% NOI yield with pricing power that consistently outperforms inflation.
- Wall Street equity analysts have downgraded the REIT’s stock rating, criticizing management for \"wasting good capital on dying suburban commodity hotels.\"

The Chief Investment Officer and the Board of Directors have mandated the execution of \"Project Prune & Pivot\"—a decisive strategic plan to divest the 12 non-core suburban hotels, eliminate $65 million in looming PIP capital liabilities, and re-allocate the estimated $180 million in net sale proceeds into high-yielding luxury resort acquisitions.

You and your partner (Chief Portfolio Strategists and Asset Disposition Directors) are presenting your Asset Divestment & Capital Re-Allocation Master Plan to the Chief Investment Officer (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the portfolio rationalization criteria, disposition timeline for the 12 assets, Section 1031 tax-deferral mechanics, capital re-allocation into luxury assets, and shareholder value creation.',
    judgeQuestions: [
      'If we sell 12 hotels and shrink our total room count from 45 hotels to 33, won’t Wall Street view our company as shrinking and in decline?',
      'How does a Section 1031 Like-Kind Exchange legally protect our shareholders from paying millions in federal capital gains taxes upon selling these 12 properties?'
    ],
    benchmarkPoints: [
      'Reframe the Narrative for Wall Street: articulate that strategic divestment is about "Quality of Earnings over Quantity of Keys," lifting overall portfolio EBITDA margin from 24% to 33% and elevating Return on Invested Capital (ROIC) from 6.2% to 10.4%.',
      'Execute Targeted Asset Dispositions: package the 12 non-core properties into three regional clusters marketed to regional private owner-operators, anticipating gross disposition proceeds of $210 million.',
      'Execute Section 1031 Like-Kind Tax Exchanges: utilize certified Qualified Intermediaries to roll 100% of realized capital gains directly into acquiring two premier unencumbered luxury beachfront resorts within the statutory 180-day window, legally deferring $38 million in capital gains taxes.',
      'Eliminate $65 million in mandatory brand PIP renovation liabilities, instantly strengthening the balance sheet and freeing cash flow to fund an increased shareholder stock dividend.'
    ]
  }
];
