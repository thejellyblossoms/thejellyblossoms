# The Jellyblossoms — website v9 (Formspree integrated)

Includes all files from v8, with the Contact page wired to Formspree form `mvkkzzge`.

## Contact form
- The Name, Email and Message fields are enabled and required.
- `contact.html` posts to `https://formspree.io/f/mvkkzzge`.
- `contact.js` submits asynchronously and displays success/error feedback without navigating away.
- Without JavaScript, the native HTML form POST is still available.
- **Not yet live-tested:** verify the form in Formspree (including any email activation) and send a real test message once hosted.
- The form endpoint is public by design; no secrets are included.

## Remaining launch items
- Replace any pending Listen / Buy items with verified destination links after release.
- Check mobile presentation, form handling, and final links on the deployed site.
- Configure GitHub Pages, Porkbun domain, and HTTPS.
