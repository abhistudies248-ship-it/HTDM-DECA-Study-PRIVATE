// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Pricing (10 Cases)
// Focuses on dynamic pricing algorithms, opaque discount channels, hurdle rates, cancellation fee structures, and total revenue management
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const pricingCases: DecaCaseStudy[] = [
  {
    id: 'pri-01',
    title: 'Dynamic Revenue Optimization & Rate Parity Strategy at The Cosmopolitan Tower',
    instructionalArea: 'Pricing',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Revenue Optimization & Senior Distribution Pricing Analyst',
    judgeRole: 'Vice President of Asset Revenue Management & Asset Ownership Principal',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the principles of dynamic pricing and yield management in lodging',
        description: 'Utilize automated algorithmic demand forecasting to adjust room rates across booking lead-time curves.'
      },
      {
        name: 'Manage online travel agency (OTA) rate parity and distribution commission costs',
        description: 'Enforce contractual rate parity rules while defending direct brand website Best Rate Guarantees (BRG).'
      },
      {
        name: 'Design price fencing and minimum length of stay (MLOS) restrictions during peak demand',
        description: 'Maximize total compressed revenue during high-demand multi-day festivals and citywide conventions.'
      },
      {
        name: 'Evaluate total guest spend profitability beyond room rate revenue (Total RevPAR / TRevPAR)',
        description: 'Account for ancillary spending across spa, casino, dining, and late check-out fee captures in rate calculations.'
      },
      {
        name: 'Formulate ethical and legal pricing transparency protocols regarding mandatory resort fees',
        description: 'Prevent deceptive drip pricing penalties by integrating all mandatory fees into the initial displayed rate.'
      }
    ],
    twentyFirstCenturySkills: ['Algorithmic Pricing Literacy', 'Revenue Modeling', 'Negotiation', 'Strategic Decision Making'],
    background: `The Cosmopolitan Tower is an 800-room luxury urban hotel and entertainment complex located in the center of a bustling convention and theatre district. The property generates $65 million in annual gross revenue across rooms, four signature restaurants, a destination rooftop pool club, and an integrated spa.

Over the past two quarters, the property's pricing strategy has suffered from major structural inefficiencies:
1. Online Travel Agencies (OTAs such as Expedia and Booking.com) account for an unsustainable 48% of total room nights, costing the property over $3.2 million annually in 18% commission fees.
2. Rogue third-party wholesale bed-banks have leaked discounted non-public contract rates into consumer metasearch engines (Google Hotels and Trivago), undercutting the hotel's direct website by $25 to $40 per night. This violates contractual rate parity agreements and has triggered hundreds of direct-booking best rate guarantee claims.
3. During major 3-day holiday weekends and stadium concert nights, the revenue management software failed to implement minimum length of stay (MLOS) price fences, resulting in the hotel selling out completely on Saturday night at high rates while leaving Friday and Sunday nights with an anemic 48% occupancy.
4. Recent regulatory warnings from federal consumer protection bureaus regarding hidden "Urban Resort Amenity Fees" require the hotel to overhaul its displayed pricing structure to show all-in transparent totals.

The ownership group expects a total pricing overhaul that reduces third-party distribution commissions, restores rate parity integrity, maximizes compressed weekend RevPAR, and increases direct booking conversion.

You and your partner (Director of Revenue Optimization and Senior Distribution Pricing Analyst) must present a comprehensive Dynamic Pricing & Revenue Strategy to the Vice President of Asset Revenue Management (the judge).`,
    challenge: 'Deliver a 15-minute pricing strategy presentation to the Vice President of Asset Revenue Management. Formulate solutions for OTA parity leaks, establish length-of-stay price fences, model Total RevPAR profitability, and ensure compliant transparent rate displays.',
    judgeQuestions: [
      'How can we effectively shut down rogue wholesale bed-banks from leaking discounted room rates onto consumer search engines without losing international tour operator business?',
      'What specific pricing fences should we configure for the upcoming four-day Fourth of July weekend to prevent one-night Saturday sellouts?'
    ],
    benchmarkPoints: [
      'Implement automated rate-tracking software with test-booking audits to trace leaking wholesalers; enforce strict contractual penalties and cut off inventory feeds for repeat parity violators.',
      'Deploy strict hurdle rates and a 3-night Minimum Length of Stay (MLOS) restriction for holiday and high-compression event weekends to balance shoulder nights.',
      'Transition to upfront all-in pricing displays across all digital channels, preempting regulatory penalties while differentiating the brand through pricing honesty.',
      'Optimize Total RevPAR by shifting focus toward high-spending loyalty members who generate 40%+ higher ancillary spend in on-property bars, dining, and spa venues.'
    ]
  },
  {
    id: 'pri-02',
    title: 'Mandatory Resort Fee Transparency & Pricing Integrity: Sun Valley Grand Resort',
    instructionalArea: 'Pricing',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Revenue Directors & Consumer Compliance Strategists',
    judgeRole: 'General Manager of Sun Valley Grand Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze legal regulations and consumer protection laws against deceptive \"drip pricing\"',
        description: 'Ensure compliance with Federal Trade Commission (FTC) guidelines and state Attorney General enforcement.'
      },
      {
        name: 'Structure transparent all-inclusive rate displays across direct and third-party channels',
        description: 'Eliminate surprise $55/night \"resort amenity fees\" disclosed only on the final payment screen.'
      },
      {
        name: 'Bundle high-value guest amenities to justify higher upfront baseline room rates',
        description: 'Include high-speed Wi-Fi, mountain bike rentals, daily yoga classes, and valet parking in the rate.'
      },
      {
        name: 'Evaluate consumer price elasticity when moving from split fees to honest total pricing',
        description: 'Model booking conversion rates comparing a $245 + $55 fee display versus an all-in $300 display.'
      },
      {
        name: 'Leverage pricing transparency as a brand trust differentiator in luxury hospitality',
        description: 'Promote a \"No Surprise Fees Guarantee\" marketing campaign to win disaffected travelers.'
      }
    ],
    twentyFirstCenturySkills: ['Ethical Pricing', 'Consumer Psychology', 'Regulatory Compliance', 'Strategic Communication'],
    background: `Sun Valley Grand Resort is a premier 450-room destination resort nestled in a pristine mountain valley. For the past eight years, the resort has utilized a controversial pricing tactic common in the lodging industry: advertising a low base room rate of $199 on search engines and OTAs, only to add a mandatory $58/night \"Mountain Resort & Wellness Fee\" on the final checkout screen.

This deceptive \"drip pricing\" model has sparked intense consumer backlash:
1. Online guest reviews frequently cite \"hidden scam fees,\" and the resort's TripAdvisor rating has plummeted from 4.6 to 3.8 stars. Front desk staff spend an average of 14 minutes per departure arguing with furious guests demanding resort fee refunds.
2. The state Attorney General’s Consumer Protection Division recently launched a formal investigation into the resort for unfair and deceptive trade practices, threatening civil penalties of up to $10,000 per violation.
3. Competitor luxury properties have already transitioned to transparent all-in pricing, earning glowing editorial praise in national travel publications.

The General Manager recognizes that the status quo is untenable. However, property owners fear that if the resort displays an all-in price of $257 on Expedia while competitors display deceptive base rates of $199, Sun Valley’s booking click-through rate will collapse.

You and your partner (Revenue Directors and Consumer Compliance Strategists) are presenting your Resort Fee Restructuring & Pricing Transparency Roadmap to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the transition to 100% upfront pricing, amenity bundling, competitive positioning, and consumer trust marketing.',
    judgeQuestions: [
      'If our competitor advertises $199 and we advertise $257 all-in on Google Hotels, how will we prevent price-sensitive consumers from booking the competitor?',
      'If we fold the $58 resort fee into the base room rate, will we have to pay higher OTA commission percentages to Expedia and Booking.com?'
    ],
    benchmarkPoints: [
      'Shift to upfront all-in pricing immediately to achieve total FTC compliance and eliminate the pending state AG investigation liability.',
      'Address the OTA commission issue: negotiate net-effective margin bands with OTAs or channel consumers toward direct website booking where full transparent benefits are emphasized.',
      'Launch the "Honest Luxury: No Hidden Fees" campaign, turning pricing transparency into a powerful PR differentiator that drives direct brand loyalty.',
      'Eliminate front desk fee disputes, recovering over $180,000 annually in forced fee write-offs and saving 1,200 hours in frontline customer service confrontation.'
    ]
  },
  {
    id: 'pri-03',
    title: 'Surge Pricing & High-Compression Yielding During Citywide Mega-Events: Metro Arena Hotel',
    instructionalArea: 'Pricing',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Dynamic Pricing & Group Revenue Strategist',
    judgeRole: 'General Manager of Metro Arena Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply economic principles of supply inelasticity and surge pricing during compression events',
        description: 'Maximize RevPAR when market room demand exceeds available city hotel supply by 300%.'
      },
      {
        name: 'Design stringent non-refundable cancellation and deposit policies for high-demand dates',
        description: 'Require 100% non-refundable prepayment at time of booking for mega-concert and championship weekends.'
      },
      {
        name: 'Implement strategic room-type upselling and premium suite yield management',
        description: 'Price presidential and multi-bedroom suites at 5x normal rates for corporate VIP entourages.'
      },
      {
        name: 'Evaluate ethical boundaries and consumer backlash risks regarding extreme surge pricing',
        description: 'Prevent accusations of price-gouging while optimizing revenue during unprecedented demand.'
      },
      {
        name: 'Manage group room block commitments versus high-yielding transient market demand',
        description: 'Calculate displacement analysis to avoid committing low contractual rates during peak compression.'
      }
    ],
    twentyFirstCenturySkills: ['Displacement Modeling', 'Dynamic Yielding', 'Risk Assessment', 'Negotiation'],
    background: `Metro Arena Hotel is a 600-room hotel situated directly across the plaza from an 80,000-seat multi-purpose stadium and downtown arena. Next summer, the stadium will host a historic global pop superstar stadium concert series across four consecutive nights (Thursday through Sunday), followed three weeks later by the National College Basketball Final Four championship.

