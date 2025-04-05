export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Oct. 2024—Present",
    institution: "Technische Universität Darmstadt",
    degree: "M.Sc. in Computer Science",
    // advisor: "Prof. Sarah Johnson",
  },
  {
    year: "2017—2021",
    institution: "IIIT Bhubaneswar",
    degree: "B.Tech. in Information Technology",
    thesis: "Containerized Dev Workspaces",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
