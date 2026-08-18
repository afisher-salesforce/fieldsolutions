import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useClerk, useUser } from '@clerk/react';
import { navGroups } from '../data/navigation';
import { capabilityIndex, type Capability } from '../data/capabilities';

export function Sidebar() {
  const [location] = useLocation();
  const [query, setQuery] = useState('');
  const { signOut } = useClerk();
  const { user } = useUser();

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

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #1e293b' }}>
        {user?.primaryEmailAddress?.emailAddress && (
          <p style={{
            fontSize: '0.75rem',
            color: '#64748b',
            padding: '0 0.75rem 0.5rem',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {user.primaryEmailAddress.emailAddress}
          </p>
        )}
        <button
          className="logout-btn"
          onClick={() => signOut({ redirectUrl: '/' })}
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
