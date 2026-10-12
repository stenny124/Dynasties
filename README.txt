DYNASTIES — BUILD v38
=====================

Latest version: v38 (12 October 2026)

WHAT CHANGED IN v38
- Match setup: select 2–8 teams with the + Add Team button. Each can independently use Lannister, Stark or White Walker artwork; choose its own colour and Human/AI controller.
- Two new colour palettes: White and Black (10 colours in total).
- Extra teams take turns in order, recruit at their own HQ and can be played by humans or AI. Teams with no surviving units are eliminated; last army standing wins.
- Standardised HQ graphic: replaced the old Winterfell and Casterly Rock gameplay images with the supplied generic HQ artwork. HQs use team palette swapping and retain a 2×2 footprint.
- Create Map: new Buildings category using the supplied toolbar icon. HQ placement is moved from Units to Buildings. Units and HQs can be assigned to any of the eight team slots.
- Melee and ranged units briefly lunge toward their target and return when they attack. Skip AI fast-forwards the animation.
- Older two-team maps and save slots can still be loaded. Extra team HQs and a starting Soldier are automatically placed on a new battle map if that map does not already provide them (needs available grass space).

CHANGED FILES (v37 → v38)
- index.html
- service-worker.js
- README.txt
- assets/hq_master.png (new)
- assets/toolbar_buildings.png (new)

UPGRADE
Unzip the v38 PATCH ZIP and upload/overwrite only those files at the root of your GitHub Pages repository. Preserve the assets/ folder paths. No other existing files need changing or deleting.

SAVE NOTES
- Battle saves: three local browser save slots. Map library remains local to each device unless exported/imported.
- Large maps or maps without enough free grass may not support 8 HQs; resize or adjust the map as necessary.
