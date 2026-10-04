// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Product/Service Management (10 Cases)
// Focuses on service bundle innovation, guest amenity lifecycle, food & beverage concept refreshes, and room product design
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const productServiceManagementCases: DecaCaseStudy[] = [
  {
    id: 'psm-01',
    title: 'Transforming Underutilized Hotel Amenities into High-Yielding Experiential Services at The Grand Bellevue',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Product Innovation & Guest Experience Design Lead',
    judgeRole: 'General Manager of The Grand Bellevue Luxury Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Explain the concept of service product lifecycle in lodging operations',
        description: 'Assess declining, mature, and growth amenities across spa, business centers, and traditional concierge desks.'
      },
      {
        name: 'Generate innovative new hospitality service concepts based on guest journey analytics',
        description: 'Design experiential wellness offerings, bespoke pet concierge packages, and daytime coworking suites.'
      },
      {
        name: 'Develop service bundling strategies that drive incremental ancillary revenue',
        description: 'Package premium lodging with private culinary masterclasses, priority cabanas, and local cultural tours.'
      },
      {
        name: 'Evaluate the financial feasibility and operational ROI of launching new amenity lines',
        description: 'Calculate capital conversion costs, staffing requirements, and projected gross operating margin per square foot.'
      },
      {
        name: 'Formulate quality assurance benchmarks for newly introduced hospitality service offerings',
        description: 'Establish service blueprints, touchpoint standards, and guest Net Promoter Score review gates.'
      }
    ],
    twentyFirstCenturySkills: ['Product Lifecycle Strategy', 'Service Design Thinking', 'Financial Feasibility', 'Customer Empathy'],
    background: `The Grand Bellevue is an upscale 360-room heritage hotel located in a vibrant downtown cultural district. The property boasts impressive neoclassical architecture, but several of its legacy physical amenities have experienced severe declines in guest utilization:
1. The 1,800-square-foot traditional "Executive Business Center" sits largely empty all day, generating zero revenue while requiring maintenance and utility overhead, as modern guests prefer working on personal laptops in communal lobby spaces.
2. The hotel's basement health club, while equipped with basic cardio machinery, is viewed by guests as dark and uninspiring, leading 35% of surveyed travelers to purchase external day passes at luxury fitness studios in the neighborhood.
3. The traditional formal afternoon tea service in the lobby lounge has experienced a 40% decline in weekday covers, as business travelers and younger leisure guests seek active, health-oriented experiences.

Meanwhile, guest exit surveys indicate massive unfulfilled demand for bespoke wellness retreats, pet-friendly luxury services (with 22% of leisure guests inquiring about traveling with canine companions), and flexible private daytime meeting spaces for remote executives.

The General Manager has challenged the team to repurpose these underutilized spaces and services into high-yield, experiential service products that generate new ancillary revenue, elevate guest satisfaction, and differentiate the property from sterile chain competitors.

You and your partner (Director of Product Innovation and Guest Experience Design Lead) must present an experiential Service Product Transformation Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the elimination or repositioning of declining amenities, the launch of two high-margin service product bundles (wellness/coworking), financial payback projections, and operational service blueprints.',
    judgeQuestions: [
      'What specific concept should replace our obsolete business center, and how will it generate measurable incremental cash flow?',
      'How will your team ensure that introducing pet-friendly luxury services does not trigger complaints from guests with animal allergies?'
    ],
    benchmarkPoints: [
      'Convert the defunct business center into "The Bellevue Studio": a flexible hybrid daytime coworking lounge offering bookable soundproof podcast/Zoom pods and artisanal espresso, transitioning into a private wine-tasting salon in the evenings.',
      'Revamp the basement health club into a boutique holistic wellness haven partnering with high-profile fitness brands, featuring cold plunges, infrared saunas, and bookable personal training sessions.',
      'Launch a tiered "VIPet Luxury Concierge" service bundle ($75/night premium) featuring memory-foam dog beds, gourmet canine room service menus, and curated dog-walking maps, with dedicated pet-free floors strictly preserved for allergy-sensitive guests.',
      'Achieve projected annual ancillary revenue lift of $340,000 with an initial capital payback period of 14 months.'
    ]
  },
  {
    id: 'psm-02',
    title: 'Re-Engineering In-Room Dining & Ghost Kitchen Delivery: Metropolitan Tower Hotel',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'F&B Product Managers & Culinary Operations Leads',
    judgeRole: 'General Manager of Metropolitan Tower Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze the product lifecycle and financial decline of traditional hotel room service',
        description: 'Examine high labor costs, cold food delivery complaints, and steep operating losses in 24/7 in-room dining.'
      },
      {
        name: 'Innovate the in-room culinary delivery model using ghost kitchen and grab-and-go concepts',
        description: 'Introduce fast-casual hot box delivery, artisanal bento boxes, and branded third-party food app partnerships.'
      },
      {
        name: 'Design sustainable, temperature-retaining eco-packaging for in-room culinary products',
        description: 'Replace heavy silver cloches with biodegradable, thermal-insulated compostable containers.'
      },
      {
        name: 'Incorporate mobile ordering and contactless digital room delivery workflows',
        description: 'Enable guests to order food, customize dietary restrictions, and track delivery progress via smartphone.'
      },
      {
        name: 'Formulate financial restructuring plans turning room service from a cost center into a profit center',
        description: 'Reduce dedicated room service labor by 60% while expanding average check size through premium upselling.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary Product Design', 'Operational Re-Engineering', 'Packaging Innovation', 'Financial Turnaround'],
    background: `Metropolitan Tower Hotel is a 650-room urban convention property. For decades, the hotel has operated traditional 24-hour in-room dining featuring heavy rolling service carts, silver chafing dishes, linen tablecloths, and dedicated elevator delivery runners.

