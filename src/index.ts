import { CurriculumVitae } from "./components/CurriculumVitae";
import { Education } from "./components/Education.js";
import { Profile } from "./components/Profile.js";
import { Section } from "./components/Section.js";
import { SectionContent } from "./components/SectionContent.js";
import { SectionHeading } from "./components/SectionHeading.js";
import { SectionItem } from "./components/SectionItem.js";

export type ProfileData = {
  profile: {
    name: string;
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
};

// TODO how to prevent treeshaking dropping components
[
  CurriculumVitae,
  Profile,
  Education,
  Section,
  SectionItem,
  SectionHeading,
  SectionContent,
].map((c) => c);
