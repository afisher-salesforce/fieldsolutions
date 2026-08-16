import { Router, Route, Switch } from 'wouter';
import { AuthGate } from './components/AuthGate';
import { Layout } from './components/Layout';
import ExecutiveSummary from './pages/ExecutiveSummary';
import Journey from './pages/Journey';
import Vignette1 from './pages/Vignette1';
import Vignette2 from './pages/Vignette2';
import Vignette3 from './pages/Vignette3';
import Vignette4 from './pages/Vignette4';
import Vignette5 from './pages/Vignette5';
import CapabilityMap from './pages/CapabilityMap';
import SalesforceDomains from './pages/SalesforceDomains';
import Enablement from './pages/Enablement';
import ExternalResearch from './pages/ExternalResearch';
import ForwardLooking from './pages/ForwardLooking';

export default function App() {
  return (
    <AuthGate
      allowedDomains={['salesforce.com', 'siemens.com']}
      siteName="Siemens Mobility"
      subtitle="Connected Customer Vision Site"
    >
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={ExecutiveSummary} />
            <Route path="/journey" component={Journey} />
            <Route path="/vignette-1" component={Vignette1} />
            <Route path="/vignette-2" component={Vignette2} />
            <Route path="/vignette-3" component={Vignette3} />
            <Route path="/vignette-4" component={Vignette4} />
            <Route path="/vignette-5" component={Vignette5} />
            <Route path="/capability-map" component={CapabilityMap} />
            <Route path="/salesforce-domains" component={SalesforceDomains} />
            <Route path="/enablement" component={Enablement} />
            <Route path="/external-research" component={ExternalResearch} />
            <Route path="/forward-looking" component={ForwardLooking} />
            <Route>
              <div style={{ padding: '2rem', color: 'var(--text)' }}>
                <h2>Page not found</h2>
                <p>The requested page does not exist.</p>
              </div>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthGate>
  );
}
