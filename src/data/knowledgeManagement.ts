// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Knowledge Management (10 Cases)
// Focuses on tacit-to-explicit knowledge transfer, SOP digital libraries, cross-training, and institutional memory retention
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const knowledgeManagementCases: DecaCaseStudy[] = [
  {
    id: 'km-01',
    title: 'Capturing Institutional Knowledge & Standardizing SOPs at Historic Palace Hotel',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Organizational Learning & Senior Hotel Operations Lead',
    judgeRole: 'General Manager of The Historic Palace Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the nature and importance of knowledge management in hospitality enterprises',
        description: 'Distinguish between tacit service experience held by veteran employees and formal explicit operational documentation.'
      },
      {
        name: 'Design systems for capturing and documenting institutional operational knowledge',
        description: 'Create interactive digital video SOP libraries and searchable mobile micro-learning knowledge bases.'
      },
      {
        name: 'Promote a collaborative knowledge-sharing organizational culture among cross-functional teams',
        description: 'Incentivize senior department heads to mentor junior associates and participate in knowledge transfer sprints.'
      },
      {
        name: 'Mitigate operational disruption caused by employee turnover through structured succession planning',
        description: 'Establish standard onboarding playbooks for specialized roles including Chief Concierge, Executive Housekeeper, and Chief Engineer.'
      },
      {
        name: 'Evaluate the effectiveness of knowledge retention systems on guest service consistency',
        description: 'Track key performance indicators including onboarding ramp-up speed, guest satisfaction consistency, and reduction in procedural errors.'
      }
    ],
    twentyFirstCenturySkills: ['Knowledge Transfer', 'Systems Architecture', 'Continuous Learning', 'Organizational Leadership'],
    background: `The Historic Palace Hotel is a landmark 350-room heritage property with over 90 years of continuous operation. The hotel is renowned for its bespoke White Glove concierge service, silver-service banquets, and unique architectural infrastructure. Over the past three decades, the property has relied on an exceptionally loyal core of veteran department heads—including a Chief Concierge with 28 years of tenure, an Executive Housekeeper with 24 years, and a Chief Engineer who knows the idiosyncrasies of the hotel’s original steam heating boilers.

Over the next twelve months, four key department heads are retiring simultaneously. An internal operational assessment revealed that virtually none of their critical operational knowledge has been formally documented:
1. The Chief Concierge maintains key relationships with city VIP dining establishments, private aviation brokers, and ticket concierges in a personal handwritten paper notebook.
2. The Chief Engineer manages building maintenance routines through memory and verbal instructions rather than a digital Computerized Maintenance Management System (CMMS).
3. The Housekeeping department relies on informal verbal traditions rather than standardized, photographic room inspection standard operating procedures (SOPs).

Newly hired supervisors and line-level staff struggle with high error rates, long onboarding cycles (averaging 7 weeks to full productivity), and inconsistent guest delivery that has caused the hotel's TripAdvisor ranking to slip from #2 to #9 in the metropolitan market.

You and your partner (Director of Organizational Learning and Senior Hotel Operations Lead) must present an urgent, comprehensive Knowledge Management & Transfer Framework to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the conversion of tacit veteran knowledge into accessible digital assets, an interactive mobile SOP knowledge base, a structured mentorship transfer program, and metrics for knowledge retention.',
    judgeQuestions: [
      'How will your strategy incentivize retiring veteran managers to dedicate time and energy to documenting their trade secrets before they depart?',
      'What technology platform should we implement so that frontline associates can instantly access verified operational SOPs on the go?'
    ],
    benchmarkPoints: [
      'Launch a "Legacy Fellowship" program providing retirement bonuses and formal recognition for veteran leaders who complete knowledge transfer video modules.',
      'Deploy an AI-searchable mobile knowledge management platform (e.g., digitized micro-learning SOPs with 60-second video demonstrations accessible via associate smartphones).',
      'Implement 90-day shadowing and co-pilot leadership pairings for designated successors in Engineering, Concierge, and Housekeeping.',
      'Establish a formal institutional Wiki and digital CMMS cataloging all historic building blueprints, electrical schematics, and vendor emergency contacts.'
    ]
  },
  {
    id: 'km-02',
    title: 'Merger Knowledge Harmonization: Integrating Vantage Luxury & Continental Inn',
    instructionalArea: 'Knowledge Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Post-Merger Integration Leads & Organizational Culture Directors',
    judgeRole: 'Senior Vice President of Hospitality Integration & Brand Strategy',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Synthesize conflicting organizational operational cultures and service philosophies',
        description: 'Harmonize ultra-formal luxury protocols with agile, high-volume select-service workflows.'
      },
      {
        name: 'Conduct comprehensive knowledge audits across merged hospitality enterprises',
        description: 'Identify redundant, contradictory, and obsolete standard operating procedures (SOPs).'
      },
      {
        name: 'Establish unified enterprise knowledge taxonomies and searchable digital repositories',
        description: 'Organize guest service standards, brand rules, and safety protocols under standardized metadata schemas.'
      },
      {
        name: 'Overcome employee resistance to new operational knowledge systems and unlearning legacy habits',
        description: 'Deploy change-management champions and interactive gamified training challenges.'
      },
      {
        name: 'Measure knowledge convergence through standardized cross-property quality audits',
        description: 'Track Net Promoter Scores and Mystery Shopper consistency across newly unified hotel properties.'
      }
    ],
    twentyFirstCenturySkills: ['Change Management', 'Organizational Synthesis', 'Cultural Intelligence', 'Strategic Vision'],
    background: `Vantage Hospitality Group, an upscale boutique hotel operator known for highly customized, unscripted guest service, recently completed an $850 million acquisition of Continental Lodging Corporation, a 42-property regional chain known for rigid, checklist-driven operational efficiency.

