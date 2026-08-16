export default function SalesforceDomains() {
  return (
    <section className="page">
      <header className="page-header">
        <h3>Salesforce Capability Domains</h3>
        <p>
          Domain-level view of the Salesforce capabilities that power the
          Siemens Mobility field transformation, including what each domain
          contributes to operational outcomes.
        </p>
        <div className="tag-legend" aria-label="Capability priority legend">
          <span className="cap-tag now">Now</span>
          <span className="cap-tag next">Next</span>
          <span className="cap-tag adjacent">Adjacent Entitlement</span>
          <span className="tag-legend-note">Use tags to separate immediate implementation scope from later licensed expansion.</span>
        </div>
      </header>

      <div className="section">
        <h4>Capability Framework in Business Context</h4>
        <p>
          This view presents Salesforce capability breadth in practical terms
          for Siemens Mobility: what each domain does, which capabilities are
          most relevant now, and how adjacent licensed capabilities can be
          activated over time.
        </p>
        <div className="domain-grid">
          <article className="domain-card">
            <h5>Field Service</h5>
            <p><span className="cap-tag now">Now</span><b>FWO: Work Order Management</b> &mdash; governs execution lifecycle from dispatch to close.</p>
            <p><span className="cap-tag now">Now</span><b>FMO: Field Worker Mobility</b> &mdash; mobile-first technician workflows with in-context data.</p>
            <p><span className="cap-tag now">Now</span><b>FIR: Field Inventory &amp; Replenishment Management</b> &mdash; controls part availability and consumption integrity.</p>
            <p><span className="cap-tag now">Now</span><b>FDR: RMA / Depot Repair</b> &mdash; structures vendor-loop repair and return workflows.</p>
            <p><span className="cap-tag next">Next</span><b>FPM: Install Base &amp; Preventative Maintenance</b> &mdash; maintains component history and preventive cadence.</p>
            <p><span className="cap-tag next">Next</span><b>FSM: Operational Schedule Management</b> &mdash; optimizes assignments by skill, location, and priority.</p>
          </article>

          <article className="domain-card">
            <h5>Service Operations</h5>
            <p><span className="cap-tag now">Now</span><b>VCM: Case Management</b> &mdash; tracks service request ownership and resolution traceability.</p>
            <p><span className="cap-tag next">Next</span><b>VEN: Service Contract Management &amp; Entitlement</b> &mdash; enforces warranty and SLA obligations.</p>
            <p><span className="cap-tag next">Next</span><b>VSS: Self Service</b> &mdash; extends customer visibility and request intake through portal patterns.</p>
            <p><span className="cap-tag next">Next</span><b>VCH: Omni-Channel Contact Center</b> &mdash; unifies communication channels with governed routing.</p>
            <p><span className="cap-tag now">Now</span><b>VTM: Case Teaming</b> &mdash; supports cross-functional collaboration without ownership ambiguity.</p>
            <p><span className="cap-tag now">Now</span><b>VQL: Service Quality &amp; Supervision Analytics</b> &mdash; monitors service quality and team performance.</p>
            <p><span className="cap-tag next">Next</span><b>VWA: Warranty Management</b> &mdash; strengthens warranty evidence, claims, and dispute readiness.</p>
          </article>

          <article className="domain-card">
            <h5>Analytics &amp; Reporting</h5>
            <p><span className="cap-tag next">Next</span><b>ABI: Embedded BI &amp; Dashboards</b> &mdash; delivers KPI visibility within operational workflows.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>APC: Tableau Pulse / Proactive Insights</b> &mdash; pushes anomaly alerts to leadership proactively.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>ARI: Revenue Intelligence</b> &mdash; links commercial health signals to operational performance.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>AEX: Einstein Conversation Insights</b> &mdash; mines interaction quality and coaching insights.</p>
          </article>

          <article className="domain-card">
            <h5>Data &amp; AI</h5>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DAG: Agentic AI / Autonomous Agents</b> &mdash; enables next-step recommendations and autonomous task support.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DPA: Predictive AI / Einstein Scoring</b> &mdash; predicts risk, delays, and service outcomes.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DEL: Einstein Trust Layer</b> &mdash; governs AI safety, privacy, and audit controls.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DVS: Vector Search &amp; RAG Grounding</b> &mdash; grounds AI outputs in trusted enterprise content.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DIR / DUP: Identity Resolution + Unified Profiles</b> &mdash; unifies fragmented customer and asset context.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>DDH: Data Harmonization</b> &mdash; maps external operational data to a standard model.</p>
          </article>

          <article className="domain-card">
            <h5>Integration</h5>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>IEI: Enterprise Integration</b> &mdash; orchestrates process flows across Salesforce and core systems.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>IEP: Enterprise Platform Connectors</b> &mdash; accelerates integration with packaged connectors.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>IAM: API Management</b> &mdash; secures, governs, and scales enterprise API usage.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>IAF: Agent-to-Agent Orchestration</b> &mdash; coordinates specialized agents for cross-domain workflows.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>IMS: Microsoft Ecosystem Integration</b> &mdash; aligns collaboration and CRM actions across Microsoft tooling.</p>
          </article>

          <article className="domain-card">
            <h5>Platform &amp; Governance</h5>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>PGV: Data Governance &amp; Privacy</b> &mdash; enforces policy, access, and compliance controls.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>PMD: Multi-Org / Subsidiary Architecture</b> &mdash; supports enterprise scaling patterns.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>PNZ: Net Zero / Sustainability Management</b> &mdash; extends reporting for ESG and sustainability governance.</p>
          </article>

          <article className="domain-card">
            <h5>Revenue, Order, and Commercial Ops</h5>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>OIM / ORM: Inventory + Order Management</b> &mdash; aligns product, fulfillment, and availability workflows.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>CCM / CQM / CPM: CPQ Core</b> &mdash; controls catalog, quoting, and pricing consistency.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>BLL / BIM / BCC: Billing Foundation</b> &mdash; supports invoice, billing, and collections lifecycle.</p>
            <p><span className="cap-tag adjacent">Adjacent Entitlement</span><b>SOP / SAM / SCL: Sales Core</b> &mdash; aligns opportunity execution, account strategy, and contract governance.</p>
          </article>
        </div>
      </div>

      <div className="section">
        <h4>Trailhead Enablement by Domain</h4>
        <p>Use these suggested resources to accelerate role readiness for the capability domains used in this Siemens Mobility transformation narrative.</p>
        <div className="resource-grid">
          <article className="resource-card">
            <h5>Field Service Domain</h5>
            <p>Recommended for dispatch leaders, service admins, and program owners implementing mobile-first field workflows.</p>
            <div className="resource-meta">Trail &middot; 225 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/boost-field-service-with-mobile" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
          <article className="resource-card">
            <h5>Service Operations Domain</h5>
            <p>Recommended for service administrators shaping case, entitlement, and customer experience operating standards.</p>
            <div className="resource-meta">Trail &middot; 170 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/dive-into-service-cloud-for-salesforce-admins" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
          <article className="resource-card">
            <h5>Analytics and Decision Visibility Domain</h5>
            <p>Recommended for operations leaders and analysts building reporting rigor for executive field-service governance.</p>
            <div className="resource-meta">Trail &middot; 225 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/explore-lightning-experience-reports-dashboards" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
          <article className="resource-card">
            <h5>Data and AI Domain</h5>
            <p>Recommended for architects and developers preparing Data Cloud and Agentforce-driven service intelligence patterns.</p>
            <div className="resource-meta">Trail &middot; 479 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/build-with-agentforce-for-service" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
        </div>
      </div>
    </section>
  );
}
