// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Professional Development (10 Cases)
// Focuses on career pathway design, leadership coaching, hospitality certifications (CHIA, CHE, CRME), and diversity retention
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const professionalDevelopmentCases: DecaCaseStudy[] = [
  {
    id: 'pd-01',
    title: 'Designing an Executive Hospitality Leadership Academy & Retention Pipeline at Sovereign Luxury Group',
    instructionalArea: 'Professional Development',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Talent Development & Hospitality Career Pathway Specialist',
    judgeRole: 'Senior Vice President of Human Capital & Executive Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design professional career progression pathways for hourly hospitality associates',
        description: 'Map structured career milestone progressions from line-level guest services to supervisory and managerial tiers.'
      },
      {
        name: 'Incorporate industry-recognized professional hospitality certifications into employee development',
        description: 'Leverage American Hotel & Lodging Educational Institute (AHLEI) certifications (CHIA, CRME, CHRM).'
      },
      {
        name: 'Establish executive mentorship and leadership sponsorship programs',
        description: 'Pair high-potential diverse frontline supervisors with general managers and regional department heads.'
      },
      {
        name: 'Analyze the direct financial impact of professional development on employee retention and recruitment costs',
        description: 'Calculate savings from decreased annual associate turnover and reduced executive executive headhunter fees.'
      },
      {
        name: 'Evaluate leadership competency frameworks tailored for luxury hotel service excellence',
        description: 'Measure soft skills development across executive emotional poise, financial RevPAR literacy, and conflict resolution.'
      }
    ],
    twentyFirstCenturySkills: ['Career Navigation', 'Mentorship & Coaching', 'Leadership Development', 'Strategic Human Capital'],
    background: `Sovereign Luxury Group operates six luxury hotels and resorts across North America, employing over 2,200 team members. Despite maintaining an elite brand reputation and high Average Daily Rates, the organization faces an acute talent crisis at the middle-management level.

Over the past two years:
1. Annual turnover among frontline supervisory staff (front desk supervisors, banquet captains, housekeeping floor inspectors) rose to an unsustainable 46%. Exit interviews revealed a uniform sentiment: talented young professionals felt trapped in dead-end hourly roles with zero clear visibility into how to reach Assistant General Manager or Department Head positions.
2. The company spent over $950,000 in third-party executive search agency fees to recruit external department heads, only to find that 40% of external hires struggled to assimilate into the brand's unique White Glove culture and departed within 18 months.
3. Frontline associates from underrepresented backgrounds reported that executive leadership positions were predominantly filled through informal personal networks rather than transparent competency-based career development programs.

The Senior Vice President of Human Capital has allocated an initial $350,000 corporate investment to launch the "Sovereign Leadership Academy"—a flagship in-house career accelerator designed to cultivate home-grown hospitality leaders, drive retention, and create an unbroken succession pipeline.

You and your partner (Director of Talent Development and Hospitality Career Pathway Specialist) must present an end-to-end Professional Development Framework to the Senior Vice President of Human Capital (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the curriculum, AHLEI certification milestones, structured executive mentorship pairings, career progression roadmaps, and measurable retention ROI for the Sovereign Leadership Academy.',
    judgeQuestions: [
      'How will your development academy ensure that hourly supervisors can complete coursework without disrupting active daily floor operations?',
      'What specific metrics will prove to ownership that our $350,000 investment in professional development is paying for itself?'
    ],
    benchmarkPoints: [
      'Structure a modular 12-month curriculum blending micro-learning digital modules (15 minutes/day) with paid quarterly operational cross-rotations across Revenue Management, Sales, and Engineering.',
      'Fully sponsor AHLEI professional certifications (e.g., Certified Hospitality Supervisor - CHS and Certification in Hotel Industry Analytics - CHIA) upon successful program completion.',
      'Institute formal 1-on-1 executive mentorship pairings with General Managers, including quarterly leadership shadowing and strategic capstone business presentations.',
      'Demonstrate a projected $680,000 annual net savings by cutting middle-management turnover from 46% to 18% and slashing external recruiter fees by 60%.'
    ]
  },
  {
    id: 'pd-02',
    title: 'Culinary Apprenticeship & Master Sommelier Certification Pipeline: Grand Chateau Resort',
    instructionalArea: 'Professional Development',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Culinary Talent Directors & Beverage Education Leads',
    judgeRole: 'Vice President of Food & Beverage & Executive Resort Chef',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design structured culinary apprenticeship and professional progression pipelines',
        description: 'Map career pathways from dishwasher and prep cook to commis chef, chef de partie, and sous chef.'
      },
      {
        name: 'Integrate accredited wine, spirits, and sommelier certifications into front-of-house training',
        description: 'Sponsor Court of Master Sommeliers and Wine & Spirit Education Trust (WSET) credentials for beverage staff.'
      },
      {
        name: 'Formulate culinary stage (externship) partnerships with world-renowned restaurants',
        description: 'Provide funded two-week learning rotations at Michelin-starred restaurants for rising culinary talent.'
      },
      {
        name: 'Mitigate chef burnout and improve retention in high-pressure commercial kitchens',
        description: 'Implement four-day workweeks, mental health wellness days, and ergonomic kitchen workflows.'
      },
      {
        name: 'Measure the impact of culinary professional development on food quality, covers, and beverage spend',
        description: 'Demonstrate how certified sommelier staff lift wine bottle sales by 32% per dining cover.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary Craftsmanship', 'Talent Pipeline Design', 'Lifelong Learning', 'Communication'],
    background: `Grand Chateau Resort is an acclaimed 320-room luxury wine country destination featuring four fine-dining restaurants and an expansive banquet division. The resort employs over 140 culinary and beverage professionals.

