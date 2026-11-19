---
title: Scene map progress
description: Project's first scene using unity terrain raw. file
date: 2026-11-19
reportingMonth: 2026-11
authors:
  - lam-man-ho
category: Art
cover: /images/mapprogress1.png
coverAlt: Demo routes
draft: false
---


# November 2026 Development Progress Report

## Project Title

**Bamboo Vanguard**

## Monthly Summary

During November 2026, I focused on building the Unity 3D scene and laying out the core terrain structure for the game map. The main goal of this stage was not to finish all gameplay systems, but to establish a playable map skeleton so that character control, enemy spawning, combat, and mission flow can be added later without needing to rebuild the environment.

## Completed Work

### 1. Central Protection Area

The center of the scene has been built as the main area that the player needs to protect. This is the player camp / loot protection zone, and it will be the core location for the first stage of gameplay. The player will need to defend this area while dealing with enemy pressure and resource theft.

### 2. Spiral Mountain Road

A spiral mountain road has been designed from the center of the scene toward the boss area. Instead of using a flat road, the path is shaped as a gradually rising slope so the player can move naturally from the center up to the higher ground near the boss area.

### 3. Boss Area Placement

The boss area is located on the right side of the map, and it is positioned at the highest part of the terrain. This makes the boss zone visually clear and gives the player a strong sense of progress when moving upward through the map.

### 4. Surrounding Mountain Boundary

The outer part of the map is covered by surrounding mountains so that players cannot easily see beyond the terrain boundary. This helps make the scene feel more complete and enclosed, while also improving the overall atmosphere of the level.

### 5. Manual Terrain Construction and Slope Editing

The terrain was built manually, and the smooth slope road was created by editing the original raw heightmap file. The original road was flat, but after modifying the raw file, it now forms a smoother uphill path that allows the player to reach the boss area more naturally.

### 6. Enemy Spawn Planning

I estimate that there will be three enemy spawn points in the final map. At the moment, the most likely placements are:

- on the platform along the slope road
- beside the central area
- near the mid-point of the upward route

These positions should help distribute enemy pressure across the map and make both the center area and the mountain road more active during gameplay.

### 7. Terrain Size

The current terrain settings are:

- Width: 300
- Length: 250
- Height: 600

This size is suitable for the current map layout and leaves enough room for future tuning of slopes, mountain height, and combat space.



---



## Visual Record

### Figure 1: Map Route and Area Planning

This top-down view shows the central area, the circular route, and the main path leading to the boss area on the upper-right side. The red markings indicate the intended movement flow, while A, B, and C mark the currently discussed placement areas.



![image.png](/images/image-8.png)



### Figure 2: 3D Terrain Overview

This image shows the overall 3D terrain shape, including the central zone, the surrounding mountain walls, the right-side high ground, and the uphill road. It is mainly used to check the map proportions, visual depth, and player movement direction.



![image.png](/images/image-9.png)



### Figure 3: Terrain Layer and Material Setup

This screenshot records the terrain layer and material configuration. It will be useful as a reference for future surface blending, including grass, rock, snow, and transition areas.



![image.png](/images/image-10.png)



### Figure 4: Terrain Size Settings

This screenshot shows the current terrain width, length, and height values. It provides a clear reference for the scale of the map.



![image.png](/images/image-11.png)



### Figure 5: Heightmap and Road Editing Result

This image shows the raw heightmap editing result and the final road layout. The outer route, central area, and right-side elevated region now have a clearer height relationship and movement direction.



![image.png](/images/image-12.png)



&nbsp;

---



## Overall Progress

The current work is mainly the foundation of the map structure, including:

- the central defense zone
- the spiral mountain road
- the boss area placement
- the outer mountain boundary
- terrain sizing and layer setup
- heightmap editing and road shaping

This means the project has moved from the concept stage into a stage where the map can already support real gameplay development. The next step is to build on this scene by adding the player character, enemy spawning, combat logic, and mission flow.

## Next Steps

1. Confirm the final positions of the three enemy spawn points.
2. Test whether the path from the central area to the boss area feels smooth and readable.
3. Add basic enemy AI and spawn mechanics.
4. Begin implementing the resource protection, theft, and recovery gameplay loop.
5. Continue refining the terrain edges, road slope, and visible play area.

## Notes

This month’s work focused mainly on the scene structure and terrain design (For my part). The combat system and full level balancing have not been completed yet. However, this version provides a solid base for the future progress report, presentation slides, and interim report.



