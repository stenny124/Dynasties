Dynasties — Build v50

WHAT CHANGED
- Any HQ, including original Team 1/Team 2 HQs, can now be removed in Create Map.
- A map needs at least two HQs but no longer needs any starting units.
- Removed forced starting-army creation. Battles can begin with HQs only; players recruit their first units.
- Team assignments come from actual HQs on the map, including non-consecutive saved team slots.
- HQs now have 20 HP and 2 defence. Tap an enemy HQ to inspect its health and attack it with a unit in range.
- Destroying a faction's HQ eliminates that faction and its remaining soldiers. A faction with zero soldiers stays alive while its HQ survives.
- AI targets enemy HQs as well as enemy units and can recruit from an empty starting army.
- HQs now use BOTH of the house's saved colours: primary for main trim, secondary for highlight trim.
- HQs display the house's official crest, including in the map editor.
- HQ colour generation loads the master art once and recolours synchronously from house settings. This also fixes the mobile fallback to red.
- Save slots store current HQ health and exact participating team slots. Older saves load with full-health HQs.

CHANGED FILES IN THIS PATCH
- index.html
- service-worker.js
- README.txt

INSTALLATION
Upload these three files into the ROOT of the existing GitHub Pages repository, replacing their older versions. Leave the current assets folder untouched. A cache-version bump in service-worker.js refreshes index.html when the game next loads.

NOTES
- HQs still occupy 1 tile wide by 2 tiles tall.
- For existing maps, all current saved houses/colours and tiles are retained.
- The two-colour HQ sprite uses the existing hq_master.png; no new sprite assets are needed.
