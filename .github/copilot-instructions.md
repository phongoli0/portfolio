# Copilot instructions for this repo

## What this is

A one-page personal portfolio: Astro static build, no client framework, dark
canvas, system fonts. It ships as plain HTML/CSS plus a small inline script.
There is no jQuery, no Bootstrap, no PHP.

`legacy/` holds the previous 2018 template site. It is **not** built and **not**
published. Do not edit it to change the live page; read it only to recover old
content.

## Commands

```bash
npm run dev      # local dev server
npm run build    # static output in dist/
npm run preview  # serve the built output
```

There is no test suite and no linter configured. Validate by building and
looking at the page.

## Where things live

- `src/data/content.ts` — every string on the page. Edit copy here, never inline
  in a component.
- `src/components/*.astro` — one component per section. Layout and scoped styles
  live with the section.
- `src/styles/global.css` — tokens, reset, type scale, `.button`, `.section`,
  `.container`, the reveal utilities, and the three preference blocks.
- `src/pages/index.astro` — the page and the only client script (reveal
  observer, scroll-spy, mobile nav sheet).

## Rules that matter

**Contrast is measured, not estimated.** The palette in `global.css` was checked
against WCAG. `#e3872d` is 7.77:1 on black, so orange buttons take **black**
text. White on orange is 2.70:1 and fails — do not reintroduce it. Any new
colour pair needs the ratio computed before it ships.

**Motion.** Animate `transform` and `opacity` only. No `transition: all`, no
`scale(0)` entrances, no `ease-in`. Keep UI durations under 300 ms; press
feedback is `scale(0.97)` at 100 ms.

**Hover belongs in a media query.** Wrap hover rules in
`@media (hover: hover) and (pointer: fine)`, otherwise touch taps trigger them.

**Reduced motion is not "no animation".** Remove movement, keep opacity fades.
`prefers-reduced-transparency` and `prefers-contrast: more` have answers too.

**Do not add a framework or CSS library.** The page is intentionally dependency
free. A new npm dependency needs a stated reason.

**Icons must be inlined.** The service icons are dark artwork; as `<img>` they
render black on black. They go through `Icon.astro`, which inlines the SVG and
lets `currentColor` tint it.

**The skill wall mixes colour and monochrome on purpose.** Marks whose artwork is
dark on transparency (`aws.png`, `wordpress.png`) carry `.is-mono` and are
inverted, because they would otherwise disappear on the dark tile.

## The contact form

Netlify Forms. The form must keep `data-netlify="true"`, `name="contact-form"`,
the hidden `form-name` input, and the `bot-field` honeypot inside `.hidden`.
Removing any of them silently breaks submissions.

## Deploy

`netlify.toml` sets build `npm run build`, publish `dist`, Node 22. Pushing to
`master` deploys.

## Before you call it done

- `npm run build` succeeds
- the page renders at 1440, 768 and 390 px with no horizontal overflow
- zero console errors, zero failed requests
- `grep form-name dist/index.html` still finds the hidden input
- any new colour pair has a computed contrast ratio of at least 4.5:1 for body
  text, or 3:1 for large text
