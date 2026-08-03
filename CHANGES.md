# Cumulative Site Changes — Siemens Mobility | Connected Field Vision

This document captures all design and content changes made to `index.html` during this session. Use it as a reference when applying the same updates to other sites.

---

## 1. Remove metadata pills from hero section

**What:** Deleted the `.meta` div containing informational pill badges (e.g. "Primary Brand Color", "Format", "Audience") from the hero section.

**Where:** Inside `.hero-copy`, above the tab navigation.

**Before:**
```html
<div class="meta">
  <span class="pill">Primary Brand Color: #009999</span>
  <span class="pill">Format: Single-file, no-build HTML</span>
  <span class="pill">Audience: Siemens Mobility + Salesforce Team</span>
</div>
```

**After:** Remove the block entirely.

---

## 2. Remove repeated panel hero images

**What:** Deleted all `<img class="panel-media" ...>` tags from inside content panels. The single hero image at the top of the page is sufficient.

**Where:** Each `<section class="panel">` previously had an image immediately after the `.panel-header`. Remove every instance.

**Before (example):**
```html
<img class="panel-media" src="assets/siemens-mobility-header.jpg" alt="Siemens Mobility rail visual" />
```

**After:** Remove all occurrences. Also remove the `.panel-media` CSS rule if no longer used.

---

## 3. Remove CTA buttons from Capability Map tab

**What:** Deleted the `.cta-row` div containing "Open Public Repository" and "Siemens Brand Reference" anchor buttons from the Capability Map panel.

**Where:** Inside `<section class="panel" data-panel="capabilities">`, in the "Executive Next Step" section.

**Before:**
```html
<div class="cta-row">
  <a class="btn btn-primary" href="..." target="_blank" rel="noreferrer">Open Public Repository</a>
  <a class="btn btn-secondary" href="..." target="_blank" rel="noreferrer">Siemens Brand Reference</a>
</div>
```

**After:** Remove the block entirely.

---

## 4. Move tab navigation to a sticky top bar

**What:** Moved the `<nav class="tabs">` out of `.hero-copy` and into a new full-width sticky nav bar above the hero image and main container. Tabs now persist at the top of the viewport while scrolling.

**New CSS:**
```css
.sitenav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #040c0d;
  border-bottom: 1px solid #0f3034;
  padding: 0.55rem 0;
}

.sitenav-inner {
  width: min(1180px, 94vw);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}
```

**New HTML structure (placed before `<main>`):**
```html
<nav class="sitenav" role="tablist" aria-label="Vision tabs">
  <div class="sitenav-inner">
    <button class="tab-btn active" role="tab" aria-selected="true" data-tab="overview">Connected Vision</button>
    <button class="tab-btn" role="tab" aria-selected="false" data-tab="v1">Vignette 1</button>
    <!-- ... remaining tabs ... -->
  </div>
</nav>
```

**Remove** the `<nav class="tabs">` block that was previously inside `.hero-copy`.

---

## 5. Reformat capability codes in vignette cards

**What:** Changed capability card labels from `Name (CODE)` format to `CODE: Name` format across all vignette panels.

**Pattern:**
- Before: `<b>Field Service Work Orders (FWO)</b>`
- After: `<b>FWO: Field Service Work Orders</b>`

**Full list of changes:**

| Before | After |
|--------|-------|
| `Field Service Work Orders (FWO)` | `FWO: Field Service Work Orders` |
| `Field Worker Mobility (FMO)` | `FMO: Field Worker Mobility` |
| `Field Inventory & Replenishment (FIR)` | `FIR: Field Inventory & Replenishment` |
| `Operational Schedule Management (FSM)` | `FSM: Operational Schedule Management` |
| `Asset Lifecycle Management (IMP)` | `IMP: Asset Lifecycle Management` |
| `RMA / Depot Repair (FDR)` | `FDR: RMA / Depot Repair` |
| `Install Base & Preventative Maintenance (FPM)` | `FPM: Install Base & Preventative Maintenance` |
| `Warranty Management (VWA)` | `VWA: Warranty Management` |
| `Incident Management (VCM + Process Design)` | `VCM: Incident Management` |
| `Case Teaming (VTM)` | `VTM: Case Teaming` |
| `Service Quality Analytics (VQL)` | `VQL: Service Quality Analytics` |
| `Experience Cloud / Self-Service (VSS)` | `VSS: Experience Cloud / Self-Service` |
| `Service Contract & Entitlements (VEN)` | `VEN: Service Contract & Entitlements` |
| `Omni-Channel + Notification Flows (VCH)` | `VCH: Omni-Channel + Notification Flows` |
| `Operational Dashboards (FAP + ABI)` | `FAP / ABI: Operational Dashboards` |
| `Analytics & Reporting (ABI / FAP)` | `ABI / FAP: Analytics & Reporting` |
| `Agentforce (DAG, optional next phase)` | `DAG: Agentforce (optional next phase)` |

