// ============================================================================
// DECA HTDM Case Studies - Instructional Area: Promotion (10 Cases)
// Focuses on integrated marketing communications (IMC), experiential PR stunts, influencer partnerships, and social digital storytelling
// ============================================================================

import { DecaCaseStudy } from '../types/deca';

export const promotionCases: DecaCaseStudy[] = [
  {
    id: 'pro-01',
    title: 'Integrated Promotional Campaign & Luxury Brand Relaunch for The St. Clair Manor',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Brand Promotion & Integrated Marketing Communications Lead',
    judgeRole: 'Managing Director of The St. Clair Manor & Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design an Integrated Marketing Communications (IMC) campaign for a luxury hotel relaunch',
        description: 'Coordinate synchronized public relations, digital social storytelling, influencer partnerships, and direct marketing.'
      },
      {
        name: 'Evaluate the role of influencer marketing and experiential press events in hospitality',
        description: 'Establish vetting criteria, contractual deliverable expectations, and ROI tracking for travel content creators.'
      },
      {
        name: 'Formulate sales promotion incentives that stimulate off-peak leisure bookings without brand degradation',
        description: 'Design high-value experiential packages (private vineyard tours, spa credits) instead of raw percentage price discounting.'
      },
      {
        name: 'Analyze ethical considerations in hospitality promotional advertising and photo representation',
        description: 'Ensure digital photography and marketing assets accurately depict actual room categories, view lines, and amenities.'
      },
      {
        name: 'Measure the effectiveness and Return on Ad Spend (ROAS) of multi-channel promotional campaigns',
        description: 'Track conversion funnels across social impressions, metasearch click-throughs, and direct website bookings.'
      }
    ],
    twentyFirstCenturySkills: ['Media Strategy', 'Brand Storytelling', 'Campaign Analytics', 'Creative Direction'],
    background: `The St. Clair Manor is an elegant 280-room historic countryside estate and resort located in an internationally acclaimed wine country valley. The property recently completed a comprehensive $22 million restoration featuring completely renovated guest suites, a new farm-to-table Michelin-caliber restaurant, and an expanded equestrian center.

Despite the spectacular physical transformation, the resort's commercial re-launch is struggling to achieve viral traction:
1. Awareness among affluent leisure travelers in the primary feeder markets (located 2 to 4 hours away by car) remains sluggish, with many consumers perceiving the property as the "tired, formal antique hotel" it was prior to the renovation.
2. The property’s social media channels are stale, posting generic landscape photographs with minimal engagement and zero authentic storytelling.
3. A previous ad-hoc influencer partnership ended in controversy when an unvetted lifestyle influencer with 500,000 followers received a complimentary $4,000 weekend suite buyout but generated only six trackable link clicks and failed to publish the contracted video walkthrough.
4. Off-peak autumn and winter midweek occupancy is currently pacing at an alarming 38%, prompting ownership to ask whether they should launch drastic 50% discount flash-sales on third-party deal sites like Groupon.

The Managing Director refuses to compromise the property's luxury prestige with low-end discounting, but demands an immediate, sophisticated Promotional Launch Blueprint with an allocated $200,000 promotional campaign budget.

You and your partner (Director of Brand Promotion and Integrated Marketing Communications Lead) must present an Integrated Promotional Campaign to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute integrated promotional strategy to the Managing Director. Design a viral estate relaunch campaign, structure high-ROI vetted influencer partnerships, create value-added off-peak promotional packages, and establish clear ROAS metrics.',
    judgeQuestions: [
      'How will your promotional campaign persuade affluent travelers that our manor has transformed into a vibrant modern luxury retreat without cheapening our brand image?',
      'What strict contractual guardrails and tracking mechanisms will you put in place to ensure influencer partnerships yield tangible bookings rather than empty vanity metrics?'
    ],
    benchmarkPoints: [
      'Launch "The Manor Reborn" multi-phase integrated campaign blending high-definition cinematic micro-documentaries of the restoration with targeted social ad placements in top-tier feeder cities.',
      'Replace raw discount flash-sales with the "Valley Harvest & Equine Escape" package (complimentary private vineyard cellar tour, $150 spa credit, and equestrian trail ride) protecting price integrity while driving mid-week occupancy.',
      'Establish a strict Content Creator Vetting Framework: require verified audience demographics, past brand engagement rates > 3.5%, clear contractual deliverable deadlines, and trackable affiliate booking promo codes.',
      'Target a minimum 4.5x Return on Ad Spend (ROAS), measuring campaign performance through dedicated landing page conversions, direct phone booking tags, and digital referral revenue.'
    ]
  },
  {
    id: 'pro-02',
    title: 'Micro-Influencer Curation & Authentic Storytelling: The Bohemia Boutique Hotel',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Social Media Promotion Leads & Content Creator Coordinators',
    judgeRole: 'General Manager of The Bohemia Boutique Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Differentiate between celebrity macro-influencers and hyper-targeted micro-influencers in lodging',
        description: 'Compare engagement rates, authenticity, and audience trust across follower tiers (10k-50k vs. 1M+).'
      },
      {
        name: 'Design ironclad influencer partnership contracts and performance deliverable agreements',
        description: 'Mandate specific deliverables: Instagram Reels, TikTok videos, high-res photography rights, and FTC disclosure.'
      },
      {
        name: 'Incorporate Federal Trade Commission (FTC) endorsement guidelines in hospitality social campaigns',
        description: 'Require clear, conspicuous \"#ad\" and \"#sponsored\" disclosures to avoid severe regulatory fines.'
      },
      {
        name: 'Establish trackable affiliate booking promo codes and custom landing pages for creators',
        description: 'Measure direct revenue generation, room-night conversions, and cost-per-acquisition (CPA).'
      },
      {
        name: 'Curate Instagrammable visual moments and design details throughout hotel physical spaces',
        description: 'Incorporate neon art installations, aesthetic matcha bars, and photo-ready rooftop vistas.'
      }
    ],
    twentyFirstCenturySkills: ['Digital Content Strategy', 'Influencer Contract Structuring', 'Visual Curation', 'Regulatory Compliance'],
    background: `The Bohemia Boutique Hotel is a trendy 120-room lifestyle hotel in an artistic urban warehouse district. The hotel features eclectic vintage furnishings, a rooftop natural wine garden, and rotating local art installations.

