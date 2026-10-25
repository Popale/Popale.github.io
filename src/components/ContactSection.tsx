import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  readonly onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.contact.discord);
      setCopiedDiscord(true);
      onShowToast(`¡Usuario de Discord (${PERSONAL_INFO.contact.discord}) copiado al portapapeles!`);
      
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
      });

      setTimeout(() => setCopiedDiscord(false), 2500);
    } catch {
      onShowToast(`Discord tag: ${PERSONAL_INFO.contact.discord}`);
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', padding: '5.5rem 0 4rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(34, 197, 94, 0.12)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            color: '#4ade80',
            fontSize: '0.82rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            <Send size={14} />
            <span>CANALES DIRECTOS</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Iniciemos una <span className="text-gradient">Conversación</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', fontSize: '1rem' }}>
            ¿Querés desarrollar un bot para tu comunidad, automatizar pipelines multimedia o crear una web a medida? Escribime directamente por cualquiera de estos medios:
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
          maxWidth: '1000px',
          margin: '0 auto 3rem',
        }}>
          
          {/* Discord Card */}
          <div className="glass-panel" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem',
            border: copiedDiscord ? '1px solid #22c55e' : undefined
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '14px',
                  background: 'rgba(88, 101, 242, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5865f2'
                }}>
                  <MessageSquare size={26} />
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  background: 'rgba(88, 101, 242, 0.2)',
                  color: '#a5b4fc',
                  fontWeight: 600
                }}>
                  Vía Principal
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                Discord
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Escribime directamente para hablar sobre bots, presupuestos o soporte técnico.
              </p>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.35)',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)'
            }}>
              <span style={{ fontSize: '0.92rem', color: '#e2e8f0', fontWeight: 600 }}>
                {PERSONAL_INFO.contact.discord}
              </span>
              <button
                type="button"
                onClick={handleCopyDiscord}
                className="btn btn-primary"
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  gap: '0.35rem',
                  borderRadius: '6px'
                }}
              >
                {copiedDiscord ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedDiscord ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Telegram Card */}
          <div className="glass-panel" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '14px',
                  background: 'rgba(34, 158, 217, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#229ed9'
                }}>
                  <Send size={24} />
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  background: 'rgba(34, 158, 217, 0.2)',
                  color: '#7dd3fc',
                  fontWeight: 600
                }}>
                  Respuesta Rápida
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                Telegram
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Chat directo para consultas urgentes o coordinación de entregas y requerimientos.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-telegram"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '0.9rem',
                gap: '0.5rem',
              }}
            >
              <span>Abrir Chat ({PERSONAL_INFO.contact.telegram})</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="glass-panel" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc'
                }}>
                  <GithubIcon size={26} />
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  fontWeight: 600
                }}>
                  Código Abierto
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                GitHub
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Explorá mis repositorios, contribuciones, commits y estructuras de proyectos.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '0.9rem',
                gap: '0.5rem',
              }}
            >
              <span>Ver Perfil de GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* Work Availability Banner */}
        <div className="glass-panel" style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(88, 101, 242, 0.12))'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 10px #22c55e'
            }} />
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>
                Estado actual: {PERSONAL_INFO.status}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Ubicación: {PERSONAL_INFO.location} • Disponibilidad para trabajo remoto internacional
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyDiscord}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <span>Copiar Discord Tag</span>
          </button>
        </div>

      </div>
    </section>
  );
};
