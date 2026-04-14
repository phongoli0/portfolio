# Copilot instructions for this repo

Purpose
- This is a small static portfolio site (HTML/CSS/JS) with an archived PHP mail handler. Changes should preserve the simple, dependency-free front-end and existing integration points.

Big picture
- Front-end: `index.html` (root) and other pages are static files that include scripts from `js/` and styles from `css/`.
- Client-side libraries: this project relies on jQuery and Bootstrap plugins (see `js/jquery.js`, `js/plugins.js`, `css/plugins.css`).
- Contact flow: contact form is handled in `js/contact_me.js` which intentionally triggers a native form POST (not AJAX). An archived PHP handler exists at `archive/phpmail_backup/mail_handler.php` using PHPMailer and reads SMTP credentials from `email_config.php` (see `email_config.default.php`).
 - Contact flow: contact form is handled in `js/contact_me.js` which intentionally triggers a native form POST (not AJAX). An archived PHP handler exists at `archive/phpmail_backup/mail_handler.php` using PHPMailer and reads SMTP credentials from `email_config.php` (see `email_config.default.php`). If you are deploying to Netlify you can instead use Netlify Forms and skip the PHP handler.

Key files to inspect before editing
- `index.html` — entry point and script/style includes.
- `js/contact_me.js` — contact form behavior: client-side validation, disables submit button, then re-enables and performs native submit.
- `js/init.js` and `js/portfolioFilter.js` — page initialization and portfolio filtering logic.
- `css/style.css` and `css/modal.css` — primary styling and modal rules.
- `archive/phpmail_backup/mail_handler.php` and `archive/phpmail_backup/email_config.default.php` — PHP SMTP flow and how credentials are expected.

Project-specific conventions and patterns
- Do not replace the native form submission flow in `js/contact_me.js`. The code intentionally avoids AJAX so simple static hosts (Netlify, GitHub Pages with forms handling) or a PHP backend can receive POSTs.
- Keep the legacy jQuery-based patterns. New JS should not assume module bundlers or ES modules — add plain script files and include them in `index.html` in the same order as existing scripts.
- Client-side validation uses `jqBootstrapValidation` (see `js/jqBootstrapValidation.js`). Maintain compatibility if you modify validation logic.
- PHP mailer: `mail_handler.php` uses PHPMailer with `require_once` relative paths. If moving or refactoring, update these requires and `email_config.php` usage.

Integration and deployment notes
- There is no build system (no `package.json`, webpack, or similar). Deploy by copying the site files to the host.
- If you want to test the contact form against the PHP handler, run it on a PHP-capable server or use `php -S localhost:8000` inside `archive/phpmail_backup` and POST the form to that endpoint.
- SMTP credentials: do not commit real credentials. Use `email_config.default.php` as a template; create `email_config.php` locally with `define('EMAIL_USER', ...)` and `EMAIL_PASS`.

Netlify (current target)
- This repo often deploys to Netlify. If you choose Netlify:
	- Use Netlify Forms instead of the PHP handler. Add `data-netlify="true"` and a form `name` to your form, for example:

```html
<form name="contact" method="POST" data-netlify="true">
	<input type="hidden" name="form-name" value="contact">
	<!-- fields: name, email, subject, message -->
</form>
```

	- `js/contact_me.js` is built around a native submit flow; if you keep it ensure it does not prevent Netlify from receiving the POST. Otherwise remove or disable `js/contact_me.js` and rely on Netlify Forms.
	- Netlify shows submissions in the site admin; to test locally install the Netlify CLI and run `netlify dev` or `npx netlify-cli dev` from the repository root.

Local Netlify testing

```bash
# install once (if needed)
npx netlify-cli install

# start local dev server
npx netlify-cli dev
```

 - If you are using Netlify Forms you can ignore or remove `archive/phpmail_backup` from deployments; keep it only if you plan to host the PHP handler on a separate PHP server.

Debugging tips
- To get SMTP debug output in `mail_handler.php`, set `$mail->SMTPDebug = 2;` (or other integer) and run through a PHP server. Look at `$mail->ErrorInfo` for failures.
- For front-end issues, open the browser console and confirm script load order — jQuery must be loaded before any plugin script.

What to change and what to avoid
- Safe to update styles in `css/` and to add small, plain JS helpers in `js/` (follow existing pattern).
- Avoid converting the front-end to a modern bundler or framework within the same commit; those are large structural changes and should be proposed separately.
- When editing PHP in `archive/`, preserve `require_once` paths and PHPMailer usage unless you also update deployment instructions.

Search examples
- Contact behavior: `js/contact_me.js`
- SMTP handling: `archive/phpmail_backup/mail_handler.php` and `archive/phpmail_backup/email_config.default.php`

Questions
- If any behavior or deployment target is unclear, ask which host (Netlify, GitHub Pages, Apache/PHP) you intend to support before making changes.

Please review and tell me which parts need more detail or examples.