Last year, the previous marketing manager spent $60,000 hiring two celebrity \"macro-influencers\" with over 1.5 million followers each. The campaign was a disaster:
- The celebrity influencers spent their stay lounging in private cabanas, demanded expensive off-menu room service, and posted a single blurry photo tagging the wrong hotel account name.
- Tracking analytics revealed that 90% of their followers were teenagers located in foreign countries who had zero intention of booking a $320/night boutique hotel room in this city.
- Total realized room revenue from the $60,000 campaign was less than $4,200.

The General Manager has fired the previous agency and wants to pivot to a \"Hyper-Local Micro-Creator Collective\": partnering with 20 vetted micro-influencers (10,000 to 50,000 followers) who specialize in regional travel, architecture, foodie culture, and lifestyle photography within a 200-mile drive radius.

You and your partner (Social Media Promotion Leads and Content Creator Coordinators) are presenting your Micro-Influencer Curation & Promotion Strategy to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing micro-creator selection criteria, contractual deliverables, FTC compliance, visual property staging, and direct booking ROI tracking.',
    judgeQuestions: [
      'Why will twenty micro-influencers with 25,000 followers produce more booked room nights than two celebrity influencers with 1.5 million followers?',
      'How will your team ensure that all creators strictly comply with FTC endorsement disclosure rules so our hotel isn’t fined?'
    ],
    benchmarkPoints: [
      'Demonstrate micro-creator power: micro-influencers achieve 3x to 5x higher organic engagement rates (4.8% vs. 1.1%) and possess authentic geographic relevance in regional drive markets.',
      'Execute formal Creator Contracts: mandate 2 Instagram Reels, 1 TikTok, 5 high-res image rights for hotel marketing use, and mandatory prominent "#TheBohemiaPartner" and "#ad" disclosures.',
      'Deploy the "Bohemia Creator Key": provide each creator with a unique 15% discount promo code and tracked landing page, rewarding creators with a 10% cash commission on realized direct room bookings.',
      'Achieve projected 6.2x ROI on a $35,000 micro-creator budget, driving $217,000 in direct room revenue while building a permanent library of high-resolution user-generated visual assets.'
    ]
  },
  {
    id: 'pro-03',
    title: 'Viral Experiential PR Stunt: The World’s Highest Open-Air Suite at Alpine Apex Resort',
    instructionalArea: 'Promotion',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Public Relations Directors & Guerilla Promotion Strategists',
    judgeRole: 'Vice President of Global Brand Communications & Resort Operations',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design high-impact experiential publicity stunts and guerrilla promotional activations',
        description: 'Create an audacious, newsworthy physical brand spectacle that captures global media headlines.'
      },
      {
        name: 'Formulate an earned media press outreach and news syndication distribution plan',
        description: 'Pitch exclusive stories to major media outlets (Condé Nast Traveler, CNN Travel, Architectural Digest).'
      },
      {
        name: 'Establish rigorous safety, structural engineering, and liability protocols for extreme promotional concepts',
        description: 'Ensure structural mountain safety, emergency evacuation plans, and medical supervision.'
      },
      {
        name: 'Amplify earned media buzz through coordinated digital and social amplification funnels',
        description: 'Pair global news coverage with immediate website direct booking promotions and social contests.'
      },
      {
        name: 'Calculate Earned Media Value (EMV) and advertising value equivalency (AVE) of global PR coverage',
        description: 'Demonstrate how a $75,000 experiential stunt generates over $3.5 million in earned media exposure.'
      }
    ],
    twentyFirstCenturySkills: ['Guerrilla PR Strategy', 'Risk Management', 'Media Relations', 'Creative Direction'],
    background: `Alpine Apex Resort is a luxury 200-room ski resort situated on a breathtaking mountain crest at 9,500 feet elevation. Despite world-class powder skiing and 5-star culinary offerings, the resort struggles for international name recognition against legendary iconic European resorts (Zermatt, St. Moritz, Courchevel) and famous North American ski giants (Vail, Aspen).

The resort’s paid digital advertising is expensive and drowning in a sea of generic winter ski ads. The Vice President of Global Brand Communications believes that the only way to achieve instant, global brand fame is through an audacious, jaw-dropping experiential PR stunt that captures national and international television, magazine, and social media headlines.

Management has approved a $75,000 budget to create \"The Cloud Suite at Peak 9\":
- Partnering with mountain structural engineers to construct a temporary, transparent geodesic glass bedroom suite perched on a cantilevered steel platform projecting over a 2,000-foot vertical cliff face at the mountain summit.
- The glass suite features a plush king bed with heated goose-down duvets, a private champagne telescope lounge, and zero walls—offering 360-degree views of the Milky Way and snow-capped peaks.
- The suite will be auctioned off for a single week to benefit mountain conservation, generating massive worldwide curiosity.

You and your partner (Public Relations Directors and Guerilla Promotion Strategists) are presenting your Experiential PR Stunt & Global Media Launch Strategy to the Vice President of Global Brand Communications (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the stunt concept, engineering and safety failsafes, international press embargo strategy, viral social mechanics, and Earned Media Value projections.',
    judgeQuestions: [
      'What happens if a severe blizzard hits the mountain summit while a VIP journalist is staying in the glass cliffside suite?',
      'How does global news coverage of an unbookable, 1-week glass pod actually convert into booked room nights at our regular 200-room hotel?'
    ],
    benchmarkPoints: [
      'Incorporate extreme safety engineering: certified by structural avalanche engineers, equipped with wind-load dampeners rated to 110 mph, thermal heated glass, and an adjacent sheltered mountain rescue bunker.',
      'Execute a coordinated Global Media Embargo: provide exclusive sneak-peek features to Architectural Digest and CNN Travel 48 hours prior to public launch, triggering syndication across 300+ global news networks.',
      'Channel global viral curiosity: pair media coverage with a global sweepstakes ("Win a Night in the Clouds") capturing over 250,000 high-income consumer email addresses for future direct marketing.',
      'Deliver astronomical PR ROI: generate an estimated $4.2 million in Earned Media Value (EMV) on a $75,000 stunt budget, driving an immediate 35% surge in seasonal ski suite bookings.'
    ]
  },
  {
    id: 'pro-04',
    title: 'Cause-Related Marketing & Coral Reef Conservation: Coral Reef Sanctuary Resort',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Director of Social Impact Marketing & Sustainability Campaign Leads',
    judgeRole: 'General Manager of Coral Reef Sanctuary Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design authentic cause-related marketing (CRM) campaigns in hospitality',
        description: 'Tie room bookings directly to tangible marine conservation milestones (1 booking = 1 coral fragment planted).'
      },
      {
        name: 'Establish credible non-profit partnerships with certified oceanographic research institutes',
        description: 'Partner with marine biologists to verify conservation efficacy and eliminate \"greenwashing\" accusations.'
      },
      {
        name: 'Incorporate experiential guest participation into environmental promotional activations',
        description: 'Invite resort guests to snorkel to the on-site coral nursery and assist marine scientists in reef restoration.'
      },
      {
        name: 'Promote transparent corporate social responsibility (CSR) reporting across promotional media',
        description: 'Publish live digital reef camera feeds and monthly audit dashboards showing total acreage restored.'
      },
      {
        name: 'Evaluate the commercial impact of cause-marketing on booking conversion and guest willingness-to-pay',
        description: 'Demonstrate how ethical brand alignment commands a 15% ADR premium among affluent travelers.'
      }
    ],
    twentyFirstCenturySkills: ['Environmental Ethics', 'Authentic Brand Purpose', 'Partnership Development', 'Strategic Storytelling'],
    background: `Coral Reef Sanctuary Resort is an upscale 240-room beachfront eco-resort situated adjacent to a fragile offshore barrier reef. In recent years, warming ocean temperatures and tourism boat traffic have bleached and damaged over 30% of the local coral ecosystem.

