'use client';

import { useState } from 'react';

type NewsletterPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function NewsletterPanel({
  eyebrow,
  title,
  description,
}: NewsletterPanelProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Bitte versuche es später erneut.');
      }

      setStatus('success');
      setMessage(data?.message || 'Vielen Dank. Bitte schau in dein Postfach.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Bitte versuche es später erneut.');
    }
  }

  return (
    <section id="newsletter" className="py-16 md:py-24">
      <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
        <div className="grid gap-8 rounded-[2rem] border border-line/40 bg-[linear-gradient(120deg,rgba(91,104,82,0.96),rgba(122,135,112,0.92))] p-6 text-background shadow-float md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <span className="eyebrow text-background/80 before:bg-background/55">{eyebrow}</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.98] tracking-[-0.04em]">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-background/80">
              {description}
            </p>
          </div>

          <div className="min-w-0 md:min-w-[420px]">
            {status === 'success' ? (
              <div className="rounded-full border border-background/20 bg-background/12 px-5 py-4 text-sm text-background">
                {message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 md:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="deine@email.de"
                    className="min-h-[52px] flex-1 rounded-full border border-background/15 bg-background/12 px-5 text-background placeholder:text-background/60 focus:border-background/50 focus:ring-0"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="min-h-[52px] rounded-full bg-background px-6 text-[0.78rem] uppercase tracking-[0.16em] text-sageDeep transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Senden...' : 'Anmelden'}
                  </button>
                </div>

                {status === 'error' ? (
                  <p className="text-sm text-[#fde3d7]">{message}</p>
                ) : (
                  <p className="text-xs leading-6 text-background/62">
                    Kein Lärm, kein Spam. Nur gelegentliche Impulse mit ruhigem Ton.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
