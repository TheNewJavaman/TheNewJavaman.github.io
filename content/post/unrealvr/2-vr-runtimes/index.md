---
title: "Why Virtual Reality Runtimes Suck (For Now)"
description: "The current VR driver ecosystem is messy — but that's changing with OpenXR"
date: "2022-05-21"
slug: "2-vr-runtimes"
categories:
    - "UnrealVR"
tags:
    - "vr"
    - "programming"
    - "gaming"
    - "openvr"
    - "openxr"
draft: true
---

OpenVR and OpenXR sound like the same thing, right?

{{< gif "https://i.giphy.com/media/l4pLY0zySvluEvr0c/giphy.webp" >}}

They're very different, and whoever decided to name them similarly needs jail. 

OpenVR is a virtual reality interface that abstracts hardware into easy-to-use components. Released by Valve in 2015, it was the first mainstream effort to consolidate headset support across multiple vendors (Oculus, HTC Vive, etc.). For the most part, it did its job well, cutting development times significantly as game engine programmers no longer felt pressure to develop integrations for each hardware vendor. It works on a three-component basis: the application, which is usually a game, but can also be an overlay; OpenVR itself, acting as a mediator; and the driver, which directs abstract calls like "show this frame" or "is this button pressed" to the headset.

OpenXR is a newer VR interface, released by Khronos (the creators of other open standards like Vulkan, OpenGL, and OpenCL) in 2019. It takes the vision of OpenVR - abstracting hardware calls for virtual reality - and takes it to the extreme, supporting augmented reality, multiple headsets being used by one application at the same time, and most importantly, crazy-good extensibility. Hardware vendors can band together and write so-called "extensions" for new features that are supported by a variety of headsets, or individual vendors can publish their own for proprietary features (for example, the Oculus Quest 2's hand tracking).

That big ol' difference, though, means that developers spend a lot of time configuring features they don't need. Let's put this into perspective. It took me 10 lines of code to initialize OpenVR. (View on GitHub.) For OpenXR? 350! (View on GitHub.) So why are organizations switching over to OpenXR? Despite increased complexity, for the majority of big-name game engines or other VR use-cases, configurability is a good thing. 

{{< gif "https://media0.giphy.com/media/JURyhlNzQdDTPCkaui/giphy.gif?cid=ecf05e471fe3jy3927a4ys87u4em84c6xrpnm0clybuimiqe&rid=giphy.gif&ct=g" "Everyone trynna get a taste of that sweet OpenXR configurability..." >}}

I've been working on adding VR support to existing flatscreen Unreal Engine games and recently made the switch from OpenVR to OpenXR. Why? The latter supports more graphics APIs, more image formats, and more input handlers. Here are some of the pros:

- Better-defined graphics capabilities: the active OpenXR runtime will explicitly tell the application what image formats it prefers (RGBA8 unorm, RGB10A2 unorm, RGBA16 float, ...)

- Extensions: allow vendors to support device-specific capabilities even if the runtime doesn't

- Input handling: the application can register handlers for all sorts of movement, button presses, etc.; it's a very clean system, although I have yet to take full advantage of it (the plan is to support VR controller → keyboard/mouse/gamepad input mapping)

- Unification: every major hardware vendor has announced that they're prioritizing OpenXR support; even SteamVR is slowly leaving OpenVR behind

If you, reader, intend on developing your own OpenXR integration, I would recommend using my code (