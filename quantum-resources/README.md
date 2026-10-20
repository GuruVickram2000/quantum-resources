# Quantum Resources — static website
**Stack:** HTML5, CSS3, Bootstrap 5, vanilla JS, Bootstrap Icons. No build step.
**Run:** open `index.html`, or upload the folder to cPanel `public_html`.
## Before launch (important)
1. Pages load Bootstrap 5.3.3, Bootstrap Icons and Manrope from CDNs (jsdelivr, Google Fonts); fonts fall back to system fonts. For fully local use, put the official Bootstrap files in the placeholder files `css/bootstrap.min.css` and `js/bootstrap.bundle.min.js` and point the two tags in each page head/footer to them.
2. Add images. None are included. Each `<img>` points to a descriptive path under `assets/images/` (e.g. `hero/quantum-industrial-port.jpg`, `logistics/sea-freight.jpg`, `industries/power.jpg`). Drop a licensed photo at that path with the same name; missing images show a navy gradient and log a console warning.
## Edit
- Colors: CSS variables at the top of `css/style.css`.
- Content: edit the HTML pages directly. New page: copy any page, change title/meta, `data-page`, and add to `sitemap.xml` and the navbar/footer in every page.
- Domain in `sitemap.xml` and `robots.txt` is a placeholder; update it.
## Contact form
`js/contact.js` validates only; it sends nothing. Connect later to a PHP mail script, Formspree, or similar by posting the form data in the submit handler.

## Domain
`quantumresources.co.in` in `sitemap.xml`, `robots.txt` and canonical tags is a placeholder. **Replace with production domain before deployment.**
## Images
Full list of required files: `assets/images/IMAGES-NEEDED.txt`.
