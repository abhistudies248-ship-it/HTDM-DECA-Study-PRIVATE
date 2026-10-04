// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Selling (10 Cases)
// Focuses on consultative B2B hotel sales, corporate RFP negotiation, high-value wedding catering closes, and upselling
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const sellingCases: DecaCaseStudy[] = [
  {
    id: 'sel-01',
    title: 'Consultative B2B Selling & Closing a $1.2 Million Citywide Tech Conference at The Apex Grand',
    instructionalArea: 'Selling',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Group Sales & Senior Enterprise Account Executive',
    judgeRole: 'Vice President of Global Commercial Sales & Convention Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply consultative selling techniques in B2B corporate hospitality negotiations',
        description: 'Diagnose enterprise client event pain points and align banquet facilities, AV technology, and room blocks to strategic client objectives.'
      },
      {
        name: 'Overcome client objections regarding room rates, attrition penalties, and food & beverage minimums',
        description: 'Reframe non-negotiables through creative concession trade-offs (complimentary breakout suites, VIP airport transfers) without compromising contract margins.'
      },
      {
        name: 'Structure high-margin incremental upselling strategies across group hotel sales contracts',
        description: 'Introduce tiered experiential catering add-ons, exclusive opening reception rooftop buyouts, and upgraded presidential suite hospitality suites.'
      },
      {
        name: 'Explain the legal and financial importance of group attrition, slippage, and cancellation clauses',
        description: 'Defend mandatory minimum spend guarantees while offering flexible sliding-scale attrition concessions.'
      },
      {
        name: 'Execute a professional closing technique to secure multi-year convention hotel commitments',
        description: 'Deploy the assumptive close and incentive-backed urgency triggers to outmaneuver rival downtown hotel bids.'
      }
    ],
    twentyFirstCenturySkills: ['Consultative Selling', 'Persuasive Negotiation', 'B2B Relationship Building', 'Financial Structuring'],
    background: `The Apex Grand is an 850-room premier downtown convention hotel featuring 90,000 square feet of modern meeting space, two grand ballrooms, and cutting-edge hybrid broadcast studios.

The group sales department is in the final stages of bidding on the "Global FinTech Summit"—the premier annual event for a multinational financial technology association. The group contract represents 2,400 total room nights over four days, $480,000 in food and beverage minimums, and an estimated $1.2 million in total property revenue during an otherwise slow mid-November shoulder period.

However, the sales team has reached a critical impasse:
1. The lead meeting planner informed The Apex Grand that a rival newly built convention hotel two blocks away has submitted a competing bid offering room rates that are $35 lower per night and an unprecedented 10% attrition flexibility clause (compared to The Apex Grand's standard 85% pickup requirement).
2. The FinTech client expressed strong hesitation regarding The Apex Grand’s $180/person gala dinner minimum and strict non-refundable 90-day cancellation terms.
3. The client’s decision committee meets in 48 hours to award the contract. Winning this business is essential for The Apex Grand to hit its Q4 commercial budget.

You and your partner (Director of Group Sales and Senior Enterprise Account Executive) must present your finalized Consultative Sales & Closing Strategy to the Vice President of Global Commercial Sales (the judge) before executing the final negotiation presentation with the client.`,
    challenge: 'Deliver a 15-minute consultative B2B sales presentation to the Vice President of Global Commercial Sales. Formulate concessions that protect profit margins, neutralize competitor rate discounting, upsell premium banquet experiences, and close the $1.2M contract.',
    judgeQuestions: [
      'How will you convince the FinTech meeting planner to book with us at our higher room rate rather than signing with the competitor offering a $35/night discount?',
      'What creative concessions can we offer to resolve their attrition concerns without exposing our hotel to catastrophic revenue slippage?'
    ],
    benchmarkPoints: [
      'Sell value over price: highlight The Apex Grand’s contiguous pillarless ballroom, dedicated gigabit fiber-optic broadcast infrastructure (essential for tech keynotes), and superior proximity to the financial district.',
      'Structure a "Cumulative Re-book Concession": grant a 15% sliding-scale attrition allowance on the condition that any unused room nights can be credited toward a confirmed multi-year contract for the following year.',
      'Upsell an exclusive high-margin "FinTech Innovation VIP Lounge" package on the 32nd-floor executive terrace, offsetting minor room concessions with premium beverage revenue.',
      'Deploy the "Urgency Re-book Incentive": offer complimentary presidential suite upgrades for keynote speakers and a 50% discount on master LED stage lighting if the contract is executed within 48 hours.'
    ]
  },
  {
    id: 'sel-02',
    title: 'High-Value Luxury Wedding Buyout Negotiation & Closing: The Rosewood Manor',
    instructionalArea: 'Selling',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Senior Wedding Sales Directors & Luxury Event Consultants',
    judgeRole: 'General Manager of The Rosewood Manor Estate',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply empathetic and emotional intelligence selling techniques to high-net-worth wedding clients',
        description: 'Navigate complex family dynamics, bride/groom emotional stakes, and high-budget expectations.'
      },
      {
        name: 'Present multi-day estate buyout packages and defend premium non-negotiable minimum spends',
        description: 'Sell a complete 3-day full-estate buyout contract totaling $185,000 across 40 guestrooms and catering.'
      },
      {
        name: 'Overcome client objections regarding venue curfew, external vendor restrictions, and weather contingencies',
        description: 'Present sound-insulated historic carriage house options and pre-engineered backup glass marquees.'
      },
      {
        name: 'Upsell premium experiential wedding enhancements and bespoke culinary moments',
        description: 'Upsell champagne towers, late-night gourmet food trucks, and morning-after farewell spa cabana buyouts.'
      },
      {
        name: 'Execute the consultative close to secure immediate non-refundable date deposits',
        description: 'Utilize prime-date exclusivity urgency to secure a $45,000 non-refundable contract deposit.'
      }
    ],
    twentyFirstCenturySkills: ['Emotional Intelligence Selling', 'High-Stakes Negotiation', 'Luxury Storytelling', 'Customer Empathy'],
    background: `The Rosewood Manor is a premier 40-room historic countryside estate hotel renowned for hosting elite weddings. The property requires a mandatory 3-day full-property buyout (Friday through Sunday) for weekend weddings, with a minimum contract value of $185,000.

You are currently in final contract negotiations with an affluent couple and the bride’s father (a prominent corporate executive paying the bill) for the highly coveted Labor Day holiday weekend. The family is also actively touring a competitor vineyard estate.

During the final site tour, several major objections surfaced:
1. The father balked at the mandatory $65,000 Food & Beverage minimum, arguing that with only 90 invited guests, $65,000 represents over $720 per guest, which he feels is excessive.
2. The couple wants an outdoor DJ dance party continuing until 2:00 AM, but county municipal noise ordinances mandate that outdoor amplified music must end strictly at 10:00 PM.
3. The bride is terrified of potential rain ruining her dream outdoor garden lawn ceremony.
4. The family loves the historic estate, but the father stated: \"We have three other venues under review, so we’ll get back to you in three weeks.\"

The Labor Day weekend is the most valuable date on the manor’s annual calendar. The General Manager expects your team to overcome these objections, defend the pricing, and close the contract today with a signed deposit.

You and your partner (Senior Wedding Sales Directors and Luxury Event Consultants) are presenting your Sales Closing Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the consultative strategy to reframe the F&B minimum, resolve the noise curfew and rain objections, upsell premium enhancements, and close the $185,000 contract today.',
    judgeQuestions: [
      'How will you justify a $65,000 F&B minimum for 90 guests to a skeptical corporate executive who calculates cost-per-head down to the penny?',
      'What closing technique will persuade this family to sign a non-refundable $45,000 deposit today rather than touring other estates for three weeks?'
    ],
    benchmarkPoints: [
      'Reframe the F&B minimum across the entire 72-hour weekend: explain the $65,000 encompasses four distinct culinary events (Friday Welcome BBQ, Saturday Bridal Lunch, Saturday 6-Course Wedding Gala, and Sunday Farewell Brunch), averaging $180 per event per guest.',
      'Resolve the 10:00 PM noise curfew: offer a seamless midnight transition to the manor’s soundproof historic wine cellar for a private "Speakeasy Afterparty" with DJ and craft cocktails until 2:00 AM.',
      'Eliminate rain anxiety: showcase the glass-roofed conservatory as a guaranteed, weather-proof ceremony sanctuary that looks equally stunning in sun or rain.',
      'Deploy the "Exclusivity Hold Close": inform the father that two other couples have requested Labor Day weekend; offer complimentary vintage champagne toast ($3,500 value) if the contract is signed within 24 hours.'
    ]
  },
  {
    id: 'sel-03',
    title: 'Defending Corporate Transient RFP Accounts & Defeating Competitor Underbidding: Metro Financial Hotel',
    instructionalArea: 'Selling',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Corporate Sales Directors & Enterprise Account Executives',
    judgeRole: 'General Manager of Metro Financial Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze corporate travel procurement RFP evaluation criteria and bidding scorecards',
        description: 'Evaluate rate caps, amenity bundles, location proximity, traveler safety, and sustainability scores.'
      },
      {
        name: 'Defend premium corporate negotiated room rates against aggressive competitor underbidding',
        description: 'Prove superior total trip value, walking distance convenience, and traveler productivity over cheaper suburban hotels.'
      },
      {
        name: 'Negotiate dynamic percentage-off-BAR pricing models and duty-of-care protections',
        description: 'Structure flexible corporate contract terms that guarantee traveler availability and emergency support.'
      },
      {
        name: 'Incorporate corporate traveler well-being, fitness, and nutrition into commercial proposals',
        description: 'Include complimentary premium Peloton-equipped gym passes, healthy breakfast boxes, and ergonomic workspaces.'
      },
      {
        name: 'Close multi-year preferred corporate lodging agreements through executive stakeholder alignment',
        description: 'Secure endorsement from internal corporate executive travel champions and corporate travel management firms.'
      }
    ],
    twentyFirstCenturySkills: ['Commercial RFP Strategy', 'Competitive Defense', 'Value Proposition Selling', 'Executive Alignment'],
    background: `Metro Financial Hotel is a 420-room upscale hotel located in the heart of the financial district. For the past five years, the hotel has held the primary preferred hotel contract for \"Apex Capital Global\"—an international investment banking firm whose consultants and bankers generate over 3,200 room nights annually, contributing $780,000 in lodging revenue at a negotiated rate of $245/night.

