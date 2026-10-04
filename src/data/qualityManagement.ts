// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Quality Management (10 Cases)
// Focuses on Forbes/AAA diamond standards, Total Quality Management (TQM), Six Sigma defect reduction, and QA audits
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const qualityManagementCases: DecaCaseStudy[] = [
  {
    id: 'qm-01',
    title: 'Achieving Forbes Five-Star Standards & Eliminating Service Defects at The Royal Crest',
    instructionalArea: 'Quality Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Operational Quality & Hospitality Standards Auditor',
    judgeRole: 'Vice President of Global Quality Assurance & Executive General Manager',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the principles of Total Quality Management (TQM) and continuous improvement in lodging',
        description: 'Deploy Plan-Do-Check-Act (PDCA) cycles across guest room turnover, valet arrivals, and dining delivery.'
      },
      {
        name: 'Apply rigorous Forbes Travel Guide / AAA Five-Diamond service standards across all guest touchpoints',
        description: 'Enforce non-negotiable benchmark standards (guest recognition by name, 3-ring phone answering, prompt room service delivery).'
      },
      {
        name: 'Utilize Six Sigma root-cause defect analysis to solve recurring guest complaints',
        description: 'Map fishbone (Ishikawa) diagrams to diagnose recurring air-conditioning failures and housekeeping delay bottlenecks.'
      },
      {
        name: 'Design internal mystery shopper and peer quality audit mechanisms',
        description: 'Establish surprise departmental inspection checklists to catch operational deficiencies before external rating audits.'
      },
      {
        name: 'Formulate quality assurance employee incentive and recognition programs',
        description: 'Reward zero-defect shifts and proactive service recovery with tiered operational bonuses.'
      }
    ],
    twentyFirstCenturySkills: ['Quality Engineering', 'Statistical Defect Analysis', 'Process Standardization', 'Operational Discipline'],
    background: `The Royal Crest is an acclaimed 320-room ultra-luxury resort that has held a prestigious Forbes Four-Star rating for eight consecutive years. Ownership recently set an ambitious corporate objective: achieve the coveted Forbes Five-Star rating during the upcoming inspection cycle, which will allow the property to increase Average Daily Rates by an estimated $120 per night.

However, a confidential mock audit conducted by an accredited third-party luxury standards agency revealed alarming defect rates across critical foundational benchmarks:
1. In Housekeeping, 18% of inspected guest suites contained noticeable service defects (streaked bathroom mirrors, missing custom stationery, or delayed 4:00 PM turndown service delivery).
2. At the Front Desk and Valet, associates failed the "Guest Recognition Standard"—failing to address the guest by surname during at least 70% of interactions.
3. In In-Room Dining, breakfast orders arrived an average of 14 minutes past the promised delivery window, with hot food temperatures failing to meet luxury heat-retention requirements due to uninsulated delivery transport carts.
4. Line-level staff reported feeling overwhelmed by contradictory instructions from different supervisors, with zero standardized checklist tracking or feedback loops when service breakdowns occurred.

With the unannounced official Forbes anonymous inspection window opening in 60 days, the Vice President of Global Quality Assurance has mandated a zero-defect quality turnaround across the entire property.

You and your partner (Director of Operational Quality and Hospitality Standards Auditor) must present a Comprehensive Quality Management & Forbes Five-Star Strategy to the Vice President of Global Quality Assurance (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing a TQM continuous improvement roadmap, Six Sigma root-cause fixes for room service and housekeeping defects, internal mystery-audit protocols, and staff empowerment to achieve Forbes Five-Star status.',
    judgeQuestions: [
      'How will your quality management system ensure that frontline associates consistently greet guests by name without appearing mechanical or intrusive?',
      'What immediate process engineering fix will eliminate our 14-minute in-room dining delivery delay and maintain food temperature standards?'
    ],
    benchmarkPoints: [
      'Deploy the "First 30 Seconds" protocol: front desk, concierge, and valet associates discretely scan guest luggage tags and PMS mobile arrival alerts to use the guest’s surname naturally three times per stay.',
      'Apply Six Sigma defect mapping to In-Room Dining: pre-stage tray carts on service elevators with thermal induction warming plates, establishing a dedicated expedited elevator during the 7:00 AM - 9:30 AM breakfast rush.',
      'Establish the "Daily 10-Minute Quality Circle": shift supervisors lead rapid morning debriefs reviewing the previous day’s defects and drilling one specific Forbes standard each day.',
      'Implement weekly unannounced "Peer Mystery Audits" conducted by rotating supervisors from other departments, offering $250 bonuses for teams achieving 100% compliance.'
    ]
  },
  {
    id: 'qm-02',
    title: 'Six Sigma Defect Elimination in Housekeeping Turnover: Skyline Grand Hotel',
    instructionalArea: 'Quality Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Six Sigma Black Belt Operations Leads & Quality Assurance Directors',
    judgeRole: 'General Manager of Skyline Grand Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply the DMAIC (Define, Measure, Analyze, Improve, Control) framework in lodging operations',
        description: 'Reduce room cleaning defects (missed hairs, dusty surfaces, missing amenities) from 24% to under 2%.'
      },
      {
        name: 'Construct Ishikawa (Fishbone) diagrams and Pareto charts for root-cause defect analysis',
        description: 'Categorize defect drivers across equipment, cleaning supplies, training methods, and fatigue.'
      },
      {
        name: 'Standardize room turnover workflows using visual 5S lean methodology',
        description: 'Sort, Set in Order, Shine, Standardize, and Sustain housekeeping linen carts and supply closets.'
      },
      {
        name: 'Implement statistical process control (SPC) and digital photographic quality audits',
        description: 'Utilize mobile inspection apps requiring high-resolution photos of 10 critical room checkpoints.'
      },
      {
        name: 'Calculate the cost of poor quality (COPQ) in housekeeping operations',
        description: 'Quantify guest compensation payouts, free night certificates, and lost corporate contract renewals.'
      }
    ],
    twentyFirstCenturySkills: ['Six Sigma Methodology', 'Statistical Process Control', 'Lean Operations', 'Problem Solving'],
    background: `Skyline Grand Hotel is a 600-room high-occupancy commercial hotel. Over the past six months, housekeeping room cleanliness defects have escalated into an operational crisis:
