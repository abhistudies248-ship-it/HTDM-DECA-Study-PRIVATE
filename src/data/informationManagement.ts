// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Information Management (10 Cases)
// Focuses on guest data governance, PMS database integrity, cyber hygiene, and data analytics
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const informationManagementCases: DecaCaseStudy[] = [
  {
    id: 'im-01',
    title: 'Hospitality PMS Data Migration & Guest Profile Governance at Solaris Grand',
    instructionalArea: 'Information Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Hospitality Informatics & Front Office Systems Lead',
    judgeRole: 'Vice President of Hotel Technology & Global Asset Management',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the principles of data management and information lifecycle in lodging',
        description: 'Establish protocols for capturing, cleansing, storing, and purging guest reservation records and folio data.'
      },
      {
        name: 'Ensure data security, confidentiality, and PCI-DSS compliance in hotel payment processing',
        description: 'Eliminate local credit card storage vulnerabilities through tokenization and point-to-point encryption (P2PE).'
      },
      {
        name: 'Design systems for resolving duplicated and fragmented guest CRM records',
        description: 'Implement automated algorithmic matching rules across phone numbers, emails, and loyalty account numbers.'
      },
      {
        name: 'Evaluate the role of database integrity in optimizing guest personalization and revenue management',
        description: 'Connect historical folio spending patterns directly to automated upselling algorithms.'
      },
      {
        name: 'Develop staff data entry quality assurance standards for frontline hospitality systems',
        description: 'Formulate input validation rules and error-checking workflows to prevent corrupted booking reservations.'
      }
    ],
    twentyFirstCenturySkills: ['Information Literacy', 'Cyber Hygiene', 'Systems Thinking', 'Data-Driven Decision Making'],
    background: `Solaris Grand is a premier 520-room luxury resort and conference center. Over the past decade, the property has operated on a legacy on-premise Property Management System (PMS) loosely connected to three disparate databases: a standalone spa management software, a third-party golf tee-time booking tool, and an off-the-shelf restaurant POS system.

The fragmentation of data has severely compromised operational efficiency. A recent audit revealed that over 35% of the property's 180,000 guest profile records are duplicates, resulting in VIP guests receiving conflicting pre-arrival emails and loyalty preferences being lost upon check-in. In several embarrassing incidents, high-spending guests were addressed by incorrect names or given rooms adjacent to active elevator shafts despite documented high-floor quiet room preferences in older records.

More critically, an internal cybersecurity risk assessment uncovered alarming vulnerabilities: several front desk terminals had unencrypted guest payment card numbers temporarily stored in local text caches, posing severe non-compliance liabilities under Payment Card Industry Data Security Standards (PCI-DSS) that could result in devastating financial penalties.

Corporate leadership has approved a transition to an integrated cloud-native hospitality data lake and PMS platform. However, the migration must occur seamlessly without interrupting daily check-ins or losing decades of valuable guest preference intelligence.

You and your partner (Director of Hospitality Informatics and Front Office Systems Lead) are scheduled to present a comprehensive Information Management & Data Governance Strategy to the Vice President of Hotel Technology (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing guest profile deduplication, PCI-DSS payment tokenization compliance, database quality control, and front desk data-entry protocols.',
    judgeQuestions: [
      'What specific algorithmic matching criteria should our data migration tool use to merge duplicated guest profiles without deleting critical historical data?',
      'How will your team ensure that front desk associates consistently capture clean, accurate guest data during peak 3:00 PM check-in rushes?'
    ],
    benchmarkPoints: [
      'Implement a multi-tier deduplication algorithm matching primary email and loyalty ID first, followed by fuzzy matching on last name and mobile number.',
      'Deploy end-to-end tokenization and point-to-point encryption (P2PE) terminals, immediately eliminating local payment card cache storage and achieving PCI-DSS Tier 1 compliance.',
      'Configure mandatory validation masks on PMS entry fields (standardized phone formats, email syntax checks) to prevent corrupted frontline data entry.',
      'Establish a Chief Data Steward role responsible for monthly database health audits, GDPR/CCPA data purge compliance, and CRM integration.'
    ]
  },
  {
    id: 'im-02',
    title: 'Hospitality Ransomware Incident & Disaster Recovery at The Continental Tower',
    instructionalArea: 'Information Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'IT Systems Director & Hotel Operations Manager',
    judgeRole: 'General Manager of The Continental Tower',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Develop hospitality business continuity and disaster recovery plans',
        description: 'Establish automated failover procedures, offline manual front desk protocols, and backup recovery windows.'
      },
      {
        name: 'Analyze network segmentation and endpoint security in hotel property management',
        description: 'Isolate guest public Wi-Fi networks from administrative PMS, keycard encoding, and POS transaction networks.'
      },
      {
        name: 'Implement cybersecurity hygiene protocols for hospitality staff',
        description: 'Mitigate phishing risks targeting hotel sales and banquet email accounts with automated email filtering and 2FA.'
      },
      {
        name: 'Formulate emergency guest communication during complete technology outages',
        description: 'Deploy offline physical guest folios and mechanical emergency master keys without causing guest panic.'
      },
      {
        name: 'Ensure statutory compliance with state and federal data breach notification laws',
        description: 'Coordinate forensic cyber investigators, legal counsel, and affected guest notification timelines.'
      }
    ],
    twentyFirstCenturySkills: ['Crisis Leadership', 'Information Security', 'Critical Thinking', 'Problem Solving'],
    background: `At 4:15 AM on a busy Friday morning, The Continental Tower—an 800-room convention hotel running at 94% occupancy—was struck by a sophisticated LockBit ransomware cyberattack. A banquet sales coordinator opened a malicious PDF invoice disguised as an executive corporate catering RFP, releasing malware that rapidly propagated across the hotel's local area network.