The traditional room service model is bleeding cash:
1. The department lost $420,000 over the past twelve months. Operating costs are exorbitant: keeping three dedicated culinary staff and four delivery runners on standby overnight yields an average of only six orders between midnight and 6:00 AM.
2. Guest satisfaction is dreadful: average delivery times exceed 52 minutes, resulting in cold French fries, melted ice cream, and frequent guest refund demands.
3. Over 40% of hotel guests now bypass hotel room service entirely, ordering dinner via DoorDash and Uber Eats. The hotel lobby is continuously clogged with third-party delivery couriers, creating security risks and leaving the hotel with zero food revenue while handling all the trash disposal.

The General Manager demands an innovative culinary product overhaul that eliminates room service losses, provides fast 20-minute hot meals, and recaptures guest food spend.

You and your partner (F&B Product Managers and Culinary Operations Leads) are presenting your In-Room Dining Re-Engineering Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the transition from traditional silver-cart room service to a high-efficiency digital ghost kitchen model, eco-packaging design, mobile ordering, and financial turnaround.',
    judgeQuestions: [
      'If we eliminate traditional white-tablecloth silver-service carts, will our 4-star luxury rating and guest perception suffer?',
      'How will your new model deliver hot, chef-quality meals to guestrooms in under 20 minutes across 30 floors during the 7:00 PM peak rush?'
    ],
    benchmarkPoints: [
      'Sunset traditional rolling linen carts; launch "The Metro Express Pantry": an agile ghost kitchen delivering artisanal culinary boxes via thermal-induction bags in under 20 minutes.',
      'Deploy 100% digital QR mobile ordering with live GPS-style elevator delivery tracking, allowing guests to customize orders and charge directly to their room folio.',
      'Curate an upscale late-night automated "Artisan Grab-and-Go" lobby market featuring hot sourdough flatbreads and craft salads, eliminating overnight kitchen staff payroll.',
      'Turn a $420,000 departmental loss into a $180,000 annual operating profit while improving guest food satisfaction scores by 35%.'
    ]
  },
  {
    id: 'psm-03',
    title: 'Sleep Tourism & Circadian Guestroom Product Design: Serenity Bay Wellness Lodge',
    instructionalArea: 'Product/Service Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Wellness Product Directors & Hospitality Experience Architects',
    judgeRole: 'Vice President of Brand Development & Resort Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Identify emerging consumer wellness trends in \"sleep tourism\" and restorative travel',
        description: 'Capitalize on travelers suffering from chronic insomnia, burnout, and jet lag seeking optimized sleep environments.'
      },
      {
        name: 'Design specialized physical guestroom sleep products and circadian lighting systems',
        description: 'Incorporate 100% blackout acoustic drapery, customizable pillow menus, and automated circadian color-temperature lighting.'
      },
      {
        name: 'Formulate sleep-inducing holistic amenities and evening turndown wellness rituals',
        description: 'Provide magnesium bath salts, adaptogenic herbal sleep tonics, and guided binaural beat audio meditations.'
      },
      {
        name: 'Establish evidence-based partnerships with sleep science and medical research institutions',
        description: 'Certify room acoustic and air-filtration standards in collaboration with sleep medicine clinicians.'
      },
      {
        name: 'Calculate ADR premium and customer retention metrics for specialized sleep suites',
        description: 'Demonstrate that wellness-certified sleep suites command a $125/night ADR premium over standard rooms.'
      }
    ],
    twentyFirstCenturySkills: ['Evidence-Based Design', 'Wellness Innovation', 'Product Prototyping', 'Strategic Marketing'],
    background: `Serenity Bay Wellness Lodge is an upscale 180-room coastal resort situated in a serene natural setting. While the property has a traditional spa, its guestrooms feature standard hotel furnishings that often actively disrupt sleep: noisy mini-fridges, bright blue LED status lights on televisions and smoke detectors, thin walls that transmit hallway chatter, and generic synthetic pillows.

Over 68% of post-stay survey respondents report that they sleep poorly while traveling due to unfamiliar sounds, artificial light pollution, and uncomfortable bedding. Meanwhile, the global \"Sleep Tourism\" market has exploded into a $65 billion industry, with high-stress corporate executives and affluent wellness travelers actively booking specialized sleep retreats to restore their physical health.

Management has allocated $850,000 to re-engineer 40 guestrooms into \"The Deep Sleep Sanctuary Suites\"—a proprietary hospitality product dedicated entirely to optimizing human sleep hygiene.

You and your partner (Wellness Product Directors and Hospitality Experience Architects) are presenting your Sleep Suite Product Design & Commercial Blueprint to the Vice President of Brand Development (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the physical room design, circadian technology integration, bedtime wellness rituals, scientific validation, and financial return of the Deep Sleep Suites.',
    judgeQuestions: [
      'What specific evidence-based technology will your sleep suites use to eliminate ambient noise and disruptive artificial light?',
      'How do we prevent guests from perceiving the sleep suite features as a superficial marketing gimmick rather than a genuine medical wellness benefit?'
    ],
    benchmarkPoints: [
      'Incorporate architectural sleep science: install double-glazed acoustic windows, magnetic 100% blackout storm tracks, and whisper-quiet (<18dB) climate control.',
      'Deploy automated circadian lighting systems that transition from blue-enriched morning awakening light to zero-blue amber melatonin-stimulating evening hues.',
      'Equip rooms with smart sleep systems: temperature-regulating organic latex mattresses, customizable 6-tier pillow menus, and HEPA air purifiers with lavender aromatherapy diffusion.',
      'Project rapid payback: 40 Deep Sleep Suites achieving a $125 ADR premium at 82% occupancy generate $1.5 million in incremental revenue, amortizing capex in under 9 months.'
    ]
  },
  {
    id: 'psm-04',
    title: 'Re-Imagining the Hotel Club Lounge for Remote Professionals: Grand Horizon Hotel',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Commercial Product Strategists & Loyalty Experience Leads',
    judgeRole: 'General Manager of Grand Horizon Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate the declining value proposition of traditional executive hotel club lounges',
        description: 'Assess stale continental breakfast buffets, cheap evening cheese cubes, and lack of functional workspace.'
      },
      {
        name: 'Re-engineer the executive lounge into a high-tech premium co-working and networking commons',
        description: 'Integrate ergonomic sit-stand desks, acoustic video call booths, and third-wave artisan barista stations.'
      },
      {
        name: 'Structure multi-tiered access and subscription monetization models for hotel workspaces',
        description: 'Sell daytime club passes to local remote professionals and non-resident corporate travelers.'
      },
      {
        name: 'Curate high-end evening culinary and social transition programming',
        description: 'Transition daytime co-working space into an exclusive sommelier-led wine and artisan charcuterie salon.'
      },
      {
        name: 'Measure the impact of club lounge modernization on corporate RFP retention and loyalty Net Promoter Scores',
        description: 'Track increases in top-tier loyalty satisfaction and high-yield corporate suite bookings.'
      }
    ],
    twentyFirstCenturySkills: ['Space Placemaking', 'Business Model Innovation', 'User Experience Design', 'Collaboration'],
    background: `Grand Horizon Hotel is a 550-room downtown hotel catering heavily to corporate business travelers. On the 18th floor, the hotel maintains a 3,500-square-foot \"Executive Club Lounge\" reserved exclusively for top-tier loyalty members and premium floor guests.

