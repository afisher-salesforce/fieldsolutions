export default function Vignette1() {
  return (
    <section className="page">
      <header className="page-header">
        <h3>1. The Half-Day Tax</h3>
        <p>Technician productivity is constrained by manual workflow overhead and disconnected data.</p>
      </header>

      <div className="section">
        <h4>Current State</h4>
        <ul>
          <li>Field engineers spend substantial time on manual updates before and after repairs.</li>
          <li>Inventory confidence depends on spreadsheet verification and rework.</li>
          <li>Customer updates are delayed by administrative status handling.</li>
        </ul>
      </div>

      <div className="section">
        <h4>Future State</h4>
        <p>Work orders arrive with full context, parts are consumed in-system, and completion updates post without duplicate manual entry.</p>
      </div>

      <div className="section">
        <h4>Value Driver</h4>
        <p>Operational efficiency: recover technician hours and convert administrative time into productive service capacity.</p>
      </div>

      <div className="section">
        <h4>Capabilities</h4>
        <div className="cap-list">
          <div className="cap-item">
            <b>FWO: Work Order Management</b>
            <span>Structured field execution lifecycle with clear ownership and status governance.</span>
          </div>
          <div className="cap-item">
            <b>FMO: Field Worker Mobility</b>
            <span>Mobile-first work execution with in-context asset and service data.</span>
          </div>
          <div className="cap-item">
            <b>FIR: Field Inventory &amp; Replenishment Management</b>
            <span>Automated parts consumption and replenishment integrity.</span>
          </div>
          <div className="cap-item">
            <b>FSM: Operational Schedule Management</b>
            <span>Improved dispatch quality based on skill, location, and priority.</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h4>Trailhead Enablement</h4>
        <div className="resource-grid">
          <article className="resource-card">
            <h5>Field Execution and Mobility Enablement</h5>
            <p>Best for field service leads and admins implementing mobile dispatch and work-order consistency.</p>
            <div className="resource-meta">Trail &middot; 591 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/field-service-get-on-the-road" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
        </div>
      </div>
    </section>
  );
}