The attack encrypted the property's primary and secondary local servers. Front desk agents arrived at 6:30 AM to discover all PMS screens frozen with an ominous ransomware countdown clock demanding 40 Bitcoin ($2.6 million). Electronic RFID keycard encoders are offline, credit card payment gateways are unresponsive, and the digital guest reservation arrival list for today's 420 check-ins is completely inaccessible.

Compounding the crisis, an international medical symposium of 600 physicians is scheduled to check in beginning at 2:00 PM today. Corporate hotel insurance covers cyber extortion, but company policy strictly forbids paying ransoms. The hotel possesses an immutable offsite cloud backup snapshot taken at midnight, but restoration is projected to take 10 to 14 hours.

You and your partner (IT Systems Director and Hotel Operations Manager) have convened an emergency briefing with the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute emergency IT disaster recovery and operational continuity plan to run hotel check-ins offline, isolate the network breach, and restore critical guest data.',
    judgeQuestions: [
      'How will our front desk check in 420 arriving guests today without an active PMS or electronic keycard encoder?',
      'How do we determine with absolute certainty whether guest credit card numbers and passport scans were exfiltrated before the servers were encrypted?'
    ],
    benchmarkPoints: [
      'Immediately sever all external internet WAN connections and VLAN links to contain malware spread to isolated subnets.',
      'Deploy offline \"paper emergency kits\": print midnight backup registration manifests, issue mechanical emergency brass keys, and use manual imprint machines for authorized credit cards.',
      'Engage specialized third-party forensic cyber incident response firm to verify zero data exfiltration for statutory disclosure compliance.',
      'Initiate clean bare-metal server reimaging from the immutable midnight cloud backup snapshot with an estimated 8-hour restoration timeline.'
    ]
  },
  {
    id: 'im-03',
    title: 'Cross-Border Guest Data Governance & Privacy: Royal Palms Luxury Resort',
    instructionalArea: 'Information Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Privacy Officer & Guest Intelligence Director',
    judgeRole: 'Managing Director & Legal Counsel of Royal Palms Hospitality',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Interpret global data privacy regulations affecting international hospitality (GDPR, CCPA)',
        description: 'Comply with legal requirements for explicit consent, right to be forgotten, and cross-border data transfer mechanisms.'
      },
      {
        name: 'Establish secure guest data retention and automated purging schedules',
        description: 'Define specific lifecycle retention periods for guest passport scans, biometric data, and marketing profiles.'
      },
      {
        name: 'Audit third-party vendor data sharing practices in hotel operations',
        description: 'Review data processing agreements (DPAs) with digital concierge apps, valet software, and targeted ad networks.'
      },
      {
        name: 'Design transparent guest privacy consent interfaces at digital check-in',
        description: 'Provide clear granular opt-ins for marketing analytics, facial recognition check-in, and location tracking.'
      },
      {
        name: 'Train frontline associates on data privacy and guest confidentiality etiquette',
        description: 'Prevent unauthorized verbal disclosure of guest room numbers and travel itineraries to third parties.'
      }
    ],
    twentyFirstCenturySkills: ['Global Awareness', 'Ethical Reasoning', 'Information Literacy', 'Communication'],
    background: `Royal Palms is an ultra-luxury 350-suite resort catering extensively to European high-net-worth individuals, tech executives from California, and international celebrities. The resort prides itself on bespoke anticipatory service, tracking everything from a guest's favorite room aroma and pillow firmness to private dining wine vintages in its centralized guest database.

However, a recent internal privacy compliance audit revealed severe regulatory vulnerabilities. The resort's legacy CRM retains complete, unredacted passport scans and government IDs indefinitely—some dating back twelve years. Furthermore, the marketing department has been syncing guest email lists and spending history directly with social media retargeting ad networks without obtaining explicit opt-in consent from European guests, a clear violation of Article 6 and Article 44 of the General Data Protection Regulation (GDPR).

Last week, an affluent European diplomat submitted a formal GDPR \"Right to Erasure\" (Article 17) request, demanding complete deletion of all personal data, surveillance footage, and folio history within 30 days. The IT department discovered that the guest's records are deeply embedded across seven interconnected systems, including backup tapes and off-site cloud archives.

You and your partner (Chief Privacy Officer and Guest Intelligence Director) must present a comprehensive global data privacy roadmap to the Managing Director and Legal Counsel (the judge).`,
    challenge: 'Deliver a 15-minute data privacy overhaul strategy to fulfill the diplomat’s erasure request, eliminate illegal marketing data sharing, and ensure strict GDPR and CCPA compliance.',
    judgeQuestions: [
      'How do we fulfill a guest’s GDPR \"Right to Erasure\" request when accounting laws require us to retain tax invoices and financial folios for seven years?',
      'If a high-profile celebrity checks in under an alias, how do we legally verify their identity while ensuring their private data is shielded from staff gossip?'
    ],
    benchmarkPoints: [
      'Harmonize GDPR erasure with financial statutory retention: pseudonymize personal identifiers in tax folios while purging behavioral and marketing profiles completely.',
      'Deploy automated cookie consent banners and pre-arrival digital check-in opt-ins separating essential operational data from optional marketing tracking.',
      'Execute formal Data Processing Addendums (DPAs) and Standard Contractual Clauses (SCCs) with all third-party hospitality software vendors.',
      'Implement strict front desk privacy rules: enforce the \"Two-Factor Identity Verification\" protocol before discussing room numbers or reservations.'
    ]
  },
  {
    id: 'im-04',
    title: 'Big Data Analytics & Real-Time Dynamic Forecasting at Metro Grand Hotel',
    instructionalArea: 'Information Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Business Intelligence & Revenue Optimization Analyst',
    judgeRole: 'Vice President of Asset Management & Financial Strategy',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Utilize big data analytics to optimize hotel demand forecasting and ADR',
        description: 'Aggregate historical booking pace, airline inbound capacity, city convention calendars, and weather forecasts.'
      },
      {
        name: 'Design automated data extraction and ETL (Extract, Transform, Load) pipelines',
        description: 'Streamline nightly data synchronization between PMS, CRS, Channel Managers, and the central data warehouse.'
      },
      {
        name: 'Evaluate data visualization dashboards for hospitality executive decision making',
        description: 'Construct real-time KPI monitors for RevPAR, TrevPAR, net booking pace, and cancellation probabilities.'
      },
      {
        name: 'Apply machine learning models to detect fraudulent chargeback bookings',
        description: 'Identify suspicious reservation patterns, proxy IP addresses, and mismatched billing data.'
      },
      {
        name: 'Synthesize internal and external data feeds to anticipate market compression periods',
        description: 'Adjust rate fences and minimum length of stay (MLOS) restrictions dynamically based on citywide events.'
      }
    ],
    twentyFirstCenturySkills: ['Data Analytics', 'Strategic Forecasting', 'Quantitative Reasoning', 'Collaboration'],
    background: `Metro Grand Hotel is an 850-room landmark urban property located in the heart of a major financial district. In recent years, the hotel's revenue management team has relied on manual Microsoft Excel spreadsheets and weekly historical pace reports to set room rates. This reactive approach has resulted in significant revenue leakage: during sudden citywide convention spikes, the hotel underpriced rooms by an average of $65 per night, while during soft shoulder periods, aggressive last-minute rate drops triggered price wars with rival hotels.

Simultaneously, the hotel has experienced a sharp increase in fraudulent online bookings and friendly fraud chargebacks. Stolen credit cards used on third-party OTAs resulted in $140,000 in unrecoverable chargebacks and merchant penalty fees over the past twelve months.

Corporate leadership has allocated $250,000 to deploy an enterprise hospitality business intelligence (BI) data platform powered by real-time predictive machine learning. The platform must integrate internal PMS folio data with external macroeconomic signals (airline flight search queries, weather patterns, competitor scraping algorithms) to automate yield management.

You and your partner (Director of Business Intelligence and Revenue Optimization Analyst) are presenting the data architecture implementation plan to the Vice President of Asset Management (the judge).`,
    challenge: 'Deliver a 15-minute presentation outlining the architecture, machine learning fraud models, and dynamic pricing dashboards of the new hospitality big data platform.',
    judgeQuestions: [
      'How does the machine learning pricing model prevent algorithmic \"hallucinations\" that might price our rooms completely out of the market during minor events?',
      'What specific data signals will the system use to flag high-risk fraudulent OTA reservations before the guest arrives at the front desk?'
    ],
    benchmarkPoints: [
      'Establish automated ETL data pipelines syncing PMS, flight search volumes, and competitor rate feeds every 15 minutes into a unified cloud data lake.',
      'Deploy human-in-the-loop pricing constraints: establish automated rate guardrails (e.g., maximum +/- 25% daily rate movement without human approval).',
      'Integrate real-time fraud scoring algorithms checking cardholder velocity, geolocation IP mismatches, and synthetic identity markers to prevent chargebacks.',
      'Deliver intuitive executive PowerBI/Tableau dashboards tracking RevPAR index, channel distribution costs, and booking curve deviations in real time.'
    ]
  },
  {
    id: 'im-05',
    title: 'Mobile Key Digital Identity & IoT Room Access Security: Altitude Boutique Lodge',
    instructionalArea: 'Information Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hotel Technology Architect & Guest Experience Lead',
    judgeRole: 'Managing Director of Altitude Hospitality Group',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate wireless IoT security and mobile credential encryption in hospitality',
        description: 'Examine Bluetooth Low Energy (BLE) and Near Field Communication (NFC) digital room keys.'
      },
      {
        name: 'Design robust digital identity verification workflows for remote mobile check-in',
        description: 'Incorporate biometric facial recognition and government ID verification to prevent room theft.'
      },
      {
        name: 'Establish protocols for handling hardware failovers and battery depletion in smart locks',
        description: 'Implement real-time low-battery telemetry and physical master key override protocols.'
      },
      {
        name: 'Analyze network bandwidth and edge-computing requirements for connected guestrooms',
        description: 'Ensure smart thermostats, connected lighting, and door locks do not degrade guest Wi-Fi throughput.'
      },
      {
        name: 'Safeguard guest behavioral telemetry collected by in-room smart sensors',
        description: 'Protect occupancy sensor data to prevent unauthorized tracking of guest physical movements.'
      }
    ],
    twentyFirstCenturySkills: ['Technology Architecture', 'Security Analysis', 'Critical Thinking', 'Communication'],
    background: `Altitude Boutique Lodge is a high-tech 120-room mountain resort catering to affluent tech executives and outdoor enthusiasts. To provide a completely contactless arrival experience, the resort invested $180,000 to replace traditional plastic keycards with smart Bluetooth Low Energy (BLE) electronic door locks paired with a guest mobile app.

While guests initially praised the ability to skip the front desk and unlock rooms with their smartphones, serious information management and security vulnerabilities have emerged. Two weeks ago, a guest's smartphone battery died during a blizzard at 1:00 AM, leaving the guest locked out in sub-zero temperatures because the property lacked an active overnight exterior key encoder. More alarmingly, a tech-savvy guest discovered an unencrypted API endpoint in the resort's mobile application that allowed digital keys to be shared via text message without authenticating the recipient's identity, resulting in an unauthorized room party that caused $15,000 in property damage.

Additionally, smart in-room occupancy sensors designed to reduce energy consumption have sparked guest privacy complaints after a guest noticed the app displaying exact times they entered and exited their room.

You and your partner (Hotel Technology Architect and Guest Experience Lead) have been called to present an urgent IoT Security & Digital Identity Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing cryptographic mobile key tokenization, guest biometric identity verification, smart lock failsafes, and IoT data privacy protections.',
    judgeQuestions: [
      'How will our mobile app prevent guests from sharing their encrypted digital room key with unauthorized visitors or partygoers?',
      'What immediate failsafe exists if a guest’s phone dies or the hotel’s central Wi-Fi and cloud lock management server drops offline?'
    ],
    benchmarkPoints: [
      'Transition mobile keys to time-bound, cryptographically signed asymmetric tokens tied to the guest’s authenticated device hardware ID.',
      'Deploy automated pre-arrival ID verification using automated passport biometric OCR matching before digital key generation is authorized.',
      'Equip all smart locks with offline NFC fallback capability and maintain backup mechanical encoded RFID wristbands at an automated lobby kiosk.',
      'Enact strict edge-computing privacy policies: sensor data is processed locally for HVAC regulation and wiped immediately without cloud storage.'
    ]
  },
  {
    id: 'im-06',
    title: 'AI Conversational Assistant & Omnichannel Messaging Integration: Skyline Suites',
    instructionalArea: 'Information Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Digital Innovation Lead & Customer Service Systems Manager',
    judgeRole: 'General Manager of Skyline Suites Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Integrate artificial intelligence conversational agents with core hospitality PMS databases',
        description: 'Enable automated natural language processing (NLP) bots to query room availability, amenities, and billing.'
      },
      {
        name: 'Establish seamless human-in-the-loop escalation workflows for guest issue resolution',
        description: 'Trigger instant front desk alerts when guest sentiment drops or complex complaints arise.'
      },
      {
        name: 'Manage cross-channel guest communication across SMS, WhatsApp, and proprietary mobile apps',
        description: 'Maintain a single chronological guest interaction history visible across all hotel departments.'
      },
      {
        name: 'Ensure data integrity and prevent AI hallucination risks in hotel policy communication',
        description: 'Ground conversational agents strictly in verified hotel knowledge bases for pet policies and checkout fees.'
      },
      {
        name: 'Analyze guest conversational data to uncover recurring operational friction points',
        description: 'Mine messaging logs to identify recurring guest complaints regarding housekeeping delays or pool towel shortages.'
      }
    ],
    twentyFirstCenturySkills: ['Artificial Intelligence Literacy', 'Customer Experience Design', 'Data Mining', 'Problem Solving'],
    background: `Skyline Suites is a high-volume 460-suite urban hotel. Over the past year, the front desk and telephone switchboard have been overwhelmed with over 1,200 incoming guest calls and messages daily, 70% of which are repetitive inquiries (Wi-Fi passwords, pool hours, late checkout requests, and breakfast times). During peak arrival hours, call hold times average nine minutes, leading to frustrated guests and poor TripAdvisor customer service ratings.

