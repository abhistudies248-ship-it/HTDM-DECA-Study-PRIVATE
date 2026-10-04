// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Market Planning (10 Cases)
// Focuses on target market segmentation, competitive SWOT, market share index (MPI/ARI/RGI), and brand positioning
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const marketPlanningCases: DecaCaseStudy[] = [
  {
    id: 'mp-01',
    title: 'Market Repositioning & Competitive STR Share Recovery for The Renaissance Wharf',
    instructionalArea: 'Market Planning',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Strategic Market Planning & Commercial Hotel Strategy Lead',
    judgeRole: 'Regional Vice President of Commercial Performance & Asset Strategy',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze competitive Smith Travel Research (STR) benchmarking metrics in lodging',
        description: 'Interpret Market Penetration Index (MPI), Average Rate Index (ARI), and Revenue Generation Index (RGI).'
      },
      {
        name: 'Conduct a comprehensive hospitality market SWOT and competitive positioning audit',
        description: 'Evaluate property strengths against newly opened lifestyle boutique competitors and alternative lodging platforms.'
      },
      {
        name: 'Select viable target market segments to diversify hotel revenue mix',
        description: 'Shift reliance from shrinking government contract travel toward high-yielding bleisure and luxury micro-weddings.'
      },
      {
        name: 'Formulate a measurable 18-month strategic market penetration plan',
        description: 'Establish quarterly milestones to elevate RGI from 88 to above fair share (104) across defined competitive sets.'
      },
      {
        name: 'Allocate marketing resources and budgets across high-ROI distribution channels',
        description: 'Optimize spend across direct corporate RFP bidding, digital metasearch ads, and luxury travel advisor consortia.'
      }
    ],
    twentyFirstCenturySkills: ['Market Analysis', 'Strategic Planning', 'Competitive Intelligence', 'Financial Acumen'],
    background: `The Renaissance Wharf is a 410-room waterfront hotel located in an urban harbor district undergoing rapid commercial redevelopment. For over a decade, the property relied heavily on predictable government defense contractor lodging and legacy corporate travel, maintaining steady mid-tier occupancy.

However, over the last two years, the competitive landscape transformed drastically:
1. Two trendy lifestyle boutique hotels opened nearby, capturing the high-spending tech and creative agency traveler demographic with vibrant rooftop cocktail lounges and social lobby coworking spaces.
2. The latest Smith Travel Research (STR) monthly report revealed that Renaissance Wharf’s Revenue Generation Index (RGI) slipped to 88.4, meaning the property is significantly underperforming its fair market share (a benchmark of 100.0) compared to its designated primary competitive set (Comp Set).
3. The property's Market Penetration Index (MPI - Occupancy) stands at 92.1, while its Average Rate Index (ARI - ADR) has fallen to 96.0, indicating the hotel is discounting rates yet still failing to fill rooms.
4. Corporate travel managers report that younger business travelers find the hotel's traditional brown-wood aesthetic and lack of wellness amenities outdated, opting instead for competitor lifestyle properties with equivalent per-diem rates.

The ownership group has demanded a definitive market turnaround. They are unwilling to fund an immediate $15 million total property renovation, but they are prepared to allocate $750,000 toward strategic commercial repositioning, targeted public space activation, and a comprehensive market planning pivot.

You and your partner (Director of Strategic Market Planning and Commercial Hotel Strategy Lead) must present an 18-month Strategic Market Turnaround Plan to the Regional Vice President of Commercial Performance (the judge).`,
    challenge: 'Deliver a 15-minute data-driven market planning presentation to the Regional Vice President. Diagnose STR report underperformance, segment high-yield replacement markets (bleisure/social gatherings), restructure channel marketing investments, and project a return to RGI > 100.',
    judgeQuestions: [
      'Why has our strategy of discounting room rates failed to drive occupancy or improve our Market Penetration Index (MPI)?',
      'What specific high-yield customer segments should we target over the next 18 months, and what changes to our positioning will win them over?'
    ],
    benchmarkPoints: [
      'Explain the ADR-discounting trap: cutting rates signals declining quality to corporate planners without generating net-new demand, eroding profit margins while leaving MPI sub-100.',
      'Target two high-yielding growth segments: "Bleisure" travelers (extending Thursday corporate trips into weekend leisure stays) and local social catering/micro-weddings.',
      'Reallocate the $750,000 budget into activating the harbor terrace into a vibrant sunset seafood and craft beer garden, providing social energy without room gutting.',
      'Set clear RGI recovery trajectory: lift ARI to 102.5 and MPI to 101.8 through packaged corporate weekend extensions and targeted local PR campaigns.'
    ]
  },
  {
    id: 'mp-02',
    title: 'Capturing the High-Yield "Bleisure" Market: Downtown Marriott Marquis',
    instructionalArea: 'Market Planning',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Commercial Strategy Directors & Market Segmentation Leads',
    judgeRole: 'General Manager of Downtown Marriott Marquis',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze demographic and psychographic shifts driving "bleisure" hospitality consumption',
        description: 'Examine business travelers extending midweek corporate trips through Sunday for personal leisure.'
      },
      {
        name: 'Formulate packaged rate offerings bridging corporate expense accounts and personal leisure',
        description: 'Create seamless split-folio billing separating Monday-Thursday corporate billing from Friday-Saturday leisure rates.'
      },
      {
        name: 'Design family and partner-friendly amenities in predominantly commercial urban hotels',
        description: 'Introduce weekend rooftop family yoga, kid-friendly culinary tours, and local museum partnerships.'
      },
      {
        name: 'Execute targeted B2B and B2C marketing funnels to drive weekend length-of-stay (LOS)',
        description: 'Target corporate business travelers during Tuesday checkout with exclusive 50% Sunday extension offers.'
      },
      {
        name: 'Calculate the RevPAR and weekend TrevPAR contribution of bleisure segment expansion',
        description: 'Demonstrate how bridging the Thursday-Sunday shoulder occupancy gap lifts total hotel profitability.'
      }
    ],
    twentyFirstCenturySkills: ['Customer Journey Mapping', 'Market Segmentation', 'Revenue Strategy', 'Communication'],
    background: `Downtown Marriott Marquis is an 820-room convention hotel located in a premier downtown commercial core. Historically, the hotel has experienced a sharp \"cliff-effect\" in weekly occupancy: Monday through Wednesday nights run at 94% occupancy with an ADR of $365 driven by corporate consulting and financial clients. However, on Thursday afternoons, business travelers flee to the airport, causing Friday and Saturday night occupancy to plunge to an abysmal 38% with an ADR collapsing to $179.

This weekend drop creates massive operational and financial inefficiencies. The hotel’s three fine-dining outlets and 14,000-square-foot luxury spa operate at steep financial losses on weekends, and culinary staff face erratic scheduling.

Market research indicates that over 55% of the hotel's corporate travelers express strong desire to bring spouses, partners, or children to the city for weekend getaways, but they perceive the Marriott Marquis as a sterile \"business-only\" property and are deterred by confusing corporate expense reporting when attempting to combine business and personal stays.

You and your partner (Commercial Strategy Directors and Market Segmentation Leads) are presenting your Bleisure Market Penetration Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing target persona segmentation, split-folio corporate billing solutions, weekend experiential programming, and marketing campaigns to raise weekend occupancy from 38% to 75%.',
    judgeQuestions: [
      'How does our front office and PMS legally and seamlessly separate corporate-reimbursed room nights from personal leisure charges without confusing company auditors?',
      'Why would a corporate traveler choose to stay at our convention hotel over the weekend rather than moving to a scenic boutique resort nearby?'
    ],
    benchmarkPoints: [
      'Implement automated PMS "Split-Folio Billing": automatically route Monday-Wednesday room/tax to corporate master billing while personal weekend nights and leisure incidentals route to personal cards.',
      'Deploy the "Weekend Wanderer" package: offer business travelers 40% off Thursday and Sunday room rates if they extend through Saturday night.',
      'Transform the executive lounge into a curated family weekend discovery hub with local artisan tastings, city transit passes, and partnered museum VIP tickets.',
      'Project annual incremental room revenue of $3.2 million by lifting weekend occupancy from 38% to 74% and boosting weekend spa and dining capture.'
    ]
  },
  {
    id: 'mp-03',
    title: 'Market Feasibility & Comp Set Re-alignment for The Starlight Luxury Resort',
    instructionalArea: 'Market Planning',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Feasibility Analysts & Strategic Asset Advisors',
    judgeRole: 'Managing Director of Real Estate Investment Trust (REIT)',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Audit and restructure official Smith Travel Research (STR) Competitive Sets (Comp Sets)',
        description: 'Select properties matching geographic proximity, product class, ADR tier, and group room-count scale.'
      },
      {
        name: 'Apply STR guidelines and confidentiality rules governing competitive set validity',
        description: 'Comply with the 4-property minimum, 50% maximum single-brand share, and 60% maximum single-company rule.'
      },
      {
        name: 'Evaluate market saturation and inbound flight capacity for luxury resort destinations',
        description: 'Analyze airport direct-route additions and regional convention center expansion timelines.'
      },
      {
        name: 'Synthesize historical RevPAR growth trends to model future capitalization rates and ROI',
        description: 'Forecast 5-year Net Operating Income (NOI) under varying macroeconomic recession scenarios.'
      },
      {
        name: 'Formulate strategic market expansion proposals for hotel investment committees',
        description: 'Recommend high-yield capital deployment into private villa additions and experiential wellness amenities.'
      }
    ],
    twentyFirstCenturySkills: ['Financial Modeling', 'Competitive Strategy', 'Regulatory Compliance', 'Executive Communication'],
    background: `The Starlight Resort is a 320-room luxury mountain retreat owned by a multi-billion-dollar Real Estate Investment Trust (REIT). For the past six years, the property's management company has benchmarked performance against a self-selected STR competitive set of five older suburban hotels and golf resorts. By measuring against this weak comp set, Starlight consistently posted a deceptive Revenue Generation Index (RGI) of 118.0, earning property executives substantial performance bonuses.

