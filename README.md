# Portfolio

Personal site for Phong Truong — MarTech Solutions Architect.

Astro static build, one page, dark canvas, system type. No client framework;
about 2 KB of inline JavaScript for scroll reveals, scroll-spy and the mobile nav.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/ locally
```

## Structure

```
src/
├─ assets/            portrait, 8 skill logos, 6 service icons
├─ components/        SiteNav Hero About Skills Services Experience Contact Footer Icon
├─ data/
│  ├─ content.ts      every string on the page, typed
│  ├─ logos.ts        static image map for the skill wall
│  └─ icons.ts        service SVG sources, inlined at build
├─ layouts/Base.astro head, fonts, OG tags, favicon
├─ pages/index.astro  the page + the only client script
└─ styles/global.css  tokens, reset, type scale, buttons, preference blocks
public/               favicon, apple-touch-icon, résumé PDF
public/animus-match/  the 2019 game, served as-is at /animus-match/
legacy/               the previous static site, kept for reference — not built
```

Edit copy in `src/data/content.ts`, not in the components. Components read from it.

## Design rules

These are the constraints the page is built to. Changing them should be
deliberate, not incidental.

**Colour.** Every text/background pair is measured, not eyeballed. `#f5f5f7`,
`#a1a1a6` and `#86868b` all clear 4.5:1 on `#000` and `#141416`. The accent
`#e3872d` is 7.77:1 on black; **buttons take black text on orange** (7.77:1) —
white on orange is only 2.70:1 and must not come back.

**Type.** One system stack. Personality lives in the scale: display at
`clamp(3rem, 9vw, 7.5rem)` with `-0.035em` tracking, body at 17px.

**Motion.** Animate `transform` and `opacity` only. No `transition: all`, no
`scale(0)` entries, no `ease-in`. UI durations stay under 300 ms, press feedback
is `scale(0.97)` at 100 ms, and staggering is 30–80 ms.

**Hover.** Every hover rule sits inside `@media (hover: hover) and (pointer: fine)`,
because touch devices fire hover on tap.

**Preferences.** `prefers-reduced-motion` removes movement but keeps fades;
`prefers-reduced-transparency` drops the nav blur; `prefers-contrast: more`
raises the hairlines and lightens the greys. All three are in `global.css`.

**The nav is a material.** Translucent, blurred, with a soft gradient edge that
fades in once content scrolls under it — not a 1px border.

**One signature element.** The portrait in About, large and sticky. Everything
else stays quiet: no counters, no stats, no `01 / 02 / 03` numbering.

## Contact form

Netlify Forms. The markup must keep, or Netlify stops detecting it:

- `data-netlify="true"`
- `name="contact-form"`
- the hidden `<input name="form-name" value="contact-form">`
- the `bot-field` honeypot inside `.hidden`

Verify with `grep form-name dist/index.html` after a build.

## Deploy

Netlify reads `netlify.toml`: build `npm run build`, publish `dist`, Node 22.
Pushing to `master` is the deploy.

The repo previously deployed the static files straight from the root. That
directory is now `legacy/`, which Astro does not build.

## Accessibility

Skip link, semantic landmarks, `aria-label` on icon-only links, visible
`focus-visible` rings in the accent colour, 44px touch targets on coarse
pointers, and no meaning carried by colour alone.