To resolve the bottleneck, management deployed a generic off-the-shelf AI chatbot on its website and SMS messaging channel. Unfortunately, the deployment has caused chaos. Because the chatbot was not connected directly to the hotel's PMS database, it frequently provided inaccurate information: it promised early 10:00 AM check-ins to arriving guests when the hotel was 100% full, quoted incorrect valet parking rates, and told a family that the hotel had an Olympic-sized indoor pool (the hotel only has a small outdoor splash pool).

Last week, an escalating guest argument in the lobby occurred after the chatbot confirmed a complimentary late checkout that the front desk refused to honor, resulting in an ugly social media complaint.

You and your partner (Digital Innovation Lead and Customer Service Systems Manager) must present a comprehensive AI & Omnichannel Guest Messaging Overhaul to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation demonstrating how an integrated, PMS-connected AI messaging platform will resolve routine guest requests accurately, escalate complaints seamlessly, and extract operational insights.',
    judgeQuestions: [
      'How do we ensure the AI assistant never makes commitments—such as late checkouts or room upgrades—that our operations cannot honor?',
      'What specific sentiment analysis thresholds will trigger an immediate takeover by a human front desk supervisor?'
    ],
    benchmarkPoints: [
      'Implement Retrieval-Augmented Generation (RAG) strictly tethered to the hotel’s official PMS inventory rules, preventing AI hallucinations.',
      'Build real-time read/write PMS API integrations allowing guests to request clean towels or book restaurant reservations directly into operational work tickets.',
      'Deploy automated sentiment analysis algorithms that route any conversation with negative sentiment keywords immediately to the manager on duty within 60 seconds.',
      'Create a weekly NLP data analytics report categorizing the top 20 guest inquiries to fix systemic operational root causes.'
    ]
  },
  {
    id: 'im-07',
    title: 'Two-Way Channel Manager & Central Reservation System Synchronization: Ocean Crest',
    instructionalArea: 'Information Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Electronic Distribution Manager & Revenue Systems Director',
    judgeRole: 'Vice President of Global Distribution & Channel Strategy',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze electronic distribution channels and two-way XML/API hospitality gateways',
        description: 'Examine real-time inventory synchronization between PMS, CRS, Global Distribution Systems (GDS), and OTAs.'
      },
      {
        name: 'Mitigate distribution latency and overbooking vulnerabilities during peak booking windows',
        description: 'Eliminate 15-minute sync delays that cause simultaneous room sales on Expedia and Booking.com.'
      },
      {
        name: 'Manage rate parity and dynamic inventory pooling across diverse third-party channels',
        description: 'Maintain contracted rate parity while deploying automated inventory stop-sells during high demand.'
      },
      {
        name: 'Audit distribution transaction costs, merchant commissions, and net channel contribution',
        description: 'Calculate net RevPAR factoring in 18% OTA commission margins versus direct website bookings.'
      },
      {
        name: 'Develop automated reconciliation protocols for canceled and modified online reservations',
        description: 'Ensure automated inventory return to the available room pool without manual front desk re-entry.'
      }
    ],
    twentyFirstCenturySkills: ['Systems Integration', 'Distribution Strategy', 'Financial Analysis', 'Communication'],
    background: `Ocean Crest Resort is a premier 380-room coastal resort generating $28 million in annual lodging revenue. The resort distributes room inventory through its direct website, the GDS (Amadeus, Sabre), and major Online Travel Agencies (Expedia, Booking.com, Agoda).

However, the property's technical distribution architecture is severely outdated. The interface between the on-premise PMS and the cloud channel manager relies on an asynchronous batch XML feed that updates only once every 20 minutes. During high-velocity booking compression periods—such as the release of summer concert dates or marathon weekends—this 20-minute latency causes severe \"ghost inventory\" overbookings. Last month, during a flash booking surge, 24 oceanfront suites were sold simultaneously on both Expedia and Booking.com, resulting in catastrophic guest walk costs exceeding $32,000, brand reputation damage, and severe OTA penalties.

Conversely, when guests cancel reservations online, the cancellations often fail to sync back into the active PMS room pool, leaving dozens of prime weekend rooms unsold despite eager walk-in demand.

You and your partner (Electronic Distribution Manager and Revenue Systems Director) are scheduled to present a modern Real-Time Distribution & API Gateway Overhaul to the Vice President of Global Distribution (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the implementation of a modern Webhook/REST API two-way channel architecture to eliminate overbooking latency, enforce rate parity, and maximize net room revenue.',
    judgeQuestions: [
      'How does a modern event-driven Webhook architecture eliminate the 20-minute inventory latency that caused our 24-room overbooking disaster?',
      'How can our channel management software automatically shut down OTA sales channels when remaining room inventory falls below a 5% safety buffer?'
    ],
    benchmarkPoints: [
      'Replace legacy batch XML polling with real-time bidirectional RESTful API webhooks providing instantaneous sub-second inventory sync.',
      'Configure automated inventory safety buffers: trigger automated stop-sells on third-party OTAs when hotel occupancy crosses 92%, reserving remaining rooms for high-margin direct bookings.',
      'Implement an automated error-queue alert system that instantly flags failed reservation syncs to the on-duty revenue manager via SMS.',
      'Achieve an estimated $180,000 annual net profit lift by reducing OTA walk compensation costs and accelerating immediate cancelled-room resale.'
    ]
  },
  {
    id: 'im-08',
    title: 'Food & Beverage POS Data Warehousing & Real-Time Waste Tracking: Gourmet Haven',
    instructionalArea: 'Information Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'F&B Systems Analyst & Executive Sous Chef Operations Lead',
    judgeRole: 'Director of Food & Beverage & Resort Executive Chef',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design centralized F&B data warehousing and point-of-sale (POS) integration models',
        description: 'Connect kitchen display systems (KDS), bar POS terminals, and inventory databases into a single analytics engine.'
      },
      {
        name: 'Utilize automated recipe costing and real-time inventory depletion tracking',
        description: 'Track theoretical versus actual food usage (variance analysis) to identify pilferage and over-portioning.'
      },
      {
        name: 'Implement IoT smart scale technology for measuring culinary pre-consumer food waste',
        description: 'Deploy digital kitchen waste scales that log prep scrap weights and expiration spoilage automatically.'
      },
      {
        name: 'Analyze culinary sales mix data (Menu Engineering Matrix) to drive menu profitability',
        description: 'Categorize menu items into Stars, Plowhorses, Puzzles, and Dogs based on popularity and contribution margin.'
      },
      {
        name: 'Formulate staff data compliance protocols for culinary waste logging and bar spillage',
        description: 'Train line cooks and bartenders to log every dropped dish, void, and comp immediately in POS terminals.'
      }
    ],
    twentyFirstCenturySkills: ['Operational Efficiency', 'Quantitative Analysis', 'Sustainability Management', 'Problem Solving'],
    background: `Gourmet Haven is an expansive culinary division inside a 600-room luxury convention resort, operating three full-service restaurants, four banquet kitchens, two poolside bars, and 24-hour in-room dining, generating $14.5 million in annual F&B gross revenue.