Modern eco-conscious travelers are increasingly skeptical of corporate environmental claims, viewing hotel \"save the planet by hanging your towel\" signs as cynical attempts to cut laundry costs. Concurrently, travelers are actively seeking destinations that practice genuine \"regenerative tourism\"—where their stay leaves the destination better than they found it.

Management wants to launch a flagship Cause-Related Marketing Campaign entitled \"Stay to Restore\":
- The resort partners with a world-renowned Marine Oceanographic Institute to build an on-site coral restoration nursery directly off the resort beach.
- For every room night booked directly on the resort website, the resort funds the propagation and planting of one certified micro-fragment of heat-resilient coral onto the damaged reef.
- Guests receive a digital GPS coordinate of their specific planted coral fragment and access to live underwater webcams tracking reef regrowth.

The General Manager wants to ensure that the campaign is perceived as 100% authentic, scientifically rigorous, and powerful enough to drive direct website bookings over third-party OTAs.

You and your partner (Director of Social Impact Marketing and Sustainability Campaign Leads) are presenting your Cause-Related Promotional Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the scientific partnership, guest experiential touchpoints, transparent impact reporting, multi-channel PR, and booking conversion lift.',
    judgeQuestions: [
      'How do we prove to skeptical environmental journalists that this campaign is a genuine conservation initiative rather than a clever marketing gimmick?',
      'If planting coral costs our resort $12 per room night, how will this campaign generate enough incremental revenue to cover that expense and increase net profits?'
    ],
    benchmarkPoints: [
      'Execute a formal partnership with the Certified Marine Research Foundation, ensuring 100% scientific transparency and independent third-party audit reports.',
      'Deploy the "Adopt-a-Reef" guest portal: direct bookers receive high-resolution drone photos and live underwater time-lapse video of their specific coral nursery pod.',
      'Leverage cause-marketing to defeat OTA commissions: make the coral planting benefit exclusive strictly to direct website bookings, shifting 15% of bookings away from 18% OTA fees.',
      'Achieve powerful commercial returns: lifting direct booking share from 42% to 58% saves $380,000 in OTA commissions, easily funding the $95,000 coral conservation program while boosting GOP.'
    ]
  },
  {
    id: 'pro-05',
    title: 'Re-Activating Dormant Loyalty Members Through Personalized Promotion: Grand Dynasty',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Loyalty CRM Campaign Leads & Direct Promotion Strategists',
    judgeRole: 'Vice President of Global Loyalty Marketing & Guest Retention',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Analyze guest loyalty database segmentation and identify dormant member churn triggers',
        description: 'Examine 180,000 loyalty members who have not booked a hotel stay in the past 14 months.'
      },
      {
        name: 'Design hyper-personalized, data-driven promotional email and SMS re-engagement campaigns',
        description: 'Utilize past folio spending data (favorite wine, room type, travel season) to craft bespoke re-activation offers.'
      },
      {
        name: 'Formulate time-limited \"Welcome Back\" point accelerators and complimentary tier upgrades',
        description: 'Offer double point multipliers and instant Gold status upgrades for bookings made within 30 days.'
      },
      {
        name: 'Optimize promotional email deliverability, open rates, click-through rates, and CAN-SPAM compliance',
        description: 'A/B test subject lines, cleanse unengaged email addresses, and deploy responsive mobile templates.'
      },
      {
        name: 'Measure incremental room-night capture and customer lifetime value (CLV) recovery',
        description: 'Demonstrate how re-activating 8% of dormant members generates $2.8 million in direct lodging revenue.'
      }
    ],
    twentyFirstCenturySkills: ['CRM Segmentation', 'Data Analytics', 'Personalized Copywriting', 'Conversion Optimization'],
    background: `Grand Dynasty Hospitality operates a luxury portfolio of 18 premier properties. The company’s proprietary loyalty program, \"Dynasty Elite,\" boasts over 850,000 registered members.

However, a recent database audit revealed an alarming trend: over 180,000 members (representing 21% of the total loyalty base) are currently classified as \"Dormant\"—meaning they have not logged into their accounts or booked a single room night in over 14 months.
- Historically, the marketing team treated all dormant members identically: sending blast, generic \"We Miss You!\" emails with uninspiring stock photos of empty hotel lobbies and generic 10% off coupons.
- These generic blasts generated a miserable 8.2% open rate, a 0.4% click-through rate, and hundreds of unsubscribes.
- Meanwhile, acquiring a new customer costs 5x to 7x more than retaining an existing guest. These 180,000 dormant members represent over $45 million in past historical spending.

The Vice President of Global Loyalty Marketing has allocated $120,000 to launch a hyper-personalized, algorithmic \"Dynasty Awakening\" promotional re-engagement campaign.

You and your partner (Loyalty CRM Campaign Leads and Direct Promotion Strategists) are presenting your Dormant Member Re-Activation Campaign to the Vice President of Loyalty Marketing (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing behavioral segmentation tiers, hyper-personalized dynamic content, point-matching incentives, deliverability testing, and financial revenue recovery.',
    judgeQuestions: [
      'How will your automated email platform dynamically personalize 180,000 emails with specific past guest memories without requiring manual human editing?',
      'How do we ensure that offering bonus points and upgrades to inactive members doesn’t offend our active, loyal members who stay with us every week?'
    ],
    benchmarkPoints: [
      'Segment the 180,000 dormant members into 4 behavioral cohorts: "High-Roller Leisure", "Corporate Road Warrior", "Weekend Spa Seeker", and "Family Vacationer".',
      'Deploy dynamic email personalization: automatically populate the email with the guest’s favorite property, preferred room category, and an image of their favorite cocktail/spa treatment.',
      'Structure the "Dynasty Awakening Offer": award a 5,000-point bonus and a complimentary room upgrade for any direct reservation completed within 30 days of email receipt.',
      'Achieve projected 8.5% re-activation rate, converting 15,300 dormant members into active stays generating $3.4 million in high-margin direct room revenue at an extraordinary 28x ROAS.'
    ]
  },
  {
    id: 'pro-06',
    title: 'Culinary Destination PR & Michelin Star Promotional Strategy: Le Cirque Grand Hotel',
    instructionalArea: 'Promotion',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Hospitality Publicists & Culinary Promotion Leads',
    judgeRole: 'Managing Director of Le Cirque Grand Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design strategic public relations campaigns targeting prestigious culinary award recognition (Michelin, James Beard)',
        description: 'Cultivate relationships with influential food critics, gastronomic editors, and award committee judges.'
      },
      {
        name: 'Leverage culinary acclaim to drive hotel room occupancy and elevated Average Daily Rates (ADR)',
        description: 'Package guaranteed Michelin-starred dinner reservations with luxury executive suite weekend bookings.'
      },
      {
        name: 'Establish promotional partnerships with luxury food, wine, and travel media publications',
        description: 'Secure feature editorials in Food & Wine, Eater, Bon Appétit, and Michelin Guide digital platforms.'
      },
      {
        name: 'Curate high-profile guest chef collaboration dinners and culinary symposiums',
        description: 'Host four-hands dinners pairing the resort executive chef with international celebrity culinary masters.'
      },
      {
        name: 'Measure the multi-outlet revenue multiplier of destination culinary reputation',
        description: 'Demonstrate how a recognized signature restaurant lifts lobby bar spend, room service, and banqueting.'
      }
    ],
    twentyFirstCenturySkills: ['Culinary PR Mastery', 'Media Relationship Management', 'Packaging Strategy', 'Commercial Storytelling'],
    background: `Le Cirque Grand Hotel is a 320-room luxury hotel situated in a historic culinary destination city. Eighteen months ago, the hotel recruited an internationally acclaimed chef and invested $4.5 million to open \"L’Hiver\"—a 50-seat avant-garde fine-dining restaurant specializing in modern French technique and hyper-local terroir.

