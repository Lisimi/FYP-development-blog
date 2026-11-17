---
title: October progress report
description: From our first playable movement prototype to a panda with a personality. A look at gameplay, character art and the challenges still ahead.
date: 2026-11-10
reportingMonth: '2026-10'
authors:
  - li-shimin
  - chau-chi-chung
category: Monthly report
cover: /images/pando-hold.png
coverAlt: Pando holding a bamboo-inspired gun in the Blender motion study
draft: false
---
**Project:** Bamboo Vanguard — Dual-Form Ball Action Game  
**Reporting month:** October 2026  
**Development stage:** Gameplay prototyping and character production  
**Programming:** LI Shimin  
**Character modelling:** Chau Chi Chung

## 1 Progress overview

The work covered by this October update established a playable movement prototype in Unity and a developing panda character in Blender. The main focus was to test the game's distinctive dual-form controls, ball movement and environmental interactions before building the full combat and level progression systems.

The Unity prototype now supports movement, form switching, charging, dashing, collision responses and speed-boost areas. Enemy health and automatic target selection have also been tested in the editor. Character production has progressed from reference drawings and a base model to a connected character mesh, a 37-bone test rig and weapon-holding poses.

Two areas remain in progress: connecting automatic firing and reloading to the gameplay loop, and achieving a convincing panda curl within the target diameter of 1 metre. The current Unity prototype uses temporary Robot and Slime assets; the custom panda has not yet been integrated into the game.

## 2 Design discussions and decisions

The gameplay and art work followed several agreed decisions:

- **Dual-form interaction:** Normal form is intended for automatic shooting, while ball form focuses on movement and collision-based attacks. Basic movement and form switching were prioritised before completing combat.
- **Ball control:** Holding the action button in ball form stops horizontal movement and charges a dash. The joystick adjusts the direction during charging. Releasing the button launches the player, while a short press returns the player to normal form and brakes.
- **Momentum:** After a dash, releasing the joystick preserves rolling speed. Ordinary steering changes direction, while a strong reverse input first decelerates the ball, then accelerates it in the opposite direction at a limited starting speed.
- **Environmental interaction:** Ordinary marked surfaces reflect and slow the ball. Elastic surfaces increase speed, and boost areas launch the ball in a configurable direction. All speed increases remain subject to a common limit.
- **Target selection:** Normal form selects the nearest living target within range that is not blocked by a wall. A nearer blocked target is skipped in favour of a visible one.
- **Character transformation:** The panda must transform by curling the same character mesh and skeleton. The gun moves with the character during the initial curl and is hidden afterwards. A separate replacement ball model is not used.

The art direction uses a stylised panda, a green Chinese-style vest and a bamboo-inspired weapon, with Chinese garden architecture as the environment concept. The standing character is approximately 1.5 metres tall; the curled form has a target diameter of 1 metre.

## 3 Programming progress

**Responsible member: LI Shimin**

### 3.1 Project setup and player controls

A dedicated GameplaySandbox scene was established in Unity 2022.3.53f1 to test mechanics independently of the final map. The player setup separates the physics root, visual model, input handling and camera. Keyboard input supports editor testing, while an on-screen joystick and action button provide the mobile control layout.

The prototype includes top-down camera following, normal movement, normal-to-ball switching, charging and dashing. Dash speed increases with charge duration. During charging, horizontal movement stops while gravity remains active. Returning to normal form clears the dash and brakes the player.

Input cancellation handling has also been implemented for events such as moving off the action button or losing focus. Mobile multi-touch and application interruption behaviour still require device testing.

### 3.2 Animation integration

The temporary Robot model's existing animation clips were reused through a dedicated gameplay Animator Controller. Animation is driven by the player's form and actual movement speed, keeping visual playback separate from the physics logic.

An issue where the robot continued rolling while charging was traced to the rolling state's speed parameter. After binding the RollRate parameter correctly, charging stopped the rolling animation and releasing the dash resumed it. These results were confirmed in editor testing.

### 3.3 Ball collisions and environmental mechanics

Configurable bounce surfaces and boost areas were implemented and tested. Ordinary targets and marked walls reflect the ball with speed loss. Elastic targets apply a speed multiplier, while boost areas use a specified outgoing direction and retain an already higher incoming speed, subject to the overall speed limit.

Collision checks covered frontal and angled impacts, high-speed thin-wall impacts, corners, adjacent collider seams, repeated bounces, combinations of boost and bounce objects, and moving placeholder targets. Editor feedback confirmed normal behaviour in the tested scenarios, including escape from corners and no duplicate speed loss at seams.