- Guest post-stay cleanliness ratings have dropped to 72 out of 100. Over 24% of checked-in rooms generated guest complaints: hair in shower drains, unemptied bathroom trash cans, unwashed coffee carafes, or missing bath towels.
- The hotel spent over $145,000 in guest folio compensation credits and complimentary breakfast vouchers to pacify furious guests during the last quarter alone.
- Corporate meeting planners have threatened to cancel upcoming group bookings unless cleanliness standards are restored.
- Room attendants report feeling rushed, exhausted, and disorganized: linen carts are disorganized, requiring attendants to walk back and forth to distant linen closets up to 15 times per shift to find missing pillowcases or soaps.

The General Manager has hired your consulting team to deploy a rigorous Six Sigma DMAIC Quality Improvement Project to permanently eliminate housekeeping defects and streamline cleaning operations.

You and your partner (Six Sigma Black Belt Operations Leads and QA Directors) are presenting your DMAIC Quality Transformation Plan to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation presenting the Pareto defect analysis, Fishbone root causes, 5S cart standardization, digital photo inspection controls, and COPQ savings.',
    judgeQuestions: [
      'How does applying a manufacturing methodology like Six Sigma fit the human, emotional reality of hotel housekeeping?',
      'If supervisors are required to conduct digital photo audits of every single room, won’t that delay 3:00 PM check-in room readiness?'
    ],
    benchmarkPoints: [
      'Present Pareto Analysis proving that 80% of guest complaints stem from just three defects: shower hair, unwashed glassware, and missing towels.',
      'Deploy 5S Lean Cart Standardization: re-engineer all 40 housekeeping carts with standardized, color-coded bins and pre-stocked supply quotas, saving 42 minutes of walking time per attendant daily.',
      'Implement the "10-Point Digital Mobile Inspection": inspectors audit randomized rooms via tablets, taking timestamped photos of shower drains, beds, and mirrors to achieve statistical process control.',
      'Cut Cost of Poor Quality (COPQ) by $120,000 annually and lift cleanliness satisfaction scores from 72 to 94 within 90 days.'
    ]
  },
  {
    id: 'qm-03',
    title: 'ISO 9001 Quality Management Certification in Hotel Operations: Oceanic International',
    instructionalArea: 'Quality Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Quality Systems Compliance Directors & Operational Process Engineers',
    judgeRole: 'Senior Vice President of Global Operations & Standards Compliance',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the principles and framework of ISO 9001 Quality Management Systems (QMS)',
        description: 'Establish standard operating documentation, management review processes, and continuous audits.'
      },
      {
        name: 'Map and document end-to-end guest service processes across all operational departments',
        description: 'Create standardized process maps for reservations, luggage handling, food safety, and billing reconciliation.'
      },
      {
        name: 'Establish risk-based thinking and preventative quality controls in hospitality',
        description: 'Anticipate and eliminate operational hazards before they impact guest experience or life safety.'
      },
      {
        name: 'Design internal quality audit schedules and Corrective and Preventive Action (CAPA) systems',
        description: 'Track non-conformances, conduct formal root-cause investigations, and verify closure of corrective actions.'
      },
      {
        name: 'Evaluate the commercial competitive advantage of international ISO certification in corporate bidding',
        description: 'Leverage ISO 9001 credentials to win Fortune 500 corporate travel contracts and government summits.'
      }
    ],
    twentyFirstCenturySkills: ['Quality Systems Architecture', 'Compliance Auditing', 'Process Engineering', 'Strategic Governance'],
    background: `Oceanic International is a 750-room premier convention hotel competing for multi-million-dollar global pharmaceutical summits, government defense conferences, and Fortune 100 enterprise corporate contracts. Increasingly, global enterprise travel procurement managers require hotel suppliers to possess verified international quality certifications.

However, Oceanic International’s internal operating procedures are chaotic and decentralized:
- Each department operates in an isolated silo with conflicting, unverified procedures: Front Office follows a 10-year-old binder; Food & Beverage follows verbal chef traditions; Engineering uses loose post-it notes.
- When service breakdowns occur, managers apply temporary band-aids without logging formal non-conformances or investigating root causes.
- Last month, the hotel lost a $2.8 million multi-year corporate lodging contract because the client required ISO 9001 certified quality standards, which competitor properties possessed.

Corporate leadership has committed to becoming the first hotel in the metropolitan region to achieve formal ISO 9001:2015 Quality Management System Certification within nine months.

You and your partner (Quality Systems Compliance Directors and Operational Process Engineers) are presenting your ISO 9001 Implementation Roadmap to the Senior Vice President of Global Operations (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing QMS documentation architecture, process mapping across departments, CAPA tracking workflows, internal audit teams, and corporate commercial ROI.',
    judgeQuestions: [
      'Won’t creating hundreds of standardized ISO 9001 compliance manuals turn our hospitality staff into rigid, bureaucratic robots who forget how to smile?',
      'How does our CAPA (Corrective and Preventive Action) system prevent a recurring guest complaint—such as a noisy mini-fridge—from happening again?'
    ],
    benchmarkPoints: [
      'Build a streamlined digital QMS repository: replace dusty binders with a cloud-based, interactive process portal accessible on employee mobile devices.',
      'Implement the CAPA (Corrective and Preventive Action) protocol: any critical service defect triggers a formal 5-step root-cause review and mandatory 30-day verification audit.',
      'Train a certified Internal Quality Audit Team comprising 12 cross-departmental supervisors conducting monthly compliance inspections.',
      'Leverage ISO 9001 certification in B2B enterprise RFP bidding, recapturing lost corporate accounts and projecting $4.5 million in incremental contracted group revenue.'
    ]
  },
  {
    id: 'qm-04',
    title: 'Mystery Shopper Audit Remediation & Service Blueprinting: The Sovereign Hotel',
    instructionalArea: 'Quality Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Guest Experience Architects & Service Standards Auditors',
    judgeRole: 'Managing Director of The Sovereign Luxury Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze third-party mystery shopper evaluation reports and quantitative scoring rubrics',
        description: 'Examine failing benchmark scores in valet greeting speed, reservation telephone etiquette, and bar service.'
      },
      {
        name: 'Construct comprehensive Service Blueprints mapping onstage, backstage, and support processes',
        description: 'Identify fail points, guest wait times, and internal system handoffs causing service bottlenecks.'
      },
      {
        name: 'Design rapid corrective action remediation programs for underperforming departments',
        description: 'Retrain front office and food & beverage teams on luxury standards within a 30-day turnaround window.'
      },
      {
        name: 'Establish continuous peer-observation quality feedback mechanisms',
        description: 'Pair supervisors with frontline associates for real-time constructive coaching and positive reinforcement.'
      },
      {
        name: 'Correlate mystery shopping performance scores with guest Net Promoter Scores and online review rankings',
        description: 'Demonstrate that lifting audit scores from 74% to 92% directly drives TripAdvisor top-tier rankings.'
      }
    ],
    twentyFirstCenturySkills: ['Service Blueprinting', 'Root-Cause Remediation', 'Coaching & Mentorship', 'Visual Communication'],
    background: `The Sovereign is a 240-room luxury boutique hotel that positions itself as the city’s premier design and service sanctuary. However, corporate headquarters recently commissioned an unannounced, exhaustive 3-day mystery shopper audit from an elite international luxury inspection firm.