Despite strong top-line sales, the F&B division's profit margins have deteriorated significantly over the past three quarters. Food cost percentage has ballooned from a target of 28% to an alarming 35.4%, representing over $1.07 million in annual profit loss. A manual inventory audit revealed widespread data blindness: kitchen managers order ingredients based on \"gut feel\" rather than projected banquet covers, and line cooks routinely discard expired proteins and over-prepped sauces into trash dumpsters without recording spillage or waste.

Furthermore, banquet event orders (BEOs) and restaurant POS terminals operate on disconnected software systems. When a corporate conference changes its banquet headcount from 400 to 250 attendees, kitchen prep leads often do not receive updated data until food has already been prepped and cooked, resulting in hundreds of wasted prime rib and salmon portions.

You and your partner (F&B Systems Analyst and Executive Sous Chef Operations Lead) must present an integrated F&B Information Management & Waste Reduction Strategy to the Director of Food & Beverage and Executive Chef (the judge).`,
    challenge: 'Deliver a 15-minute presentation demonstrating how integrated POS data warehousing, IoT waste-tracking scales, and automated menu engineering will reduce food costs back to the 28% benchmark.',
    judgeQuestions: [
      'How will your team convince busy banquet prep cooks and line chefs to pause during a dinner rush and accurately weigh discarded kitchen waste?',
      'How will the new system bridge the communication disconnect between sales managers writing BEOs and kitchen prep supervisors?'
    ],
    benchmarkPoints: [
      'Deploy smart IoT kitchen waste scales equipped with touchscreens and cameras to photograph and categorize discarded food in under 5 seconds.',
      'Integrate the BEO catering sales software directly into the kitchen inventory database to automate ingredient prep lists based on live attendee counts.',
      'Conduct automated weekly Theoretical vs. Actual (TvA) food variance audits to immediately flag culinary theft and recipe over-portioning.',
      'Perform data-driven menu engineering to eliminate low-margin \"Dog\" items and re-engineer high-volume \"Plowhorses\" with lower ingredient costs.'
    ]
  },
  {
    id: 'im-09',
    title: 'Hospitality Role-Based Access Control & Insider Threat Mitigation: Grand Imperial',
    instructionalArea: 'Information Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Information Security Officer & Human Resources Systems Director',
    judgeRole: 'Vice President of Internal Audit & Risk Governance',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Implement Role-Based Access Control (RBAC) and least privilege principles in lodging systems',
        description: 'Restrict employee system privileges strictly to the data required for their specific job functions.'
      },
      {
        name: 'Establish automated user provisioning and immediate deprovisioning workflows upon termination',
        description: 'Terminate all active PMS, email, and master keycard permissions within 15 minutes of employee departure.'
      },
      {
        name: 'Deploy security information and event management (SIEM) logging across hospitality networks',
        description: 'Monitor suspicious employee queries of high-profile guest folios and after-hours folio adjustments.'
      },
      {
        name: 'Mitigate internal employee fraud in cash handling, comp room issuance, and loyalty point transfers',
        description: 'Require dual-authorization manager sign-offs for point adjustments exceeding 10,000 points or $100 credits.'
      },
      {
        name: 'Conduct regular employee cybersecurity and information ethics compliance training',
        description: 'Instill confidentiality obligations regarding celebrity guest itineraries and proprietary hotel financial reports.'
      }
    ],
    twentyFirstCenturySkills: ['Information Ethics', 'Access Governance', 'Risk Management', 'Critical Thinking'],
    background: `The Grand Imperial is a legendary 700-room luxury hotel known for hosting international heads of state, Hollywood celebrities, and Fortune 500 executive summits. The hotel employs over 650 full-time and seasonal associates across front office, housekeeping, engineering, culinary, and sales.