However, during this year’s corporate travel RFP bidding cycle, a brand-new select-service hotel located 1.5 miles away submitted an aggressive underbidding proposal:
- The competitor offered a cutthroat rate of $185 per night—undercutting Metro Financial Hotel by $60 per night, representing an apparent $192,000 annual savings for Apex Capital’s travel procurement department.
- Apex Capital’s corporate travel manager sent a formal notice stating that unless Metro Financial Hotel matches the $185 rate, Metro Financial will be demoted to secondary status or removed from the corporate booking tool entirely.
- Cutting the rate from $245 to $185 would wipe out $192,000 in hotel profit margin, which the hotel cannot afford.

However, internal traveler feedback reveals that Apex Capital’s bankers love Metro Financial Hotel because it is an easy 3-minute walk to their headquarters, whereas the competitor hotel requires a 25-minute cab ride through heavy downtown traffic.

You and your partner (Corporate Sales Directors and Enterprise Account Executives) must present your RFP Defense & Negotiation Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing how you will defend the $245 rate, prove that the competitor’s \"cheap\" rate actually costs the client more in taxi fares and lost billable hours, bundle high-value business amenities, and close the contract renewal.',
    judgeQuestions: [
      'How do you convince a cold, numbers-driven corporate procurement officer that booking our $245 hotel actually saves the company money compared to a $185 hotel?',
      'If the procurement manager refuses to budge on price, what concessions can we offer that don’t erode our base room rate?'
    ],
    benchmarkPoints: [
      'Present the "Total Cost of Trip" Financial Model: prove that staying 1.5 miles away incurs $40/day in Uber fares plus 45 minutes of lost executive billable time (valued at $350/hr), costing Apex Capital an extra $1,200 per traveler per week.',
      'Defend rate integrity: hold the $245 negotiated rate while conceding high-value, low-cost amenities (complimentary executive breakfast, high-speed Wi-Fi 6, 4:00 PM late checkout, and free pressing).',
      'Mobilize internal traveler champions: partner with Apex Capital’s Managing Directors who demand proximity, leveraging traveler safety and convenience to overrule procurement’s spreadsheet.',
      'Secure multi-year contract renewal: offer a 2-year rate lock at $245, insulating the client from city inflation while protecting $1.56 million in guaranteed lodging revenue.'
    ]
  },
  {
    id: 'sel-04',
    title: 'Cross-Selling Multi-Property Portfolio Contracts to Enterprise Clients: Horizon Hotels',
    instructionalArea: 'Selling',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'National Sales Directors & Enterprise Portfolio Executives',
    judgeRole: 'Senior Vice President of Global Sales & Portfolio Commercial Strategy',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply portfolio cross-selling and enterprise account expansion strategies in multi-property hospitality',
        description: 'Expand single-property client bookings across 14 regional hotel and resort properties.'
      },
      {
        name: 'Conduct enterprise client travel footprint audits to uncover uncaptured lodging spend',
        description: 'Map client regional office locations, sales meetings, and incentive trips against hotel portfolio properties.'
      },
      {
        name: 'Structure master master service agreements (MSAs) with centralized enterprise billing and loyalty tiering',
        description: 'Consolidate multiple independent hotel contracts into a single negotiated master commercial agreement.'
      },
      {
        name: 'Design portfolio-wide tiered volume discount and rebate incentives',
        description: 'Offer escalating 2% to 5% annual corporate rebates when total cross-portfolio spend exceeds $2 million.'
      },
      {
        name: 'Execute executive C-suite sales presentations to secure multi-destination preferred status',
        description: 'Present commercial proposals to client Chief Procurement Officers and Global Travel Vice Presidents.'
      }
    ],
    twentyFirstCenturySkills: ['Portfolio Cross-Selling', 'Enterprise Account Mapping', 'Commercial Contract Structuring', 'Strategic Negotiation'],
    background: `Horizon Hotels operates a portfolio of 14 premier full-service hotels and luxury resorts across North America, including properties in major business hubs (New York, Chicago, San Francisco) and top resort destinations (Scottsdale, Miami, Lake Tahoe).

Currently, the company suffers from extreme sales fragmentation:
- Sales teams at each individual hotel operate independently in competitive silos. A sales director at the Chicago property has zero visibility into client relationships managed by the San Francisco or Miami properties.
- \"BioHealth Global,\" a multinational healthcare enterprise, currently spends $600,000 annually at Horizon’s Boston hotel for medical consulting trips. However, an analysis of BioHealth’s travel footprint revealed that the company spends over $4.5 million annually on lodging in six other cities where Horizon operates premier hotels, yet books those stays with competitor hotel chains!
- BioHealth’s corporate travel procurement team expressed frustration at having to negotiate separate contracts and billing setups with individual hotels, stating: \"We would love to consolidate our spend with a single hotel brand if you could offer a unified master agreement, centralized billing, and portfolio-wide volume benefits.\"

The Senior Vice President of Global Sales has mandated the creation of \"The Horizon Enterprise Portfolio Sales Initiative\" to cross-sell the entire 14-property collection to top enterprise accounts.

You and your partner (National Sales Directors and Enterprise Portfolio Executives) are presenting your Portfolio Cross-Selling Strategy for BioHealth Global to the Senior Vice President of Global Sales (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing account footprint mapping, the Master Service Agreement (MSA) structure, portfolio volume discount tiers, centralized billing, and the sales pitch to capture $3M+ in cross-sold spend.',
    judgeQuestions: [
      'How do we motivate an individual property sales manager in Boston to share their client relationship with sales managers in Miami and San Francisco?',
      'If BioHealth Global demands an across-the-board 15% discount across all 14 hotels in exchange for portfolio consolidation, how do we protect resort margins during peak seasons?'
    ],
    benchmarkPoints: [
      'Restructure sales compensation: introduce a "Cross-Property Referral Incentive" paying local sales managers a 3% commission on realized revenue booked at sister properties.',
      'Present a unified Master Service Agreement (MSA): offer BioHealth single-source billing, standardized contract terms, and a dedicated National Account Concierge across all 14 properties.',
      'Deploy the "Portfolio Volume Growth Rebate": provide a 3% annual rebate credit on total spend if cross-portfolio room nights exceed 8,000 nights across at least five designated cities.',
      'Capture $2.8 million in net-new corporate lodging spend, shifting market share directly away from competitor hotel chains while protecting peak resort ADR through blackout fences.'
    ]
  },
  {
    id: 'sel-05',
    title: 'Frontline Reception Upselling & Premium Suite Conversion: The Grand Parisian Hotel',
    instructionalArea: 'Selling',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Front Office Upsell Specialists & Commercial Training Leads',
    judgeRole: 'General Manager of The Grand Parisian Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design frontline upselling frameworks and psychological suggestive selling techniques at check-in',
        description: 'Train front desk agents to transition standard reservations into luxury suites and executive club access.'
      },
      {
        name: 'Utilize guest profile data and arrival cues to identify high-probability upselling candidates',
        description: 'Spot anniversary getaways, business executives seeking meeting space, and family leisure travelers needing space.'
      },
      {
        name: 'Overcome customer price resistance through incremental \"per-night\" value framing',
        description: 'Frame a $150 suite upgrade as \"only $75 per person per night, including complimentary champagne and breakfast.\"'
      },
      {
        name: 'Establish fair employee commission structures and gamified frontline sales competitions',
        description: 'Award 10% to 15% commissions on realized upsell revenue with monthly leaderboard recognition.'
      },
      {
        name: 'Track upselling conversion rates, incremental RevPAR impact, and guest satisfaction correlation',
        description: 'Demonstrate that upgraded guests post 18% higher Net Promoter Scores on post-stay surveys.'
      }
    ],
    twentyFirstCenturySkills: ['Suggestive Selling', 'Consumer Psychology', 'Gamification Design', 'Frontline Enablement'],
    background: `The Grand Parisian is a luxury 380-room hotel featuring 45 premium executive junior suites and five presidential suites. On any given night, an average of 18 luxury suites sit empty because leisure travelers book standard rooms online to save money.