During previous major concert events, the hotel’s revenue team made disastrous pricing blunders:
- For a major summer country music festival, the hotel opened its booking inventory eleven months in advance at standard base rates of $219. Within 45 minutes of the concert tour announcement, the entire hotel sold out at $219, leaving millions of dollars of market demand on the table while surrounding hotels priced at $650 to $850 per night.
- Worse, scalpers and speculative leisure bookers reserved rooms using flexible \"pay-at-hotel\" reservations, and when resale ticket prices dipped 48 hours before the concert, 140 rooms were abruptly cancelled without penalty, leaving the hotel with last-minute unsold rooms.

With the upcoming global superstar tour and Final Four, market analysts project the city's available hotel rooms will be completely exhausted within hours of tickets going on sale. The General Manager has demanded a foolproof, high-yield revenue and pricing framework.

You and your partner (Director of Dynamic Pricing and Group Revenue Strategist) are presenting your Mega-Event High-Compression Pricing Architecture to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing algorithmic hurdle rates, 4-night minimum stay restrictions, 100% non-refundable advance payment fences, and displacement analysis for group blocks.',
    judgeQuestions: [
      'If we price standard king rooms at $795 per night (a 350% increase over our normal $219 rate), how do we defend against public accusations of predatory price-gouging?',
      'How do we handle a long-time corporate client who demands their contracted $189 negotiated corporate rate during the concert weekend?'
    ],
    benchmarkPoints: [
      'Implement strict "Blackout Dates" in corporate negotiated contracts, lawfully suspending corporate discount rates during citywide compressed special events.',
      'Enforce a strict 4-Night Minimum Length of Stay (MLOS) spanning Thursday through Monday, locking in full weekend occupancy and preventing single-night Saturday gaps.',
      'Mandate 100% Non-Refundable Advance Purchase (NRAP) terms with immediate credit card settlement upon booking, completely eliminating speculative booking cancellations.',
      'Project record-breaking financial performance: generating $780 ADR at 99% occupancy across the 4-night concert run yields $1.85 million in room revenue—a $1.3 million net lift.'
    ]
  },
  {
    id: 'pri-04',
    title: 'Corporate Negotiated Rate Fencing & Dynamic Discount Tiers: Financial District Suites',
    instructionalArea: 'Pricing',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Corporate Accounts Pricing Director & B2B Revenue Analyst',
    judgeRole: 'Vice President of Global Sales & Corporate Revenue Strategy',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze corporate negotiated rate structures: Fixed LRA vs. Non-LRA vs. Dynamic Tiered Pricing',
        description: 'Examine Last Room Availability (LRA) contractual commitments and their impact on high-demand yield.'
      },
      {
        name: 'Conduct client account production audits to verify contracted room-night volume compliance',
        description: 'Audit corporate accounts that promised 1,500 annual room nights to secure deep discounts but produced only 400.'
      },
      {
        name: 'Transition enterprise clients from rigid fixed rates to dynamic percentage-off-BAR contracts',
        description: 'Replace $195 fixed rates with a floating 15% discount off Best Available Rate (BAR) to preserve yield.'
      },
      {
        name: 'Design value-added non-rate concessions to protect ADR during corporate contract renegotiations',
        description: 'Concede complimentary Wi-Fi, fitness center passes, and breakfast rather than discounting base room rates.'
      },
      {
        name: 'Calculate net corporate account contribution factoring in cancellation frequency and amenity usage',
        description: 'Determine total account profitability beyond gross booked room nights.'
      }
    ],
    twentyFirstCenturySkills: ['B2B Contract Negotiation', 'Financial Auditing', 'Analytical Modeling', 'Strategic Communication'],
    background: `Financial District Suites is a 380-suite upscale hotel catering heavily to investment banks, management consultancies, and corporate law firms. Corporate negotiated contracts account for 55% of total weekday room occupancy.

For the upcoming annual corporate RFP contracting season, the hotel faces severe revenue leakage:
1. Historically, the hotel granted \"Fixed Last Room Availability (LRA)\" rates of $185 per night to 14 major corporate clients. Under LRA terms, the client has the legal right to purchase the last available room in the hotel at $185, even on nights when citywide conventions push standard market rates to $450. This cost the property an estimated $420,000 in lost yield last year alone.
2. An audit of corporate account production revealed that several Fortune 500 accounts failed to deliver their contracted volume: one global consulting firm promised 2,000 room nights to secure an aggressive $170 rate, but generated only 480 room nights.
3. Corporate travel procurement managers are aggressively demanding 10% rate cuts for the coming year, citing economic uncertainty.

The Vice President of Corporate Revenue Strategy has declared that the hotel must eliminate damaging LRA clauses, hold underperforming accounts accountable, and transition corporate clients to modern Dynamic Floating Tiered discounts.

You and your partner (Corporate Accounts Pricing Director and B2B Revenue Analyst) are presenting your Corporate RFP Pricing & Contract Overhaul to the Vice President (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the elimination of LRA terms, implementation of Dynamic Discount off BAR, account re-tiering based on audited production, and non-rate amenity concessions.',
    judgeQuestions: [
      'If we refuse to grant Fixed LRA rates to our largest investment bank client, what is our contingency if they threaten to move their 2,000 room nights to a competitor across the street?',
      'How does a Dynamic Percentage-off-BAR pricing model benefit both the corporate travel manager and our hotel’s revenue bottom line?'
    ],
    benchmarkPoints: [
      'Eliminate Fixed LRA terms across 100% of corporate accounts; replace with Non-LRA (NLRA) terms allowing the hotel to yield rooms dynamically during peak compression.',
      'Transition underperforming accounts to Dynamic Floating Discounts: offer 12% to 18% off prevailing BAR, ensuring the hotel automatically captures rate upside during peak periods.',
      'Re-tier accounts based on actual audited production: demote accounts producing under 500 nights to lower discount tiers while rewarding true high-volume producers.',
      'Offer non-rate concessions (complimentary early check-in, late checkout, premium Wi-Fi) to satisfy travel procurement managers without eroding base ADR.'
    ]
  },
  {
    id: 'pri-05',
    title: 'Optimal Overbooking Thresholds & Wash-Factor Math: Pacific Gateway Airport Hotel',
    instructionalArea: 'Pricing',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Revenue Optimization Specialist & Front Office Operations Lead',
    judgeRole: 'General Manager of Pacific Gateway Airport Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Calculate statistical overbooking thresholds based on historical no-show, cancellation, and walk rates',
        description: 'Apply probability distributions to balance the cost of a spoiled empty room versus the cost of a guest walk.'
      },
      {
        name: 'Analyze \"wash factors\" across corporate group blocks, flight crew allotments, and transient leisure bookings',
        description: 'Anticipate attrition where group meeting planners release 15% of blocked rooms 30 days prior to arrival.'
      },
      {
        name: 'Quantify direct and indirect costs associated with walking an overbooked guest',
        description: 'Factor in competitor room billing, Uber transit vouchers, $100 compensation checks, and lifetime brand goodwill loss.'
      },
      {
        name: 'Establish frontline standard operating procedures for executing professional, empathetic guest walks',
        description: 'Protect hotel loyalty members by establishing strict walk-exemption hierarchies.'
      },
      {
        name: 'Utilize automated PMS revenue tools to manage dynamic overbooking levels in real time',
        description: 'Constrain overbooking percentages automatically when local comp set hotels are fully booked.'
      }
    ],
    twentyFirstCenturySkills: ['Probability & Statistics', 'Operational Risk Management', 'Empathy in Crisis', 'Critical Decision Making'],
    background: `Pacific Gateway Airport Hotel is a high-volume 500-room property operating in a 24/7 airport market. With airline flight crew contracts, stranded passenger vouchers, and corporate transient travelers, the hotel experiences erratic arrival and departure swings.

