import React from 'react';
import type { DiscordEmbed } from '../types';

interface DiscordEmbedViewProps {
  readonly embed: DiscordEmbed;
}

export const DiscordEmbedView: React.FC<DiscordEmbedViewProps> = ({ embed }) => {
  return (
    <div
      className="discord-embed-box"
      style={{
        borderLeftColor: embed.color || 'var(--accent-blurple)',
      }}
    >
      {embed.title && (
        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f2f3f5', marginBottom: '0.4rem' }}>
          {embed.title}
        </h4>
      )}

      {embed.description && (
        <p style={{ fontSize: '0.85rem', color: '#dbdee1', marginBottom: '0.75rem', lineHeight: 1.45 }}>
          {embed.description}
        </p>
      )}

      {embed.fields && embed.fields.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.75rem',
          margin: '0.6rem 0'
        }}>
          {embed.fields.map((field, idx) => (
            <div key={idx} style={{ gridColumn: field.inline ? 'span 1' : '1 / -1' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#949ba4', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                {field.name}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#f2f3f5', wordBreak: 'break-word' }}>
                {field.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {embed.footer && (
        <div style={{
          fontSize: '0.72rem',
          color: '#949ba4',
          marginTop: '0.6rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '0.4rem'
        }}>
          {embed.footer}
        </div>
      )}
    </div>
  );
};
