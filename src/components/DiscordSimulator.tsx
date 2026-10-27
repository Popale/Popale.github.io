import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Terminal, 
  Send, 
  Trash2, 
  Hash, 
  Sparkles, 
  Radio, 
  ChevronRight, 
  HelpCircle,
  FolderGit2,
  Video,
  Bot as BotIcon,
  Coins,
  Activity,
  Mail,
  Clapperboard
} from 'lucide-react';
import { BOT_COMMANDS, PERSONAL_INFO } from '../data/portfolioData';
import type { DiscordMessage } from '../types';
import { DiscordEmbedView } from './DiscordEmbedView';

interface MessageEntry {
  readonly id: string;
  readonly isUser: boolean;
  readonly commandText?: string;
  readonly discordMessage?: DiscordMessage;
  readonly timestamp: string;
}

const INITIAL_MESSAGES: MessageEntry[] = [
  {
    id: 'welcome-bot',
    isUser: false,
    timestamp: 'Hoy a las 12:00',
    discordMessage: {
      id: 'init-msg',
      author: {
        name: 'Popale Core #0001',
        avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop&crop=faces',
        isBot: true,
        botTag: 'BOT',
      },
      timestamp: 'Hoy a las 12:00',
      embeds: [
        {
          title: '🤖 Simulador de Bot de Discord en Vivo',
          description: `¡Hola! Soy la instancia interactiva de **${PERSONAL_INFO.name} (${PERSONAL_INFO.alias})**.\nEscribí un comando que comience con \`/\` o seleccioná los botones de acceso rápido debajo para explorar proyectos, arquitectura y vías de contacto.`,
          color: '#5865f2',
          fields: [
            { name: '✨ Proyectos Reales', value: '`/projects` o comandos dedicados: `/popeditor`, `/popitor`, `/malosaires`, `/popsino`', inline: false },
            { name: '⚡ Telemetría', value: 'Probá `/status` para chequear el rendimiento del cluster.', inline: true },
            { name: '📬 Vías de Contacto', value: 'Probá `/contact` para obtener Discord & Telegram.', inline: true },
          ],
          footer: 'Discord.js v14 Engine Simulator • Escribí /help para ver todo',
        },
      ],
    },
  },
];