Currently, the front desk team treats check-in as a purely clerical transaction:
- Associates ask for an ID and credit card, hand over keycards, and point toward the elevators. Zero attempt is made to upsell empty suites or monetize late checkouts.
- When suites remain unsold at 6:00 PM, the hotel frequently gives them away as free complimentary upgrades to random guests just to clear standard room inventory, capturing zero incremental revenue.
- A previous attempt to encourage upselling failed because associates felt awkward and pushy, feared hearing \"no,\" and received no financial reward for extra effort.

The General Manager wants to launch \"The Grand Parisian Royal Upgrade Program\"—a sophisticated, hospitality-driven frontline upselling initiative that turns empty suites into high-margin profit while delighting guests.

You and your partner (Front Office Upsell Specialists and Commercial Training Leads) are presenting your Frontline Upselling & Incentive Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing conversational upselling scripts, guest segmentation cues, incremental pricing psychology, frontline commission structures, and financial projections.',
    judgeQuestions: [
      'How do you train front desk agents to offer suite upgrades without sounding like aggressive pushy salespeople who degrade our luxury brand?',
      'If we give agents a 12% commission on suite upsells, what prevents agents from discounting suites too steeply just to earn a quick bonus?'
    ],
    benchmarkPoints: [
      'Deploy the "Hospitality Discovery Approach": train agents to ask two open-ended questions upon greeting ("What brings you to the city?" and "Are you celebrating a special occasion?") to identify upgrade motivations.',
      'Teach Psychological Price Framing: never quote total lump sums; quote incremental daily rates ("For just $65 more this evening, we can upgrade you to our 14th-floor corner suite with panoramic skyline views and executive club breakfast").',
      'Establish the "Frontline Sales Accelerator": agents earn a 12% commission on realized upsell revenue, backed by strict minimum hurdle floors in the PMS preventing unauthorized deep discounting.',
      'Project massive financial lift: converting 8 suite upgrades per day at an average of $95 incremental revenue yields $277,000 in pure high-margin profit annually.'
    ]
  },
  {
    id: 'sel-06',
    title: 'Winning Citywide Association Convention Bids Against Aggressive Comp Sets: Summit Center Hotel',
    instructionalArea: 'Selling',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of National Accounts & Convention Bidding Strategists',
    judgeRole: 'Vice President of Convention Sales & Destination Bidding Chair',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Master competitive bidding and oral presentation finals for national association conventions',
        description: 'Compete in final oral pitch rounds for a 5,000-attendee annual medical association conference.'
      },
      {
        name: 'Synthesize hotel physical capabilities with destination convention center infrastructure',
        description: 'Sell seamless skybridge connectivity, contiguous exhibit halls, and integrated multi-hotel room blocks.'
      },
      {
        name: 'Counter competitor city underbidding through non-price value differentiators',
        description: 'Emphasize destination airlift accessibility, walkability, world-class dining, and delegate safety.'
      },
      {
        name: 'Structure complex multi-year contractual commitments and master association sponsorships',
        description: 'Secure a 3-year rotating convention commitment generating $4.8 million in total lodging revenue.'
      },
      {
        name: 'Coordinate destination marketing organizations (DMO / CVB) and civic hospitality coalitions',
        description: 'Unite city mayor’s office, airport authority, and local restaurants behind the winning bid package.'
      }
    ],
    twentyFirstCenturySkills: ['High-Stakes B2B Bidding', 'Oral Pitch Mastery', 'Civic Coalition Leadership', 'Strategic Influence'],
    background: `Summit Center Hotel is a 1,000-room flagship convention property connected via an enclosed glass skybridge to the city’s 500,000-square-foot Convention Center.

The hotel sales team, in collaboration with the city’s Convention & Visitors Bureau (CVB), has reached the final two-city selection round to host the \"American Pediatric Medical Association (APMA) Annual Congress\"—the most lucrative medical convention of the decade:
- The convention represents 4,200 peak room nights, 18,000 total room nights, and over $2.4 million in banquet food and beverage spend across five days.
- The competing finalist city is a Sunbelt rival destination whose newly built convention hotel has submitted an aggressive bid offering $45 lower room rates and a $250,000 municipal subvention grant to subsidize association expenses.
- The APMA Selection Committee is conducting a 60-minute formal oral pitch final tomorrow morning to determine which city and headquarters hotel wins the multi-million-dollar contract.
- The association’s chief priorities are maximizing doctor attendance, providing flawless hybrid broadcast technology for medical surgery keynotes, and ensuring delegate evening safety and walkability.

The Vice President of Convention Sales and the Destination Bidding Chair are conducting a mock presentation rehearsal today to critique and finalize the winning sales presentation.

You and your partner (Director of National Accounts and Convention Bidding Strategists) are presenting your Final Bidding Pitch to the Vice President of Convention Sales (the judge).`,
    challenge: 'Deliver a 15-minute high-stakes oral sales presentation proving why APMA must select Summit Center Hotel and our city over the Sunbelt competitor, overcoming their rate discount and municipal grant.',
    judgeQuestions: [
      'How do we defeat the competitor’s $45 room rate discount and their $250,000 cash municipal subvention grant?',
      'What specific evidence will prove to the medical association that holding their convention at our property will drive higher paid doctor attendance than the competitor city?'
    ],
    benchmarkPoints: [
      'Prove Attendance Supremacy: demonstrate that our city is within a 2-hour flight for 68% of the US population, proving historical association attendance is 28% higher in our hub, generating an extra $650,000 in doctor registration fees that dwarfs the competitor’s $250,000 grant.',
      'Showcase Seamless Skybridge Infrastructure: highlight that delegates never have to step outside in bad weather or board expensive shuttle buses, saving the association $90,000 in transportation costs.',
      'Concede High-Value Technology Sponsorships: partner with the CVB to provide complimentary gigabit medical broadcast streaming and VIP speaker airport town-car transfers.',
      'Deploy the Assumptive Multi-Year Close: offer an exclusive 3-year rotating master contract with guaranteed rate inflation caps, locking in $4.8 million in convention revenue for the decade.'
    ]
  },
  {
    id: 'sel-07',
    title: 'Overcoming Group Attrition & Minimum Spend Objections: Oceanfront Palms Resort',
    instructionalArea: 'Selling',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Senior Group Sales Executives & Contract Specialists',
    judgeRole: 'Director of Resort Sales & Marketing',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze legal and financial risks associated with group contract room attrition and slippage',
        description: 'Defend 85% room block pickup requirements and food & beverage minimum commitments.'
      },
      {
        name: 'Diagnose meeting planner anxieties regarding attendance shortfalls and financial penalties',
        description: 'Understand client fear of signing personal liability for tens of thousands of dollars in unused rooms.'
      },
      {
        name: 'Structure creative, risk-mitigating contractual clauses that preserve hotel profit margins',
        description: 'Offer sliding-scale attrition tiers, credit re-booking clauses, and audit rights.'
      },
      {
        name: 'Formulate win-win food and beverage minimum compromises without discounting baseline menu prices',
        description: 'Allow clients to apply unspent banquet minimums toward branded gift shop merchandise or welcome amenities.'
      },
      {
        name: 'Execute collaborative closing techniques that build long-term B2B client trust',
        description: 'Demonstrate commercial empathy while securing a legally binding group sales agreement.'
      }
    ],
    twentyFirstCenturySkills: ['Commercial Empathy', 'Contract Engineering', 'Creative Problem Solving', 'Negotiation Strategy'],
    background: `Oceanfront Palms Resort is an upscale 400-room beachfront destination resort. The sales team is negotiating a $450,000 contract with \"TechVentures Media\" for their annual 3-day Executive Summit, scheduled for late October. The contract includes 800 total room nights and an $85,000 food & beverage banquet minimum.

The negotiation has hit a complete roadblock over two contentious contract clauses:
1. Room Block Attrition Clause: The resort’s standard contract requires an 85% room pickup (the client must pay for at least 680 of the 800 blocked rooms, even if attendees don’t book). The client’s meeting planner is terrified of attendance drops due to corporate travel cutbacks and refuses to sign unless the attrition requirement is slashed to 65%. Slashing attrition to 65% would leave the resort vulnerable to 280 unsold rooms during a peak autumn week.
2. F&B Minimum Clause: The planner wants the $85,000 F&B minimum reduced to $55,000, arguing that attendees prefer to explore local beachfront restaurants rather than attending resort banquets.
3. The planner stated: \"If you cannot accommodate our attrition and F&B requests, we will sign with a competitor in Florida who offered us total contract flexibility.\"

The Director of Sales wants to win this lucrative $450,000 group, but strictly forbids signing an agreement that exposes the resort to catastrophic uncompensated room slippage.

You and your partner (Senior Group Sales Executives and Contract Specialists) are presenting your Contract Compromise & Closing Strategy to the Director of Sales (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing win-win contractual structures, sliding-scale attrition solutions, creative F&B credit re-allocation, and closing techniques to secure the signed contract today.',
    judgeQuestions: [
      'If we refuse to drop our attrition requirement to 65%, what creative contract compromise will make the meeting planner feel safe enough to sign?',
      'How can we solve the client’s desire for attendees to explore outside restaurants while still preserving our $85,000 F&B banquet revenue?'
    ],
    benchmarkPoints: [
      'Structure the "Sliding-Scale Attrition Timeline": allow the client to release up to 15% of rooms 90 days out, and an additional 10% 45 days out, giving them flexibility early when the resort can still resell the rooms.',
      'Introduce the "Re-Book Credit Clause": if the client incurs an attrition penalty, 75% of the penalty paid will be credited toward their next annual summit if contracted within 12 months, removing the client’s fear of lost money.',
      'Innovate the F&B Minimum: keep the $85,000 minimum intact, but allow $15,000 to be issued as "Resort Dining Dining Dollars" loaded onto guest room keys, empowering attendees to eat at the resort’s casual dining outlets, pool bar, and coffee shop.',
      'Deploy the "Assumptive Partnership Close": present the revised contract with these tailored protections, securing immediate signature and protecting $410,000 in realized resort revenue.'
    ]
  },
  {
    id: 'sel-08',
    title: 'Selling High-Margin Hybrid Audio-Visual & Production Packages: The TechHub Hotel',
    instructionalArea: 'Selling',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Event Technology Sales & Creative Production Leads',
    judgeRole: 'General Manager of The TechHub Hotel & Conference Center',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design and sell high-margin event technology, hybrid broadcasting, and audio-visual packages',
        description: 'Transition hotel AV from basic projector rentals to broadcast-grade digital stage productions.'
      },
      {
        name: 'Overcome meeting planner objections regarding third-party AV vendor outside fees',
        description: 'Defend exclusive in-house AV contracts by demonstrating superior network reliability and on-site redundancy.'
      },
      {
        name: 'Structure tiered event production bundles that maximize revenue per square foot',
        description: 'Package LED video walls, dynamic robotic stage lighting, multi-camera live streaming, and interactive polling apps.'
      },
      {
        name: 'Negotiate bundled AV concessions during group room contract negotiations to protect room ADR',
        description: 'Offer a 20% discount on high-margin lighting packages to prevent meeting planners from demanding room rate discounts.'
      },
      {
        name: 'Calculate the gross profit contribution of in-house event technology versus traditional catering',
        description: 'Demonstrate how event technology yields a 68% profit margin compared to a 28% banquet food margin.'
      }
    ],
    twentyFirstCenturySkills: ['Event Technology Literacy', 'Consultative Selling', 'Gross Margin Optimization', 'Persuasive Pitching'],
    background: `The TechHub Hotel is a 500-room property featuring a 25,000-square-foot high-tech conference center. The hotel recently invested $1.2 million to install broadcast-grade audiovisual infrastructure, including permanent 4K LED video stage walls, robotic studio cameras, enterprise gigabit fiber-optic broadcast lines, and immersive theatrical lighting.

