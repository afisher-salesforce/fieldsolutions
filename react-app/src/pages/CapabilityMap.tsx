export default function CapabilityMap() {
  return (
    <section className="page">
      <header className="page-header">
        <h3>Capability Map and Sequencing</h3>
        <p>Executive sequencing model to convert Siemens Mobility's broad Salesforce entitlements into a phased implementation path with measurable operational outcomes.</p>
        <div className="tag-legend" aria-label="Capability priority legend">
          <span className="cap-tag now">Now</span>
          <span className="cap-tag next">Next</span>
          <span className="cap-tag adjacent">Adjacent Entitlement</span>
          <span className="tag-legend-note">Priority signal for rollout planning and licensing activation context.</span>
        </div>
      </header>

      <div className="phase-block">
        <h4 className="phase-title"><span className="phase-kicker">Phase 1</span> | Core Workflow Integrity and Technician Time Recovery</h4>
        <div className="phase-grid">
          <div className="phase-card"><span className="cap-tag now">Now</span><b>FWO: Work Order Management</b><span>Creates a governed field execution lifecycle from intake to close, replacing manual case status workarounds.</span></div>
          <div className="phase-card"><span className="cap-tag now">Now</span><b>FMO: Field Worker Mobility</b><span>Delivers mobile-first work execution with asset context in-hand, reducing pre- and post-repair administrative overhead.</span></div>
          <div className="phase-card"><span className="cap-tag now">Now</span><b>FIR: Field Inventory &amp; Replenishment Management</b><span>Automates parts consumption and replenishment signals so inventory data can be trusted operationally.</span></div>
          <div className="phase-card"><span className="cap-tag now">Now</span><b>FDR: RMA / Depot Repair</b><span>Introduces a formal vendor lifecycle to prevent untracked part delays and improve warranty recovery performance.</span></div>
          <div className="phase-card"><span className="cap-tag now">Now</span><b>VCM: Case Management</b><span>Stabilizes service ownership and escalation paths while field and logistics processes are separated cleanly.</span></div>
        </div>
      </div>

      <div className="phase-block">
        <h4 className="phase-title"><span className="phase-kicker">Phase 2</span> | Asset Intelligence and Customer Transparency</h4>
        <div className="phase-grid">
          <div className="phase-card"><span className="cap-tag next">Next</span><b>FPM: Install Base &amp; Preventative Maintenance</b><span>Establishes structured vehicle-to-component history and revision continuity across the fleet.</span></div>
          <div className="phase-card"><span className="cap-tag next">Next</span><b>VEN: Service Contract Management &amp; Entitlement</b><span>Aligns execution to warranty obligations and SLAs with auditable entitlement controls.</span></div>
          <div className="phase-card"><span className="cap-tag next">Next</span><b>VSS: Self Service</b><span>Provides customer-facing visibility into repair status and service interactions without manual email dependency.</span></div>
          <div className="phase-card"><span className="cap-tag next">Next</span><b>VCH: Omni-Channel Contact Center</b><span>Unifies customer communication channels into a consistent service model tied to operational records.</span></div>
          <div className="phase-card"><span className="cap-tag next">Next</span><b>FAP + ABI: Field Analytics and Embedded Dashboards</b><span>Delivers site-level and leadership KPIs for cycle time, utilization, and service quality management.</span></div>
        </div>
      </div>

      <div className="phase-block">
        <h4 className="phase-title"><span className="phase-kicker">Phase 3</span> | Scaled Governance and Intelligent Operations</h4>
        <div className="phase-grid">
          <div className="phase-card"><span className="cap-tag adjacent">Adjacent Entitlement</span><b>PGV: Data Governance &amp; Privacy</b><span>Implements policy-grade data controls as usage expands across sites, teams, and customer stakeholders.</span></div>
          <div className="phase-card"><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DPA: Predictive AI / Einstein Scoring</b><span>Introduces risk and outcome scoring for proactive intervention in service workflows.</span></div>
          <div className="phase-card"><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DAG: Agentic AI / Autonomous Agents</b><span>Adds AI-assisted summaries and recommendations once core process quality and trust signals are established.</span></div>
          <div className="phase-card"><span className="cap-tag adjacent">Adjacent Entitlement</span><b>PMD: Multi-Org / Subsidiary Architecture</b><span>Supports long-term scale patterns if Siemens Mobility extends solution governance across adjacent entities.</span></div>
        </div>
      </div>

      <div className="phase-block">
        <h4 className="phase-title"><span className="phase-kicker">Enablement</span> | Trailhead Learning by Delivery Phase</h4>
        <div className="resource-grid">
          <article className="resource-card">
            <h5>Phase 1 &middot; Field Service Execution Baseline</h5>
            <p>Build implementation readiness for work order, mobile, and dispatch operations before broader expansion.</p>
            <div className="resource-meta">Trail &middot; 591 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/field-service-get-on-the-road" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
          <article className="resource-card">
            <h5>Phase 2 &middot; Reporting and Dashboard Governance</h5>
            <p>Establish KPI design and operational analytics practices for utilization, SLA performance, and quality control.</p>
            <div className="resource-meta">Trail &middot; 225 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/explore-lightning-experience-reports-dashboards" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
          <article className="resource-card">
            <h5>Phase 3 &middot; AI-Enabled Service Scale</h5>
            <p>Prepare architects and delivery teams to operationalize Agentforce-powered service capabilities with governance.</p>
            <div className="resource-meta">Trail &middot; 479 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/build-with-agentforce-for-service" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
        </div>
      </div>
    </section>
  );
}
