export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Pipeline Error Resolution - RAG Model",
    description:
    "Built a Retrieval Augmented NLP model trained on a large dataset of Error-Resolution pair used for self-sustaining deployment pipeline, targeting 70% of pipeline failures for automation.",
    technologies: ["NLP", "serverhooks", "ELK Stack"]
  },
  {
    title: "BM25 based text Search Engine",
    description:
      "BM25-based search engine using a sparse index on the SciQ dataset.",
    technologies: ["gradio", "python", "BM25", "SciQ"],
    projectUrl: "https://huggingface.co/spaces/pratyushpaliwal/BM25implementation",
    // imageUrl:
      // "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://huggingface.co/spaces/pratyushpaliwal/BM25implementation/tree/main",
  },
  {
    title: "CrIB: Container Image Builder",
    description:
    "Worked on a no-code/low-code web app solution cutting down Docker Desktop Enterprise licensing costs by 80%, enabling Dev teams to build container images through a web-based App leveraging Podman.",
    technologies: ["React-Redux", "Docker", "Podman", "Flask", "CI/CD"]
  },
  {
    title: "Nearby Covid Help Tracker",
    description:
      "A Web App to locate nearby helpers for COVID-19 related resources and to allow potential helpers to mark themselves.",
    technologies: ["Django web framework", "Geolocation API", "Google maps API", "python"],
    // projectUrl: "https://project-demo.com",
    // imageUrl:
      // "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/PratyushPaliwal/COVID-HELP-TRACKER",
  },
  {
    title: "E-Parchi: Mobile Application aiming for unified-digitized health care sector",
    description:
      "Project to develop a Flutter based mobile app to keep track of medical data.",
    technologies: ["Flutter", "python"],
    // projectUrl: "https://project-demo.com",
    // imageUrl:
      // "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // codeUrl: "https://github.com/PratyushPaliwal/COVID-HELP-TRACKER",
  },
];