Despite this cutting-edge equipment, the hotel’s AV sales are severely lagging:
- Over 45% of booked corporate meeting planners attempt to bring in third-party outside AV rental companies, arguing that hotel in-house AV prices are \"notoriously overpriced.\" When planners bring outside vendors, the hotel receives only a nominal $1,500 outside-vendor patch fee, leaving $80,000 in lucrative production revenue on the table.
- Hotel sales managers have treated AV as an afterthought: they focus entirely on selling hotel rooms and banquet menus, handing clients a dry, confusing 20-page technical equipment price sheet with line-item charges like \"$450 for an HDMI cable and tripod screen.\"
- Event technology generates an astounding 72% gross profit margin, yet represents less than 8% of total banquet department revenue.

The General Manager demands an innovative consultative sales approach that packages event technology into irresistible, broadcast-quality digital experiences, defeats outside vendor competition, and elevates event technology revenue.

You and your partner (Director of Event Technology Sales and Creative Production Leads) are presenting your Event Technology Commercial Sales Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing consultative experiential AV packages, outside vendor defense strategies, room rate concession trade-offs, and financial margin expansion.',
    judgeQuestions: [
      'How do we convince a corporate meeting planner to use our in-house production team when an outside AV company submitted a proposal that is $15,000 cheaper?',
      'How can our sales managers use AV packages as a bargaining chip to protect room rates during tough corporate negotiations?'
    ],
    benchmarkPoints: [
      'Eliminate confusing line-item equipment sheets; launch 3 Turnkey Experiential Packages: "The Executive Keynote Stage", "The Global Hybrid Broadcast", and "The Interactive Digital Summit".',
      'Defeat outside vendor bids: demonstrate that outside vendors face $8,000 in union electrical connection fees, load-in labor, and security costs, while in-house infrastructure is already pre-rigged, tested, and backed by on-site emergency technicians.',
      'Deploy the "Margin-Shift Trade-Off": when corporate clients demand a $20 room rate cut, hold the room rate firm and instead concede a $10,000 lighting/staging credit (which costs the hotel only $1,800 in variable electrical cost), preserving pure room profit.',
      'Increase in-house AV capture rate from 55% to 88%, generating $1.1 million in incremental high-margin event technology profit annually.'
    ]
  },
  {
    id: 'sel-09',
    title: 'Converting Leisure Walk-Ins & Direct Telephone Inquiries: The Coastal Haven Inn',
    instructionalArea: 'Selling',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Reservations Sales Trainers & Guest Conversion Specialists',
    judgeRole: 'General Manager of The Coastal Haven Inn & Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design professional telephone reservation selling scripts and consultative inquiry handling',
        description: 'Transition reservations agents from passive rate-quoters to active emotional sales consultants.'
      },
      {
        name: 'Implement the \"Top-Down\" suggestive selling method across lodging room categories',
        description: 'Quote premium ocean-view balcony suites first before quoting standard entry-level rooms.'
      },
      {
        name: 'Overcome customer hesitation and \"shopping around\" objections during live telephone calls',
        description: 'Paint a vivid sensory picture of the resort experience and offer immediate direct-booking incentives.'
      },
      {
        name: 'Train front desk staff on consultative selling techniques for walk-in evening guests',
        description: 'Offer walk-in travelers a guided lobby room preview and complimentary glass of wine to close the sale.'
      },
      {
        name: 'Track reservation call conversion ratios, average booking lead time, and direct channel contribution',
        description: 'Lift telephone booking conversion rate from 18% to 42% while circumventing 18% OTA commissions.'
      }
    ],
    twentyFirstCenturySkills: ['Conversational Selling', 'Sensory Storytelling', 'Call Conversion Architecture', 'Customer Rapport'],
    background: `The Coastal Haven Inn is a boutique 160-room oceanfront resort. The hotel receives over 250 telephone reservation inquiries every week from travelers planning summer vacations.

A recent quality mystery-call audit revealed that the hotel’s reservation agents are essentially \"passive order-takers\":
- When callers ask: \"How much are your rooms next weekend?\", agents respond with a flat, mechanical answer: \"Our standard rooms are $340, plus tax.\"
- Agents never ask the caller’s name, never inquire why they are visiting, never describe the resort’s oceanfront infinity pool or award-winning seafood restaurant, and never ask for the reservation.
- Over 75% of callers reply: \"Okay, thank you, I’m just shopping around,\" and hang up. Many of those callers subsequently book the hotel on Expedia, costing the property an 18% commission fee ($61 per night), or book a competitor hotel entirely.
- The hotel’s telephone reservation conversion rate is an abysmal 18%.
- Similarly, when evening walk-in guests ask for room rates at the front desk, agents quote high rack rates without showing rooms or demonstrating hospitality, causing 60% of walk-ins to walk back out the door.

The General Manager wants to launch \"The Coastal Voice of Hospitality Sales Academy\" to train reservations and front desk staff into master consultative sellers.

You and your partner (Reservations Sales Trainers and Guest Conversion Specialists) are presenting your Direct Reservation Selling Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing conversational telephone sales frameworks, sensory storytelling techniques, walk-in conversion protocols, call tracking metrics, and commission incentives.',
    judgeQuestions: [
      'How does an agent use \"Sensory Storytelling\" over the telephone in under two minutes without sounding scripted or cheesy?',
      'What specific question should an agent ask a caller who says: \"I’m just shopping around to see what’s out there\"?'
    ],
    benchmarkPoints: [
      'Deploy the "5-Step Consultative Call Flow": 1. Warm Greeting & Caller Name Capture, 2. Vacation Discovery ("Who are you traveling with and what are you celebrating?"), 3. Top-Down Sensory Room Painting, 4. The Assumptive Close, 5. Direct Booking Lock.',
      'Train Top-Down Quoting: describe the Panoramic Ocean Balcony Suite first ("Imagine waking up to the ocean breeze and having espresso on your private terrace"), only dropping to standard rooms if the caller pushes back on budget.',
      'Overcome the "Shopping Around" objection: respond with empathy: "I completely understand! However, we only have three oceanfront rooms remaining for that holiday weekend. May I place a complimentary 24-hour courtesy hold on the room right now so you don’t lose it while you research?"',
      'Lift telephone call conversion from 18% to 42%, shifting 1,200 bookings away from third-party OTAs and saving over $140,000 annually in commission expenses.'
    ]
  },
  {
    id: 'sel-10',
    title: 'Post-Stay Corporate Account Expansion & Contract Renewal: Executive Suites International',
    instructionalArea: 'Selling',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Strategic Account Directors & Corporate Retention Leads',
    judgeRole: 'Vice President of Global Commercial Sales & Account Growth',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design post-stay corporate account review (QBR) and relationship expansion frameworks',
        description: 'Conduct structured Quarterly Business Reviews with enterprise clients to review room-night production and traveler satisfaction.'
      },
      {
        name: 'Utilize corporate traveler folio analytics to identify upsell and cross-departmental expansion opportunities',
        description: 'Uncover that corporate travelers spent $120,000 at local competitor restaurants, positioning hotel catering for expansion.'
      },
      {
        name: 'Formulate contract renewal proposals that expand room night share of wallet',
        description: 'Incentivize enterprise clients to increase annual room commitment from 1,200 to 2,000 room nights.'
      },
      {
        name: 'Resolve past operational service defects during contract renegotiations to rebuild enterprise trust',
        description: 'Address previous billing errors or check-in delays with concrete operational service-level agreements (SLAs).'
      },
      {
        name: 'Structure multi-year contract renewals with tiered revenue commitments and price indexation caps',
        description: 'Secure 3-year enterprise lodging partnerships guaranteeing long-term baseline commercial occupancy.'
      }
    ],
    twentyFirstCenturySkills: ['Account Management & Expansion', 'QBR Presentation Design', 'Commercial Retention', 'Executive Relationship Building'],
    background: `Executive Suites International is a 450-suite hotel in a major technology and research corridor. The hotel’s largest corporate client is \"Novus Software Group,\" a multinational software enterprise whose traveling developers, consultants, and executives generated 1,400 room nights over the past year, representing $350,000 in room revenue at a negotiated rate of $250 per night.