The lounge has devolved into an expensive embarrassment:
1. The physical space resembles a dated 1990s airport lounge with heavy beige armchairs, stained carpeting, a temperamental drip-coffee machine, and an uninspiring evening spread of stale crackers, cubed cheddar, and cheap house wine.
2. Modern business travelers avoid the space because it lacks functional work surfaces: there are no ergonomic desks, no soundproof spaces to take confidential client Zoom calls, and inadequate electrical outlets.
3. The lounge operates at a net annual loss of $210,000, funded entirely from the rooms division budget, while delivering dismal guest satisfaction scores.

Management wants to scrap the obsolete executive lounge model and re-launch the space as \"The Horizon Exchange\"—a modern, design-forward hybrid co-working commons, private executive meeting club, and evening craft social salon that delights elite travelers and generates new subscription revenue from local professionals.

You and your partner (Commercial Product Strategists and Loyalty Experience Leads) are presenting your Club Lounge Modernization Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the physical transformation of the 18th floor lounge, high-tech co-working amenities, evening culinary programming, daytime subscription monetization, and ROI.',
    judgeQuestions: [
      'If we open the executive lounge to paying local remote workers, won’t our elite loyalty members be furious about losing their exclusive sanctuary?',
      'What specific food and beverage offerings will replace the stale cheese cubes while keeping culinary labor manageable?'
    ],
    benchmarkPoints: [
      'Divide the 3,500 sq ft footprint into functional zones: Focus Pods (acoustic video call booths), Collaboration Commons (communal oak desks), and The Social Hearth.',
      'Protect loyalty exclusivity: preserve peak morning breakfast and evening reception hours exclusively for elite hotel guests; open co-working day passes to non-residents only between 9:30 AM and 4:30 PM.',
      'Partner with a premier local specialty coffee roaster to operate a live barista counter by day, transitioning to a curated craft cocktail and regional mezcal/whiskey tasting bar at 5:00 PM.',
      'Generate $280,000 in new annual revenue through daytime co-working day passes ($45/day) and corporate memberships, turning an operational drain into a profitable asset.'
    ]
  },
  {
    id: 'psm-05',
    title: 'Hotel Retail Overhaul & Curated Local Artisan Mercantile: The Copper River Lodge',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Retail Product Directors & Merchandising Strategists',
    judgeRole: 'Managing Director of The Copper River Lodge',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze retail merchandising and gross margin performance in destination resort gift shops',
        description: 'Identify outdated inventory: dust-covered mass-produced plastic keychains, cheap candy, and oversized generic tees.'
      },
      {
        name: 'Transform traditional hotel gift shops into high-end curated artisan mercantile boutiques',
        description: 'Showcase hyper-local handmade ceramics, regional small-batch hot sauces, and bespoke woolen blankets.'
      },
      {
        name: 'Establish consignment and wholesale profit-sharing partnerships with local craft artisans',
        description: 'Negotiate 50/50 consignment margins that reduce upfront retail inventory capital risk.'
      },
      {
        name: 'Integrate retail products seamlessly across guestroom touchpoints (ambient merchandising)',
        description: 'Place retail-purchaseable artisan bath salts, signature robes, and craft spirits directly in guest suites.'
      },
      {
        name: 'Develop an e-commerce omnichannel store extending guest purchasing beyond departure',
        description: 'Enable departed guests to re-order resort signature scents and artisan products online for home delivery.'
      }
    ],
    twentyFirstCenturySkills: ['Merchandising Strategy', 'Brand Curation', 'Omnichannel Retail', 'Communication'],
    background: `The Copper River Lodge is an upscale 140-room wilderness resort located near renowned fly-fishing rivers and artisan mountain communities. Guests pay $550+ per night and possess high discretionary income.

However, the lodge’s 800-square-foot lobby gift shop is an embarrassing relic:
- It sells cheap, mass-manufactured plastic snow globes, generic candy bars, stale potato chips, and gaudy t-shirts imported from overseas.
- The retail shop generated a miserable $42,000 in gross sales last year, barely covering the cost of the retail clerk’s salary, while holding $38,000 in stagnant, unsellable inventory.
- Meanwhile, affluent guests frequently ask front desk staff where they can purchase the hand-thrown ceramic mugs used in the restaurant, the custom pine-scented bath amenities in their showers, and authentic local indigenous artwork.

The Managing Director has approved a complete overhaul of the retail space to create \"The Copper River Mercantile\"—a curated lifestyle boutique celebrating local craftsmanship and authentic regional heritage, integrated with an online store.

You and your partner (Retail Product Directors and Merchandising Strategists) are presenting your Retail Product Transformation Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing curated merchandise selection, local artisan consignment structures, ambient guestroom retail placement, e-commerce integration, and financial projections.',
    judgeQuestions: [
      'How does \"ambient merchandising\" in guestrooms work without making our luxury suites feel like an aggressive commercial showroom?',
      'What inventory management system will prevent shoplifting and inventory shrinkage in an open-concept lobby boutique?'
    ],
    benchmarkPoints: [
      'Liquidate all generic mass-produced souvenirs; curate an exclusive collection of regional goods: hand-forged chef knives, indigenous cedar carvings, local wildflower honey, and cashmere throws.',
      'Deploy the "Live the Experience, Take It Home" ambient merchandising model: place discreet QR code tags on signature suite items (hand-crafted pottery, custom-scented diffusers, luxury robes).',
      'Establish a 50/50 consignment model with local craft artisans, eliminating upfront wholesale purchasing capital and inventory write-down risks.',
      'Launch a modern Shopify e-commerce platform allowing guests to subscribe to quarterly shipments of signature resort culinary treats and bath products, lifting annual retail gross revenue to $290,000.'
    ]
  },
  {
    id: 'psm-06',
    title: 'Circular Zero-Waste Amenity Ecosystem & Refillable Luxury: Emerald Grove Resort',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Sustainability Product Directors & Resort Supply Chain Leads',
    judgeRole: 'Vice President of Environmental Governance & Resort Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate the environmental footprint and supply chain costs of single-use hotel amenities',
        description: 'Audit the disposal of 350,000 miniature plastic shampoo bottles and single-use wrapped soap bars annually.'
      },
      {
        name: 'Design tamper-proof, wall-mounted luxury refillable personal care dispensing systems',
        description: 'Partner with prestige botanical apothecary brands to maintain 5-star luxury perceptions.'
      },
      {
        name: 'Implement closed-loop circular product lifecycle management across resort guestrooms',
        description: 'Partner with soap recycling charities (Clean the World) and compostable bamboo dental kits.'
      },
      {
        name: 'Manage customer perception and hygiene skepticism regarding shared refillable dispensers',
        description: 'Communicate tamper-proof locking mechanisms and medical-grade sanitation protocols.'
      },
      {
        name: 'Calculate the long-term operational cost savings and ESG investment appeal of plastic elimination',
        description: 'Demonstrate how bulk purchasing reduces guestroom amenity procurement expenses by 45%.'
      }
    ],
    twentyFirstCenturySkills: ['Circular Economy Design', 'Supply Chain Ethics', 'Customer Psychology', 'Quantitative Analysis'],
    background: `Emerald Grove Resort is a 480-room eco-luxury destination resort that heavily promotes its commitment to environmental stewardship. However, an internal sustainability audit revealed a glaring hypocrisy:
