import { Component, useEffect, useRef, type ReactNode } from "react";
import {
  ClerkProvider,
  SignIn,
  SignUp,
  useAuth,
  useClerk,
  useUser,
} from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { dark } from "@clerk/themes";
import { Router, Route, Switch, Link, Redirect, useLocation } from "wouter";
import { Layout } from "./components/Layout";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import Journey from "./pages/Journey";
import Vignette1 from "./pages/Vignette1";
import Vignette2 from "./pages/Vignette2";
import Vignette3 from "./pages/Vignette3";
import Vignette4 from "./pages/Vignette4";
import Vignette5 from "./pages/Vignette5";
import CapabilityMap from "./pages/CapabilityMap";
import SalesforceDomains from "./pages/SalesforceDomains";
import Enablement from "./pages/Enablement";
import ExternalResearch from "./pages/ExternalResearch";
import ForwardLooking from "./pages/ForwardLooking";

// ── Clerk setup ─────────────────────────────────────────────────────────────
const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
);
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;
const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function stripBase(path: string) {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

// ── Domain restriction ──────────────────────────────────────────────────────
const ALLOWED_DOMAINS = ["salesforce.com", "siemens.com"];
const ADMIN_EMAILS = new Set([
  "afisher@salesforce.com",
  "bill.schermer@salesforce.com",
]);

function isAllowedDomain(email: string) {
  const normalized = email.toLowerCase();
  return (
    ADMIN_EMAILS.has(normalized) ||
    ALLOWED_DOMAINS.some((d) => normalized.endsWith(`@${d}`))
  );
}

// ── Appearance ──────────────────────────────────────────────────────────────
const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "#009999",
    colorForeground: "#e2e8f0",
    colorMutedForeground: "#94a3b8",
    colorDanger: "#ef4444",
    colorBackground: "#0d1117",
    colorInput: "#161b22",
    colorInputForeground: "#e2e8f0",
    colorNeutral: "#30363d",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    borderRadius: "0.375rem",
  },
  elements: {
    rootBox: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    cardBox: {
      backgroundColor: "#161b22",
      borderRadius: "0.75rem",
      width: "440px",
      maxWidth: "100%",
      overflow: "hidden",
      border: "1px solid #30363d",
    },
    card: {
      boxShadow: "none",
      border: "none",
      backgroundColor: "transparent",
      borderRadius: "0",
    },
    header: { padding: "2rem 2rem 0" },
    main: { padding: "1.5rem 2rem 2rem" },
    footer: {
      backgroundColor: "#0d1117",
      borderTop: "1px solid #21262d",
      padding: "1rem 2rem",
    },
    socialButtonsBlockButton: {
      backgroundColor: "#21262d",
      border: "1px solid #30363d",
      color: "#e2e8f0",
    },
    dividerLine: { backgroundColor: "#30363d" },
    dividerText: { color: "#64748b" },
    formFieldInput: {
      backgroundColor: "#0d1117",
      border: "1px solid #30363d",
      color: "#e2e8f0",
    },
    formButtonPrimary: {
      backgroundColor: "#009999",
      color: "#ffffff",
    },
    identityPreviewEditButtonIcon: { color: "#94a3b8" },
  },
};

// ── Sign-in / sign-up pages ─────────────────────────────────────────────────
function SignInPage() {
  const { isLoaded, isSignedIn } = useAuth();
  if (isLoaded && isSignedIn) return <Redirect to="/" />;
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1117",
        padding: "1.5rem",
      }}
    >
      <SignIn routing="path" path={`${basePath}/sign-in`} />
    </div>
  );
}

function SignUpPage() {
  const { isLoaded, isSignedIn } = useAuth();
  if (isLoaded && isSignedIn) return <Redirect to="/" />;
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1117",
        padding: "1.5rem",
      }}
    >
      <SignUp routing="path" path={`${basePath}/sign-up`} />
    </div>
  );
}

// ── Landing page (public) ───────────────────────────────────────────────────
function Landing() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1117",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <h1
          style={{
            color: "#e2e8f0",
            fontSize: "2.75rem",
            fontWeight: "700",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Siemens Mobility
        </h1>
        <p
          style={{
            color: "#009999",
            fontSize: "1.0625rem",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Connected Customer Vision Site
        </p>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "0.9375rem",
            lineHeight: "1.65",
            margin: 0,
            maxWidth: "460px",
          }}
        >
          An internal briefing resource covering Salesforce capabilities and the
          connected customer vision for the Siemens Mobility team.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
          <Link
            href={`${basePath}/sign-in`}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#009999",
              color: "#ffffff",
              borderRadius: "0.375rem",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9375rem",
            }}
          >
            Sign In
          </Link>
          <Link
            href={`${basePath}/sign-up`}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "transparent",
              color: "#e2e8f0",
              borderRadius: "0.375rem",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9375rem",
              border: "1.5px solid #30363d",
            }}
          >
            Request Access
          </Link>
        </div>
        <div
          style={{ display: "flex", gap: "0.625rem", marginTop: "0.25rem" }}
        >
          {["@salesforce.com", "@siemens.com"].map((domain) => (
            <span
              key={domain}
              style={{
                padding: "0.375rem 0.875rem",
                borderRadius: "999px",
                border: "1px solid rgba(0,153,153,0.45)",
                backgroundColor: "rgba(0,153,153,0.08)",
                color: "#009999",
                fontSize: "0.8125rem",
                fontWeight: "500",
              }}
            >
              {domain}
            </span>
          ))}
        </div>
        <p style={{ color: "#475569", fontSize: "0.8125rem", margin: 0 }}>
          Access restricted to Salesforce and Siemens email domains
        </p>
      </div>
    </div>
  );
}

