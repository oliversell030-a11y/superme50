import type { Config } from 'tailwindcss';

const withOpacity = (variableName: string) => `rgb(var(${variableName}) / <alpha-value>)`;

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: withOpacity('--background'),
        backgroundSoft: withOpacity('--background-soft'),
        surface: withOpacity('--surface'),
        surfaceStrong: withOpacity('--surface-strong'),
        sage: withOpacity('--sage'),
        sageDeep: withOpacity('--sage-deep'),
        sageWash: withOpacity('--sage-wash'),
        accent: withOpacity('--accent'),
        goldAccent: withOpacity('--gold-accent'),
        textPrimary: withOpacity('--text-primary'),
        textMuted: withOpacity('--text-muted'),
        line: withOpacity('--line'),
      },
      boxShadow: {
        float: '0 26px 80px rgba(52, 48, 40, 0.12)',
        panel: '0 18px 40px rgba(53, 46, 38, 0.08)',
      },
      borderRadius: {
        editorial: '2rem',
        panel: '1.5rem',
      },
      fontFamily: {
        display: ['var(--font-display, Georgia)', 'Georgia', 'serif'],
        body: ['var(--font-body, Helvetica Neue)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
