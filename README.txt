Dynasties — Build v57

New Villager unit
- Costs 100 gold; HP 10; ATK 0 (cannot attack); DEF 0; MOV 2.
- Available in New Game HQ recruitment and Create Map unit placement.
- A villager can be assigned to forest within a 3-tile Manhattan work radius: select villager, tap a highlighted Forest tile.
- Chops one forest per faction turn for 100 wood added to faction reserves.
- Chopped forest becomes a stump and preserves the underlying grass/snow/desert; automatically regrows after five full rounds.
- Villagers with an active work order continue harvesting another eligible forest within their work radius each turn. Moving the Villager cancels the order. When no forest remains, they stop.
- Human and AI villagers use the same work/regen logic; AI Villagers assigned near forests work automatically.
- Wood appears in active-team HUD and Faction Performance.
- Save slots preserve current wood, forest stumps, regrowth timers and work orders.
- White Walkers do not purchase villagers with gold; a Villager resurrection credit is required (only from deaths of Villagers), consistent with the undead recruiting system.

Files in this patch (replace/update at repo root):
index.html
service-worker.js
README.txt
assets/villager_master.png (new)
assets/forest_stump.png (new)


v57 changes
- Villagers now recolour with their house palette.
- Villagers must stand on a tile adjacent to a forest to chop it.
- If assigned a forest within three tiles but not adjacent, they keep the work order and auto-move on their next turn to an adjacent chopping position when possible.
- The chopped-forest sprite now uses the supplied art style, with biome-aware grass/snow/desert variants so the background matches the underlying terrain.

Files in this patch (replace/update at repo root):
index.html
service-worker.js
README.txt
assets/forest_stump_grass.png (new)
assets/forest_stump_snow.png (new)
assets/forest_stump_desert.png (new)
