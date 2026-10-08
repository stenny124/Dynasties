Dynasties — Mechanics Build v22

SAVE GAME
- Replaced the old single/autosave system with three explicit save slots.
- Added Save Game to the in-game action bar.
- Saving opens Slot 1 / Slot 2 / Slot 3 and allows overwriting an existing slot.
- Main-menu Load Game now opens the same three slots.
- Save-slot cards show map name, turn number and saved date/time.
- New Game no longer deletes existing saves.
- Menu no longer silently overwrites a save.
- A valid v21 single save is migrated into Slot 1 when possible.

SEA TILE FIX
- Sea editor tiles now use blue background and blue grid-edge colours.
- Playable sea tiles use the same blue edge treatment.
- This removes the green grass-coloured dots/seams at tile corners.

CROSS-DEVICE NOTE
- Created maps and save slots remain browser-local in this build.
- GitHub Pages is a static host, so the same URL does not automatically share
  localStorage between laptop and phone.