export const DiscordSimulator: React.FC = () => {
  const [messages, setMessages] = useState<MessageEntry[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCommandExecution = React.useCallback((commandName: string) => {
    const cleanCmd = commandName.trim().toLowerCase();

    if (cleanCmd === '/clear') {
      setMessages([]);
      return;
    }

    const command = BOT_COMMANDS.find(
      (cmd) => cmd.name.toLowerCase() === cleanCmd || cmd.name.toLowerCase() === `/${cleanCmd}`
    );

    const nowFormatted = 'Hoy a las ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timestampSeed = Date.now();

    // Add user message
    const userEntry: MessageEntry = {
      id: `user-${timestampSeed}`,
      isUser: true,
      commandText: command ? command.name : cleanCmd,
      timestamp: nowFormatted,
    };

    if (command) {
      const botResponse = command.execute();
      
      // Trigger confetti on /contact
      if (cleanCmd === '/contact') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      }

      const botEntry: MessageEntry = {
        id: `bot-${timestampSeed + 1}`,
        isUser: false,
        discordMessage: botResponse,
        timestamp: nowFormatted,
      };

      setMessages((prev) => [...prev, userEntry, botEntry]);
    } else {
      // Unknown command
      const errorEntry: MessageEntry = {
        id: `bot-err-${timestampSeed + 1}`,
        isUser: false,
        timestamp: nowFormatted,
        discordMessage: {
          id: `err-${timestampSeed}`,
          author: {
            name: 'Popale Core #0001',
            avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop&crop=faces',
            isBot: true,
            botTag: 'BOT',
          },
          timestamp: nowFormatted,
          embeds: [
            {
              title: '❌ Comando no reconocido',
              description: `El comando \`${cleanCmd}\` no existe en la base de datos de comandos.\nEscribí \`/help\` o hacé click en los accesos rápidos para ver los comandos válidos.`,
              color: '#ed4245',
            },
          ],
        },
      };

      setMessages((prev) => [...prev, userEntry, errorEntry]);
    }

    setInputValue('');
    setShowSuggestions(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleCommandExecution(inputValue);
  };

  const filteredCommands = BOT_COMMANDS.filter((cmd) =>
    cmd.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section id="simulator" style={{ position: 'relative', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(88, 101, 242, 0.15)',
            border: '1px solid rgba(88, 101, 242, 0.3)',
            color: '#818cf8',
            fontSize: '0.82rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            <Terminal size={14} />
            <span>INTERACTIVE BOT CLIENT</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Simulador de <span className="text-gradient">Discord Bot</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', fontSize: '1rem' }}>
            Experimentá en vivo la arquitectura de comandos slash, embeds enriquecidos y respuestas en tiempo real desarrollada para servidores de alta concurrencia.
          </p>
        </div>

        {/* Quick Command Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          {[
            { cmd: '/help', label: 'Comandos', icon: HelpCircle },
            { cmd: '/projects', label: 'Todos los Proyectos', icon: FolderGit2 },
            { cmd: '/popeditor', label: 'Popeditor (Desktop)', icon: Clapperboard },
            { cmd: '/popitor', label: 'Popitor (Video AI)', icon: Video },
            { cmd: '/malosaires', label: 'Bot Malos Aires', icon: BotIcon },
            { cmd: '/popsino', label: 'Popsino (Casino)', icon: Coins },
            { cmd: '/status', label: 'Estado del Bot', icon: Activity },
            { cmd: '/contact', label: 'Contacto Directo', icon: Mail },
          ].map(({ cmd, label, icon: Icon }) => (
            <button
              key={cmd}
              onClick={() => handleCommandExecution(cmd)}
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '0.4rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-blurple)';
                e.currentTarget.style.background = 'rgba(88, 101, 242, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <Icon size={14} color="#818cf8" />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{cmd}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({label})</span>
            </button>
          ))}

          <button
            onClick={() => handleCommandExecution('/clear')}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              padding: '0.4rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <Trash2 size={13} />
            <span>Limpiar</span>
          </button>
        </div>

        {/* Discord Simulator Window */}
        <div className="discord-window" style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Header */}
          <div className="discord-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Hash size={20} color="#949ba4" />
              <span style={{ fontWeight: 700, color: '#f2f3f5', fontSize: '0.95rem' }}>
                comandos-popale
              </span>
              <span style={{ color: '#80848e', fontSize: '0.78rem', display: 'none' }} className="channel-desc">
                | Simulador interactivo del bot de Discord
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#4ade80' }}>
                <Radio size={12} className="animate-pulse" />
                <span>WebSocket: 18ms</span>
              </div>
              <div style={{
                background: 'rgba(88, 101, 242, 0.2)',
                color: '#818cf8',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                border: '1px solid rgba(88, 101, 242, 0.3)'
              }}>
                v14.26 LTS
              </div>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="discord-chat-area" ref={chatScrollRef}>
            {messages.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <Terminal size={36} style={{ margin: '0 auto 1rem', opacity: 0.4 }} />
                <p>El canal está despejado. Escribí un comando como <code>/help</code> para comenzar.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  {msg.isUser ? (
                    <>
                      {/* User Avatar */}
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: '#07090e',
                        flexShrink: 0
                      }}>
                        Tú
                      </div>

                      {/* User Content */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                          <span style={{ fontWeight: 600, color: '#f2f3f5', fontSize: '0.9rem' }}>Invitado</span>
                          <span style={{ fontSize: '0.72rem', color: '#949ba4' }}>{msg.timestamp}</span>
                        </div>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          background: 'rgba(88, 101, 242, 0.25)',
                          color: '#c7d2fe',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          <ChevronRight size={13} color="#818cf8" />
                          <span>{msg.commandText}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Bot Avatar */}
                      <img
                        src={msg.discordMessage?.author.avatar}
                        alt="Bot Avatar"
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '50%',
                          flexShrink: 0,
                          border: '2px solid #5865f2'
                        }}
                      />

                      {/* Bot Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                          <span style={{ fontWeight: 700, color: '#5865f2', fontSize: '0.92rem' }}>
                            {msg.discordMessage?.author.name}
                          </span>
                          <span className="discord-tag">BOT ✓</span>
                          <span style={{ fontSize: '0.72rem', color: '#949ba4' }}>{msg.timestamp}</span>
                        </div>

                        {msg.discordMessage?.content && (
                          <div style={{ color: '#dbdee1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            {msg.discordMessage.content}
                          </div>
                        )}

                        {msg.discordMessage?.embeds?.map((embed, idx) => (
                          <DiscordEmbedView key={idx} embed={embed} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Autocomplete suggestion popup */}
          {showSuggestions && inputValue.startsWith('/') && filteredCommands.length > 0 && (
            <div style={{
              background: '#2b2d31',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.5rem',
              maxHeight: '160px',
              overflowY: 'auto'
            }}>
              <div style={{ fontSize: '0.7rem', color: '#949ba4', padding: '0.25rem 0.5rem', textTransform: 'uppercase', fontWeight: 700 }}>
                Comandos coincidentes:
              </div>
              {filteredCommands.map((cmd) => (
                <div
                  key={cmd.name}
                  onClick={() => {
                    handleCommandExecution(cmd.name);
                    inputRef.current?.focus();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.4rem 0.6rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#35373c'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#5865f2', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      {cmd.name}
                    </span>
                    <span style={{ color: '#dbdee1', fontSize: '0.8rem' }}>{cmd.description}</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#80848e' }}>{cmd.category}</span>
                </div>
              ))}
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--discord-chat)',
              padding: '0.85rem 1rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              background: 'var(--discord-input)',
              borderRadius: '8px',
              padding: '0.6rem 0.9rem',
              gap: '0.5rem',
            }}>
              <Sparkles size={16} color="#80848e" />
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setShowSuggestions(e.target.value.startsWith('/'));
                }}
                onFocus={() => setShowSuggestions(inputValue.startsWith('/'))}
                placeholder="Escribí un comando (ej: /help, /projects, /popitor, /status)..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#f2f3f5',
                  width: '100%',
                  fontSize: '0.92rem',
                  fontFamily: inputValue.startsWith('/') ? 'var(--font-mono)' : 'var(--font-sans)',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: '0.6rem 1.1rem',
                fontSize: '0.85rem',
                borderRadius: '8px',
                flexShrink: 0,
              }}
            >
              <Send size={15} />
              <span>Ejecutar</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