However, the REIT’s asset management team conducted an independent market audit and uncovered a harsh reality: over the past four years, three ultra-luxury resorts (a Montage, a Ritz-Carlton Reserve, and an independent Relais & Châteaux) opened in the valley. These properties are achieving ADRs of $750 to $950, while Starlight’s ADR has stagnated at $490. In reality, Starlight is losing the valley's highest-spending demographic because its comp set was artificially engineered to look successful.

The REIT is contemplating a $22 million capital expenditure plan to add 24 luxury cliffside plunge-pool villas and a holistic longevity spa. However, the investment committee refuses to release funds until management realigns its official STR comp set, provides a truthful market feasibility analysis, and presents a defensible commercial strategy.

You and your partner (Feasibility Analysts and Strategic Asset Advisors) are presenting to the Managing Director of the REIT (the judge).`,
    challenge: 'Deliver a 15-minute presentation realigning the official STR comp set under strict STR compliance rules, diagnosing true market share underperformance, and defending the ROI of the $22M luxury villa expansion.',
    judgeQuestions: [
      'Under official STR rules, can we include the new Montage and Ritz-Carlton in our comp set if they have fewer total rooms than our property?',
      'If our RGI drops from 118 to 82 overnight under the new honest comp set, how will you explain this performance drop to our institutional shareholders?'
    ],
    benchmarkPoints: [
      'Restructure the STR Comp Set to adhere strictly to STR rules (minimum 4 hotels, no single chain exceeding 50%, no single management firm exceeding 60%).',
      'Explain that the apparent RGI drop from 118 to 84 is a statistical correction of a distorted baseline, unmasking Starlight’s real competitive gap against true luxury peers.',
      'Showcase the business case for the $22M villa expansion: 24 cliffside villas priced at $1,200/night will elevate overall resort ADR from $490 to $680 within 24 months.',
      'Target affluent California and Texas wealth corridors where new direct commercial jet service has expanded inbound airlift by 34%.'
    ]
  },
  {
    id: 'mp-04',
    title: 'Countering Short-Term Rental Inroads at Coastal Pines Heritage Lodge',
    instructionalArea: 'Market Planning',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Strategy Leads & Competitive Intelligence Analysts',
    judgeRole: 'General Manager of Coastal Pines Heritage Lodge',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze competitive threats posed by alternative accommodations and short-term rentals (STRs)',
        description: 'Assess Airbnb and Vrbo market inventory growth, multi-bedroom appeal, and full-kitchen amenities.'
      },
      {
        name: 'Identify unique competitive moats and value propositions inherent to traditional full-service lodging',
        description: 'Emphasize 24/7 on-site security, guaranteed cleanliness standards, concierge services, and zero hidden chore lists.'
      },
      {
        name: 'Design multi-room suite packages and extended-stay amenities targeting family leisure travel',
        description: 'Reconfigure adjoining rooms with complimentary grocery pre-stocking and communal family lounges.'
      },
      {
        name: 'Formulate an aggressive comparative marketing campaign highlighting the \"Hidden Costs of Vacation Rentals\"',
        description: 'Expose surprise $350 cleaning fees, mandatory check-out chore lists, and lack of customer support in private rentals.'
      },
      {
        name: 'Advocate for fair municipal taxation and zoning parity for short-term residential rentals',
        description: 'Partner with local hotel lodging associations to lobby city councils for transient occupancy tax (TOT) parity.'
      }
    ],
    twentyFirstCenturySkills: ['Competitive Differentiation', 'Consumer Psychology', 'Advocacy & Public Relations', 'Strategic Problem Solving'],
    background: `Coastal Pines Heritage Lodge is a 160-room historic ocean-view inn located in a picturesque coastal town. For decades, the inn was the premier destination for multi-generational summer family vacations.