A recent internal forensic audit exposed a critical security threat: the hotel's information architecture lacks basic Role-Based Access Control (RBAC). Over 140 current employees—including seasonal front desk agents, valet supervisors, and banquet bartenders—possess \"Super-User / Master Administrator\" privileges within the core PMS database. Front desk agents routinely look up private folio bills, home addresses, unlisted cell phone numbers, and room numbers of celebrity guests out of personal curiosity.

Even more shocking, the audit revealed that 48 former employees who had resigned or been terminated over the past 18 months still had active, working login accounts. Last month, a disgruntled former night auditor logged into the system remotely using their unrevoked credentials and issued $18,000 in fraudulent room credits and transferred 1.2 million loyalty points to an external burner account before anyone noticed.

You and your partner (Information Security Officer and HR Systems Director) have been summoned to present an urgent Access Governance & Insider Threat Strategy to the Vice President of Internal Audit (the judge).`,
    challenge: 'Deliver a 15-minute presentation outlining the restructuring of Role-Based Access Controls, automated HR-to-IT deprovisioning pipelines, and SIEM logging to protect guest privacy and prevent internal fraud.',
    judgeQuestions: [
      'Why did our previous IT protocols fail to catch 48 terminated employees with active logins, and how will your new automated pipeline guarantee immediate revocation?',
      'How will your system detect when an employee views a celebrity guest’s folio out of improper curiosity versus a legitimate job need?'
    ],
    benchmarkPoints: [
      'Enforce the Principle of Least Privilege: strip administrative rights from frontline staff and create strictly scoped RBAC tiers (Front Desk, Housekeeping, Night Audit).',
      'Automate the HR-to-IT provisioning pipeline: integrate the HR Workday system with Active Directory to revoke all credentials instantly upon termination status change.',
      'Deploy real-time SIEM auditing that triggers automated security alerts whenever VIP or \"Protected Profile\" records are accessed without an active check-in ticket.',
      'Mandate dual-manager cryptographic authorization for any manual loyalty point adjustments or folio refunds exceeding $100.'
    ]
  },
  {
    id: 'im-10',
    title: 'Hotel Wi-Fi Captive Portal Analytics & Opt-In Guest Intelligence: Coastal Bay Resort',
    instructionalArea: 'Information Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Network Architect & CRM Marketing Analytics Lead',
    judgeRole: 'General Manager of Coastal Bay Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design high-performance guest Wi-Fi infrastructure and bandwidth tiering models',
        description: 'Provide reliable complimentary high-speed internet with premium paid bandwidth tiers for conference streaming.'
      },
      {
        name: 'Construct compliant captive portal splash pages capturing verified first-party guest data',
        description: 'Acquire verified email addresses and SMS opt-ins adhering to CAN-SPAM and global privacy regulations.'
      },
      {
        name: 'Utilize Wi-Fi access point triangulation for physical guest dwell-time analytics',
        description: 'Map foot traffic heatmaps across resort retail stores, pool decks, and restaurants without tracking PII.'
      },
      {
        name: 'Integrate captive portal intelligence with the central CRM to drive personalized on-property offers',
        description: 'Trigger automated promotional happy-hour push notifications when guests arrive at the pool deck.'
      },
      {
        name: 'Protect guest network privacy through DNS filtering, client isolation, and rogue AP detection',
        description: 'Prevent malicious actors from launching \"Evil Twin\" Wi-Fi networks to intercept guest passwords.'
      }
    ],
    twentyFirstCenturySkills: ['Network Architecture', 'Data-Driven Marketing', 'Cyber Hygiene', 'Communication'],
    background: `Coastal Bay Resort is an expansive 450-room oceanfront vacation property featuring three swimming pools, four dining venues, a shopping village, and a full-service spa spread across 30 acres. The resort's guest Wi-Fi network has long been an unmanaged, unmonitored utility: guests simply click a generic \"Agree to Terms\" button on an unbranded splash page to connect.

