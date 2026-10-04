// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Entrepreneurship (10 Cases)
// Focuses on hospitality startup models, boutique hotel brand incubation, ancillary revenue innovation, and risk-taking
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const entrepreneurshipCases: DecaCaseStudy[] = [
  {
    id: 'ent-01',
    title: 'Launching a Luxury Glamping & Eco-Resort Venture: The Whispering Pines Project',
    instructionalArea: 'Entrepreneurship',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Venture Co-Founders & Chief Concept Officers',
    judgeRole: 'Managing Director of Hospitality Venture Capital Angel Syndicate',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Identify innovative business opportunities in experiential hospitality niches',
        description: 'Analyze emerging consumer demand for outdoor luxury eco-tourism and unplugged wellness retreats.'
      },
      {
        name: 'Formulate a comprehensive hospitality business model canvas',
        description: 'Define key revenue streams, cost drivers, strategic partnerships, and unique value propositions for a boutique retreat.'
      },
      {
        name: 'Assess entrepreneurial startup capital requirements and break-even financial horizons',
        description: 'Calculate initial infrastructure capex, operational unit economics, and projected payback periods.'
      },
      {
        name: 'Develop an agile minimum viable product (MVP) testing framework for lodging concepts',
        description: 'Pilot seasonal pop-up luxury safari tents to validate pricing power and customer acquisition costs before full-scale buildout.'
      },
      {
        name: 'Pitch a compelling entrepreneurial investment proposal to hospitality venture capitalists',
        description: 'Synthesize competitive moats, scalability factors, and risk-adjusted return on investment metrics into an executive pitch.'
      }
    ],
    twentyFirstCenturySkills: ['Entrepreneurial Thinking', 'Financial Modeling', 'Creativity & Innovation', 'Persuasive Pitching'],
    background: `Whispering Pines is a proposed 45-acre luxury eco-glamping and wellness venture located two hours north of a major metropolitan area. Traditional luxury hotels in the nearby ski and wine valleys have become commoditized and expensive, leaving a substantial gap in the market for affluent urban millennials and corporate retreat groups seeking immersive natural experiences combined with 5-star hotel bedding, geothermal plunge pools, and farm-to-table culinary programming.

The proposed venture entails 32 geodesic luxury dome suites, a central timber-frame lodge, a farm-sourced restaurant, and an outdoor Nordic thermal spa circuit. Projected Average Daily Rate is modeled at $550 with an expected 72% annualized occupancy rate. Total startup capital required is $4.8 million for land acquisition, zero-impact solar micro-grid installation, luxury interior appointments, and municipal environmental zoning approvals.

The founding team has secured preliminary option agreements on the land parcel and completed an initial 6-month feasibility study demonstrating strong consumer pre-registration interest. However, prospective angel investors have expressed concerns regarding seasonal winter occupancy dips, high upfront utility infrastructure expenses, and vulnerability to economic downturns in high-ticket luxury discretionary spending.

You and your partner (Hospitality Venture Co-Founders and Chief Concept Officers) are scheduled to pitch your venture business plan to the Managing Director of a prominent Hospitality Venture Capital Angel Syndicate (the judge).`,
    challenge: 'Deliver a 15-minute entrepreneurial pitch to the Angel Syndicate Managing Director. Validate your market opportunity, outline unit economics and break-even milestones, present a low-risk phased MVP rollout, and detail defensible competitive advantages.',
    judgeQuestions: [
      'How does your financial model account for low-occupancy winter shoulder seasons, and what ancillary revenue streams will sustain cash flow?',
      'Why would affluent luxury travelers pay $550/night for a geodesic dome rather than staying at an established Ritz-Carlton or Four Seasons in the valley?'
    ],
    benchmarkPoints: [
      'Structure a phased capital deployment: launch 12 MVP luxury safari domes in Phase 1 ($1.8M capex) to validate proof of concept and generate operating cash flow before Phase 2 expansion.',
      'Mitigate seasonality through targeted midweek corporate wellness retreats, team-building buyouts, and winter thermal spa day passes.',
      'Highlight unique experiential differentiation: private wood-fired hot tubs, stargazing skylights, and hyper-local chef-led foraging dinners unattainable at urban luxury chains.',
      'Demonstrate healthy unit economics: estimated gross operating margin of 42% driven by low housekeeping footprints and high F&B capture rates.'
    ]
  },
  {
    id: 'ent-02',
    title: 'Historic Mill Adaptive Reuse: Launching The Weaver House Boutique Hotel',
    instructionalArea: 'Entrepreneurship',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Founding Partners & Managing Developers',
    judgeRole: 'Chair of Municipal Redevelopment Authority & Lead Investor',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Assess the feasibility of commercial real estate conversion for boutique lodging',
        description: 'Evaluate structural historic tax credits, zoning compliance, and construction contingencies.'
      },
      {
        name: 'Determine target customer segments for heritage boutique properties',
        description: 'Profile design-forward leisure travelers and university visiting faculty seeking authentic character.'
      },
      {
        name: 'Construct an operational and financial risk mitigation plan for startup hospitality',
        description: 'Account for unexpected architectural renovation overruns and delay carrying costs.'
      },
      {
        name: 'Design high-margin community food and beverage partnerships',
        description: 'Lease ground-floor artisan bakeries and craft distillery tasting rooms to reduce direct operating overhead.'
      },
      {
        name: 'Formulate an entrepreneurial go-to-market branding campaign',
        description: 'Leverage historic narrative storytelling and architectural preservation PR to drive pre-opening direct bookings.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Financial Analysis', 'Strategic Vision', 'Collaboration'],
    background: `The historic Riverbend Cotton Mill, constructed in 1892, stands vacant along the city's newly completed riverwalk promenade. You and your business partner have formed Weaver Hospitality Group to acquire and transform the four-story brick masonry structure into The Weaver House, a 48-room independent boutique lifestyle hotel with a rooftop cocktail greenhouse and two ground-floor leased retail spaces.

The city has designated the riverfront an economic opportunity zone, offering up to $1.2 million in municipal tax increment financing (TIF) and federal historic rehabilitation tax credits. However, adaptive reuse construction costs have ballooned by 18% due to historic timber seismic retrofitting and specialized masonry restoration, pushing total project capitalization to $9.2 million.

Your investment syndicate is hesitant to close the senior mezzanine debt without definitive proof that a small independent hotel can outcompete two nearby branded select-service properties (a Courtyard by Marriott and a Hilton Garden Inn) that currently dominate weekday corporate travel.

You and your partner must present a compelling development and operational feasibility case to the Chair of the Municipal Redevelopment Authority and lead investor (the judge).`,
    challenge: 'Deliver a 15-minute pitch proving the financial solvency, differentiation strategy, and community economic impact of converting the historic mill into an independent boutique hotel.',
    judgeQuestions: [
      'How will The Weaver House compete for midweek corporate guests who typically seek Marriott Bonvoy or Hilton Honors points?',
      'If construction costs overrun the contingency reserve by another 10%, how will your capital structure absorb the deficit without jeopardizing opening day?'
    ],
    benchmarkPoints: [
      'Leverage 20% Federal Historic Tax Credits and TIF grants to reduce effective debt-to-equity ratio below 65%.',
      'Target high-yield executive corporate retreats and university dignitaries desiring bespoke meeting lofts instead of generic chain ballrooms.',
      'Monetize ground-floor spaces through triple-net master leases with local artisan vendors to secure steady baseline rental income.',
      'Implement direct-to-consumer digital booking funnels with hyper-personalized local concierge packages to circumvent costly OTA commissions.'
    ]
  },
  {
    id: 'ent-03',
    title: 'Urban Micro-Lodging Disruption: Launching PodHaven Transit Suites',
    instructionalArea: 'Entrepreneurship',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Technology Founders & Chief Experience Officers',
    judgeRole: 'Principal Partner at Seed Urban Innovation Fund',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate disruptive business models in high-density urban lodging',
        description: 'Examine modular micro-capsule hotel unit economics and autonomous contactless operations.'
      },
      {
        name: 'Calculate revenue per available square foot (RevPASF) versus traditional hotel metrics',
        description: 'Model 3x guest density yields compared to standard 350-sq-ft suburban king guestrooms.'
      },
      {
        name: 'Identify regulatory and fire code compliance hurdles for modular sleep pods',
        description: 'Navigate municipal egress regulations, ventilation standards, and transient occupancy taxes.'
      },
      {
        name: 'Formulate an agile technology stack for frictionless unmanned hotel operations',
        description: 'Integrate smartphone digital keys, automated luggage lockers, and remote customer service hubs.'
      },
      {
        name: 'Develop an entrepreneurial scaling roadmap for multi-city transit hub expansion',
        description: 'Identify target transit gateway locations near international airports and bullet train terminals.'
      }
    ],
    twentyFirstCenturySkills: ['Technology Integration', 'Operational Design', 'Financial Modeling', 'Agile Problem Solving'],
    background: `Skyrocketing urban real estate prices and shifting travel demographics have created an immense demand for affordable, ultra-efficient, safe micro-lodging. Young solo travelers, convention volunteers, flight crews, and weekend festival attendees frequently face $300+/night downtown room rates or poorly maintained suburban hostels.

PodHaven is a revolutionary urban micro-hotel startup that converts underutilized second-floor downtown retail and commercial office buildings into high-tech, soundproof sleeping pods. Each private cabin measures 45 square feet and features acoustic memory foam mattresses, customizable mood lighting, air ionization filtration, ultra-fast Wi-Fi, and integrated ergonomic laptop workspaces. Guests share luxury European-style private shower suites, a co-working lounge, and a barista café.

Your pilot location inside a converted downtown commercial building adjacent to the central subway transit station accommodates 84 sleeping pods on a single 7,500-square-foot floorplate. With an average rate of $89/night and projected 88% occupancy, annual gross room revenue is modeled at $2.4 million with minimal frontline staffing.

The Principal Partner of the Seed Urban Innovation Fund (the judge) is considering an initial $1.5 million equity seed round to build out the pilot location and develop the proprietary mobile app operating system.`,
    challenge: 'Present a 15-minute venture pitch defending the RevPASF unit economics, safety and regulatory compliance, and scalable franchising blueprint of PodHaven micro-lodging.',
    judgeQuestions: [
      'How do you counter consumer hesitation regarding claustrophobia or perceived lack of luxury in a 45-square-foot sleeping cabin?',
      'What automated sanitation and cleaning protocols will ensure rapid 10-minute pod turnover between guests without compromising hygiene?'
    ],
    benchmarkPoints: [
      'Highlight industry-leading RevPASF: 84 pods generate over $320/sq ft annually, more than doubling conventional urban hotel floor yields.',
      'Showcase acoustic engineering: double-walled medical-grade composite shells providing 42dB sound dampening and individual HEPA climate control.',
      'Demonstrate lean operating margins: unmanned digital self-check-in kiosks reduce labor overhead to 18% of revenue versus industry averages of 35%.',
      'Outline phased expansion into university districts and high-traffic regional airport corridors.'
    ]
  },
  {
    id: 'ent-04',
    title: 'Agri-Tourism Farm & Culinary Retreat: The Heritage Orchard Inn',
    instructionalArea: 'Entrepreneurship',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Agri-Hospitality Co-Founders & Estate Directors',
    judgeRole: 'Commercial Agribusiness & Hospitality Lending Director',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Synthesize agribusiness operations with luxury boutique lodging',
        description: 'Create synergistic revenue channels between certified organic heirloom fruit production and guest experiences.'
      },
      {
        name: 'Develop experiential hospitality programming that commands premium ADR',
        description: 'Design chef-led cider pressing workshops, farm-to-fork harvest banquets, and apiary honey tastings.'
      },
      {
        name: 'Conduct break-even analysis on capital-intensive farm infrastructure additions',
        description: 'Model payback periods for converting rustic barns into heated wedding and corporate event venues.'
      },
      {
        name: 'Navigate agricultural zoning variances and commercial hospitality permits',
        description: 'Secure county conditional use permits for guest cottages on protected agricultural preserve land.'
      },
      {
        name: 'Establish sustainable circular economy practices as a core brand differentiator',
        description: 'Implement closed-loop composting, on-site greywater irrigation, and zero-single-use-plastic standards.'
      }
    ],
    twentyFirstCenturySkills: ['Sustainability Leadership', 'Strategic Planning', 'Financial Forecasting', 'Communication'],
    background: `The Heritage Orchard Inn is a proposed 60-acre agri-tourism destination situated in a historic apple and cherry growing valley. The property includes an operational 120-year-old organic orchard, a historic farmstead, and a dilapidated packing barn. You and your partner have founded Heritage Living LLC to purchase the family farm and transform it into a premier 20-room culinary boutique lodge, artisanal cider tasting room, and 200-guest wedding barn.

The business plan addresses two powerful consumer trends: growing demand for transparent sustainable food systems and urban consumer appetite for authentic rural wellness escapes. Guestrooms in individual cedar orchard cottages are projected to achieve an ADR of $425 with 68% annual occupancy. Furthermore, weekend barn wedding buyouts will generate an additional $35,000 per event across 26 summer and autumn weekends.

However, the commercial lending division of the regional agricultural bank has raised concerns regarding agricultural zoning restrictions, volatile fruit crop yields, and seasonal cash flow gaps during harsh winter months. Total commercial financing required is $3.6 million against a founder equity pledge of $900,000.

You and your partner are meeting with the Commercial Agribusiness Lending Director (the judge) to secure loan commitment approval.`,
    challenge: 'Present a 15-minute business and risk mitigation proposal to the lending director demonstrating that Heritage Orchard Inn will maintain resilient cash flow and loan debt service coverage across all four seasons.',
    judgeQuestions: [
      'If an unseasonal frost wipes out 70% of the apple harvest, how will that impact the resort experience and your debt service obligations?',
      'How will your operating model maintain high service standards when hospitality staffing is notoriously scarce in rural agricultural communities?'
    ],
    benchmarkPoints: [
      'Demonstrate debt service coverage ratio (DSCR) of 1.45x buffered by guaranteed wedding non-refundable advance deposits.',
      'Insure agricultural exposure through federal multi-peril crop insurance and contractual sourcing pacts with neighboring organic farms.',
      'Develop winter culinary masterclasses, truffle foraging retreats, and craft distilling workshops to eliminate shoulder season revenue drops.',
      'Offer on-site seasonal staff cottages with competitive hourly living wages and culinary apprenticeship accreditations to solve rural hiring bottlenecks.'
    ]
  },
  {
    id: 'ent-05',
    title: 'Mobile Luxury Hospitality Fleet: The Artisan Pour & Mobile Suites Project',
    instructionalArea: 'Entrepreneurship',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Co-Founders & Mobile Logistics Directors',
    judgeRole: 'Hospitality Angel Investor & Managing Partner',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate low-capex asset-light mobile hospitality business concepts',
        description: 'Analyze vintage vehicle upcycling versus permanent brick-and-mortar hotel real estate investment.'
      },
      {
        name: 'Formulate dynamic route scheduling and pop-up event booking strategies',
        description: 'Align mobile assets with high-profile music festivals, PGA golf tournaments, and remote luxury weddings.'
      },
      {
        name: 'Calculate customer acquisition costs and lifetime value in mobile luxury services',
        description: 'Optimize event promoter partnerships and high-net-worth client referral loops.'
      },
      {
        name: 'Manage complex multi-jurisdictional licensing and health inspection logistics',
        description: 'Ensure compliance with county temporary lodging permits, mobile liquor catering licenses, and wastewater disposal.'
      },
      {
        name: 'Scale asset utilization across distinct corporate and private event markets',
        description: 'Achieve 70%+ weekend utilization through diverse B2B brand activation contracts.'
      }
    ],
    twentyFirstCenturySkills: ['Logistics Management', 'Innovative Financing', 'Negotiation', 'Creative Problem Solving'],
    background: `Traditional luxury hotels require millions in upfront brick-and-mortar capital and remain tethered to fixed geographic locations. Meanwhile, premium remote events—such as equestrian championships, luxury music festivals, wine country private weddings, and corporate wilderness summits—frequently suffer from a severe shortage of nearby luxury lodging and bespoke craft beverage service.

You and your partner have launched Artisan Fleet Hospitality, an entrepreneurial venture featuring six custom-built 34-foot luxury Airstream mobile guest suites paired with a vintage 1958 Bedford mobile craft cocktail lounge. Each mobile suite offers hotel-grade plush kings, spa-grade tiled rain showers with closed-loop water filtration, Starlink satellite connectivity, and luxury solar generators.

The fleet can be deployed nationwide to remote private estates or festival VIP compounds. Turnkey weekend buyout packages range from $24,000 to $45,000, delivering a projected 58% gross profit margin. With the six mobile suites operational and fully booked for their maiden summer season, you now seek $850,000 in growth equity to build eight additional mobile suites and an industrial prep commissary.

You are presenting your expansion plan and operating metrics to a prominent hospitality angel investor (the judge).`,
    challenge: 'Deliver a 15-minute pitch proving the operational scalability, regulatory compliance, and superior return on invested capital (ROIC) of expanding the mobile luxury hospitality fleet.',
    judgeQuestions: [
      'What are your contingency protocols if extreme weather or mechanical breakdowns strike during transit to a $40,000 client wedding?',
      'How does your venture handle municipal liquor laws and graywater dumping regulations when crossing state lines?'
    ],
    benchmarkPoints: [
      'Demonstrate rapid 14-month capital payback per mobile suite based on 32 annual paid deployments at $6,000 net margin per weekend.',
      'Maintain an active redundancy protocol including hot-standby commercial tow partnerships and localized equipment rental alliances.',
      'Implement standardized SOPs for regional health district temporary catering permits and EPA-compliant greywater vacuum disposal contracts.',
      'Diversify revenue into weekday corporate mobile executive lounges and brand pop-up sponsorships.'
    ]
  },
  {
    id: 'ent-06',
    title: 'Fractional Resort Ownership & Co-Op Brand: Summit & Shoreline Estates',
    instructionalArea: 'Entrepreneurship',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Venture Partners & Development Directors',
    judgeRole: 'Managing Director of Private Equity Real Estate Fund',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Structure modern co-ownership and fractional equity hospitality models',
        description: 'Differentiate modern deeded 1/8th fractional ownership from stigmatized legacy timeshares.'
      },
      {
        name: 'Design premium property management and white-glove hospitality services',
        description: 'Provide pre-stocked organic pantries, private chef dinners, and ski/water sports valet equipment.'
      },
      {
        name: 'Build an intuitive algorithmic scheduling engine for equitable owner usage',
        description: 'Balance peak holiday reservations with off-peak seasonal availability fairly among fractional co-owners.'
      },
      {
        name: 'Monetize vacant owner inventory through curated luxury rental pools',
        description: 'Yield-manage unused owner days on luxury platforms to offset annual maintenance dues.'
      },
      {
        name: 'Address legal securities regulations and real estate brokerage compliance',
        description: 'Ensure SEC compliance regarding investment expectation representations during fractional sales.'
      }
    ],
    twentyFirstCenturySkills: ['Financial Engineering', 'Regulatory Compliance', 'Customer Experience Design', 'Communication'],
    background: `The traditional second-home vacation market is plagued by financial inefficiencies: luxury mountain and coastal vacation homes average $2.5 million to purchase yet sit vacant for over 44 weeks per year while accumulating hefty mortgage, property tax, and maintenance expenses. Simultaneously, affluent families are reluctant to purchase archaic 1980s-era timeshares with rigid weeks and high depreciation.

You and your partner have created Summit & Shoreline Estates, a tech-enabled hospitality co-ownership platform. The venture acquires turnkey luxury residences in premier ski and coastal destinations (Vail, Lake Tahoe, Kiawah Island), places each home into a property-specific LLC, and sells deeded 1/8th shares to vetted buyers. Unlike passive property managers, Summit & Shoreline manages the home with 5-star hotel operational standards: dedicated residential concierges, personal storage lockers for owner gear, scheduled deep cleans, and luxury suburban SUV use.

The venture earns a 12% development fee upon initial home syndication and an ongoing $350/month per-share recurring hospitality management fee. With three pilot properties fully capitalized in Colorado, you are seeking $2.5 million in Series A funding from a private equity real estate fund (the judge) to scale the tech platform and expand into 12 new destinations.`,
    challenge: 'Deliver a 15-minute venture pitch detailing how Summit & Shoreline transforms luxury second-home ownership into a scalable, high-margin hospitality business model.',
    judgeQuestions: [
      'How does your proprietary scheduling algorithm resolve conflicting owner demands for Christmas week and Presidents Day weekend without alienating co-owners?',
      'What protections prevent an individual owner from damaging the multi-million dollar property or defaulting on their monthly HOA dues?'
    ],
    benchmarkPoints: [
      'Implement an equitable rolling priority draft system where peak holiday booking rights rotate annually among the eight co-owners.',
      'Require mandatory $10,000 owner security escrow deposits and automatic credit-card billing for accidental damages identified during checkout inspections.',
      'Highlight dual revenue streams: upfront syndication profits ($250k+ per home) plus high-margin recurring hospitality management contracts.',
      'Showcase low owner churn backed by deeded real estate equity that can be liquidated on the open market at prevailing property appreciation rates.'
    ]
  },
  {
    id: 'ent-07',
    title: 'Pet-Centric Ultra-Luxury Resort & Spa: The Paw & Pillow Sanctuary',
    instructionalArea: 'Entrepreneurship',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Founding Partners & Chief Experience Officers',
    judgeRole: 'Hospitality Angel Investor & Luxury Brand Executive',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Identify high-growth consumer spending trends in pet humanization hospitality',
        description: 'Capitalize on affluent travelers refusing to travel without companion animals.'
      },
      {
        name: 'Design specialized architectural and operational hospitality infrastructure for pets',
        description: 'Incorporate acoustic sound dampening, antimicrobial flooring, bone-shaped splash pools, and veterinary suites.'
      },
      {
        name: 'Formulate high-margin ancillary pet wellness and grooming service tiers',
        description: 'Monetize organic dog room-service menus, canine hydrotherapy, and certified behavioral training.'
      },
      {
        name: 'Establish strict veterinary safety, immunization, and liability protocols',
        description: 'Mandate digital rabies and Bordetella verification prior to check-in to protect all guests.'
      },
      {
        name: 'Project customer lifetime value (LTV) and brand advocacy metrics in niche lodging',
        description: 'Model 45%+ direct repeat booking rates driven by passionate pet owner communities.'
      }
    ],
    twentyFirstCenturySkills: ['Market Opportunity Analysis', 'Product Architecture', 'Empathy & Branding', 'Financial Projection'],
    background: `Over 68% of U.S. households own a pet, and pet industry spending has surged past $140 billion annually. Despite this booming demand, most luxury hotels merely \"tolerate\" pets—charging punitive $150 non-refundable cleaning fees while restricting dogs to cramped rooms, banning them from dining patios, and offering little more than a cheap polyester floor bed.

You and your partner have founded The Paw & Pillow Sanctuary, the first dedicated ultra-luxury 40-suite resort designed equally for affluent travelers and their canine companions. Located in a scenic wine country valley, the property features human-and-hound plunge pools, fenced private suite lawns with agility turf, an in-room canine culinary room service menu created by veterinary nutritionists, and certified dog concierges who chaperone pets to on-site spa sessions while owners visit local wineries.

With an ADR modeled at $625/night and average ancillary spend of $185/day per dog for grooming, hydrotherapy, and doggy daycare, the property generates projected annual revenue of $7.8 million with an EBITDA margin of 36%. Total startup capitalization needed is $5.5 million for purchasing a shuttered 12-acre boutique inn and executing specialized acoustic and hygienic renovations.

You are presenting your investment deck to a luxury hospitality angel investor (the judge).`,
    challenge: 'Deliver a 15-minute pitch proving the financial power, operational viability, and unique brand moat of The Paw & Pillow Sanctuary.',
    judgeQuestions: [
      'How will your staff maintain 5-star cleanliness, odor control, and noise containment when 40 dogs are simultaneously on property?',
      'What happens if two guest dogs exhibit territorial aggression in the communal lounge or dining area?'
    ],
    benchmarkPoints: [
      'Implement medical-grade air filtration (HEPA + carbon UV-C scrubbers) and specialized non-porous antimicrobial terrazzo flooring to guarantee pristine hygiene.',
      'Mandate pre-arrival behavioral screening questionnaires and require all dogs in communal areas to be attended or chaperoned by resort pet concierges.',
      'Capitalize on intense pricing elasticity: pet parents willingly pay 30-40% premiums for stress-free luxury travel with their companion animals.',
      'Partner with prestige pet luxury brands for sponsorships, branded amenities, and retail merchandise.'
    ]
  },
  {
    id: 'ent-08',
    title: 'Thermal Springs Wellness Haven: Nirvana Bathhouse & Lodging Incubator',
    instructionalArea: 'Entrepreneurship',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Wellness Hospitality Co-Founders',
    judgeRole: 'Managing Director of Global Wellness Capital Syndicate',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Position hospitality concepts within the global wellness tourism market',
        description: 'Leverage hydrotherapy, circadian architecture, and holistic medicine to capture wellness travelers.'
      },
      {
        name: 'Develop dual revenue models combining day-guest bathhouse passes with overnight suites',
        description: 'Maximize daytime capacity utilization while maintaining tranquil exclusivity for overnight lodge guests.'
      },
      {
        name: 'Navigate complex geothermal mineral water environmental extraction rights',
        description: 'Secure state water conservation permits and heat-exchange thermal energy recycling systems.'
      },
      {
        name: 'Formulate holistic corporate retreat packages targeting executive burnout',
        description: 'Structure midweek digital detox and breathwork programs for corporate enterprise clients.'
      },
      {
        name: 'Execute a sustainable eco-positive capital expenditure plan',
        description: 'Utilize natural geothermal energy to heat guestrooms and domestic hot water, reducing utility OPEX by 45%.'
      }
    ],
    twentyFirstCenturySkills: ['Systems Thinking', 'Environmental Stewardship', 'Financial Planning', 'Executive Presence'],
    background: `Global wellness tourism has grown into an $800+ billion industry as high-stress professionals increasingly seek restorative escapes that combine medical evidence-based hydrotherapy with quiet luxury lodging. In the Cascade mountain foothills, an 18-acre property with natural geothermal mineral springs has become available for purchase at $2.2 million.

You and your partner have formulated Nirvana Springs Bathhouse & Lodge. The development vision includes 12 communal thermal mineral pools at varying temperatures, 24 minimalist cedar guest suites, an infrared sauna village, and a culinary garden restaurant serving anti-inflammatory fare. The property uses a dual monetization model: daytime bathhouse access passes capped at 120 guests per day ($95 pass fee) and luxury overnight suites priced at $575/night inclusive of unlimited soak privileges.

The project requires $6.8 million in total project capitalization. The geothermal rights have been verified by hydrologic engineers, yielding 140 gallons per minute of 118°F mineral water. However, investors are concerned about managing potential friction between rowdy daytime day-pass visitors and peaceful overnight guests paying premium rates.

You are presenting to the Managing Director of the Global Wellness Capital Syndicate (the judge) to secure $2.0 million in anchor LP equity.`,
    challenge: 'Deliver a 15-minute presentation defending the operational flow, capacity management, geothermal energy savings, and financial projections of Nirvana Springs.',
    judgeQuestions: [
      'How will you strictly prevent day-pass visitors from disturbing the sanctuary atmosphere expected by guests paying $575 per night?',
      'What are the mechanical and maintenance risks of mineral scaling in your geothermal piping, and how are replacement costs modeled?'
    ],
    benchmarkPoints: [
      'Enforce architectural zoning: separate private cliffside soaking sanctuaries reserved exclusively for overnight guests, isolated from communal daytime bathhouse pools.',
      'Implement a strict \"silent soaking\" and digital-free device policy throughout all thermal pool zones enforced by bath stewards.',
      'Highlight geothermal OPEX savings: geothermal heat exchangers provide 100% of space heating and pool temperatures, saving $240,000 annually in utility expenses.',
      'Project rapid EBITDA profitability: day-pass volume generates $3.4M in high-margin baseline revenue, insulating the resort from lodging occupancy downturns.'
    ]
  },
  {
    id: 'ent-09',
    title: 'Digital Nomad Co-Living & Hospitality Community: The NomadHaven Project',
    instructionalArea: 'Entrepreneurship',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Co-Founders & Chief Operating Officers',
    judgeRole: 'Principal Partner at Future of Work Hospitality Ventures',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze long-stay hospitality economics versus transient short-stay lodging',
        description: 'Compare 30-day extended-stay lower housekeeping costs with daily transient turnover expenses.'
      },
      {
        name: 'Design specialized infrastructure for remote knowledge workers',
        description: 'Incorporate redundant multi-gigabit fiber internet, private acoustic podcast booths, and ergonomic workstations.'
      },
      {
        name: 'Foster authentic community engagement and professional networking programming',
        description: 'Organize weekly skill-share workshops, hackathons, and weekend excursions to build guest retention.'
      },
      {
        name: 'Implement flexible tiered subscription pricing models for global remote workers',
        description: 'Offer monthly roaming passes allowing nomads to transfer memberships between international hub cities.'
      },
      {
        name: 'Manage legal tenant versus transient lodging rights in 30+ day stays',
        description: 'Structure lodging agreements that prevent long-term adverse tenant tenancy claims while ensuring flexibility.'
      }
    ],
    twentyFirstCenturySkills: ['Community Building', 'Technology Architecture', 'Contract Structuring', 'Creative Problem Solving'],
    background: `The permanent shift toward remote and hybrid work has empowered millions of digital nomads and tech professionals to work from anywhere in the world. However, remote workers face severe compromises: standard Airbnb rentals often suffer from unreliable Wi-Fi and lack community, while traditional hotels lack ergonomic workstations, communal kitchens, and affordable 30-day rates.

You and your partner have created NomadHaven, a hybrid boutique hospitality and co-living concept. Your flagship location converts a shuttered 72-room urban mid-century hotel in an artistic tech hub into a vibrant remote work paradise. NomadHaven features private designer studio suites with motorized sit-stand desks, 4K monitors, and Herman Miller chairs, complemented by a 3,000-square-foot 24/7 co-working commons, commercial chef kitchens for communal cooking, a wellness gym, and hyper-reliable dual-redundant fiber optic internet.

Guests book 30-day, 60-day, or 90-day stays averaging $2,400 per month. With 72 suites operating at an average 92% occupancy rate, gross annual revenue reaches $1.9 million with operating expenses of only 38% due to once-weekly housekeeping and minimal front desk labor.

You are presenting to the Principal Partner of Future of Work Hospitality Ventures (the judge) to fund a three-property urban expansion.`,
    challenge: 'Deliver a 15-minute venture pitch detailing the operating margins, community retention, IT redundancy, and legal lease structuring of NomadHaven.',
    judgeQuestions: [
      'What measures will you take to prevent long-stay residents from claiming statutory residential tenant protections that make evictions difficult?',
      'How does NomadHaven prevent cliques and maintain a welcoming, productive work culture among diverse international travelers?'
    ],
    benchmarkPoints: [
      'Structure agreements under commercial transient guest lodging licenses with mandatory 29-day room rotation clauses to avoid residential tenancy creation.',
      'Maintain enterprise-level IT infrastructure: dual diverse ISP fiber backbones, Wi-Fi 6E mesh routers, and uninterrupted battery backup power systems.',
      'Deploy full-time community experience curators to host weekly welcome mixers, peer mastermind dinners, and weekend adventure trips.',
      'Demonstrate extraordinary 68% repeat and referral booking rates that virtually eliminate costly OTA commission fees.'
    ]
  },
  {
    id: 'ent-10',
    title: 'Culinary Incubator & Pop-Up Chef Hotel: The Commissary Grand Hotel',
    instructionalArea: 'Entrepreneurship',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Venture Partners & Creative Directors',
    judgeRole: 'Managing Partner of Culinary Arts & Hospitality Capital',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Innovate food and beverage operations through revolving culinary residencies',
        description: 'Replace stagnant hotel restaurant dining rooms with rotating 90-day pop-up residencies by rising star chefs.'
      },
      {
        name: 'Formulate revenue-share lease structures for culinary entrepreneurship',
        description: 'Provide kitchen equipment and service staff in exchange for 22% of gross F&B receipts, mitigating hotel overhead.'
      },
      {
        name: 'Drive lodging occupancy through destination gastronomic programming',
        description: 'Bundle hotel weekend stays with guaranteed tasting counter reservations and chef masterclasses.'
      },
      {
        name: 'Manage health department regulations and food safety across changing culinary operators',
        description: 'Maintain unified executive kitchen sanitation oversight and ServSafe compliance across guest chefs.'
      },
      {
        name: 'Scale digital media, culinary podcasting, and creator sponsorship revenue',
        description: 'Build an on-site broadcast studio kitchen to monetize culinary YouTube content and brand sponsorships.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary Strategy', 'Partnership Development', 'Marketing Storytelling', 'Financial Engineering'],
    background: `Hotel food and beverage departments have historically been notorious profit drains, with high food waste, bloated culinary labor costs, and uninspired menus that hotel guests actively avoid in favor of local neighborhood dining.

You and your partner have conceptualized The Commissary Grand Hotel, an innovative 65-room boutique hotel centered entirely around culinary discovery and chef incubation. Rather than hiring a permanent executive chef and maintaining a traditional hotel dining room, the hotel features three distinct commercial demonstration kitchens operated on rotating 90-day residencies by award-winning up-and-coming chefs, food truck pioneers, and international culinary talent.

The hotel provides the commercial kitchen infrastructure, front-of-house service staff, and marketing, while visiting resident chefs bring their signature recipes and culinary vision. The hotel receives 22% of all gross food and beverage sales plus lucrative corporate event buyouts. Most importantly, the constant culinary buzz drives weekend leisure hotel occupancy to 89% at an ADR of $385, as food enthusiasts travel from across the region to experience exclusive tasting menus.

You are presenting to the Managing Partner of Culinary Arts & Hospitality Capital (the judge) to secure $3.2 million in conversion capital for a historic downtown hotel.`,
    challenge: 'Deliver a 15-minute pitch proving how the culinary residency model eliminates traditional hotel F&B losses, drives room ADR, and creates a national media magnet.',
    judgeQuestions: [
      'What happens if a visiting resident chef receives terrible food critic reviews or experiences a public relations controversy during their 90-day residency?',
      'How does the hotel maintain consistent food safety, allergy protocols, and inventory control with completely different cooking styles rotating every three months?'
    ],
    benchmarkPoints: [
      'Retain a permanent in-house Director of Culinary Operations who oversees food safety, ServSafe compliance, and vendor bulk procurement across all visiting chef teams.',
      'Include performance and conduct termination clauses in all chef residency agreements, backed by a standby roster of local alumni chefs ready for interim takeovers.',
      'Achieve positive F&B department profit margin of 28% compared to traditional hotel F&B averages of 5-8% by eliminating fixed head-chef executive payroll.',
      'Leverage on-site digital media studio to film culinary cooking series, generating supplemental creator sponsorship revenue.'
    ]
  }
];
