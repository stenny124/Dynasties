DYNASTIES — BUILD v53

MOBILE HQ COLOUR FIX
- HQ artwork now renders from a pre-generated 17×17 palette atlas rather than
  relying on Safari to recolour the original red-roof master image at runtime.
- Every supported house primary/secondary combination is included in ONE PNG.
- Main battle HQs, Create Map HQs, the Buildings selector and the bottom info
  portrait all draw the appropriate colour pair from the same atlas.
- Stone walls are primary; turret roofs are secondary; the house crest stays
  overlaid separately and is unchanged.
- Addresses the red-roof fallback reported on iPhone without changing desktop
  appearance, save formats, map formats or gameplay.
- Uses the same palette ramp and source pixel mappings as the desktop renderer.

PATCH FILES
- index.html
- service-worker.js
- README.txt
- assets/hq_palette_atlas_v53.png

INSTALLATION
Upload/overwrite the above files in your existing GitHub Pages repository.
Put the new PNG in the existing assets/ folder. Do not delete other assets.
On iPhone, close/reopen the page after deployment; if it remains stale, reload
so the v53 service worker can take control.
