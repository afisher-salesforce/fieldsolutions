import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

interface AuthGateProps {
  allowedDomains: string[];
  siteName: string;
  subtitle?: string;
  children: ReactNode;
}

const AUTH_KEY = 'ccv-auth';
const SESSION_DAYS = 30;

interface AuthSession {
  email: string;
  timestamp: number;
}

export const LogoutContext = createContext<(() => void) | null>(null);
export const useLogout = () => useContext(LogoutContext);

export function AuthGate({ allowedDomains, siteName, subtitle, children }: AuthGateProps) {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) {
        const session: AuthSession = JSON.parse(raw);
        const age = Date.now() - session.timestamp;
        if (age < SESSION_DAYS * 24 * 60 * 60 * 1000) {
          setAuthed(true);
        } else {
          localStorage.removeItem(AUTH_KEY);
        }
      }
    } catch {
      localStorage.removeItem(AUTH_KEY);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !trimmed.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    const domain = trimmed.split('@')[1];
    if (!allowedDomains.includes(domain)) {
      setError(`Access is restricted to ${allowedDomains.join(' and ')} email addresses.`);
      return;
    }
    const session: AuthSession = { email: trimmed, timestamp: Date.now() };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    setAuthed(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setEmail('');
  };

  if (checking) return null;

  if (!authed) {
    return (
      <div className="auth-gate">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>{siteName}</h2>
          {subtitle && <p className="auth-subtitle">{subtitle}</p>}
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <button type="submit">Continue</button>
          {error && <p className="auth-error">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <LogoutContext.Provider value={handleLogout}>
      {children}
    </LogoutContext.Provider>
  );
}
