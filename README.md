# Smart Society — جمعية سمارت سوسايتي

Trilingual (Arabic · English · Hebrew) single-page website for **Smart Society (R.A.)** — a registered nonprofit that opens access to knowledge and tools in artificial intelligence for education, community and small business.

الموقع متعدّد اللغات (عربي · إنجليزي · عبري) لجمعية **سمارت سوسايتي**، التي تتيح المعرفة والأدوات في مجال الذكاء الاصطناعي للتعليم والمجتمع والأعمال الصغيرة.

אתר רב‑לשוני (עברית · ערבית · אנגלית) של עמותת **סמארט סוסיאטי ע״ר**.

## Languages & direction

| Language | Code | Direction | Font |
|----------|------|-----------|------|
| العربية  | `ar` | RTL | Cairo |
| English  | `en` | LTR | Inter |
| עברית    | `he` | RTL | Heebo |

The language is chosen from the visitor's browser, remembered in `localStorage`, and switchable from the header (and the mobile menu). Switching updates every heading, panel, program and guide in place — including an open details panel.

## Structure

```
index.html     markup with data-i18n keys (no text hard-coded in the page)
i18n.js        all copy for the three languages + the language engine (window.SS)
app.js         interactions: finder, program/guide/info panels, request builder
styles.css     base design + RTL/LTR mirroring + language switcher
identity.css   the four logo colours (lime · cyan · violet · coral) carried through
motion.css     reveal, orbit, ticker and reading-progress motion
motion.js      animation engine + motion on/off toggle (respects reduced-motion)
```

No build step and no package install — the site is static files.

## Run locally

```bash
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Status

The site is **in preparation**. Programs are shown as *planned*; registration and donations are **not active**. The request tool produces a text file on the visitor's own device — nothing is sent to the association. Contact details, verified team, dates, costs, a professional accessibility review and an enquiry-handling process are to be completed before opening to the public.

— Smart Society (R.A.) · Association no. 580848505
