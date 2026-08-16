import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { navGroups } from '../data/navigation';
import { capabilityIndex, type Capability } from '../data/capabilities';
import { useLogout } from './AuthGate';

export function Sidebar() {
  const [location] = useLocation();
  const [query, setQuery] = useState('');
  const logout = useLogout();

  const results: Capability[] = query.trim()
    ? capabilityIndex
        .filter((cap) => {
          const q = query.toLowerCase();
          return (
            cap.code.toLowerCase().includes(q) ||
            cap.name.toLowerCase().includes(q) ||
            cap.description.toLowerCase().includes(q) ||
            cap.location.toLowerCase().includes(q) ||
            cap.pageTitle.toLowerCase().includes(q)
          );
        })
        .slice(0, 12)
    : [];

  return (
    <aside className="sidebar">
      <h1>Siemens Mobility</h1>
      <p>Connected Customer Vision Site</p>

      <div className="sf-logo-wrap">
        <img src="/assets/salesforce-logo.png" alt="Salesforce logo" />
      </div>

      <div className="group-label">Search</div>
      <div className="search-wrap">
        <input
          type="text"
          placeholder="Search capability code or name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
          <div className="search-results">
            {results.map((cap) => (
              <Link
                key={cap.code}
                href={cap.pageHref}
                className="search-result-item"
                onClick={() => setQuery('')}
              >
                <span>
                  {cap.code}: {cap.name}{' '}
                  <small>
                    ({cap.pageTitle} &middot; {cap.location})
                  </small>
                </span>
                <small>{cap.description}</small>
              </Link>
            ))}
          </div>
        )}
      </div>

      {navGroups.map((group) => (
        <div key={group.label}>
          <div className="group-label">{group.label}</div>
          {group.items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={location === item.path ? 'nav-link active' : 'nav-link'}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}

      {logout && (
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      )}
    </aside>
  );
}