Over the past four months, the hotel has oscillated between two costly operational extremes:
- In January and February, fear of guest walks caused the front office manager to clamp down on overbooking, refusing to take reservations beyond 100% capacity. Because the property experiences a historical average of 8% no-shows and same-day cancellations, the hotel finished peak weeknights with 25 to 40 empty rooms that went \"spoiled\" (permanently unsold), costing the property $280,000 in unrecoverable room revenue.
- In March, the revenue manager aggressively overbooked the property by 12% on a night when a sudden thunderstorm grounded dozens of flights. As stranded travelers checked in, no-shows dropped to 1%, forcing the hotel to \"walk\" 32 furious guests to a budget motel 15 miles away. The direct walk expenses (competitor room cost, taxi vouchers, compensation gift cards) totaled $14,500, not including scathing online reviews and the loss of two lucrative corporate accounts.

The General Manager demands a mathematically rigorous, operationally disciplined Overbooking Policy that maximizes occupancy while keeping guest walks at near-zero levels.

You and your partner (Revenue Optimization Specialist and Front Office Operations Lead) are presenting your Overbooking Optimization Plan to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation presenting the mathematical wash-factor model, dynamic overbooking thresholds based on local market compression, and frontline walk-exemption hierarchies.',
    judgeQuestions: [
      'What exact formula or criteria determines whether we set tonight’s overbooking cap at 3%, 6%, or 0%?',
      'If we must walk a guest tonight, who is the first person we select, and who is absolutely protected from being walked?'
    ],
    benchmarkPoints: [
      'Model the Cost of Spoilage ($180 net room margin) versus the Cost of a Walk ($350 direct cost + reputation penalty) to calculate the optimal overbooking threshold (historically 4.5% to 6.2%).',
      'Deploy dynamic overbooking throttling: if neighboring airport hotels are at 98%+ occupancy, immediately drop overbooking to 0% because walked guests cannot be accommodated locally.',
      'Establish a strict Walk Exemption Hierarchy: never walk VIP loyalty members, unaccompanied minors, elderly guests, or direct website bookers; select single-night, OTA third-party leisure reservations arriving after 11:00 PM.',
      'Execute the "White-Glove Walk Protocol": pre-arrange transport, prepay premier competitor lodging, provide a personalized written apology from the GM, and award 20,000 loyalty points.'
    ]
  },
  {
    id: 'pri-06',
    title: 'Total Revenue Management (TrevPAR) & Casino Resort Yielding: Mirage Oasis',
    instructionalArea: 'Pricing',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Integrated Resort Pricing Directors & Total Revenue Analysts',
    judgeRole: 'Vice President of Casino Hospitality & Financial Yield',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Distinguish between Room RevPAR and Total Revenue Per Available Room (TrevPAR)',
        description: 'Measure complete guest wallet capture across gaming, nightlife, fine dining, retail, and spa.'
      },
      {
        name: 'Calculate Theoretical Casino Loss (Theo) and its role in dynamic room pricing and comping',
        description: 'Evaluate high-gaming-value guests who receive complimentary rooms because their expected gaming spend exceeds room rates.'
      },
      {
        name: 'Design dynamic pricing algorithms for non-room resort assets (daybeds, cabanas, nightclub tables)',
        description: 'Yield poolside VIP cabana minimum food & beverage spends from $1,500 to $6,000 based on DJ talent.'
      },
      {
        name: 'Formulate predictive guest lifetime value (CLV) scoring for hotel reservations',
        description: 'Prioritize room allocations to guests with documented high historical non-room spending profiles.'
      },
      {
        name: 'Balance luxury leisure transient guest pricing with casino gaming host room allocations',
        description: 'Resolve inventory conflicts between high-paying cash guests and casino host complimentary holds.'
      }
    ],
    twentyFirstCenturySkills: ['Total Revenue Optimization', 'Predictive Analytics', 'Cross-Functional Strategy', 'Financial Modeling'],
    background: `Mirage Oasis is an expansive 1,200-room integrated casino resort featuring an 80,000-square-foot gaming floor, ten fine-dining restaurants, a world-famous pool dayclub, and an arena.

Historically, the hotel division and the casino gaming division operated as disconnected rivals:
1. The hotel revenue team focused strictly on Room RevPAR, boasting about achieving a record ADR of $310 by filling 400 rooms with convention tourists and leisure travelers. However, these convention guests spent almost nothing in the casino, ate at fast-casual food courts, and departed without contributing to other resort outlets.
2. Simultaneously, casino marketing hosts complained bitterly that the hotel revenue team refused to release rooms for \"high-theoretical-win\" VIP casino players who routinely wager $15,000 per weekend at blackjack and baccarat tables because the hotel was \"sold out to $310 cash tourists.\"
3. Meanwhile, the resort’s premier poolside dayclub cabanas were priced at flat static rates of $1,000 every Saturday, despite massive unfulfilled demand that could easily command $5,000 table minimums when top EDM DJs perform.

The executive committee has ordered a complete transition to Total Revenue Management (Total RevPAR / TrevPAR), uniting hotel pricing, casino gaming reinvestment, and nightlife yield management into a unified algorithmic strategy.

You and your partner (Integrated Resort Pricing Directors and Total Revenue Analysts) are presenting your Total Revenue Optimization Blueprint to the Vice President of Casino Hospitality (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing TrevPAR optimization, casino theoretical loss room comping algorithms, dynamic pool cabana yielding, and customer lifetime value scoring.',
    judgeQuestions: [
      'Why should our hotel give away a complimentary $400 room to a casino player when a leisure tourist is standing by ready to pay cash?',
      'How does our revenue management algorithm dynamically price a pool cabana on a Saturday afternoon when demand spikes unexpectedly?'
    ],
    benchmarkPoints: [
      'Implement TrevPAR as the primary resort KPI: evaluate reservations on Total Customer Value (Room + Gaming Theo + F&B + Spa), proving a $0 comp room player with $3,000 gaming Theo is 8x more profitable than a $310 cash tourist.',
      'Integrate the PMS with the Casino Player Tracking system to automate real-time room reinvestment thresholds based on average daily theoretical gaming win (ADT).',
      'Deploy dynamic surge pricing for poolside VIP cabanas: utilize minimum spend thresholds tied directly to DJ headline talent, lifting dayclub gross revenue by 38%.',
      'Establish automated inventory release triggers: casino host unbooked room holds automatically release back to public cash sales 72 hours prior to arrival to eliminate spoilage.'
    ]
  },
  {
    id: 'pri-07',
    title: 'Opaque Discount Channels, Flash Sales & Brand Equity Protection: The Sovereign Hotel',
    instructionalArea: 'Pricing',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Digital Revenue Strategists & Brand Protection Leads',
    judgeRole: 'Managing Director of The Sovereign Luxury Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze opaque distribution channels and fenced private-sale platforms in lodging',
        description: 'Examine Hotwire, Priceline Express Deals, Secret Escapes, and closed-user-group loyalty discounts.'
      },
      {
        name: 'Protect luxury brand equity and public price integrity while clearing distressed inventory',
        description: 'Disclose room discounts behind authenticated membership logins or hidden brand identities.'
      },
      {
        name: 'Prevent rate dilution and cannibalization of full-paying retail transient guests',
        description: 'Ensure existing direct retail bookers cannot easily discover or access deeply discounted opaque rates.'
      },
      {
        name: 'Formulate dynamic inventory throttling for flash sale promotions',
        description: 'Cap opaque room allotments strictly to distressed Sunday and midweek shoulder nights.'
      },
      {
        name: 'Calculate net contribution margins on opaque bookings after distribution merchant fees',
        description: 'Evaluate profitability of $140 opaque rates against variable room cleaning and utility costs.'
      }
    ],
    twentyFirstCenturySkills: ['Brand Governance', 'Channel Management', 'Margin Analysis', 'Strategic Discretion'],
    background: `The Sovereign is a prestigious 280-room independent luxury boutique hotel in an upscale cultural capital. The hotel prides itself on an elite reputation, commanding published rack rates of $450 to $650 per night.

