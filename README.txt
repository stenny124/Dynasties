DYNASTIES — BUILD v52

AI NAVIGATION FIX
- Added a full-map weighted route planner for each AI unit type.
- Routes account for mountains, coastlines, water, terrain costs, and solid HQs.
- AI units will now follow legal detours through gaps and around obstacles,
  even when doing so temporarily increases straight-line distance to opponents.
- Short-range movement still respects occupied tiles; global routes treat friendly
  units as temporarily movable so a blocked tile does not make the whole army
  believe its objective is unreachable.
- Front-line units move before units behind to reduce chokepoint traffic jams.
- Cached route maps are reset for each AI team turn and when a target is destroyed.
- Truly disconnected areas remain unreachable for land units, as intended;
  naval or transport gameplay has not been added.
- No artwork, maps, saves, factions or balance statistics changed.

PATCH FILES:
- index.html
- service-worker.js
- README.txt

INSTALLATION
Replace the above three files at the root of your existing GitHub Pages repo.
Your existing assets/ directory and saved maps should remain untouched.
