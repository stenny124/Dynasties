Dynasties — Build v39

EDITOR UPDATES
- Moved the Terrain / Units / Buildings toolbar below map width/height controls.
  Palette appears below the toolbar instead of overlapping the size fields.
- Buildings: a single HQ choice, then a colour choice (10 available colours).
- Units: Soldier / Archer / Cavalry -> species (Lannister, Stark, White Walkers)
  -> team colour; final ready-to-place preview before painting.
- Colour groups units/HQs into teams, using up to eight team slots. Existing team colours can be reused to add troops to the same team.
- Custom maps store team species + colours in the map itself; these are carried
  through map export/import and applied when starting a New Game from that map. Those map-specific settings override matching slots in the New Game setup.
- Old maps without this data continue to load using existing team setup.
- All mechanics, movements, save slots, and original sprites remain unchanged.

PATCH CONTENTS (v38 -> v39)
- index.html (overwrite)
- service-worker.js (overwrite)
- README.txt (overwrite)

Deploy: extract the ZIP and upload the files into the GitHub Pages repo root.
