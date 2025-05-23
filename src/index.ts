import { Certificates } from "./components/Certificates";
import { CurriculumVitae } from "./components/CurriculumVitae";
import { Education } from "./components/Education";
import { Employer } from "./components/Employer";
import { Employment } from "./components/Employment";
import { Footer } from "./components/Footer";
import { Keywords } from "./components/Keywords";
import { Profile } from "./components/Profile";
import { Section } from "./components/Section";
import { SectionContent } from "./components/SectionContent";
import { SectionHeading } from "./components/SectionHeading";
import { SectionItem } from "./components/SectionItem";

export type ProfileData = {
  profile: {
    name: string;
    description: string | null;
    dob: string;
    home: string;
    links: {
      name: string;
      url: string;
      logo: string;
    }[];
    languages: {
      name: string;
      description: string;
    }[];
    keywords: string[];
  };
  education: {
    name: string;
    degree: string;
    start: string;
    end: string;
  };
  certificates: {
    name: string;
    validityPeriod: string | null;
  }[];
  employment: {
    status: string;
    history: {
      employer: string;
      tasks: string[];
      start: string;
      end: string | null;
      projects:
        | {
            name: string;
            customer: string;
            start: string;
            end: string | null;
            tasks: string[];
            keywords: string[];
            description: string;
            urls?: string[];
          }[]
        | null;
      jobAssignments:
        | {
            name: string;
            description: string;
          }[]
        | null;
    }[];
  };
};

// TODO how to prevent treeshaking dropping components
[
  CurriculumVitae,
  Profile,
  Education,
  Certificates,
  Section,
  SectionItem,
  SectionHeading,
  SectionContent,
  Employment,
  Employer,
  Keywords,
  Footer,
].map((c) => c);