The audit results were devastating: The Sovereign received an overall score of only 74.2% (a failing mark for luxury tier properties, where the minimum standard is 88%):
- Arrival: The valet took 6 minutes to greet the inspector’s vehicle; no associate offered to assist with luggage, and the front desk agent did not offer a welcome beverage or explain hotel amenities.
- Food & Beverage: In the signature lounge, the inspector waited 11 minutes before being acknowledged by a server, and water glasses remained empty throughout the meal.
- Housekeeping: The inspector discovered a used tissue behind the bedside table and noticed the bathroom vanity had not been sanitized properly.
- Telephone Reservations: The agent sounded rushed, failed to inquire about the purpose of the trip, and did not attempt to upsell a suite.

The Managing Director is in shock and has ordered an immediate, comprehensive service remediation plan to overhaul service touchpoints before the re-inspection in 45 days.

You and your partner (Guest Experience Architects and Service Standards Auditors) are presenting your Mystery Audit Remediation & Service Blueprinting Plan to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the Service Blueprint diagnosis of touchpoint fail points, 30-day intensive staff retraining, peer-coaching workflows, and re-audit score targets.',
    judgeQuestions: [
      'Why did our staff perform so terribly during the mystery audit when our daily guest comment cards generally seem positive?',
      'How does a Service Blueprint pinpoint the exact hidden breakdown that caused a guest to wait 11 minutes for a drink in our lounge?'
    ],
    benchmarkPoints: [
      'Map comprehensive Service Blueprints for Arrival, Dining, and Housekeeping, exposing critical backstage disconnects (e.g., lounge servers trapped in kitchen dishwashing due to busser shortages).',
      'Launch the "45-Day Service Mastery Sprint": daily 15-minute shift briefings drilling the specific failed mystery-shopper standards with interactive roleplay.',
      'Deploy the "Shadow Coach" system: department supervisors spend two hours daily conducting silent observations and providing immediate, private positive coaching.',
      'Target a re-audit score of 93%+, securing brand compliance and driving an estimated 18-point increase in TripAdvisor guest satisfaction ranking.'
    ]
  },
  {
    id: 'qm-05',
    title: 'In-Room Dining Delivery Variance & Thermal Food Quality Control: Metro Tower Hotel',
    instructionalArea: 'Quality Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Culinary Quality Engineers & F&B Operations Specialists',
    judgeRole: 'Director of Food & Beverage & Executive Chef',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply quality control metrics to culinary production, food temperature, and delivery transit times',
        description: 'Enforce HACCP standards ensuring hot foods arrive at guest rooms at >140°F and cold foods at <40°F.'
      },
      {
        name: 'Identify transit variance and elevator bottlenecks causing in-room dining delays',
        description: 'Analyze time-motion studies showing service delivery runners waiting up to 8 minutes for service elevators.'
      },
      {
        name: 'Design thermal-retention equipment standards and specialized insulated delivery transport systems',
        description: 'Deploy heated induction plate bases and insulated thermal carriers to maintain pristine food quality.'
      },
      {
        name: 'Establish standardized order-staging and culinary ticket-flow protocols',
        description: 'Synchronize kitchen line cooking with runner dispatch to eliminate food sitting under heat lamps.'
      },
      {
        name: 'Track customer defect complaints and food refund write-offs to measure quality improvement',
        description: 'Reduce food temperature complaints from 16% to under 1% within 60 days.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary Quality Control', 'Time-Motion Engineering', 'Thermal Physics in F&B', 'Process Optimization'],
    background: `Metro Tower Hotel is a 48-story luxury hotel with 700 rooms. In-room dining is a major guest expectation, handling over 350 breakfast and dinner orders daily.

However, in-room dining has become the hotel’s number one source of negative guest reviews and food refunds:
- Over 16% of room service deliveries generate bitter complaints about cold food: eggs benedict arrive lukewarm, steaks arrive sweating under metal cloches, and ice cream arrives as soup.
- The hotel wrote off over $82,000 in refunded room service bills over the past six months.
- A time-motion quality study revealed severe process variance: while the kitchen cooked orders in a reasonable 14 minutes, delivery runners spent an average of 19 minutes navigating the 48 floors because service elevators were continuously tied up by housekeeping laundry carts and engineering teams.
- Food sat under kitchen heat lamps for up to 12 minutes waiting for an available runner, drying out sauces and overcooking proteins before the journey even began.

The Director of Food & Beverage and Executive Chef demand a rigorous culinary engineering and quality control overhaul to guarantee that every meal arrives piping hot within 25 minutes of order placement.

You and your partner (Culinary Quality Engineers and F&B Operations Specialists) are presenting your Thermal Quality & Delivery Optimization Plan to the Director of F&B (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing synchronized kitchen ticket-dispatch workflows, service elevator priority protocols, induction heating technology, and defect reduction metrics.',
    judgeQuestions: [
      'How will your team ensure that hot food stays at pristine culinary temperatures during a 15-minute transit up 48 floors without cooking the protein further?',
      'How will you resolve the conflict between in-room dining runners and housekeeping staff who both desperately need the service elevators at 8:00 AM?'
    ],
    benchmarkPoints: [
      'Implement Induction Heating Delivery Technology: replace passive aluminum covers with electric induction plate warmers that keep food at exactly 150°F for up to 45 minutes.',
      'Synchronize kitchen dispatch: line cooks do not fire orders until a delivery runner is physically checked into the pantry ready for transport (Just-In-Time production).',
      'Establish Service Elevator Priority Windows: program smart elevator dispatchers to reserve one express service elevator exclusively for in-room dining between 6:30 AM and 10:00 AM.',
      'Slash food temperature refund write-offs by 90%, recovering $74,000 annually while elevating in-room dining guest satisfaction scores from 64% to 92%.'
    ]
  },
  {
    id: 'qm-06',
    title: 'Front Desk Check-In Queue Defect Reduction & Lean Flow: Grand Central Inn',
    instructionalArea: 'Quality Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Front Office Flow Engineers & Lean Quality Directors',
    judgeRole: 'General Manager of Grand Central Inn',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply Lean queueing theory and bottleneck analysis to front office guest arrival flows',
        description: 'Eliminate peak 4:00 PM check-in lobby wait times averaging 24 minutes.'
      },
      {
        name: 'Standardize frontline software transaction keystrokes to reduce cycle time per check-in',
        description: 'Streamline PMS registration workflows from 4 minutes 30 seconds down to 90 seconds.'
      },
      {
        name: 'Implement hybrid self-service digital kiosks and roving tablet check-in concierges',
        description: 'Divert 40% of tech-savvy arrivals away from the main counter to automated 30-second key dispensers.'
      },
      {
        name: 'Design psychological queue-management and waiting-line hospitality interventions',
        description: 'Provide complimentary welcome beverages, live acoustic music, and visible queue-time monitors.'
      },
      {
        name: 'Monitor First-Contact Resolution and arrival defect rates using statistical quality tracking',
        description: 'Eliminate room key demagnetization errors and incorrect billing assignments upon arrival.'
      }
    ],
    twentyFirstCenturySkills: ['Lean Queueing Theory', 'Human Factors Engineering', 'Cycle Time Reduction', 'Empathy in Systems Design'],
    background: `Grand Central Inn is an 850-room high-velocity convention hotel located adjacent to a major metropolitan railway terminal. The hotel experiences extreme arrival compression: between 3:30 PM and 6:30 PM every Sunday and Wednesday, over 500 guests arrive simultaneously.

