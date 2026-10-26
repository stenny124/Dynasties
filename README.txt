Dynasties — Build v66 | Night King scale + Exit Autosave

CHANGES
1. Night King is no longer styled as a toddler. Only Lannister characters aged 0–9 use the smaller on-map toddler sizing. The Night King returns to normal battlefield size.
2. Selecting Battle Menu > Main Menu triggers an autosave BEFORE returning to the home screen.
3. The autosave is stored under its own named save key (dynasties-save-slot-v1-auto); none of manual Slots 1, 2 or 3 is overwritten.
4. The main menu's Load Game button now shows an Autosave entry above manual Slots 1–3. It can resume a battle even if no manual save slots are used.
5. The autosave includes the existing save snapshot: map, units, teams, turn, HQs, and family tree records.
6. If saving to device storage fails, the game remains on the Battle Menu and tells you to make a manual save.

UNMODIFIED
- Lannister portraits and the 64x64 battlefield map sprites.
- Toddler, teen and adult combat stats, MOV 4 and all gameplay mechanics.
- Manual save/load slots and map editor data.

INSTALL
Extract the ZIP and upload its contents to the existing GitHub Pages repository, replacing matching files. Keep other existing game assets. Updated index.html and service-worker.js are included. You may need to refresh/reopen your iPhone Home Screen app to pick up the new service-worker cache.

NOTE
The autosave is made when you click Main Menu from the Battle Menu. It does not replace explicit manual saves, and it is stored locally in the browser/device, not across devices.
