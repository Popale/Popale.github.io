import React, { useState } from 'react';
import { Terminal, Bot, Code2, Send, Menu, X, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  readonly onOpenSimulator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-70 border-b border-[var(--border-subtle)]" style={{ background: 'rgba(7, 9, 14, 0.85)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #5865F2, #00F0FF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(88, 101, 242, 0.4)'
          }}>
            <Bot size={22} color="#fff" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>{PERSONAL_INFO.name}</span>
              <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', borderRadius: '999px', background: 'rgba(88, 101, 242, 0.2)', color: '#818cf8', border: '1px solid rgba(88, 101, 242, 0.3)' }}>
                {PERSONAL_INFO.alias}
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Full-Stack & Discord Bot Architect</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          <a href="#simulator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}>
            <Terminal size={16} /> Simulador Bot
          </a>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}>
            <Code2 size={16} /> Proyectos
          </a>
          <a href="#stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}>
            <Sparkles size={16} /> Stack
          </a>
          <a href="#architecture" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}>
            <Layers size={16} /> Arquitectura
          </a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}>
            <Send size={16} /> Contacto
          </a>
        </nav>

        {/* Action Button & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            fontSize: '0.78rem',
            color: '#4ade80'
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
            <span>Open to Work</span>
          </div>

          <a 
            href="#simulator" 
            className="btn btn-primary" 
            onClick={() => onOpenSimulator?.()}
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
          >
            <Terminal size={14} />
            <span>Probar Bot</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.4rem'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={18} /> Simulador Bot
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={18} /> Proyectos
          </a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} /> Stack Tecnológico
          </a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} /> Arquitectura & Principios
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Send size={18} /> Contacto
          </a>
        </div>
      )}
    </header>
  );
};
