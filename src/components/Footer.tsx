import { Bot, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(5, 7, 10, 0.95)',
      padding: '3rem 0 2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #5865F2, #00F0FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Bot size={18} color="#fff" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#f8fafc' }}>
                {PERSONAL_INFO.name} ({PERSONAL_INFO.alias})
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {PERSONAL_INFO.role}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
            <a href="#simulator" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Simulador</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Proyectos</a>
            <a href="#stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Stack</a>
            <a href="#architecture" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Arquitectura</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contacto</a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Credits */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {CURRENT_YEAR} {PERSONAL_INFO.name} ({PERSONAL_INFO.alias}). Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Construido con</span>
            <span style={{ color: '#61dafb', fontWeight: 600 }}>React 19</span>
            <span>+</span>
            <span style={{ color: '#3178c6', fontWeight: 600 }}>TypeScript</span>
            <span>+</span>
            <span style={{ color: '#bd34fe', fontWeight: 600 }}>Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
