import { ResumeTemplate } from "@/types/template";

export const swissConfig: ResumeTemplate = {
  id: "swiss",
  name: "Swiss Aesthetic",
  description: "Artistic Bauhaus layout with strong typographic hierarchy and geometric accents, showing modern minimalism",
  thumbnail: "swiss",
  layout: "swiss",
  colorScheme: {
    primary: "#e30613",
    secondary: "#1a1a2e",
    background: "#ffffff",
    text: "#1a1a2e",
  },
  spacing: {
    sectionGap: 20,
    itemGap: 14,
    contentPadding: 36,
  },
  basic: {
    layout: "center",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};
