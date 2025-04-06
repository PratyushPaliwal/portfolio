export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date:"2018-2020",
    title: "Governing Body Merit Undergraduate Scholarship by IIIT Bhubaneswar",
    description: "Awarded to top 3 academic achievers of batch.",
  },
  {
    date: "Oct. 2023",
    title: "Game Changer Award - Dell",
    description: "led a release that resulted in a substantial reduction in the overall Vulnerabilities count in Container Images.",
    link: "https://www.linkedin.com/posts/paliwalpratyush_gamechanger-iwork4dell-delltechnologies-activity-7133454293524766720-Os80?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfJXD0B9bpVgoOAHjLJ0fxQXxa-Y8xOXRI",
  },
  {
    date: "Feb. 2023",
    title: "DevOps Certification Training",
    description: "Simplilearn, credential ID 4140669.",
    link: "https://certificates.simplicdn.net/share/thumb_4140669.png",
  },
  {
    date: "Nov. 2019",
    title: "Winner, Dell Hack2Hire Hackathon",
    description: "Worked on building a product recommendation system.",
    // link: "https://certificates.simplicdn.net/share/thumb_4140669.png",
  },
  {
    date: "Aug 2020",
    title: "Finalist, Nav Ujjwal National Hackathon",
    description: "Worked on E-Parchi, A Mobile App for paper less Medical Services.",
    // link: "https://certificates.simplicdn.net/share/thumb_4140669.png",
  },

  
];
