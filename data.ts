
import { ContactInfo, Experience, Education, Publication, Certification, Membership } from './types';

export const contactInfo: ContactInfo = {
  name: 'DR. ING RAGAAD ALTARAWNEH',
  title: 'CURRICULUM VITAE',
  phone: '(971) 770-8525',
  email: 'raghed12@gmail.com',
  address: 'Fremont, CA, USA',
};

export const experience: Experience[] = [
  {
    date: '05/2017 – 08/2024',
    role: 'Systems Research Engineer/Scientist',
    company: 'Intel Labs',
    location: 'Intel Corporation, USA.',
    description: 'Key research areas: AI Cloud-scale visual data systems, graph database, video analytics, scalable systems',
  },
  {
    date: '05/2017 – 08/2024',
    role: 'Lecturer',
    company: 'Department of Computer Science',
    location: 'San Francisco State University, USA',
    description: '',
  },
  {
    date: '10/2015 – 10/2021',
    role: 'Assistant Professor',
    company: 'Department of Computer Science',
    location: 'Mutah University, Jordan',
    description: '',
  },
  {
    date: '2010 – 2015',
    role: 'Research Assistant',
    company: 'Computer Graphics and HCI Group',
    location: 'Department of Computer Science, University of Kaiserslautern, Germany',
    description: '',
  },
];

export const education: Education[] = [
  {
    date: '2010 – 2015',
    degree: 'Ph.D. in Computer Engineering',
    department: 'Department of Computer Science',
    company: 'RPTU Rheinland-Pfälzische Technische Universität Kaiserslautern-Landau, Germany',
    location: '',
    thesis: 'Interactive Visual Support for Understanding the Structural and Behavioral Aspects of Embedded Systems',
    note: '',
  },
  {
    date: '2005 – 2007',
    degree: 'Master of Science (M.S.) in Computer Networks',
    department: 'Department of Computer Science',
    company: 'Jordan University, Jordan',
    location: '',
    thesis: 'Applying Genetic Algorithms to Find the Best Stable Cluster in Ad Hoc Networks',
    note: '(1st in the class)',
  },
  {
    date: '2001 – 2004',
    degree: 'Bachelor of Science (B.S.) in Computer Science',
    department: 'Department of Computer Science',
    company: 'Mutah University, Jordan',
    location: '',
    thesis: '',
    note: '(1st in the class) (4 years degree finished in 3 years)',
  },
];

export const honorsAndAwards: string[] = [
    "Best Paper Award, SIGRAD 2014 Conference, 13th SIGRAD Conference of the Swedish Eurographics Chapter, Gothenburg, Sweden Apr 2014",
    "Best Paper Award, PID-MAD 2013 Workshop, MobileHCI '13 Workshop on Personal Interaction Devices: Mobile and Adaptive Displays, Munich, Germany - Aug 2013",
    "DFG Scholarship, Awarded by the German Research Foundation (DFG), Germany — May 2011",
    "Mutah University Scholarship, Partial scholarship to support PhD studies — Jun 2009",
    "King Abdullah II Scholarship for Distinct Students, Ministry of Education, Jordan — Oct 2005",
    "Jordan Military Scholarship for Distinct Students, Jordan Military, associated with Mu'tah University — Oct 2001"
];

export const publications: { journal: Publication[], bookChapters: Publication[], conference: Publication[] } = {
    journal: [
        { id: 'J1', content: "Sujay Muramalla, Ragaad AlTarawneh, Shah Rukh Humayoun, Ricarda Moses, Sven Panis, and Achim Ebert. Radial vs. Rectangular: Evaluating Visualization Layout Impact on User Task Performance of Hierarchical Data. International Journal of Computer Science and Information Security (IJCSIS), Vol. 12, issue. 2, pp. 17-31, ISSN: 1646-3692, Dec. 2017." },
        { id: 'J2', content: "Ragaad AlTarawneh and Shah Rukh Humayoun. Evolving Mobile Prototypes Towards the Best-suited Design and Interaction Schema using the Genetic Algorithm. In International Journal of Mobile Human Computer Interaction (IJMHCI), 6(2), pp. 1-10, 2014." },
        { id: 'J3', content: "Chaunte Lacewell, Nilesh Ahuja, Pablo Munoz, Parul Datta, Ragaad Altarawneh, Vui Seng Chua, Nilesh Jain, Omesh Tickoo, Ravi Iyer. (2021). E2E Visual Analytics: Achieving >10X Edge/Cloud Optimizations. In 2021 IEEE International Conference on Networking, Architecture and Storage (NAS). IEEE." }
    ],
    bookChapters: [
        { id: 'B1', content: "Ragaad AlTarawaneh, Patric Keller, and Achim Ebert. (2011). A General Introduction To Graph Visualization Techniques. In Visualization of Large and Unstructured Data Sets: Applications in Geospatial Planning, Modeling and Engineering - Proceedings of IRTG 1131 Workshop 2011." },
        { id: 'B2', content: "Ragaad AlTarawneh, Max Steiner, Davide Taibi, Shah Rukh Humayoun, and Peter Liggesmeyer. Does Visualization Speed up the Safety Analysis Process? Computer Safety, Reliability, and Security Lecture Notes in Computer Science Volume 8696, Springer, pp. 431-443, 2014." },
        { id: 'B3', content: "Ragaad AlTarawneh, Jens Bauer, Shah Rukh Humayoun, Patric Keller, and Achim Ebert. The Reflection Layer Extension to the Stereoscopic Highlight Technique for Node-Link Diagrams: An Empirical Study. Paper presented in ISVC '13, Advances in Visual Computing, Lecture Notes in Computer Science, Springer, v. 8034, pp. 1-12, 2013." }
    ],
    conference: [
        { id: 'C1', content: "Luis Miguel Aguilar, Ragaad AlTarawneh and Shah Rukh Humayoun. WebGraphViz: A WebGL-Based Interactive Graph Visualization Tool for Retail Analytics. In 27th EG/VGTC Conference on Visualization (EuroVis 2025), Luxemburg, June 2 – 6, 2025. (Accepted)" },
        { id: 'C2', content: "Jarrett Zapata, Syed Farhan Haider, Ragaad AlTarawneh, and Shah Rukh Humayoun: GraDVis: A Visualization Tool for a Visual Data Management System. The 16th ACM SIGCHI Symposium on Engineering Interactive Computing Systems (EICS Companion '24), June 24–28, 2024, Cagliari, Italy." },
        { id: 'C3', content: "Shah Rukh Humayoun, Salman Zaidi, and Ragaad AlTarawneh: SamS-Vis: A Tool to Visualize Summary View Using Sampled Data. 19th IFIP TC13 International Conference on Human-Computer Interaction (INTERACT 2023), York, UK, August 28 – September 1, 2023." },
    ]
};