The culinary division faces an acute labor crisis:
- The turnover rate among line cooks and commis chefs has reached 62% annually. Kitchen staff cite brutal 65-hour workweeks, stagnant hourly wages ($18/hour), and a lack of professional learning as the main reasons for leaving the industry entirely.
- In the dining rooms, high server turnover has degraded beverage sales: servers lack basic wine knowledge and are intimidated when affluent guests inquire about regional wine vintages, leaving high-margin reserve wine cellars sitting unsold.
- Head chefs spend up to 25 hours per week constantly interviewing, hiring, and onboarding inexperienced replacement cooks who lack basic knife skills, creating immense culinary stress and inconsistent food presentation.

The Vice President of Food & Beverage has resolved to transform the resort into the region’s premier \"Culinary Learning University\" by establishing an accredited Culinary Apprenticeship Academy and fully funded Sommelier Certification Pipeline.

You and your partner (Culinary Talent Directors and Beverage Education Leads) are presenting your Culinary Professional Development Framework to the Vice President of F&B (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the apprenticeship curriculum, sommelier certification tiers, retention incentives, kitchen culture reforms, and the ROI of higher beverage sales.',
    judgeQuestions: [
      'If we pay to put our servers through expensive Court of Master Sommeliers certifications, what prevents them from taking their new credentials and leaving for another restaurant?',
      'How can our executive chefs maintain prep schedules while releasing apprentice cooks for 4 hours of weekly classroom instruction?'
    ],
    benchmarkPoints: [
      'Implement a 2-year Registered Culinary Apprenticeship (certified by the American Culinary Federation) featuring guaranteed wage step-increases upon skill milestone mastery.',
      'Sponsor WSET Level 1 & 2 and Court of Master Sommeliers certifications for servers, backed by a 12-month retention service agreement or prorated tuition repayment.',
      'Shift kitchen staffing to a 4-day, 10-hour compressed workweek with two consecutive days off, eliminating chef burnout and slashing line cook turnover from 62% to 22%.',
      'Demonstrate financial payoff: certified sommelier servers increase average beverage spend from $28 to $44 per guest, generating $420,000 in incremental high-margin wine revenue.'
    ]
  },
  {
    id: 'pd-03',
    title: 'Frontline Financial Literacy & Revenue Management Upskilling: Pacific Horizon Hotel',
    instructionalArea: 'Professional Development',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Front Office Learning Specialists & Revenue Training Directors',
    judgeRole: 'General Manager of Pacific Horizon Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design financial literacy and revenue optimization training for frontline hospitality staff',
        description: 'Educate front desk agents on ADR, RevPAR, Net Operating Income, and distribution channel costs.'
      },
      {
        name: 'Develop gamified room upselling and incremental revenue generation programs',
        description: 'Incentivize front desk associates with tiered commissions for upselling suites and early check-ins.'
      },
      {
        name: 'Integrate the Certification in Hotel Industry Analytics (CHIA) into supervisor career tracks',
        description: 'Train department supervisors to interpret Smith Travel Research (STR) reports and market trends.'
      },
      {
        name: 'Empower frontline associates to make commercially sound guest resolution decisions',
        description: 'Authorize staff to issue amenities or room upgrades rather than expensive cash refunds during service recovery.'
      },
      {
        name: 'Evaluate the correlation between associate financial acumen and property gross operating profit',
        description: 'Measure incremental upselling revenue, reduced cash write-offs, and increased RevPAR index.'
      }
    ],
    twentyFirstCenturySkills: ['Financial Acumen', 'Commercial Mindset', 'Gamification Design', 'Strategic Communication'],
    background: `Pacific Horizon Hotel is a 480-room full-service coastal hotel. Historically, the hotel’s revenue management strategy was kept entirely confidential behind closed executive doors: the Director of Revenue Management adjusted rates in the PMS, but frontline front desk agents and reservations staff had zero understanding of why rates changed or how hotel profitability functioned.

This disconnect caused immense financial leakage:
1. Front desk agents viewed check-in as a purely clerical task: they handed keys to arriving guests without attempting to upsell premium executive suites or oceanfront balconies, leaving high-value suites empty while standard rooms sold out.
2. When guests arrived early at 10:00 AM, agents routinely gave away early check-ins for free or turned guests away, rather than offering guaranteed early check-in packages for a $45 fee.
3. During service recovery for minor guest complaints, agents defaulted to wiping $150 room charges off guest folios because they did not understand the severe impact on hotel Net Operating Income.

The General Manager wants to transform the frontline front office team into commercial business partners through a structured Revenue Literacy & Upselling Professional Development Curriculum.

You and your partner (Front Office Learning Specialists and Revenue Training Directors) are presenting your Frontline Revenue Upskilling Framework to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing frontline financial education modules, gamified upselling incentive structures, CHIA supervisor tracks, and projected incremental revenue.',
    judgeQuestions: [
      'How will your upselling training encourage front desk agents to upsell suites without sounding like aggressive, pushy used-car salesmen?',
      'How will you structure the financial incentive so that agents are motivated, while ensuring the hotel retains the vast majority of the incremental revenue?'
    ],
    benchmarkPoints: [
      'Launch "The Horizon Commercial Academy": interactive 15-minute weekly micro-lessons teaching basic hotel economics (how a $10 increase in ADR flows 85% directly to GOP).',
      'Deploy the "Frontline Upsell Club": agents receive a 12% commission on all realized room category upsells (e.g., upselling a standard room to a $100/night junior suite awards the agent $12).',
      'Provide fully funded AHLEI Certification in Hotel Industry Analytics (CHIA) for all front office supervisors to groom them for future revenue management careers.',
      'Project impressive financial returns: capturing an average of 14 suite upsells per day generates $420,000 in pure incremental room revenue with zero extra marketing spend.'
    ]
  },
  {
    id: 'pd-04',
    title: 'Mid-Career Supervisor Transition to General Manager: Metro Inn & Suites',
    instructionalArea: 'Professional Development',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Executive Talent Directors & Leadership Succession Strategists',
    judgeRole: 'Senior Vice President of Operations & General Manager Selection Chair',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design accelerated leadership transition programs bridging supervisory roles to executive leadership',
        description: 'Transition high-performing department heads into fully capable, commercially minded General Managers.'
      },
      {
        name: 'Incorporate comprehensive hotel P&L statement analysis and capital asset management',
        description: 'Master owner capital expenditure planning, debt service coverage, and owner relations.'
      },
      {
        name: 'Develop executive crisis management, labor relations, and media communication competencies',
        description: 'Prepare future GMs to handle union negotiations, PR emergencies, and municipal government relations.'
      },
      {
        name: 'Structure executive shadowing and interim acting-GM residencies across diverse hotel assets',
        description: 'Rotate candidates through 90-day acting leadership stints at select-service, full-service, and resort properties.'
      },
      {
        name: 'Establish a quantitative leadership scorecard evaluating GM candidate readiness',
        description: 'Evaluate candidates on financial performance, employee turnover, guest satisfaction, and community leadership.'
      }
    ],
    twentyFirstCenturySkills: ['Executive Presence', 'Strategic P&L Mastery', 'Crisis Leadership', 'Succession Architecture'],
    background: `Metro Inn & Suites is a regional hotel management company operating 28 branded and independent select-service and full-service hotels across five states. Over the next three years, twelve veteran General Managers are reaching mandatory retirement, creating an urgent executive succession void.

