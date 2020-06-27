---
title: "Containers"
date: 2020-06-27T16:42:10-04:00
categories:
- Tech
- Introspection
- People
keywords:
- containers
- blog
- podman
- mind
---
I just finished containerizing this site[^1], and it had me thinking.

[^1]: For the nerds here wondering what kind of container I\'m using: It\'s a custom OCI image based on the [Nginx Docker image](https://hub.docker.com/_/nginx), [running on Podman on my personal server](/2020/06/distro-updates/).

In the systems administration world, a *container* is a small virtual environment that can be used to run a program or service. These little things are made using templates called *images*. There are a few advantages to this model:

* Containers are pretty easy to create.
* They\'re also easy and clean to delete.
* They\'re more isolated than just running on *bare metal*, i.e. the machine itself.
* They use less resources and consequently have better performance than a *virtual machine*, which is a full-blown virtual system with an OS and everything.

So what was I thinking about? Well, I wondered if a similar approach could be used for our minds. I had heard of mental compartmentalization before, but what was it really?

The first place I looked was Wikipedia, and that wasn\'t particularly encouraging. \"Compartmentalization is a subconscious psychological defense mechanism used to avoid cognitive dissonance, or the mental discomfort and anxiety caused by a person\'s having conflicting values, cognitions, emotions, beliefs, etc. within themselves,\" read the article, and I was a bit disappointed--I had hoped there would be some positive uses for it. But all hope was not lost. As I kept browsing the interwebs, I discovered how compartmentalizing our thoughts, putting them into separate containers, had its uses. By preventing stuff from one part of our lives from bleeding over into another, we could be more efficient with our limited energy and get more done while living healthily overall. Sounds great, right?

Of course, this isn\'t entirely perfect. There are some things that you probably don\'t want to compartmentalize--keeping your morals, for instance, in an isolated container isn\'t a good idea. But for separating disparate parts of life, compartmentalization sounds pretty good! Maybe I should try it. Then again, one of the parts of my personality that I probably won\'t be able to keep from breaching my mental containers is my laziness...

(UPDATE: As soon as I pushed this post, the whole site stopped working. Looks like file permissions got borked.)