// ── Loading screen ──────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1117",
      }}
    >
      <div style={{ color: "#94a3b8", fontSize: "0.9375rem" }}>Loading…</div>
    </div>
  );
}

// ── Domain gate (client-side) ───────────────────────────────────────────────
function DomainGate({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <LoadingScreen />;

  const email = user?.primaryEmailAddress?.emailAddress ?? "";
  if (user && !isAllowedDomain(email)) return <DomainRejected />;

  return <>{children}</>;
}

function DomainRejected() {
  const { signOut } = useClerk();
  const hasSignedOutRef = useRef(false);

  useEffect(() => {
    if (hasSignedOutRef.current) return;
    hasSignedOutRef.current = true;
    const timer = window.setTimeout(() => {
      void signOut({ redirectUrl: basePath || "/" });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [signOut]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d1117",
        padding: "1.5rem",
      }}
    >
      <div style={{ maxWidth: "420px", width: "100%", textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "#161b22",
            borderRadius: "0.75rem",
            padding: "2rem",
            border: "1px solid #30363d",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔒</div>
          <h2
            style={{
              color: "#e2e8f0",
              fontSize: "1.125rem",
              fontWeight: "700",
              margin: "0 0 0.75rem",
            }}
          >
            Access Restricted
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9375rem",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            This site is available to{" "}
            <strong style={{ color: "#e2e8f0" }}>salesforce.com</strong> and{" "}
            <strong style={{ color: "#e2e8f0" }}>siemens.com</strong> email
            domains only. You are being signed out.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Home route ──────────────────────────────────────────────────────────────
function HomeRoute() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <LoadingScreen />;
  if (isSignedIn) return <DomainGate><ProtectedApp /></DomainGate>;
  return <Landing />;
}

// ── Protected app (renders Layout + routes) ─────────────────────────────────
function ProtectedApp() {
  return (
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
          <div style={{ padding: "2rem", color: "var(--text)" }}>
            <h2>Page not found</h2>
            <p>The requested page does not exist.</p>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

// ── Auth gate for protected routes ──────────────────────────────────────────
function AuthGate() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <LoadingScreen />;
  if (!isSignedIn) return <Redirect to="/sign-in" />;

  return (
    <DomainGate>
      <ProtectedApp />
    </DomainGate>
  );
}

// ── Error boundary ──────────────────────────────────────────────────────────
interface ErrorBoundaryState {
  error: Error | null;
}
class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            display: "flex",
            minHeight: "100dvh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0d1117",
            padding: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: "520px",
              backgroundColor: "#161b22",
              borderRadius: "0.75rem",
              padding: "2rem",
              border: "1px solid #30363d",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠️</div>
            <h2
              style={{
                color: "#e2e8f0",
                fontSize: "1.125rem",
                fontWeight: "700",
                margin: "0 0 0.75rem",
              }}
            >
              Something went wrong
            </h2>
            <pre
              style={{
                color: "#94a3b8",
                fontSize: "0.75rem",
                textAlign: "left",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {this.state.error?.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Root router with Clerk ──────────────────────────────────────────────────
function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      afterSignInUrl={`${basePath}/`}
      afterSignUpUrl={`${basePath}/`}
      localization={{
        signIn: {
          start: {
            title: "Siemens Mobility",
            subtitle: "Sign in to the Connected Customer Vision Site",
          },
        },
        signUp: {
          start: {
            title: "Request Access",
            subtitle: "Create an account to access the site",
          },
        },
      }}
      routerPush={(to: string) => setLocation(stripBase(to))}
      routerReplace={(to: string) =>
        setLocation(stripBase(to), { replace: true })
      }
    >
      <Switch>
        <Route path="/" component={HomeRoute} />
        <Route path="/sign-in/*?" component={SignInPage} />
        <Route path="/sign-up/*?" component={SignUpPage} />
        <Route>
          <AuthGate />
        </Route>
      </Switch>
    </ClerkProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router base={basePath}>
        <ClerkProviderWithRoutes />
      </Router>
    </ErrorBoundary>
  );
}
