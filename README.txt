Dynasties — Mechanics Build v24

IMPORT / EXPORT
- Exports now download as `<map-name>.dynmap.json` using standard JSON MIME type.
- Removed the restrictive file-picker `accept` filter, so iPhone/iOS Files can select both new JSON exports and older `.dynmap` files.
- Import validation accepts grass, sea, forest and mountain terrain.

MAP EDITOR
- Restored reliable press-and-drag terrain painting on desktop and touch.
- Drag painting is handled at the viewport level so pointer capture/pan/zoom no longer interrupts painting.
- Added Forest terrain.
- Added Mountain terrain.
- Forest and Mountain backgrounds were adjusted to match the current grass base colour and avoid obvious tile seams.
- Mountain and Sea are impassable in battle and cannot contain units.
- Forest remains passable for now.
- HQs still require a 2x2 grass footprint.
