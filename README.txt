Dynasties — Mechanics Build v25

TERRAIN MOVEMENT
- Grass: cost 1 movement for all units.
- Forest: cost 2 movement for Soldiers/Archers and 3 movement for Cavalry.
- Mountain: cost 2 movement for Soldiers/Archers; Cavalry cannot enter.
- Sea: impassable to all units.
- Player and AI pathfinding both use the same terrain costs.
- Actual remaining MOV now deducts the true terrain cost for every tile entered.
- Recruitment spawn selection respects the recruited unit's terrain access.
- Map-editor starting-unit placement follows the same terrain restrictions.

FOREST ART
- Rebuilt terrain_forest.png as a 64×64 tile using the supplied pixel trees over the exact game grass base.
- Trees are contained inside each tile instead of being cut off at the tile boundaries, so repeated forest tiles form a clean regular pattern.

MAP LIBRARY
- Added Delete beside Edit and Export for every created/imported map.
- Deletion requires confirmation.

Save slots and .dynmap.json import/export remain compatible with v24.