The post-merger integration has ground to a halt due to an intense cultural and operational knowledge clash. Property managers from Continental insist on adhering to their 800-page legacy corporate binder of strict SOPs, requiring staff to read word-for-word scripts during check-in. In contrast, Vantage hotel teams rely on decentralized, empowered decision-making where associates are trusted to resolve guest requests without rigid rules.

The resulting confusion has paralyzed frontline staff across the 42 acquired properties. During cross-property transfers, Continental managers reprimand Vantage associates for not following scripts, while Vantage regional directors criticize Continental front desks for robotic, impersonal interactions. Guest satisfaction scores across the merged portfolio have dropped by 14% over the last two quarters.

You and your partner (Post-Merger Integration Leads and Organizational Culture Directors) are scheduled to present a Knowledge Harmonization Strategy to the Senior Vice President of Hospitality Integration (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing a unified knowledge taxonomy, a harmonized operational SOP framework, a change-management curriculum, and transition metrics.',
    judgeQuestions: [
      'How do we blend Continental’s operational consistency with Vantage’s genuine hospitality without creating a contradictory rulebook?',
      'How will you handle veteran general managers who actively resist abandoning their legacy operating manuals?'
    ],
    benchmarkPoints: [
      'Create the "Framework of Freedom": standardize non-negotiable core pillars (safety, billing, sanitation) while empowering flexible, unscripted guest interactions.',
      'Establish a unified cloud knowledge portal with AI semantic search, replacing fragmented paper binders across all 42 properties.',
      'Deploy cross-pollination leadership cohorts: pair Vantage and Continental GMs for two-week reciprocal on-property immersion residencies.',
      'Implement a "Sunset Committee" to formally retire redundant legacy procedures and celebrate the adoption of unified best practices.'
    ]
  },
  {
    id: 'km-03',
    title: 'Post-Crisis Incident Knowledge Capture & Root-Cause Remediation: Oceanfront Palms',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Quality & Safety Directors & Emergency Preparedness Leads',
    judgeRole: 'Executive Vice President of Operations & Legal Risk',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Execute formal Post-Incident Reviews (PIR) and After-Action Reviews (AAR) in lodging',
        description: 'Debrief frontline teams, department heads, and contractors following severe operational crises.'
      },
      {
        name: 'Translate crisis lessons learned into institutional operational memory and updated SOPs',
        description: 'Update hurricane preparedness checklists, emergency generator load distributions, and evacuation protocols.'
      },
      {
        name: 'Implement blameless root-cause analysis (RCA) techniques in hospitality operations',
        description: 'Utilize the "5 Whys" methodology to uncover systemic communication failures rather than scapegoating individual staff.'
      },
      {
        name: 'Disseminate critical emergency lessons across peer properties in the hotel portfolio',
        description: 'Publish actionable incident debrief bulletins and simulated drill scenarios to sister resorts.'
      },
      {
        name: 'Audit organizational knowledge retention through unscheduled crisis simulation drills',
        description: 'Test staff execution of updated emergency communication tree protocols during simulated power failures.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Reflection', 'Systems Analysis', 'Crisis Management', 'Communication'],
    background: `Oceanfront Palms is a 550-room coastal resort situated along an active Atlantic hurricane corridor. Last month, Category 3 Hurricane Julianna made landfall 40 miles south of the property. While the physical structure survived with moderate damage, the resort's operational crisis response suffered catastrophic breakdowns:
1. When municipal power failed, the emergency diesel generator failed to start because the fuel filter had not been replaced during scheduled quarterly maintenance—a task documented only on an obsolete paper clipboard that was misplaced.
2. The resort’s physical master guest evacuation roster was locked inside the general manager’s office, and front desk supervisors did not know where the spare physical keys were kept, delaying guest floor-clearing by two critical hours.
3. Food and beverage refrigeration failed, causing the loss of $85,000 in perishable inventory because engineering staff did not know how to manually switch priority breaker panels to auxiliary battery banks.

Fortunately, no guests were injured, but the local emergency management agency issued a formal warning regarding the resort's chaotic response. The resort’s ownership group is furious and demands that the lessons from Hurricane Julianna be permanently institutionalized so that such breakdowns can never recur.

You and your partner (Quality & Safety Directors and Emergency Preparedness Leads) are presenting your Post-Incident Knowledge Capture & Remediation Plan to the Executive Vice President of Operations (the judge).`,
    challenge: 'Deliver a 15-minute presentation presenting the after-action review findings, root causes, permanent SOP updates, and portfolio-wide knowledge dissemination protocols.',
    judgeQuestions: [
      'How does your After-Action Review avoid creating a culture of fear where employees hide their mistakes during a crisis?',
      'How will you guarantee that when a hurricane strikes five years from now with completely new staff, these operational lessons are remembered?'
    ],
    benchmarkPoints: [
      'Conduct structured, blameless After-Action Reviews using the "5 Whys" methodology across Front Office, Engineering, and F&B teams.',
      'Digitize all mechanical and life-safety maintenance into an automated cloud CMMS with immutable timestamped maintenance logs and automated supervisor escalations.',
      'Establish decentralized "Red Emergency Binders" and offline ruggedized tablets in every department containing updated emergency SOPs and key locations.',
      'Mandate biannual, unannounced full-scale emergency simulation drills with third-party observer scoring to test institutional readiness.'
    ]
  },
  {
    id: 'km-04',
    title: 'Frontline Crowdsourced Best Practice Sharing & Micro-Learning: Metro Plaza Hotel',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Associate Experience Managers & Operational Innovation Leads',
    judgeRole: 'General Manager of Metro Plaza Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design decentralized, frontline-driven knowledge creation mechanisms in hospitality',
        description: 'Empower housekeepers, front desk agents, and servers to document and share daily efficiency tips.'
      },
      {
        name: 'Develop gamified micro-learning platforms for mobile frontline hospitality workers',
        description: 'Deliver 90-second interactive shift-briefing training modules accessible on employee smartphones.'
      },
      {
        name: 'Establish peer-review and operational validation workflows for staff-submitted best practices',
        description: 'Vet employee operational suggestions with department heads before publishing to property-wide feeds.'
      },
      {
        name: 'Reward and celebrate associate knowledge contributors to foster a sharing culture',
        description: 'Provide quarterly financial bonuses, recognition banquets, and "Innovator of the Month" honors.'
      },
      {
        name: 'Track the quantitative impact of crowdsourced innovations on labor productivity and guest reviews',
        description: 'Measure room turnover minutes saved, linen loss reductions, and guest Net Promoter Score increases.'
      }
    ],
    twentyFirstCenturySkills: ['Empowerment & Inclusion', 'Digital Literacy', 'Collaborative Innovation', 'Communication'],
    background: `Metro Plaza Hotel is a 650-room bustling downtown commercial property with 420 line-level associates across eight distinct operating departments. Historically, training and operational improvement have been strictly top-down: corporate trainers deliver annual 4-hour classroom PowerPoint sessions that associates quickly forget.

However, management noticed that individual frontline employees have developed ingenious grassroots productivity workarounds:
- A veteran room attendant on the 14th floor discovered an efficient linen-stacking technique that reduces room turnover time from 32 minutes to 25 minutes while maintaining flawless cleanliness.
- A banquet bartender created a pre-batching cocktail preparation workflow that cuts guest wait times during 500-person gala receptions by 40%.
- A valet attendant built a color-coded clipboard system that eliminated lost vehicle key incidents completely on peak weekend checkouts.

Tragically, these breakthrough best practices remain isolated within individual shifts and departments because the hotel possesses no platform or culture for peer-to-peer knowledge sharing. When the veteran room attendant is off-duty, other room attendants struggle, and overall hotel turnover efficiency lags.

You and your partner (Associate Experience Managers and Operational Innovation Leads) have been tasked with designing a Frontline Crowdsourced Knowledge Sharing & Micro-Learning Platform for the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the architecture of a mobile peer-to-peer knowledge-sharing app, verification workflows, gamified associate incentives, and productivity KPIs.',
    judgeQuestions: [
      'How will you ensure that tips submitted by frontline associates actually comply with corporate brand standards and safety regulations before being shared?',
      'How do we ensure that housekeeping staff who speak English as a second language can easily contribute and learn from the platform?'
    ],
    benchmarkPoints: [
      'Deploy a mobile frontline platform (e.g., multilingual video micro-learning app with automatic closed-caption translation in 12 languages).',
      'Establish a 48-hour peer-review and validation workflow where Department Heads test and certify associate innovations before broad distribution.',
      'Incentivize participation through the "Hospitality Spark Awards": cash bonuses, paid time off, and prominent recognition for adopted best practices.',
      'Project significant financial returns: saving 5 minutes per room turn across 650 rooms recovers over $160,000 in annual housekeeping labor productivity.'
    ]
  },
  {
    id: 'km-05',
    title: 'Preserving Culinary Recipes, Yield Standards & Artisan Techniques: Chateau Blanc',
    instructionalArea: 'Knowledge Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Culinary Operations Director & Food Science Knowledge Manager',
    judgeRole: 'Vice President of Culinary Arts & Executive Resort Chef',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Preserve proprietary culinary recipes and artisanal techniques across multi-outlet resorts',
        description: 'Document exact ingredient specifications, cooking temperatures, and plating aesthetics in digital recipe books.'
      },
      {
        name: 'Standardize butchery yield tests and culinary portion-control knowledge',
        description: 'Ensure consistent food costs and nutritional accuracy across four independent resort dining venues.'
      },
      {
        name: 'Implement digital Kitchen Display Systems (KDS) and video preparation guides at prep stations',
        description: 'Equip prep stations with touchscreens demonstrating complex sauce reductions and pastry laminations.'
      },
      {
        name: 'Establish culinary apprenticeship knowledge transfer pipelines to counter chef turnover',
        description: 'Pair junior commis chefs with master pastry and banquet chefs for structured skill competency sign-offs.'
      },
      {
        name: 'Safeguard proprietary gastronomic trade secrets through legal and digital protections',
        description: 'Manage recipe access permissions and confidentiality agreements for signature sauces and spice blends.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary Precision', 'Knowledge Documentation', 'Operational Standardization', 'Collaboration'],
    background: `Chateau Blanc is an internationally acclaimed 280-room luxury vineyard resort featuring a Michelin-starred signature dining room, a bustling French brasserie, a banquet catering kitchen servicing 80 luxury weddings annually, and an artisan bakery.

