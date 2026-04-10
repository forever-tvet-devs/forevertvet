export type NewsCategory = "Academic" | "Community" | "Admissions" | "Events" | "Achievements" | "Partnerships";

export interface NewsPost {
  slug: string;
  category: NewsCategory;
  categoryColor: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  featured?: boolean;
  body: string[]; // paragraphs
}

export const posts: NewsPost[] = [
  {
    slug: "graduates-land-jobs-construction-firms",
    category: "Achievements",
    categoryColor: "bg-red-50 text-red-700",
    date: "February 28, 2026",
    readTime: "4 min read",
    title: "FTI Graduates Land Jobs at Major Rwandan and Chinese Construction Firms",
    excerpt: "The latest cohort of Heavy Machinery Operation & Maintenance and Public Works graduates have secured positions with leading companies, with starting salaries ranging from 100,000 to 500,000 RWF per month.",
    imageSrc: "/images/image1.png",
    featured: true,
    body: [
      "Forever Tvet Institute is proud to announce that the majority of graduates from the 2025 Heavy Machinery Operation & Maintenance and Public Works programmes have secured formal employment within six months of completing their studies. Companies recruiting this cohort include some of Rwanda's most active infrastructure contractors and Chinese construction firms operating on national road and building projects.",
      "Starting salaries for newly placed graduates range from 100,000 to 500,000 RWF per month depending on the role, employer, and prior experience. Several graduates have joined companies as junior operators, site assistants, and equipment maintenance technicians — roles directly aligned with the practical skills developed during the programme.",
      "The Headmaster, speaking at a staff briefing, noted that this outcome reflects the quality of both the training and the internship programme. 'Every student who graduates from us has already worked on a real site. Employers are not taking a chance — they know what they are getting. That is why the conversion rate from internship to employment is as high as it is.'",
      "The school's industry placement team works year-round to identify and strengthen relationships with employers across Rwanda and the broader East African region. The 30+ confirmed industry partners who provide internship placements are the same companies that often become the first point of hire for graduates.",
      "Students interested in the Heavy Machinery Operation & Maintenance and Public Works programmes for the 2026 intake can apply through the school's online application portal. Places are limited, and preference is given to early applicants.",
    ],
  },
  {
    slug: "equipment-partnership-heavy-machinery",
    category: "Partnerships",
    categoryColor: "bg-cyan-50 text-cyan-700",
    date: "February 15, 2026",
    readTime: "3 min read",
    title: "New Equipment Partnership Strengthens Heavy Machinery Operation & Maintenance Programme",
    excerpt: "Forever Tvet Institute has expanded its fleet of training equipment through a new agreement with industry partners, giving students access to the latest heavy construction machinery used on live job sites.",
    imageSrc: "/images/PeopleLookAtTrainingDevice.png",
    body: [
      "Forever Tvet Institute has formalised a new equipment partnership that significantly expands the range and quality of machinery available to Heavy Machinery Operation & Maintenance students. The agreement, reached following months of negotiation, provides the school with access to updated equipment models currently in active use on live construction projects across Rwanda.",
      "The partnership means that students will now train on the same machines they will encounter from day one of their careers. Previously, while the school's equipment was functional and industry-appropriate, the new units represent the next generation of heavy machinery technology being deployed on Rwanda's infrastructure projects.",
      "This addition complements the school's existing training area, which already features controlled operation zones, pre-operation inspection bays, and a dedicated safety briefing station. The new equipment is integrated directly into the programme's Phase 2 and Phase 3 curriculum, where students transition from theoretical understanding to extended practical operation.",
      "The partnership also includes periodic on-site visits from the partner company's engineers, who will deliver guest sessions on equipment maintenance and real-world operational challenges. These sessions, scheduled quarterly, provide students with insight that goes beyond what can be taught in a structured training environment.",
    ],
  },
  {
    slug: "enrolment-open-2026",
    category: "Admissions",
    categoryColor: "bg-amber-50 text-amber-700",
    date: "January 20, 2026",
    readTime: "3 min read",
    title: "Enrolment Open for 2026 Intake Across All Five Vocational Programmes",
    excerpt: "Applications are now being accepted for the 2026 intake. Places are limited across all programmes — Heavy Machinery Operation & Maintenance, Land Surveying, Electrical Technology, Public Works, and Computer Systems & Architecture.",
    imageSrc: "/images/SolarPanelsTechnologyImage.png",
    body: [
      "Forever Tvet Institute has officially opened applications for the 2026 academic year intake. All nationally recognised vocational programmes are accepting applications — Heavy Machinery Operation & Maintenance, Land Surveying, Electrical Technology, Public Works, and Computer Systems & Architecture.",
      "Applications for Intake 1 (January 2026 start) close on 15 December 2025. Intake 2 (July 2026 start) will open for applications on 1 April 2026. The school strongly encourages prospective students to apply early, as classes are capped at 25 students per programme and historically fill before the closing date.",
      "The minimum entry requirement for all programmes is a secondary school leaving certificate (Senior 6 or equivalent). Full entry requirements are published on the school's Requirements page.",
      "The total programme fee covers tuition, lab usage, learning materials, internship placement, the national RQF certification exam, and certificate issuance. A payment plan option is available, splitting the fee across two instalments. Merit scholarships covering 25–50% of fees are awarded to qualifying applicants who demonstrate financial need.",
      "To apply, visit the Apply Online page and complete the online form. The process takes approximately 15–20 minutes. Applicants will receive a response within 3–5 working days of submission.",
    ],
  },
  {
    slug: "solar-lab-upgrade-2026",
    category: "Academic",
    categoryColor: "bg-blue-50 text-blue-700",
    date: "January 10, 2026",
    readTime: "3 min read",
    title: "Solar Technology Yard Upgraded with New Grid-Tie Systems",
    excerpt: "Our outdoor solar training facility now features six fully operational grid-tie installation bays following a major equipment upgrade ahead of the 2026 intake. Students will train on the same systems used by Rwanda's leading solar contractors.",
    imageSrc: "/images/SolarPanelsTechnologyImage.png",
    body: [
      "Ahead of the 2026 intake, Forever Tvet Institute has completed a significant upgrade to its outdoor Solar Technology Yard. The facility, which forms the centrepiece of the school's renewable energy practical training, now features six fully operational grid-tie installation bays alongside the existing off-grid configurations.",
      "Grid-tie systems — which feed surplus solar energy back into Rwanda's national electricity grid — represent a growing segment of the country's solar market. Until this upgrade, students trained primarily on off-grid and battery-storage systems. The addition of grid-tie bays means that students graduating from the 2026 intake will be qualified to install and commission both system types, making them significantly more employable.",
      "The upgrade also includes new real-time monitoring software installed at each bay, allowing students to observe live energy production, consumption, and export data during their practical sessions. This mirrors the monitoring dashboards used by professional solar installation companies and gives students a head start in understanding the data-driven side of the industry.",
      "Rwanda's national energy strategy has set ambitious targets for expanding solar capacity over the coming decade. Demand for qualified solar technicians is expected to grow substantially, and this upgrade positions Forever Tvet graduates at the front of that pipeline.",
    ],
  },
  {
    slug: "orientation-day-intake-1-2026",
    category: "Events",
    categoryColor: "bg-purple-50 text-purple-700",
    date: "January 5, 2026",
    readTime: "3 min read",
    title: "Intake 1 Orientation Day Welcomes 120 New Students",
    excerpt: "Forever Tvet Institute welcomed its largest-ever intake to orientation day on 5 January 2026. The ceremony included program introductions, a tour of the facilities, and addresses from the Headmaster and Head Parent.",
    imageSrc: "/images/image1.png",
    body: [
      "On 5 January 2026, Forever Tvet Institute officially welcomed Intake 1 students to orientation day — the largest single intake in the school's history, with 120 students enrolling across all five programmes. The day began with a formal ceremony in the main hall, attended by students, parents, faculty, and administrative staff.",
      "The Headmaster opened proceedings with a welcome address, setting out the school's expectations, values, and the structure of the academic year ahead. The Head Parent, Mme. Chantal Uwimana, also addressed the gathering, introducing herself and the newly constituted Parent Committee and outlining the communication channels available to families throughout the year.",
      "Following the formal proceedings, students were divided into programme groups for introductory sessions with their lead instructors. Each group received an overview of their curriculum, a walkthrough of the specific labs and training areas they would use, and a safety briefing covering the protocols and standards expected in all practical environments.",
      "The afternoon included a guided campus tour, allowing new students to familiarise themselves with classrooms, the student common room, administrative offices, and the outdoor training areas. Returning students from previous intakes were also present as informal peer guides, answering questions and sharing their experiences.",
      "Classes for Intake 1 began on 6 January 2026. The school wishes all new students a productive and rewarding first year.",
    ],
  },
  {
    slug: "career-fair-employer-open-day-2026",
    category: "Events",
    categoryColor: "bg-purple-50 text-purple-700",
    date: "February 28, 2026",
    readTime: "4 min read",
    title: "Career Fair Draws 20+ Employers to Campus for Intake 1 Students",
    excerpt: "Over 20 employers in construction, electricity, IT, and surveying attended the February Career Fair, with several offering on-the-spot internship placements and conditional job offers to current students.",
    imageSrc: "/images/image2.png",
    body: [
      "Forever Tvet Institute hosted its annual Career Fair on 28 February 2026, bringing together more than 20 employers from sectors spanning construction, electrical technology, IT and networking, and land surveying. The event, held in the school's main hall, was open to all Intake 1 students as well as members of the public interested in understanding the career landscape for TVET graduates.",
      "Employers present included infrastructure contractors, solar installation companies, IT service providers, and engineering consultancies. Several companies maintained recruitment stands throughout the day, conducting informal interviews and accepting CV submissions on the spot.",
      "By the end of the day, at least six employers had offered conditional internship placements or indicated strong interest in hiring specific students following graduation. Three students from the Electrical Technology programme received verbal offers of internship placements beginning in May, ahead of the school's formal Phase 3 internship schedule.",
      "The fair also featured a panel discussion in the afternoon, during which four industry professionals — all graduates of vocational training programmes — spoke about career progression, salary expectations, and what employers look for when hiring TVET graduates. Students were given the opportunity to ask questions directly.",
      "The Career Fair is held annually and is open to prospective students and parents who wish to understand the employment landscape for graduates. The next event is provisionally scheduled for Q1 2027. Employers interested in participating should contact the school's placement team at careers@forevertvet.rw.",
    ],
  },
  {
    slug: "land-survey-national-certification-results",
    category: "Achievements",
    categoryColor: "bg-red-50 text-red-700",
    date: "December 20, 2025",
    readTime: "3 min read",
    title: "Land Surveying Students Achieve 100% Pass Rate in National RQF Examinations",
    excerpt: "All enrolled Land Surveying students passed their Rwanda Qualifications Framework examinations in the December 2025 sitting — the third consecutive year of a perfect pass rate for the program.",
    imageSrc: "/images/LandSurveyingLecturer.jpg",
    body: [
      "For the third consecutive year, every enrolled student in the Land Surveying programme at Forever Tvet Institute has achieved a passing grade in the Rwanda Qualifications Framework (RQF) national certification examinations. The December 2025 sitting maintained the programme's extraordinary record — a 100% pass rate across three successive years.",
      "The RQF examinations are administered by the Rwanda Workforce Development Authority (WDA) and assess both theoretical knowledge and practical competency. Students are evaluated on topics including topographic surveying, boundary determination, total station operation, GPS data processing, and field documentation standards.",
      "The head of the Land Surveying programme attributed the results to the programme's field-first approach to teaching. 'Our students spend more time outside than inside,' he noted. 'By the time they sit the national exam, they have already done the real work multiple times. The exam is a confirmation of what they already know, not a surprise.'",
      "A significant portion of the exam preparation involves mock assessments conducted in the school's field site using the same equipment and documentation formats required in the national examination. Students also benefit from feedback sessions after each practical assessment, where instructors walk through common errors and correct technique in real time.",
      "The results reinforce Forever Tvet Institute's position as one of the leading TVET providers for land surveying training in Rwanda. Students interested in the Land Surveying programme can apply for the 2026 intake through the school's online portal.",
    ],
  },
  {
    slug: "parent-committee-launch-2026",
    category: "Community",
    categoryColor: "bg-green-50 text-green-700",
    date: "January 8, 2026",
    readTime: "3 min read",
    title: "Parent Committee for 2026 Intake Formally Constituted",
    excerpt: "The Parent Committee for the 2026 academic year has been formally established, with Mme. Chantal Uwimana elected as Head Parent. The committee will meet with school administration monthly throughout the year.",
    imageSrc: "/images/image1.png",
    body: [
      "The Parent Committee for the 2026 academic year has been formally constituted following the election of committee members at the Intake 1 Orientation Day. Mme. Chantal Uwimana was elected unanimously as Head Parent by the assembled parent body — a reflection of the confidence that her fellow parents place in her leadership and communication skills.",
      "The committee structure includes the Head Parent, two Deputy Head Parents representing different programme groups, five class representatives (one per programme), and a Secretary responsible for recording minutes and managing communications. All positions were filled on the day of election, with no vacancies remaining.",
      "The committee's first formal meeting with the school's Dean of Students is scheduled for the last Friday of January 2026. Monthly meetings between the committee and school administration will continue throughout the academic year, with quarterly meetings with the Headmaster.",
      "Mme. Uwimana outlined her priorities for the year in a brief statement following her election: 'My focus is on communication and responsiveness. Parents should never feel that their concerns are being ignored or delayed. I want every parent to know who to call, what to expect, and how quickly we will get back to them.'",
      "Parents wishing to raise a concern, submit an agenda item for the next committee meeting, or simply make contact with the Head Parent can do so via the Parents Corner page on the school's website, or by contacting Mme. Uwimana directly at headparent2026@forevertvet.rw.",
    ],
  },
  {
    slug: "computer-engineering-cisco-partnership",
    category: "Partnerships",
    categoryColor: "bg-cyan-50 text-cyan-700",
    date: "December 5, 2025",
    readTime: "3 min read",
    title: "Computer Systems & Architecture Programme Now Incorporates Cisco Networking Curriculum",
    excerpt: "Forever Tvet Institute's Computer Systems & Architecture programme has integrated Cisco networking modules into its curriculum, giving students industry-recognised networking skills alongside their RQF qualification.",
    imageSrc: "/images/image2(ElecticalControlCabinate).png",
    body: [
      "Forever Tvet Institute has integrated Cisco networking curriculum modules into the Computer Systems & Architecture programme, effective from the 2026 academic year. The integration means that Computer Systems & Architecture students will now study structured network fundamentals, IP addressing, routing concepts, and network troubleshooting as part of their programme — skills directly aligned with what employers in IT infrastructure, telecommunications, and systems integration are actively hiring for.",
      "The Cisco curriculum is delivered alongside the existing RQF-accredited Computer Systems & Architecture content, not as a replacement. Students complete both streams in parallel, with the Cisco modules occupying dedicated lab sessions during Phase 2 and Phase 3 of the programme. Hardware for the sessions — including Cisco routers, switches, and patch panels — is already installed in the Computer Systems Lab.",
      "The head of the Computer Systems & Architecture programme explained the motivation behind the integration: 'Rwanda's digital economy is growing fast. Companies need people who can set up networks, not just fix laptops. Adding Cisco content means our graduates can do both — and that makes them significantly more hireable.'",
      "Computer Systems & Architecture students who successfully complete both the RQF examinations and the Cisco module assessments will receive their national TVET certificate alongside a record of achievement for the Cisco content. This dual-credential approach strengthens the graduate's CV without extending the duration of the programme.",
    ],
  },
  {
    slug: "alumni-network-launch",
    category: "Community",
    categoryColor: "bg-green-50 text-green-700",
    date: "November 30, 2025",
    readTime: "3 min read",
    title: "FTI Alumni Network Launches with Over 200 Graduate Members",
    excerpt: "The Forever Tvet alumni network has officially launched with more than 200 registered members from across Rwanda and the region. The network offers job postings, mentorship connections, and quarterly in-person events.",
    imageSrc: "/images/image4.jpg",
    body: [
      "Forever Tvet Institute has officially launched its alumni network, bringing together more than 200 graduates from across Rwanda and the wider East African region. The network was formally announced at an inaugural alumni evening held on campus, attended by graduates, current students, faculty, and several industry partners.",
      "The alumni network operates as a structured community with three core offerings: a job board updated weekly with roles submitted directly by employer partners, a mentorship programme pairing current students with graduates working in their target field, and quarterly in-person events hosted at the school where graduates and students can connect informally.",
      "Membership in the alumni network is free and lifelong for all graduates of Forever Tvet Institute. Registration is completed through a short online form, and members are added to the network's communication channels within 48 hours of signing up.",
      "Several alumni attending the launch event shared reflections on how the school's training had shaped their careers. One graduate, now working as a site supervisor with a major construction firm, noted: 'I came here with nothing and left with a qualification, a network, and my first job already arranged. The alumni community is the next step — staying connected to what helped me get here.'",
      "Current students are encouraged to engage with the alumni network from their first week. Alumni mentors are available to answer questions about the industry, career paths, and what life looks like after graduation. Contact the Dean of Students for details on how to connect with a mentor.",
    ],
  },
];
