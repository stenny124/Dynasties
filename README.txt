Dynasties — Build v51

WHAT CHANGED
- Expanded playable/editor team slots from 8 to 20. Legacy 'player', 'enemy' and team3–team8 identifiers are preserved.
- Because there are currently ten houses, Create Map now supports several independent teams sharing the same house. Each team has its own HQ, army and turn, but shares that house's saved colours, crest and unit style.
- Create Map → Buildings or Units now has a TEAM selector below HOUSE. Pick an existing Team number or "+ New team" to add another team of that house.
- New Game automatically recognises all HQ teams present on the map, up to 20, and gives each its own Human/AI control.
- HQ stone/walls now use the primary house colour. The central and smaller turret roofs use the secondary house colour. House crest remains visible.
- Fixed vertical bridge rendering using the exact supplied vertical bridge sprite embedded directly in index.html, so it no longer requires a separate asset to be uploaded.
- Made the service-worker installation tolerant of optional or missing legacy image files instead of failing the entire cache install.
- Existing maps and save slots retain their previous side identifiers.

CHANGED FILES IN THIS PATCH
- index.html
- service-worker.js
- README.txt

INSTALLATION
Overwrite those three files in the ROOT of your existing GitHub Pages repository. No new image uploads required.
