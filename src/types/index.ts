export type ProjectCategory = 'all' | 'bots' | 'web' | 'automation';

export interface ProjectArchitectureDetail {
  readonly title: string;
  readonly description: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly detailedOverview: string;
  readonly category: 'bots' | 'web' | 'automation';
  readonly tags: readonly string[];
  readonly featured: boolean;
  readonly githubUrl: string;
  readonly liveUrl?: string;
  readonly highlights: readonly string[];
  readonly architectureDetails?: readonly ProjectArchitectureDetail[];
  readonly iconName: string;
  readonly badgeText?: string;
  readonly metrics?: string;
}

export interface TechItem {
  readonly name: string;
  readonly category: 'frontend' | 'backend' | 'database' | 'tools';
  readonly icon: string;
  readonly level: number; // 0 to 100
  readonly description: string;
  readonly color: string;
  readonly experienceYears?: string;
}

export interface DiscordEmbedField {
  readonly name: string;
  readonly value: string;
  readonly inline?: boolean;
}

export interface DiscordEmbed {
  readonly title?: string;
  readonly description?: string;
  readonly color?: string;
  readonly fields?: readonly DiscordEmbedField[];
  readonly footer?: string;
  readonly timestamp?: string;
}

export interface DiscordMessage {
  readonly id: string;
  readonly author: {
    readonly name: string;
    readonly avatar: string;
    readonly isBot: boolean;
    readonly botTag?: string;
  };
  readonly timestamp: string;
  readonly content?: string;
  readonly embeds?: readonly DiscordEmbed[];
}

export interface BotCommand {
  readonly name: string;
  readonly description: string;
  readonly usage: string;
  readonly category?: string;
  readonly execute: (args?: string) => DiscordMessage;
}
