Dynasties — Mechanics Build v28

WARGROOVE AUTOTILING
- Replaced v26's random terrain-variant approach with neighbour-aware autotiling.
- Sea uses 16 exact coastline configurations extracted from the uploaded Wargroove beach tileset.
- The visual tile is selected from its N/E/S/W sea neighbours.
- Painting or erasing sea automatically recalculates the changed tile and its adjacent tiles.
- Mountains now use the same neighbour mask to choose connected Wargroove mountain pieces.
- Grass uses 25 deterministic variants from the uploaded Wargroove plains tileset.
- Forest trees are now layered over Wargroove grass so their ground colour matches the new plains art.
- The same autotiling is used in Create Map and in playable maps.

Gameplay terrain rules remain unchanged from v25:
- Grass: cost 1.
- Forest: foot cost 2, cavalry cost 3.
- Mountain: foot cost 2, cavalry impassable.
- Sea: impassable.

Save slots and .dynmap.json map files retain the same format for compatibility.