The annual corporate contract is up for renewal next month, but the relationship is at a dangerous crossroads:
1. Novus Software’s corporate travel manager informed the hotel that traveler satisfaction dropped to 74% over the past six months due to two recurring operational issues: delayed check-ins during peak Monday arrivals and chronic billing errors on corporate folios.
2. A rival hotel chain recently pitched Novus’s Chief Procurement Officer, offering to take over their entire travel program with a guaranteed $230 room rate and automated corporate billing integration.
3. However, an analysis of Novus Software’s corporate travel data revealed that their business is booming: they hired 300 new software engineers and anticipate their total travel footprint to expand to 2,500 room nights over the coming twelve months.

The Vice President of Global Commercial Sales wants to retain Novus Software, resolve their operational grievances, and expand the contract from 1,400 nights to 2,200 nights per year.

You and your partner (Strategic Account Directors and Corporate Retention Leads) are presenting your Corporate Account QBR & Renewal Pitch to the Vice President of Global Sales (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the client QBR agenda, Service-Level Agreement (SLA) operational guarantees, billing fixes, and the commercial proposal to expand the account to 2,200 nights.',
    judgeQuestions: [
      'How will our presentation reassure Novus Software that our past billing and check-in blunders will never happen again?',
      'How do we convince Novus to increase their commitment from 1,400 to 2,200 room nights with our hotel when a competitor is knocking on their door with a $230 rate?'
    ],
    benchmarkPoints: [
      'Execute a formal Quarterly Business Review (QBR): present transparent traveler spend analytics, room production metrics, and average traveler satisfaction benchmarks.',
      'Deploy the "Corporate Service-Level Agreement (SLA) Guarantee": commit to dedicated VIP Express check-in keys pre-cut at the desk and a 24-hour automated corporate e-folio audit pipeline, backed by a $50 credit for any billing discrepancy.',
      'Structure the "Volume Expansion Tier": offer to maintain the $250 rate for their baseline 1,400 nights, but drop to $235 for all incremental room nights once they cross 1,800 nights, defeating the competitor’s bid while expanding total revenue.',
      'Close a 2-Year Exclusive Renewal: expand the account to 2,200 room nights annually, growing total client account revenue from $350,000 to $530,000 while insulating the hotel from economic downturns.'
    ]
  }
];
