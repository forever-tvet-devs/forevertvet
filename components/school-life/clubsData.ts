export interface Club {
  name: string;
  slug: string;
  description: string;
  overview: string[];
  meets: string;
  image: string;
  photos: string[];
}

export const clubs: Club[] = [
  {
    name: "Coding & Innovation Club",
    slug: "coding-innovation",
    description: "Build apps, solve real problems, and explore AI tools. Weekly projects and an end-of-term hackathon.",
    overview: [
      "The Coding & Innovation Club is where students go beyond the curriculum to explore the creative side of technology. Members work on real software projects — from mobile apps to web tools — using modern programming languages and frameworks.",
      "Each term culminates in a hackathon where teams compete to build the most innovative solution to a real-world problem. Past projects have included attendance tracking apps, inventory management tools, and community health information systems.",
      "Whether you are an experienced coder or writing your first line of code, this club welcomes you. Senior members mentor newcomers, and every session is designed to be hands-on and collaborative.",
    ],
    meets: "Tuesdays, 4:00 PM",
    image: "/images/image1.png",
    photos: ["/images/image1.png", "/images/image2.png", "/images/PeopleLookAtTrainingDevice.png", "/images/image4.jpg"],
  },
  {
    name: "Electronics & Robotics Club",
    slug: "electronics-robotics",
    description: "Hands-on electronics prototyping, circuit design, and robot build challenges using real components.",
    overview: [
      "The Electronics & Robotics Club brings together students who love building things. Members design and assemble circuits, prototype electronic devices, and take on robot build challenges using real components and microcontrollers.",
      "The club operates out of the electrical simulation lab, giving members access to professional-grade tools and equipment. Projects range from simple LED circuits for beginners to complex sensor-driven robots for advanced members.",
      "This club is a natural extension of the Electrical Technology and Computer Systems programmes, but students from any department are welcome. If you are curious about how things work, this is your space.",
    ],
    meets: "Thursdays, 4:00 PM",
    image: "/images/image2(ElecticalControlCabinate).png",
    photos: ["/images/image2(ElecticalControlCabinate).png", "/images/image1.png", "/images/PeopleLookAtTrainingDevice.png", "/images/image2.png"],
  },
  {
    name: "Photography & Media Club",
    slug: "photography-media",
    description: "Document campus life, learn photo editing, and produce content for the school's social media channels.",
    overview: [
      "The Photography & Media Club is the creative voice of Forever Tvet Institute. Members document campus life, school events, and student achievements through photography, video, and written content.",
      "The club produces content for the school's social media channels and website, giving members real-world experience in digital media production. Sessions cover camera technique, composition, photo and video editing, and storytelling.",
      "Members develop a portfolio of published work during their time in the club — a valuable asset for anyone considering a career in media, marketing, or communications alongside their technical qualification.",
    ],
    meets: "Fridays, 3:30 PM",
    image: "/images/image2.png",
    photos: ["/images/image2.png", "/images/image1.png", "/images/SolarPanelsTechnologyImage.png", "/images/image4.jpg"],
  },
  {
    name: "Music & Arts Club",
    slug: "music-arts",
    description: "Instruments, vocal practice, visual art, and cultural expression. Performs at all major school events.",
    overview: [
      "The Music & Arts Club is where students express themselves creatively through instruments, vocal performance, visual art, and cultural dance. The club is open to all skill levels — from complete beginners to experienced performers.",
      "Members perform at all major school events including orientation day, graduation ceremonies, and cultural celebrations. The club also organises informal showcases throughout the year where students can share their work with the wider campus community.",
      "Beyond performance, the club fosters teamwork, confidence, and cultural appreciation — skills that complement the technical training students receive in their programmes.",
    ],
    meets: "Fridays, 4:00 PM",
    image: "/images/image4.jpg",
    photos: ["/images/image4.jpg", "/images/image1.png", "/images/image2.png", "/images/PeopleLookAtTrainingDevice.png"],
  },
  {
    name: "Debate Society",
    slug: "debate-society",
    description: "Public speaking, structured argumentation, and current affairs discussions. Competes in inter-school events.",
    overview: [
      "The Debate Society sharpens students' ability to think critically, argue persuasively, and communicate with confidence. Members engage in structured debates on current affairs, policy issues, and ethical questions relevant to Rwanda and the wider world.",
      "The society competes in inter-school debate tournaments and public speaking competitions, giving members the chance to represent Forever Tvet Institute on a regional stage.",
      "These communication and analytical skills are consistently cited by employers as among the most valuable attributes a graduate can bring — making the Debate Society one of the most career-relevant extracurriculars on campus.",
    ],
    meets: "Wednesdays, 4:00 PM",
    image: "/images/PeopleLookAtTrainingDevice.png",
    photos: ["/images/PeopleLookAtTrainingDevice.png", "/images/image1.png", "/images/image2.png", "/images/image4.jpg"],
  },
  {
    name: "Environmental Action Club",
    slug: "environmental-action",
    description: "Sustainability projects, campus greening initiatives, and community environmental education.",
    overview: [
      "The Environmental Action Club leads sustainability efforts on campus and in the surrounding community. Members plan and execute greening projects, waste reduction initiatives, and environmental awareness campaigns.",
      "Past projects have included campus tree planting, a recycling programme, and educational outreach sessions at local primary schools. The club partners with the Solar Technology programme to promote renewable energy awareness.",
      "As Rwanda positions itself as a leader in environmental sustainability, graduates who can demonstrate environmental awareness and initiative stand out to employers across every sector.",
    ],
    meets: "Mondays, 4:00 PM",
    image: "/images/SolarPanelsTechnologyImage.png",
    photos: ["/images/SolarPanelsTechnologyImage.png", "/images/image1.png", "/images/image2.png", "/images/LandSurveyingLecturer.jpg"],
  },
  {
    name: "Sports & Fitness Club",
    slug: "sports-fitness",
    description: "Organised sports sessions, fitness training, and inter-institute competition. The largest club on campus.",
    overview: [
      "The Sports & Fitness Club is the largest and most active club on campus. Members participate in organised sports sessions, fitness training, and inter-institute competitions across football, basketball, volleyball, and athletics.",
      "The club promotes physical wellbeing, team spirit, and healthy competition. Regular training sessions are open to all fitness levels, and the club fields teams for inter-school tournaments throughout the year.",
      "Beyond physical fitness, participation in team sports develops leadership, discipline, and resilience — qualities that translate directly to the workplace and are valued by every employer.",
    ],
    meets: "Daily, 5:30 PM",
    image: "/images/image4.jpg",
    photos: ["/images/image4.jpg", "/images/image1.png", "/images/image2.png", "/images/PeopleLookAtTrainingDevice.png"],
  },
  {
    name: "Peer Mentorship Program",
    slug: "peer-mentorship",
    description: "Senior students mentor new intake students through their first weeks — academic, social, and practical support.",
    overview: [
      "The Peer Mentorship Program pairs experienced senior students with new intake students to provide academic, social, and practical support during the critical first weeks and months at Forever Tvet Institute.",
      "Mentors help new students navigate campus life, understand programme expectations, develop study habits, and build connections within their cohort. The programme is structured with regular check-ins and support from the Dean of Students.",
      "Being a mentor is one of the most respected roles a student can hold at Forever Tvet. It develops leadership, empathy, and communication skills — and mentors consistently report that the experience is as valuable for them as it is for their mentees.",
    ],
    meets: "Bi-weekly",
    image: "/images/image1.png",
    photos: ["/images/image1.png", "/images/PeopleLookAtTrainingDevice.png", "/images/image2.png", "/images/image4.jpg"],
  },
];
