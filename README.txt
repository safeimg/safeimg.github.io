SafeIMG static website
======================

This is a plain static website. It does not use React, Next.js, npm, a database,
or a build process.

Option 1: open index.html directly in a browser.

Option 2: serve the folder with any static web server, for example:

  python3 -m http.server 8000

Then visit:

  http://localhost:8000

Main files:

  index.html   Page structure and text
  styles.css   Visual design and responsive layout
  script.js    Taxonomy gallery, lightbox, and leaderboard interactions
  assets/      Paper figures and visual assets
  cases/       Benchmark case-study images

Update the final Paper, Dataset, and Code URLs in index.html when they become
available. To add category images, add files under cases/ and update the
categories array at the top of script.js.
