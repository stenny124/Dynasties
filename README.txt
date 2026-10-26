Dynasties — Build v64 (revised with aligned map-unit sprites)

CHANGES
1. House Lannister keeps the v64 living family tree system: new battles begin with exactly three characters (house head, spouse and one toddler), all ageing three months per round with births, old-age deaths, succession and save/load persistence.
2. The 23 supplied full-size family portrait PNGs remain in assets/family_v64 and still drive the family tree/profile artwork.
3. A matching 23-file 64x64 sprite set has been added in assets/map_units. Filenames mirror the portrait filenames exactly.
4. The family tree now shows a small aligned map-unit sprite badge on each character card, and the character profile panel shows both the portrait art and the corresponding 64x64 map sprite.
5. No combat mechanics, unit balance, or other houses’ dynasty systems were changed. White Walkers still only use the Night King and do not get a family tree.

FILES TO UPLOAD
- index.html (replacement)
- service-worker.js (replacement; updated cache name)
- README.txt (replacement)
- portrait_mapping.json (new helper file)
- assets/family_v64/*.png (23 portrait files; unchanged set from the previous v64 patch)
- assets/map_units/*.png (23 NEW aligned 64x64 map unit sprites)

INSTALL
Extract the ZIP and upload the files/folders into your existing Dynasties repository, replacing files where prompted. Keep all other existing assets in place.

NOTES
- The new 64x64 sprites are kept in their own asset directory and do not replace the portrait images.
- This revision uses the supplied preview sheet and portrait-to-sprite filename mapping.
- Existing v63/v64 saves should continue to load; new battles still start with the three-person Lannister household.