Historically, the company has promoted high-performing Department Heads (such as Executive Housekeepers or Front Office Directors) directly into GM roles with little formal preparation. The results have been disappointing:
- Over 50% of first-time GMs struggled severely with the financial and strategic dimensions of the job: while they were brilliant at daily shift operations, they were terrified of presenting monthly Profit & Loss (P&L) statements to demanding hotel property owners and asset managers.
- Two new GMs committed serious labor law violations during employee grievance hearings due to lack of labor relations training, exposing the company to expensive legal liability.
- Several new GMs burned out and resigned within 12 months, citing feelings of isolation and overwhelming responsibility.

The Senior Vice President of Operations has authorized the creation of \"The GM Ascend Fellowship\"—an elite 18-month executive development pipeline designed to prepare the next generation of General Managers.

You and your partner (Executive Talent Directors and Leadership Succession Strategists) are presenting your GM Ascend Fellowship Blueprint to the Senior Vice President of Operations (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the 18-month curriculum, executive coaching, P&L simulation workshops, acting-GM rotational residencies, and candidate assessment scorecards.',
    judgeQuestions: [
      'How does your program teach a former front office manager to confidently challenge an aggressive commercial property owner during a capital expenditure dispute?',
      'What happens to a candidate who completes the 18-month fellowship if there is no immediate General Manager vacancy open when they graduate?'
    ],
    benchmarkPoints: [
      'Structure an intensive 18-month modular executive curriculum: Module 1 (Advanced Hotel Financial Engineering & P&L Mastery), Module 2 (Owner Relations & Asset Governance), Module 3 (Crisis PR & Labor Relations).',
      'Integrate immersive 60-day "Acting General Manager Residencies" at sister hotels during primary GM medical or sabbatical leaves, providing supervised real-world command experience.',
      'Pair each fellow with an external Certified Executive Coach for monthly confidential leadership development and emotional resilience coaching.',
      'Establish a "Bench Retention Incentive": graduates waiting for an open GM slot receive an interim Assistant General Manager title, a 15% salary bump, and guaranteed right-of-first-refusal on upcoming vacancies.'
    ]
  },
  {
    id: 'pd-05',
    title: 'Cross-Generational Mentorship & Digital Fluency in Veteran Hotel Staff: Heritage Grand',
    instructionalArea: 'Professional Development',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Workforce Development Specialists & Digital Enablement Directors',
    judgeRole: 'General Manager of Heritage Grand Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze cross-generational workforce dynamics and communication preferences in lodging',
        description: 'Bridge cultural and technological gaps between Baby Boomer/Gen X veterans and Gen Z/Millennial digital natives.'
      },
      {
        name: 'Design reciprocal \"Reverse Mentorship\" programs pairing tech-savvy youth with veteran leaders',
        description: 'Young associates teach mobile PMS apps, TikTok storytelling, and AI tools, while veterans teach guest empathy.'
      },
      {
        name: 'Overcome technology anxiety and software resistance among long-tenured hospitality employees',
        description: 'Provide compassionate, non-judgmental digital upskilling and tactile tablet training workshops.'
      },
      {
        name: 'Preserve institutional hospitality wisdom while modernizing digital operational workflows',
        description: 'Ensure digital mobile check-in does not dilute traditional warmth and personalized guest recognition.'
      },
      {
        name: 'Measure the impact of cross-generational collaboration on team cohesion and employee satisfaction',
        description: 'Track increases in internal cross-generational engagement surveys and reductions in software entry errors.'
      }
    ],
    twentyFirstCenturySkills: ['Cross-Generational Empathy', 'Digital Fluency', 'Reciprocal Learning', 'Communication'],
    background: `The Heritage Grand is an iconic 500-room luxury hotel. The property employs a diverse multi-generational workforce:
- Over 35% of the staff are veteran associates (Baby Boomers and older Gen X) who have worked at the hotel for 20 to 35 years. They possess extraordinary interpersonal empathy, deep institutional memory, and master-level crisis de-escalation skills.
- The remaining 65% are younger Millennial and Gen Z associates who are technological natives, effortlessly navigating mobile apps, social media, and digital systems.

The hotel recently invested $400,000 to deploy a cloud-native mobile Property Management System running on iPad tablets, replacing 25-year-old green-screen desktop terminals. This deployment triggered an intense generational crisis:
- Veteran associates felt humiliated and overwhelmed: several veteran front desk agents broke down in tears when struggling to navigate touchscreens during peak check-in rushes, and three long-tenured supervisors took early retirement in frustration.
- Meanwhile, younger associates grew impatient with veteran colleagues, rolling their eyes when asked for help. However, younger associates struggled severely with interpersonal face-to-face conflict resolution, freezing up when furious luxury guests yelled about billing disputes.

The General Manager refuses to lose beloved veteran associates or let generational hostility fester, ordering the design of a \"Cross-Generational Bridge & Reciprocal Mentorship Initiative.\"

You and your partner (Workforce Development Specialists and Digital Enablement Directors) are presenting your plan to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing reciprocal reverse mentorship pairings, compassionate digital upskilling labs, conflict de-escalation masterclasses, and culture-building metrics.',
    judgeQuestions: [
      'How do we structure \"Reverse Mentorship\" so that proud veteran managers do not feel patronized or disrespected by a 21-year-old associate teaching them technology?',
      'How will veteran associates teach intangible hospitality warmth and intuition to younger staff who are accustomed to communicating through text screens?'
    ],
    benchmarkPoints: [
      'Launch "The Two-Way Bridge": structured weekly 45-minute reciprocal mentorship sessions where junior associates mentor veterans on iPad PMS navigation, while veterans mentor juniors on executive poise and guest de-escalation.',
      'Establish the "No-Stress Digital Sandbox Lab": a quiet, supportive practice environment where veteran associates practice simulated guest check-ins on tablets without the pressure of live guests.',
      'Host monthly "Generational Story Circles" to celebrate hotel history, shared values, and mutual professional respect across all age groups.',
      'Achieve 100% digital PMS competency across all veteran staff within 60 days, cutting software transaction errors by 70% while improving cross-departmental team morale by 28%.'
    ]
  },
  {
    id: 'pd-06',
    title: 'Diversity, Equity & Inclusive Leadership Sponsorship in Executive Hospitality: Vantage Hotels',
    instructionalArea: 'Professional Development',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Chief Diversity Officers & Executive Talent Strategists',
    judgeRole: 'Chief Executive Officer of Vantage Hospitality Corporation',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze systemic barriers and talent leaks in hospitality executive leadership pipelines',
        description: 'Diagnose why 65% of frontline workers are women and people of color, yet executive GM roles remain 85% homogeneous.'
      },
      {
        name: 'Differentiate between passive employee mentorship and proactive executive career sponsorship',
        description: 'Require C-suite sponsors to actively advocate for protégés during senior promotion and succession meetings.'
      },
      {
        name: 'Establish transparent, merit-based competency frameworks for executive promotions',
        description: 'Eliminate informal \"tap-on-the-shoulder\" promotion networks in favor of standardized evaluation rubrics.'
      },
      {
        name: 'Incorporate inclusive leadership, unconscious bias, and cultural intelligence into executive coaching',
        description: 'Train general managers to recognize affinity bias and create psychologically safe team environments.'
      },
      {
        name: 'Establish measurable ESG diversity benchmarks linked directly to executive incentive compensation',
        description: 'Tie 15% of regional vice presidents’ annual performance bonuses to diversity pipeline milestones.'
      }
    ],
    twentyFirstCenturySkills: ['Inclusive Leadership', 'Systemic Equity Analysis', 'Strategic Advocacy', 'Organizational Transformation'],
    background: `Vantage Hospitality Corporation operates a portfolio of 45 upscale lifestyle and convention hotels across the country, employing over 6,500 associates.

