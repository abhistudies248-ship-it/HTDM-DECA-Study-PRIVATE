import { DecaCaseStudy } from '../types/deca';

export const financialAnalysisCases: DecaCaseStudy[] = [
  {
    id: 'fin-01',
    title: 'Dynamic Pricing and Yield Management Strategy during Regional Festival Demand',
    instructionalArea: 'Financial Analysis',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Revenue Management & Hotel Controller',
    judgeRole: 'Vice President of Asset Management & Ownership Representative',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Calculate key hotel performance metrics (ADR, Occupancy %, and RevPAR)',
        description: 'Demonstrate mathematical relationships between room demand, rate elasticity, and Revenue Per Available Room.'
      },
      {
        name: 'Apply yield management algorithms to maximize revenue per available room night',
        description: 'Implement tiered pricing thresholds, minimum length of stay (MLOS) restrictions, and non-refundable deposits.'
      },
      {
        name: 'Analyze historical booking curves and pace reports',
        description: 'Compare current booking velocity against historical pickup rates to identify underpriced peak inventory.'
      },
      {
        name: 'Evaluate the tradeoff between rate premiums and guest satisfaction ratings',
        description: 'Balance high event rates against guest price-gouging perception and review score depreciation.'
      },
      {
        name: 'Forecast net profit contribution after distribution channel deductions',
        description: 'Calculate net ADR by subtracting OTA commissions and credit card interchange fees.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Collaboration', 'Communication'],
    background: `The Riverside Grand is an upscale 320-room full-service hotel located on the waterfront of an emerging mid-sized Midwestern city, situated just two miles from a newly developed 80-acre civic riverfront park. Under normal operating conditions, the hotel achieves an Average Daily Rate (ADR) of $189 at 75% occupancy during summer weekends, generating approximately $45,360 in nightly room revenue. The property caters primarily to a balanced mix of corporate travel during weekdays and regional wedding parties and leisure sports travelers on weekends.

On Tuesday morning, the municipal convention and visitors bureau made an unprecedented joint announcement: the city was selected to host the "Echoes of the River International Music and Arts Festival," a major three-day global festival scheduled for the third weekend of July. The event features internationally famous headliners and is officially forecasted to draw over 90,000 music tourists, concertgoers, and media crews from across the continent into a metropolitan market with fewer than 4,200 total downtown hotel rooms.

Within four hours of the public festival announcement, the hotel's central reservation system (CRS) experienced an unprecedented, unmonitored booking surge: automated third-party online travel agency (OTA) bots and opportunistic consumers instantly reserved 110 of the hotel's prime waterfront rooms at the property's standard non-event weekend rate of $189 per night, before the automated revenue management threshold alerts triggered. Nearby competitor hotels caught the surge earlier and immediately froze their inventories, re-opening rates at $425 to $550 per night.

The hotel controller and asset managers estimate that selling those initial 110 rooms at the base rate resulted in a displacement loss of over $75,000 in gross room revenue. However, the hotel still controls 210 uncommitted rooms for the three-night festival weekend (Friday, Saturday, and Sunday). Property ownership has demanded an immediate, aggressive yield management intervention to optimize the remaining room inventory, enforce strict stay restrictions, and maximize ancillary revenue across parking, dining, and shuttle transportation.

You and your partner (serving as the Director of Revenue Management and Hotel Controller) have been called into an urgent strategy meeting with the Vice President of Asset Management and Ownership Representative (played by the judge). You must present a comprehensive Dynamic Pricing and Yield Management blueprint. Your presentation must detail mathematical calculations for RevPAR and net ADR, tiered inventory pricing tranches, minimum length of stay (MLOS) rules, non-refundable deposit terms, OTA channel throttling, and ancillary revenue bundling to capture maximum economic value from the remaining 210 festival rooms.`,
    challenge: 'Present an aggressive Dynamic Yield Management & Pricing Strategy to the VP of Asset Management. Propose tiered rate structures for the remaining 210 rooms, minimum stay restrictions, premium package bundling, and strategies to maximize total guest folio spend.',
    judgeQuestions: [
      'What minimum length of stay (MLOS) rule should we implement for the festival weekend, and could that rule hurt our Thursday or Monday shoulder bookings?',
      'How do we capture ancillary revenue (parking, food and beverage, late checkouts) from festival attendees beyond room rate?'
    ],
    benchmarkPoints: [
      'Implement an immediate 3-night MLOS (Friday-Sunday) restriction with non-refundable 100% advance deposit for all remaining 210 rooms.',
      'Deploy 4 dynamic price tiers: next 70 rooms at $419, next 70 rooms at $489, final 70 rooms at $579 (forecasting an overall festival weekend ADR of $428 vs base $189, generating $230,000 in incremental revenue).',
      'Mandate a $45/night "Festival Amenity Fee" including private continuous festival shuttle bus, survival hydration kit, and recovery bloody mary buffet.'
    ]
  },
  {
    id: 'fin-02',
    title: 'Capital Budgeting and ROI Analysis for a $2.5M Hotel Spa and Wellness Renovation',
    instructionalArea: 'Financial Analysis',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Financial Analyst & Resort Development Director',
    judgeRole: 'Managing Director & Private Equity Asset Manager',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Calculate financial investment evaluation metrics (NPV, IRR, and Payback Period)',
        description: 'Demonstrate Net Present Value using a 10% hurdle rate and determine exact internal rate of return.'
      },
      {
        name: 'Forecast incremental revenue streams from luxury wellness facilities',
        description: 'Model secondary guest spend, spa treatment pricing, day passes, and private cabana rentals.'
      },
      {
        name: 'Estimate capital expenditure costs and construction downtime disruptions',
        description: 'Factor in demolition, hydrotherapy installation, architectural finishes, and temporary room displacement.'
      },
      {
        name: 'Analyze the impact of premium amenities on resort Average Daily Rate (ADR)',
        description: 'Quantify the ADR rate premium justified across 280 rooms once spa facilities are operational.'
      },
      {
        name: 'Evaluate sensitivity analysis and financial risk scenarios',
        description: 'Model best-case, expected, and worst-case cash flow scenarios based on economic downturns.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Communication'],
    background: `The Whispering Pines Mountain Resort is a 280-room full-service destination property located in the Sierra Nevada foothills, operating under an equity ownership group with a strict 10% cost-of-capital hurdle rate. The resort currently features an outdated 4,000-square-foot fitness center and four basic massage treatment rooms built in 1998. The property generates an annual occupancy of 72% and an ADR of $275. However, guest exit surveys consistently reveal that 62% of affluent leisure guests are disappointed by the resort's lack of comprehensive wellness, hydrotherapy, and modern spa facilities.

In response, the resort development team has completed preliminary architectural designs to convert an underutilized adjacent conference wing into a state-of-the-art 12,000-square-foot "Alpine Thermal Sanctuary and Hydrotherapy Spa." The proposed facility will feature eight treatment suites, an outdoor thermal mineral pool circuit, Himalayan salt saunas, cryotherapy chambers, and an organic wellness cafe. The estimated total capital expenditure (CapEx) for the complete renovation and equipment buildout is $2,500,000.

The financial pro forma forecasts significant new cash inflows once the spa is completed. Direct spa operations are projected to generate $1,100,000 in gross service and retail revenue in Year 1, operating with a 35% net departmental operating profit ($385,000). Crucially, the addition of a world-class wellness facility is projected to justify a $35 increase in overall resort Average Daily Rate (ADR) across the property's 280 rooms during peak and shoulder seasons, contributing an estimated $730,000 in incremental high-margin room revenue annually.

However, the private equity investment committee is notoriously risk-averse and demands rigorous financial scrutiny before approving multi-million-dollar capital outlays. The committee requires detailed quantitative modeling including Net Present Value (NPV) calculated at a 10% discount rate, Internal Rate of Return (IRR), and the precise discounted payback period. Furthermore, the committee insists on a clear contingency plan addressing construction noise mitigation, potential supply chain cost overruns, and economic sensitivity modeling in the event of a regional recession.

You and your partner (serving as the Hospitality Financial Analyst and Resort Development Director) have been invited to present your capital appropriation request to the Managing Director and Private Equity Asset Manager (played by the judge). You must present a comprehensive Capital Budgeting and Investment Appraisal proposal. Your presentation must deliver detailed financial statements, NPV and IRR calculations, revenue uplift projections, sensitivity analyses, and risk mitigation strategies to secure immediate board authorization for the $2.5 million capital expenditure.`,
    challenge: 'Present a comprehensive Capital Budgeting and Investment Proposal for a $2.5M Hotel Spa renovation to the Private Equity Asset Manager. Demonstrate NPV, IRR, discounted payback period, ADR rate lift, and sensitivity analysis under varying economic conditions.',
    judgeQuestions: [
      'What is the project\'s Net Present Value at our mandatory 10% hurdle rate, and how sensitive is the payback period if construction is delayed by 4 months?',
      'How will your operational plan protect existing room revenue and guest satisfaction while heavy demolition and plumbing installation take place?'
    ],
    benchmarkPoints: [
      'Present a 5-year discounted cash flow: NPV of +$845,000 at 10% discount rate, IRR of 21.4%, and discounted payback period of 3.8 years.',
      'Model the dual revenue engine: direct spa departmental profit ($385k/yr) combined with a $35 ADR room rate lift across 280 rooms ($730k/yr).',
      'Deploy noise mitigation protocol: heavy jackhammering restricted strictly to 10:00 AM - 3:00 PM, with buffer rooms surrounding construction taken out of inventory.'
    ]
  },
  {
    id: 'fin-03',
    title: 'Cost Control and Food Waste Reduction Strategy for Hotel Banquet Operations',
    instructionalArea: 'Financial Analysis',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Food & Beverage Finance & Executive Banquet Chef',
    judgeRole: 'Vice President of Hotel Finance and Asset Protection',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Calculate food cost percentage and analyze variance against budget',
        description: 'Examine theoretical versus actual food costs, inventory shrinkage, and over-portioning variances.'
      },
      {
        name: 'Conduct financial cost-benefit analysis of food waste reduction systems',
        description: 'Evaluate automated AI food waste tracking scales (e.g. Winnow/Leanpath) and calculate payback.'
      },
      {
        name: 'Implement standardized recipe costing and menu engineering matrices',
        description: 'Classify banquet menu items into stars, plowhorses, puzzles, and dogs to maximize gross margin.'
      },
      {
        name: 'Establish strict inventory turnover and par-level procurement controls',
        description: 'Optimize Just-In-Time (JIT) ordering, supplier price-locking contracts, and FIFO storage practices.'
      },
      {
        name: 'Quantify tax savings and community benefits of commercial food donation',
        description: 'Leverage the Bill Emerson Good Samaritan Food Donation Act for tax deductions and local goodwill.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Collaboration'],
    background: `The Grand Millennium Hotel & Convention Center is an 800-room metropolitan flagship property with 55,000 square feet of banquet and ballroom space. The hotel's banquet division serves over 400,000 meals annually across corporate galas, medical conventions, and society weddings, generating $14.2 million in gross food and beverage revenue. Historically, the banquet food cost was budgeted at an industry-standard 28% of gross banquet sales.

However, over the past three fiscal quarters, banquet food costs have surged to an unsustainable 36.8%, representing an annual profit leak of over $1,250,000. An internal financial audit revealed that the single largest driver of this cost explosion is catastrophic food overproduction and waste. Because banquet sales managers routinely promise clients generous buffet replenishment until the final minute of service, banquet chefs have been cooking a 25% to 30% overage above the contracted Banquet Event Order (BEO) headcount to prevent any buffet dish from running empty.

During the last quarter alone, the hotel discarded an estimated 48 tons of untouched, high-end cooked protein, seafood, and gourmet sides into commercial landfill dumpsters. In addition to the direct ingredient cost loss, the hotel incurred $24,000 in excess municipal solid waste disposal tipping fees. Meanwhile, kitchen prep cooks routinely disregard standardized recipe yield cards, leading to heavy portion overages on plated steaks and expensive imported seafood courses.

Compounding the problem, the culinary department relies on manual dry-erase clipboards for tracking inventory, resulting in high spoilage rates in the walk-in refrigerators and frequent rush-order purchases at premium vendor prices. Ownership has issued an executive mandate: banquet food cost percentage must be brought back down to 29% within six months, recovering over $1,000,000 in bottom-line operating profit without compromising banquet guest satisfaction or buffet visual presentation.

You and your partner (serving as the Director of F&B Finance and the Executive Banquet Chef) are scheduled for an executive briefing with the Vice President of Hotel Finance and Asset Protection (played by the judge). You must present a comprehensive Cost Control and Food Waste Reduction strategy. Your presentation must detail mathematical calculations of food cost variance, menu re-engineering for high-margin items, the deployment of smart kitchen waste-tracking scales, standardized portion controls, and certified local food pantry donation partnerships to earn federal tax deductions.`,
    challenge: 'Present a comprehensive Banquet Cost Control and Food Waste Reduction Plan to the VP of Hotel Finance. Bring food cost percentage down from 36.8% to 29% through kitchen waste analytics, portion control standards, and menu re-engineering.',
    judgeQuestions: [
      'How will your buffet management protocol prevent buffets from looking depleted and unappealing to late diners while eliminating massive food overproduction?',
      'What is the financial payback period for investing in digital kitchen waste scales, and how will kitchen staff be held accountable to use them?'
    ],
    benchmarkPoints: [
      'Transition from 25% overage cooking to a 7% tiered replenishment model using smaller buffet presentation vessels that maintain abundant appearance with 60% less food volume.',
      'Deploy smart AI kitchen waste scales (Winnow/Leanpath): $18,000 CapEx with a verified 4.2-month payback period through daily tracking of discarded prep and line waste.',
      'Partner with a local certified food rescue charity: donating vacuum-sealed untouched banquet food, generating an estimated $85,000 annual federal tax deduction under the Emerson Act.'
    ]
  },
  {
    id: 'fin-04',
    title: 'Evaluating Third-Party Restaurant Leasing vs. In-House Culinary Operations',
    instructionalArea: 'Financial Analysis',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hotel Asset Analyst & Commercial Leasing Specialist',
    judgeRole: 'Managing Trustee & Real Estate Investment Committee Chair',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Perform comparative financial modeling (In-House Operating vs. Triple-Net Master Lease)',
        description: 'Compare gross revenues, departmental labor costs, food costs, and net operating income (NOI) stability.'
      },
      {
        name: 'Analyze revenue-sharing mechanisms (Base Rent vs. Percentage of Gross Sales)',
        description: 'Structure lease terms featuring minimum guaranteed base rent plus a 6-8% gross sales breakpoint.'
      },
      {
        name: 'Evaluate financial and operational risk transfers in hospitality leases',
        description: 'Examine how leasing transfers culinary payroll, food inflation, and equipment maintenance liabilities to the tenant.'
      },
      {
        name: 'Assess brand equity impact and guest review spillover effects',
        description: 'Analyze how partnering with a celebrity chef restaurant group influences hotel ADR and foot traffic.'
      },
      {
        name: 'Structure tenant improvement (TI) allowances and capital expenditure obligations',
        description: 'Negotiate landlord capital contributions against long-term lease covenants and exit clauses.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Communication'],
    background: `The Skyline Regent is a 420-room full-service luxury hotel located in the premier financial district of a bustling coastal metropolis. While room operations are highly profitable with an ADR of $365 and 82% occupancy, the hotel's 180-seat signature restaurant, "Solstice Grill," is a severe financial drain on property operating performance. Over the past three years, the restaurant generated an average annual operating loss of $280,000, plagued by high culinary union labor rates, kitchen turnover, and 38% food cost inefficiencies.

Hotel ownership is considering a fundamental strategic transition: permanently closing the self-operated restaurant and leasing the prime 6,500-square-foot street-level dining space to an acclaimed national restaurant hospitality group, "Lumina Dining Concepts." Lumina operates several high-profile, Michelin-recognized contemporary Italian trattorias in major gateway cities and boasts a massive, affluent culinary following.

Lumina Dining Concepts has submitted a formal lease proposal for a 10-year term. Under the proposed contract, Lumina would assume 100% of restaurant operational expenses, culinary payroll, inventory procurement, and liquor liability. Financially, Lumina proposes paying the hotel a guaranteed Base Rent of $320,000 per year, plus a "Percentage Rent" of 7% on all gross food and beverage sales exceeding an annual breakpoint threshold of $4,500,000. Additionally, Lumina would provide room service breakfast and late-night dining for hotel guests under strict brand standard service level agreements (SLAs).

In exchange, Lumina demands a Landlord Tenant Improvement (TI) allowance of $750,000 toward a comprehensive $2,200,000 architectural buildout and requires dedicated signage on the hotel's exterior street facade. The hotel's real estate investment committee is divided: some board members prefer the guaranteed, risk-free net rental income and elimination of culinary losses, while others fear losing direct managerial control over room service quality and morning breakfast delivery for high-value VIP hotel loyalty guests.

You and your partner (serving as the Hotel Asset Analyst and Commercial Leasing Specialist) have been invited to present your financial evaluation to the Managing Trustee and Real Estate Investment Committee Chair (played by the judge). You must present a rigorous comparative financial pro forma. Your presentation must contrast 10-year projected cash flows between continued in-house operations and the Lumina lease structure, analyze the net present value of the TI allowance investment, establish enforceable service level agreements for guest dining, and provide a definitive recommendation.`,
    challenge: 'Present a 10-Year Comparative Financial Pro Forma evaluating In-House Culinary Operations versus Third-Party Restaurant Leasing to the Investment Committee. Compare Net Operating Income, evaluate the $750K TI allowance, and structure room service SLAs.',
    judgeQuestions: [
      'What specific contractual penalties or default remedies must we write into the lease if Lumina fails to deliver timely room service breakfast to our elite hotel guests?',
      'How does the Net Present Value of leasing compare to the potential upside of hiring our own renowned executive chef to turn around in-house dining?'
    ],
    benchmarkPoints: [
      'Present 10-year pro forma: leasing generates a positive NOI swing of +$625,000 annually (converting a $280k operating loss into $345k guaranteed net rent + percentage rent).',
      'The $750,000 Tenant Improvement allowance achieves a rapid payback period of 2.17 years and an internal rate of return (IRR) of 34.6%.',
      'Incorporate ironclad Guest Service SLAs: room service delivery within 30 minutes, 15% discount for hotel registered guests, and $1,000 daily liquidated damages for unexcused service disruptions.'
    ]
  },
  {
    id: 'fin-05',
    title: 'Feasibility Study for Adding Electric Vehicle (EV) Charging Stations and Solar Canopy',
    instructionalArea: 'Financial Analysis',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Sustainability Financial Analyst & Director of Hotel Facilities',
    judgeRole: 'Vice President of Hotel Asset Development and Capital Projects',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Perform capital feasibility and net present value calculations for green infrastructure',
        description: 'Evaluate solar canopy installation and DC fast charger equipment costs against federal energy tax credits.'
      },
      {
        name: 'Structure dynamic EV charging monetization models (Cost-per-kWh vs. Parking Surcharge)',
        description: 'Design charging tariffs that cover utility demand charges, generate profit, and offer loyalty guest perks.'
      },
      {
        name: 'Identify municipal and federal clean energy incentives (Inflation Reduction Act Section 30C / 48)',
        description: 'Quantify 30% federal investment tax credits (ITC), local utility rebates, and accelerated MACRS depreciation.'
      },
      {
        name: 'Analyze parking lot space allocation, utilization rates, and dwell-time economics',
        description: 'Forecast EV driver spending at hotel dining and retail outlets while charging.'
      },
      {
        name: 'Measure environmental ESG reporting metrics and sustainability certification points',
        description: 'Calculate carbon footprint offsets and LEED certification credits to attract eco-conscious corporate meetings.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Environmental Stewardship'],
    background: `The Oakridge Valley Resort & Golf Club is an expansive 300-room suburban property situated along a major interstate highway corridor connecting two high-tech metropolitan centers. The resort features an 18-hole golf course, three dining outlets, and an outdoor parking facility with 450 surface parking stalls. Currently, the hotel offers only two antiquated Level 2 destination chargers that are constantly occupied, broken, or blocked by non-electric vehicles, generating frequent guest complaints.

Over the past two years, electric vehicle (EV) adoption in the resort's primary drive market has skyrocketed, with EV sales reaching 18% of all new vehicle registrations. Business travelers and weekend golf guests frequently call the concierge desk asking if guaranteed fast-charging is available on property. When informed that chargers are unavailable, many EV owners choose to book rooms at nearby newly constructed competitor hotels that advertise extensive Tesla Supercharger and universal DC fast-charging plazas.

Property leadership has commissioned a capital engineering feasibility study to transform the south parking lot: the proposal envisions installing a 150-kilowatt solar photovoltaic canopy covering 60 parking spaces, coupled with eight commercial-grade Level 3 DC Fast Chargers (capable of charging a vehicle battery to 80% in 25 minutes) and sixteen Level 2 chargers for overnight guests. The total project capital cost is budgeted at $680,000.

Crucially, significant clean energy incentives can dramatically offset upfront expenses. Under the federal Inflation Reduction Act (IRA), the project qualifies for a 30% solar Investment Tax Credit (ITC) and an alternative fuel vehicle refueling property credit (Section 30C), totaling $204,000 in direct tax credits. Furthermore, the regional electric utility offers a $75,000 infrastructure rebate, and 100% bonus depreciation under MACRS can be claimed in Year 1. The resort must now determine an optimal commercial monetization strategy: whether to partner with an EV network provider (ChargePoint, EVgo) under a revenue-share agreement or own and operate the chargers directly to capture 100% of electricity markup profits.

You and your partner (serving as the Sustainability Financial Analyst and Director of Hotel Facilities) are presenting your feasibility study to the Vice President of Hotel Asset Development and Capital Projects (played by the judge). You must present a comprehensive Financial Feasibility and Monetization Plan. Your presentation must detail net capital outlay after tax incentives, projected charging session revenue, solar energy cost offset calculations, operational maintenance plans, and environmental ESG metrics.`,
    challenge: 'Present a Financial Feasibility Study for an EV Fast-Charging Plaza and Solar Canopy to the VP of Capital Projects. Present net capital costs after 30% IRA tax credits and utility rebates, electricity tariff monetization models, and 5-year ROI forecasts.',
    judgeQuestions: [
      'How will your charging fee structure prevent non-hotel highway travelers from congesting our parking spaces without dining or spending money at our resort?',
      'Should we purchase the charging equipment outright to retain all fees or enter a turnkey lease with a third-party EV charging network?'
    ],
    benchmarkPoints: [
      'Present financial engineering: total project cost of $680,000 is reduced to a net cash outlay of $401,000 after $204,000 federal ITC tax credits and $75,000 utility rebates.',
      'Establish dynamic electricity pricing: $0.42 per kWh for public drivers (yielding a 55% gross margin over commercial electric rates) and discounted $0.28 per kWh for registered hotel guests.',
      'Solar canopy generates 210,000 kWh annually, offsetting $29,000 in resort parking lot lighting costs and achieving a net project payback period of 4.4 years.'
    ]
  },
  {
    id: 'fin-06',
    title: 'Managing Cash Flow and Working Capital During Seasonal Resort Winterization',
    instructionalArea: 'Financial Analysis',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Financial Officer & Director of Resort Operations',
    judgeRole: 'Managing General Partner & Commercial Banking Officer',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze seasonal cash flow volatility and working capital cycles in resort lodging',
        description: 'Examine high summer operating surplus versus severe winter liquidity drains and debt service commitments.'
      },
      {
        name: 'Construct an 18-month rolling cash flow forecast and liquidity reserve model',
        description: 'Forecast monthly cash inflows, payroll reduction, essential maintenance carry costs, and principal debt payments.'
      },
      {
        name: 'Negotiate revolving lines of credit and commercial debt covenant flexibilities',
        description: 'Maintain compliance with Debt Service Coverage Ratios (DSCR) and minimum liquidity covenants.'
      },
      {
        name: 'Design operational winterization cost-containment protocols',
        description: 'Mothball unused wings, reduce HVAC setpoints, suspend seasonal vendor contracts, and retain core staff.'
      },
      {
        name: 'Generate off-season ancillary cash flows through winter storage and holiday events',
        description: 'Monetize marina boat winterization, corporate holiday parties, and winter maintenance workshops.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Communication'],
    background: `The Harbor Point Resort & Marina is a 240-room premier coastal resort located on the shores of Lake Michigan in Northern Michigan. During its peak five-month summer and autumn season (May through September), the resort operates at 91% occupancy with an ADR of $385. In these peak months, the resort generates over $11.5 million in gross revenues, producing a robust operating cash surplus of $3.8 million. The property employs 260 seasonal staff and features a 120-slip marina, two pools, and three waterfront dining pavilions.

However, during the harsh seven-month Midwest winter and early spring (October through April), freezing temperatures and lake-effect snowfall cause leisure tourism to evaporate completely. Occupancy plunges to below 12%, with mid-week occupancy often hovering at zero. During this extended off-season, monthly operating revenue drops to less than $45,000, while fixed carrying costs—including property taxes, municipal insurance, core executive salaries, minimal heating to prevent burst pipes, and monthly commercial mortgage debt service—total $285,000 per month.

Over the past two years, poor working capital management depleted the resort's liquidity. In previous autumns, ownership prematurely distributed summer operating profits to equity partners as dividend payouts, leaving the resort with insufficient cash reserves by February. Last winter, the property was forced to take an emergency, high-interest mezzanine bridge loan at a punishing 14% interest rate to meet mortgage debt service, nearly triggering a technical loan default with its primary commercial lender.

The primary commercial bank holding the resort's $18 million first mortgage has issued a formal notice: the resort must establish a formalized Winterization Liquidity & Working Capital Management Plan and maintain a minimum Debt Service Coverage Ratio (DSCR) of 1.25x and a minimum cash reserve of $750,000 at all times, or face immediate loan covenant default and foreclosure proceedings.

You and your partner (serving as the Chief Financial Officer and Director of Resort Operations) are presenting your working capital and winterization strategy to the Managing General Partner and the Commercial Banking Officer (played by the judge). You must present an airtight 18-Month Rolling Cash Flow Model. Your presentation must detail seasonal profit sweep reserves, physical plant winterization procedures to slash utility overhead, off-season debt restructuring, and innovative winter revenue activations (such as heated indoor boat storage and regional corporate holiday parties) to protect resort liquidity.`,
    challenge: 'Present an 18-Month Seasonal Working Capital and Cash Flow Strategy to the Managing Partner and Bank Officer. Establish liquidity reserves, winterization cost-containment procedures, loan covenant compliance, and off-season revenue generation.',
    judgeQuestions: [
      'What specific percentage of peak summer operating surplus must be legally swept into an escrowed liquidity account before any partner distributions are permitted?',
      'How will your winterization procedures protect our plumbing and mechanical systems from catastrophic freeze damage while minimizing heating utility expenses?'
    ],
    benchmarkPoints: [
      'Institute a mandatory "Winterization Sweep Escrow": sweeping 45% of peak net summer cash ($1.7M) into a locked capital reserve to guarantee winter mortgage debt and carry costs.',
      'Execute facility mothballing: shutting down and draining plumbing in 180 seasonal guest rooms, reducing winter natural gas and electric utility overhead by 62%.',
      'Generate $210,000 in winter ancillary revenue: offering dry-dock heated boat storage at the marina and hosting regional corporate holiday weekend parties in the main lodge.'
    ]
  },
  {
    id: 'fin-07',
    title: 'Analyzing Room Revenue Cannibalization from Discount Group Contracts',
    instructionalArea: 'Financial Analysis',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Revenue Strategy & Commercial Group Sales Analyst',
    judgeRole: 'Vice President of Hotel Asset Management and Commercial Performance',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Perform displacement and cannibalization analysis on hotel room inventory',
        description: 'Calculate net revenue gains or losses when booking low-rate group blocks over high-ADR transient leisure dates.'
      },
      {
        name: 'Evaluate total guest folio spend (TRevPAR) across group vs. transient segments',
        description: 'Account for banquet food & beverage spend, audiovisual rentals, and resort fee exemptions.'
      },
      {
        name: 'Structure enforceable contract slippage, attrition, and cancellation clauses',
        description: 'Enforce 85-90% minimum room block pickup commitments with steep financial penalty schedules.'
      },
      {
        name: 'Establish transient hurdle rates and dynamic group rate quoting algorithms',
        description: 'Determine the minimum acceptable group rate (MAGR) required to break even against transient displacement.'
      },
      {
        name: 'Balance revenue optimization with long-term corporate client relationship value',
        description: 'Evaluate multi-year convention contracts against single-weekend transient rate spikes.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Collaboration'],
    background: `The Grand Horizon Hotel & Suites is a 450-room upper-upscale property located in an attractive coastal destination renowned for autumn foliage, wine tours, and outdoor sports. During the peak four-week October autumn season, transient leisure demand is extraordinarily strong, with the hotel consistently selling out all 450 rooms at an Average Daily Rate of $360, accompanied by a 96% occupancy rate and zero concession discounts. Transient guests pay full resort fees ($35/night) and generate high secondary revenue in the hotel spa and signature fine-dining restaurants.

The hotel sales department has just received a major multi-year Request for Proposal (RFP) from the "National Association of Biomedical Engineers." The association wishes to book an annual national conference at the Grand Horizon for the second weekend of October for the next three consecutive years. The group contract requests a block of 300 rooms for four nights (Thursday through Sunday), representing 1,200 room nights per year. However, the association demands a heavily discounted group rate of $185 per night—nearly 50% below the hotel's forecasted peak transient rate of $360.

To entice the hotel, the association points out that they will generate $180,000 in contracted banquet food and beverage revenue and will pay $25,000 in meeting room rental fees. However, their contract rider demands significant concessions: waived daily resort fees, complimentary meeting room Wi-Fi, a generous 20% room block attrition allowance (allowing them to release up to 240 room nights without penalty just 21 days before arrival), and one complimentary VIP suite per 40 rooms booked.

The Director of Sales is aggressively pushing to sign the contract, eager to book $402,000 in immediate gross group business and earn a sales commission. However, the Revenue Management team strongly cautions that taking this 300-room group block will displace 300 rooms of high-yield transient leisure travelers who would have paid $360 per night, potentially resulting in massive revenue cannibalization and net financial loss.

You and your partner (serving as the Director of Revenue Strategy and Commercial Group Sales Analyst) are meeting with the Vice President of Hotel Asset Management (played by the judge). You must present a comprehensive Displacement Analysis and Minimum Acceptable Group Rate (MAGR) model. Your presentation must mathematically contrast the total profit contribution of the biomedical group against unconstrained transient leisure demand, evaluate banquet contribution margins, model attrition risks, and deliver a data-driven recommendation on whether to reject, accept, or counter-propose the group contract.`,
    challenge: 'Present a mathematically rigorous Group Displacement & Cannibalization Analysis to the VP of Asset Management. Contrast 300 group rooms at $185 against transient demand at $360, calculate net profit contribution including banquets, and establish counter-offer terms.',
    judgeQuestions: [
      'Based on your mathematical displacement model, what is our absolute Minimum Acceptable Group Rate (MAGR) to break even against forecasted transient leisure demand?',
      'How does the 20% attrition clause requested by the client create unacceptable financial risk for our hotel during our most lucrative weekend of the year?'
    ],
    benchmarkPoints: [
      'Present mathematical displacement analysis: displacing 300 rooms @ $360 transient rate causes a room revenue loss of $525,000, which is NOT offset by the group\'s $222,000 room spend + $180,000 banquet spend (at 35% banquet margin).',
      'Establish counter-offer terms: raise group rate to $265/night, mandate a strict 90% attrition clause, and require an increase in banquet food & beverage minimum to $240,000.',
      'Alternative dates proposal: offer the association identical preferred pricing in early November (shoulder season), transforming potential revenue cannibalization into 100% incremental revenue.'
    ]
  },
  {
    id: 'fin-08',
    title: 'Assessing Energy Efficiency Investments to Lower Utility Overhead',
    instructionalArea: 'Financial Analysis',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Energy Sustainability Financial Lead & Director of Engineering',
    judgeRole: 'Vice President of Hotel Facilities and Capital Expenditures',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Perform energy audit financial modeling and utility cost benchmarking',
        description: 'Calculate Energy Use Intensity (EUI) and utility cost per occupied room (CPOR) against industry peers.'
      },
      {
        name: 'Calculate payback period and return on investment (ROI) for energy retrofits',
        description: 'Evaluate smart digital thermostats, LED lighting conversions, and variable-frequency water pumps.'
      },
      {
        name: 'Evaluate utility rebate programs and federal energy efficiency tax deductions',
        description: 'Quantify utility company cash rebates and federal Section 179D commercial building energy deductions.'
      },
      {
        name: 'Analyze smart IoT guest room energy management systems (EMS)',
        description: 'Model energy savings achieved by automatically adjusting thermostat setpoints when guest rooms are vacant.'
      },
      {
        name: 'Calculate environmental carbon reduction impact for corporate ESG reporting',
        description: 'Translate kilowatt-hour (kWh) and therm reductions into metric tons of CO2 avoided for sustainability audits.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Environmental Stewardship'],
    background: `The Royal Vista Plaza Hotel is a 480-room full-service commercial hotel built in 1995, located in a high-utility-cost southern metropolitan region. Over the past three years, escalating electricity and natural gas utility tariffs have significantly eroded property profitability: the hotel's annual utility bill reached $1,420,000 last year, averaging an unsustainable $8.10 in utility cost per occupied room (CPOR), compared to the regional industry benchmark of $5.25 CPOR.

A comprehensive technical energy audit conducted by an independent engineering consulting firm identified three massive areas of energy waste throughout the property. First, the hotel's 480 guest rooms still utilize manual, non-networked wall thermostats: when guests leave for conventions or day-trips, air conditioning units run continuously at 66 degrees in empty rooms with balcony doors frequently propped open. Second, guest corridors, back-of-house kitchens, and the 500-car parking garage still rely on outdated fluorescent and halogen lighting fixtures. Third, the central chiller plant operates constant-speed water pumps that run at 100% electrical capacity regardless of hotel occupancy.

The engineering firm has presented a bundled, turnkey Energy Conservation Measure (ECM) proposal totaling $420,000 in capital expenditures. The project comprises three components: installing a smart IoT networked Guest Room Energy Management System (EMS) with wireless door sensors that automatically drifts room temperatures to eco-setpoints when rooms are unoccupied ($210,000); retrofitting 6,200 lighting fixtures to smart LEDs with motion sensors ($110,000); and installing Variable Frequency Drives (VFDs) on central chiller pumps ($100,000).

The engineering consultants project that this bundled investment will reduce annual hotel electricity consumption by 24% and natural gas by 18%, generating documented utility bill savings of $285,000 every year. Furthermore, the local electric utility offers a pre-approved commercial energy efficiency cash rebate of $75,000 upon project completion, and the improvements qualify for the federal Section 179D Energy Efficient Commercial Buildings Tax Deduction, allowing an immediate accelerated tax deduction of up to $1.80 per square foot.

You and your partner (serving as the Energy Sustainability Financial Lead and Director of Engineering) are presenting your proposal to the Vice President of Hotel Facilities and Capital Expenditures (played by the judge). You must present a comprehensive Financial and Environmental Investment Appraisal. Your presentation must detail the net capital outlay after utility rebates and tax deductions, calculate the simple and discounted payback periods, present internal rate of return (IRR) metrics, outline guest comfort safeguards, and project greenhouse gas emission reductions.`,
    challenge: 'Present a Financial Investment Appraisal for a $420K Energy Efficiency Retrofit to the VP of Facilities. Demonstrate net capital costs after utility rebates and Section 179D tax deductions, simple and discounted payback periods, and CPOR reduction.',
    judgeQuestions: [
      'How will your smart guest room energy management system ensure that arriving guests do not enter an uncomfortably hot or humid room?',
      'What happens to our projected financial payback period if local electric utility rates decline rather than continue increasing?'
    ],
    benchmarkPoints: [
      'Present net capital outlay: total cost of $420,000 is reduced to $345,000 cash outlay via $75,000 instant utility rebates, plus $140,000 in federal Section 179D tax deductions.',
      'Achieve a rapid simple payback period of 1.21 years and an IRR of 68.2%, reducing annual utility costs by $285,000 and lowering CPOR from $8.10 to $5.15.',
      'Smart PMS integration: EMS system integrates with front desk software, pre-cooling the room to 70 degrees the exact moment the guest checks in at the front desk.'
    ]
  },
  {
    id: 'fin-09',
    title: 'Breakeven Analysis for Expanding Rooftop Event Space and Cocktail Lounge',
    instructionalArea: 'Financial Analysis',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Hospitality Real Estate Finance & Commercial F&B Lead',
    judgeRole: 'Managing General Partner & Chair of Investment Committee',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Perform multi-variable breakeven financial analysis in hospitality operations',
        description: 'Calculate contribution margins, fixed structural costs, variable pour costs, and required weekly guest covers.'
      },
      {
        name: 'Estimate capital construction costs and structural engineering expenses',
        description: 'Budget elevator shaft extensions, structural steel reinforcement, weatherproofing, and luxury finishes.'
      },
      {
        name: 'Forecast premium beverage and private event buyout revenue streams',
        description: 'Model $22 craft cocktails, private corporate buyouts, VIP bottle service, and ticketed sunset events.'
      },
      {
        name: 'Analyze liability insurance surcharges and municipal zoning permit costs',
        description: 'Incorporate commercial liquor liability premiums, sound ordinance compliance, and occupancy permits.'
      },
      {
        name: 'Calculate financial sensitivity based on weather variability and seasonality',
        description: 'Model financial impacts of retractable glass enclosures versus open-air seasonal revenue drops.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Communication'],
    background: `The Beacon Regency is a 320-room upscale lifestyle boutique hotel located in the historic waterfront arts district of a major tourist city. The hotel currently operates with an ADR of $310 and an 80% occupancy rate. While the property performs well, it possesses an unmonetized asset: a 5,000-square-foot flat rooftop currently utilized only for housing mechanical HVAC units, offering sweeping, unobstructed 360-degree panoramic views of the harbor skyline and ocean sunset.

Over the past four years, rooftop lounges and elevated social venues have become the most lucrative food and beverage operations in urban hospitality. In the Beacon Regency's competitive submarket, two nearby competitor rooftop bars generate average beverage revenues of $3.5 to $5 million annually, commanding premium cocktail prices of $22 to $26, high-margin bottle service, and lucrative private buyouts for tech corporate mixers, fashion launches, and luxury wedding rehearsal dinners.

Hotel leadership has completed architectural and structural feasibility studies to convert 3,800 square feet of the rooftop into "Aura Sky Lounge," a glamorous, glass-encased indoor-outdoor cocktail lounge and private event venue with a 150-person legal occupancy capacity. However, the capital construction requirements are formidable: because the building was constructed in 1928, structural steel reinforcement, a dedicated guest express elevator extension, soundproofing baffles, luxury weatherproof furniture, and a commercial kitchen prep area will require a total capital investment of $1,800,000.

Ongoing fixed operating costs are estimated at $65,000 per month ($780,000 annually), which includes debt service on the construction loan, salaried venue management, security personnel, commercial liquor liability insurance surcharges, and municipal entertainment permits. Variable costs (alcohol beverage cost, food ingredients, hourly bar staff, glassware replacement) are projected at 25% of gross revenues, yielding an exceptional 75% gross contribution margin.

You and your partner (serving as the Director of Hospitality Real Estate Finance and Commercial F&B Lead) are meeting with the Managing General Partner and Chair of the Investment Committee (played by the judge). You must present a comprehensive Breakeven Analysis and Financial Feasibility Blueprint. Your presentation must detail the mathematical breakeven in monthly revenue and daily guest covers, present multi-tiered revenue projections across public cocktail operations and private event buyouts, evaluate weather risk mitigation (retractable glass enclosures), and outline ROI over a 7-year investment horizon.`,
    challenge: 'Present a comprehensive Financial Breakeven Analysis for a $1.8M Rooftop Lounge expansion to the Investment Committee Chair. Calculate monthly fixed costs, 75% contribution margins, daily breakeven guest covers, and private event buyout pricing.',
    judgeQuestions: [
      'What is our exact monthly financial breakeven point in gross sales and average daily covers at a $45 average guest spend?',
      'How will your operational model prevent loud rooftop music and late-night guest foot traffic from disturbing luxury guests staying on the floors directly below?'
    ],
    benchmarkPoints: [
      'Calculate financial breakeven: with $65,000 monthly fixed costs and a 75% contribution margin, monthly breakeven revenue is $86,667 (or $2,889 per day, representing just 64 guest covers at an average $45 spend).',
      'Model annual gross revenues: $2.4M beverage sales + $650k in 26 private corporate buyouts ($25k each) = $3.05M total revenue, producing $1.5M in annual Net Operating Profit.',
      'Sound and vibration engineering: install floating acoustical subflooring and directional ceiling speakers to ensure zero decibel leakage to the luxury guest suites below.'
    ]
  },
  {
    id: 'fin-10',
    title: 'Financial Impact Analysis of Eliminating Daily Housekeeping for Sustainability Rebates',
    instructionalArea: 'Financial Analysis',
    tier: 'ICDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Financial Officer & Director of Operational Accounting',
    judgeRole: 'Senior Vice President of Hotel Operations and Brand Standards',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Perform quantitative cost-savings modeling of opt-in housekeeping programs',
        description: 'Calculate direct labor wage reductions, laundry chemical and water savings, and linen replacement longevity.'
      },
      {
        name: 'Evaluate financial incentive structures (Points vs. F&B Vouchers vs. Rate Credits)',
        description: 'Compare the net cash cost of offering 500 loyalty points ($2.50 cost) versus a $10 F&B credit ($3.50 cost).'
      },
      {
        name: 'Assess long-term guest room maintenance degradation and checkout cleaning labor spikes',
        description: 'Account for accumulated trash, stained carpets, and increased cleaning times when rooms are cleaned only upon checkout.'
      },
      {
        name: 'Analyze guest satisfaction and Net Promoter Score (NPS) correlation',
        description: 'Examine customer backlash, luxury brand perception degradation, and review score impact.'
      },
      {
        name: 'Structure hybrid housekeeping models that balance cost optimization with service excellence',
        description: 'Design daily trash-and-towel refreshes combined with full deep cleaning every third night.'
      }
    ],
    twentyFirstCenturySkills: ['Critical Thinking', 'Problem Solving', 'Financial Literacy', 'Communication'],
    background: `The Vantage Grand Hotel is a 650-room upper-upscale commercial and convention property operating in an urban tech corridor, with an average length of stay of 3.4 nights, generating an annual occupancy of 78% and an ADR of $265. Across the hospitality industry, major hotel brands have experimented with "Green Choice" sustainability initiatives that encourage multiday stayover guests to opt out of daily housekeeping in exchange for loyalty points or sustainability recognition.

The hotel controller recently completed a preliminary financial cost-savings projection: on an average day, the hotel cleans 320 stayover rooms. If the hotel transitions to an "Opt-In Only" housekeeping model where daily stayover cleaning is eliminated by default unless specifically requested, management estimates that approximately 65% of stayover guests (208 rooms daily) would forgo daily cleaning.

The projected direct financial savings appear immense on paper: eliminating 208 daily stayover cleans would save approximately 83 hours of room attendant labor daily (at $22/hour fully burdened labor rate), producing annual direct payroll savings of $666,000. Furthermore, reduced laundry cycles, water, natural gas, and cleaning chemical consumption would generate an additional $88,000 in utility and laundry supply savings, yielding an apparent bottom-line savings of $754,000 per year.

However, executive brand leadership has raised serious red flags regarding hidden costs and operational fallout. First, when multi-night rooms go uncleaned for three or four days, garbage accumulates, damp towels mildew on carpets, and trash overflows, causing Checkout Room Cleaning times to surge from 30 minutes to nearly 48 minutes, destroying the initial labor savings. Second, luxury guests who pay $265 per night express intense frustration when they return from long business days to find unmade beds and unreplenished toiletries, leading to steep drops in Medallia guest satisfaction scores and threatening brand franchise standards.

You and your partner (serving as the Chief Financial Officer and Director of Operational Accounting) are meeting with the Senior Vice President of Hotel Operations and Brand Standards (played by the judge). You must present a comprehensive Financial and Brand Impact Appraisal. Your presentation must mathematically weigh the $754,000 gross labor savings against checkout labor inflation, linen degradation, and customer dissatisfaction, and propose an optimized, hybrid service model (such as a "Refresh & Conserve" program) that achieves significant cost savings while preserving luxury hospitality standards.`,
    challenge: 'Present a comprehensive Financial Impact Appraisal evaluating the elimination of daily stayover housekeeping to the Senior VP of Brand Standards. Contrast gross labor savings against checkout cleaning time spikes, guest churn, and design an optimized hybrid model.',
    judgeQuestions: [
      'How does our financial model account for the extra labor and chemical costs required when our housekeepers clean a heavily soiled room that was skipped for 4 days?',
      'What specific incentive (loyalty points, food and beverage credits, or charity donations) yields the highest guest opt-in rate at the lowest net cash cost to the hotel?'
    ],
    benchmarkPoints: [
      'Expose hidden costs: the raw $754,000 labor savings is eroded by $245,000 in checkout cleaning time inflation and $65,000 in linen replacement from accumulated mildew.',
      'Propose the "Eco-Refresh Hybrid": default daily light service (trash removal, fresh towels, bed pulled up - 8 minutes) with full linen change every 3rd day, capturing $420,000 in sustainable net savings.',
      'Incentive structure: offer 500 loyalty points (actual accounting cost to hotel = $2.20) rather than a $10 cash voucher, achieving a 58% guest participation rate at minimal cost.'
    ]
  }
];
