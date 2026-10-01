// Centralized content. Every string here is sourced directly from the
// provided brief — nothing invented. Update resumeUrl once a resume PDF
// is hosted; leave null until then.

export const profile = {
  name: "Vaghdevi Pappala",
  roles: ["AI/ML Developer", "Full-Stack Developer"],
  positioning: "Building intelligent systems and practical digital products.",
  aboutLead:
    "I'm a Computer Science graduate specializing in AI and Machine Learning.",
  aboutBody:
    "I enjoy building practical applications that combine intelligent systems, software engineering, and clean user experiences.",
  exploring: ["Computer Vision", "Generative AI", "Machine Learning", "Full-Stack Development"],
  degree: "B.Tech — CSE (AI-ML)",
  graduation: "2022 – 2026",
  college: "Gayatri Vidya Parishad College of Engineering for Women",
  cgpa: "8.69",
};

export const contact = {
  email: "vaghdevipappala@gmail.com",
  linkedin: {
    label: "www.linkedin.com/in/vaghdevipappala",
    url: "http://www.linkedin.com/in/vaghdevipappala",
  },
  github: {
    label: "github.com/vaghdevi175",
    url: "https://github.com/vaghdevi175",
  },
  resumeUrl: "/docs/Vaghdevi-Pappala-Resume.pdf",
};

// Education intentionally contains only the B.Tech record — Intermediate
// and SSC are excluded per brief.
export const education = {
  degree: "B.Tech — CSE (AI-ML)",
  period: "2022 – 2026",
  institution: "Gayatri Vidya Parishad College of Engineering for Women",
  detail: "CGPA: 8.69",
};

export const certifications = [
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    description:
      "Python 3 programming fundamentals, algorithmic problem solving, debugging, and core Python Standard Library concepts.",
  },
  {
    name: "Salesforce Developer with Agentblazer Champion Program",
    issuer: "SmartBridge × Salesforce × AICTE",
    date: "May – July 2025",
    description:
      "Salesforce fundamentals, data management, automation, Apex, Lightning Web Components, and Agentblazer concepts.",
  },
];

export const achievements = [
  { name: "Mathematics Challenge", result: "1st Prize", date: "December 2022" },
  { name: "Mathematics Hackathon", result: "Participant", date: "December 2023" },
  { name: "IWD Hackathon", result: "Participant", date: "March 2025" },
  { name: "Aptitude Challenge", result: "2nd Place", date: "2025" },
  { name: "Web Application Challenge", result: "3rd Place", date: "2025" },
];

