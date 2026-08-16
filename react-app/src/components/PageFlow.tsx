import { Link, useLocation } from 'wouter';
import { pageFlow } from '../data/navigation';

export function PageFlow() {
  const [location] = useLocation();
  const currentIndex = pageFlow.findIndex((p) => p.path === location);
  const prev = currentIndex > 0 ? pageFlow[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < pageFlow.length - 1 ? pageFlow[currentIndex + 1] : null;

  return (
    <nav className="page-flow" aria-label="Page progression">
      {prev ? (
        <Link href={prev.path} className="page-flow-link prev">
          <span>Previous</span>
          <b>{prev.label}</b>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={next.path} className="page-flow-link next">
          <span>Next</span>
          <b>{next.label}</b>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
