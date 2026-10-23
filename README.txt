Dynasties — Build v62

CHANGES
- Adds character portraits to the in-battle Family Trees screen. All 20 heads and all 20 outfits from the user's source artwork are independently usable, allowing 400 head/outfit pairings.
- Source sheets were cleaned by connected-component extraction, not naive 5x4 cropping. Transparent head/outfit layers have standardised frames and outfit-specific neck offsets to preserve the approved natural fit.
- The parts are packaged in one lossless PNG atlas for minimal GitHub uploads. CSS renders both layers directly (works even without canvas on mobile); optional canvas recolouring targets the original red primary and gold secondary outfit colours using house palette settings, preserving neutral gear where possible.
- New games assign head/outfit combinations to each generated character, saved along with the battle family. Old saves without portrait choices are assigned repeatable portraits from character IDs without changing their names or relationships.
- Infants/young children under 12 retain a crest display because the supplied 20 heads are adults. White Walker portraits are currently cold-tinted human commander art until dedicated undead portraits are available.
- No births, deaths, ageing, succession or tactical rule changes in v62.

FILES TO UPLOAD (overwrite at repository root):
- index.html
- service-worker.js
- README.txt
- assets/commander_parts_v62.png (new)

Keep all other existing GitHub files unchanged. Do not delete your save slots.