The resort's culinary reputation has long depended on its legendary Executive Pastry Chef and Executive Banquet Chef, who have led the kitchens for over two decades. However, neither chef has ever recorded written recipe cards or plating standards:
1. Signature wedding banquet entrees—such as Braised Short Ribs and Lobster Risotto—vary wildly in flavor, salt content, and presentation depending on which line cook is running the sauté station.
2. The artisan bakery experiences a 15% batch failure rate on sourdough loaves whenever the master baker takes a vacation day, costing the resort thousands in wasted flour, butter, and labor.
3. Crucial butchery yield tests for premium Wagyu beef tenderloins are kept in the chef's head, leading to unpredictable food cost spikes ranging from 29% to 37% month to month.

With both master chefs planning retirement within the next 18 months, the resort faces an existential threat to its culinary brand equity and profit margins unless its culinary knowledge is urgently captured, standardized, and digitized.

You and your partner (Culinary Operations Director and Food Science Knowledge Manager) are presenting your Culinary Knowledge Preservation & Standardization Blueprint to the Vice President of Culinary Arts (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the systematic documentation of culinary master recipes, video plating guides, butchery yield training, and digital recipe management.',
    judgeQuestions: [
      'How will you overcome the resistance of master chefs who fear that documenting their secret recipes will make them obsolete or easily replaced?',
      'How do we ensure that standardizing recipes across digital screens does not stifle artistic culinary creativity and seasonal innovation?'
    ],
    benchmarkPoints: [
      'Introduce the "Master Artisan Legacy Archive": commission professional videography and high-resolution photography documenting all signature techniques.',
      'Deploy cloud-based kitchen management software with digital recipe scales that adjust ingredient quantities automatically based on daily banquet covers.',
      'Implement structured Culinary Competency Passport tracking hands-on skill sign-offs for junior chefs before promotion to station leads.',
      'Achieve food cost stabilization at 28.5% by eliminating yield test variances and reducing pastry batch spoilage by 80%.'
    ]
  },
  {
    id: 'km-06',
    title: 'Accelerating Onboarding & Competency Ramping at Grand Alpine Mountain Resort',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Talent Development Leads & Resort Training Directors',
    judgeRole: 'Managing Director of Grand Alpine Mountain Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design structured modular onboarding knowledge paths for seasonal and permanent staff',
        description: 'Compress employee time-to-full-productivity from four weeks down to 10 days.'
      },
      {
        name: 'Develop interactive digital learning modules and VR roleplay simulation environments',
        description: 'Simulate difficult front desk check-in scenarios and ski-valet equipment tracking digitally.'
      },
      {
        name: 'Implement competency-based skill assessments and peer validation milestones',
        description: 'Verify associate mastery of PMS transaction flows and mountain safety protocols before solo shifts.'
      },
      {
        name: 'Utilize \"buddy system\" knowledge cohorts to enhance frontline retention and social integration',
        description: 'Pair incoming seasonal workers with experienced returning seasonal leads to build confidence.'
      },
      {
        name: 'Evaluate onboarding knowledge efficiency through associate ramp-up speed and guest feedback',
        description: 'Correlate training completion scores with initial 30-day guest satisfaction metrics.'
      }
    ],
    twentyFirstCenturySkills: ['Instructional Design', 'Empathy & Mentorship', 'Performance Measurement', 'Communication'],
    background: `Grand Alpine Resort is an expansive 500-room ski and summer mountain destination. Every November, the resort hires over 380 seasonal associates—including ski concierges, front desk agents, rental technicians, and culinary staff—many of whom are college students or international J-1 visa holders with little prior luxury hospitality experience.

Historically, onboarding has been disorganized and rushed. New hires are given a 150-page employee handbook during a single 8-hour classroom orientation on Monday, then thrown onto the frontlines on Tuesday during peak Thanksgiving holiday arrivals. The consequences are severe:
- First-year seasonal associates commit an average of 4.2 billing or reservation errors per week in the PMS during their first month.
- Ski concierge staff take an average of 22 minutes to fit and check in a family’s ski gear, resulting in 90-minute lobby lines that infuriate guests paying $850 per night.
- Seasonal employee turnover during the first 30 days has reached an alarming 28%, forcing the resort to continuously recruit, hire, and re-train workers mid-season.

Management recognizes that the resort’s knowledge onboarding model is broken and requires a modern, competency-based digital knowledge framework.

You and your partner (Talent Development Leads and Resort Training Directors) have been summoned to present an Accelerated Onboarding & Knowledge Ramping Program to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing a 10-day modular onboarding framework, mobile micro-learning tools, peer buddy cohorts, and competency mastery gates.',
    judgeQuestions: [
      'How will your 10-day onboarding program prepare J-1 international staff who face cultural and language barriers when dealing with demanding luxury guests?',
      'If we invest heavily in onboarding seasonal staff who only stay for five months, how do we justify the return on investment to our owners?'
    ],
    benchmarkPoints: [
      'Implement pre-boarding digital micro-learning: deliver interactive 5-minute mobile modules on resort history and systems before associates arrive on property.',
      'Establish a 10-day phased competency roadmap: Days 1-3 Digital Simulation, Days 4-7 Shadowing Cohort, Days 8-10 Supervised Reverse Shadowing.',
      'Deploy the "Alpine Buddy Cohort": pair each new seasonal hire with a returning veteran mentor receiving a $500 seasonal completion retention bonus.',
      'Demonstrate ROI: reducing 30-day seasonal turnover from 28% to 10% saves $145,000 in emergency recruitment and eliminates front desk billing write-offs.'
    ]
  },
  {
    id: 'km-07',
    title: 'Mitigating Seasonal Brain Drain & Knowledge Retention: Island Breeze Resort',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Human Capital Strategists & Resort Operations Analysts',
    judgeRole: 'General Manager of Island Breeze Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze the impact of seasonal workforce churn on organizational institutional memory',
        description: 'Quantify operational knowledge erosion between alternating high and low operating seasons.'
      },
      {
        name: 'Design off-season knowledge retention and alumni community engagement programs',
        description: 'Keep top seasonal talent connected through off-season newsletters, digital webinars, and priority return contracts.'
      },
      {
        name: 'Document specialized seasonal opening and shutdown operating checklists',
        description: 'Codify winterization and spring reopening procedures for pools, marine fleets, and outdoor cabanas.'
      },
      {
        name: 'Create evergreen knowledge repositories that survive seasonal staff turnover',
        description: 'Ensure critical equipment maintenance histories and VIP guest profiles remain accessible regardless of staffing.'
      },
      {
        name: 'Incentivize multi-season return rates among skilled frontline supervisors',
        description: 'Structure progressive tenure bonuses and seasonal retention incentives to preserve leadership continuity.'
      }
    ],
    twentyFirstCenturySkills: ['Strategic Retention', 'Process Optimization', 'Talent Strategy', 'Problem Solving'],
    background: `Island Breeze Resort is an idyllic 220-room beachfront island destination that operates at peak capacity (92% occupancy) during the six-month dry season (November through April) and drops to 35% occupancy during the rainy summer season, operating with a skeleton maintenance crew.