A comprehensive internal demographic audit revealed a stark and indefensible \"broken pipeline\":
- At the frontline level, the company is vibrant and diverse: 68% of associates across Housekeeping, Front Desk, and Culinary are women and racial minorities.
- However, as career levels rise, diversity evaporates: only 18% of Department Heads and a dismaying 6% of General Managers are women or people of color. The corporate C-suite is 100% homogeneous.
- Exit interviews from high-potential diverse supervisors revealed a deep-seated sense of exclusion: associates reported that career advancement depended on informal golf outings, private social dinners, and belonging to the \"in-group\" of existing executives.
- Major corporate convention planners and institutional ESG investors have begun formally questioning Vantage’s lack of executive leadership diversity, threatening to pull multi-million-dollar corporate accounts unless tangible changes occur.

The Chief Executive Officer has declared that diversity cannot remain an empty HR slogan and has mandated the implementation of \"The Vantage Executive Sponsorship & Inclusive Pathway Initiative.\"

You and your partner (Chief Diversity Officers and Executive Talent Strategists) are presenting your Executive Sponsorship Blueprint to the CEO (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the structural difference between passive mentoring and executive sponsorship, transparent promotion gates, bias training, and accountability metrics tied to executive bonuses.',
    judgeQuestions: [
      'What specific mechanisms ensure that executive sponsors actively open doors and advocate for diverse protégés rather than just having coffee once a quarter?',
      'How do we address pushback from existing middle managers who fear that a targeted diversity initiative will create \"unfair reverse discrimination\" against them?'
    ],
    benchmarkPoints: [
      'Launch "The Vantage Sponsorship Pact": Senior Vice Presidents and GMs are formally matched with high-potential diverse protégés, with a contractual commitment to sponsor them for high-visibility committee projects and promotion slates.',
      'Eliminate informal promotions: mandate that 100% of supervisory and management openings must be posted publicly, requiring a diverse candidate slate (Rooney Rule) before final selection.',
      'Tie executive compensation to equity: connect 15% of Regional Vice Presidents\' annual incentive bonuses to meeting specific diverse talent retention and promotion milestones.',
      'Establish Employee Resource Groups (ERGs) with direct advisory channels to the Board of Directors, ensuring frontline voices shape corporate policy.'
    ]
  },
  {
    id: 'pd-07',
    title: 'Mental Health, Empathy & Emotional Resilience Training for Crisis Staff: Skyline Tower',
    instructionalArea: 'Professional Development',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Associate Wellness Directors & Crisis Psychology Trainers',
    judgeRole: 'General Manager of Skyline Tower Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Examine emotional labor, compassion fatigue, and psychological burnout in frontline hospitality',
        description: 'Analyze the psychological toll of handling aggressive guests, flight cancellations, and verbal abuse.'
      },
      {
        name: 'Design evidence-based emotional resilience and de-escalation professional development programs',
        description: 'Incorporate trauma-informed communication, mindfulness, and cognitive reframing techniques.'
      },
      {
        name: 'Establish peer support networks and post-incident psychological debriefing protocols',
        description: 'Provide immediate confidential debriefing for associates following severe guest confrontations or emergencies.'
      },
      {
        name: 'Transform workplace culture to destigmatize mental health and encourage utilization of EAP resources',
        description: 'Provide free, confidential mental health counseling sessions and 24/7 tele-therapy apps.'
      },
      {
        name: 'Evaluate the business case for associate mental wellness on absenteeism, turnover, and guest reviews',
        description: 'Quantify reductions in unplanned sick call-outs and improvements in employee net promoter scores.'
      }
    ],
    twentyFirstCenturySkills: ['Emotional Intelligence', 'Crisis Counseling', 'Empathy & Wellness', 'Culture Building'],
    background: `Skyline Tower Hotel is an 850-room high-volume convention hotel connected directly to a bustling transit hub. Over the past two years, frontline hospitality staff have faced unprecedented psychological stress:
- Front desk agents, telephone operators, and restaurant servers routinely endure severe verbal abuse from travelers furious over airline cancellations, delayed baggage, and travel fatigue.
- In a confidential employee survey, 72% of guest-facing associates reported experiencing symptoms of chronic anxiety, compassion fatigue, or clinical burnout. Over 40% admitted to crying in staff restrooms during their shifts.
- Unplanned absenteeism has surged by 45%, forcing remaining staff to work exhausting double shifts, which further worsens burnout. Last month, three promising supervisors abruptly walked off the job mid-shift due to emotional overwhelm.
- Historically, management dismissed stress as \"just part of working in hospitality, toughen up.\" The hotel offers a generic Employee Assistance Program (EAP) hotline, but only 2% of staff utilize it due to social stigma and lack of awareness.

The General Manager recognizes that associate mental health is an urgent operational priority and has mandated the creation of \"The Resilient Hospitality Professional Program.\"

You and your partner (Associate Wellness Directors and Crisis Psychology Trainers) are presenting your Mental Health & Emotional Resilience Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing frontline de-escalation psychology training, post-incident trauma debriefs, accessible mental health benefits, and operational culture reforms.',
    judgeQuestions: [
      'How does emotional resilience training protect associates from verbal abuse without encouraging them to become indifferent or robotic toward guest complaints?',
      'How will your program convince skeptical hourly associates that utilizing mental health resources will not harm their standing or career advancement chances?'
    ],
    benchmarkPoints: [
      'Deploy the "Verbal Aikido & De-Escalation Masterclass": interactive roleplay workshops teaching associates psychological detachment, calm assertiveness, and tactical de-escalation.',
      'Institute the "Post-Crisis Safe Harbor Protocol": any associate subjected to severe verbal hostility or traumatic guest incidents is granted an immediate paid 30-minute sensory decompression break with peer counseling.',
      'Partner with modern digital mental health platforms (e.g., Lyra or Modern Health) providing 12 free, confidential on-demand therapy sessions annually per employee via smartphone.',
      'Achieve projected 35% reduction in unplanned sick call-outs and recover $220,000 in saved turnover replacement costs while building a reputation as an employer of choice.'
    ]
  },
  {
    id: 'pd-08',
    title: 'International Cross-Cultural Protocol Certification: The Global Diplomat Hotel',
    instructionalArea: 'Professional Development',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Cross-Cultural Protocol Directors & International Training Leads',
    judgeRole: 'Managing Director of The Global Diplomat Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze international diplomatic etiquette, cultural nuances, and dietary taboos in hospitality',
        description: 'Examine Middle Eastern, East Asian, and European business customs, greeting protocols, and gift exchanges.'
      },
      {
        name: 'Design an accredited Cultural Intelligence (CQ) certification curriculum for luxury hotel staff',
        description: 'Train concierge, butler, and banquet teams on state protocol, flag etiquette, and religious observance requirements.'
      },
      {
        name: 'Establish dietary compliance and religious kitchen certification standards (Halal, Kosher, Vedic)',
        description: 'Train culinary and banquet staff on certified ritual preparation, dedicated cookware, and allergen separation.'
      },
      {
        name: 'Prevent cross-cultural misunderstandings and unintentional offensive gestures by frontline staff',
        description: 'Educate associates on body language, left-hand dining taboos, eye contact norms, and personal space.'
      },
      {
        name: 'Evaluate the commercial impact of cultural protocol mastery on winning international delegation bids',
        description: 'Demonstrate how certified cultural competency wins multi-million-dollar embassy and UN delegation room blocks.'
      }
    ],
    twentyFirstCenturySkills: ['Global Cultural Intelligence', 'Diplomatic Etiquette', 'Diversity & Respect', 'High-Stakes Communication'],
    background: `The Global Diplomat Hotel is a prestigious 420-room luxury hotel located in a major international diplomatic capital. The hotel bids extensively on hosting foreign heads of state, international trade delegations, United Nations summits, and royal entourages.

