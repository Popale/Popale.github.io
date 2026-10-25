import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Video, 
  Bot, 
  LayoutDashboard, 
  Coins, 
  Terminal, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PROJECTS } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types';

const CATEGORY_TABS: readonly { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'bots', label: 'Discord Bots' },
  { id: 'automation', label: 'IA & Automatización' },
  { id: 'web', label: 'Full-Stack Web' },
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video size={22} color="#f43f5e" />;
      case 'Bot':
        return <Bot size={22} color="#5865f2" />;
      case 'LayoutDashboard':
        return <LayoutDashboard size={22} color="#3b82f6" />;
      case 'Coins':
        return <Coins size={22} color="#f59e0b" />;
      case 'Terminal':
      default:
        return <Terminal size={22} color="#00f0ff" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" style={{ position: 'relative', padding: '5.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            color: '#67e8f9',
            fontSize: '0.82rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            <FolderGit2 size={14} />
            <span>PORTAFOLIO DE INGENIERÍA</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Sistemas reales desarrollados con TypeScript, Discord.js, microservicios Node.js, procesamiento multimedia y arquitecturas limpias.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.6rem',
          marginBottom: '3rem'
        }}>
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                type="button"
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent-blurple)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'linear-gradient(135deg, rgba(88, 101, 242, 0.35), rgba(0, 240, 255, 0.2))' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 0 15px rgba(88, 101, 242, 0.3)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.75rem',
        }}>
          {filteredProjects.map((project: Project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow Accent Border Top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.7), transparent)',
                }} />

                {/* Card Top: Icon & Badges */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '3.2rem',
                    height: '3.2rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {getProjectIcon(project.iconName)}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {project.metrics && (
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        background: 'rgba(0, 240, 255, 0.12)',
                        border: '1px solid rgba(0, 240, 255, 0.25)',
                        color: '#67e8f9',
                      }}>
                        {project.metrics}
                      </span>
                    )}
                    {project.badgeText && (
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        background: 'rgba(88, 101, 242, 0.15)',
                        border: '1px solid rgba(88, 101, 242, 0.3)',
                        color: '#a5b4fc',
                      }}>
                        {project.badgeText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#f8fafc', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  marginBottom: '1.25rem',
                  flex: 1,
                }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  padding: '0.9rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {project.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Expandable Architecture Drawer */}
                {project.architectureDetails && project.architectureDetails.length > 0 && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.5rem 0.85rem',
                        color: '#94a3b8',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <Layers size={14} color="#818cf8" />
                        <span>{isExpanded ? 'Ocultar detalles técnicos' : 'Ver arquitectura & módulos'}</span>
                      </div>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <div style={{
                        marginTop: '0.75rem',
                        background: 'rgba(15, 23, 42, 0.65)',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        borderRadius: '8px',
                        padding: '0.85rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.6rem'
                      }}>
                        <div style={{ fontSize: '0.78rem', color: '#e2e8f0', lineHeight: 1.45, marginBottom: '0.3rem' }}>
                          {project.detailedOverview}
                        </div>
                        {project.architectureDetails.map((item, i) => (
                          <div key={i} style={{ borderLeft: '2px solid #5865f2', paddingLeft: '0.6rem' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#93c5fd' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                              {item.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tech Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.25rem'
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#94a3b8',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      flex: 1,
                      padding: '0.55rem 0.9rem',
                      fontSize: '0.82rem',
                    }}
                  >
                    <GithubIcon size={15} />
                    <span>Repositorio</span>
                    <ExternalLink size={12} style={{ opacity: 0.6 }} />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        padding: '0.55rem 0.9rem',
                        fontSize: '0.82rem',
                      }}
                    >
                      <Sparkles size={14} />
                      <span>Demo Live</span>
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
