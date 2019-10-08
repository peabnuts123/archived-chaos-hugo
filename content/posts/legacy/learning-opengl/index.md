+++
title = "Learning OpenGL (2012)"
date = 2019-10-09T07:26:46+13:00
type = "post"
tags = ["Java", "Graphics", "Procedural"]
# Optional
draft = true
heroImage = "hue_circle.jpeg"
heroImageAlt = "Screenshot of a circle coloured to all the different hues around the edge. Source code visible in the background"
disclaimer = ""
+++

In University I took a paper on Computer Graphics which covered OpenGL as well as some 2D image filtering concepts. After I finished the paper I started to prod OpenGL in my own time.

The image above is the first test I ran. I did it in LWJGL which is a Gaming Library for Java that exposes OpenGL’s raw functions pretty directly. I made it generate the top layer of the HSL colour space.

<!--more-->

![Screenshot of a 3D scene with 3 coloured cubes casting shadows. Source code visible in the background]({{% resourceRel "shadow_volumes.png" %}})

Since I had already studied OpenGL in a basic form I was able to pick it up pretty fast. For my second project I implemented Shadow Volumes. They sucked! (a volume per object, which meant overlaid shadows. I tried for a long time to render them as one but I never figured it out…) but it was very satisfying to create such a basic building block of computer graphics by hand.

![Screenshot of a 3D scene with scattered gray blocks on an orange floor]({{% resourceRel "city_blocks.png" %}})

This was a while after the other two OpenGL tests. I decided to revisit something I’d tried to do a long time ago in a language called DarkBasic, in which I created a pile of randomly scaled buildings across a plane to create “random cities”.

The main difference for this project, obviously, was that I would be doing all the graphical programming myself. This was also the first time I had implemented a WASD-type flying camera in OpenGL which was tricky to think about at first.

![Screenshot of a 3D scene with scattered gray blocks with lighting and a sky backdrop. Smaller cubes can be seen littering the ground]({{% resourceRel "city_lit.png" %}})

I then enhanced the project, adding lighting to the scene, a “skybox” and miscellaneous detail objects scattered across the ground. It ran pretty poorly, there were no performance tweaks, it straight up rendered the entire scene all the time, haha 😬

![Screenshot of 3D scene looking downward at scattered gray blocks with a cursor arrow shape in the middle]({{% resourceRel "city_rts.png" %}})

The last thing I did to this project was turn it into an realtime-strategy type thing because, well, why not? I added a cursor (which is kind of hard to see in the picture but it’s near the center), which was a hand-drawn polygon (i.e. I typed the coordinates into the code myself) that mapped to the mouse position. This was my first time rendering 2D graphics at the same time as 3D Graphics.

I also took out the WASD flying camera and replaced it with a traditional RTS mouse-scroll movement 👍