Recently, an embarrassing series of cultural protocol blunders severely damaged the hotel's international reputation:
1. During a high-profile visit by a Middle Eastern royal trade delegation, the banquet team served pork bacon on the breakfast buffet directly adjacent to Halal pastries without signage, and a server offered wine to a foreign minister whose religious beliefs strictly forbid alcohol.
2. A front desk supervisor handed an international ambassador an invoice using their left hand while making intense, prolonged direct eye contact—gestures considered deeply offensive in the ambassador’s home culture. The delegation abruptly checked out 48 hours early, moving to a competitor hotel.
3. Frontline staff admitted in surveys that they feel terrified and uneducated when international delegations arrive, having received zero formal training on diplomatic titles, flag placement, or cultural etiquette.

The Managing Director has allocated $200,000 to launch \"The Global Hospitality Cultural Academy\" to formally certify all luxury service staff in international diplomatic etiquette and cultural intelligence.

You and your partner (Cross-Cultural Protocol Directors and International Training Leads) are presenting your Cultural Protocol Certification Program to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the cultural intelligence curriculum, embassy liaison partnerships, Halal/Kosher culinary certifications, and delegation bidding advantages.',
    judgeQuestions: [
      'How will your training program help frontline associates remember the complex nuances of dozens of different international cultures without confusing them?',
      'How does certified cultural protocol training directly help our sales team win lucrative multi-million-dollar embassy contract bids over competitor hotels?'
    ],
    benchmarkPoints: [
      'Deploy the "Cultural Intelligence (CQ) Hospitality Certification": a 4-tier interactive training curriculum developed in consultation with former diplomatic protocol officers and cultural attachés.',
      'Implement digital "Delegation Culture Briefings": automated pre-arrival briefings sent to frontline staff smartphones outlining specific dietary, religious, and etiquette customs of arriving international delegations.',
      'Obtain certified Halal and Kosher kitchen accreditations with dedicated prep kitchens and certified ritual culinary supervision for high-stakes diplomatic banquets.',
      'Leverage cultural certification in global sales pitches, winning back targeted embassy business and securing $3.8 million in high-yield diplomatic room-block contracts.'
    ]
  },
  {
    id: 'pd-09',
    title: 'Housekeeping Career Ladders & Supervisory Development: Island Bay Luxury Resort',
    instructionalArea: 'Professional Development',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Operations Training Directors & Career Ladder Architects',
    judgeRole: 'General Manager of Island Bay Luxury Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design transparent career progression pathways within housekeeping operations',
        description: 'Map career milestones from Room Attendant to Quality Inspector, Housekeeping Supervisor, and Assistant Executive Housekeeper.'
      },
      {
        name: 'Incorporate English as a Second Language (ESL) and bilingual leadership upskilling',
        description: 'Provide paid on-site ESL language classes and dual-language management software training.'
      },
      {
        name: 'Develop supervisory coaching skills for newly promoted room attendants',
        description: 'Train newly promoted supervisors on empathetic communication, fair work allocation, and constructive feedback.'
      },
      {
        name: 'Mitigate physical injury and repetitive strain through ergonomic health education',
        description: 'Train room attendants on proper mattress lifting techniques, stretching routines, and motorized linen cart usage.'
      },
      {
        name: 'Measure the impact of housekeeping professional development on room cleanliness scores and retention',
        description: 'Demonstrate a 40% reduction in housekeeping turnover and a 15-point increase in cleanliness Net Promoter Scores.'
      }
    ],
    twentyFirstCenturySkills: ['Empathetic Leadership', 'Bilingual Education', 'Ergonomic Health', 'Operational Excellence'],
    background: `Island Bay Luxury Resort is an expansive 480-room beachfront resort with 160 dedicated housekeeping team members. Housekeeping is the backbone of the resort’s operation, responsible for cleaning and inspecting 480 luxury suites every single day.

However, the housekeeping department is plagued by severe morale and retention challenges:
- Annual turnover among room attendants has reached an alarming 58%. In exit interviews, room attendants express that they feel \"invisible, unappreciated, and trapped in dead-end physical labor.\"
- Over 70% of room attendants are immigrant workers who speak English as a second language. While many possess exceptional leadership potential, language barriers prevent them from applying for supervisory roles.
- When vacancies open for Housekeeping Supervisors or Floor Inspectors, the resort historically hired external candidates who lacked room cleaning experience. These external supervisors often alienated room attendants by barking orders without understanding the physical reality of turning 14 luxury suites per shift.
- The department experiences high workers' compensation claims due to repetitive back injuries from lifting heavy luxury mattresses.

The General Manager wants to dismantle the \"dead-end\" perception of housekeeping by launching \"The Island Bay Housekeeping Career Pathway & Leadership Academy.\"

You and your partner (Operations Training Directors and Career Ladder Architects) are presenting your Housekeeping Career Ladder Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the 4-tier housekeeping career ladder, paid bilingual leadership classes, ergonomic injury prevention, and internal promotion metrics.',
    judgeQuestions: [
      'How can our resort afford to provide paid English and leadership classes during work hours when housekeeping has strict room-cleaning deadlines to meet by 4:00 PM?',
      'How will your program prepare a room attendant who has never managed people to effectively oversee and discipline their former peers?'
    ],
    benchmarkPoints: [
      'Establish the 4-Tier "Housekeeping Mastery Ladder": Tier 1 (Room Attendant), Tier 2 (Lead Trainer / Inspector), Tier 3 (Floor Supervisor), Tier 4 (Assistant Executive Housekeeper), with clear wage step increases.',
      'Offer paid 30-minute daily on-site ESL and Bilingual Leadership modules: schedule classes during off-peak morning hours (9:00-9:30 AM) with paid company time.',
      'Deploy the "Ergonomic Athlete Program": partner with physical therapists to train staff on biomechanics, provide motorized electric linen carts, and implement pre-shift warm-up routines, cutting injury claims by 45%.',
      'Commit to an internal promotion pledge: fill 80% of all future housekeeping supervisory and inspection openings through internal graduates, cutting turnover from 58% to 18% and saving $190,000 annually.'
    ]
  },
  {
    id: 'pd-10',
    title: 'Commercial Mastery & Sales Negotiation Academy: Summit Convention Center Hotel',
    instructionalArea: 'Professional Development',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Commercial Sales Directors & Negotiation Coaches',
    judgeRole: 'Vice President of Sales & Marketing & Regional Asset Partner',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design advanced B2B negotiation and consultative selling curriculums for hotel sales teams',
        description: 'Transition sales managers from passive order-takers into assertive, value-based consultative commercial partners.'
      },
      {
        name: 'Incorporate Certified Hospitality Sales Executive (CHSE) certification standards into professional development',
        description: 'Sponsor advanced professional credentials from the Hospitality Sales & Marketing Association International (HSMAI).'
      },
      {
        name: 'Master complex group contract clauses: attrition, cancellation, force majeure, and F&B minimums',
        description: 'Train sales managers to defend hotel contractual protections and eliminate costly contract concessions.'
      },
      {
        name: 'Develop dynamic roleplay simulation labs for high-stakes corporate RFP oral presentations',
        description: 'Prepare sales managers to pitch against fierce competitor comp sets in live client presentation finals.'
      },
      {
        name: 'Correlate sales professional development with group contract conversion rates and banquet profitability',
        description: 'Demonstrate a 22% increase in group room rate realization and a 30% increase in banquet catering minimums.'
      }
    ],
    twentyFirstCenturySkills: ['Commercial Negotiation', 'Strategic Influence', 'Contractual Acumen', 'Executive Communication'],
    background: `Summit Convention Center Hotel is a massive 950-room hotel featuring 85,000 square feet of meeting and exhibition space. The hotel relies on a 22-person sales and catering team to book over $35 million in annual group meetings, national corporate conferences, and medical association conventions.