Three months ago, the Michelin Guide announced that L’Hiver was awarded its first Michelin Star, alongside a James Beard \"Best New Restaurant\" semifinalist nomination.

However, the hotel is failing to capitalize commercially on this monumental achievement:
1. While the restaurant has a 60-day waiting list, 85% of diners are local residents who drive in for dinner and leave, without booking hotel rooms.
2. Meanwhile, the hotel’s weekend room occupancy is hovering at 64%, and corporate meeting planners are unaware that the property possesses a world-class culinary asset.
3. The hotel’s marketing department merely posted a single celebratory Facebook post on the night of the award and has executed zero coordinated national culinary PR campaigns.

The Managing Director recognizes that a Michelin star is the ultimate hospitality branding asset and demands an aggressive, high-end Culinary Promotional Strategy that leverages L’Hiver’s star power to drive high-margin room bookings, luxury suite sales, and international prestige.

You and your partner (Hospitality Publicists and Culinary Promotion Leads) are presenting your Culinary Destination Promotion Blueprint to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing national food critic media tours, luxury lodging packages with guaranteed tasting tables, guest chef collaboration series, and RevPAR lift metrics.',
    judgeQuestions: [
      'If L’Hiver is already sold out 60 days in advance with local diners, how can we legally and ethically reserve tables for hotel room guests who book only a week in advance?',
      'How do we ensure that promoting an ultra-exclusive Michelin-starred restaurant doesn’t intimidate ordinary leisure travelers who just want a casual burger in the lobby?'
    ],
    benchmarkPoints: [
      'Institute "The Hotel Guest Table Reserve": hold 25% of nightly prime dining tables exclusively for hotel guests who book the premium "Gastronomic Star Experience" suite package.',
      'Launch "The Four-Hands World Chef Series": host quarterly collaboration dinners pairing L’Hiver’s chef with visiting European and Japanese Michelin masters, generating national food media headlines.',
      'Host an exclusive National Food & Travel Editor Immersion Tour: invite top editors from Travel + Leisure and Eater for a 48-hour behind-the-scenes foraging, cellar-tasting, and suite showcase.',
      'Elevate property RevPAR: luxury culinary travelers pay a $180 ADR premium over standard leisure guests, generating $1.6 million in incremental room revenue while boosting banquet catering average check size by 35%.'
    ]
  },
  {
    id: 'pro-07',
    title: 'User-Generated Content (UGC) & Viral Social Contest: Sunburst Beachfront Resort',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Digital Engagement Leads & Social Promotion Coordinators',
    judgeRole: 'General Manager of Sunburst Beachfront Resort',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design viral User-Generated Content (UGC) promotional contests in leisure hospitality',
        description: 'Incentivize resort guests to create and share high-quality video walkthroughs, sunset reels, and TikToks.'
      },
      {
        name: 'Incorporate legal intellectual property and media rights release protocols into promotional contests',
        description: 'Secure perpetual commercial marketing usage rights for guest-submitted photography and video assets.'
      },
      {
        name: 'Create interactive physical staging and \"photo moments\" across resort amenities',
        description: 'Install infinity swing sets, aesthetic botanical selfie walls, and floating pool breakfast trays.'
      },
      {
        name: 'Establish fair, transparent contest judging criteria and compliant sweepstakes terms',
        description: 'Comply with state and federal lottery laws, clear entry deadlines, and prize disclosures.'
      },
      {
        name: 'Measure organic brand reach, engagement velocity, and direct referral booking conversions',
        description: 'Track hashtag volume (#MySunburstStory), user follower amplification, and website referral traffic.'
      }
    ],
    twentyFirstCenturySkills: ['UGC Architecture', 'Digital Community Building', 'Legal Sweepstakes Compliance', 'Visual Engagement'],
    background: `Sunburst Beachfront Resort is an expansive 420-room family vacation property located along a premier white-sand coastline. The resort features two lagoon swimming pools, water slides, a beachfront tiki bar, and catamaran excursions.

Every week, thousands of guests take photos and videos of their vacations. However, the resort is failing to harness this organic visual goldmine:
- Guests post photos on personal Instagram and TikTok accounts without tagging the hotel’s handle or using consistent hashtags.
- Meanwhile, the hotel’s corporate marketing team spends $80,000 every year hiring professional photography crews to produce staged, sterile marketing photos that look fake and achieve low social engagement.
- Travelers increasingly state in consumer surveys that they do not trust polished corporate hotel advertisements; they want to see \"real vacation experiences shared by real guests.\"

The General Manager wants to launch a nationwide User-Generated Content (UGC) campaign and viral contest entitled \"#MySunburstStory\":
- Guests who film and post creative 30-second TikTok or Instagram Reels capturing their favorite resort moments are entered to win a grand prize: an all-expenses-paid 7-night annual luxury family vacation at the resort for the next five years.
- The contest aims to generate over 10,000 guest-created videos, flooding social media feeds with organic, authentic resort promotions.

You and your partner (Digital Engagement Leads and Social Promotion Coordinators) are presenting your Viral UGC Contest & Promotion Architecture to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing contest rules and legal rights capture, physical on-property photo staging, social hashtag mechanics, judging criteria, and direct booking ROI.',
    judgeQuestions: [
      'How do we ensure that guest-submitted videos adhere to our family brand standards and do not display rowdy, inappropriate, or embarrassing behavior?',
      'Under legal sweepstakes laws, can we legally require guests to give us full commercial rights to use their videos in our future television and digital advertisements?'
    ],
    benchmarkPoints: [
      'Incorporate formal Sweepstakes Terms & Conditions (certified by legal counsel): entry includes a binding worldwide copyright license granting the resort perpetual commercial advertising usage rights.',
      'Stage 5 High-Impact "Photo Anchors" on property: install a cliffside timber infinity swing over the surf, neon botanical quote walls, and aesthetic poolside cocktail staging.',
      'Implement an automated social aggregation platform (e.g., Stackla/TINT) to curate, filter, and stream approved guest UGC directly onto the resort homepage booking engine.',
      'Achieve massive viral reach: generate over 12,000 user-submitted video assets, reaching 4.8 million organic social views and replacing $80,000 in professional production costs while driving $450,000 in direct family vacation bookings.'
    ]
  },
  {
    id: 'pro-08',
    title: 'Cross-Brand Co-Promotional Sponsorship with Luxury Automakers: The Vantage Crest',
    instructionalArea: 'Promotion',
    tier: 'State SCDC',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Strategic Partnership Directors & Co-Marketing Leads',
    judgeRole: 'Managing Director of The Vantage Crest Luxury Hotel & Residences',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design high-yield B2B co-promotional alliances between luxury hospitality and prestige lifestyle brands',
        description: 'Structure co-marketing partnerships with premium electric luxury automakers (Porsche, Lucid, Mercedes-Benz).'
      },
      {
        name: 'Formulate experiential guest amenity tie-ins that reinforce brand synergy and prestige',
        description: 'Provide complimentary guest test-drive vehicles and custom house-car chauffeured airport transfers.'
      },
      {
        name: 'Negotiate mutual promotional rights, digital database sharing, and shared event sponsorships',
        description: 'Cross-promote resort getaways to automaker VIP owner clubs while offering automaker test-drives to hotel guests.'
      },
      {
        name: 'Establish strict brand governance, insurance coverage, and vehicle liability protocols',
        description: 'Secure comprehensive commercial automotive fleet insurance and guest driving credential verification.'
      },
      {
        name: 'Calculate the halo effect and brand equity appreciation generated by co-promotional alliances',
        description: 'Demonstrate how alignment with iconic automotive brands attracts ultra-high-net-worth leisure travelers.'
      }
    ],
    twentyFirstCenturySkills: ['Co-Branding Negotiation', 'Luxury Partnership Strategy', 'Contractual Governance', 'Executive Communication'],
    background: `The Vantage Crest is an ultra-luxury 150-suite hotel and private residence nestled in an elite mountain community. The property attracts affluent tech founders, venture capitalists, and luxury leisure travelers who demand cutting-edge design and sustainability.

