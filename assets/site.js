const capabilityIndex = [
  ["FWO", "Work Order Management", "1. The Half-Day Tax", "vignette-1.html"],
  ["FMO", "Field Worker Mobility", "1. The Half-Day Tax", "vignette-1.html"],
  ["FIR", "Field Inventory & Replenishment Management", "1. The Half-Day Tax", "vignette-1.html"],
  ["FSM", "Operational Schedule Management", "1. The Half-Day Tax", "vignette-1.html"],
  ["FDR", "RMA / Depot Repair", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["FPM", "Install Base & Preventative Maintenance", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["VWA", "Warranty Management", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["IMP", "Asset Lifecycle Management", "2. The Asset That Nobody Owns", "vignette-2.html"],
  ["VCM", "Case Management", "3. The Case in Conflict", "vignette-3.html"],
  ["VTM", "Case Teaming", "3. The Case in Conflict", "vignette-3.html"],
  ["VQL", "Service Quality & Supervision Analytics", "3. The Case in Conflict", "vignette-3.html"],
  ["VSS", "Self Service", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["VEN", "Service Contract Management & Entitlement", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["VCH", "Omni-Channel Contact Center", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["FAP", "Field Service Analysis & Planning", "4. The Customer Who Doesn't Know", "vignette-4.html"],
  ["ABI", "Embedded BI & Dashboards", "5. The Connected Field", "vignette-5.html"],
  ["DAG", "Agentic AI / Autonomous Agents", "5. The Connected Field", "vignette-5.html"],
  ["PGV", "Data Governance & Privacy", "5. The Connected Field", "vignette-5.html"]
];

function initSite(activePath) {
  const layout = document.querySelector(".layout");
  const toggle = document.getElementById("toggleNav");
  const collapsed = localStorage.getItem("ccv-nav-collapsed") === "true";
  if (collapsed) {
    layout.classList.add("nav-collapsed");
    toggle.textContent = "Show Navigation";
  }

  toggle.addEventListener("click", () => {
    layout.classList.toggle("nav-collapsed");
    const isCollapsed = layout.classList.contains("nav-collapsed");
    localStorage.setItem("ccv-nav-collapsed", isCollapsed ? "true" : "false");
    toggle.textContent = isCollapsed ? "Show Navigation" : "Hide Navigation";
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === activePath) {
      link.classList.add("active");
    }
  });

  const searchInput = document.getElementById("capabilitySearch");
  const resultsNode = document.getElementById("searchResults");
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      resultsNode.innerHTML = "";
      return;
    }
    const matches = capabilityIndex
      .filter(([code, name, pageTitle]) =>
        code.toLowerCase().includes(q) ||
        name.toLowerCase().includes(q) ||
        pageTitle.toLowerCase().includes(q)
      )
      .slice(0, 12);
    if (!matches.length) {
      resultsNode.innerHTML = '<div class="result-link">No matches found.</div>';
      return;
    }
    resultsNode.innerHTML = matches
      .map(([code, name, pageTitle, pageHref]) => `<a class="result-link" href="${pageHref}">${code}: ${name} (${pageTitle})</a>`)
      .join("");
  });
}
