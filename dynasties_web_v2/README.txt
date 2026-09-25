DYNasties v0.2 — GitHub Pages update

WHAT CHANGED
- Reworked the previously patched-looking terrain using the original natural map as the base.
- Each house now starts with ONE character and 300 florins.
- Both houses gain 100 florins at the start of each new numbered turn.
- One Barracks per house.
- Basic Soldier costs 300 florins.
- One recruit per Barracks per turn.
- Newly recruited soldiers can act from the next turn.
- Enemy AI also recruits when it has 300 florins.
- Saves are stored locally on the device.
- iPhone landscape controls remain enabled.

HOW TO UPDATE YOUR EXISTING GITHUB PAGES GAME
Replace the old repository files with the CONTENTS of this folder.

The repository root should contain:
  index.html
  manifest.webmanifest
  service-worker.js
  assets/
  icons/

After committing the changes, GitHub Pages normally republishes automatically.

IMPORTANT FOR YOUR IPHONE
Because v0.1 used offline caching, after GitHub says the site has redeployed:
1. Open the game URL in Safari.
2. Refresh the page once.
3. If the Home Screen version still shows the old game, close it completely and reopen it.
4. If necessary, remove the old Home Screen icon and add the site to Home Screen again.

v0.2 uses a network-first page update strategy to make later updates easier.
