export interface NavItem {
  path: string;
  label: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { path: "/", label: "Executive Summary" },
      { path: "/journey", label: "Journey" },
    ],
  },
  {
    label: "Vignettes",
    items: [
      { path: "/vignette-1", label: "1. The Half-Day Tax" },
      { path: "/vignette-2", label: "2. The Asset That Nobody Owns" },
      { path: "/vignette-3", label: "3. The Case in Conflict" },
      { path: "/vignette-4", label: "4. The Customer Who Doesn't Know" },
      { path: "/vignette-5", label: "5. The Connected Field" },
    ],
  },
  {
    label: "Architecture",
    items: [
      { path: "/capability-map", label: "Capability Map & Sequencing" },
      { path: "/salesforce-domains", label: "Salesforce Capability Domains" },
    ],
  },
  {
    label: "Appendix",
    items: [
      { path: "/enablement", label: "Enablement Pathways" },
      { path: "/external-research", label: "External Research" },
      { path: "/forward-looking", label: "Forward Looking Statement" },
    ],
  },
];

export const pageFlow: NavItem[] = [
  { path: "/", label: "Executive Summary" },
  { path: "/journey", label: "Journey" },
  { path: "/vignette-1", label: "1. The Half-Day Tax" },
  { path: "/vignette-2", label: "2. The Asset That Nobody Owns" },
  { path: "/vignette-3", label: "3. The Case in Conflict" },
  { path: "/vignette-4", label: "4. The Customer Who Doesn't Know" },
  { path: "/vignette-5", label: "5. The Connected Field" },
  { path: "/capability-map", label: "Capability Map & Sequencing" },
  { path: "/salesforce-domains", label: "Salesforce Capability Domains" },
  { path: "/enablement", label: "Enablement Pathways" },
  { path: "/external-research", label: "External Research" },
  { path: "/forward-looking", label: "Forward Looking Statement" },
];
