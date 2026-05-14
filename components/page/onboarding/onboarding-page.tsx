'use client';

import styles from './onboarding-page.module.scss';

const INTRO_CARDS = [
  'A short, guided walkthrough of what to expect — so nothing feels abrupt.',
  'Onboarding happens on Surus, which handles signup, identity, and accreditation.',
  'Once you’re verified, you’ll be ready to sign the token contract for the next buyback.',
];

const EXPECTATION_CARDS = [
  {
    title: 'A trusted handoff',
    body: 'You’ll finish onboarding on Surus — but this page tells you exactly what’s coming first.',
  },
  {
    title: 'Clear, scannable steps',
    body: 'A short pipeline of what’s required, what’s conditional, and what’s recommended.',
  },
  {
    title: 'Same-day momentum',
    body: 'Most participants can complete the core steps in a single sitting.',
  },
  {
    title: 'Help when you need it',
    body: 'Surus walks you through KYC and (if applicable) accreditation in plain language.',
  },
];

const HOW_STEPS = [
  {
    number: 1,
    title: 'Sign Up on Surus',
    body: 'Create your Surus account. This is the system of record for the Alignment Asset onboarding journey.',
  },
  {
    number: 2,
    title: 'Complete KYC',
    body: 'Verify your identity inside Surus. Required for everyone — Surus will guide you through what to upload.',
  },
  {
    number: 3,
    title: 'Complete Accreditation',
    body: 'If you’re based in the US, Surus will route you through accreditation. Non-US participants can skip this step.',
    badge: 'US Residence Only',
  },
];

const DETAILS = [
  'Surus is the system of record for onboarding status.',
  'This page won’t ask for sensitive info — that all happens on Surus.',
  'You can return to this page anytime via the link in your email.',
];

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SURUS_URL = 'https://app.surus.io';

function ContinueButton({ label = 'Continue on Surus' }: { label?: string }) {
  return (
    <a
      href={SURUS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cta}
    >
      <ArrowRight />
      <span>{label}</span>
    </a>
  );
}

export function OnboardingPage() {
  return (
    <div className={styles.shell}>
      <div className={styles.inner}>
        {/* Hero */}
        <section className={styles.hero}>
          <header className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              Let’s get you set up to join the PL Alignment Asset.
            </h1>
            <p className={styles.heroLead}>
              You’re a few steps away from being able to participate in the network’s shared-rewards
              experiment.
            </p>
            <p className={styles.heroLead}>
              This page walks you through what onboarding looks like before you head over to Surus,
              our partner who runs the actual signup.
            </p>
          </header>

          <div className={styles.introGrid}>
            {INTRO_CARDS.map((text, i) => (
              <div key={i} className={styles.introCard}>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <ContinueButton />
        </section>

        {/* What to expect */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What to expect</h2>
          <div className={styles.expectGrid}>
            {EXPECTATION_CARDS.map((card) => (
              <article key={card.title} className={styles.expectCard}>
                <h3 className={styles.expectCardTitle}>{card.title}</h3>
                <p className={styles.expectCardBody}>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How */}
        <section className={styles.howSection}>
          <header className={styles.howHeader}>
            <h2 className={styles.sectionTitle}>How?</h2>
            <p className={styles.howLead}>
              Three required steps, all completed on Surus. Finishing the steps that apply to you
              completes onboarding.
            </p>
          </header>

          <ol className={styles.stepsGrid}>
            {HOW_STEPS.map((step) => (
              <li key={step.number} className={styles.stepItem}>
                <article className={styles.stepCard}>
                  <span className={styles.stepBadgeNumber} aria-hidden="true">
                    <span>{step.number}</span>
                  </span>
                  {step.badge && (
                    <span className={styles.stepTagBadge}>{step.badge}</span>
                  )}
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <div className={styles.stepsPill}>
            Onboarding completed once these steps are finished
          </div>
        </section>

        {/* Recommended + Details */}
        <section className={styles.recommendedSection}>
          <h2 className={`${styles.sectionTitle} ${styles.recommendedTitle}`}>
            Recommended next step
          </h2>

          <article className={`${styles.gradientCard} ${styles.recommendedCard}`}>
            <span className={styles.recommendedBadge}>Recommended — Not Required</span>
            <h3 className={styles.gradientTitleDark}>Sign the Token Contract</h3>
            <p className={styles.cardBody}>
              Once you’ve finished the required steps, sign the token contract to be eligible for
              the next buyback. Surus will distribute the contract to you when you’re ready.
            </p>
            <p className={styles.cardBodyItalic}>
              This step is separate from core onboarding — you can complete it at any time after
              KYC (and accreditation, if applicable).
            </p>
          </article>

          <aside className={styles.detailsCard}>
            <h3 className={styles.gradientTitle}>Important details to know</h3>
            <ul className={styles.detailsList}>
              {DETAILS.map((d) => (
                <li key={d}>{d}</li>
              ))}
              <li>
                <a href="#incentive-model" className={styles.inlineLink}>
                  Learn more
                </a>{' '}
                about the incentive model.
              </li>
            </ul>
          </aside>

          <div className={`${styles.infoCallout} ${styles.recommendedCallout}`}>
            <span className={styles.infoIcon} aria-hidden="true">
              i
            </span>
            <p>
              Surus will guide you through the steps that apply to you based on the information
              you provide. Questions before you start? Check the onboarding FAQ or reach the
              program team at <a href="mailto:plaa@plnetwork.io">plaa@plnetwork.io</a>.
            </p>
          </div>
        </section>

        {/* Ready */}
        <section className={styles.readySection}>
          <header className={styles.readyHeader}>
            <h2 className={styles.sectionTitle}>Ready when you are.</h2>
            <p className={styles.sectionLead}>
              Pick up where you left off, or start fresh — Surus will recognize your account either
              way.
            </p>
          </header>
          <ContinueButton />
        </section>

        {/* Support footer */}
        <footer className={styles.support}>
          <p>
            <strong>Have questions or need help with onboarding?</strong>{' '}
            <a href="#office-hours" className={styles.inlineLink}>
              Schedule office hours
            </a>{' '}
            for 1:1 support or email{' '}
            <a href="mailto:plaa-wg@plrs.xyz" className={styles.inlineLink}>
              plaa-wg@plrs.xyz
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default OnboardingPage;
