DYNasties — Web App Build v1

This folder is ready to upload to any static HTTPS host.

FILES
- index.html                The game
- manifest.webmanifest      Home-screen / PWA metadata
- service-worker.js         Offline caching
- icons/                    iPhone and web-app icons

IPHONE INSTALL
Once this folder is hosted on an HTTPS address:
1. Open the game's web address in Safari on the iPhone.
2. Tap Share.
3. Tap "Add to Home Screen".
4. Launch Dynasties from the new Home Screen icon.
5. Landscape is the intended play orientation.

GITHUB PAGES
1. Create a new GitHub repository.
2. Upload the CONTENTS of this folder to the repository root.
3. In the repository, open Settings > Pages.
4. Set the site to deploy from the main branch / root folder.
5. GitHub will provide the HTTPS game address.

The game automatically saves the current battle in browser storage.
NEW GAME clears that save.
After the first successful online load, the service worker caches the app for offline use.
