Dynasties — Mechanics Build v17

MAIN MENU
- Game now always opens on a main menu.
- Main menu options:
  * Load Game
  * New Game
  * Create Map
- Load Game is disabled when no valid save exists.
- The in-game New Game button has become Menu and returns to the main menu.

NEW GAME / MAP LIBRARY
- New Game opens a map selection screen.
- The built-in Default Grass Map is available.
- Any maps created in Create Map are also listed.
- Selecting a map starts a completely fresh battle on that map.
- The selected map is stored inside the game save so Load Game restores it correctly.

CREATE MAP
- Added the first map-creator foundation.
- Maps can currently be named and saved as 20x20 all-grass maps.
- Created maps are stored locally on the device/browser.
- The map data model already stores 400 tiles plus Stark/Lannister castle coordinates,
  so terrain painting, obstacles, water, forests, roads and castle placement can be
  added next without rebuilding the menu/map-library system.

Gameplay, units, cavalry, AI, recruitment and combat from v16 are otherwise unchanged.