The arrival experience has collapsed into complete operational gridlock:
- Guests wait in winding lobby lines for up to 28 minutes just to receive their room keys. Furious guests yell at front desk agents, post scathing photos of the \"airport-like queue\" on social media, and arrive in their rooms already frustrated.
- A time-motion study revealed that front desk agents take an agonizing 4 minutes and 45 seconds per check-in transaction. Agents must navigate 14 different screens in an outdated PMS, manually type credit card billing addresses, and re-type guest phone numbers.
- Adding to the chaos, 12% of encoded keycards fail upon initial swipe at guestroom doors due to worn-out encoder heads, forcing exhausted guests to drag their luggage all the way back down to the lobby to wait in line a second time.

The General Manager has mandated an end to the check-in crisis through a comprehensive Lean Front Office Quality Overhaul.

You and your partner (Front Office Flow Engineers and Lean Quality Directors) are presenting your Check-In Queue Reduction Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing PMS keystroke streamlining, deployment of express self-service key kiosks, roving tablet concierges, keycard encoder quality fixes, and wait-time targets.',
    judgeQuestions: [
      'If we deploy self-service check-in kiosks, won’t our hotel lose its human hospitality warmth and start looking like a budget airport terminal?',
      'What immediate mechanical fix will eliminate the 12% keycard failure rate that forces guests to return to the front desk?'
    ],
    benchmarkPoints: [
      'Streamline PMS transaction architecture: automate digital pre-authorizations and registration signatures pre-arrival, cutting transaction cycle time from 4:45 to 80 seconds per guest.',
      'Deploy 6 sleek Self-Service Key Dispensers in the lobby for guests who completed pre-registration on their smartphones, enabling them to grab keys in under 30 seconds.',
      'Deploy Roving Lobby Ambassadors equipped with mobile iPads to check in waiting guests directly in the queue during unexpected arrival surges.',
      'Replace obsolete magnetic stripe encoders with modern RFID encoders, reducing keycard swipe failures from 12% to under 0.2% and slashing average lobby wait times from 28 minutes to under 4 minutes.'
    ]
  },
  {
    id: 'qm-07',
    title: 'HACCP Food Safety Quality Assurance in Banquet Operations: Pinnacle Center Hotel',
    instructionalArea: 'Quality Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Food Safety & Banquet Quality Assurance Lead',
    judgeRole: 'Vice President of Culinary Operations & Risk Governance',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design and execute a Hazard Analysis Critical Control Point (HACCP) system in high-volume catering',
        description: 'Establish critical control points (CCPs), critical limits, monitoring procedures, and corrective actions.'
      },
      {
        name: 'Prevent cross-contamination and temperature danger zone violations during massive banquet service',
        description: 'Ensure safe handling of proteins and dairy across 2,000-seat plated banquet galas.'
      },
      {
        name: 'Deploy automated IoT Bluetooth temperature probes and cloud compliance logging',
        description: 'Replace manual paper temperature logs with real-time digital sensor tracking in walk-ins and hot boxes.'
      },
      {
        name: 'Establish strict allergen segregation and cross-contact prevention protocols in commercial kitchens',
        description: 'Implement color-coded allergen prep stations and dedicated banquet plating lines for severe allergies.'
      },
      {
        name: 'Evaluate the legal, financial, and brand catastrophe of foodborne illness outbreaks in convention lodging',
        description: 'Mitigate civil tort liabilities, health department closures, and multi-million-dollar event cancellations.'
      }
    ],
    twentyFirstCenturySkills: ['HACCP Engineering', 'Bio-Safety Protocols', 'Risk Auditing', 'Regulatory Compliance'],
    background: `Pinnacle Center Hotel is an expansive 900-room convention property hosting over 300 major corporate conferences, medical symposia, and luxury galas annually. The hotel’s banquet kitchen serves up to 3,500 plated meals in a single evening, generating $18 million in annual catering revenue.

Last month, a terrifying near-catastrophe occurred during a 1,200-guest national medical symposium banquet:
- Forty-five minutes into dinner service, health inspectors conducted a routine unannounced audit and discovered three mobile banquet hot boxes holding 350 cooked chicken breasts at an internal temperature of 115°F—deep inside the bacterial Temperature Danger Zone (41°F - 135°F)—because a banquet server accidentally kicked the power cord out of the wall outlet two hours earlier.
- The inspectors immediately condemned and destroyed the food, forcing the kitchen to scramble and leaving 350 physicians waiting an hour for backup food.
- The subsequent internal audit exposed widespread quality negligence: kitchen staff routinely forged manual paper temperature logs, scribbling numbers without taking actual probe readings. Furthermore, several guests with severe peanut and gluten allergies received plates contaminated by shared plating tongs.

The Vice President of Culinary Operations has issued a zero-tolerance mandate: the banquet kitchen must implement an unbreachable HACCP Food Safety & IoT Quality Assurance System within 30 days.

You and your partner (Director of Food Safety and Banquet Quality Assurance Lead) are presenting your HACCP Quality System Overhaul to the Vice President of Culinary Operations (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the 7 HACCP principles, automated IoT wireless temperature sensors, color-coded allergen protocols, staff training, and zero-defect compliance.',
    judgeQuestions: [
      'How does your automated system prevent kitchen staff from forging temperature logs or ignoring alerts when a hot-holding box loses power?',
      'How will your banquet kitchen guarantee zero cross-contact when plating 1,500 meals in a 45-minute window with dozens of special dietary requests?'
    ],
    benchmarkPoints: [
      'Deploy IoT Wireless Bluetooth Temperature Sensors across all 24 walk-in coolers and 30 mobile banquet holding boxes, logging temperatures every 5 minutes to the cloud with instant SMS alerts if temperatures breach limits.',
      'Implement the "Purple Zone" Allergen Defense Protocol: dedicated isolated prep kitchen, purple-coded utensils and cutting boards, and certified executive sous chef sign-off on every allergy plate.',
      'Establish mandatory ServSafe Manager certification for 100% of banquet captains, sous chefs, and kitchen supervisors with bi-weekly mock health audits.',
      'Eliminate foodborne illness risk entirely, securing the hotel’s culinary license and protecting $18 million in banquet revenue from catastrophic litigation.'
    ]
  },
  {
    id: 'qm-08',
    title: 'Guestroom Acoustic & Climate Quality Control: The Alpine Sanctuary Resort',
    instructionalArea: 'Quality Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Facilities Quality Engineers & Guest Comfort Analysts',
    judgeRole: 'General Manager of The Alpine Sanctuary Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Establish physical comfort quality benchmarks in luxury lodging (acoustics, HVAC, water pressure)',
        description: 'Benchmark ambient room noise (<32 dBA), temperature stability (+/- 1°F), and shower flow rates.'
      },
      {
        name: 'Utilize acoustic engineering tools (sound meters, vibration sensors) to diagnose noise transfer',
        description: 'Identify sound transmission class (STC) failures between adjoining room doors and plumbing chases.'
      },
      {
        name: 'Implement preventive maintenance quality cycles on Variable Refrigerant Flow (VRF) climate systems',
        description: 'Eliminate noisy compressor rattling and erratic thermostat calibration in guestrooms.'
      },
      {
        name: 'Establish frontline room quality inspection protocols prior to VIP check-ins',
        description: 'Require physical engineering sign-offs on room temperature, plumbing flush cycles, and silent mini-bars.'
      },
      {
        name: 'Calculate the return on capital investment for physical plant acoustic and mechanical upgrades',
        description: 'Demonstrate how a $180,000 noise abatement project recovers $95,000 in annual room compensation refunds.'
      }
    ],
    twentyFirstCenturySkills: ['Environmental Acoustics', 'HVAC Engineering', 'Quality Benchmarking', 'Financial ROI Analysis'],
    background: `The Alpine Sanctuary Resort is an upscale 180-room wellness mountain retreat commanding an ADR of $580 per night. Guests visit seeking peaceful restorative sleep, tranquility, and mountain air.