However, during off-season winter months (January through March), the hotel faces severe inventory distress: midweek Tuesday and Wednesday night occupancy drops to an anemic 32%, with over 180 luxury rooms sitting empty every night.

The sales team made a critical mistake last winter by launching a public 50%-off flash sale on the hotel’s public homepage and social media accounts. While it generated 300 bookings, the public discounting caused catastrophic brand damage:
- Luxury corporate clients who had contracted annual negotiated rates of $350 were outraged to see public rates at $225, demanding immediate contract rate reductions.
- Several high-profile repeat guests complained that the public flash sale attracted a rowdy, party-oriented clientele that disrupted the hotel’s tranquil, refined ambiance.
- Competitor luxury hotels openly mocked The Sovereign in regional hospitality panels for \"panicking and destroying rate integrity.\"

The Managing Director has declared that the hotel must fill distressed off-season rooms to cover fixed payroll costs, but must do so through strictly fenced, opaque, and closed-user-group channels that maintain total brand secrecy and preserve public pricing integrity.

You and your partner (Digital Revenue Strategists and Brand Protection Leads) are presenting your Opaque Yielding & Brand Protection Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the strategic deployment of opaque channels, private closed-user flash sales, rate dilution fences, and margin preservation.',
    judgeQuestions: [
      'If our hotel appears as an unnamed 5-star hotel on Priceline or Hotwire, how do we prevent savvy luxury travelers from guessing our identity before they book?',
      'How do we ensure that guests who book through steep opaque discounts don’t demand the same VIP suite upgrades as guests who paid $600 full retail?'
    ],
    benchmarkPoints: [
      'Deploy opaque distribution channels (Priceline Name-Your-Own-Price / Express Deals, Hotwire) where brand identity is shielded until after non-refundable booking completion.',
      'Utilize closed-user-group (CUG) private sales (e.g., Secret Escapes, luxury credit card invitation-only portals) requiring password logins to prevent public search engine indexing.',
      'Enact strict inventory fences: release opaque inventory only within a 5-day booking window on nights with forecasted occupancy below 45%, protecting baseline retail bookers.',
      'Establish clear operational room-assignment tiers: assign standard lower-floor rooms to opaque bookers, reserving premium skyline view suites for full-paying direct guests.'
    ]
  },
  {
    id: 'pri-08',
    title: 'Non-Refundable Advance Purchase Fencing vs. Flexible Cancellation: Harbor View Hotel',
    instructionalArea: 'Pricing',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Pricing Architecture & Consumer Behavior Analyst',
    judgeRole: 'General Manager of Harbor View Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design tiered cancellation fee policies and Non-Refundable Advance Purchase (NRAP) rate fences',
        description: 'Structure price differentials between 100% non-refundable prepaid rates and flexible 24-hour cancellation rates.'
      },
      {
        name: 'Calculate the mathematical optimal discount spread between flexible and non-refundable rates',
        description: 'Determine whether a 10%, 15%, or 20% discount minimizes cancellation volatility while maximizing committed cash flow.'
      },
      {
        name: 'Analyze guest cancellation curves and uncommitted pipeline risk in urban hotels',
        description: 'Mitigate the phenomenon of \"speculative double-booking\" where travelers reserve multiple hotels and cancel at the last minute.'
      },
      {
        name: 'Establish fair, compliant exceptions protocols for non-refundable bookings during medical emergencies',
        description: 'Provide credit vouchers rather than cash refunds to maintain goodwill while preserving recognized cash flow.'
      },
      {
        name: 'Evaluate the working capital and cash-flow benefits of advance payment settlement',
        description: 'Utilize upfront prepaid reservation cash to fund off-season operational working capital.'
      }
    ],
    twentyFirstCenturySkills: ['Financial Risk Mitigation', 'Consumer Decision Architecture', 'Cash Flow Analysis', 'Policy Design'],
    background: `Harbor View Hotel is a 340-room waterfront commercial property. In an effort to be consumer-friendly, the hotel has long maintained an ultra-lenient cancellation policy: all guests can cancel their reservations free of charge until 6:00 PM on the day of arrival.

In today's digital travel era, this lenient policy has turned into a financial disaster. With travel comparison apps and automated price-tracking bots (like Google Hotels and Hopper) notifying travelers when hotel rates drop, travelers routinely engage in \"speculative booking\": they reserve rooms at Harbor View months in advance without paying a dime, and if they find a cheaper Airbnb or competitor deal two days before arrival, they cancel Harbor View with a single click.

The numbers are alarming:
- The hotel experiences an average cancellation rate of 34% across all booked transient reservations.
- On peak summer weekends, up to 75 rooms are cancelled within 48 hours of check-in, leaving the hotel unable to resell the rooms at full market value.
- The hotel suffers from erratic revenue forecasting and unstable working capital.

Management wants to restructure its pricing architecture by introducing a multi-tiered rate fencing model: offering an attractive Non-Refundable Advance Purchase (NRAP) discount for committed bookers, alongside a premium-priced Flexible Cancellation rate.

You and your partner (Director of Pricing Architecture and Consumer Behavior Analyst) are presenting your Rate Fencing & Cancellation Restructuring Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the optimal discount percentage for NRAP rates, stricter cancellation deadlines for flexible rates, cash-flow benefits, and compassionate medical exception SOPs.',
    judgeQuestions: [
      'What is the ideal price discount spread for the Non-Refundable rate: if it’s too small (5%), nobody buys it; if it’s too large (25%), we erode our ADR?',
      'How should our front office handle a guest who purchased a non-refundable rate but suffered a documented medical emergency and demands a full cash refund?'
    ],
    benchmarkPoints: [
      'Implement an optimal 15% discount spread for Non-Refundable Advance Purchase (NRAP) bookings paid in full at time of booking, capturing 42% of transient volume into committed cash.',
      'Tighten the Flexible Cancellation window from 6:00 PM day-of-arrival to a mandatory 72-hour advance cancellation deadline, curtailing speculative same-day cancellations.',
      'Mitigate refund disputes through compassionate voucher credits: offer non-refundable guests facing verified medical emergencies a 12-month rebooking credit voucher rather than cash refunds.',
      'Reduce overall property cancellation rate from 34% down to 14%, stabilizing occupancy forecasting and accelerating $1.2 million in advance operating cash flow.'
    ]
  },
  {
    id: 'pri-09',
    title: 'Food & Beverage Dynamic Pricing & Happy Hour Yielding: The Skyline Grill & Lounge',
    instructionalArea: 'Pricing',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'F&B Revenue Directors & Culinary Pricing Analysts',
    judgeRole: 'Director of Hotel Food & Beverage Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply dynamic yield management principles to restaurant seating capacity and table turns',
        description: 'Yield dining reservations during high-demand 7:00-9:00 PM peak periods versus 5:00 PM early seatings.'
      },
      {
        name: 'Design price discrimination strategies through happy hour, tasting flight, and prix-fixe menus',
        description: 'Utilize discounted early-evening appetizer pricing to fill empty dining rooms before the dinner rush.'
      },
      {
        name: 'Implement variable beverage pricing algorithms based on ingredient inflation and time of day',
        description: 'Utilize digital POS menus to adjust craft cocktail pricing between weekday afternoons and peak weekend nights.'
      },
      {
        name: 'Establish minimum food & beverage spend guarantees for prime seating and private dining rooms',
        description: 'Contract non-refundable F&B minimums for panoramic skyline window booths on Friday and Saturday nights.'
      },
      {
        name: 'Evaluate consumer acceptance and ethical perceptions of dynamic restaurant menu pricing',
        description: 'Avoid consumer anger regarding perceived \"surge pricing\" on food by framing adjustments as off-peak promotional discounts.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary Economics', 'Capacity Yielding', 'Consumer Psychology', 'Communication'],
    background: `The Skyline Grill & Lounge is a high-volume rooftop restaurant and cocktail lounge located on the 24th floor of a premier 500-room luxury hotel. Featuring panoramic city skyline views, the venue generates $6.8 million in annual F&B gross revenue.

