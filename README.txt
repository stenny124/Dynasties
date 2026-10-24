Dynasties — Build v63

CHANGES
1. Portrait alignment: rebuilt the 20 heads and 20 outfits into a common 320x500 grid with a fixed collar/neck baseline. Removed runtime offsets. Both layers now stay at identical aspect ratio/scale on iPhone. Confirmed a montage of all 20 heads with one outfit and all 20 outfits with one head. Characters keep their existing portrait indices in saves.
2. Night King: White Walkers now have one leader, the Night King, with no family tree, spouse or heirs. His profile uses the White Walker crest rather than a human portrait. Existing saves with older WW families normalize on load. Other houses remain independently generated per battle.
3. iOS installed Home Screen layout: the game and main menu use full screen height in standalone mode, including the region formerly obscured by Safari's URL bar, with lower controls above the Home indicator. Regular Safari behaviour retained.
4. Family tree on small screens fits its available width instead of cropping a second parent or descendants offscreen.

FILES TO UPLOAD
- index.html
- service-worker.js
- README.txt
- assets/commander_parts_v63.png (new)

Keep all other game assets in the repository. The old commander_parts_v62.png can remain but is no longer referenced.