Movement was refined after testing showed that a sudden reverse input produced an unwanted wide turning arc. The revised behaviour decelerates along the existing direction before starting in the opposite direction. High speed must then be regained through charging or environmental mechanics.

These tests validate the movement prototype. Ball-impact damage and interactions with fully implemented enemy AI remain separate tasks.

### 3.4 Enemy health and automatic targeting

A Slime model from the RPG Monster DUO PBR Polyart asset pack was configured as a stationary test enemy. A shared health component handles damage and issues a single death notification when health reaches zero. With test values of 100 health and 25 damage per hit, four manual damage applications correctly disabled the target.

Automatic target selection was then added. It filters targets by range, visibility, enabled state and remaining health. Ball form clears the shooting target, and returning to normal form allows selection to resume. The target-selection functionality has been confirmed in editor testing.

### 3.5 Shooting and reloading in progress

A visible straight-projectile component and magazine logic have been written. The projectile follows its launch direction and checks for impacts along its movement path. The magazine uses prototype settings of three rounds and a 1.5-second reload, with unlimited reserve ammunition. Repeated numerical checks verified empty-magazine blocking and a single refill after reloading.

The latest 16 gameplay scripts passed compilation checks under editor and player conditions. However, automatic firing is not yet a completed, integrated gameplay feature. Projectile prefab setup, weapon connection and runtime testing remain, and the reload behaviour when changing into ball form still needs a decision. The agreed rule is that ball form cannot fire new shots, while already fired projectiles continue travelling.

## 4 Character modelling progress

**Responsible member: Chau Chi Chung**

### 4.1 Character design and model refinement

Character design work produced standing reference views, weapon references, size proposals and a sequence showing the intended curling process. An editable Blender base model was then created with the panda body, clothing and a separate bamboo-inspired gun.

Early versions did not match the intended appearance consistently from different angles. Refinement therefore focused on the head profile, facial features, body proportions, limbs and clothing, using front, side, back and angled comparisons. The revised appearance was accepted as the basis for animation preparation.

### 4.2 Topology and rigging

The character mesh was reorganised for deformation. The head and body were connected through the neck, joint loops were rebuilt, and the hands were connected to the arms with articulated fingers. A 37-bone test rig was created with initial weights for the body, clothing and accessories.

Pose studies covered head lowering, elbow and knee bending, finger closing and return to the original standing pose. The current standing height is approximately 1.499 metres, consistent with the intended 1.5-metre scale. Mesh checks recorded no non-manifold edges or isolated vertices, and the tested character vertices had bone weights assigned.

### 4.3 Weapon holding and clothing corrections

The latest motion-study version uses ordinary linear skinning and revised clothing weights. Removing unwanted arm influence from the vest corrected the problem of the vest being pulled open during weapon holding. Local neck adjustments also improved the collar conflict in the tested head-lowering pose.

The existing gun was attached to the right-hand reference point, and preliminary two-handed holding and folding poses were created. The sequence includes holding the gun, folding with it still visible, hiding it after further folding, and restoring it when unfolding. These are discrete pose tests, not a finished continuous animation or final shooting and reloading action set.

![Panda holding its bamboo-inspired gun in the current Blender motion study](</images/pando-hold.png>)

*Figure 1. Current Blender weapon-holding pose with revised clothing weights. The character has not yet been integrated into Unity.*

### 4.4 Curling limitation

The curl is not yet accepted. Testing explored 36 pose configurations involving the head, spine, crouch and arm positions. A compact candidate reached approximately 0.964 metres in bounding-sphere diameter but had obvious intersections. The delivered candidate with less intersection measured approximately 1.188 metres, still above the 1-metre target.

The next revision must improve the spatial relationship between the head, torso, arms and legs while preserving the accepted standing appearance. Meeting the size target alone is insufficient if the body or clothing visibly intersects. Continuous transformation, rolling contact, game-ready mesh optimisation, final materials, FBX export and Unity validation remain unfinished.

![Side view of the current panda curling candidate](</images/pando-curl-study.png>)

*Figure 2. Curling study requiring further revision. This candidate does not meet the 1-metre diameter target and is not an accepted final ball form.*

## 5 Problems and responses

