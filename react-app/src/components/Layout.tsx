import { useState, useEffect, type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { PageFlow } from './PageFlow';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ccv-nav-collapsed');
    if (saved === 'true') setCollapsed(true);
  }, []);

  const toggleNav = () => {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem('ccv-nav-collapsed', String(next));
  };

  return (
    <div className={`layout${collapsed ? ' nav-collapsed' : ''}`}>
      <Sidebar />
      <main className="content">
        <div className="nav-toggle-bar">
          <button className="toggle-nav" onClick={toggleNav}>
            {collapsed ? 'Show Navigation' : 'Hide Navigation'}
          </button>
        </div>
        {children}
        <PageFlow />
      </main>
    </div>
  );
}
