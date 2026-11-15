# reka.ai

Static website for **reka.ai** — a Malaysia-based studio building custom autonomous AI agents for SMEs.

---

## Pages & Interactions

### Global Navigation & Footer (All Pages)

| Element | Where | What Happens When Clicked |
| :--- | :--- | :--- |
| **`reka.ai` Logo (Header / Footer)** | Top-left / Bottom-left | On [index.html](index.html), jumps to `#top` (top of page). On all other pages, navigates to [index.html](index.html). |
| **Nav: `About`** | Top navigation | Opens [about.html](about.html). |
| **Nav: `Contact`** | Top navigation | Opens [contact.html](contact.html). |
| **Nav: `Experience`** | Top navigation | Opens [experience.html](experience.html). |
| **Nav: `Pricing` / `Services`** | Top navigation | Opens [princing.html](princing.html). |
| **Burger Menu Button (`☰`)** | Mobile header (`≤ 900px`) | Toggles `body.menu-open` to open/close the mobile slide-down navigation menu. Clicking the backdrop, a nav link, or pressing `Escape` closes it. |
| **`← Back home`** | Subpages (`about`, `contact`, `experience`, `princing`) | Returns to [index.html](index.html). |
| **Footer: `About` / `Experience` / `Services` / `Contact`** | Footer (`Company`) | Navigates to the corresponding page ([about.html](about.html), [experience.html](experience.html), [princing.html](princing.html), [contact.html](contact.html)). |
| **Footer: `x.ai`** | Footer (`Reference`) | Opens `https://x.ai/company` in a new browser tab (`target="_blank"`). |

---

### 1. Home — [index.html](index.html)
Landing page introducing reka.ai, core values, and an inquiry/booking form.

- **Section 1 (Hero `#top`)**: Displays the headline, overview for Malaysian SMEs, three capability highlights, and a looping background video (`assets/video/hero-compat.mp4`).
- **Section 2 (We Believe `#beliefs`)**: 3-column table (`01` Build digital literacy, `02` Free people to focus on what matters, `03` Make AI accessible to all) over a looping background video (`assets/video/we-believe.mp4`).
- **Section 5 (Contact `#contact`)**: Discovery call & inquiry form (`#contact-form`) with client-side validation in [src/js/main.js](src/js/main.js):
  - **Fields**: Contact Person (required), Email Address (required, validated format), Company Name (optional), Plan dropdown (`Custom Coding`, `SME Plan Agents`, `Starter AI Agent System`, `Custom Agent System`, required), Meeting Date (required), Meeting Time (required).
  - **Clicking `Submit`**:
    - If any required field is empty or the email format is invalid, shows the field's error message (`data-error`), marks the field with `has-error` / `aria-invalid="true"`, and focuses the first invalid input.
    - If all fields are valid, resets the form and displays `"Thank you! Your message has been received. We'll reply within 1 business day."` in `#form-status` (client-side only; no backend request is sent).

---

### 2. About — [about.html](about.html)
Introduces the founding team (Peter Chan Wei Soon, Nor Aniq Nor Azim, Nur Loqman Hakim Mohd Nasir) and how reka.ai builds narrow-scope autonomous agents integrated into WhatsApp, Excel, Google Sheets, CRMs, and ERPs.

- Features a looping showcase video (`assets/video/reka.ai.mp4`).
- Navigation links (`← Back home`, header nav, and footer links) work as listed in **Global Navigation & Footer**.

---

### 3. Contact — [contact.html](contact.html)
Team directory displaying the three founders in a 3-column table (`.team-table`) with photos, student IDs, full names, and direct email links.

| Element | What Happens When Clicked |
| :--- | :--- |
| `loqman@reka.ai` | Opens the user's default mail client addressed to `loqman@reka.ai` (`mailto:`). |
| `aniq@reka.ai` | Opens the user's default mail client addressed to `aniq@reka.ai` (`mailto:`). |
| `peter@reka.ai` | Opens the user's default mail client addressed to `peter@reka.ai` (`mailto:`). |

---

### 4. Experience — [experience.html](experience.html)
Showcases engineering and hackathon projects in a 3-column table (`.team-table`), each with an auto-playing preview video.

| Project Card | What Happens When Clicked |
| :--- | :--- |
| **Yes Or No** (`assets/projects/yesorno.mp4`) | Opens `https://yesorno1.vercel.app/` in a new tab. |
| **Flower** (`assets/projects/flower.mp4`) | Opens `https://nloqmanhn05.github.io/flower/` in a new tab. |
| **Fintech** (`assets/projects/fintech.mp4`) | Opens `https://github.com/nloqmanhn05/Fintech` in a new tab. |

---

### 5. Pricing & Services — [princing.html](princing.html)
4-tier service comparison table (`Starter`, `Plus`, `Premium`, `Custom`) with pricing, descriptions, bulleted feature lists, action buttons, and a downloadable PDF catalog.

| Element | What Happens When Clicked |
| :--- | :--- |
| **`Get Starter`** | Navigates to [contact.html](contact.html). |
| **`Get Plus`** | Navigates to [contact.html](contact.html). |
| **`Get Premium`** | Navigates to [contact.html](contact.html). |
| **`Get Custom`** | Navigates to [contact.html](contact.html). |
| **`Download Catalog`** | Downloads `assets/pdf/pricing.pdf` saved as `reka-ai-pricing.pdf`. |

---

## Project Structure

```text
reka.ai/
├── index.html          # Home page (hero, core beliefs, contact form)
├── about.html          # About the studio & founders
├── contact.html        # Team directory & direct mailto links
├── experience.html     # Project showcase table
├── princing.html       # Pricing tiers & PDF catalog download
├── src/
│   ├── css/style.css   # All layout, typography, table, and responsive styles
│   └── js/main.js      # Mobile menu toggle, sticky header scroll state, form validation
└── assets/
    ├── font/           # Self-hosted Inter & Instrument Serif fonts
    ├── pdf/            # Downloadable pricing.pdf catalog
    ├── projects/       # Project preview MP4 videos
    ├── team/           # Founder photos
    └── video/          # Background & showcase MP4 videos
```