This represents a massive lost data opportunity. Over 60% of guests staying at the resort book through third-party OTAs, meaning the hotel never receives their actual personal email addresses or contact information (OTAs provide masked temporary email aliases). Consequently, the resort cannot market directly to these guests for future repeat bookings.

Simultaneously, guests in remote outdoor cabanas and poolside lounges frequently complain of slow Wi-Fi speeds and dropped connections during peak afternoon hours. Security concerns have also surfaced after a business conference attendee reported a suspected rogue \"Evil Twin\" access point operating in the main lobby lounge attempting to harvest corporate login credentials.

Management has allocated $140,000 to overhaul the resort's Wi-Fi network with enterprise Wi-Fi 6 hardware, a modern CRM-connected captive portal, and real-time physical foot-traffic analytics.

You and your partner (Hospitality Network Architect and CRM Marketing Analytics Lead) are presenting the implementation plan to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation demonstrating how an advanced captive portal will capture verified first-party guest data, protect network cybersecurity, and optimize resort operations through foot-traffic heatmaps.',
    judgeQuestions: [
      'How do we ensure that requiring guests to log into a captive portal does not create friction or frustrate guests who just want fast internet?',
      'How does Wi-Fi access point triangulation generate foot-traffic heatmaps without violating guest privacy or tracking individual people across the resort?'
    ],
    benchmarkPoints: [
      'Design a sleek, 1-click captive portal offering instant social login (Google/Apple ID) or room number confirmation with seamless Wi-Fi roaming across the 30-acre property.',
      'Capture verified first-party email and mobile data from OTA guests, converting them into direct bookers for future vacations and lifting marketing ROI by 24%.',
      'Implement strict client device isolation and automated Wireless Intrusion Prevention Systems (WIPS) to immediately detect and shut down rogue APs.',
      'Anonymize MAC address telemetry to create aggregate spatial heatmaps, allowing the F&B team to adjust staffing dynamically based on real-time pool deck crowd density.'
    ]
  }
];