Despite its stunning views, the restaurant suffers from extreme capacity imbalances:
1. Between 7:00 PM and 9:15 PM on Friday and Saturday nights, the restaurant has a two-hour waitlist, turning away hundreds of prospective diners. Prime window booths sit occupied for 2.5 hours by guests who order only a single round of drinks and an appetizer.
2. Conversely, between 4:30 PM and 6:30 PM, the dining room is a virtual ghost town, with only 12% table occupancy while twelve service staff stand idle.
3. Rapid wholesale food inflation (beef up 28%, seafood up 22%) has compressed the restaurant’s gross food profit margin from 72% down to 61%.
4. The lounge recently experimented with crude \"surge pricing\" on cocktails on Saturday night, but customers revolted when they noticed a margarita priced at $16 at 6:00 PM jumped to $22 at 9:30 PM on the digital QR menu, triggering scathing Reddit and Yelp reviews.

The Director of Food & Beverage requires a sophisticated F&B Dynamic Yielding and Menu Pricing Strategy that fills early-evening tables, maximizes table turns during peak dinner hours, and protects culinary profitability without causing customer revolt.

You and your partner (F&B Revenue Directors and Culinary Pricing Analysts) are presenting your plan to the Director of F&B Operations (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing table-turn yielding, early-bird prix-fixe menus, prime window booth minimum spends, and transparent psychological menu pricing.',
    judgeQuestions: [
      'How do we dynamically yield cocktail and dinner prices without creating consumer backlash over restaurant \"surge pricing\"?',
      'How will our service staff politely manage table turns when a party at a prime window booth has finished their meal but refuses to leave during the 8:00 PM dinner rush?'
    ],
    benchmarkPoints: [
      'Avoid negative "surge pricing" optics; utilize positive framing: establish standard prime-time dinner menu prices and offer attractive "Sunset Tasting" discounts (e.g., $48 three-course prix-fixe from 4:30-6:00 PM).',
      'Institute a 2-hour dining reservation policy for peak 7:00-9:30 PM seatings, clearly communicated upon booking, paired with a $150/guest minimum F&B spend for premier window tables.',
      'Deploy the "Lounge Sunset Transition": offer half-price craft appetizers and local draft beers between 4:30 PM and 6:00 PM to capture after-work corporate professionals and fill early seats.',
      'Achieve a projected $450,000 annual net profit lift by increasing early-evening table turns by 40% and optimizing high-margin craft cocktail sales.'
    ]
  },
  {
    id: 'pri-10',
    title: 'Spa & Championship Golf Dynamic Tee-Time Pricing: Whispering Pines Country Club & Lodge',
    instructionalArea: 'Pricing',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Resort Ancillary Revenue Directors & Yield Management Specialists',
    judgeRole: 'Managing Director of Whispering Pines Golf & Spa Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Apply dynamic yield pricing principles to perishable non-room appointment inventory',
        description: 'Adjust golf tee-time rates and spa treatment slots dynamically based on weather, day of week, and booking pace.'
      },
      {
        name: 'Design peak vs. off-peak pricing tiers for high-demand resort amenities',
        description: 'Yield prime 8:00-10:00 AM Saturday morning tee times at $275 while pricing 2:30 PM twilight slots at $95.'
      },
      {
        name: 'Mitigate appointment no-shows through automated deposits and cancellation fee structures',
        description: 'Enforce 48-hour cancellation policies with full fee capture on luxury massage and hydrotherapy appointments.'
      },
      {
        name: 'Package bundled cross-outlet resort experiences to drive off-peak facility utilization',
        description: 'Pair low-demand Tuesday morning spa facials with complimentary afternoon golf green fees and lunch.'
      },
      {
        name: 'Evaluate the contribution of ancillary dynamic pricing to overall resort Net Operating Income (NOI)',
        description: 'Demonstrate how dynamic tee-time and spa yielding generates $600,000 in pure high-margin profit.'
      }
    ],
    twentyFirstCenturySkills: ['Capacity Utilization', 'Ancillary Monetization', 'Algorithmic Yielding', 'Strategic Planning'],
    background: `Whispering Pines Country Club & Lodge is an upscale 240-room destination resort featuring an 18-hole championship golf course designed by a golf legend and a 16-treatment-room luxury alpine wellness spa.

The resort's ancillary amenities suffer from severe pricing inefficiencies:
1. The Golf Course: Operating on static, rigid pricing ($185 per round, all day, every day). On Saturday mornings, the tee sheet is completely booked with a waiting list of 80 golfers who would happily pay $300+. Meanwhile, on Tuesday and Wednesday afternoons, the golf course sits nearly empty with only 14 rounds played, forfeiting thousands in potential green fees, golf cart rentals, and clubhouse beverage sales.
2. The Luxury Spa: Operates on a static printed brochure menu. On rainy weekend afternoons, all 16 treatment rooms are fully booked with dozens of hotel guests turned away. Conversely, on sunny weekday mornings, 10 of the 16 therapists sit in the break room on hourly base pay with zero appointments booked.
3. No-Shows: The spa loses an average of $3,800 every weekend due to guests booking multiple massage appointments and failing to show up, knowing the hotel does not strictly enforce cancellation fees.

The Managing Director demands a modern Dynamic Ancillary Pricing Engine across both golf and spa operations to maximize utilization and revenue per available appointment hour (RevPASH).

You and your partner (Resort Ancillary Revenue Directors and Yield Management Specialists) are presenting your Dynamic Ancillary Yielding Blueprint to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing dynamic tee-time pricing software, off-peak spa promotional packages, strict appointment deposit policies, and financial ROI projections.',
    judgeQuestions: [
      'If our golf course dynamically adjusts tee-time prices based on weather, what happens when a golfer books an $85 twilight round and arrives to find perfect 75-degree sunshine?',
      'How will our spa therapists respond to dynamic pricing if their commission is based on treatment cost and they are assigned discounted Tuesday morning appointments?'
    ],
    benchmarkPoints: [
      'Deploy automated dynamic golf tee-time algorithms: yield green fees from $95 (midweek twilight) to $295 (prime weekend morning) based on 14-day rolling booking pace and weather forecasts.',
      'Transition the spa to dynamic capacity yielding: offer "Midweek Wellness Rejuvenation" pricing (25% off 9:00 AM - 1:00 PM Tuesday-Thursday slots) while yielding peak weekend slots at premium rates.',
      'Protect therapist compensation: guarantee therapist commission percentages based on standard baseline menu rates, ensuring staff support off-peak client filling.',
      'Enforce strict cancellation policies: require credit card pre-authorization with 100% forfeiture for cancellations within 24 hours of appointment time, reducing no-shows by 85%.'
    ]
  }
];