Over the past eighteen months, the sales team has exhibited severe commercial weaknesses:
1. Sales managers have developed an \"order-taker\" mentality: when meeting planners ask for concessions, sales managers instantly cave in, offering discounted room rates, waiving meeting room rental fees, and slashing banquet Food & Beverage minimums just to close deals.
2. In recent negotiations, sales managers signed contracts with disastrous attrition clauses (allowing clients to drop up to 35% of their room block 14 days before arrival without penalty), leaving the hotel with 300 unsold rooms that could not be resold.
3. The sales team closed only 16% of high-yield corporate RFPs, consistently losing multi-million-dollar conferences to competitor convention hotels in oral presentation rounds.
4. Sales associates express that they have received zero professional negotiation or sales coaching since joining the company, relying on outdated sales scripts from 2005.

The Vice President of Sales & Marketing has allocated $150,000 to launch \"The Summit Commercial Mastery & Negotiation Academy\" to upskill the entire sales force.

You and your partner (Commercial Sales Directors and Negotiation Coaches) are presenting your Sales Academy Framework to the Vice President of Sales (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing consultative selling methodologies, contract clause mastery, live video simulation labs, HSMAI certifications, and financial conversion metrics.',
    judgeQuestions: [
      'If our sales managers push back firmly on meeting planner concession demands, won’t meeting planners simply take their conventions to competitor hotels across town?',
      'How will your training program help a junior sales manager successfully negotiate against seasoned, aggressive corporate procurement executives?'
    ],
    benchmarkPoints: [
      'Deploy the "Consultative Value-Selling Framework": teach sales managers to uncover client strategic objectives and sell customized event outcomes rather than competing on commodity room price.',
      'Establish the "Contract Defense Clinic": master the legal and financial mechanics of group contract clauses (strict cumulative 10% attrition thresholds, sliding-scale cancellation damages, non-negotiable F&B minimums).',
      'Institute weekly "Mock Client Presentation Labs": sales managers pitch group proposals on video and receive immediate peer and executive critique to polish executive presence.',
      'Sponsor HSMAI Certified Hospitality Sales Executive (CHSE) credentials for all sales team members upon graduation, lifting RFP closing conversion from 16% to 28% and generating $4.2 million in incremental revenue.'
    ]
  }
];
