import React from 'react';
import { Layers, ShieldCheck, Zap, Lock, Terminal, Cpu } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const principles = [
    {
      icon: Layers,
      title: 'Arquitectura Modular & SRP',
      color: '#38bdf8',
      description: 'Módulos con una única responsabilidad, inyección de dependencias e interfaces desacopladas. Fácil sustitución de proveedores (TTS, LLMs, DB).',
    },
    {
      icon: ShieldCheck,
      title: 'Tipado Estricto (Zero Any)',
      color: '#3b82f6',
      description: 'Contratos de tipos inmutables, guards exhaustivos y validación en tiempo de ejecución con Zod para erradicar sorpresas en producción.',
    },
    {
      icon: Zap,
      title: 'Alta Disponibilidad (99.9% Uptime)',
      color: '#eab308',
      description: 'Gestión proactiva del ciclo de vida de procesos Node.js, reconexiones WebSocket automáticas y liberación estricta de memoria.',
    },
    {
      icon: Lock,
      title: 'Transacciones Atómicas & Anti-Exploit',
      color: '#22c55e',
      description: 'En bots de economía y plataformas de pagos, operaciones atómicas ACID para evitar condiciones de carrera o duplicación de saldo.',
    },
    {
      icon: Terminal,
      title: 'Procesamiento de Video & Audio Nativo',
      color: '#f43f5e',
      description: 'Orquestación de procesos FFmpeg sin fugas de descriptores de archivos, medición exacta de audio vía ffprobe y transcodificación optimizada.',
    },
    {
      icon: Cpu,
      title: 'Seguridad Perimetral & Defensiva',
      color: '#a855f7',
      description: 'Rate limiting estricto por IP, cabeceras de seguridad con Helmet, cookies HttpOnly firmadas y prevención de ataques de inyección.',
    },
  ];

  return (
    <section id="architecture" style={{ position: 'relative', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            fontSize: '0.82rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            <Layers size={14} />
            <span>ESTÁNDARES DE INGENIERÍA</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Principios & <span className="text-gradient">Arquitectura de Software</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Criterios de diseño aplicados en cada bot y plataforma para asegurar estabilidad empresarial y rendimiento predecible.
          </p>
        </div>

        {/* Principles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color={item.color} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