- Every year, the resort purchases and discards over 380,000 miniature single-use plastic bottles of shampoo, conditioner, and body wash, alongside 190,000 individually plastic-wrapped miniature soap bars.
- Over 85% of these miniature bottles are discarded by housekeeping more than half-full, sending 14 tons of high-grade plastic and non-biodegradable chemical liquid waste straight to local landfills.
- The annual procurement cost for these wasteful miniatures totals $215,000.
- Several corporate meeting planners and eco-conscious leisure guests have posted online reviews calling the resort’s environmental claims \"pure greenwashing\" due to the mountain of plastic in guest bathrooms.

Management wants to completely eliminate all single-use plastics from guestrooms within four months by implementing a closed-loop luxury refillable personal care product system, alongside zero-waste dental, shaving, and vanity amenities.

You and your partner (Sustainability Product Directors and Resort Supply Chain Leads) are presenting your Circular Amenity Ecosystem Plan to the Vice President of Environmental Governance (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the procurement of tamper-proof luxury bulk dispensers, partnership with prestige organic cosmetic brands, circular recycling pipelines, and cost savings.',
    judgeQuestions: [
      'How do we address luxury guests who associate bulk wall-mounted dispensers with cheap budget motels rather than a 5-star resort?',
      'How does our housekeeping engineering guarantee that tamper-proof dispensers cannot be contaminated or vandalized by guests?'
    ],
    benchmarkPoints: [
      'Partner with an internationally renowned prestige apothecary brand (e.g., Le Labo, Aesop, or Malin+Goetz) in bespoke ceramic-finish aluminum fixtures, elevating luxury appeal.',
      'Install patented key-locked, tamper-proof magnetic wall brackets with single-direction anti-contamination pump valves, ensuring complete hygiene security.',
      'Replace disposable plastic vanity kits with 100% compostable bamboo toothbrushes, wheat-straw shaving kits, and recycled paper packaging.',
      'Achieve 48% annual cost reduction ($103,000 saved per year) in amenity purchasing while eliminating 14 tons of plastic landfill waste, boosting the resort’s official ESG audit ranking.'
    ]
  },
  {
    id: 'psm-07',
    title: 'Rooftop Micro-Distillery & Immersive Craft Mixology Concept: The Foundry Hotel',
    instructionalArea: 'Product/Service Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Beverage Product Innovation Leads & Hospitality Concept Creators',
    judgeRole: 'Managing Partner of Foundry Hospitality Real Estate Syndicate',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Innovate high-margin food and beverage product concepts in competitive urban lodging',
        description: 'Design a rooftop craft gin micro-distillery and botanical greenhouse cocktail lounge.'
      },
      {
        name: 'Navigate complex municipal liquor manufacturing permits, zoning, and fire code regulations',
        description: 'Secure state craft distillery licenses and satisfy ethanol distillation explosion-proofing standards.'
      },
      {
        name: 'Design experiential interactive guest programming around beverage production',
        description: 'Offer custom gin-blending masterclasses where guests formulate and bottle personalized spirits.'
      },
      {
        name: 'Monetize packaged retail spirit sales and branded merchandise distribution',
        description: 'Sell hotel-distilled bottled spirits to departing guests and regional high-end liquor boutiques.'
      },
      {
        name: 'Model capital expenditure payback and contribution margins for destination beverage concepts',
        description: 'Forecast $1.9 million in high-margin beverage revenue with a 68% gross pour margin.'
      }
    ],
    twentyFirstCenturySkills: ['Beverage Concept Innovation', 'Regulatory Engineering', 'Experiential Marketing', 'Financial Feasibility'],
    background: `The Foundry Hotel is a trendy 220-room boutique hotel located in a converted industrial brick warehouse district. The hotel boasts a 4,000-square-foot undeveloped rooftop offering breathtaking 360-degree skyline views, currently utilized only for occasional summer wedding ceremonies.

The local boutique hotel market is fiercely competitive, with seven rival properties within a two-mile radius operating standard rooftop cocktail bars serving identical vodka-sodas and overpriced champagne. Management wants to build a distinctive hospitality product concept that will establish The Foundry as the most talked-about beverage destination in the state:
- Install \"The Foundry Stillhouse\": an operating copper pot micro-distillery producing signature small-batch botanical gins and aged rums on-site.
- Surround the copper still with a glass-enclosed botanical greenhouse cultivating juniper, lavender, citrus, and herbs used in the distillation and cocktail recipes.
- Launch \"The Master Distiller’s Atelier\": an interactive 90-minute evening experience where hotel guests and local patrons blend their own personalized bottle of botanical gin with a custom-printed wax-sealed label ($125 per person).

The proposed project requires an $850,000 capital investment for structural roof reinforcement, copper distillation equipment, explosion-proof ventilation, and distillery licensing.

You and your partner (Beverage Product Innovation Leads and Hospitality Concept Creators) are presenting your Rooftop Micro-Distillery Concept to the Managing Partner (the judge).`,
    challenge: 'Deliver a 15-minute pitch proving the technical feasibility, regulatory compliance, guest experiential appeal, and extraordinary profit margins of The Foundry Stillhouse.',
    judgeQuestions: [
      'How do we handle the intense fire marshal and municipal safety regulations of operating an active alcohol distillation still directly on a hotel rooftop?',
      'How does an on-site distillery drive room bookings and ADR rather than just being a bar for local residents?'
    ],
    benchmarkPoints: [
      'Satisfy NFPA 30 Flammable Liquids codes: install explosion-proof electrical fittings, vapor sensors, automatic CO2 suppression, and a dedicated 50-gallon closed-loop electric copper pot still.',
      'Secure State Class-D Craft Distiller permit, allowing on-premise pours, masterclass workshops, and direct bottle sales to hotel guests.',
      'Package exclusive lodging bundles: "The Distiller’s Weekend Retreat" bundling suite accommodations with private blending masterclasses, driving a $180 ADR premium.',
      'Deliver outstanding financial metrics: project $1.85 million in gross rooftop revenue with an exceptional 74% gross beverage margin, achieving full capex payback in 16 months.'
    ]
  },
  {
    id: 'psm-08',
    title: 'Kids & Teen Experiential Adventure Camp Product Line: Summit Ridge Mountain Resort',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Youth Program Product Directors & Recreation Operations Leads',
    judgeRole: 'General Manager of Summit Ridge Mountain Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze changing family travel dynamics and experiential youth programming demand',
        description: 'Examine affluent parents seeking screen-free, enriching outdoor wilderness skills for children.'
      },
      {
        name: 'Design multi-tiered experiential curriculum across distinct youth age demographics',
        description: 'Differentiate \"Little Explorers\" (ages 4-8), \"Wilderness Cadets\" (ages 9-12), and \"Alpine Creators\" (teens).'
      },
      {
        name: 'Establish rigorous child safety, counselor credentialing, and emergency liability protocols',
        description: 'Require wilderness first aid certification, background checks, and strict adult-to-child supervision ratios.'
      },
      {
        name: 'Structure high-margin fee-based children’s activity bundles and parent buyout time',
        description: 'Monetize half-day, full-day, and evening camp sessions, freeing parents for uninterrupted spa and fine dining.'
      },
      {
        name: 'Evaluate the indirect revenue multiplier of youth programming on adult resort spend',
        description: 'Demonstrate how children’s camp enrollment doubles parent spending in luxury spas, golf, and wine dinners.'
      }
    ],
    twentyFirstCenturySkills: ['Curriculum Design', 'Child Safety & Risk Management', 'Family Psychology', 'Communication'],
    background: `Summit Ridge Mountain Resort is an upscale 320-room family mountain lodge. For years, the resort’s children’s offering has consisted of a sad, windowless \"Kids Game Room\" in the basement featuring a broken air hockey table, a few beanbag chairs, and an old video game console.

Affluent parents paying $650 per night are deeply dissatisfied:
- Parents constantly complain that their children are glued to iPad screens indoors instead of experiencing the magnificent mountain wilderness outside.
- Parents report that traveling with young children is exhausting rather than relaxing because the resort provides no trusted, enriching childcare, preventing parents from enjoying a peaceful couple’s dinner at the resort’s signature steakhouse or booking a treatment at the spa.
- Exit surveys indicate that 42% of family travelers choose competitor mountain lodges specifically because competitors offer renowned outdoor nature camps and certified ski schools.

Management wants to launch \"The Summit Alpine Explorers Camp\"—a premium, outdoor-focused adventure and nature curriculum that transforms the resort into the premier family luxury destination in the Rockies.

You and your partner (Youth Program Product Directors and Recreation Operations Leads) are presenting your Youth Adventure Camp Product Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the outdoor curriculum design, safety and licensing protocols, fee structures, staffing ratios, and parent spending multiplier effects.',
    judgeQuestions: [
      'What are our legal liabilities and risk protocols if a child suffers a minor injury or allergic reaction during an outdoor wilderness hike?',
      'How does charging parents $120/day for children’s camp improve overall resort revenue when parents might resent paying extra on top of expensive room rates?'
    ],
    benchmarkPoints: [
      'Design three age-tailored outdoor curriculums: "Pebble Pioneers" (nature crafts & sensory foraging), "Trailblazers" (orienteering, rock climbing, shelter building), and "Summit Creators" (outdoor wilderness photography and GoPro editing).',
      'Enforce Gold-Standard Safety: 1:5 staff-to-child ratio, certified Wilderness First Responders, GPS tracking wristbands on all outdoor excursions, and strict biometric check-in/check-out.',
      'Monetize with tiered pricing: $110 half-day, $185 full-day (lunch included), and $75 "Parents’ Night Out" evening campfire dinner camps.',
      'Demonstrate the Adult Spend Multiplier: parents utilizing the camp spend an average of $220 more per day in the luxury spa and fine-dining steakhouse, generating $480,000 in incremental high-margin revenue.'
    ]
  },
  {
    id: 'psm-09',
    title: 'Transforming Dormant Ballroom Space into an Esports Arena: Nexus Grand Hotel',
    instructionalArea: 'Product/Service Management',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Commercial Space Innovation Directors & Digital Entertainment Leads',
    judgeRole: 'Vice President of Hotel Asset Development & Group Sales',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate the commercial obsolescence of low-utilization traditional hotel ballroom space',
        description: 'Identify 6,000 square feet of secondary basement ballroom space vacant 65% of the year.'
      },
      {
        name: 'Design specialized high-performance technical infrastructure for competitive esports and gaming',
        description: 'Install ultra-low-latency 10Gbps dedicated fiber internet, broadcast production stages, and ergonomic gaming rigs.'
      },
      {
        name: 'Structure B2B corporate team-building tournaments and collegiate gaming championship hosting',
        description: 'Sell high-yield corporate team hackathons, collegiate conference championships, and game developer product launches.'
      },
      {
        name: 'Monetize casual daytime gaming lounge access and streaming studio rentals for hotel guests',
        description: 'Offer hourly gaming passes, virtual reality simulators, and private podcast/Twitch streaming booths.'
      },
      {
        name: 'Calculate the return on invested capital (ROIC) and group room-block generation of esports facilities',
        description: 'Project $1.4 million in annual facility revenue plus 3,500 contracted group room nights.'
      }
    ],
    twentyFirstCenturySkills: ['Digital Technology Architecture', 'Experiential Real Estate', 'Youth Demographics', 'Financial Modeling'],
    background: `Nexus Grand Hotel is an 800-room urban convention property. The hotel features an expansive meeting wing, including a main 20,000-square-foot ballroom and a secondary 6,000-square-foot lower-level ballroom named \"The Centennial Hall.\"

