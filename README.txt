Dynasties — Mechanics Build v29

Terrain visual refinement:
- Sea is now pure open water rather than using beach/coast sprites.
- Out-of-bounds space counts as sea when calculating sea adjacency, so island maps
  can run cleanly to the edge without generating false coastline around the border.
- Grass / forest / mountain tiles next to sea receive only a thin rocky cliff lip.
- Beach graphics are deliberately not used; Beach will be added later as its own
  selectable terrain type.
- Mountains with all four cardinal neighbours occupied by mountains use a snowy peak.
- Mountains with 0–2 mountain neighbours use fuller peak sprites to reduce the
  half-mountain artefacts seen at grass/sea boundaries.
- Terrain movement rules and map save/import compatibility are unchanged.
