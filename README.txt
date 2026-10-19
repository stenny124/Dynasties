Dynasties — Build v58

CHANGES
- Villager unit sprite palettes render from a pre-generated 17 x 17 colour atlas (all primary/secondary pairs), removing reliance on Safari canvas recolouring. Supports house-edited colours in battle, recruitment, map editor and Houses previews.
- Service worker cache upgraded to v58; browser requests an update on launch/return from background. v58 assets have unique filenames to avoid stale mobile images.
- Villager harvesting is entirely manual: a Villager must stand directly next to a Forest; tap that tile to chop it once per round for +100 wood. No automatic movement, reassignment or chopping.
- Dragons are restricted to House Targaryen and White Walkers (including editor placement and HQ recruitment).
- Farm construction: select a Villager, choose Build Farm, then tap an empty adjacent grass/snow/desert tile. One farm construction per Villager per round. AI Villagers can also issue individual chop/build orders during AI turns; no passive auto-work remains. Costs 200 gold and 300 wood. The Villager cannot construct if the faction has no gold (including White Walkers).
- Food capacity: each surviving HQ supplies 5 food, and each Farm gives +3. One food supports one living unit of any kind, including Villagers. Human and AI recruitment (and White Walker raising) respect the limit. Existing scenario/map units are never deleted if already above the limit.
- Farms appear on the battle map, block unit landing/pathfinding, are included in Faction Performance, and persist in three save slots. Farm artwork preserves the underlying biome.

FILES TO UPLOAD (from this patch ZIP; overwrite at the repo root)
- index.html
- service-worker.js
- README.txt
- assets/villager_palette_atlas_v58.png (new)
- assets/farm_tile_v58.png (new)

Keep all other existing assets in GitHub. Do not delete old files.