---

## 6. Add Salesforce platform capabilities tab

**What:** Added a new "Salesforce" tab with the full Salesforce platform capability list, grouped by functional domain. Each capability shows its three-letter code from the Salesforce Business Capabilities Map. Capabilities referenced in the vignettes are highlighted in mint-teal (`#48F0C8`).

**New tab button (add to sitenav):**
```html
<button class="tab-btn" role="tab" aria-selected="false" data-tab="salesforce">Salesforce</button>
```

**New CSS for capability cards:**
```css
.cap-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 0.75rem;
}

.cap-group {
  background: #0c252a;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.85rem 1rem 0.9rem;
}

.cap-group-title {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand);
  margin: 0 0 0.6rem;
  font-weight: 700;
}

.cap-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.cap-item {
  background: #0e2b30;
  border: 1px solid #1a454d;
  border-radius: 6px;
  padding: 0.22rem 0.55rem;
  font-size: 0.81rem;
  color: #cce8ea;
  line-height: 1.4;
}

/* Vignette-referenced capabilities */
.cap-item--featured {
  background: rgba(72, 240, 200, 0.07);
  border-color: #48F0C8;
  color: #7AF5DC;
  font-weight: 600;
}
```

**Capability domains and codes** (from Salesforce Business Capabilities Map v1.3 + Expert Additions):

| Domain | Code | Capability Name | Vignette? |
|--------|------|-----------------|-----------|
| Analytics & Reporting | ABI | Embedded BI & Dashboards | ✓ |
| Analytics & Reporting | AEX | Einstein Conversation Insights (ECI) | |
| Analytics & Reporting | APC | Tableau Pulse / Proactive Insights | |
| Analytics & Reporting | ARI | Revenue Intelligence | |
| Billing | BCC | Credit & Collections | |
| Billing | BIM | Invoice Management | |
| Billing | BLL | Billing Management | |
| Billing | BRR | Revenue Recognition | |
| Collaboration | CAF | Agentforce in Slack | |
| Collaboration | CSC | Slack Connect / External Collaboration | |
| Collaboration | CTC | Asynchronous Team Collaboration | |
| CPQ | CCM | Product Catalog Management | |
| CPQ | CPL | Proposal Management | |
| CPQ | CPM | Pricing Management | |
| CPQ | CQM | Quote Management | |
| CPQ | CSC | Guided Solution Configuration | |
| CPQ | CSM | Subscription Management | |
| Data & AI | DAG | Agentic AI / Autonomous Agents | ✓ |
| Data & AI | DDH | Data Harmonization | |
| Data & AI | DEL | Einstein Trust Layer | |
| Data & AI | DFC | Flex Credit & AI Consumption Management | |
| Data & AI | DGA | Generative AI Orchestration | |
| Data & AI | DIR | Identity Resolution | |
| Data & AI | DPA | Predictive AI / Einstein Scoring | |
| Data & AI | DUP | Unified Customer Profile | |
| Data & AI | DVS | Vector Search & RAG Grounding | |
| Field Service | FAP | Field Service Analysis & Planning | ✓ |
| Field Service | FDR | RMA / Depot Repair | ✓ |
| Field Service | FIR | Field Inventory & Replenishment Management | ✓ |
| Field Service | FMO | Field Worker Mobility | ✓ |
| Field Service | FPM | Install Base & Preventative Maintenance | ✓ |
| Field Service | FRM | Resource Management | |
| Field Service | FSM | Operational Schedule Management | ✓ |
| Field Service | FWO | Work Order Management | ✓ |
| Industry Solutions | ICR | Industry Rules Engine | |
| Industry Solutions | IDI | Digital Engagement & Self-Service (Industry) | |
| Industry Solutions | IMP | Manufacturing & Asset Lifecycle Management | ✓ |
| Integration | IAF | Agent-to-Agent (A2A) Orchestration | |
| Integration | IAM | API Management | |
| Integration | IEI | Enterprise Integration | |
| Integration | IEP | Enterprise Platform Connectors | |
| Integration | IMS | Microsoft Ecosystem Integration | |
| Marketing | MAS | Audience Segmentation & Activation | |
| Marketing | MCN | Content Management | |
| Marketing | MDI | Direct Marketing (owned) | |
| Marketing | MJM | Journey Management | |
| Marketing | MLG | Lead Generation | |
| Marketing | MMA | Marketing Analytics | |
| Marketing | MPA | Paid Marketing (ads) | |
| Marketing | MPV | Preference & Privacy Management | |
| Marketing | MSP | Marketing Strategy & Planning | |
| Order Management | OAS | Assisted Sales & Service | |
| Order Management | OCP | Order Capture | |
| Order Management | OCS | Commerce Self Service | |
| Order Management | OIM | Inventory Management | |
| Order Management | OPM | Promotion Management | |
| Order Management | ORE | Recommendations & Experience | |
| Order Management | ORM | Order Management | |
| Order Management | OSM | Search / Merchandising | |
| Order Management | OSP | Shipping & Payment Methods | |
| Partner Management | PDG | Partner Development & Growth | |
| Partner Management | PJM | Joint Partner Marketing | |
| Partner Management | POM | Partner Order Management | |
| Partner Management | PRO | Partner Recruitment & Onboarding | |
| Partner Management | PSM | Partner Sales Management | |
| Partner Management | PVM | Partner Service Management | |
| Platform & Governance | PGV | Data Governance & Privacy | |
| Platform & Governance | PMD | Multi-Org / Subsidiary Architecture | |
| Platform & Governance | PNZ | Net Zero / Sustainability Management | |
| Sales | SAM | Account Management | |
| Sales | SCL | Contract Lifecycle Management | |
| Sales | SCM | Contact Management | |
| Sales | SCP | Compensation Management | |
| Sales | SCU | Cross / Up-Sell Management | |
| Sales | SDS | Deal Support Requests | |
| Sales | SEM | Sales Enablement | |
| Sales | SGS | Guided Solution Selling | |
| Sales | SIS | Inside Sales Management | |
| Sales | SLM | Lead Management | |
| Sales | SOP | Opportunity Management | |
| Sales | SPR | Product Management (Basic) | |
| Sales | SSA | Sales Analytics | |
| Sales | SSP | Sales Performance Management | |
| Sales | STM | Territory Management | |
| Service | VAI | Predictive Service | |
| Service | VAX | Unified Agent Experience | |
| Service | VCH | Omni-Channel Contact Center | ✓ |
| Service | VCM | Case Management | ✓ |
| Service | VEN | Service Contract Management & Entitlement | ✓ |
| Service | VKB | Knowledge Management | |
| Service | VLN | Training & Onboarding | |
| Service | VPR | Remote Monitoring & Proactive Service | |
| Service | VQL | Service Quality & Supervision Analytics | ✓ |
| Service | VSS | Self Service | ✓ |
| Service | VSV | Feedback / Surveys / VOC | |
| Service | VTM | Case Teaming | ✓ |
| Service | VWA | Warranty Management | ✓ |

