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

export type { ProfileData } from "./schema.js";

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