However, physical plant quality defects have severely compromised guest satisfaction:
- Over 22% of guest complaints cite sleep disruption caused by mechanical noise: in-room fan coil units produce a loud 54 dBA rattling noise whenever the heat cycles on, sound leaks through connecting room doors allowing guests to hear neighboring conversations, and water pipes produce loud hydraulic \"water hammer\" thuds when adjacent rooms flush toilets.
- The resort wrote off $95,000 in room refunds and issued hundreds of spa gift cards last year to placate exhausted guests who spent the night awake.
- Online reviews on TripAdvisor frequently mention: \"Beautiful resort, but you will not sleep due to the jet-engine heater in your room.\"

The General Manager has authorized an immediate $180,000 Physical Plant Quality & Noise Abatement Initiative to bring all guestrooms into compliance with ultra-luxury acoustic standards (<32 dBA ambient sound).

You and your partner (Facilities Quality Engineers and Guest Comfort Analysts) are presenting your Acoustic & Climate Quality Overhaul to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing acoustic sound dampening, HVAC vibration isolation, acoustic door seals, plumbing water hammer arrestors, and financial payback.',
    judgeQuestions: [
      'What specific decibel level benchmark defines \"luxury quiet,\" and how will our engineering team test every room before guest arrival?',
      'How can we soundproof connecting doors between suites without having to replace expensive custom wood doors?'
    ],
    benchmarkPoints: [
      'Establish strict luxury quality benchmarks: ambient sound <30 dBA with HVAC running, temperature variance <1°F, and zero audible plumbing water hammer.',
      'Install heavy acoustic perimeter drop-seals and magnetic neoprene gaskets on all connecting doors, increasing Sound Transmission Class (STC) rating from 28 to 44 at minimal cost.',
      'Retrofit fan coil units with dynamic variable-speed ECM motors and rubber vibration isolators, reducing HVAC decibel output from 54 dBA to an imperceptible 26 dBA.',
      'Achieve complete financial payback in 22 months by eliminating $95,000 in annual noise-related refunds while lifting the resort’s TripAdvisor ranking from #8 to #2.'
    ]
  },
  {
    id: 'qm-09',
    title: 'Preventive Maintenance Quality Standards & CMMS Digitization: Continental Plaza',
    instructionalArea: 'Quality Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Asset Quality & Maintenance Systems Engineers',
    judgeRole: 'Vice President of Hotel Asset Management',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Transition hospitality engineering from reactive firefighting to proactive Preventive Maintenance (PM)',
        description: 'Replace emergency repair calls with structured scheduled maintenance checklists for all physical assets.'
      },
      {
        name: 'Implement a cloud-based Computerized Maintenance Management System (CMMS)',
        description: 'Digitize work orders, asset lifecycle tracking, spare parts inventory, and technician accountability.'
      },
      {
        name: 'Design rigorous \"Perfect Room\" deep-maintenance cycles across lodging guestrooms',
        description: 'Schedule quarterly full-room shutdowns to service HVAC, repaint trim, descaling shower heads, and recaulk tubs.'
      },
      {
        name: 'Establish Mean Time Between Failures (MTBF) and Mean Time to Repair (MTTR) performance metrics',
        description: 'Track asset reliability and maintenance technician efficiency across 650 guestrooms.'
      },
      {
        name: 'Quantify capital equipment life extension and reduced emergency contractor expenditure',
        description: 'Demonstrate how preventive maintenance extends chiller and elevator lifespan by 7 years.'
      }
    ],
    twentyFirstCenturySkills: ['Asset Lifecycle Management', 'CMMS Architecture', 'Preventive Engineering', 'Budget Optimization'],
    background: `Continental Plaza is a 650-room landmark hotel built 25 years ago. The engineering department has long operated in chaotic \"reactive firefighting\" mode:
- Maintenance technicians spend their entire shift running from room to room fixing emergency toilet overflows, broken door locks, and dead television remotes logged by angry checked-in guests.
- The property has zero structured preventive maintenance: guestrooms are serviced only when something breaks. Consequently, 38 guestrooms are currently taken \"Out of Order\" (OOO) due to major neglected issues (water leaks, burned-out fan motors), representing $1.4 million in annual lost room revenue.
- The hotel spends over $220,000 annually hiring emergency third-party plumbing and electrical contractors on weekends at double-time rates because the internal team lacks scheduled maintenance routines.
- Over 45% of work orders are lost or forgotten because technicians use handwritten paper work orders on loose clipboards.

The Vice President of Asset Management has allocated $90,000 to deploy a state-of-the-art cloud Computerized Maintenance Management System (CMMS) and institute the \"Perfect Room Quality Maintenance Program.\"

You and your partner (Director of Asset Quality and Maintenance Systems Engineers) are presenting your Preventive Maintenance Strategy to the Vice President of Asset Management (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the cloud CMMS rollout, quarterly "Perfect Room" deep-maintenance cycles, technician mobile tracking, and financial recovery of OOO rooms.',
    judgeQuestions: [
      'How will you convince veteran maintenance technicians who have used paper clipboards for 20 years to log every task on mobile smartphone apps?',
      'If we shut down 10 rooms every week for "Perfect Room" deep maintenance, won’t that hurt our occupancy during busy sellout weeks?'
    ],
    benchmarkPoints: [
      'Deploy a mobile CMMS platform (e.g., Quore/Transcend): every asset receives a unique QR code; technicians scan the QR code to view maintenance history and log completed tasks in real time.',
      'Institute the "Perfect Room Cycle": four dedicated PM technicians take 8 rooms out of service during off-peak midweek periods, executing an exhaustive 45-point deep-maintenance checklist.',
      'Reduce Out of Order (OOO) rooms from 38 rooms down to under 4 rooms, returning $1.2 million in sellable room inventory back to the active hotel pool.',
      'Slash emergency third-party contractor expenses by 65%, saving $140,000 annually while extending major boiler and chiller operating life by over six years.'
    ]
  },
  {
    id: 'qm-10',
    title: 'Net Promoter Score Turnaround & Continuous Quality Feedback Loops: Whispering Palms',
    instructionalArea: 'Quality Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Quality Officers & Customer Feedback Analysts',
    judgeRole: 'Managing Director & Regional Hospitality Partner',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the methodology and strategic business value of Net Promoter Score (NPS) in lodging',
        description: 'Categorize guest survey feedback into Promoters (9-10), Passives (7-8), and Detractors (0-6).'
      },
      {
        name: 'Design automated real-time guest feedback capture and sentiment analytics during the active stay',
        description: 'Deploy mid-stay SMS check-ins on Day 2 to intercept and resolve guest dissatisfaction before checkout.'
      },
      {
        name: 'Establish closed-loop service recovery protocols for Net Promoter Detractors',
        description: 'Require General Manager or Department Head phone calls to 100% of Detractors within 24 hours of survey submission.'
      },
      {
        name: 'Empower frontline employees with decentralized service recovery budgets and authority',
        description: 'Authorize associates to spend up to $200 per incident on instant amenities, meals, or credits to fix defects.'
      },
      {
        name: 'Demonstrate the direct correlation between high NPS scores, customer lifetime value, and ADR pricing power',
        description: 'Prove that lifting NPS from +28 to +65 enables the property to increase rates by 12% without occupancy loss.'
      }
    ],
    twentyFirstCenturySkills: ['Customer Journey Analytics', 'Empathetic Service Recovery', 'NPS Architecture', 'Strategic Leadership'],
    background: `Whispering Palms is an expansive 400-room coastal resort. Over the past twelve months, the resort’s Net Promoter Score (NPS)—the industry benchmark of customer loyalty and advocacy—has plummeted from an elite +62 down to an abysmal +18.

