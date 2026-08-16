export default function Vignette3() {
  return (
    <section className="page">
      <header className="page-header">
        <h3>3. The Case in Conflict</h3>
        <p>One record is serving two teams with conflicting process needs.</p>
      </header>

      <div className="section">
        <h4>Current State</h4>
        <ul>
          <li>Field teams need close-out upon repair completion.</li>
          <li>Logistics teams need continued status through vendor/RMA lifecycle.</li>
          <li>Reopen cycles reduce trust in operational metrics and ownership.</li>
        </ul>
      </div>

      <div className="section">
        <h4>Future State</h4>
        <p>Field completion and logistics continuity run as linked but independent processes under shared parent context.</p>
      </div>

      <div className="section">
        <h4>Value Driver</h4>
        <p>Process clarity: eliminate structural workflow conflict and improve decision velocity.</p>
      </div>

      <div className="section">
        <h4>Capabilities</h4>
        <div className="cap-list">
          <div className="cap-item">
            <b>VCM: Case Management</b>
            <span>Governed service request lifecycle with role-based control.</span>
          </div>
          <div className="cap-item">
            <b>VTM: Case Teaming</b>
            <span>Cross-functional collaboration without collapsing ownership.</span>
          </div>
          <div className="cap-item">
            <b>FDR: RMA / Depot Repair</b>
            <span>Dedicated downstream logistics lifecycle with status integrity.</span>
          </div>
          <div className="cap-item">
            <b>VQL: Service Quality &amp; Supervision Analytics</b>
            <span>Separate metrics for field and logistics performance.</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h4>Trailhead Enablement</h4>
        <div className="resource-grid">
          <article className="resource-card">
            <h5>Service Operations Governance Enablement</h5>
            <p>Best for operations and admin teams defining case ownership, escalation flow, and service quality controls.</p>
            <div className="resource-meta">Trail &middot; 170 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/dive-into-service-cloud-for-salesforce-admins" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
        </div>
      </div>
    </section>
  );
}
