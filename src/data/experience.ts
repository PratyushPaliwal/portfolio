export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "June 2025 - Present",
    title: "Research Assistant",
    company: "Fraunhofer SIT",
    description:
      `<ul class="list-disc pl-5 space-y-2 mt-2">
        <li>LExperimenting with Deep learning frameworks for NLP to detect unsolicited chat behavior and Authorship
Attribution in online spaces, while building interactive front-end demonstrations supporting interactive UI/UX.</li>
      </ul>`,
    companyUrl: "https://www.sit.fraunhofer.de/de/",
  },
  {
    date: "Feb. 2023 - Sept. 2024",
    title: "Software Engineer - 2",
    company: "Dell",
    description:
      `<ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Led critical Container Images release cycles for vulnerability remediation and major tech stacks changes.</li>
        <li>Worked on a python wrapper, developed as a solution to integrate SNYK testing into relevant SDLC stages for CI/CD architecture of application teams across dell digital.</li>
        <li>Worked on developing a one stop solution in form of a python wrapper for integrating automated browser testing via test tools i.e. moon, seleniumBox for different languages and supported frameworks into CICD pipelines.</li>
        <li>Led and managed Front-end development using React-Redux for a web application which allows users to build Docker Images via a low-code/no-code process through a user-friendly interface.</li>
      </ul>`,
    companyUrl: "https://dell.com",
  },
  {
    date: "Aug. 2021 - Jan. 2023",
    title: "Software Engineer - 1",
    company: "Dell",
    description:
      `<ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Built and maintained safe and secure Docker Images which are critical components in CI/CD pipelines, utilized by teams globally across Dell.</li>
        <li>Worked on major cross collaboration projects to develop solutions, including scripting automations and python wrappers, to enable teams across Dell digital for a smooth transition to new tools integrated in SDLC.</li>
        <li>Acted as a project member of DevSecOps team, worked with external security solutions vendors to evaluate options by detailed testing to finalize a suitable application security tool for Dell Digital.</li>
        <li>Worked with multiple application teams to onboard them to DevOps practices and to navigate through errors and failures in deployment pipelines.</li>
        <li>Developed automation solutions – (i) using shell script for architecture of building, scanning, and releasing DevOps Images, (ii) using groovy and JS for customizing JIRA to onboard application teams.</li>
      </ul>`,
    companyUrl: "https://dell.com",
  },
  {
    date: "Feb. 2021 - May 2021",
    title: "Undergraduate Intern",
    company: "Dell",
    description:
      `<ul class="list-disc pl-5 space-y-2 mt-2">
        <li>worked on RPM packaging of software for automation tools.</li>
      </ul>`,
    companyUrl: "https://dell.com",
  },
  {
    date: "May. 2019 - June 2019",
    title: "Student Trainee",
    company: "ACM",
    description:
      `<ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Algorithmic and Theoretical Aspects of Machine Learning, at IIIT Bangalore, Co-sponsored by Microsoft and Mphasis. </li>
      </ul>`,
    // companyUrl: "https://dell.com",
  },

];