An analysis of post-stay survey data revealed why guests are defecting to competitors:
- Detractors (guests scoring 0 to 6) account for 34% of all surveyed guests, citing recurring friction: long check-in lines, uncleaned pool towels, indifferent restaurant service, and unaddressed maintenance tickets.
- Currently, the hotel practices zero mid-stay intervention: management discovers guest unhappiness only after the guest has already checked out and published a scathing 1-star TripAdvisor or Google review.
- When post-stay survey complaints arrive, they sit unread in an administrative email box for weeks. Only 4% of Detractors ever receive an apology or follow-up from hotel management.
- Frontline staff have zero authority to solve problems on the spot: when a guest complains about a 45-minute room service delay, the server must ask three different managers before offering a $10 coffee coupon.

The Managing Director has declared a state of emergency regarding guest loyalty and requires a comprehensive Closed-Loop NPS Quality Turnaround Plan.

You and your partner (Chief Quality Officers and Customer Feedback Analysts) are presenting your NPS Transformation Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing mid-stay sentiment capture, 24-hour Detractor closed-loop recovery, $200 frontline staff empowerment, root-cause feedback integration, and NPS lift targets.',
    judgeQuestions: [
      'If we give frontline associates the authority to spend up to $200 to solve guest complaints, won’t associates give away the hotel and cost us hundreds of thousands of dollars?',
      'How does mid-stay SMS sentiment surveying catch problems without annoying guests who just want to be left alone on vacation?'
    ],
    benchmarkPoints: [
      'Deploy the "Day 2 Pulse Check": send an automated, friendly SMS on morning 2 ("Is your stay meeting expectations? Reply 1-10"), immediately alerting managers to resolve issues while the guest is still on property.',
      'Institute the "100% Closed-Loop Rule": mandate that executive committee members personally contact every Detractor within 24 hours of survey submission to listen, apologize, and offer tailored remediation.',
      'Deploy the "Empowerment $200 Token": authorize every associate to spend up to $200 instantly (waiving fees, sending champagne, booking a massage) to turn an upset guest into a loyal promoter with zero manager approval required.',
      'Achieve target NPS recovery from +18 to +65 within nine months, converting 4,000 potential detractors into brand advocates and driving $1.8 million in direct repeat bookings.'
    ]
  }
];
