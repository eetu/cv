import { z } from "zod";

const linkSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  logo: z.string(),
});

const languageSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const profileSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  dob: z.string(),
  home: z.string(),
  links: z.array(linkSchema),
  languages: z.array(languageSchema),
  keywords: z.array(z.string()),
});

const educationSchema = z.object({
  name: z.string(),
  degree: z.string(),
  start: z.string(),
  end: z.string(),
});

const certificateSchema = z.object({
  name: z.string(),
  validityPeriod: z.string().nullable().optional(),
});

const projectSchema = z.object({
  name: z.string(),
  customer: z.string(),
  start: z.string(),
  end: z.string().nullable().optional(),
  tasks: z.array(z.string()),
  keywords: z.array(z.string()),
  description: z.string(),
  urls: z.array(z.string().url()).optional(),
});

const jobAssignmentSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const employmentHistorySchema = z.object({
  employer: z.string(),
  tasks: z.array(z.string()),
  start: z.string(),
  end: z.string().nullable().optional(),
  description: z.string().optional(),
  projects: z.array(projectSchema).optional(),
  jobAssignments: z.array(jobAssignmentSchema).optional(),
});

const employmentSchema = z.object({
  status: z.string(),
  history: z.array(employmentHistorySchema),
});

export const profileDataSchema = z.object({
  profile: profileSchema,
  education: educationSchema,
  certificates: z.array(certificateSchema).optional(),
  employment: employmentSchema,
});

export type ProfileData = z.infer<typeof profileDataSchema>;
