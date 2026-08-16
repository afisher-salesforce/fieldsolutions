export interface Capability {
  code: string;
  name: string;
  description: string;
  location: string;
  pageTitle: string;
  pageHref: string;
}

export const capabilityIndex: Capability[] = [
  { code: "FWO", name: "Work Order Management", description: "Defines the lifecycle for service work from intake through completion.", location: "Capabilities", pageTitle: "1. The Half-Day Tax", pageHref: "/vignette-1" },
  { code: "FMO", name: "Field Worker Mobility", description: "Provides mobile-first technician experiences with in-context operational data.", location: "Capabilities", pageTitle: "1. The Half-Day Tax", pageHref: "/vignette-1" },
  { code: "FIR", name: "Field Inventory & Replenishment Management", description: "Tracks part availability, consumption, and replenishment in near real time.", location: "Capabilities", pageTitle: "1. The Half-Day Tax", pageHref: "/vignette-1" },
  { code: "FSM", name: "Operational Schedule Management", description: "Optimizes dispatch and assignment against skill, location, and priority.", location: "Capabilities", pageTitle: "1. The Half-Day Tax", pageHref: "/vignette-1" },
  { code: "FDR", name: "RMA / Depot Repair", description: "Standardizes vendor lifecycle from removal through return and closure.", location: "Capabilities", pageTitle: "2. The Asset That Nobody Owns", pageHref: "/vignette-2" },
  { code: "FPM", name: "Install Base & Preventative Maintenance", description: "Maintains installed-base history and continuity of maintenance actions.", location: "Capabilities", pageTitle: "2. The Asset That Nobody Owns", pageHref: "/vignette-2" },
  { code: "VWA", name: "Warranty Management", description: "Tracks warranty evidence and claim adjudication to reduce dispute risk.", location: "Capabilities", pageTitle: "2. The Asset That Nobody Owns", pageHref: "/vignette-2" },
  { code: "IMP", name: "Asset Lifecycle Management", description: "Captures full component genealogy and lifecycle movement across the fleet.", location: "Capabilities", pageTitle: "2. The Asset That Nobody Owns", pageHref: "/vignette-2" },
  { code: "VCM", name: "Case Management", description: "Governed service request lifecycle with ownership and resolution traceability.", location: "Capabilities", pageTitle: "3. The Case in Conflict", pageHref: "/vignette-3" },
  { code: "VTM", name: "Case Teaming", description: "Supports cross-functional collaboration while preserving role-based accountability.", location: "Capabilities", pageTitle: "3. The Case in Conflict", pageHref: "/vignette-3" },
  { code: "VQL", name: "Service Quality & Supervision Analytics", description: "Measures operational quality and team performance across service delivery.", location: "Capabilities", pageTitle: "3. The Case in Conflict", pageHref: "/vignette-3" },
  { code: "VSS", name: "Self Service", description: "Provides customer-facing visibility and request channels through portal patterns.", location: "Capabilities", pageTitle: "4. The Customer Who Doesn't Know", pageHref: "/vignette-4" },
  { code: "VEN", name: "Service Contract Management & Entitlement", description: "Aligns service execution to warranty and SLA commitments.", location: "Capabilities", pageTitle: "4. The Customer Who Doesn't Know", pageHref: "/vignette-4" },
  { code: "VCH", name: "Omni-Channel Contact Center", description: "Orchestrates customer interactions consistently across communication channels.", location: "Capabilities", pageTitle: "4. The Customer Who Doesn't Know", pageHref: "/vignette-4" },
  { code: "FAP", name: "Field Service Analysis & Planning", description: "Supports performance reporting and planning across sites and teams.", location: "Capabilities", pageTitle: "4. The Customer Who Doesn't Know", pageHref: "/vignette-4" },
  { code: "ABI", name: "Embedded BI & Dashboards", description: "Surfaces KPI-driven insight directly in operational workflows and leadership views.", location: "Capabilities", pageTitle: "5. The Connected Field", pageHref: "/vignette-5" },
  { code: "DAG", name: "Agentic AI / Autonomous Agents", description: "Enables AI-driven support flows for summaries and guided recommendations.", location: "Capabilities", pageTitle: "5. The Connected Field", pageHref: "/vignette-5" },
  { code: "PGV", name: "Data Governance & Privacy", description: "Applies data privacy and access controls for secure enterprise-scale operations.", location: "Capabilities", pageTitle: "5. The Connected Field", pageHref: "/vignette-5" },
];
