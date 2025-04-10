export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Pratyush Paliwal",
  title: "Software Engineer / Perpetual Learner",
  institution: "Technische Universität Darmstadt",
  // Note that links work in the description
  description:
    `<p>Hello world!</p>
    <p>I am a software engineer with a strong passion for building industry-grade software and delivering products using modern DevOps practices. I have hands-on experience working as a full stack developer and building web applications using contemporary frameworks that are both scalable and maintainable.</p>
    </br>
    <p>I have expertise in containerization and orchestration—designing secure and efficient container images using Docker/Podman(etc.) and deploying them at scale with Kubernetes. </p>
    <p>With a comprehensive understanding of DevOps tools and practices across various stages of the SDLC, I have guided several application teams through CI/CD onboarding, streamlining their software deployment processes.</p> 
    <p>I also have a keen interest in automation and have built several internal tools using Python and Shell scripting to optimize team workflows.</p>
    </br>
    <p>Alongside software engineering, I am gaining both theoretical understanding and practical experience in AI/ML and Data Science through my current M.Sc. in Computer Science at <a href="https://www.tu-darmstadt.de/index.en.jsp" target="_blank" rel="noopener noreferrer">Technische Universität Darmstadt</a>, where I am specializing in Data Science Engineering. As part of this journey, I've gained hands-on experience in Natural Language Processing through university coursework and industry-facing projects.</p>
    </br>
    <p>My aim is to keep learning, keep exploring, and most importantly, to transition true knowledge into applied knowledge by solving problems at hand.</p>`,
  email: "pratyush.paliwal@stud.tu-darmsatdt.de",
  // imageUrl:
    // "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  // githubUsername: "janesmith", // You might want to update this to your actual GitHub username
  imageUrl: "/linkedinphoto.png",
  linkedinUsername: "paliwalpratyush",
  twitterUsername: "pratyushpa1iwal",
  // blogUrl: "https://", // Update or remove if you don't have a blog
  // cvUrl: "https://", // Update with your CV URL
  cvUrl: "/Pratyush_resume.pdf", // The path is relative to the public directory", // Update with your CV URL

  institutionUrl: "https://www.tu-darmstadt.de/index.en.jsp", // Updated to TU Darmstadt URL
  // altName: "",
  // secretDescription: "I like dogs.",
};