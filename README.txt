Dynasties — Build v65 | Family Battlefield Units

PATCH FILES (upload over the existing GitHub Pages repository):
- index.html
- service-worker.js
- README.txt
- portrait_mapping.json
- assets/family_v64/ (the exact unmodified 23 v64 full-size portraits)
- assets/map_units/ (23 corresponding 64×64 sprite PNGs)

CHANGES
1. Original v64 family-tree artwork is preserved, without map-sprite badges or portrait replacement.
2. House Lannister head, spouse and toddler each spawn as individually named soldier-type battlefield units near their HQ. Each living baby born in future rounds is also placed near that HQ when space is available. The Night King appears beside a White Walker HQ as a unique battlefield unit.
3. Every Lannister individual rolls permanent adult potential of ATK 1–6 and DEF 0–5 at creation (stored in family save data). Toddlers: ATK 0, DEF 0; teens: rounded half of their adult potential; adults: full potential. MOV always 4. HP 10, melee range 1.
4. Movement, attacks, terrain, enemy AI targeting and save/load use the existing combat code. Zero-ATK toddlers inflict zero damage; old-age or battlefield deaths remove the associated unit; battle deaths are reflected in succession and the chronicle. Portrait and battlefield sprites change stages when age crosses 10 or 21.
5. Existing v63/v64 saves are supported; living Lannister family members absent from the older unit list spawn upon load (subject to free passable tiles). Dead members do not respawn.
6. Other human houses do not get family trees or family units. White Walkers have their lone, ageless Night King (ATK 6, DEF 5, MOV 4).

NOTES
- This is a patch, not a standalone game. Keep all other game assets already in the repository.
- Space is allocated to family units from nearest walkable, unoccupied tiles to their HQ. If there are no open tiles, new family members will wait for space to free up.
- The 64×64 maps sprites are static idle frames (facing right, flipped to face left in play).
- No new marriage system; only existing adult married couple has children.
