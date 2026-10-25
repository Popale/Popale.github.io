import React from 'react';
import { Terminal, Send, ArrowRight, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  readonly onOpenSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator }) => {
  return (
    <section style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '4rem', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Subtle pill tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            borderRadius: '999px',
            background: 'rgba(88, 101, 242, 0.12)',
            border: '1px solid rgba(88, 101, 242, 0.3)',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#c7d2fe',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(88, 101, 242, 0.2)'
          }}>
            <Sparkles size={16} color="#00f0ff" />
            <span>Arquitectura de Bots Discord & Desarrollo Full-Stack Moderno</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)', lineHeight: 1.15, marginBottom: '1.4rem', letterSpacing: '-0.03em' }}>
            Desarrollo de Software de Alta Disponibilidad & <span className="text-gradient">Bots Avanzados</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            maxWidth: '720px',
            marginInline: 'auto'
          }}>
            Hola, soy <strong style={{ color: '#ffffff', fontWeight: 700 }}>{PERSONAL_INFO.name} ({PERSONAL_INFO.alias})</strong>.
            Especializado en la creación de <span style={{ color: '#818cf8', fontWeight: 600 }}>bots para Discord</span>, 
            motores de automatización con IA y plataformas web completas con arquitecturas modulares, limpias y altamente performantes.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
            <a 
              href="#simulator" 
              className="btn btn-primary" 
              onClick={() => onOpenSimulator?.()}
              style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}
            >
              <Terminal size={18} />
              Probar Simulador de Bot
              <ArrowRight size={16} />
            </a>

            <a href="#projects" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}>
              <Code2 size={18} color="#00f0ff" />
              Explorar Proyectos
            </a>

            <a href="#contact" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}>
              <Send size={18} color="#22c55e" />
              Contactar
            </a>
          </div>

          {/* Quick tech pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Especialidades clave:
            </span>
            {['Discord.js v14', 'TypeScript', 'Node.js', 'FFmpeg & Video AI', 'MongoDB Transaccional', 'React 19 & Vue 3'].map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.78rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics bar */}
          <div className="glass-panel" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            padding: '1.75rem',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            {PERSONAL_INFO.metrics.map((metric, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: idx % 2 === 0 ? '#00f0ff' : '#818cf8',
                  lineHeight: 1.1
                }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.35rem', fontWeight: 500 }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
