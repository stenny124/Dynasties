Dynasties — Build v44

NEW IN v44
- Added the exact supplied 64×64 crests for House Arryn, House Baratheon,
  House Greyjoy, House Lannister, House Martell, House Stark, House Targaryen,
  House Tully, House Tyrell, and the White Walkers.
- Replaced the old Lannister, Stark and White Walker crests in the existing
  New Game setup, game header, and Faction Performance views.
- All ten factions are selectable in New Game and the Create Map house selector.
- New houses currently use the existing human unit sprites with team-colour
  palette swaps. White Walkers retain their skeleton sprites.
- Up to eight player teams can still be included in one match.
- To keep uploads low, all 10 crests are preserved pixel-for-pixel in a single
  assets/faction_crests_atlas.png sprite sheet (5×2, each crest 64×64).
- Existing .dynmap imports, custom maps, save slots and unit stats remain intact.

PATCH CONTENTS (v43 -> v44)
- index.html (overwrite)
- service-worker.js (overwrite)
- README.txt (overwrite)
- assets/faction_crests_atlas.png (new)

Deploy: Extract this patch ZIP and upload its CONTENTS to your GitHub Pages
repository root, preserving the assets/ directory. Do not upload the enclosing
patch folder. Existing faction sprite and crest images need not be deleted.
