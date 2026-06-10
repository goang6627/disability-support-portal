# AGENTS.md

## Project Mission

Build **Cổng Thông Tin Hỗ Trợ Người Khuyết Tật** as an accessibility-first public-service prototype for WCAG 2.2.

Primary audience: people who are blind or have low vision. Secondary audiences: people with mobility disabilities, caregivers, student volunteers, and support organizations.

## Non-Negotiable Rules

- Prioritize semantic HTML before ARIA. Use ARIA only when native HTML is not enough.
- Every interactive UI must be usable by keyboard with visible focus states.
- Do not ship forms without labels, hints where needed, accessible error messages, and a clear success state.
- Do not communicate meaning by color alone.
- Keep contrast at WCAG AA or better for text, controls, borders, and focus states.
- Respect `prefers-reduced-motion` and the in-app reduced-motion preference.
- Policies and official support information must include `sourceUrl`, `sourceName`, `lastReviewed`, and `verificationStatus`.
- Do not present unverified legal or policy information as official. Mark demo data as `sample`.
- The support request form must not send personal data to a server in the prototype. Use localStorage only.
- Before completing any implementation task, run the relevant checks: `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test:a11y` when browsers are installed.

## UI Standards

- Use clear Vietnamese content and short labels.
- Use large tap targets: minimum 44px height for primary controls.
- Keep headings in logical order.
- Provide live-region feedback for dynamic results, form errors, and form success.
- Avoid complex custom widgets unless keyboard and screen reader behavior is implemented and tested.

## Data Standards

- `verified`: source is official or clearly attributable.
- `sample`: demo data only; do not imply it is real.
- `needsCheck`: plausible data that must be verified before presentation as real.

## Git Workflow

- Do not push directly to `main` after initial setup.
- Use feature branches and pull requests.
- Each PR must explain user impact, accessibility checks, and data-source changes.