However, over the past three years, the town has experienced an explosive 180% surge in residential short-term rentals (Airbnb and Vrbo), with over 450 residential homes converted into vacation rentals. Many of these properties offer 4-5 bedrooms, full gourmet kitchens, and private hot tubs. Consequently, Coastal Pines has seen its prime summer family vacation bookings drop by 26%, with family reunion organizers opting for private rental compounds where everyone can stay under one roof.

Despite their popularity, local vacation rentals have begun to generate significant consumer backlash: guests complain of exorbitant $300+ cleaning fees, extensive \"chore checklists\" requiring guests to wash linens and mow lawns before 10:00 AM checkouts, and unreliable host communication during lockouts.

The General Manager wants to launch a strategic market counter-offensive to win back affluent family vacationers while emphasizing the unmistakable safety, luxury, and hassle-free service of a full-service historic lodge.

You and your partner (Hospitality Strategy Leads and Competitive Intelligence Analysts) are presenting your Anti-STR Market Recovery Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing product reconfigurations, anti-chore marketing messaging, family amenities, and municipal advocacy to recapture lost family travel market share.',
    judgeQuestions: [
      'How can our 160-room lodge compete with an Airbnb home that offers a full private kitchen and four bedrooms for a single nightly rate?',
      'Will launching an aggressive advertising campaign mocking vacation rental chore lists alienate modern travelers who frequently use both hotels and Airbnb?'
    ],
    benchmarkPoints: [
      'Launch the "Guaranteed Vacation: Zero Chores, Pure Luxury" marketing campaign highlighting transparent upfront pricing with no surprise cleaning fees or dish-washing demands.',
      'Reconfigure 20 sets of adjoining rooms into "Family Heritage Suites" featuring complimentary kitchenettes, in-room washer/dryer access, and daily complimentary housekeeping.',
      'Introduce the "Kids Camp & Family Concierge": supervised daily nature workshops and beach bonfires that private vacation rentals cannot match.',
      'Mobilize the regional lodging association to enforce local municipal zoning ordinances capping unhosted short-term residential rentals and mandating 12% TOT tax collection.'
    ]
  },
  {
    id: 'mp-05',
    title: 'Strategic Market Diversification from Government Per-Diem Contracts: Capital City Hotel',
    instructionalArea: 'Market Planning',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Business Development & Commercial Strategy Manager',
    judgeRole: 'Vice President of Hotel Asset Portfolio Management',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Assess organizational vulnerability to single-segment customer concentration risk',
        description: 'Analyze financial risks of relying on capped federal General Services Administration (GSA) per-diem rates for 65% of room revenue.'
      },
      {
        name: 'Identify high-margin alternative market segments to replace low-yield contractual blocks',
        description: 'Target regional association conventions, university athletic events, and leisure performing arts tourism.'
      },
      {
        name: 'Design value-added tier pricing structures exceeding statutory government rate caps',
        description: 'Create premium executive room categories with inclusive breakfast and lounge access for commercial travelers.'
      },
      {
        name: 'Restructure sales team incentive compensation to reward profitable market diversification',
        description: 'Transition sales commission bonuses from pure room-night volume to gross profit margin and ADR thresholds.'
      },
      {
        name: 'Construct an operational transition timeline mitigating immediate cash flow dips during segment shift',
        description: 'Phase out low-margin government contract blocks incrementally over 18 months.'
      }
    ],
    twentyFirstCenturySkills: ['Risk Diversification', 'Strategic Portfolio Management', 'Sales Compensation Design', 'Financial Forecasting'],
    background: `Capital City Hotel is a 480-room full-service hotel situated two blocks from the state capitol complex and regional federal agency headquarters. Historically, management pursued the \"easy path\" to occupancy by signing massive volume contracts with state and federal agencies at federal General Services Administration (GSA) per-diem rates. Today, government travel accounts for an astounding 68% of total room nights.

While this guaranteed 78% annual occupancy, it has crippled the hotel’s profitability:
1. Federal per-diem lodging rates are capped by statute at $128 per night, while the surrounding commercial downtown hotel market achieves an average ADR of $235.
2. Rising inflationary operating costs (housekeeping wages up 22%, utility rates up 18%) have compressed the hotel's gross operating profit (GOP) margin from 34% down to a razor-thin 11%.
3. State legislative sessions last only five months of the year, leaving the hotel desolate during the summer and winter recesses.
4. The hotel’s banqueting and high-end restaurant spaces sit largely empty because government travel regulations strictly forbid per-diem reimbursement for catering and alcohol.

The investment portfolio leadership has mandated an aggressive market diversification strategy to slash government concentration down to 25% within 18 months while capturing high-yielding commercial, association, and leisure business.

You and your partner (Director of Business Development and Commercial Strategy Manager) are presenting your Market Diversification Roadmap to the Vice President of Asset Management (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing target customer segment identification, sales team quota restructuring, group banquet pricing, and an 18-month phased revenue transition plan.',
    judgeQuestions: [
      'If we deliberately decline low-rate government contracts, what happens to our cash flow if commercial corporate travel takes longer to ramp up than planned?',
      'How will our sales team win major corporate association conventions when our hotel has carried the reputation of a \"cheap government lodging facility\" for fifteen years?'
    ],
    benchmarkPoints: [
      'Execute a phased 18-month contraction: reduce government room blocks from 68% to 45% in Year 1, and 25% in Year 2, backfilling with regional association groups.',
      'Target state medical, educational, and legal professional associations whose meeting budgets allow ADRs of $215+ with mandatory high-margin banquet F&B commitments.',
      'Overhaul sales compensation: eliminate volume-only bonuses and introduce gross revenue contribution bonuses tied to ADR > $195 and banquet catering minimums.',
      'Project GOP margin recovery from 11% to 29%, lifting net annual operating income by $2.4 million despite a modest temporary 6% dip in gross occupancy.'
    ]
  },
  {
    id: 'mp-06',
    title: 'Penetrating the Luxury International Eco-Tourism Market: Rainforest Canopy Lodge',
    instructionalArea: 'Market Planning',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Global Market Planning Directors & Eco-Tourism Strategists',
    judgeRole: 'Managing Director of Rainforest Canopy Lodge',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Profile high-net-worth international eco-tourists and regenerative travel consumers',
        description: 'Examine European and North American luxury travelers seeking certified carbon-neutral wilderness luxury.'
      },
      {
        name: 'Secure prestigious global sustainability certifications (e.g., Green Key, B-Corp, EarthCheck)',
        description: 'Leverage third-party environmental audits to establish brand credibility and validate premium pricing power.'
      },
      {
        name: 'Build strategic B2B distribution alliances with elite luxury travel advisor consortia',
        description: 'Partner with Virtuoso, Signature Travel Network, and bespoke adventure outfitters for high-yield bookings.'
      },
      {
        name: 'Develop experiential all-inclusive packages combining conservation science with 5-star lodging',
        description: 'Integrate biologist-led night canopy walks, reforestation sapling planting, and indigenous culinary foraging.'
      },
      {
        name: 'Establish digital direct-booking channels targeting international high-intent eco-travel queries',
        description: 'Optimize high-conversion SEO and documentary-style video storytelling for international markets.'
      }
    ],
    twentyFirstCenturySkills: ['Global Cultural Fluency', 'Environmental Marketing', 'Partnership Development', 'Communication'],
    background: `Rainforest Canopy Lodge is an exclusive 36-villa luxury eco-resort nestled on a 250-acre private tropical rainforest reserve bordering a UNESCO World Heritage national park. Each treehouse villa is elevated 40 feet in the jungle canopy and features private plunge pools, solar-powered climate control, and open-air rainfall showers.