export const conferenceActivities = {
    organizing: [
        "2020-2024 ACM International Conference on Intelligent User Interface (Program Committee and reviewer member)",
        "2023 16th International Conference on Communication Systems and NETworkS (Demo cochair)",
        "2020 3rd USENIX Workshop on Hot Topics in Edge Computing (HotEdge '20) (Program Committee)",
        "2014-2017 Master Program in Visual Computing in Colombia (Preparation and launch of Master in Visual Computing program)",
    ],
    reviewing: [
        "ACM Conference on Human Factors in Computing Systems (CHI) – Late Breaking Work track, 2019, 2022 – 2025",
        "ACM International Conference on Intelligent User Interfaces (IUI), 2022, 2024, 2025",
        "The 17th IFIP TC.13 International Conference on Human-Computer Interaction (INTERACT), 2019, 2021",
        "ACM Symposium on Virtual Reality Software and Technology (VRST), 2016, 2019",
        "IEEE Information Visualization (InfoVis), 2017, 2018",
    ]
};

export const supervisingData = [
    ['2025', 'Master thesis co-supervisor', 'Seham Ahmad', 'Designing and Developing a UI for LangChain Integrated with TileDB for large LLMs', 'San Francisco State University'],
    ['2025', 'Master thesis co-supervisor', 'Luis Miguel Aguilar', 'Visualizing large graph database in Visual Data Management Systems', 'San Francisco State University'],
    ['2024', 'Master thesis co-supervisor', 'Farhan Haider', 'Low-Compute Video Object Detection and Visualization Framework for Accuracy Analysis', 'San Francisco State University'],
];

export const teachingData = [
    ['Master Seminars in Visualization & HCI', '(Summer 24)', 'Lecturer', 'Department of Computer Science, San Francisco State University', 'CA, USA', 'Seminar supervision in HCI'],
    ['Computer Graphics, Information Visualization', '(Fall 15, Spring 16)', 'Lecture', 'Department of Computer Science, Mutah University', 'Jordan', 'Course development, teaching, exercises'],
    ['AI Ethics', '(Spring 2021)', 'Lecture', 'Department of Computer Science, Mutah University', 'Jordan', 'Course development, teaching, exercises'],
    ['C++ programming', '(Spring 2021)', 'Lecture', 'Mutah University', 'Jordan', 'Teaching, exercise'],
];

export const projectsData = [
    ['VDMS', 'Visual Data Management Systems', 'IntelLabs', ''],
    ['Little Fall', '3D video conference call', 'IntelLabs', ''],
    ['SAF', 'Video streaming framework', 'IntelLabs collaboration with Carnegie Mellon University', ''],
    ['VIMETRIK', '"Visual Specification of Metrics"', 'University of Kaiserslautern in collaboration with Fraunhofer IESE', '2013 - 2014'],
    ['Visual-Computing Education', 'Master Program in Visual Computing in Colombia', 'Universidad de Los Andes, Bogota, Colombia (funded by DAAD)', '2014 - 2018'],
];

export const certificationsData: Certification[] = [
    { name: 'Generative AI: Introduction to Large Language Models', date: 'Apr 2024' },
    { name: 'Introduction to Prompt Engineering for Generative AI', date: 'Apr 2024' },
    { name: 'Microservices Foundations', date: 'Jan 2023' },
    { name: 'Learning AWS Amplify', date: 'Apr 2022' },
    { name: 'Metaverse and NFTs for Marketing', date: 'Apr 2022' },
    { name: 'Statistics Foundations: 2', date: 'Apr 2022' },
    { name: 'Statistics Foundations: The Basics', date: 'Apr 2022' },
    { name: 'Learning Git and GitHub', date: 'Feb 2022' },
    { name: 'React: State Management', date: 'Feb 2022' },
    { name: 'HTTP Essential Training', date: 'Jan 2022' },
    { name: 'Learning Data Science: Understanding the Basics', date: 'Jan 2022' },
    { name: 'D3.js Essential Training for Data Scientists', date: 'Nov 2021' },
    { name: 'React Hooks', date: 'Aug 2021' },
];

export const memberships: Membership[] = [
    {
        organization: 'ACM',
        description: 'Professional Member of Association of Computing Machinery'
    },
    {
        organization: 'IEEE',
        description: 'Member of IEEE Computer Society Technical Committee on Visualization and Graphics, Member of IEEE Computer Society Technical Council on Software Engineering'
    }
]
