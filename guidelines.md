git # Codebase Guidelines

Technical breakdown of every HTML, CSS, and JavaScript file in **reka.ai**, explaining what each file is for and what each section of code does.

---

## 1. [index.html](index.html) — Home Page
Main landing page containing the hero, core beliefs, and discovery-call contact form.

1. **Document Head & SEO (`L1–L17`)**
   - Sets UTF-8, responsive viewport, page title, meta description, Open Graph / Twitter metadata, and loads `src/css/style.css?v=2.1`.
2. **Fixed Background Video (`L20–L24`)**
   - `.hero-photo > video` plays `assets/video/hero-compat.mp4` (`autoplay muted loop playsinline`) fixed behind all page content.
3. **Header & Navigation (`L27–L47`)**
   - `.menu-backdrop`: Dark mobile overlay shown when `body.menu-open` is active.
   - `.header`: Sticky top bar with `.logo` (`#top`), `#site-nav` links (`about.html`, `contact.html`, `experience.html`, `princing.html`), and mobile `.burger` button (`aria-controls="site-nav"`, `aria-expanded="false"`).
4. **Section 1: Hero (`L51–L106`)**
   - `.hero-copy`: Main headline (`h1.hero-h1` with italic `<em>` accents) and `.lede` summary for Malaysian SMEs.
   - `.stats`: 3-item horizontal capability bar (`Multi-Model AI Orchestration`, `Measurable Reduction in Manual Ops`, `Engineered for Local Malaysian Operators`), each with an inline `<svg class="stat-icon">`.
5. **Section 2: We Believe (`L109–L166`)**
   - `.beliefs-bg-video`: Plays `assets/video/we-believe.mp4` behind `.beliefs-bg-overlay`.
   - `.beliefs-table-card > .beliefs-table-grid`: 3-column grid (`01` Build digital literacy, `02` Free people to focus on what matters, `03` Make AI accessible to all) plus `.beliefs-footer` tagline.
6. **Section 5: Contact Form (`L169–L246`)**
   - `#contact-form` (`novalidate` so custom JS handles validation): Collects Contact Person (`#contact-name`), Email (`#contact-email`), optional Company (`#contact-company`), Plan dropdown (`#contact-message`), Meeting Date (`#contact-date`), and Meeting Time (`#contact-time`).
   - Each `.form-group` pairs its input with a `.field-msg` slot (`data-support` / `data-error`) linked via `aria-describedby`.
   - `#form-status` (`role="status"`): Displays the submission confirmation message.
7. **Footer & Script (`L250–L283`)**
   - `.site-footer`: Brand logo, copyright, `Company` navigation links, and external `Reference` link (`https://x.ai/company`).
   - Loads `src/js/main.js` with `defer`.

---

## 2. [about.html](about.html) — About Page
Introduces the founding team and reka.ai's approach to narrow-scope autonomous AI agents.

1. **Head & Page Shell (`L1–L42`)**
   - Uses `<body class="contact-page">` for subpage layout styling, shares the fixed `.hero-photo` background video, `.menu-backdrop`, and `.header` (logo links back to `index.html`).
2. **Back Home & Section Header (`L45–L64`)**
   - `.back-home-row`: `← Back home` link returning to `index.html`.
   - `.section-header`: Eyebrow (`About Us`), headline, and `.section-lede` naming the three founders.
3. **2-Column Studio Grid (`L66–L91`)**
   - `.about-grid`: Left `.team-card` plays `assets/video/reka.ai.mp4` inside `.team-photo-frame` with `.team-caption`; right `.about-content` explains what reka.ai builds and integrates with (WhatsApp, Excel, Google Sheets, CRMs, ERPs).
4. **Footer & Script (`L97–L130`)**
   - Standard `.site-footer` and `src/js/main.js` (`defer`).

---

## 3. [contact.html](contact.html) — Team Directory Page
Lists the three founding builders with photos, student IDs, names, and clickable `mailto:` links.

1. **Head & Page Shell (`L1–L41`)**
   - `<body class="contact-page">`, shared `.hero-photo` video, `.menu-backdrop`, and `.header`.
2. **Back Home & Intro (`L44–L63`)**
   - `.back-home-row` (`← Back home` → `index.html`) and `.section-header` (`Our Reka` / `Meet the builders behind reka.ai`).
3. **Team Table (`L65–L107`)**
   - `.team-table-wrap.card > table.team-table`: 3-column table row (`<tr>`) with one `<td>` per founder (`Nur Loqman Hakim Bin Mohd Nasir`, `Nor Aniq Bin Nor Azim`, `Peter Chan Wei Soon`).
   - Each cell contains `.member-photo > img` and `.member-info` (`.member-role` ID, `.member-name`, and `<a href="mailto:..." class="member-email">`).
