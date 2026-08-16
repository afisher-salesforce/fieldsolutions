export default function Vignette4() {
  return (
    <section className="page">
      <header className="page-header">
        <h3>4. The Customer Who Doesn't Know</h3>
        <p>Customer status visibility still relies on CSV intake and manual updates.</p>
      </header>

      <div className="section">
        <h4>Current State</h4>
        <ul>
          <li>Customer requests flow through export/import pipelines.</li>
          <li>Status updates are email-dependent and inconsistent.</li>
          <li>Warranty confidence suffers when visibility is delayed.</li>
        </ul>
      </div>

      <div className="section">
        <h4>Future State</h4>
        <p>Customers gain structured intake and real-time status transparency while Siemens teams manage obligations through governed workflows.</p>
      </div>

      <div className="section">
        <h4>Value Driver</h4>
        <p>Customer confidence: move from reactive status handling to proactive transparency.</p>
      </div>

      <div className="section">
        <h4>Capabilities</h4>
        <div className="cap-list">
          <div className="cap-item">
            <b>VSS: Self Service</b>
            <span>Customer-facing case and status visibility through portal experiences.</span>
          </div>
          <div className="cap-item">
            <b>VEN: Service Contract Management &amp; Entitlement</b>
            <span>Warranty obligation and SLA governance.</span>
          </div>
          <div className="cap-item">
            <b>VCH: Omni-Channel Contact Center</b>
            <span>Consistent communication orchestration across channels.</span>
          </div>
          <div className="cap-item">
            <b>FAP: Field Service Analysis &amp; Planning</b>
            <span>Management reporting for customer and operational assurance.</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h4>Trailhead Enablement</h4>
        <div className="resource-grid">
          <article className="resource-card">
            <h5>Customer Visibility and Experience Enablement</h5>
            <p>Best for leaders advancing self-service visibility, channel orchestration, and customer communication consistency.</p>
            <div className="resource-meta">Trail &middot; 582 min</div>
            <a className="resource-link" href="https://trailhead.salesforce.com/en/content/learn/trails/discover-agentforce-service" target="_blank" rel="noopener noreferrer">Open Trailhead Resource</a>
          </article>
        </div>
      </div>
    </section>
  );
}
