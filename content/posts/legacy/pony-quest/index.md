+++
title = "Pony Quest: A 2D Platformer (2012)"
date = 2019-10-09T07:56:24+13:00
type = "post"
tags = ["Java", "Game dev", "Legacy posts"]
# Optional
heroImage = "in-game.png"
heroImageAlt = "Screenshot of an incredibly basic 2D game with a pony character standing on the ground. The word 'Test' is written using blocks"
disclaimer = "This post was originally written sometime between 2012-2014."
+++

Pony Quest is a 2D platformer game project that I was working on for a few years starting while I was at University. I spent so much time on it because, well, when I started I knew nothing about anything. The whole project was rewritten twice to incorporate improved design foundations.

This screenshot in particular is very important to me; it demonstrates a stable object collision system I designed and implemented (you can see the character standing on the blocks). It took me at least six months to work out all the bugs in the system. I have a write-up about it I will be posting here soon after I’ve finished making all these project posts. This picture took a lot of work to get and I’ve never been more proud of a duller picture.

<!--more-->

![Screenshot of a visual editor application. To the left is a grid of blocks and a pony character. To the right are controls for editing the blocks such as 'Select' and 'Generate']({{% resourceRel "in-editor.png" %}})

Early on in development I started co-developing a level-editor for the game. It worked pretty well, allowing you to design and export your own maps for use in the game.

The editor is written entirely in pure Java, which is quite an achievement if you’ve ever written GUIs using Java. It also implemented some kind of custom renderer to run the preview Panel which was displaying the game, or at least something that looked like it.
