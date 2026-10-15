Dynasties — Build v49

Main menu: HOUSES
- Added Houses to the main menu, displaying all ten factions and their crests.
- Edit House lets you choose permanent primary and secondary colours and see live Soldier, Archer and Cavalry previews.
- The saved house palettes apply to every map and battle on this browser/device until changed again.
- White Walkers retain their skeleton sprite palette (primary colour only).

Create Map
- Units: choose House and unit type only; no colour options.
- Buildings: choose House and HQ only; no colour options.
- Colours for all units and HQs are inherited from each House's saved settings.
- Each House may belong to only one team/player on a map.
- On a starting map, select a new house and tap an existing HQ to assign the house to that HQ/army.
- Legacy map team IDs and existing .dynmap.json formats remain compatible.

New Game
- Houses come from the selected map and cannot be changed in team setup.
- Team Setup shows each house's saved colours and lets you select ONLY Human or AI.
- Duplicate-house maps are flagged instead of launching a match with the same house twice.

In Battle
- A small version of the correct house crest appears at the bottom-left of each Soldier, Archer and Cavalry.
- House colours determine both unit and HQ appearance.

Compatibility
- Existing save slots, map libraries and map exports remain readable.
- House settings use this device's browser localStorage; importing a map on another device does not transfer the house colour settings.
- No existing graphics have been replaced.

Files changed in this update:
- index.html
- service-worker.js
- README.txt

Deploy: upload these files to the root of your GitHub Pages repository, overwriting the previous copies.