Currently, the lodge is underperforming its financial potential. Its current ADR is $420 with an annual occupancy of 52%, primarily driven by domestic backpackers and cost-conscious regional tourists who visit only on weekends.

Meanwhile, international ultra-luxury eco-resorts in Costa Rica, Rwanda, and Bali command ADRs exceeding $1,200 per night with 85%+ occupancies by catering to affluent North American and European \"regenerative travelers\"—affluent executives and retirees who demand world-class gastronomy and 5-star comfort while actively funding rainforest biodiversity conservation.

The owners have authorized a $1.2 million global commercial repositioning to establish Rainforest Canopy Lodge as a premier bucket-list luxury eco-destination.

You and your partner (Global Market Planning Directors and Eco-Tourism Strategists) are presenting your International Luxury Market Penetration Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation outlining high-net-worth eco-traveler segmentation, luxury travel advisor partnerships, all-inclusive experiential packaging, and international distribution to lift ADR from $420 to $950.',
    judgeQuestions: [
      'How do we convince affluent international travelers to pay $950 per night when our lodge is located two hours from the nearest international airport?',
      'Which luxury travel advisor consortia should we prioritize, and what commission structures will motivate top-tier Virtuoso agents to book our remote lodge?'
    ],
    benchmarkPoints: [
      'Secure elite Virtuoso and National Geographic Unique Lodges of the World accreditations, offering 15% preferred agent commissions plus exclusive VIP amenities.',
      'Package all-inclusive itineraries: bundle private chartered helicopter transfers from the international airport, fine-dining organic tasting menus, and private naturalist guides.',
      'Achieve rigorous EarthCheck Gold certification to authenticate environmental integrity and eliminate consumer accusations of greenwashing.',
      'Model commercial transformation: elevating ADR from $420 to $920 at 70% occupancy increases annual lodging revenue from $2.8M to $8.4M.'
    ]
  },
  {
    id: 'mp-07',
    title: 'Off-Peak Shoulder Season Market Development: Whispering Winds Alpine Resort',
    instructionalArea: 'Market Planning',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Resort Commercial Directors & Seasonal Demand Strategists',
    judgeRole: 'General Manager of Whispering Winds Alpine Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze seasonal demand fluctuations and fixed-cost drag in mountain resort operations',
        description: 'Examine severe revenue deficits during spring mud season (April-May) and autumn shoulder months (October-November).'
      },
      {
        name: 'Identify viable non-skiing customer segments to generate shoulder season room demand',
        description: 'Target corporate executive wellness retreats, mountain biking enthusiasts, and remote worker workcations.'
      },
      {
        name: 'Formulate dynamic seasonal package pricing and length-of-stay incentives',
        description: 'Bundle midweek lodging with spa credits, guided fly-fishing, and culinary foraging masterclasses.'
      },
      {
        name: 'Establish regional drive-market promotional partnerships within a 250-mile radius',
        description: 'Market scenic mountain foliage getaways to affluent metropolitan suburbanites.'
      },
      {
        name: 'Calculate the contribution margin of shoulder season operations versus temporary resort mothballing',
        description: 'Prove that operating at 48% shoulder occupancy preserves cash flow and retains key management talent.'
      }
    ],
    twentyFirstCenturySkills: ['Seasonal Strategy', 'Financial Analysis', 'Creative Campaign Design', 'Collaboration'],
    background: `Whispering Winds Alpine Resort is a premier 280-room mountain lodge. During the 120-day peak winter ski season (December through March), the resort is a financial powerhouse, achieving 94% occupancy at a lucrative $640 ADR. Summer (July-August) also performs well with hiking and golf generating 75% occupancy at $380 ADR.

However, the resort suffers catastrophic financial losses during the 120 days of \"shoulder season\":
- Spring \"Mud Season\" (April 15 - June 1): Occupancy collapses to 18%, and ADR drops to $145.
- Autumn Shoulder (October 1 - November 20): Occupancy drops to 22%, and ADR stagnates at $160.

During these seven off-peak weeks, the resort bleeds over $750,000 in fixed overhead costs (property taxes, insurance, executive salaries, and core heating). Management previously considered shutting down the resort completely during shoulder months, but doing so resulted in mass resignations of skilled culinary and front office managers who could not afford three months without pay.

The General Manager has mandated the commercial team to build a proactive Shoulder Season Market Development Plan to drive profitable off-peak occupancy.

You and your partner (Resort Commercial Directors and Seasonal Demand Strategists) are presenting your plan to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing shoulder season target segmentation, creative non-ski packaging, drive-market digital advertising, and financial break-even projections.',
    judgeQuestions: [
      'Why would a corporate group or leisure traveler visit a ski resort town in May when ski lifts are closed and hiking trails are muddy?',
      'How does keeping the resort open at 45% occupancy generate more profit than simply locking the front doors and shutting down utilities?'
    ],
    benchmarkPoints: [
      'Target high-ticket Midweek Corporate Strategy Retreats: market the serene, distraction-free mountain solitude with buyout packages at $245 ADR.',
      'Launch the "Autumn Alpine Wine & Foraging Festival" in October: partner with regional vineyards and culinary chefs to create a high-margin weekend destination event.',
      'Deploy targeted geofenced digital ads to affluent suburban zip codes within a 4-hour drive, promoting cozy fireside spa and hot-tub wellness weekends.',
      'Demonstrate contribution margin math: generating 48% occupancy at $225 ADR produces $1.1M in revenue, covering fixed costs and preserving $320,000 in net cash flow.'
    ]
  },
  {
    id: 'mp-08',
    title: 'Medical Tourism & Post-Operative Hospitality Concierge: Metro Health Suites',
    instructionalArea: 'Market Planning',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Healthcare Hospitality Planners & Business Development Directors',
    judgeRole: 'Chief Executive Officer of Metro Healthcare System & Hotel Asset Partner',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze market dynamics and growth drivers in domestic and international medical tourism',
        description: 'Examine lodging demand generated by renowned orthopedic, cardiovascular, and cosmetic surgical institutes.'
      },
      {
        name: 'Design specialized ADA and post-operative recovery infrastructure in luxury lodging',
        description: 'Incorporate zero-threshold roll-in showers, adjustable motorized beds, nurse call buttons, and HEPA air filtration.'
      },
      {
        name: 'Establish formal B2B patient-referral partnerships with premier surgical hospitals',
        description: 'Contract with hospital international patient coordinators for extended 7-to-21-day patient and family stays.'
      },
      {
        name: 'Formulate specialized dietary and wellness concierge services for surgical recovery',
        description: 'Offer clinical nutritionist-approved room service menus, mobile physical therapy rooms, and discreet private entrances.'
      },
      {
        name: 'Navigate medical liability, patient privacy (HIPAA), and emergency medical coordination',
        description: 'Clarify hospitality service boundaries versus licensed healthcare liability.'
      }
    ],
    twentyFirstCenturySkills: ['Healthcare Systems Literacy', 'Empathetic Service Design', 'Legal Risk Mitigation', 'Strategic Negotiation'],
    background: `Metro Health Suites is a 240-room full-service hotel situated directly across the street from a world-renowned Academic Medical Center that performs over 4,500 complex orthopedic joint replacements, organ transplants, and cardiovascular surgeries annually. Patients travel from across the globe to receive specialized care from the center's world-class surgeons.