4. **Footer & Script (`L113–L146`)**
   - Standard `.site-footer` and `src/js/main.js` (`defer`).

---

## 4. [experience.html](experience.html) — Engineering Projects Page
Showcases three engineering/hackathon projects in a 3-column video card table.

1. **Head & Page Shell (`L1–L42`)**
   - `<body class="contact-page">`, shared `.hero-photo` video, `.menu-backdrop`, and `.header`.
2. **Back Home & Intro (`L45–L65`)**
   - `.back-home-row` (`← Back home` → `index.html`) and `.section-header` (`Our Experience` / `Battle tested experience, proven outcomes`).
3. **Projects Table (`L67–L118`)**
   - `.team-table-wrap.card > table.team-table`: 3-column table where each `<td>` wraps an `<a class="project-card" target="_blank" rel="noopener noreferrer">`:
     - **Yes Or No** (`https://yesorno1.vercel.app/`, `assets/projects/yesorno.mp4`)
     - **Flower** (`https://nloqmanhn05.github.io/flower/`, `assets/projects/flower.mp4`)
     - **Fintech** (`https://github.com/nloqmanhn05/Fintech`, `assets/projects/fintech.mp4`)
   - Each `.project-thumb` plays a muted looping `<video>` under a `.project-overlay` showing `.project-title` and `.project-desc`.
4. **Footer & Script (`L123–L157`)**
   - Standard `.site-footer` and `src/js/main.js` (`defer`).

---

## 5. [princing.html](princing.html) — Pricing & Services Page
Displays the 4-tier service comparison table and downloadable PDF catalog.

1. **Head & Page Shell (`L1–L40`)**
   - `<body class="contact-page">`, shared `.hero-photo` video, `.menu-backdrop`, and `.header`.
2. **Back Home & Intro (`L43–L61`)**
   - `.back-home-row` (`← Back home` → `index.html`) and `.section-header` (`Pricing and Services` / `Autonomous workflows tailored for operational scale`).
3. **Services Comparison Table (`L63–L155`)**
   - `.services-table-wrap.card > table.services-table`: 4 equal columns (`Starter`, `Plus`, `Premium`, `Custom`):
     - `<thead>`: Tier name (`<h4>`) and `.plan-price`.
     - `<tbody>` Row 1 (`.table-row-desc`): Short summary `<p>` per tier.
     - `<tbody>` Row 2: Bulleted `<ul class="plan-list">` feature lists.
     - `<tbody>` Row 3 (`.table-row-action`): Action buttons (`Get Starter`, `Get Plus`, `Get Premium`, `Get Custom`) styled with `.btn.btn-ghost`, each linking to `contact.html`.
4. **Catalog Download (`L157–L162`)**
   - `.guarantee-strip`: Solid white `.btn.btn-solid.guarantee-download-btn` (`Download Catalog`) linking to `assets/pdf/pricing.pdf` with `download="reka-ai-pricing.pdf"`.
5. **Footer & Script (`L167–L201`)**
   - Standard `.site-footer` and `src/js/main.js` (`defer`).

---

## 6. [src/css/style.css](src/css/style.css) — Global Stylesheet
Single shared stylesheet (`1,213` lines) controlling layout, typography, static surfaces, tables, forms, and responsive breakpoints (no CSS animations, transitions, or hover/active color changes).

1. **Base, Fonts & CSS Variables (`L1–L69`)**
   - Sets `#000000` background, `#ffffff` text, loads self-hosted `Inter` (`assets/font/inter.woff2`) and `Instrument Serif` (`assets/font/instrument-serif-italic.woff2`) via `@font-face`.
   - `:root` defines fluid `clamp()` tokens (`--logo`, `--nav`, `--h1`, `--lede`, `--section-y`, etc.).
   - Global `*` reset includes `box-sizing: border-box` and `-webkit-tap-highlight-color: transparent`.
2. **Background Video & Page Wrapper (`L71–L120`)**
   - `.hero-photo` and `.hero-photo::after` create the fixed fullscreen background video with a dark radial/linear gradient overlay for text contrast.
   - `.page` and `.page > main` use a flex column layout (`min-height: 100vh`) so the footer stays at the bottom.
3. **Header, Logo, Nav & Burger (`L121–L214`)**
   - `.header` sticks to the top (`position: sticky; top: 0`); `body.scrolled .header` adds a dark translucent `backdrop-filter: blur(16px)` bar.
   - `.logo`, `#site-nav`, `.nav-link` (solid `#ffffff`), `.burger` (hidden on desktop, shown at `<= 900px`), and `body.menu-open .burger` X-icon transforms.
