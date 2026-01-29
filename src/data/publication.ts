export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "Oct. 2024",
    conference: "USPTO",
    title: "Automated Error Resolution in a Software Deployment Pipeline",
    authors: "",
    paperUrl: "https://patents.google.com/patent/US20240345904A1/en?inventor=Pratyush+Paliwal",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Self Sustaining CI/CD pipelines handling job failures powered by NLP Model trained on a large error-resolution dataset and automation Scripts. Patent Number: US-20240345904-A1.",
    // imageUrl:
      // "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    award: "Patent Published",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "Review Paper",
    title: "Virtualization and Containerized Development Workspaces",
    authors: "",
    paperUrl: "/Virtualization.pdf",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