Currently, recovering patients and their accompanying families face a poor lodging experience:
1. Hospital beds are in acute shortage, forcing hospitals to discharge surgical patients 48 to 72 hours post-surgery.
2. Standard local hotels lack basic accessibility: rooms feature slippery bathtubs, low ergonomic toilets, standard non-adjustable beds, and heavy doors that are dangerous for patients with walkers or wheelchairs.
3. Families struggle to find nutritious, low-sodium meals for recovering loved ones, and hotels lack private, sterile transfer lounges for patients awaiting medical checkups.

Management plans to convert the hotel's entire 5th and 6th floors (80 suites) into \"The Recovery Wing at Metro Health Suites\"—a dedicated luxury post-operative sanctuary providing hospital-grade accessibility seamlessly wrapped in 5-star hotel luxury.

You and your partner (Healthcare Hospitality Planners and Business Development Directors) are presenting your Medical Tourism Business Plan to the CEO of the Healthcare System and Hotel Asset Partner (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing architectural room modifications, hospital partnership contracts, HIPAA compliance boundaries, and financial projections of the medical recovery wing.',
    judgeQuestions: [
      'What specific legal firewalls and disclaimers will prevent our hotel from being sued for medical malpractice if a recovering surgical patient suffers a complication in their room?',
      'How will your pricing structure compare to an acute-care hospital bed ($2,500/night) while delivering healthy margins for our hotel?'
    ],
    benchmarkPoints: [
      'Structure a formal B2B Preferred Lodging Agreement with the surgical hospital: patients step down from hospital rooms into $450/night luxury recovery suites, freeing up scarce acute hospital beds.',
      'Re-engineer 80 suites with medical-grade amenities: motorized bariatric beds, zero-barrier roll-in rainfall showers, antimicrobial surfaces, and dedicated nurse on-call desk.',
      'Enforce strict legal liability separation: staff provide hospitality, housekeeping, and culinary nutrition only; all medical wound-care is performed by visiting hospital-certified home health nurses.',
      'Achieve projected 88% year-round occupancy with an average length of stay (ALOS) of 8.5 days, generating an additional $1.8 million in net operating income.'
    ]
  },
  {
    id: 'mp-09',
    title: 'Monopolizing the Regional Luxury Micro-Wedding & Social Event Market: The Grand Manor',
    instructionalArea: 'Market Planning',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Social Catering Directors & Luxury Event Strategists',
    judgeRole: 'General Manager of The Grand Manor Estate & Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze changing consumer preferences in luxury weddings and social gatherings',
        description: 'Examine the transition from massive 400-person ballroom weddings to intimate, high-spend 60-guest micro-weddings.'
      },
      {
        name: 'Structure full-property buyout packages that maximize total resort revenue per available guest (TrevPAG)',
        description: 'Mandate entire 45-room estate buyouts for 3-day weekend celebrations with guaranteed F&B minimums.'
      },
      {
        name: 'Establish exclusive vendor coalitions with elite floral, photography, and musical artisans',
        description: 'Capture 15% preferred partner commissions while guaranteeing flawless execution standards.'
      },
      {
        name: 'Deploy luxury social media and experiential visual marketing campaigns',
        description: 'Leverage Instagram, Pinterest, and bridal publication features to attract high-budget couples.'
      },
      {
        name: 'Design multi-day social event itineraries that drive auxiliary revenue across all resort outlets',
        description: 'Curate rehearsal dinner wine tastings, bridal spa mornings, and farewell Sunday poolside brunches.'
      }
    ],
    twentyFirstCenturySkills: ['Event Curation', 'Visual Storytelling', 'Revenue Optimization', 'Interpersonal Persuasion'],
    background: `The Grand Manor is an exquisite 45-room historic countryside estate and boutique hotel situated on 80 rolling pastoral acres. In previous years, the manor competed for traditional large weddings, trying to cram 300 guests into a vinyl outdoor tent. This strategy caused major operational headaches: the tent ruined the manor's manicured historic lawns, regular hotel guests complained bitterly about late-night DJ noise, and catering profit margins were thin due to chaotic temporary rental infrastructure.

Meanwhile, post-pandemic wedding trends have permanently shifted toward \"luxury micro-weddings\" and multi-day weekend buyouts. Affluent couples are trading giant 350-person generic receptions for intimate 50-to-80-person 3-day luxury celebrations where they pay for all close family and friends to stay together at a private estate. These couples spend an astounding $120,000 to $200,000 per wedding, prioritizing ultra-premium gastronomy, vintage champagne pairings, private fireworks, and bespoke guest experiences.

The General Manager wants to completely withdraw from the low-margin mass-wedding market and reposition The Grand Manor as the undisputed regional monopoly for ultra-luxury micro-wedding estate buyouts.

You and your partner (Social Catering Directors and Luxury Event Strategists) are presenting your Micro-Wedding Market Repositioning Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing full-estate buyout packaging, multi-day guest itineraries, preferred luxury vendor partnerships, and marketing funnels to capture 35 high-yield wedding buyouts annually.',
    judgeQuestions: [
      'If we require couples to purchase a full 45-room, 3-night estate buyout, what happens to our regular leisure weekend guests who want to book individual rooms?',
      'How do we justify a $150,000 starting price tag for a 60-person wedding to prospective couples?'
    ],
    benchmarkPoints: [
      'Package complete 3-day estate buyouts (Thursday-Sunday) with a starting baseline of $145,000, including all 45 luxury rooms, full catering, and private estate exclusivity.',
      'Design a seamless 72-hour luxury wedding itinerary: Thursday Welcome BBQ & Firepit, Friday Bridal Spa Day & Vineyard Rehearsal Dinner, Saturday Ceremony & Gala Banquet, Sunday Farewell Champagne Brunch.',
      'Establish an Exclusive Artisan Guild: curate top florists, photographers, and lighting designers, securing a 15% venue commission while eliminating vendor coordination chaos.',
      'Project massive financial lift: 35 weekend buyouts generate $5.1 million in guaranteed revenue, fully eliminating weekend leisure vacancy and lifting F&B gross margin to 44%.'
    ]
  },
  {
    id: 'mp-10',
    title: 'Gen Z & Millennial Lifestyle Repositioning Strategy: The Urban Heritage Hotel',
    instructionalArea: 'Market Planning',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Brand Innovation Officers & Youth Market Strategists',
    judgeRole: 'Managing Partner of Heritage Hospitality Real Estate Syndicate',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze the travel motivations, digital behaviors, and spending priorities of Gen Z and Millennial travelers',
        description: 'Examine demand for hyper-local experiences, authentic social hubs, sustainable ethics, and aesthetic \"Instagrammability\".'
      },
      {
        name: 'Transform sterile traditional hotel lobbies into multi-functional social and co-working ecosystems',
        description: 'Integrate third-wave craft coffee roasters, vinyl listening stations, and community creator workshops.'
      },
      {
        name: 'Incorporate circular sustainability and ethical social impact into the core lodging brand identity',
        description: 'Eliminate all single-use plastics, feature hyper-local artists, and establish community give-back partnerships.'
      },
      {
        name: 'Design mobile-first, influencer-driven, and community-centered promotional campaigns',
        description: 'Engage micro-creators on TikTok and Instagram rather than running legacy print or billboard ads.'
      },
      {
        name: 'Evaluate the financial impact of lifestyle repositioning on room RevPAR and auxiliary F&B spend',
        description: 'Demonstrate how vibrant public spaces double non-resident local F&B capture and drive premium weekend ADR.'
      }
    ],
    twentyFirstCenturySkills: ['Generational Insight', 'Creative Placemaking', 'Digital Culture Fluency', 'Strategic Innovation'],
    background: `The Urban Heritage Hotel is a 210-room hotel in a rapidly gentrifying urban arts and warehouse district. Built in 1995 with a corporate aesthetic (beige carpeting, formal check-in counters, quiet brass chandeliers, and an empty formal dining room), the property is experiencing a severe demographic crisis.

