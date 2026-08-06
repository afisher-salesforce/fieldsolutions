const capabilityIndex = [
  ["FWO", "Work Order Management", "Defines the lifecycle for service work from intake through completion.", "Capabilities", "1. The Half-Day Tax", "vignette-1.html"],
  ["FMO", "Field Worker Mobility", "Provides mobile-first technician experiences with in-context operational data.", "Capabilities", "1. The Half-Day Tax", "vignette-1.html"],
  ["FIR", "Field Inventory & Replenishment Management", "Tracks part availability, consumption, and replenishment in near real time.", "Capabilities", "1. The Half-Day Tax", "vignette-1.html"],
  ["FSM", "Operational Schedule Management", "Optimizes dispatch and assignment against skill, location, and priority.", "Capabilities", "1. The Half-Day Tax", "vignette-1.html"],
  ["FDR", "RMA / Depot Repair", "Standardizes vendor lifecycle from removal through return and closure.", "Capabilities", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["FPM", "Install Base & Preventative Maintenance", "Maintains installed-base history and continuity of maintenance actions.", "Capabilities", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["VWA", "Warranty Management", "Tracks warranty evidence and claim adjudication to reduce dispute risk.", "Capabilities", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["IMP", "Asset Lifecycle Management", "Captures full component genealogy and lifecycle movement across the fleet.", "Capabilities", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["VCM", "Case Management", "Governed service request lifecycle with ownership and resolution traceability.", "Capabilities", "3. The Case in Conflict", "vignette-3.html"],
  ["VTM", "Case Teaming", "Supports cross-functional collaboration while preserving role-based accountability.", "Capabilities", "3. The Case in Conflict", "vignette-3.html"],
  ["VQL", "Service Quality & Supervision Analytics", "Measures operational quality and team performance across service delivery.", "Capabilities", "3. The Case in Conflict", "vignette-3.html"],
  ["VSS", "Self Service", "Provides customer-facing visibility and request channels through portal patterns.", "Capabilities", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["VEN", "Service Contract Management & Entitlement", "Aligns service execution to warranty and SLA commitments.", "Capabilities", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["VCH", "Omni-Channel Contact Center", "Orchestrates customer interactions consistently across communication channels.", "Capabilities", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["FAP", "Field Service Analysis & Planning", "Supports performance reporting and planning across sites and teams.", "Capabilities", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["ABI", "Embedded BI & Dashboards", "Surfaces KPI-driven insight directly in operational workflows and leadership views.", "Capabilities", "5. The Connected Field", "vignette-5.html"],
  ["DAG", "Agentic AI / Autonomous Agents", "Enables AI-driven support flows for summaries and guided recommendations.", "Capabilities", "5. The Connected Field", "vignette-5.html"],
  ["PGV", "Data Governance & Privacy", "Applies data privacy and access controls for secure enterprise-scale operations.", "Capabilities", "5. The Connected Field", "vignette-5.html"]
];
const defaultCustomerName = "Customer Name";
const sidebarLogoPath = "assets/salesforce-logo.png";
const pageFlow = [
  ["index.html", "Executive Summary"],
  ["journey.html", "Journey"],
  ["vignette-1.html", "1. The Half-Day Tax"],
  ["vignette-2.html", "2. The Asset That Nobody Owns"],
  ["vignette-3.html", "3. The Case in Conflict"],
  ["vignette-4.html", "4. The Customer Who Doesn't Know"],
  ["vignette-5.html", "5. The Connected Field"],
  ["capability-map.html", "Capability Map & Sequencing"],
  ["salesforce-domains.html", "Salesforce Capability Domains"],
  ["external-research.html", "External Research"],
  ["forward-looking.html", "Forward Looking Statement"]
];

function initSite(activePath) {
  const layout = document.querySelector(".layout");
  const toggle = document.getElementById("toggleNav");
  const sidebar = document.querySelector(".sidebar");
  if (!layout || !toggle || !sidebar) return;

  // Keep nav toggle outside the collapsible rail so it remains usable in all states.
  if (toggle.parentElement !== document.body) {
    document.body.appendChild(toggle);
  }
  const existingHeader = sidebar.querySelector("h1");
  const customerName =
    document.body.getAttribute("data-customer-name") ||
    (existingHeader ? existingHeader.textContent.trim() : "") ||
    defaultCustomerName;

  // Enforce customer-specific title in the upper-left of navigation.
  let customerNameNode = sidebar.querySelector(".customer-name") || existingHeader;
  if (!customerNameNode) {
    customerNameNode = document.createElement("h1");
    customerNameNode.className = "customer-name";
    sidebar.insertBefore(customerNameNode, sidebar.firstChild);
  }
  customerNameNode.classList.add("customer-name");
  customerNameNode.textContent = customerName;

  // Enforce persistent Salesforce logo footer under final nav item.
  let logoWrap = sidebar.querySelector(".sidebar-logo-wrap");
  if (!logoWrap) {
    logoWrap = document.createElement("div");
    logoWrap.className = "sidebar-logo-wrap";
    logoWrap.innerHTML = `<img class="sidebar-logo" src="${sidebarLogoPath}" alt="Salesforce logo" />`;
    sidebar.appendChild(logoWrap);
  }

  const setToggleState = (collapsed) => {
    layout.classList.toggle("nav-collapsed", collapsed);
    toggle.textContent = collapsed ? "Show Navigation" : "Hide Navigation";
  };

  const collapsed = localStorage.getItem("ccv-nav-collapsed") === "true";
  setToggleState(collapsed);

  toggle.addEventListener("click", () => {
    const isCollapsed = !layout.classList.contains("nav-collapsed");
    setToggleState(isCollapsed);
    localStorage.setItem("ccv-nav-collapsed", isCollapsed ? "true" : "false");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === activePath) {
      link.classList.add("active");
    }
  });

  const searchInput = document.getElementById("capabilitySearch");
  const resultsNode = document.getElementById("searchResults");
  if (searchInput && !searchInput.getAttribute("data-placeholder-set")) {
    searchInput.placeholder = "Try FWO, Asset Lifecycle Management, Dashboard...";
    searchInput.setAttribute("data-placeholder-set", "true");
  }
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      resultsNode.innerHTML = "";
      return;
    }
    const matches = capabilityIndex
      .filter(([code, name, description, location, pageTitle]) =>
        code.toLowerCase().includes(q) ||
        name.toLowerCase().includes(q) ||
        description.toLowerCase().includes(q) ||
        location.toLowerCase().includes(q) ||
        pageTitle.toLowerCase().includes(q)
      )
      .slice(0, 12);
    if (!matches.length) {
      resultsNode.innerHTML = '<div class="result-link">No matches found.</div>';
      return;
    }
    resultsNode.innerHTML = matches
      .map(([code, name, description, location, pageTitle, pageHref]) => `<a class="result-link" href="${pageHref}">${code}: ${name} (${pageTitle} · ${location})<br /><small>${description}</small></a>`)
      .join("");
  });

  const currentIndex = pageFlow.findIndex(([href]) => href === activePath);
  if (currentIndex !== -1) {
    const prev = pageFlow[currentIndex - 1] || null;
    const next = pageFlow[currentIndex + 1] || null;
    const content = document.querySelector(".content");
    const nav = document.createElement("nav");
    nav.className = "page-flow";
    nav.setAttribute("aria-label", "Page progression");
    nav.innerHTML = `
      ${prev ? `<a class="page-flow-link prev" href="${prev[0]}"><span>Previous</span><b>${prev[1]}</b></a>` : "<div></div>"}
      ${next ? `<a class="page-flow-link next" href="${next[0]}"><span>Next</span><b>${next[1]}</b></a>` : "<div></div>"}
    `;
    content.appendChild(nav);
  }
}