The hotel seeks to differentiate its brand from traditional luxury competitors by entering into a prestigious Co-Promotional Partnership with a premier luxury electric vehicle (EV) automaker (such as Porsche or Lucid Motors).

The proposed 2-year partnership entails:
1. The automaker provides a dedicated fleet of six top-tier high-performance electric sedans and SUVs as complimentary \"House Cars\" for hotel guests to take on self-guided scenic mountain drives.
2. The resort installs a 12-bay ultra-fast EV charging lounge, branded exclusively by the automaker.
3. In exchange, the automaker receives permanent luxury brand placement on property, exclusive rights to host private media ride-and-drive events, and direct access to co-market to the hotel’s affluent guest database.
4. Both brands will launch a synchronized multi-channel co-promotional campaign: \"The Electric Alpine Escape.\"

The Managing Director loves the prestige of the concept, but demands a detailed operational, promotional, and risk governance framework before signing the master partnership agreement.

You and your partner (Strategic Partnership Directors and Co-Marketing Leads) are presenting your Co-Promotional Sponsorship Strategy to the Managing Director (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the co-marketing campaign mechanics, guest driving operational protocols, insurance and liability protections, database marketing synergy, and brand ROI.',
    judgeQuestions: [
      'What are our legal and insurance liabilities if a luxury hotel guest crashes a $150,000 automaker test vehicle while on a scenic mountain drive?',
      'How does giving guests free access to luxury cars generate actual profit for our hotel rather than just being an expensive amenity?'
    ],
    benchmarkPoints: [
      'Structure dual insurance indemnity: the automaker’s master commercial fleet policy provides primary vehicle coverage, supplemented by mandatory guest driving license verification and signed liability waivers.',
      'Deploy the "Electric Alpine Escape" packaged promotion: bundle 3-night penthouse stays with a dedicated high-performance EV for the weekend, achieving a $350/night ADR premium.',
      'Cross-promote directly into the automaker’s North American owner portal, unlocking access to 65,000 verified ultra-high-net-worth luxury consumers with zero ad spend.',
      'Eliminate the resort’s $90,000 annual third-party chauffeured house-car expense while generating $680,000 in high-yield suite package bookings and international lifestyle media coverage.'
    ]
  },
  {
    id: 'pro-09',
    title: 'Holiday Winter Wonderland & Nostalgia PR Activation: The Plaza Heritage Hotel',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Experiential Promotion Directors & Holiday Event Designers',
    judgeRole: 'General Manager of The Plaza Heritage Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design immersive seasonal experiential marketing activations that drive non-resident local foot traffic',
        description: 'Transform public hotel courtyards into magical historic holiday winter wonderlands with ice rinks and chalet bars.'
      },
      {
        name: 'Capitalize on emotional consumer nostalgia to command premium holiday room rates and banquet bookings',
        description: 'Recreate classic storybook holiday traditions, tree-lighting galas, and bespoke Santa breakfast experiences.'
      },
      {
        name: 'Formulate high-margin retail and food & beverage promotional tie-ins during holiday activations',
        description: 'Monetize artisan gingerbread decorating workshops, gourmet spiked hot-cocoa bars, and private igloo rentals.'
      },
      {
        name: 'Establish local broadcast media and regional press partnerships for holiday tree-lighting ceremonies',
        description: 'Secure live prime-time television broadcasts and newspaper lifestyle features.'
      },
      {
        name: 'Calculate the total property revenue multiplier across rooms, dining, and banquets during seasonal promotions',
        description: 'Demonstrate how a $120,000 holiday decor investment generates $1.8 million in incremental holiday revenue.'
      }
    ],
    twentyFirstCenturySkills: ['Experiential Placemaking', 'Emotional Branding', 'Local Community PR', 'Commercial Execution'],
    background: `The Plaza Heritage Hotel is a 400-room grand historic landmark located in the city center. During the holiday season (mid-November through New Year's Eve), the city is filled with holiday shoppers, theatregoers, and visiting families.

In previous years, the hotel’s holiday promotion was lackluster: a small artificial tree in the lobby and a generic holiday buffet. Consequently, the hotel lost out to rival downtown hotels that created iconic holiday destinations.

The General Manager wants to reclaim The Plaza Heritage’s legacy as the city’s undisputed holiday cultural centerpiece by launching \"The Plaza Winter Wonderland & Holiday Spectacular\":
- Transform the hotel’s 5,000-square-foot outdoor courtyard into an authentic European Christmas Market, featuring a custom ice-skating rink, six heated transparent glass geodesic dining igloos, a life-sized gingerbread lodge, and a Bavarian hot-spiced cider and artisan pretzel chalet.
- Host the city’s official televised \"Grand Tree Lighting Gala\" featuring a 40-foot live fir tree, local youth choirs, and charity toy drives.
- Package holiday lodging promotions: \"The Nutcracker Holiday Suite Retreat,\" including orchestra ballet tickets, private Santa suite visits, and keepsake silver ornaments.

The proposed budget is $120,000 for courtyard transformation, lighting, and entertainment programming.

You and your partner (Experiential Promotion Directors and Holiday Event Designers) are presenting your Holiday Promotional Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the physical winter courtyard transformation, holiday lodging packages, broadcast press strategy, private igloo monetization, and total revenue payback.',
    judgeQuestions: [
      'If thousands of local residents flood our courtyard for the holiday market, won’t that create chaotic security lines and disturb paying overnight hotel guests?',
      'How does an outdoor ice rink and cocoa chalet generate enough high-margin revenue to recover a $120,000 setup investment in six short weeks?'
    ],
    benchmarkPoints: [
      'Manage crowd flow with zoned security: preserve the main lobby exclusively for registered hotel guests; direct public holiday market attendees through a separate decorated courtyard boulevard.',
      'Monetize private dining igloos: require a $350 minimum F&B spend for 90-minute igloo rentals serving fondue and champagne, generating $190,000 in pure high-margin F&B profit across 45 days.',
      'Package 50 premium "Holiday Family Fantasy Suites" priced at a $220 ADR premium, generating $330,000 in incremental room revenue.',
      'Broadcast the Tree Lighting Gala live on the local NBC affiliate, generating $650,000 in regional Earned Media Value and establishing the hotel as the permanent holiday symbol of the city.'
    ]
  },
  {
    id: 'pro-10',
    title: 'Local Community PR & \"Staycation\" Tourism Promotion: Civic Pride Downtown Hotel',
    instructionalArea: 'Promotion',
    tier: 'District',
    event: 'Hospitality Services Team Decision Making (HTDM)',
    participantRole: 'Community PR Directors & Regional Campaign Strategists',
    judgeRole: 'General Manager of Civic Pride Downtown Hotel',
    timePrepMinutes: 30,
    timePresentationMinutes: 15,
    performanceIndicators: [
      {
        name: 'Design targeted regional \"staycation\" promotional campaigns for metropolitan residents',
        description: 'Promote weekend escapes, anniversary getaways, and self-care retreats within a 30-mile radius.'
      },
      {
        name: 'Build promotional partnerships with local cultural institutions, theatres, and sports franchises',
        description: 'Package hotel stays with VIP symphony tickets, museum private tours, and stadium club seats.'
      },
      {
        name: 'Foster authentic community goodwill and local pride through charitable civic activations',
        description: 'Host public charity galas, blood drives, and showcase regional culinary artisans.'
      },
      {
        name: 'Deploy geofenced digital advertising and local direct-mail campaigns to affluent suburban zip codes',
        description: 'Target empty-nester couples and young professionals with exclusive weekend staycation offers.'
      },
      {
        name: 'Evaluate the contribution margin of weekend staycations in filling corporate hotel room voids',
        description: 'Demonstrate how weekend local staycations lift Friday and Saturday occupancy from 42% to 85%.'
      }
    ],
    twentyFirstCenturySkills: ['Community Engagement', 'Hyper-Local Marketing', 'Partnership Synthesis', 'Strategic Promotion'],
    background: `Civic Pride Downtown Hotel is a 380-room full-service hotel. Like many urban downtown hotels, the property thrives on business travelers Monday through Thursday (averaging 92% occupancy), but empties out dramatically on weekends, with occupancy plunging to 42% on Friday and Saturday nights.

