import React from 'react';
import { Sparkles, Cpu, Server, Layout, Database } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const categories = [
    { id: 'backend', label: 'Backend & Sistemas', icon: Server, color: '#3178c6' },
    { id: 'tools', label: 'Discord Bots & Multimedia', icon: Cpu, color: '#5865f2' },
    { id: 'frontend', label: 'Frontend Reactivo & UI', icon: Layout, color: '#00f0ff' },
    { id: 'database', label: 'Bases de Datos & Persistencia', icon: Database, color: '#47a248' },
  ] as const;

  return (
    <section id="stack" style={{ position: 'relative', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(139, 92, 246, 0.12)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            color: '#c084fc',
            fontSize: '0.82rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={14} />
            <span>ARSENAL TECNOLÓGICO</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Stack & <span className="text-gradient">Tecnologías Dominadas</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', fontSize: '1rem' }}>
            Herramientas seleccionadas para garantizar código tipado, arquitecturas robustas y escalabilidad sin sobrecostos.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}>
          {categories.map((cat) => {
            const items = TECH_STACK.filter((t) => t.category === cat.id);
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '10px',
                    background: `rgba(${cat.id === 'backend' ? '49, 120, 198' : cat.id === 'tools' ? '88, 101, 242' : cat.id === 'frontend' ? '0, 240, 255' : '71, 162, 72'}, 0.15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={20} color={cat.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#f8fafc' }}>{cat.label}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{items.length} tecnologías clave</span>
                  </div>
                </div>

                {/* Tech Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {items.map((tech) => (
                    <div key={tech.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '1.1rem' }}>{tech.icon}</span>
                          <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#f1f5f9' }}>{tech.name}</span>
                        </div>
                        {tech.experienceYears && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                            {tech.experienceYears}
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {tech.description}
                      </p>

                      {/* Progress bar */}
                      <div style={{
                        height: '4px',
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '999px',
                        overflow: 'hidden',
                        marginTop: '0.2rem'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${tech.level}%`,
                          background: `linear-gradient(90deg, ${tech.color}, #00f0ff)`,
                          borderRadius: '999px',
                        }} />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
