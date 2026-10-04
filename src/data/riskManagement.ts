import { DecaCaseStudy } from '../types/deca';

export const riskManagementCases: DecaCaseStudy[] = [
  {
    id: 'rm-01',
    title: 'Keep Guests Safe During a Severe Category 3 Hurricane Warning',
    instructionalArea: 'Risk Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Safety and Security & Emergency Response Coordinator',
    judgeRole: 'General Manager of The Grand Key Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain emergency response and crisis management procedures in lodging',
        description: 'Establish standard operating procedures for severe weather, storm surge, and structural lockdowns.'
      },
      {
        name: 'Develop comprehensive guest and staff evacuation and shelter-in-place protocols',
        description: 'Coordinate floor-by-floor guest counts, accessible transport for disabled guests, and secure refuge areas.'
      },
      {
        name: 'Establish emergency communications systems during utility grid failure',
        description: 'Deploy battery-operated satellite radios, backup generators, runner messengers, and multi-lingual guest bulletins.'
      },
      {
        name: 'Manage critical supply logistics (emergency potable water, non-perishable food, medical kits)',
        description: 'Maintain 72-hour survival rations, diesel fuel stockpiles, and essential prescription refrigeration.'
      },
      {
        name: 'Implement post-storm business continuity and insurance damage assessment',
        description: 'Document structural damage, coordinate commercial flood insurance adjusters, and prepare phased reopening.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Collaboration'],
    background: `The Grand Key Resort is an expansive 480-room luxury beachfront destination situated on an exposed barrier island in coastal South Florida. Connected to the mainland by a single two-lane causeway bridge, the resort features 60 oceanfront bungalows, a multi-story main hotel tower, two signature restaurants, an outdoor marina, and a golf course. At 8:00 AM on a Thursday in mid-September, the resort is operating at 86% occupancy with over 1,100 registered guests, including families with young children and elderly convention attendees.

The National Hurricane Center has just upgraded Hurricane Mateo to a powerful Category 3 storm, issuing a mandatory evacuation order for all barrier island residents and transient hotel visitors within 36 hours. The storm is packing sustained winds of 125 mph, an anticipated coastal storm surge of 9 to 12 feet, and torrential rainfall exceeding 14 inches. Regional airports have announced that all commercial flight operations will cease within 18 hours, and heavy traffic is already choking the mainland highway corridors.

The resort's frontline operations face imminent chaos. Frustrated, panicked guests are swarming the front desk demanding immediate flight assistance, rental cars, and billing cancellations, while local staff members are desperate to leave work to secure their own families and board up their homes. Complicating matters, approximately 45 elderly guests and international tourists with no personal transportation have expressed that they are unable to secure rental cars or flights and will have to remain stranded on the barrier island if the resort does not provide emergency shelter or transit.

Furthermore, municipal emergency management has informed the General Manager that the causeway bridge will be locked down by county sheriffs in exactly 24 hours to prevent dangerous travel in high winds, cutting off all mainland road access. The resort must safeguard life, secure multi-million-dollar physical assets (securing outdoor furniture, boarding glass balconies, preparing emergency diesel generators), and execute an orderly, compassionate evacuation while preparing the hardened main tower as a self-sufficient emergency shelter-of-last-resort for remaining guests and essential disaster personnel.

You and your partner (serving as the Director of Safety and Security and the Emergency Response Coordinator) have been called to an emergency incident command meeting with the General Manager (played by the judge). You must present an immediate, operational 36-Hour Hurricane Disaster & Evacuation Plan. Your presentation must outline guest transportation logistics, emergency power and food/water reserves, frontline staff duty rosters and safety, floor-by-floor communication protocols, and property hardening measures to ensure zero injuries or loss of life.`,
    challenge: 'Present a comprehensive 36-Hour Category 3 Hurricane Emergency Response and Evacuation Plan to the General Manager. Address barrier island transit, shelter-of-last-resort preparations, auxiliary power and food/water supplies, and staff safety protocols.',
    judgeQuestions: [
      'What specific criteria will determine whether we mandate remaining guests to evacuate to a mainland county shelter versus sheltering in our interior ballrooms?',
      'How will we motivate and legally protect our essential emergency ride-out team staff who must stay on property through the hurricane?'
    ],
    benchmarkPoints: [
      'Charter four 55-passenger commercial motorcoaches immediately to transport stranded guests to mainland airport hotels before bridge closure.',
      'Hardening the facility: designate the 2nd-floor interior Grand Ballroom (above the 12-ft surge zone with reinforced steel doors) as the primary shelter-of-last-resort.',
      'Emergency provisions: verify 72 hours of potable water (1 gallon/person/day), MRE meal boxes, auxiliary diesel fuel for 500kW emergency generators, and satellite phone links.'
    ]
  },
  {
    id: 'rm-02',
    title: 'Cybersecurity Breach and Guest Credit Card Data Compromise at Regional Hotel Group',
    instructionalArea: 'Risk Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Information Security Officer & Corporate Risk Manager',
    judgeRole: 'Chief Executive Officer and General Counsel of Horizon Hospitality',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain Payment Card Industry Data Security Standards (PCI-DSS) in hospitality',
        description: 'Understand end-to-end tokenization, point-to-point encryption (P2PE), and network segmentation.'
      },
      {
        name: 'Develop incident response protocols for cyber breaches and digital ransomware',
        description: 'Isolate compromised servers, engage digital forensics investigators, and preserve legal evidence chains.'
      },
      {
        name: 'Navigate legal data breach notification mandates (state laws and GDPR compliance)',
        description: 'Meet 72-hour statutory regulatory reporting windows, federal disclosures, and affected guest notification.'
      },
      {
        name: 'Formulate public relations and reputational crisis mitigation strategies',
        description: 'Communicate transparently with affected cardholders, provide free credit monitoring, and prevent media panic.'
      },
      {
        name: 'Quantify cyber liability insurance coverage and commercial recovery costs',
        description: 'Manage forensic costs, card brand non-compliance fines, litigation defense, and network remediation.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Legal & Ethical Responsibility'],
    background: `Horizon Hospitality Group is an upper-upscale regional hotel operator managing fourteen boutique and resort properties across five states, with 2,800 guest rooms and annual credit card transaction volume exceeding $95 million. At 6:30 AM on a Monday, the corporate IT security team detected abnormal outbound data exfiltration traffic originating from the central on-premise Property Management System (PMS) and food-and-beverage Point-of-Sale (POS) server clusters.

A preliminary forensic sweep revealed that an international cybercrime syndicate successfully breached the hotel group's firewall two weeks ago via a targeted spear-phishing email opened by an assistant front desk manager at a sister property. The threat actors installed malicious memory-scraping malware that systematically intercepted unencrypted payment card magnetic stripe data, cardholder names, expiration dates, and CVV security codes for over 85,000 hotel and restaurant guests over a 14-day window.

The consequences are catastrophic and immediate: three major credit card payment brands (Visa, Mastercard, American Express) have notified the hotel's merchant acquiring bank of suspicious card-present fraud spikes traced directly to Horizon properties. The company faces immediate card brand non-compliance fines of up to $100,000 per month, potential merchant account suspension (which would shut down the hotel's ability to accept credit card payments entirely), and immense civil class-action liability under state and federal data privacy statutes.

Furthermore, state data breach notification laws and GDPR regulations mandate that compromised entities notify state attorneys general and affected consumers in writing within strict 72-hour statutory windows. News of the breach is already leaking on cybersecurity blogs, and corporate travel directors from major commercial accounts are calling executive headquarters threatening to cancel multi-million-dollar annual lodging contracts unless ironclad data security is proven.

You and your partner (serving as the Chief Information Security Officer and Corporate Risk Manager) have been summoned to an emergency board meeting with the Chief Executive Officer and General Counsel (played by the judge). You must present a comprehensive Cyber Breach Incident Response and Recovery Blueprint. Your presentation must detail the technical containment of the POS network, certified forensic investigation steps, legal notification compliance schedules, identity protection services for affected guests, and public communications to protect corporate brand equity.`,
    challenge: 'Present a comprehensive Cybersecurity Breach Containment & Regulatory Response Strategy to the CEO and General Counsel. Address technical server isolation, PCI-DSS forensic audits, mandatory 72-hour legal notifications, guest identity protection, and PR mitigation.',
    judgeQuestions: [
      'How will your technical team isolate the compromised servers without shutting down our front desk check-in software and leaving guests stranded in our lobbies?',
      'What specific public messaging will balance transparent legal disclosure with reassurance to prevent massive corporate booking cancellations?'
    ],
    benchmarkPoints: [
      'Activate immediate technical containment: sever infected server network connections, deploy certified third-party digital forensics (Mandiant/CrowdStrike), and migrate to cloud tokenized POS.',
      'Regulatory compliance: execute 72-hour legal notification to State Attorneys General, FTC, and card brands, supported by dedicated crisis call center for affected guests.',
      'Customer restitution: provide 12 months of free credit monitoring and identity theft insurance ($1M policy) for all 85,000 affected cardholders, funded by the company\'s cyber liability insurance.'
    ]
  },
  {
    id: 'rm-03',
    title: 'Managing a Foodborne Illness Outbreak at a 500-Guest Corporate Gala',
    instructionalArea: 'Risk Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Food Safety & Executive Banquet Risk Officer',
    judgeRole: 'General Manager of The Biltmore Convention Center',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain Hazard Analysis Critical Control Point (HACCP) principles in commercial catering',
        description: 'Examine temperature danger zones (41°F-135°F), cross-contamination prevention, and cooling logs.'
      },
      {
        name: 'Execute public health department investigation and food safety traceback protocols',
        description: 'Secure retained food samples, quarantine suspected culinary lots, and cooperate with epidemiological audits.'
      },
      {
        name: 'Develop crisis communication and guest restitution protocols for public health emergencies',
        description: 'Provide compassionate, factual communication to sick attendees while coordinating with corporate legal counsel.'
      },
      {
        name: 'Implement comprehensive kitchen sanitization and staff health exclusion policies',
        description: 'Exclude symptomatic culinary workers, sanitize kitchen prep lines, and enforce strict handwashing audits.'
      },
      {
        name: 'Manage commercial general liability insurance and product liability claims',
        description: 'Document cold chain records, ingredient invoices, and coordinate with insurance adjusters.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Collaboration'],
    background: `The Biltmore Convention Center Hotel is a 600-room luxury property with 40,000 square feet of banquet facilities. On Saturday evening, the hotel banquet department catered the high-profile annual "State Healthcare Leadership Gala," serving a plated three-course dinner to 500 prominent doctors, hospital executives, civic leaders, and healthcare policymakers. The menu featured a seafood appetizer of poached coastal jumbo shrimp cocktail, followed by pan-seared sea bass, roasted baby vegetables, and chocolate mousse cake.

By Monday morning, an alarming public health crisis emerged: over 75 gala attendees, including the State Secretary of Health who delivered the gala keynote, reported severe acute gastrointestinal illness, violent vomiting, high fever, and dehydration, with fourteen individuals admitted to local emergency rooms for IV fluid treatment. Preliminary clinical laboratory tests confirmed the presence of virulent Salmonella enterica poisoning.

The municipal county Department of Public Health dispatched a team of five epidemiologists and food safety inspectors to the hotel kitchen, initiating an immediate regulatory traceback investigation. Inspectors immediately noted critical HACCP log deficiencies: cooling temperature logs for the poached shrimp preparation had not been initialed by the banquet chef, and raw seafood holding temperatures on the banquet staging carts showed readings of 54 degrees Fahrenheit—well inside the biological danger zone—for over three hours prior to service.

The crisis threatens the hotel with financial and reputational ruin: the local news media has run front-page headlines regarding the gala outbreak, three upcoming convention groups representing over $600,000 in banquet revenue have threatened immediate contract cancellation, and an aggressive personal injury trial firm has filed an initial $2.5 million mass-tort product liability claim against the property.

You and your partner (serving as the Director of Food Safety and Executive Banquet Risk Officer) have been summoned to an emergency incident session with the General Manager (played by the judge). You must present a comprehensive Foodborne Outbreak Containment and HACCP Remediation Plan. Your presentation must detail full regulatory cooperation with health inspectors, kitchen sanitization and food quarantine, compassionate outreach to sick attendees in coordination with legal counsel, a complete overhaul of culinary temperature tracking, and proactive PR to restore banquet booking confidence.`,
    challenge: 'Present a comprehensive Foodborne Illness Crisis Response & Kitchen Remediation Plan to the General Manager. Detail public health department cooperation, kitchen sanitization, guest medical restitution, HACCP monitoring overhauls, and corporate client reassurance.',
    judgeQuestions: [
      'How will your team communicate with the hospitalized guests and corporate gala organizers without prematurely admitting legal liability before lab traceback concludes?',
      'What automated or digital temperature monitoring tools will ensure our culinary staff can never falsify or skip HACCP temperature logs in the future?'
    ],
    benchmarkPoints: [
      'Full regulatory cooperation: immediately quarantine all retained food samples and prep logs in dedicated bio-lockers for Department of Health microbiological testing.',
      'Guest care protocol: establish a dedicated medical care concierge desk offering immediate reimbursement of out-of-pocket medical bills through our commercial general liability insurer.',
      'Deploy smart automated IoT food probes: digital Bluetooth thermometers (Jolt/Testo) that automatically log cook and cool temperatures directly into cloud HACCP servers, preventing manual log falsification.'
    ]
  },
  {
    id: 'rm-04',
    title: 'Emergency Response and Guest Evacuation Following a Kitchen Fire Incident',
    instructionalArea: 'Risk Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Life Safety & Hotel Operations Duty Manager',
    judgeRole: 'Vice President of Hotel Operations and Chief Engineer',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain commercial kitchen fire suppression systems (Ansul wet chemical) and NFPA 96 codes',
        description: 'Understand automatic gas shutoffs, exhaust hood grease duct cleaning, and Class K fire extinguishers.'
      },
      {
        name: 'Execute building-wide emergency evacuation and stairwell crowd management',
        description: 'Direct high-rise guest evacuations, clear smoke-filled corridors, and account for mobility-impaired guests.'
      },
      {
        name: 'Coordinate with municipal emergency first responders (Fire, Police, EMS)',
        description: 'Provide fire chiefs with master Annunciator panel data, mechanical room keys, and hazardous material maps.'
      },
      {
        name: 'Manage post-fire guest care, relocation, and emergency room accommodations',
        description: 'Establish outdoor muster stations, provide warm blankets/water, and arrange sister-hotel room transfers.'
      },
      {
        name: 'Develop fire prevention preventive maintenance and commercial insurance claim documentation',
        description: 'Audit hood grease extraction schedules, fire damper testing, and document smoke/water remediation expenses.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Collaboration'],
    background: `The Fairmont Tower is an upscale 24-story, 420-room high-rise luxury hotel situated in the central downtown core of a major metropolitan city. At 7:45 PM on a Saturday evening, the hotel is operating at 94% occupancy with over 780 registered guests in their rooms, while the 200-seat signature restaurant, "The Grand Hearth," is completely full with dinner diners.

In the hotel's main culinary kitchen, a deep-fryer thermostat suffered a catastrophic electrical failure, causing cooking oil to heat past its flashpoint and ignite into a massive commercial grease fire. Flames quickly roared up into the exhaust hood ventilation system. While the automatic kitchen Ansul wet chemical fire suppression system deployed and severed the gas lines, heavy, acrid black smoke was pulled into the central HVAC ductwork, triggering fire alarms across the lower eight floors and filling the main lobby and 3rd-floor conference level with thick, blinding smoke.

Emergency sirens began blaring throughout the 24-story building, sending hundreds of panicked guests in various states of dress flooding into the stairwells. Complicating the evacuation, two hotel elevators automatically recalled to the ground floor and locked out per fire code, leaving three wheelchair-bound guests on the 14th floor who require physical evacuation assistance. Meanwhile, outside on the busy downtown sidewalk, hundreds of shivering guests are milling into street traffic as ten municipal fire engines arrive with sirens blaring.

The fire department successfully extinguished the remaining duct fire within 35 minutes, but the building suffered significant smoke contamination, water damage from sprinkler activations on the 1st floor, and a complete power shutdown to the commercial kitchen. The municipal fire marshal has prohibited hotel occupancy for at least 12 hours until structural air quality and sprinkler system pressures can be recertified.

You and your partner (serving as the Director of Life Safety and Hotel Operations Duty Manager) are meeting with the Vice President of Hotel Operations and Chief Engineer (played by the judge). You must present an immediate Emergency Fire Response and Recovery Blueprint. Your presentation must detail the orderly management of guests at external muster stations, emergency transport and room booking at sister hotels, rescue coordination for mobility-impaired guests, fire marshal clearance procedures, and an overhaul of kitchen preventive fire maintenance.`,
    challenge: 'Present a comprehensive High-Rise Fire Response & Guest Relocation Plan to the VP of Operations. Address stairwell crowd control, special-needs guest rescue, external muster station welfare, sister-hotel transfers, and kitchen fire code compliance.',
    judgeQuestions: [
      'How does our emergency evacuation plan verify that all guests with mobility disabilities are safely located and evacuated without operational elevators?',
      'What immediate arrangements will we provide for the 780 displaced guests outside on the street while the fire department inspects air quality tonight?'
    ],
    benchmarkPoints: [
      'Activate designated "Stairwell Evacuation Wardens" trained in using tracked emergency stair-chairs to safely evacuate mobility-impaired guests from upper floors.',
      'Deploy the "Emergency Muster Protocol": direct all guests to the heated ballroom of the partner hotel across the street, providing hot beverages, mobile chargers, and medical triage.',
      'Execute emergency book-out: coordinate with four regional sister properties to transfer 250 displaced guest rooms with complimentary Uber vouchers and waived room charges.'
    ]
  },
  {
    id: 'rm-05',
    title: 'Addressing Legionella Contamination Risk in Resort Water and Pool Cooling Systems',
    instructionalArea: 'Risk Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Environmental Health and Safety & Chief Engineer',
    judgeRole: 'Vice President of Hotel Asset Management and Property Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain Legionella bacteria transmission vectors in commercial lodging facilities',
        description: 'Examine cooling towers, decorative water fountains, whirlpool spas, and domestic showerheads.'
      },
      {
        name: 'Develop an ANSI/ASHRAE Standard 188 compliant Water Safety Management Plan',
        description: 'Establish thermal disinfection loops, biocide chemical dosing, and routine microbiological swab testing.'
      },
      {
        name: 'Execute emergency remediation and hyperchlorination protocols following positive tests',
        description: 'Implement shock chlorination, hot-water thermal flushing at 160°F, and aerosolizing fixture replacements.'
      },
      {
        name: 'Formulate regulatory compliance and CDC public health reporting procedures',
        description: 'Coordinate transparently with state health departments and occupational safety officials.'
      },
      {
        name: 'Quantify financial liabilities, guest communication protocols, and operational downtime',
        description: 'Manage guest medical inquiries, prevent viral media panic, and safeguard resort reputation.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Scientific Literacy', 'Communication'],
    background: `The Palm Vista Oasis Resort is a premier 520-room desert destination resort in Scottsdale, Arizona, featuring three outdoor swimming pools, an expansive multi-tiered decorative lobby waterfall, two communal whirlpool spas, and an extensive rooftop evaporative cooling tower system. In dry, hot desert climates, cooling towers and warm recreational water features operate at ideal incubation temperatures (77°F to 113°F) for Legionella pneumophila, the deadly aquatic bacterium responsible for Legionnaires' disease—a severe, potentially fatal form of pneumonia.

During a routine quarterly water testing audit conducted by an independent certified environmental laboratory, microbiological swab cultures returned positive for virulent Legionella pneumophila serogroup 1 in three critical locations: the main outdoor whirlpool spa, the lobby decorative waterfall basin, and the central cooling tower basin supplying air conditioning to the west guest wing.

While no registered guests or employees have officially reported clinical pneumonia symptoms to date, the presence of high bacterial colony-forming unit (CFU) counts in aerosolizing water sources poses an immediate, catastrophic life-safety threat. Inhaled microscopic water droplets from contaminated spa jets or waterfalls can infect elderly guests, immunocompromised travelers, and staff within an incubation window of two to ten days.

The legal and brand consequences of an outbreak are severe: past hospitality Legionella outbreaks across the country have resulted in multimillion-dollar wrongful death verdicts, mandatory property shutdowns by state health authorities, and permanent brand damage. However, abruptly shutting down all air conditioning and pools during a 105-degree desert weekend without a clear operational plan would cause mass panic, immediate guest walkouts, and hundreds of thousands of dollars in cancelled conference contracts.

You and your partner (serving as the Director of Environmental Health & Safety and the Chief Engineer) have been called to an emergency closed-door executive meeting with the Vice President of Hotel Asset Management (played by the judge). You must present an urgent Legionella Containment & Water Safety Plan compliant with ASHRAE Standard 188. Your presentation must detail the immediate quarantine of aerosolizing fixtures, emergency thermal and chemical shock remediation protocols, guest health communication policies, and the installation of continuous automated biocide water treatment systems to permanently eliminate biological risks.`,
    challenge: 'Present an urgent Legionella Risk Containment & Water Safety Strategy compliant with ASHRAE Standard 188 to the VP of Asset Management. Detail fixture quarantines, hyperchlorination/thermal shock protocols, guest health communications, and permanent monitoring systems.',
    judgeQuestions: [
      'How will we shut down the whirlpool spas and lobby waterfall for emergency chemical decontamination without alarming our 900 registered weekend guests?',
      'What specific engineering controls and automated biocide dosing systems will guarantee our cooling towers never harbor bacterial colonies again?'
    ],
    benchmarkPoints: [
      'Immediate source isolation: shut down spa blowers, whirlpool jets, and lobby waterfall immediately under the guise of "routine scheduled mechanical maintenance."',
      'Execute CDC-compliant emergency remediation: hyperchlorination shock (50 ppm free chlorine for 24 hours) combined with thermal hot-water flushing of all distribution piping at 160°F.',
      'Deploy automated continuous disinfection: install silver-copper ionization units and continuous automated chlorine dioxide dosing pumps on all cooling towers and potable water risers.'
    ]
  },
  {
    id: 'rm-06',
    title: 'Preventing Slip, Trip, and Fall Incidents and Managing Guest Premises Liability',
    instructionalArea: 'Risk Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Guest Safety & Hotel Risk and Claims Manager',
    judgeRole: 'General Manager of The Grand Cascade Mountain Lodge',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain legal premises liability doctrines and duty of care in commercial hospitality',
        description: 'Understand invitee legal status, reasonable standard of care, constructive notice, and comparative negligence.'
      },
      {
        name: 'Analyze high-risk physical zones for slip, trip, and fall incidents',
        description: 'Audit wet tile lobby entrances, pool decks, snowy exterior walkways, and dimly lit stairwells.'
      },
      {
        name: 'Implement preventive safety engineering and high-traction surface treatments',
        description: 'Deploy recessed walk-off entrance floor mats, anti-slip epoxy coatings, and slip-resistant footwear mandates.'
      },
      {
        name: 'Establish rigorous floor inspection logging and digital hazard sweep procedures',
        description: 'Utilize mobile time-stamped hazard sweep apps to legally defeat "constructive notice" liability claims.'
      },
      {
        name: 'Manage post-incident guest care, evidence preservation, and claims defense',
        description: 'Collect CCTV video preservation, preserve photos of footwear and surface conditions, and document guest statements.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Collaboration'],
    background: `The Grand Cascade Mountain Lodge is a 360-room premier alpine resort located in the Cascade Mountains of Washington State. Featuring indoor and outdoor heated pool complexes, polished slate-floored grand lobbies with massive stone fireplaces, and exterior scenic walking bridges, the property operates year-round with high guest turnover. However, the resort is facing an escalating financial crisis driven by guest slip, trip, and fall claims.

Over the past eighteen months, the property recorded 34 guest slip-and-fall incidents, with nine resulting in severe injuries, including fractured hips, torn rotator cuffs, and herniated discs. The resort's commercial general liability insurance carrier paid out over $1,150,000 in settlements and medical expenses. Consequently, the insurance underwriter has delivered an ultimatum: the lodge must implement a comprehensive premises liability safety overhaul or face a 200% premium hike and a $250,000 per-incident deductible.

A forensic engineering risk audit identified three major hazard zones. First, during winter snowstorms and rainy autumn days, arriving guests track slush, water, and melting snow onto the smooth, polished natural slate tile floors of the main lobby. The current walk-off floor mats are small, warped, and saturate within 30 minutes, turning the grand lobby entrance into a slick hazard. Second, the indoor heated pool deck features glazed porcelain tiles that become dangerously slippery when wet. Third, outdoor stone stairways leading to the hot tubs accumulate hidden black ice during sub-freezing evening temperatures.

Compounding the lodge's legal vulnerability, staff currently maintain zero documented floor inspection records. In four recent personal injury lawsuits, plaintiff trial attorneys successfully argued that the hotel had "constructive notice" of wet floors because staff walked past puddles without placing warning cones or mopping them up. Because the resort could not produce time-stamped inspection logs or CCTV showing recent cleaning, juries and insurance adjusters were forced into costly settlement payouts.

You and your partner (serving as the Director of Guest Safety and the Hotel Risk and Claims Manager) are meeting with the General Manager (played by the judge). You must present a comprehensive Premises Liability & Slip-and-Fall Elimination Strategy. Your presentation must detail structural engineering improvements (recessed aluminum grid walk-off mats, anti-slip floor treatments), digital time-stamped floor sweep logging systems, strict CCTV incident preservation protocols, and compassionate yet legally sound guest incident documentation.`,
    challenge: 'Present a comprehensive Slip, Trip, and Fall Elimination Strategy to the General Manager. Address high-risk wet entrance zones, anti-slip pool deck treatments, digital floor inspection logging apps, and legal evidence preservation protocols.',
    judgeQuestions: [
      'How does implementing a digital time-stamped floor inspection log app protect the resort in court against claims of constructive notice?',
      'What specific physical modifications can we make to our slippery polished slate entrance floors without destroying the rustic luxury aesthetic guests expect?'
    ],
    benchmarkPoints: [
      'Engineering overhaul: install 25 feet of recessed architectural aluminum grate walk-off matting at all main entrances to capture 90% of tracked moisture.',
      'Surface traction remediation: apply micro-abrasive chemical etching to indoor pool decks to elevate Coefficient of Friction (COF) from a slick 0.38 to an OSHA-certified 0.65.',
      'Deploy digital mobile sweeps: housekeeping and bell staff execute and log geo-tagged, time-stamped floor safety sweeps every 30 minutes during wet weather using handheld mobile apps.'
    ]
  },
  {
    id: 'rm-07',
    title: 'Handling Active Threat and Unauthorized Intruder Protocols in Public Hotel Spaces',
    instructionalArea: 'Risk Management',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief of Hotel Security & Director of Life Safety Operations',
    judgeRole: 'Vice President of Hotel Asset Security and Corporate Counsel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain active threat response principles (Run, Hide, Fight) adapted for lodging environments',
        description: 'Establish situational awareness, rapid lockdown mechanics, and guest protection duties.'
      },
      {
        name: 'Design high-tech access control and keycard perimeter security zoning',
        description: 'Implement restricted elevator keycard access, after-hours exterior door locks, and optical turnstiles.'
      },
      {
        name: 'Establish emergency panic button and mass mass-notification communication networks',
        description: 'Deploy wearable panic buttons for frontline staff, automated 911 dispatch, and SMS guest emergency alerts.'
      },
      {
        name: 'Train hotel staff in intruder identification, de-escalation, and situational awareness',
        description: 'Conduct realistic, trauma-informed active threat drills in partnership with local law enforcement.'
      },
      {
        name: 'Navigate legal liability, the SAFETY Act, and corporate duty of care',
        description: 'Examine federal Department of Homeland Security liability protections and hospitality guest security standards.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Collaboration'],
    background: `The Grand Metropol is a massive 900-room luxury convention hotel located in the heart of an urban downtown entertainment district. The property features four public street entrances, five interconnected ballrooms, multiple escalators connecting to an open three-story atrium, and three bustling restaurant and bar outlets that attract thousands of non-hotel visitors daily. Historically, the hotel pride itself on open-door hospitality, allowing unimpeded public foot traffic through its expansive lobbies.

However, over the past twelve months, the surrounding urban district has experienced a sharp increase in violent crime, civil unrest, and property trespassing. Two months ago, an unauthorized individual entered an open service stairwell, gained access to guest room corridors on the 14th floor, and burglarized three guest rooms before being apprehended. More alarmingly, last weekend an agitated individual carrying a concealed handgun entered the crowded lobby bar, made threatening statements toward patrons, and fled before security could respond.

The incident caused panic throughout the hotel, with guests barricading themselves in conference rooms and several corporate conventions threatening to cancel upcoming city-wide bookings. Corporate travel managers from Fortune 500 accounts have delivered a clear mandate: the hotel must provide documented proof of comprehensive physical security enhancements, active threat protocols, and restricted access zoning, or lose preferred corporate vendor status.

Balancing high-security protocols with the welcoming warmth of luxury hospitality is extraordinarily complex. If the hotel transforms into an intimidating armed fortress with heavy metal detectors and intrusive bag searches, affluent leisure travelers and wedding clients will be alienated. However, failing to modernize access control and prepare staff for active threat scenarios leaves the property vulnerable to catastrophic violence and multi-million-dollar negligent security liability claims.

You and your partner (serving as the Chief of Hotel Security and Director of Life Safety Operations) are meeting with the Vice President of Hotel Asset Security and Corporate Counsel (played by the judge). You must present a comprehensive Active Threat Preparedness and Access Control Modernization Strategy. Your presentation must detail zoned access control engineering (electronic elevator keycard integration), staff wearable panic buttons, silent mass-notification networks, employee active-threat response training, and liaison protocols with local police SWAT divisions.`,
    challenge: 'Present an Active Threat Preparedness & Access Control Modernization Strategy to the VP of Security and Corporate Counsel. Detail elevator keycard security zoning, wearable staff panic duress systems, mass-notification protocols, and Run/Hide/Fight staff training.',
    judgeQuestions: [
      'How will your access control plan prevent unauthorized intruders from accessing guest room floors while maintaining an open, gracious atmosphere in our public lobby restaurants?',
      'How will active threat training be conducted for hotel associates without causing trauma, panic, or fear among our workforce?'
    ],
    benchmarkPoints: [
      'Access control engineering: install destination-dispatch elevator controls requiring room keycard validation to operate elevators to guest floors, keeping public and private guest zones separated.',
      'Staff safety technology: issue all frontline desk agents, room attendants, and bar staff discreet Bluetooth wearable duress panic buttons linked to local 911 dispatch.',
      'Comprehensive active threat training: partner with municipal police tactical divisions to deliver trauma-informed "Run, Hide, Fight" situational awareness training quarterly.'
    ]
  },
  {
    id: 'rm-08',
    title: 'Managing Supply Chain Disruption for Critical Guest Supplies and Linen Services',
    instructionalArea: 'Risk Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Procurement & Supply Chain Risk Specialist',
    judgeRole: 'Vice President of Hotel Asset Management and Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze vulnerability and single-source supplier risks in lodging operations',
        description: 'Examine dependencies on outsourced commercial laundry services, food distributors, and guest room amenities.'
      },
      {
        name: 'Develop dual-sourcing strategies and secondary vendor backup agreements',
        description: 'Establish contingency service contracts with regional commercial laundries and broadline food distributors.'
      },
      {
        name: 'Calculate economic par-levels and safety stock inventory holding costs',
        description: 'Balance working capital constraints against the financial risk of running out of bed linens and towels.'
      },
      {
        name: 'Design emergency standard operating procedures during catastrophic supply shortages',
        description: 'Implement conservation wash cycles, modified linen change frequencies, and alternative guest amenities.'
      },
      {
        name: 'Structure force majeure, performance penalties, and Service Level Agreements (SLAs)',
        description: 'Enforce contractual delivery timeliness guarantees, emergency delivery surcharges, and termination rights.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Collaboration'],
    background: `The Emerald Bay Resort is an upscale 450-room waterfront conference resort situated on an island peninsula. Operating at 88% occupancy with heavy banquet operations, the resort relies heavily on just-in-time supply chains. Four years ago, to reduce on-property capital equipment expenses and labor overhead, the resort decommissioned its on-premise commercial laundry facility and outsourced 100% of its bed sheets, duvet covers, bath towels, and banquet linen washing to a single regional commercial industrial laundry provider, "Apex Linen Services."

Apex Linen Services picks up soiled laundry daily and delivers clean, pressed linen shipments in massive rolling carts six mornings per week. Under this arrangement, the resort maintains a tight linen inventory par-level of only 2.2 pars (one par in guest rooms, one par clean in linen closets, and 0.2 par in transit).

On a Friday morning at the start of a sold-out three-day holiday weekend with 450 arriving guests, disaster struck: an electrical substation fire completely shut down the Apex industrial laundry plant. Apex management notified the resort that power will not be restored for at least four days, halting all commercial washing operations. To make matters worse, Apex currently has over 4,000 pounds of the resort's soiled sheets and towels locked inside their shuttered, darkened facility.

The resort's operational crisis is immediate: by 2:00 PM, room attendants will exhaust the remaining clean sheets in the closets. Without clean bed linens, over 220 departing rooms cannot be turned over for arriving guests scheduled to check in at 4:00 PM. If rooms are not ready, hundreds of exhausted travelers will be stranded in the lobby, triggering massive cancellations, comped night demands, and devastating online reviews.

You and your partner (serving as the Director of Procurement and Supply Chain Risk Specialist) have been called to an emergency incident session with the Vice President of Hotel Asset Management and Operations (played by the judge). You must present an immediate Supply Chain Emergency Action Plan. Your presentation must detail immediate emergency clean linen procurement from competitor laundries, modified stayover linen change protocols, emergency on-site wash capabilities, and a long-term dual-sourcing strategy with enforceable SLAs to prevent single-source supply chain collapse in the future.`,
    challenge: 'Present an immediate Supply Chain Disruption Recovery Plan to the VP of Operations. Resolve an immediate linen shortage for a sold-out weekend, establish emergency backup laundry contracts, and design dual-sourcing inventory models.',
    judgeQuestions: [
      'How will your team secure enough clean bed sheets and towels within the next 4 hours to turnover 220 checkout rooms for incoming guests today?',
      'What optimal linen par-level should the resort maintain moving forward, and how will we finance the working capital required to hold extra inventory?'
    ],
    benchmarkPoints: [
      'Immediate crisis procurement: dispatch rental box trucks to purchase 500 emergency hospitality linen sets from wholesale restaurant/hotel suppliers and partner with a local university commercial laundry for overnight wash capacity.',
      'Guest stayover conservation protocol: inform multi-night guests of an emergency "Green River" linen conservation weekend with complimentary $15 F&B vouchers for unlaundered stayovers.',
      'Long-term risk mitigation: establish mandatory 3.5 par-level minimums and formalize dual-sourcing contracts split 60/40 between two independent commercial industrial laundries.'
    ]
  },
  {
    id: 'rm-09',
    title: 'Alcohol Liability and Dram Shop Act Compliance in Hotel Lounges and Nightclubs',
    instructionalArea: 'Risk Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Beverage Operations & Corporate Risk Compliance Officer',
    judgeRole: 'Vice President of Hotel Food & Beverage and Legal Counsel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain state Dram Shop Acts, social host liability, and civil negligence in alcohol service',
        description: 'Understand commercial liability for serving visibly intoxicated patrons and third-party vehicular injury claims.'
      },
      {
        name: 'Implement mandatory alcohol server certification programs (TIPS/ServSafe Alcohol)',
        description: 'Ensure 100% compliance in ID verification, drink standard pour sizes, and intoxication recognition.'
      },
      {
        name: 'Develop standard operating procedures for cutting off intoxicated patrons safely',
        description: 'Deploy quiet, non-confrontational intervention techniques, manager escort, and safe transit assistance.'
      },
      {
        name: 'Establish strict underage drinking prevention and forensic ID scanner protocols',
        description: 'Utilize military-grade digital ID scanners at bar entrances to detect sophisticated counterfeit driver\'s licenses.'
      },
      {
        name: 'Manage incident documentation, security logbooks, and liquor liability insurance compliance',
        description: 'Preserve detailed bar incident log records and CCTV footage to defend against wrongful service lawsuits.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Legal & Ethical Responsibility'],
    background: `The Azure Bay Resort & Casino Hotel is an expansive 500-room property featuring a vibrant lobby cocktail lounge, an upscale rooftop nightclub named "Skyline," and an active pool bar that collectively generate over $6.5 million in annual alcoholic beverage sales. In state jurisdictions across the United States, commercial hospitality establishments are governed by strict "Dram Shop Acts." Under these statutory laws, a hotel or bar that serves alcohol to a visibly intoxicated patron can be held legally liable for all resulting catastrophic injuries, wrongful deaths, or property damage caused by that patron after leaving the premises.

Last Friday night at 1:15 AM, a 28-year-old guest at the Skyline nightclub was served five tequila shots and three cocktails over a two-hour window despite slurring speech and stumbling against high-top tables. The guest subsequently retrieved his vehicle from the hotel's valet parking desk, drove onto a nearby state highway, and caused a head-on collision that critically injured a family of three in another vehicle. The driver's blood alcohol content (BAC) tested at 0.19%—more than double the legal limit.

The legal fallout has struck the hotel with devastating force: the injured family's trial attorneys have filed a $15 million joint Dram Shop civil negligence lawsuit naming the hotel management company, the property owner, and the individual bartender as defendants. Furthermore, the State Liquor Control Board has issued a formal order to show cause, threatening immediate revocation or 90-day suspension of the hotel's master liquor license, which would instantly eliminate 40% of the property's food and beverage revenue.

An internal risk compliance audit revealed shocking operational lapses: over 40% of newly hired banquet servers and barbacks had not completed mandatory TIPS (Training for Intervention ProcedureS) or ServSafe Alcohol certification. Bartenders routinely free-poured liquor without using measured jiggers, security door staff relied on quick visual glances rather than digital scanners to verify driver's licenses, and no written incident logs were maintained when patrons were cut off.

You and your partner (serving as the Director of Beverage Operations and the Corporate Risk Compliance Officer) have been summoned to an urgent executive briefing with the Vice President of Hotel Food & Beverage and Legal Counsel (played by the judge). You must present a comprehensive Dram Shop Compliance and Responsible Beverage Service Overhaul. Your presentation must detail mandatory server re-certification, measured pour enforcement, forensic ID scanner technology, non-confrontational patron cutoff protocols, valet intoxicated driver interdiction rules, and thorough incident documentation to defend liquor license compliance.`,
    challenge: 'Present a comprehensive Dram Shop Act Compliance & Alcohol Liability Overhaul to the VP of F&B and Legal Counsel. Implement 100% server re-certification, measured jigger pouring, forensic ID scanners, safe cutoff procedures, and valet vehicle interdiction rules.',
    judgeQuestions: [
      'What specific legal steps must our valet staff take when an intoxicated guest demands their vehicle keys, balancing personal property rights with public road safety?',
      'How will your team ensure that busy bartenders do not skip standard 1.5-ounce jigger pour standards during high-volume nightclub rushes?'
    ],
    benchmarkPoints: [
      'Mandate 100% TIPS/ServSafe Alcohol certification within 14 days for all F&B associates, with zero uncertified staff permitted behind the bar.',
      'Deploy military-grade digital ID scanners (IDScan.net) at all nightclub entrances, verifying barcodes and detecting sophisticated counterfeit licenses.',
      'Implement the "Valet Safe-Ride Protocol": valet associates are trained to withhold keys from visibly intoxicated drivers, offering complimentary hotel rooms or taxi/Uber vouchers charged to hotel safety funds.'
    ]
  },
  {
    id: 'rm-10',
    title: 'Managing Severe Infectious Illness Outbreak and Quarantine Protocols on Cruise Vessel',
    instructionalArea: 'Risk Management',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Environmental Health Officer & Hotel Ship Director',
    judgeRole: 'Vice President of Fleet Operations and Maritime Medical Director',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain maritime public health standards and CDC Vessel Sanitation Program (VSP) rules',
        description: 'Understand Norovirus and gastrointestinal illness reporting thresholds (2% and 3% case rates).'
      },
      {
        name: 'Implement comprehensive shipboard isolation, stateroom quarantine, and contact tracing',
        description: 'Establish negative-pressure medical wards, stateroom meal delivery, and guest movement restrictions.'
      },
      {
        name: 'Execute chemical disinfection protocols (EPA List G/N hospital-grade virucides)',
        description: 'Eliminate self-service buffets, convert to crew-served dining, and fog high-touch stateroom corridors.'
      },
      {
        name: 'Communicate transparently with passengers while mitigating onboard panic and hysteria',
        description: 'Deliver factual captain announcements, provide free high-speed medical Wi-Fi, and offer future cruise credits.'
      },
      {
        name: 'Coordinate with maritime port health authorities and international disembarkation clearance',
        description: 'Submit mandatory Maritime Declarations of Health and coordinate disembarkation triage with port officials.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Global & Cultural Awareness'],
    background: `The Ocean Empress is a state-of-the-art luxury cruise vessel operating under a premier international cruise line, carrying 3,200 passengers and 1,200 crew members on an eight-day Caribbean voyage. Cruise vessels are unique hospitality environments: thousands of individuals live, dine, and socialize in high-density communal spaces, making them exceptionally vulnerable to rapid outbreaks of virulent viral gastroenteritis (such as Norovirus), which spreads with astonishing speed through contaminated food, water, or aerosolized droplets.

On Day 3 of the voyage, during open sea transit between ports, thirty passengers reported to the shipboard medical center suffering from acute vomiting and diarrhea. By Day 4, the outbreak accelerated exponentially: over 140 passengers and 28 crew members across multiple passenger decks were officially diagnosed with acute gastrointestinal illness, representing over 3.8% of the total shipboard population.

Under the U.S. Centers for Disease Control and Prevention (CDC) Vessel Sanitation Program (VSP) and international maritime health law, any cruise vessel where gastrointestinal illness reaches 2% must file immediate formal epidemiologic reports, and exceeding 3% triggers emergency CDC outbreak status. Two scheduled Caribbean port authorities have already denied the Ocean Empress docking permission, refusing to allow passengers ashore due to contagion fears.

Passenger panic is mounting rapidly. Rumors are spreading across guest mobile group chats that the ship is "plague-ridden," frustrated guests are arguing with front desk staff demanding immediate full refunds, and self-service buffets remain crowded with symptomatic passengers touching tongs and utensils. The ship faces an existential challenge: it must halt viral transmission through clinical outbreak protocols, protect crew safety, manage passenger morale, and secure permission from maritime authorities for sanitary port entry.

You and your partner (serving as the Chief Environmental Health Officer and the Hotel Ship Director) have been summoned to an emergency video conference with the Vice President of Fleet Operations and the Maritime Medical Director (played by the judge). You must present an immediate Shipboard Infectious Disease Containment and Quarantine Master Plan. Your presentation must detail the immediate shutdown of self-service buffets, stateroom quarantine meal delivery logistics, medical-grade electrostatic chemical disinfection, passenger crisis communication, and international port entry clearance protocols.`,
    challenge: 'Present an emergency Shipboard Norovirus Containment & Quarantine Master Plan to the VP of Fleet Operations. Detail immediate transition to crew-served dining, stateroom quarantine logistics, electrostatic viral fogging, and CDC VSP compliance.',
    judgeQuestions: [
      'How will your team ensure that quarantined passengers stay inside their staterooms without deploying aggressive security personnel in passenger corridors?',
      'What specific steps will convince skeptical port health authorities that our vessel is safe for scheduled disembarkation at our final turnaround port?'
    ],
    benchmarkPoints: [
      'Transition instantly to "Level 3 Red Outbreak Mode": shut down all self-service buffets, water stations, and casino card games, converting 100% of food service to crew-plated dining.',
      'Stateroom quarantine welfare: provide infected passengers complimentary room service with specialized BRAT diet (bananas, rice, applesauce, toast), free in-cabin high-speed Wi-Fi, and free on-demand movies.',
      'Deploy medical-grade electrostatic fogging using EPA-registered hydrogen peroxide virucides on all handrails, elevator buttons, and staterooms every 4 hours.'
    ]
  }
];
