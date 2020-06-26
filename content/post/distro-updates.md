---
title: "Distro Updates"
date: 2020-06-25T21:09:59-04:00
categories:
- Tech
- Distros
keywords:
- distro
- linux
- tech
- distrohopping
---
As if it wasn\'t already abundantly clear that I have too much time on my hands, I did some distrohopping today.

## What is distrohopping?

For the uninitiated, distrohopping is the practice of jumping between Linux distributions (or \"distros\") because... well, because you can, I suppose. (I want to write a longer post about distrohopping, so keep an eye out for that!)

## Well, what did you switch to?

Without further ado:

* On my laptop, I\'m using [**Fedora 32 KDE**](https://spins.fedoraproject.org/kde/). At this point, a lot of my distrohopping is between Fedora and openSUSE anyway, and I wanted to give the KDE version of this distro another chance--I haven\'t tried it since version 32 was in beta!
* On my secondary PC/server, I\'m using [**CentOS 8 Stream**](https://www.centos.org/stream/). Since I was using Fedora on my main machine, it made sense (to me, at least) to use CentOS, a very closely related distro, for my server work. In the future, I\'m planning on trying to containerize services using [Podman](https://podman.io/) and seeing how much I can get away with on that front.

Overall, the installations and setup went pretty smoothly. One thing that I did notice was that my usual practice of symlinking config files out of a special dir in my home folder did not fly on Fedora--the files would not be read unless I `cp`\'ed them to the correct location. I\'m tempted to blame SELinux for this, but I\'m not entirely sure of the root cause. Now to wait for Plasma 5.19 (though that doesn\'t seem to be coming until Fedora 33...)

Let\'s see how long this lasts before I end up hopping again. Any bets?