| Problem | Response and present result |
| --- | --- |
| Rolling lost speed after the joystick was released | Revised movement logic to preserve actual rolling speed and used zero-friction test surfaces. Sustained rolling was confirmed in the editor. |
| Sudden reverse input caused a wide turning arc | Added deceleration before reverse acceleration. Movement testing was subsequently confirmed satisfactory. |
| Rolling animation continued during charging | Corrected the Animator state's RollRate binding. Charging now stops rolling playback, and dashing resumes it. |
| Wall seams and repeated impacts could cause incorrect speed responses | Added collision-response checks and ran corner, seam and repeated-impact tests. The tested scenarios behaved as expected. |
| Panda appearance differed between views | Compared the same model from multiple angles and refined the head, body and clothing before continuing rigging. |
| The vest opened during weapon holding | Revised garment weights to remove unwanted arm influence. The tested holding pose improved. |
| A compact curl caused body intersections | Retained the failed configurations as test evidence. Curling remains in progress until both size and visual requirements are met. |

## 6 Individual contributions

| Member | Responsibility and work covered in this update | Main outputs |
| --- | --- | --- |
| LI Shimin | Programming and Unity prototype integration: movement, form control, charging, animation connection, collisions, boost areas, health and targeting; editor configuration, testing and feedback; initial projectile and magazine work | Gameplay scripts, sandbox configuration, test results and updated implementation records |
| Chau Chi Chung | Character modelling: panda design and proportion refinement, Blender model development, topology and rigging preparation, clothing-weight correction, weapon-holding and curling studies | Versioned Blender source models, design references, multi-angle renders and deformation-check records |

The development workflow used AI-assisted code drafting, modelling scripts and documentation. Design decisions, review, Unity configuration and practical testing formed part of the development process. Temporary Robot and Slime assets are identified as third-party test resources rather than original character work.

## 7 Verification and current boundaries

| Area | Status at this update |
| --- | --- |
| Movement, form switching, charging and Robot animation | Core behaviours confirmed in Unity editor testing |
| Bounce surfaces, boost areas and collision combinations | Editor prototype testing confirmed; real-enemy integration still pending |
| Enemy health and target selection | Editor testing confirmed |
| Projectiles and magazine logic | Code and isolated checks completed; integrated firing and reload behaviour pending |
| Panda appearance and hand structure | Accepted as the basis for further pose work |
| Panda holding poses and clothing weights | Revision and pose studies completed; final animation acceptance pending |
| Panda curl and game import | Curl not accepted; FBX and Unity validation pending |
| Android build and device behaviour | Project-specific build and device regression testing pending |

The full gameplay loop is not yet complete. Enemy AI, stealing and returning resources, camp destruction, automatic pipes, Boss progression, results, permanent upgrades and saving remain later development stages.

## 8 Proposed November work plan

The following targets prioritise finishing the current prototypes before expanding the game. Dates are planning targets and depend on the preceding acceptance checks.

| Target date | Owner | Planned work | Completion evidence |
| --- | --- | --- | --- |
| 15 November 2026 | LI Shimin | Decide the reload rule during form changes; connect automatic firing, the projectile prefab and the magazine | Editor recording showing firing, wall interception, damage, empty-magazine reload and form switching |
| 20 November 2026 | LI Shimin | Add ball-impact damage, duplicate-hit prevention, player health and basic combat feedback | Tests distinguishing harmless low-speed contact from valid attacks, with correct health updates |
| 22 November 2026 | Chau Chi Chung | Refine head and torso folding, arm placement and clothing deformation | Multi-angle curl checks meeting the 1-metre target without obvious intersections |
| 27 November 2026 | Chau Chi Chung, with LI Shimin for integration | If the curl is accepted, prepare a continuous transform sequence and a Unity import sample | Import check covering scale, skeleton, animation and gun visibility |
| 30 November 2026 | LI Shimin | Build and test the current prototype on Android; capture gameplay evidence | Device record covering simultaneous joystick and button input, interruption recovery and basic performance |
| 30 November 2026 | LI Shimin and Chau Chi Chung | Review prototype findings and prepare the next development-log update | Updated progress records, unresolved issues and selected screenshots or clips |

Enemy movement and a small camp encounter are the next gameplay priorities after the combat checks pass. Environment model production should follow character-scale validation so that openings, routes and collision spaces can be designed around a tested character.

## 9 Development reflection

The movement prototype showed that controls, collision response and animation need to be tested together. A correct script or successful compilation does not establish that the player feels responsive, and editor success does not establish that mobile input works correctly. The next stage will retain short implementation-and-test cycles and add device evidence.

Character work showed that additional polygon detail alone does not solve appearance or deformation problems. Consistent multi-angle comparison, suitable joint topology and pose testing are needed before final materials and animation polish. The failed curl studies have identified a concrete design problem to resolve before committing the character to the game.