---

## 7. Hide hero and show title bar on non-overview tabs

**What:** The hero image and main title only display on the Connected Vision (overview) tab. All other tabs show a slim dark title bar with the site name instead, so the hero is not repeated on every tab.

**Implementation:** Add `id="site-hero"` to the hero element and `id="page-title-bar"` to the title bar. Toggle both in the tab-switching script.

**New HTML (placed between sitenav and main container):**
```html
<div class="page-title-bar" id="page-title-bar" hidden>
  <div class="page-title-bar-inner">Siemens Mobility | Connected Field Vision</div>
</div>
```

**New CSS:**
```css
.page-title-bar {
  background: #07181a;
  border-bottom: 1px solid var(--line);
  padding: 0.6rem 0;
}

.page-title-bar-inner {
  width: min(1180px, 94vw);
  margin: 0 auto;
  font-size: clamp(1.5rem, 2.8vw, 1.75rem);
  font-weight: 700;
  color: #cde9e9;
  letter-spacing: 0.01em;
}
```

**Updated JS `activate()` function:**
```javascript
const hero = document.getElementById("site-hero");
const titleBar = document.getElementById("page-title-bar");

function activate(tab) {
  buttons.forEach((button) => {
    const isActive = button.dataset.tab === tab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tab;
  });

  const isOverview = tab === "overview";
  hero.hidden = !isOverview;
  titleBar.hidden = isOverview;
}
```

---

## 8. Configure static deployment

**What:** Added deployment configuration to `.replit` so Replit knows this is a static site (no server-side logic). Required for publishing to work.

**Added to `.replit`:**
```toml
[deployment]
deploymentTarget = "static"
publicDir = "."
```

---

## Summary of color values used

| Purpose | Value |
|---------|-------|
| Background | `#07181a` |
| Panel background | `#112e33` |
| Border / line | `#1b4950` |
| Body text | `#e8f4f4` |
| Muted text | `#a7c0c3` |
| Brand teal | `#009999` |
| Nav bar background | `#040c0d` |
| Title bar background | `#07181a` |
| Vignette highlight (mint-teal) | `#48F0C8` / `#7AF5DC` |
