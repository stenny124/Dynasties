Dynasties — Build v45

Changes from v44:
- Every HQ now occupies exactly 1 tile wide by 2 tiles tall (previously 2x2).
- HQs can be placed on grass, snow or desert; their two underlying ground tiles remain unchanged.
- Forest and Mountain are now visual overlays on grass, snow or desert.
- Paint snow/desert first and then forest/mountain; or repaint snow/desert underneath existing features.
- The Terrain tab has a Clear trees/rocks brush to remove an overlay while retaining the biome.
- The game, editor, mini-map, imports and exports recognise the combined terrain types.
- Snow/Desert ground costs 2 MOV. Forest and Mountain retain their own costs (the higher cost applies, so foot units can still enter snowy forests).
- Existing legacy grass-based Forest/Mountain maps continue working.
- Existing maps/saves are not deleted; the new HQ footprint takes effect when opened.

Files included in this patch (copy into repository root, preserving assets/ folder):
- index.html
- service-worker.js
- README.txt
- assets/terrain_forest_overlay.png  (transparent tree overlay)
- assets/wg_mountain_snow_peak.png (transparent mountain overlay)