Historically, the hotel viewed local city residents as irrelevant, marketing exclusively to out-of-town corporate travelers. Meanwhile, tens of thousands of affluent couples and suburban families living 15 to 30 minutes away in surrounding affluent suburbs are eager for romantic weekend escapes, theatre nights, and shopping staycations, but they never consider staying at Civic Pride because they perceive it as an impersonal business facility.

The General Manager wants to launch a permanent, high-impact regional campaign entitled \"Be a Tourist in Your Own Town\":
- Partnering with the downtown cultural district: bundling overnight stays with VIP tickets to Broadway touring shows, private museum curator tours, and chauffeured town-car transit.
- Offering \"The Ultimate Date Night Staycation\": including late 4:00 PM Sunday checkouts, complimentary valet parking, a chilled bottle of regional sparkling wine, and a $100 rooftop dining voucher.
- Launching an annual \"Civic Hometown Heroes Gala\" honoring local teachers, first responders, and nurses with complimentary weekend stays.

You and your partner (Community PR Directors and Regional Campaign Strategists) are presenting your Local Staycation & Community PR Blueprint to the General Manager (the judge).`,
    challenge: 'Deliver a 15-minute presentation detailing the local staycation packaging, cultural partnerships, geofenced advertising strategy, community PR events, and weekend occupancy transformation.',
    judgeQuestions: [
      'Why would a couple who lives only 20 miles away in the suburbs pay $280 to stay overnight in our hotel instead of just driving home after dinner?',
      'How do we ensure that promoting local staycations does not attract rowdy local partygoers who damage rooms or disturb other guests?'
    ],
    benchmarkPoints: [
      'Overcome the drive-home objection: market the "Hassle-Free Indulgence" (no designated drivers, no highway traffic, complimentary valet parking, luxury breakfast in bed, and guaranteed 4:00 PM late checkout).',
      'Enact strict staycation verification: require primary guest age 25+, credit card matching government ID, and a strict no-party quiet-hours policy to ensure peaceful romantic ambiance.',
      'Deploy geofenced social media ads targeted specifically to suburban households with household income > $150k within a 35-mile radius on Wednesday and Thursday afternoons.',
      'Achieve financial transformation: lifting weekend occupancy from 42% to 82% generates 300 additional room nights per weekend, contributing $2.1 million in high-margin incremental room and dining revenue annually.'
    ]
  }
];
