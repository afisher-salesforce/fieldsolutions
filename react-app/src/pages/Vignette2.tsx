export default function Vignette2() {
  return (
    <section className="page">
      <header className="page-header">
        <h3>2. The Asset That Nobody Owns</h3>
        <p>Asset lifecycle data is fragmented, creating risk across maintenance, warranty, and compliance.</p>
      </header>

      <div className="section">
        <h4>Current State</h4>
        <ul>
          <li>RMA events and component movement are inconsistently tracked.</li>
          <li>Revision and field modification history is difficult to verify.</li>
          <li>Audit and dispute readiness is hindered by scattered records.</li>
        </ul>
      </div>

      <div className="section">
        <h4>Future State</h4>
        <p>Vehicle-to-component hierarchy, lifecycle events, and vendor interactions are recorded in one governed system of record.</p>
      </div>

      <div className="section">
        <h4>Value Driver</h4>
        <p>Asset intelligence: reduce warranty leakage and improve compliance-ready traceability.</p>
      </div>

      <div className="section">
        <h4>Capabilities</h4>
        <div className="cap-list">
          <div className="cap-item">
            <b>FDR: RMA / Depot Repair</b>
            <span>Standardized vendor lifecycle from removal through return and closure.</span>
          </div>
          <div className="cap-item">
            <b>FPM: Install Base &amp; Preventative Maintenance</b>
            <span>Structured installed-base history and maintenance continuity.</span>
          </div>
          <div className="cap-item">
            <b>VWA: Warranty Management</b>
            <span>Formal warranty evidence and claim adjudication support.</span>
          </div>
          <div className="cap-item">
            <b>IMP: Asset Lifecycle Management</b>
            <span>Full component genealogy across field operations.</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h4>Trailhead Enablement</h4>
        <div className="resource-grid">
          <article className="resource-card">
            <h5>Asset and Contract Readiness Enablement</h5>
            <p>Best for teams strengthening asset traceability, contract rigor, and warranty-aligned service execution.</p>
            <div className="resource-meta">Trail &middot; 160 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/unleash-the-power-of-salesforce-contracts-to-transform-your-business" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
        </div>
      </div>
    </section>
  );
}
