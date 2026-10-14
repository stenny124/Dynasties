Dynasties — Build v48

Update: dual-colour human units and house-crest-inspired team colours.

- Replaced the human Soldier / Archer / Cavalry masters with the three user-supplied 64×64 sprites, packed into ONE 192×64 atlas to minimise GitHub uploads.
- Independent PRIMARY and SECONDARY colours for human teams in New Game. White Walkers retain their existing single-colour skeletons.
- Soldier and Cavalry: gold pixels belong to primary, red pixels to secondary. Archer: red pixels belong to primary, gold pixels to secondary (following the supplied artworks).
- Seven new crest-inspired swatches: Gold, Crimson, Burgundy, Navy, Forest Green, Silver and Bronze. Existing ten colours still available.
- The Create Map unit selector also offers primary/secondary swatches, with live dual-colour previews. HQs still use the primary team colour.
- Map export/import, local map storage, battle save slots, and team setup carry the secondary palette; old maps and saves default to Gold trim.
- Palette variants are rendered lazily from the master artwork, rather than precomputing thousands of combinations.

Changed files to upload to GitHub (from v47):
- index.html
- service-worker.js
- README.txt
- assets/human_units_dual_colour.png

Upload the contents of this ZIP into the repository root and overwrite matching files. Leave other game assets unchanged.