The hotel’s traditional customer base—older corporate business travelers and tour bus groups—has declined by 40% over the last four years. Meanwhile, the surrounding neighborhood is thriving with creative agencies, tech startups, craft microbreweries, and art galleries. Tens of thousands of affluent Millennial and Gen Z travelers visit the district every weekend, but they avoid The Urban Heritage Hotel, opting instead for trendy lifestyle hotels (like Ace Hotel, Moxy, or The Hoxton) and aesthetic Airbnbs.

Customer surveys reveal that younger travelers find the hotel \"stuffy, boring, and corporate.\" They don’t want to stand in line at a traditional front desk; they want to check in on their phone, grab an oat milk latte in a buzzing lobby lounge filled with locals, listen to indie vinyl, and attend a rooftop DJ set.

The owners have approved a $2.5 million capital repositioning budget to overhaul the lobby, activate public spaces, and relaunch the property as a vibrant lifestyle social hub.

You and your partner (Brand Innovation Officers and Youth Market Strategists) are presenting your Lifestyle Repositioning & Go-To-Market Plan to the Managing Partner of the real estate syndicate (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the physical lobby transformation, local craft partnerships, creator marketing campaigns, and financial projections to capture the Millennial and Gen Z travel demographic.',
    judgeQuestions: [
      'If we turn our quiet lobby into a bustling public coffee shop and evening craft cocktail lounge, won’t that alienate our remaining legacy corporate guests who want peace and quiet?',
      'How do we ensure our lifestyle rebranding feels authentic and avoids being mocked as \"corporate trying too hard to be cool\" by skeptical Gen Z travelers?'
    ],
    benchmarkPoints: [
      'Transform the lobby into "The Commons": replace formal counters with a communal island bar serving third-wave craft espresso by day and natural wines and craft cocktails by night.',
      'Partner with genuine neighborhood creators: curate rotating gallery exhibits by local street artists, feature an indie vinyl listening library, and host weekly creator masterclasses.',
      'Implement seamless mobile-first technology: 100% digital key access, text-message concierge, and in-room high-definition streaming casting devices.',
      'Project commercial turnaround: lift ADR from $165 to $255 and double non-room F&B revenue to $1.8 million annually, driving overall RevPAR index from 76 to 112 against the local lifestyle comp set.'
    ]
  }
];