This extreme seasonality creates a devastating \"seasonal brain drain\":
1. At the end of each peak season, 80% of the resort’s 240 frontline workers depart for summer jobs elsewhere. When the resort reopens the following November, fewer than 22% of those workers return, meaning the resort essentially starts from scratch with an inexperienced workforce every single year.
2. Invaluable operational knowledge—such as which boat mooring lines need reinforcement in rough surf, how to tune the water desalination reverse-osmosis filters, and the personalized preferences of the resort’s 120 repeat holiday families—is completely lost each spring.
3. Every November reopening is plagued by mechanical delays, guest service blunders, and chaotic dining operations that damage the resort’s luxury reputation during the highest-revenue weeks of the year.

The General Manager has mandated that the resort break this cycle by developing a permanent Knowledge Retention & Seasonal Alumni Ecosystem to preserve operational memory.

You and your partner (Human Capital Strategists and Resort Operations Analysts) are presenting your strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing off-season knowledge preservation, standardized reopening playbooks, a seasonal alumni engagement network, and return-rate incentives.',
    judgeQuestions: [
      'How will our resort keep seasonal employees engaged during the six months they are working elsewhere without paying full off-season salaries?',
      'What specific operational documentation will prevent reopening day disasters like malfunctioning pool heaters or uninspected watercraft?'
    ],
    benchmarkPoints: [
      'Launch the "Island Breeze Alumni Network": offer priority guaranteed contracts, housing subsidies, and escalating season-over-season bonuses ($1,500+) for returning staff.',
      'Increase seasonal staff return rate from 22% to 65%, preserving core service memory and reducing annual recruitment costs by $95,000.',
      'Develop digital "Open/Close Playbooks": comprehensive step-by-step photographic SOPs for deep-winterizing and commissioning all marine and resort mechanical assets.',
      'Establish a VIP Guest Preference Data Custodian responsible for auditing and updating repeat guest profiles before every holiday arrival season.'
    ]
  },
  {
    id: 'km-08',
    title: 'Cross-Departmental Knowledge Exchange & Operational Empathy: Renaissance Metropolitan',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Organizational Development Directors & Quality Culture Leads',
    judgeRole: 'General Manager of Renaissance Metropolitan Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Examine the negative impact of organizational silos on guest service delivery',
        description: 'Identify inter-departmental finger-pointing between Front Desk, Housekeeping, and Food & Beverage.'
      },
      {
        name: 'Design a structured \"Day in My Shoes\" cross-departmental job shadowing program',
        description: 'Require supervisors and frontline staff to complete reciprocal 4-hour shifts in partner departments.'
      },
      {
        name: 'Establish cross-functional daily huddle protocols to share real-time operational intel',
        description: 'Coordinate morning briefings between Sales, Banquets, Engineering, and Front Office.'
      },
      {
        name: 'Create shared problem-solving task forces for chronic guest friction points',
        description: 'Unite Front Desk and Housekeeping leads to solve 3:00 PM check-in room readiness delays.'
      },
      {
        name: 'Measure the impact of cross-training on internal employee engagement and guest satisfaction',
        description: 'Track internal cross-departmental referral rates and reductions in inter-departmental service tickets.'
      }
    ],
    twentyFirstCenturySkills: ['Empathy & Collaboration', 'Interpersonal Dynamics', 'Cross-Functional Leadership', 'Communication'],
    background: `The Renaissance Metropolitan is a 720-room full-service convention hotel. Over the past year, intense operational friction between departments has severely degraded guest satisfaction and staff morale. The property has devolved into entrenched tribal silos:
- Front Desk vs. Housekeeping: Front desk agents routinely check guests into rooms designated as \"Vacant Clean\" in the PMS, only for guests to walk in on unfinished housekeeping carts or unmade beds. Housekeeping blames Front Desk for failing to honor priority rush room requests, while Front Desk accuses Housekeeping of deliberately hoarding clean room inspections.
- Sales vs. Banquets & Kitchen: The corporate sales team routinely books 500-person banquet events with customized off-menu dietary demands without consulting executive banquet chefs, forcing the culinary team to scramble during peak prep hours.
- Engineering vs. Front Office: Front desk associates log urgent guest HVAC and plumbing tickets that sit in an unread engineering email inbox for hours because the departments use different communication software.

The resulting inter-departmental hostility has created a toxic work environment, an annual employee turnover rate of 54%, and over $120,000 in annual guest compensation credits issued to appease furious travelers.

You and your partner (Organizational Development Directors and Quality Culture Leads) have been called to present a Cross-Departmental Knowledge Exchange & Empathy Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing reciprocal job shadowing, unified cross-functional huddles, integrated communication technology, and collaborative incentive structures.',
    judgeQuestions: [
      'How will you convince busy department managers to release their key supervisors for 4 hours to shadow another department during a busy week?',
      'How does cross-training front desk staff in housekeeping tasks directly improve the guest check-in experience?'
    ],
    benchmarkPoints: [
      'Launch the mandatory "Day in My Shoes" immersion program: all supervisors complete reciprocal 4-hour shadowing shifts biannually in their primary partner department.',
      'Institute the "10-Minute Morning Triad": daily 9:00 AM joint stand-up huddle uniting Front Office, Housekeeping, and Engineering to prioritize clean room flows.',
      'Deploy a single unified mobile collaboration platform (e.g., HotSOS/Quore) replacing disconnected emails with real-time push notifications across all teams.',
      'Tie 20% of department head annual bonuses to overall hotel-wide Net Promoter Scores and cross-departmental teamwork ratings, eliminating siloed incentives.'
    ]
  },
  {
    id: 'km-09',
    title: 'AI Knowledge Engine & Intelligent Engineering Maintenance: Summit Tower',
    instructionalArea: 'Knowledge Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Facilities Engineer & Facilities Informatics Architect',
    judgeRole: 'Vice President of Property Operations & Asset Management',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design an AI-powered conversational engineering knowledge retrieval system',
        description: 'Equip maintenance technicians with natural language mobile queries for complex HVAC and chiller schematics.'
      },
      {
        name: 'Digitize decades of legacy building blueprints, equipment manuals, and repair logs',
        description: 'Convert 40 years of paper equipment blueprints and vendor warranty records into searchable digital vector databases.'
      },
      {
        name: 'Implement predictive maintenance workflows based on historical asset repair knowledge',
        description: 'Analyze failure patterns in elevator motors and boiler pumps to service components before catastrophic breakdown.'
      },
      {
        name: 'Standardize junior technician troubleshooting workflows to reduce Mean Time to Repair (MTTR)',
        description: 'Provide step-by-step diagnostic trees on mobile tablets for diagnosing in-room thermostat and plumbing failures.'
      },
      {
        name: 'Quantify energy savings and capital equipment life extension resulting from knowledge-based maintenance',
        description: 'Demonstrate a 15% reduction in guestroom out-of-order downtime and extended chiller operating lifespans.'
      }
    ],
    twentyFirstCenturySkills: ['Facilities Engineering', 'Artificial Intelligence Integration', 'Systems Thinking', 'Strategic Planning'],
    background: `Summit Tower is a 55-story luxury skyscraper hotel comprising 600 guestrooms, three ballrooms, and an expansive spa. The complex physical plant is powered by four massive centrifugal chillers, three high-pressure steam boilers, 18 high-speed elevator shafts, and over 1,200 Variable Air Volume (VAV) climate control boxes.