While the main ballroom books steady convention business, Centennial Hall has become a financial black hole:
- With outdated chandeliers, low 10-foot ceilings, and zero natural light, corporate meeting planners avoid the room. It sits dark and unbooked 230 days per year, generating less than $60,000 in annual catering revenue while costing $45,000 in HVAC and lighting overhead.
- Meanwhile, the competitive gaming, collegiate esports, and tech corporate team-building sector has exploded into a multi-billion-dollar market. Gaming tournaments attract thousands of passionate attendees who book hotel room blocks, spend heavily on F&B, and require massive internet bandwidth that typical venues cannot support.

Management wants to invest $1.2 million to gut Centennial Hall and transform it into \"The Nexus Arena & Digital Soundstage\"—the city’s premier dedicated competitive esports arena, broadcast production studio, and casual interactive gaming lounge.

You and your partner (Commercial Space Innovation Directors and Digital Entertainment Leads) are presenting your Esports Arena Conversion Plan to the Vice President of Hotel Asset Development (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the technical arena buildout, corporate B2B tournament sales, daily guest gaming monetization, room-block generation, and capital payback.',
    judgeQuestions: [
      'Isn’t esports a volatile, niche fad that will alienate our traditional corporate medical and legal convention clients?',
      'How does an esports arena generate steady weekday cash flow when tournaments only happen on weekends?'
    ],
    benchmarkPoints: [
      'Build out state-of-the-art infrastructure: 10Gbps symmetrical enterprise fiber, 60 professional tournament gaming stations, a 40-foot LED spectator video wall, and a 4K broadcast streaming booth.',
      'Monetize weekday corporate B2B demand: sell "Corporate Digital Team-Building" packages where corporate clients hold competitive video game tournaments and tech hackathons instead of boring golf outings.',
      'Monetize leisure hotel guests: open the arena as a high-end casual gaming and VR lounge ($25/hour) between 1:00 PM and 11:00 PM, capturing traveling teenagers and tech enthusiasts.',
      'Deliver exceptional ROI: project $1.4 million in annual arena revenue and secure 12 collegiate tournament weekend buyouts representing 3,600 room nights, achieving full capex payback in 18 months.'
    ]
  },
  {
    id: 'psm-10',
    title: 'Autonomous Robotics & Smart In-Room Concierge: TechHaven Suites Hotel',
    instructionalArea: 'Product/Service Management',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Robotics Project Leads & Digital Service Designers',
    judgeRole: 'General Manager of TechHaven Suites Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Evaluate the role of service robotics and automation in modern lodging operations',
        description: 'Assess autonomous mobile robots (AMRs) for room delivery of towels, toiletries, and late-night snacks.'
      },
      {
        name: 'Design seamless elevator integration and LiDAR indoor navigation for service robots',
        description: 'Integrate automated Wi-Fi elevator calling and dynamic obstacle avoidance in crowded hallways.'
      },
      {
        name: 'Balance robotic efficiency with the irreplaceable human warmth of luxury hospitality',
        description: 'Position robots to handle tedious delivery tasks, freeing human associates for empathetic guest interaction.'
      },
      {
        name: 'Formulate operational standard operating procedures for robot maintenance, sanitation, and charging',
        description: 'Establish automated docking schedules, UV-C compartment sanitation, and error recovery protocols.'
      },
      {
        name: 'Calculate labor cost optimization and guest social media virality generated by autonomous delivery',
        description: 'Quantify a 70% reduction in runner delivery times and viral TikTok/Instagram guest impressions.'
      }
    ],
    twentyFirstCenturySkills: ['Robotics Literacy', 'Human-Robot Interaction', 'Operational Efficiency', 'Social Media Marketing'],
    background: `TechHaven Suites is a high-volume 400-suite hotel in a major innovation corridor. The hotel runs at an average 88% occupancy with a tech-savvy corporate and millennial leisure clientele.

A major operational bottleneck is frontline service runner efficiency:
- The hotel receives over 250 requests daily for extra bath towels, toothbrushes, bottled water, extra pillows, and late-night convenience snacks.
- Human front desk runners spend up to 18 minutes per delivery navigating service elevators and sprawling corridors. During evening peak hours, guests wait up to 45 minutes for a bottle of water, leading to negative reviews.
- High runner turnover and minimum wage increases have inflated internal delivery labor costs to over $140,000 annually.

Management is evaluating the deployment of a fleet of three autonomous mobile service robots (named \"Relay Pods\") to handle 100% of routine room amenity deliveries. The robots navigate hallways using LiDAR and 3D cameras, communicate with elevators via secure Wi-Fi, call the guest room phone upon arrival outside the door, open their secure compartment when the guest touches their room key to the screen, and return autonomously to their charging docks.

You and your partner (Hospitality Robotics Project Leads and Digital Service Designers) are presenting your Autonomous Robotics Implementation Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the technical elevator integration, guest communication protocols, human staff role repositioning, and financial payback of deploying delivery robots.',
    judgeQuestions: [
      'What happens if a delivery robot gets stuck in an elevator with a frightened or intoxicated guest at 2:00 AM?',
      'Won’t deploying robots make our hotel feel cold, impersonal, and dystopian, stripping away the human touch of hospitality?'
    ],
    benchmarkPoints: [
      'Deploy three LiDAR-equipped autonomous robots integrated via cloud API with Otis/Schindler smart elevators and the hotel PMS, achieving delivery times under 7 minutes.',
      'Position robots as "Associate Assistants": explain that automating mundane towel and water runs frees frontline associates to focus on genuine guest hospitality and complex problem resolution.',
      'Design delightful human-robot interactions: equip robots with animated digital expressive eyes, polite voice greetings, and automated compartment UV-C sanitizing cycles after every delivery.',
      'Generate immense marketing buzz: autonomous robot deliveries achieve an organic 65% guest filming rate on TikTok/Instagram, generating over 1.2 million viral impressions while cutting runner labor costs by $85,000 annually.'
    ]
  }
];
