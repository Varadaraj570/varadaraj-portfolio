// Edit this file to update your portfolio.
// Leave a link as "" to disable that button.

export const profile = {
  name: 'Varadaraj',

  headline:
    'Full Stack Developer | Java | Spring Boot | Python | Web Development',

  location: 'Mangalore, Karnataka, India',

  degree: 'B.E. Computer Science & Engineering',

  college: "Alva's Institute of Engineering and Technology",

  cgpa: '8.85',

  github: 'https://github.com/Varadaraj570',

  linkedin: 'https://www.linkedin.com/in/varadaraj-poojary/',

  email: 'poojaryd570@gmail.com',

  // Place the PDF inside the /public folder
  resumeUrl: '/varadaraj_resume.pdf',
}


export const skills = {
  Programming: [
    'Java',
    'C',
    'Python',
    'JavaScript',
    'SQL',
  ],

  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
  ],

  Backend: [
    'Spring Boot',
    'Flask',
    'Servlets',
    'JSP',
    'JDBC',
    'REST API',
  ],

  Database: [
    'MySQL',
    'SQL',
  ],

  Tools: [
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
    'Eclipse',
    'IntelliJ IDEA',
  ],

  'Machine Learning': [
    'Python',
    'OpenCV',
    'MediaPipe',
    'Scikit-learn',
  ],

  'Deep Learning': [
    'CNN',
    'LSTM',
    'Attention Mechanism',
    'EEG',
    'DWT',
  ],
}


export const projects = [
  {
    id: 'sms',

    title: 'Student Management System',

    desc:
      'A backend application for managing student records with REST APIs for creating, retrieving, updating, and deleting student information.',

    tags: [
      'Java',
      'Spring Boot',
      'JDBC',
      'MySQL',
      'REST API',
      'Postman',
    ],

    github:
      'https://github.com/Varadaraj570/Student-Management-Springboot',

    demo: '',

    overview:
      'A Spring Boot backend that stores student records in MySQL and exposes them through REST endpoints.',

    features: [
      'Create, read, update and delete student records',
      'REST API tested with Postman',
      'MySQL persistence via JDBC',
      'Structured backend architecture',
    ],

    how: [
      'Client sends HTTP request',
      'Controller routes the request',
      'Service/data layer processes the request',
      'JDBC communicates with MySQL',
      'JSON response is returned',
    ],
  },


  {
    id: 'ecom',

    title: 'E-Commerce Backend',

    desc:
      'A backend system for an e-commerce application with database integration and RESTful APIs for managing application data.',

    tags: [
      'Java',
      'Spring Boot',
      'MySQL',
      'JPA',
      'Hibernate',
      'REST API',
    ],

    github: '',

    demo: '',

    overview:
      'A Spring Boot backend using JPA and Hibernate to map application entities to MySQL and serve data through REST APIs.',

    features: [
      'RESTful APIs for application data',
      'JPA/Hibernate entity mapping',
      'MySQL database integration',
      'Repository-based data access',
      'REST API architecture',
    ],

    how: [
      'Request reaches the REST controller',
      'Service layer processes the request',
      'JPA repository reads or writes data',
      'Hibernate manages entity mapping',
      'MySQL stores application data',
      'JSON response is returned',
    ],
  },


  {
    id: 'jobs',

    title: 'Smart Job Portal',

    desc:
      'A web-based job portal with candidate and recruiter functionality, including authentication, job posting, job browsing, and job applications.',

    tags: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'MySQL',
    ],

    github: '',

    demo: '',

    overview:
      'A Flask web application where recruiters can post jobs and candidates can browse and apply for available opportunities with role-based access.',

    features: [
      'Candidate registration and login',
      'Recruiter registration and login',
      'Role-based access',
      'Recruiter job posting',
      'Candidate job applications',
      'Session-based authentication',
      'Job browsing',
      'MySQL database integration',
    ],

    how: [
      'User registers and logs in',
      'Session stores the user role',
      'Role-based access controls available features',
      'Recruiters create and post jobs',
      'Job information is stored in MySQL',
      'Candidates browse available jobs',
      'Candidates submit applications',
    ],
  },


  {
    id: 'har',

    title: 'Human Activity Recognition',

    desc:
      'A real-time human activity recognition system using webcam video, MediaPipe Pose landmarks, feature extraction, and machine learning classification.',

    tags: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'Scikit-learn',
      'Random Forest',
    ],

    github: '',

    demo: '',

    overview:
      'A real-time computer vision system that classifies Standing, Sitting, and Walking using webcam video, MediaPipe Pose landmarks, and a Random Forest classifier.',

    features: [
      'Real-time webcam input',
      'MediaPipe Pose landmark detection',
      '33 body pose landmarks',
      'Feature extraction from pose coordinates',
      'Random Forest classifier',
      'Standing, Sitting and Walking classification',
      'Real-time activity output',
    ],

    how: [
      'Video Capture',
      'Pose Detection',
      'Feature Extraction',
      'Machine Learning Classification',
      'Real-Time Output',
    ],
  },


  {
    id: 'depression-detection',

    title: 'EEG-Based Depression Detection',

    desc:
      'A deep learning approach for detecting depression from EEG signals using frequency-band decomposition, CNN, LSTM, and an attention mechanism.',

    tags: [
      'Python',
      'Deep Learning',
      'CNN',
      'LSTM',
      'Attention',
      'EEG',
      'DWT',
    ],

    github: '',

    demo: '',

    overview:
      'A deep learning-based approach for depression detection from EEG signals by combining frequency-band decomposition with CNN, LSTM, and a band attention mechanism.',

    features: [
      'EEG signal preprocessing and normalization',
      'Bandpass filtering',
      'Frequency-band decomposition using DWT',
      'CNN-based spatial feature extraction',
      'LSTM-based temporal feature learning',
      'Band attention mechanism',
      'Depression classification from EEG signals',
    ],

    how: [
      'EEG Signal Acquisition',
      'Preprocessing and Filtering',
      'Frequency-Band Decomposition',
      'CNN Feature Extraction',
      'LSTM Temporal Learning',
      'Band Attention',
      'Classification',
    ],
  },
]


export const coursework = [
  'Data Structures & Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'Object-Oriented Programming',
  'Web Development',
  'Machine Learning',
]


// Add real certification details later:
// {
//   title: 'Certificate Name',
//   issuer: 'Organization',
//   date: 'Month Year',
//   url: 'Certificate URL'
// }

export const certifications = [
  'Coursera',
  'NPTEL',
  'Infosys Springboard',
  'Salesforce Trailhead',
].map((issuer) => ({
  issuer,
  items: [],
}))