The engineering department faces a critical knowledge bottleneck. The Chief Engineer and two Senior Master Mechanics possess encyclopedic knowledge of how to bypass temperamental valves or restart finicky cooling towers during extreme heatwaves. However, this knowledge is entirely undocumented. Whenever an HVAC compressor or elevator circuit board trips on the night shift when veteran mechanics are asleep, junior technicians are completely bewildered.

Consequently, guestroom \"Out of Order\" (OOO) rates have risen to 6.8% (representing over 40 unavailable rooms per night during peak seasons), and the hotel’s Mean Time to Repair (MTTR) for guest air conditioning complaints has stretched to an unacceptable 3.5 hours. Furthermore, over 15,000 pages of physical equipment operating manuals and architectural blueprints are decaying in cardboard boxes in the sub-basement.

You and your partner (Chief Facilities Engineer and Facilities Informatics Architect) are presenting an AI-Powered Engineering Knowledge Engine & Predictive Maintenance Plan to the Vice President of Operations (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the digitization of building archives, deployment of a mobile conversational troubleshooting engine for technicians, and predictive maintenance protocols.',
    judgeQuestions: [
      'How does a junior maintenance technician interact with the AI knowledge engine when standing in a mechanical room with poor cell reception?',
      'How will your predictive maintenance system prevent catastrophic central chiller failures during record-breaking summer heatwaves?'
    ],
    benchmarkPoints: [
      'Digitize and OCR all 15,000 legacy schematics and manuals into a secure, offline-capable mobile knowledge app running on ruggedized technician tablets.',
      'Equip technicians with interactive visual diagnostic decision trees: inputting error codes provides instant step-by-step repair guides and required replacement part numbers.',
      'Deploy IoT vibration and thermal sensors on major pumps and chillers linked to the knowledge base to trigger automated preventive work orders before failure occurs.',
      'Reduce OOO room downtime from 6.8% to under 1.5%, unlocking $420,000 in recovered room revenue annually and cutting repair MTTR from 3.5 hours to 35 minutes.'
    ]
  },
  {
    id: 'km-10',
    title: 'Voice-of-Customer Knowledge Loop & Operational Policy Evolution: The Kensington Hotel',
    instructionalArea: 'Knowledge Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Guest Experience Intelligence Directors & Quality Assurance Leads',
    judgeRole: 'General Manager of The Kensington Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design automated Voice-of-Customer (VoC) knowledge capture and text-mining pipelines',
        description: 'Aggregate guest feedback from post-stay surveys, TripAdvisor reviews, Google reviews, and social media mentions.'
      },
      {
        name: 'Transform unstructured guest review sentiment into actionable operational improvements',
        description: 'Identify recurring semantic themes regarding slow valet parking, noisy mini-fridges, or weak shower pressure.'
      },
      {
        name: 'Establish a cross-departmental Guest Feedback Knowledge Governance Council',
        description: 'Review weekly sentiment trends with Department Heads to modify operational policies and SOPs.'
      },
      {
        name: 'Close the guest feedback loop through personalized executive follow-up and service recovery',
        description: 'Respond to 100% of negative online reviews within 24 hours with tailored remediation and resolution offers.'
      },
      {
        name: 'Track Net Promoter Score (NPS) trajectory and repeat booking correlation over time',
        description: 'Demonstrate how continuous policy evolution based on guest feedback drives brand loyalty and ADR premiums.'
      }
    ],
    twentyFirstCenturySkills: ['Customer Intelligence', 'Continuous Improvement', 'Data Synthesis', 'Communication'],
    background: `The Kensington Hotel is a luxury 380-room boutique hotel in a historic arts district. The hotel receives over 600 guest feedback data points every month across Medallia surveys, TripAdvisor, Google Reviews, and in-room QR code feedback forms.

However, this feedback data flows into an organizational void. Department managers glance at their monthly overall survey score (currently hovering around 81 out of 100), but nobody systematically mines the rich qualitative text comments written by guests. Critical recurring guest insights are routinely ignored:
- For seven consecutive months, dozens of business travelers have complained that the designer glass desk chairs in guestrooms cause back pain during long work sessions.
- Over 40 reviews specifically cited that the Sunday brunch buffet runs out of smoked salmon and pastries by 11:30 AM, resulting in frustrated guests paying $65 per person.
- Valet retrieval wait times on Sunday mornings average 28 minutes because valet staff are scheduled based on historical check-in averages rather than check-out departure forecasts.

Because the hotel possesses no closed-loop knowledge management system to connect guest feedback to operational policy changes, the same complaints repeat week after week, dragging down the hotel's TripAdvisor ranking and damaging repeat corporate bookings.

You and your partner (Guest Experience Intelligence Directors and Quality Assurance Leads) are presenting your Closed-Loop VoC Knowledge & Operational Evolution Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing AI text sentiment analytics, a weekly cross-functional Feedback Governance Council, policy revision protocols, and closed-loop guest recovery standards.',
    judgeQuestions: [
      'How will your system differentiate between isolated guest eccentricities and systemic operational failures that require expensive policy or furniture changes?',
      'How do we ensure that department heads do not view the Guest Feedback Council as a punitive \"witch hunt\" aimed at criticizing their staff?'
    ],
    benchmarkPoints: [
      'Deploy NLP text sentiment analytics to automatically cluster guest reviews into semantic operational buckets (Housekeeping, F&B, Valet, Physical Plant).',
      'Establish the weekly "Voice-of-Customer Action Council": department heads review sentiment trends and are empowered with a $15,000 monthly agile CAPEX fund to fix identified friction points immediately.',
      'Implement an automated rule: any operational defect mentioned more than five times in 30 days triggers a mandatory SOP revision and staff re-briefing.',
      'Achieve target NPS lift from 42 to 68 within six months, directly driving a projected 4.5% increase in high-margin direct corporate repeat bookings.'
    ]
  }
];