4. **Flat Button System (`L215–L252`)**
   - `.btn` base pill shape (`border-radius: 24px`, `height: var(--btn-h)`), `.btn-solid` (white fill, dark text), and `.btn-ghost` (dark translucent fill, white text, subtle border).
5. **Hero & Stats (`L253–L349`)**
   - `.hero`, `.hero-h1` (with `em` in `Instrument Serif` italic), `.lede`, and `.stats` 3-item flex row.
6. **Common Sections & Cards (`L350–L411`)**
   - `.section`, `.container`, `.section-header`, `.section-eyebrow`, `.section-title`, `.section-lede`, and `.card` dark glass surface.
7. **About & Experience Cards (`L412–L530`)**
   - `.about-grid` (2-column layout), `.team-card`, `.team-photo-frame`, `.team-caption`, `.about-content`.
   - `.project-card`, `.project-thumb` (`16 / 10` aspect ratio), `.project-overlay`, `.project-title`, `.project-desc`.
8. **Pricing Table & Guarantee Strip (`L531–L635`)**
   - `.services-table-wrap`, `.services-table` (`table-layout: fixed`, 4 equal columns), `.plan-price`, `.table-row-desc`, `.table-row-action`, `.plan-list` (`list-style: disc; padding-left: 18px`), `.guarantee-strip`, `.guarantee-download-btn`.
9. **We Believe Section (`L636–L747`)**
   - `.beliefs-section`, `.beliefs-bg-video`, `.beliefs-bg-overlay`, `.beliefs-table-card`, `.beliefs-table-grid` (3 equal columns), `.belief-col`, `.belief-num`, `.belief-title`, `.belief-desc`, `.beliefs-footer`. Larger typography applied (`1.125rem` lede, `clamp(1.75rem, 2.2vw, 2.35rem)` titles, `1.125rem` descriptions).
10. **Contact Form Section (`L748–L863`)**
    - `.contact-wrap`, `.contact-form`, `.form-row`, `.form-group`, `.form-input`, `.form-select`, `.field-msg` (with `.has-error` red state), `.form-submit-row`, `.form-status` (with `.is-visible` green confirmation box). Larger typography applied (`1.125rem` lede, `16px` labels/inputs).
11. **Contact & Team Table (`L864–L975`)**
    - `.contact-page .section`, `.contact-team-section`, `.back-home-row`, `.back-home-btn`, `.team-table-wrap`, `.team-table`, `.member-photo`, `.member-info`, `.member-role`, `.member-name`, `.member-email`.
12. **Footer (`L976–L1051`)**
    - `.site-footer`, `.footer-inner`, `.footer-left`, `.footer-left .logo` (`clamp(22px, 1.8vw, 28px)`), `.footer-tagline` (`15px`), `.footer-links`, `.footer-col-title` (`17px`), `.footer-list`, `.footer-link` (`17px`).
13. **Responsive Breakpoints (`L1052–L1213`)**
    - `@media (max-width: 1024px)`: Stacks `.about-grid` to 1 column.
    - `@media (max-width: 900px)`: Switches to mobile `.burger` + slide-down `#site-nav`, stacks `.hero`, `.stats`, `.beliefs-table-grid`, `.services-table`, `.team-table`, and `.footer-inner` vertically.
    - `@media (max-width: 640px)`: Tightens `.contact-form` padding and stacks `.form-row` to 1 column.

---

## 7. [src/js/main.js](src/js/main.js) — Interactive Behavior
Single IIFE (`92` lines) running on all pages.

1. **Mobile Menu Toggle (`toggleMenu`) (`L4–L29`)**
   - Toggles `menu-open` on `<body>` and updates `aria-expanded` / `aria-label` on `.burger`.
   - Closes the menu when clicking `.menu-backdrop`, clicking any link inside `#site-nav`, or pressing `Escape`.
2. **Sticky Header Scroll State (`handleScroll`) (`L31–L35`)**
   - Listens to passive `scroll` events and toggles `scrolled` on `<body>` when `window.scrollY > 40`.
3. **Contact Form Validation & Submission (`validateField`) (`L38–L91`)**
   - Only activates when `#contact-form` and `#form-status` exist (on [index.html](index.html)).
   - Validates `required` fields and email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) on `blur`, `input`/`change` (if already invalid), and `submit`.
   - Toggles `.has-error`, `aria-invalid`, and `.field-msg` text; focuses the first error on failed submit; resets the form and displays the confirmation banner in `#form-status` on valid submit.