// Order matters: Yogandhra 2025 first, DevFest Vizag 2024 second.
export const volunteering = [
  {
    id: "yogandhra-2025",
    name: "Yogandhra 2025",
    date: "15 June 2025",
    location: "Visakhapatnam",
    description:
      "Coordinated participant logistics for 400+ attendees at Yogandhra 2025, part of the Guinness World Record yoga event.",
    image: "/media/volunteering/yogandhra.jpeg",
  },
  {
    id: "devfest-vizag-2024",
    name: "DevFest Vizag 2024",
    date: "28 Sept 2024",
    location: "Visakhapatnam",
    description:
      "Supported attendee registration and event logistics for 500+ participants, helping ensure smooth coordination throughout the event.",
    image: "/media/volunteering/devfest-vizag.jpeg",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C", "SQL"],
  },
  {
    category: "Core",
    items: ["OOP", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Model Evaluation"],
  },
  {
    category: "AI / NLP",
    items: ["NLP", "LLMs", "Generative AI"],
  },
  {
    category: "Libraries",
    items: ["NumPy", "Pandas", "Scikit-learn", "Streamlit"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
];

// Full project data. `preview` fields drive the concise home-page cards;
// everything else is reserved for the dedicated project detail page.
export const projects = [
  {
    id: "fashion-fit",
    number: "01",
    name: "Fashion Fit",
    subtitle: "Virtual Clothing Try-On Application",
    category: "Computer Vision · Model Integration",
    preview:
      "A virtual clothing try-on application exploring digital visualization using computer vision and pose information.",
    projectType: "Final Year Project",
    team: "4 members",
    github: "github.com/vaghdevi175/VITON",
    githubUrl: "https://github.com/vaghdevi175/VITON",
    visual: "fashion",
    media: {
      mainImage: "/media/projects/fashion-fit-3.png",
      images: ["/media/projects/fashion-fit-1.png", "/media/projects/fashion-fit-2.png"],
      video: "/media/projects/fashion-fit.mp4",
    },
    technologies: ["Python", "PyTorch", "OpenCV", "React", "Flask", "MongoDB Atlas"],
    overview:
      "Fashion Fit explores how a garment can be visualised on a person digitally, using computer vision techniques and preprocessed pose information rather than a physical fitting.",
    problem:
      "Online clothing shopping gives no sense of how a garment will actually look on a specific body. Shoppers rely on flat catalogue photos, which makes visualising fit difficult.",
    goal:
      "Build an application that takes a person image and a garment, uses pose information to align the garment, and produces a virtual try-on visualisation.",
    myRole:
      "Worked within a team of four on the try-on pipeline and on connecting the processing layer to the web interface.",
    approach: [
      "Prepare person images and garment images for processing.",
      "Use preprocessed pose information to understand body position and key points.",
      "Run computer vision and model processing to align the garment with the detected pose.",
      "Return the generated visualisation to the frontend for review.",
    ],
    workflow: ["User", "Image input", "Pose information", "Processing", "Model / system", "Virtual try-on output"],
    architecture: ["Frontend", "Backend", "Processing", "Model / pose information", "Output"],
    keyFeatures: [
      "Image upload for person and garment",
      "Pose-informed garment alignment",
      "Try-on visualisation output",
      "Web interface connected to the processing backend",
    ],
    challenges: [
      "Image processing across varied inputs",
      "Pose alignment accuracy",
      "Frontend and backend integration",
      "Handling and serving visual outputs",
    ],
    learnings: [
      "Computer vision fundamentals",
      "Model integration into an application",
      "Frontend and backend integration",
      "Team development workflow",
    ],
  },
  {
    id: "voice-assistant",
    number: "02",
    name: "Voice-Based Email & Messaging Assistant",
    subtitle: "Voice-Driven Communication Assistant",
    category: "Voice Interaction · Automation",
    preview:
      "A voice-based assistant for composing and sending email and messages through spoken commands.",
    github: "github.com/vaghdevi175/Voice-Based-Email-and-Messaging-Assistant-TEAM-A",
    githubUrl: "https://github.com/vaghdevi175/Voice-Based-Email-and-Messaging-Assistant-TEAM-A",
    visual: "voice",
    media: {
      mainImage: "/media/projects/voice-4.png",
      images: [
        "/media/projects/voice-1.png",
        "/media/projects/voice-3.png",
        "/media/projects/voice-5.png",
        "/media/projects/voice-6.png",
        "/media/projects/voice-7.png",
        "/media/projects/voice-8.png",
      ],
      video: null,
    },
    areas: ["Voice Interaction", "Speech Processing", "Command Understanding", "Email", "Messaging", "Automation"],
    overview:
      "A conceptual and functional exploration of using voice as the primary input for writing and sending emails and messages.",
    problem:
      "Traditional email and messaging interfaces require manual typing and navigation, which is slow and inconvenient in many situations.",
    goal: "Allow users to interact with email and messaging through voice commands.",
    myRole: "Designed and implemented the voice interaction flow and the command handling logic.",
    approach: [
      "Capture voice input from the user.",
      "Process speech into text.",
      "Interpret the command to identify intent, recipient and message.",
      "Trigger the corresponding email or messaging action.",
    ],
    workflow: ["User speaks", "Voice input", "Speech processing", "Command understanding", "Action", "Email / message"],
    architecture: ["Voice input", "Command understanding", "Recipient", "Message", "Confirmation", "Send"],
    keyFeatures: [
      "Voice-driven message composition",
      "Command interpretation for recipient and content",
      "Confirmation step before sending",
      "Hands-free communication flow",
    ],
    challenges: [
      "Voice input handling",
      "Command interpretation",
      "Communication integration",
      "Handling different user commands",
    ],
    learnings: [
      "Voice interfaces",
      "Natural language understanding",
      "Automation",
      "Application integration",
      "User interaction design",
    ],
  },
  {
    id: "ai-blog-generator",
    number: "03",
    name: "AI Blog Generator",
    subtitle: "AI-Powered Blog Generation",
    category: "Generative AI · LLMs",
    preview: "Turns a short prompt into a structured blog draft using a large language model.",
    github: "github.com/vaghdevi175/Blog-Writer",
    githubUrl: "https://github.com/vaghdevi175/Blog-Writer",
    visual: "blog",
    media: {
      mainImage: "/media/projects/blog-3.png",
      images: ["/media/projects/blog-1.png", "/media/projects/blog-2.png"],
      video: "/media/projects/ai-blog-generator.mp4",
    },
    areas: ["Generative AI", "LLMs", "Prompting", "Content Generation"],
    overview:
      "An application that turns a short user prompt into structured blog content by using a large language model.",
    problem: "Creating structured blog content manually can be time-consuming.",
    goal:
      "Generate a usable blog draft from a short prompt, so writing starts from structure rather than a blank page.",
    myRole: "Built the prompt-to-content flow and the interface around it.",
    approach: [
      "Take a topic or prompt from the user.",
      "Send the prompt to a large language model.",
      "Receive and structure the generated content.",
      "Present the result as a readable blog draft.",
    ],
    workflow: ["User prompt", "AI / LLM", "Content generation", "Blog output"],
    architecture: ["User prompt", "LLM", "Content generation", "Blog output"],
    keyFeatures: ["Prompt-based blog generation", "Structured content output", "Simple interface for drafting"],
    challenges: [
      "Prompt design for consistent structure",
      "Handling varied output lengths",
      "Presenting generated content clearly",
    ],
    learnings: ["Generative AI", "Prompting", "Working with language model outputs"],
  },
  {
    id: "toxic-comment-detection",
    number: "04",
    name: "Toxic Comment Detection",
    subtitle: "Machine Learning Toxicity Detection",
    category: "Machine Learning · NLP",
    preview: "Classifies comments as toxic or non-toxic using TF-IDF features and Logistic Regression.",
    model: "Logistic Regression",
    featureMethod: "TF-IDF",
    github: "github.com/vaghdevi175/Toxic-comment-detection",
    githubUrl: "https://github.com/vaghdevi175/Toxic-comment-detection",
    visual: "toxic",
    media: {
      mainImage: "/media/projects/toxic-3.png",
      images: [
        "/media/projects/toxic-1.png",
        "/media/projects/toxic-2.png",
        "/media/projects/toxic-4.png",
        "/media/projects/toxic-5.png",
        "/media/projects/toxic-6.png",
        "/media/projects/toxic-7.png",
      ],
    },
    technologies: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "Streamlit"],
    overview:
      "A classical machine learning pipeline that classifies comment text as toxic or non-toxic, wrapped in a Streamlit interface.",
    problem: "Automatically identifying toxic or offensive comments in user-generated text.",
    goal: "Build an interpretable text classification pipeline that can flag toxic comments.",
    myRole: "Built the preprocessing, feature extraction, model training and the Streamlit interface.",
    approach: [
      "Clean and normalise raw comment text.",
      "Convert text into numerical features with TF-IDF vectorization.",
      "Train a Logistic Regression classifier.",
      "Serve predictions through a Streamlit interface.",
    ],
    workflow: ["Raw comment", "Text preprocessing", "TF-IDF vectorization", "Logistic Regression", "Prediction"],
    architecture: ["Streamlit interface", "Preprocessing", "TF-IDF", "Logistic Regression", "Prediction"],
    keyFeatures: [
      "Text preprocessing pipeline",
      "TF-IDF feature extraction",
      "Logistic Regression classification",
      "Interactive Streamlit interface",
    ],
    challenges: [
      "Text cleaning and normalisation",
      "Feature representation choices",
      "Keeping the model interpretable",
    ],
    learnings: [
      "NLP preprocessing",
      "Feature engineering with TF-IDF",
      "Classical ML modelling",
      "Model deployment with Streamlit",
    ],
  },
  {
    id: "aimers-club",
    number: "05",
    name: "Aimers Club Website",
    subtitle: "Technical Club Website",
    category: "Web Development · UI",
    preview: "A responsive website presenting the Aimers Club's identity, activities, and community.",
    github: "github.com/vaghdevi175/AIMERS-Website",
    githubUrl: "https://github.com/vaghdevi175/AIMERS-Website",
    visual: "club",
    media: {
      mainImage: "/media/projects/aimers-main.png",
      images: [],
      video: "/media/projects/aimers.mp4",
    },
    areas: ["Web Development", "UI Design", "Responsive Development", "Club Community"],
    overview:
      "A dedicated website for the Aimers Club, covering the club's identity, activities, events and community.",
    problem: "The club needed a dedicated digital presence to communicate its activities, events and community.",
    goal: "Design and build a responsive website that presents the club clearly to students.",
    myRole: "Contributed to planning, UI design and responsive development.",
    approach: [
      "Plan the sections and information the club needed to communicate.",
      "Design the interface and visual language.",
      "Develop the pages with responsive layouts.",
      "Deploy the website for the club community.",
    ],
    workflow: ["Planning", "UI design", "Development", "Responsive website", "Deployment"],
    architecture: ["Planning", "UI design", "Development", "Responsive layout", "Deployment"],
    keyFeatures: ["Club overview", "Activities and events sections", "Community highlights", "Responsive layout"],
    challenges: [
      "Structuring club information clearly",
      "Responsive behaviour across devices",
      "Consistent visual design",
    ],
    learnings: ["Web development workflow", "UI design decisions", "Responsive development"],
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
